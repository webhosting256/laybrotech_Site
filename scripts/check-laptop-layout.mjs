// Build first. Run with Playwright installed, or pass its index.mjs as argument 1.
import assert from 'node:assert/strict';
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { pathToFileURL } from 'node:url';

const { chromium } = await import(process.argv[2] ? pathToFileURL(path.resolve(process.argv[2])).href : 'playwright');
const output = path.join(os.tmpdir(), 'laybrotech-laptop-qa');
await fs.mkdir(output, { recursive: true });
const dist = path.resolve('dist');
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml' };
const server = http.createServer(async (req, res) => {
  try {
    const requested = path.resolve(dist, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (!requested.startsWith(dist + path.sep) && requested !== dist) { res.writeHead(403).end(); return; }
    const file = path.extname(requested) ? requested : path.join(dist, 'index.html');
    const contents = await fs.readFile(file);
    res.setHeader('Content-Type', mime[path.extname(file)] ?? 'application/octet-stream');
    res.end(contents);
  } catch { res.writeHead(404).end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const routes = process.env.LAYOUT_STORY_ONLY ? ['/software-development'] : process.env.LAYOUT_INTERACTIONS_ONLY ? [] : ['/', '/hosting', '/website-design', '/software-development', '/digital-marketing', '/projects', '/projects/agnes-apea', '/domain-registration', '/business-email', '/blog', '/contact', '/explore-more', ...(process.env.LAYOUT_HERO_ONLY ? ['/blog/category/web-design'] : ['/design-system'])];
const viewports = process.env.LAYOUT_STORY_ONLY
  ? [[1024, 480], [1024, 600], [1024, 768], [1280, 600], [1280, 720], [1366, 650], [1366, 768], [1440, 650], [1440, 900], [1920, 600], [1920, 1080]].map(([width, height]) => ({ width, height }))
  : (process.env.LAYOUT_WIDTHS?.split(',').map(Number) ?? [1024, 1280, 1366, 1440, 1920, 390]).map(width => ({ width, height: width === 390 ? 844 : width === 1920 ? 1080 : 768 }));
const results = [];
const failures = [];
try {
  for (const { width, height } of viewports) {
    const page = await browser.newPage({ viewport: { width, height } });
    // Keep checks local; no requests to production databases or embedded maps.
    await page.route('**/*', route => {
      const url = new URL(route.request().url());
      if (url.origin === base) return route.continue();
      if (process.env.LAYOUT_HERO_ONLY && url.pathname.startsWith('/rest/v1/') && route.request().method() === 'GET') {
        return route.fulfill({ contentType: 'application/json', body: '[]' });
      }
      return route.abort();
    });
    for (const route of routes) {
      try {
        await page.goto(base + route);
        await page.locator('main').first().waitFor();
        if (process.env.LAYOUT_HERO_ONLY) await page.locator('main [class~="min-h-[100vh]"]').first().waitFor({ timeout: 20000 });
        await page.waitForTimeout(250);
        const metrics = await page.evaluate(() => {
          const h1 = [...document.querySelectorAll('h1')].find(el => !el.closest('[aria-hidden="true"]'));
          const header = document.querySelector('header');
          const headerRect = header.getBoundingClientRect();
          const controls = [...header.querySelectorAll('a, button')].filter(el => el.checkVisibility() && el.getBoundingClientRect().width);
          return {
            rootFont: parseFloat(getComputedStyle(document.documentElement).fontSize),
            heroFont: h1 ? parseFloat(getComputedStyle(h1).fontSize) : null,
            overflow: document.documentElement.scrollWidth > window.innerWidth,
            clippedHeader: controls.some(el => { const r = el.getBoundingClientRect(); return r.left < 0 || r.right > innerWidth || r.bottom > headerRect.bottom + 1 && !el.closest('[role="menu"], [aria-label="Mobile navigation"]'); }),
          };
        });
        assert.equal(metrics.overflow, false, 'horizontal page overflow');
        assert.equal(metrics.clippedHeader, false, 'header controls exceed header bounds');
        assert.equal(metrics.rootFont, width < 1024 || width > 1440 ? 16 : width <= 1280 ? 13 : 14);
        if (width >= 1024 && width <= 1440 && metrics.heroFont) assert(metrics.heroFont >= 36 && metrics.heroFont <= 42);

        if (process.env.LAYOUT_HERO_ONLY) {
          const hero = page.locator('main [class~="min-h-[100vh]"]').first();
          assert(await hero.count() > 0, 'page hero uses 100vh');
          assert(await hero.evaluate(el => Math.abs(parseFloat(getComputedStyle(el).minHeight) - innerHeight) < 1), 'hero minimum height equals viewport height');
          assert(await hero.evaluate(el => el.getBoundingClientRect().height >= innerHeight - 1), 'hero fills the viewport');
          results.push({ width, height, route, ...metrics });
          continue;
        }

        // Scroll into every section without disabling reveal animations.
        const sections = page.locator('main > section');
        for (let i = 0; i < await sections.count(); i++) {
          const section = sections.nth(i);
          await section.evaluate(el => window.scrollTo(0, window.scrollY + el.getBoundingClientRect().top - 100));
          await page.waitForTimeout(40);
          await page.waitForFunction(el => !el.classList.contains('scroll-reveal') || el.classList.contains('is-visible'), await section.elementHandle(), { timeout: 2000 });
        }
        if (route === '/software-development') {
          const industries = page.locator('section[aria-label="Industries We Build For"]');
          assert.equal(await industries.evaluate(el => getComputedStyle(el).opacity), '1');
          assert.equal(await industries.locator('.scroll-reveal, .scroll-reveal-item').count(), 0, 'pinned story must retain control of its own visibility');
          const pinned = industries.locator('.sticky');
          if (width >= 1024) assert.equal(await pinned.count(), 1, 'laptop story must stay pinned regardless of viewport height');
          if (await pinned.count()) {
            const steps = process.env.LAYOUT_STORY_ONLY ? [0, 1, 2, 3, 4, 3, 2, 1, 0] : [0, 1, 2, 3, 4];
            for (const index of steps) {
              const fraction = (index + 0.5) / 5;
              await industries.evaluate((el, fraction) => {
                const frame = el.querySelector('.sticky');
                window.scrollTo(0, window.scrollY + el.getBoundingClientRect().top - parseFloat(getComputedStyle(frame).top) + (el.offsetHeight - frame.offsetHeight) * fraction);
              }, fraction);
              await page.waitForTimeout(600);
              const visible = pinned.locator('article[aria-hidden="false"]');
              assert.equal(await visible.count(), 1);
              assert((await visible.innerText()).startsWith(`${String(index + 1).padStart(2, '0')} / 05`), 'industry order follows scroll progress');
              assert(await visible.evaluate(el => el.checkVisibility({ opacityProperty: true, visibilityProperty: true })), 'active industry text is invisible');
              assert(await visible.evaluate(el => { const r = el.getBoundingClientRect(); const frame = el.closest('.sticky').getBoundingClientRect(); return r.top >= frame.top - 1 && r.bottom <= frame.bottom + 1; }), 'industry text exceeds pinned frame');
              assert(await pinned.evaluate(el => Math.abs(el.getBoundingClientRect().top - parseFloat(getComputedStyle(el).top)) < 2), 'story frame moves while advancing panels');
            }
            if (process.env.LAYOUT_STORY_ONLY) {
              await industries.evaluate(el => window.scrollTo(0, window.scrollY + el.getBoundingClientRect().bottom));
              await page.waitForTimeout(100);
              assert(await pinned.evaluate(el => el.getBoundingClientRect().bottom <= 1), 'page resumes scrolling after the fifth panel');
            }
          }
          await industries.evaluate(el => window.scrollTo(0, window.scrollY + el.getBoundingClientRect().top - 80));
          await page.waitForTimeout(1100);
          await page.screenshot({ path: path.join(output, `software-industries-${width}x${height}.png`) });
        }
        if (['/', '/hosting', '/website-design', '/contact'].includes(route)) {
          await page.evaluate(() => window.scrollTo(0, 0));
          await page.waitForTimeout(1800);
          await page.screenshot({ path: path.join(output, `${route.slice(1) || 'home'}-${width}.png`) });
        }
        results.push({ width, height, route, ...metrics });
      } catch (error) { failures.push({ width, height, route, error: error.message }); }
    }
    if (!process.env.LAYOUT_STORY_ONLY && !process.env.LAYOUT_HERO_ONLY && width >= 1024 && width <= 1440) {
      try {
        await page.goto(base + '/software-development');
        const services = page.locator('header button[aria-haspopup], header button').filter({ hasText: 'Services' }).first();
        await services.focus();
        await services.press('ArrowDown');
        assert.equal(await services.getAttribute('aria-expanded'), 'true', 'Services keyboard menu opens');
        await page.keyboard.press('Escape');
        assert.equal(await services.getAttribute('aria-expanded'), 'false', 'Services menu closes with Escape');
        const tabs = page.getByRole('tab');
        await tabs.nth(1).click();
        assert.equal(await tabs.nth(1).getAttribute('aria-selected'), 'true', 'software tab becomes selected');
        assert.equal(await tabs.nth(0).getAttribute('aria-selected'), 'false');
        const question = page.locator('section[aria-labelledby="faq-heading"] button').nth(1);
        await question.click();
        assert.equal(await question.getAttribute('aria-expanded'), 'true', 'FAQ opens');
        await question.click();
        assert.equal(await question.getAttribute('aria-expanded'), 'false');

        await page.goto(base);
        await page.getByRole('button', { name: 'Show slide 2', exact: true }).click();
        assert.equal(await page.getByRole('button', { name: 'Show slide 2', exact: true }).getAttribute('aria-current'), 'true');
        await page.getByRole('button', { name: 'Read full testimonial from Amos', exact: true }).click();
        await page.getByRole('dialog').waitFor();
        await page.keyboard.press('Escape');
        assert.equal(await page.getByRole('dialog').count(), 0);

        await page.goto(base + '/contact');
        await page.getByRole('button', { name: 'Send Inquiry', exact: true }).click();
        assert(await page.locator('[aria-invalid="true"]').count() > 0, 'contact validation must remain active');
        const cta = page.locator('section[aria-labelledby="final-cta-heading"]');
        assert.equal(await cta.getByRole('link').count(), 1);
        assert.match(await cta.getByRole('link').getAttribute('href'), /^https:\/\/wa.me\//);
        results.push({ width, route: 'interactive checks', passed: true });
      } catch (error) { failures.push({ width, route: 'interactive checks', error: error.message }); }
    }
    console.log(`Checked ${width}x${height}`);
    await page.close();
  }
} finally {
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}
await fs.writeFile(path.join(output, 'results.json'), JSON.stringify({ results, failures }, null, 2));
console.log(JSON.stringify({ passed: results.length, failures, output }, null, 2));
if (failures.length) process.exitCode = 1;

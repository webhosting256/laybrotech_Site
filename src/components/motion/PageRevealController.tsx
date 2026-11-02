import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const sectionSelector = 'main > section, main > article, main [data-scroll-reveal]';
const revealItemSelector = ':scope > div [class~="grid"] > *, :scope > div [class*="lg:grid"] > *';
const directions = ['up', 'left', 'right'] as const;
const skipSelector = '[data-scroll-reveal-skip="true"], [data-no-reveal]';

type RevealDirection = (typeof directions)[number];

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function setRevealDirection(element: HTMLElement, direction: RevealDirection) {
  element.classList.add('scroll-reveal', `scroll-reveal--${direction}`);
}

function getItemDirection(element: HTMLElement): RevealDirection {
  const rect = element.getBoundingClientRect();
  const center = rect.left + rect.width / 2;

  if (rect.width > window.innerWidth * 0.72) return 'up';
  return center < window.innerWidth / 2 ? 'left' : 'right';
}

function revealImmediately(element: HTMLElement) {
  element.classList.add('is-visible');
}

export function PageRevealController() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/admin')) return;

    const main = document.querySelector('main');
    if (!main) return;

    const root = main;
    const reducedMotion = prefersReducedMotion();
    const observed = new WeakSet<HTMLElement>();
    const observer = reducedMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer?.unobserve(entry.target);
              }
            });
          },
          // A percentage threshold can never be reached by sections taller than the viewport.
          { rootMargin: '0px 0px -48px 0px', threshold: 0 },
        );

    function register(element: HTMLElement, direction: RevealDirection, delay = 0) {
      if (observed.has(element) || element.closest(skipSelector)) return;

      observed.add(element);
      setRevealDirection(element, direction);
      element.style.setProperty('--reveal-delay', `${delay}ms`);

      if (reducedMotion) {
        revealImmediately(element);
        return;
      }

      observer?.observe(element);
    }

    function registerPageElements() {
      const sections = Array.from(root.querySelectorAll<HTMLElement>(sectionSelector));

      sections.forEach((section, sectionIndex) => {
        if (section.closest(skipSelector)) return;

        const sectionDirection = section.dataset.scrollReveal as RevealDirection | undefined;
        register(section, sectionDirection ?? directions[sectionIndex % directions.length], 120);

        const items = Array.from(section.querySelectorAll<HTMLElement>(revealItemSelector));
        items.slice(0, 12).forEach((item, itemIndex) => {
          if (item.closest(skipSelector)) return;
          item.classList.add('scroll-reveal-item');
          register(item, getItemDirection(item), Math.min(180 + itemIndex * 120, 660));
        });
      });
    }

    const frame = window.requestAnimationFrame(registerPageElements);
    const mutationObserver = new MutationObserver(registerPageElements);
    mutationObserver.observe(root, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return (
    <style>{`
      .scroll-reveal,
      .scroll-reveal-item {
        opacity: 0;
        transform: translate3d(var(--reveal-x, 0), var(--reveal-y, 1.75rem), 0);
        transition:
          opacity 820ms cubic-bezier(0.22, 1, 0.36, 1),
          transform 980ms cubic-bezier(0.22, 1, 0.36, 1);
        transition-delay: var(--reveal-delay, 0ms);
        will-change: opacity, transform;
      }

      .scroll-reveal--left {
        --reveal-x: -2.2rem;
        --reveal-y: 0.45rem;
      }

      .scroll-reveal--right {
        --reveal-x: 2.2rem;
        --reveal-y: 0.45rem;
      }

      .scroll-reveal--up {
        --reveal-x: 0;
        --reveal-y: 1.85rem;
      }

      .scroll-reveal.is-visible,
      .scroll-reveal-item.is-visible {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }

      @media (prefers-reduced-motion: reduce) {
        .scroll-reveal,
        .scroll-reveal-item {
          opacity: 1;
          transform: none;
          transition: none;
          will-change: auto;
        }
      }
    `}</style>
  );
}



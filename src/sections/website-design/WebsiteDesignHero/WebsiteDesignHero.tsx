import { ArrowRight, Check } from 'lucide-react';

import heroImage from '@/assets/images/website-design-hero-banner.webp';
import { ButtonLink } from '@/components/ui/Button';
import { whatsappHref } from '@/lib/contact';

const heroPoints = ['Mobile Responsive', 'SEO-Ready Structure', 'Conversion-Focused Design'];

export function WebsiteDesignHero() {
  return (
    <section className="relative isolate min-h-[100vh] overflow-hidden bg-[#171717]" aria-labelledby="website-design-hero-heading">
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[68%_center]"
        src={heroImage}
        alt="African business professionals reviewing a website design on a laptop in a modern office."
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,8,8,0.98)_0%,rgba(8,8,8,0.90)_46%,rgba(8,8,8,0.72)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(8,8,8,0.82)_0%,rgba(8,8,8,0.28)_52%,rgba(8,8,8,0.64)_100%)]" />

      <div className="mx-auto flex min-h-[100vh] w-full max-w-container items-center px-6 py-20 sm:px-8 lg:px-16">
        <div className="max-w-[49rem]">
          <p className="type-eyebrow">Website Design</p>
          <h1 id="website-design-hero-heading" className="mt-5 text-[2.45rem] font-semibold leading-[1.08] text-[#fffaf5] sm:text-[3.35rem] lg:text-[4.15rem]">
            Professional Websites Built to Grow Your Business.
          </h1>
          <p className="mt-6 max-w-[43rem] text-base leading-8 text-[#f1e8df] sm:text-lg">
            Laybrotech designs modern, responsive websites that strengthen your brand, build customer trust, and turn online visitors into real business opportunities.
          </p>

          <ul className="mt-7 flex flex-col gap-3 text-sm font-semibold text-[#fffaf5] sm:flex-row sm:flex-wrap sm:gap-x-5" aria-label="Website design highlights">
            {heroPoints.map((point) => (
              <li className="flex items-center gap-2.5" key={point}>
                <Check className="mt-0.5 size-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink className="h-12 w-full text-[#fff] sm:h-14 sm:w-auto" href={whatsappHref} rightIcon={<ArrowRight />} size="lg">
              Start Your Project
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}


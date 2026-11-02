import { ArrowRight, Check } from 'lucide-react';

import hostingHeroImage from '@/assets/images/home-hero-hosting.webp';
import { ButtonLink } from '@/components/ui/Button';

const heroPoints = ['Free SSL Certificate', 'Reliable Uptime', 'Local Technical Support'];

export function HostingHero() {
  return (
    <section className="relative isolate min-h-[100vh] overflow-hidden bg-[#171717]" aria-labelledby="hosting-hero-heading">
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]"
        src={hostingHeroImage}
        alt="Technology professional working near server infrastructure in a modern office."
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,8,8,0.98)_0%,rgba(8,8,8,0.90)_46%,rgba(8,8,8,0.72)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(8,8,8,0.82)_0%,rgba(8,8,8,0.28)_52%,rgba(8,8,8,0.64)_100%)]" />

      <div className="mx-auto flex min-h-[100vh] w-full max-w-container items-center px-6 py-20 sm:px-8 lg:px-16">
        <div className="max-w-[48rem]">
          <p className="type-eyebrow">Web Hosting</p>
          <h1 id="hosting-hero-heading" className="mt-5 text-[2.45rem] font-semibold leading-[1.08] text-[#fffaf5] sm:text-[3.35rem] lg:text-[4.15rem]">
            Fast, Secure & Reliable Web Hosting in Uganda.
          </h1>
          <p className="mt-6 max-w-[43rem] text-base leading-8 text-[#f1e8df] sm:text-lg">
            Host your website on fast, secure infrastructure with SSL protection, dependable uptime, professional support, and everything your business needs to stay online and grow.
          </p>

          <ul className="mt-7 flex flex-col gap-3 text-sm font-semibold text-[#fffaf5] sm:flex-row sm:flex-wrap sm:gap-x-5" aria-label="Hosting highlights">
            {heroPoints.map((point) => (
              <li className="flex items-center gap-2.5" key={point}>
                <Check className="mt-0.5 size-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink className="h-12 w-full text-[#fff] sm:h-14 sm:w-auto" href="#hosting-plans" rightIcon={<ArrowRight />} size="lg">
              View Hosting Plans
            </ButtonLink>
            <ButtonLink
              className="h-12 w-full border-2 border-white/90 !bg-transparent !text-white hover:border-white hover:!bg-white/10 hover:!text-white sm:h-14 sm:w-auto"
              href="/contact"
              variant="secondary"
              size="lg"
            >
              Talk to an Expert
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}



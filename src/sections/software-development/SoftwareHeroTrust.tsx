import { ArrowRight, Check, Code2, Headphones, Layers3, ServerCog, ShieldCheck } from 'lucide-react';

import softwarePhoto from '@/assets/images/software-development-hero-banner.webp';
import { ButtonLink } from '@/components/ui/Button';

const heroPoints = ['Custom-Built Solutions', 'Secure & Scalable Systems', 'Business Process Automation', 'Professional Support'];
const trustItems = [
  { label: 'Custom Built', Icon: Code2 },
  { label: 'Secure Development', Icon: ShieldCheck },
  { label: 'Scalable Architecture', Icon: Layers3 },
  { label: 'Modern Technologies', Icon: ServerCog },
  { label: 'Ongoing Support', Icon: Headphones },
];

export function SoftwareDevelopmentHero() {
  return (
    <section className="relative isolate min-h-[100vh] overflow-hidden bg-[#171717]" aria-labelledby="software-development-hero-heading">
      <img className="absolute inset-0 -z-20 h-full w-full object-cover object-[68%_center]" src={softwarePhoto} alt="Software development team collaborating on a digital product in a modern office." fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,8,8,0.98)_0%,rgba(8,8,8,0.90)_46%,rgba(8,8,8,0.72)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(8,8,8,0.82)_0%,rgba(8,8,8,0.28)_52%,rgba(8,8,8,0.64)_100%)]" />

      <div className="mx-auto flex min-h-[100vh] w-full max-w-container items-center px-6 py-20 sm:px-8 lg:px-16">
        <div className="max-w-[52rem]">
          <p className="type-eyebrow">Software Solutions</p>
          <h1 id="software-development-hero-heading" className="mt-5 text-[2.45rem] font-semibold leading-[1.08] text-[#fffaf5] sm:text-[3.35rem] lg:text-[4.15rem]">
            Custom Software Development for Modern Businesses.
          </h1>
          <p className="mt-6 max-w-[44rem] text-base leading-8 text-[#f1e8df] sm:text-lg">
            Laybrotech develops secure, scalable, and user-friendly software solutions that help businesses automate operations, improve efficiency, and grow digitally.
          </p>
          <p className="mt-3 max-w-[42rem] text-base leading-8 text-[#eadfd6] sm:text-lg">
            From business systems to custom platforms, we build software around the way your organisation actually works.
          </p>
          <ul className="mt-7 flex flex-col gap-3 text-sm font-semibold text-[#fffaf5] sm:flex-row sm:flex-wrap sm:gap-x-5" aria-label="Software development highlights">
            {heroPoints.map((point) => (
              <li className="flex items-center gap-2.5" key={point}>
                <Check className="mt-0.5 size-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink className="h-12 w-full text-[#fff] sm:h-14 sm:w-auto" href="/contact" rightIcon={<ArrowRight />} size="lg">
              Start Your Software Project
            </ButtonLink>
            <ButtonLink className="h-12 w-full border-2 border-white/90 !bg-transparent !text-white hover:border-white hover:!bg-white/10 hover:!text-white sm:h-14 sm:w-auto" href="/contact" variant="secondary" size="lg">
              Talk to a Developer
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SoftwareTrustBar() {
  return (
    <section className="relative z-10 -mt-12 px-5 sm:px-6" aria-label="Software development benefits">
      <div className="mx-auto w-full max-w-container overflow-hidden rounded-[1.35rem] border border-[#e5e1dc] bg-white shadow-[0_18px_42px_rgb(23_23_23/0.12)]">
        <div className="grid grid-cols-2 gap-0 lg:grid-cols-5">
          {trustItems.map(({ label, Icon }, index) => (
            <div className="flex min-h-[7.25rem] flex-col items-start justify-center gap-3 border-[#e5e1dc] px-5 py-5 lg:min-h-0 lg:flex-row lg:items-center lg:justify-start lg:border-r lg:px-6 lg:last:border-r-0" key={label}>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-control bg-[#fbfaf7] text-[#f25a05]"><Icon className="size-5" aria-hidden="true" /></span>
              <span className="text-sm font-bold leading-5 text-[#18181b]">{label}</span>
              {index < trustItems.length - 1 ? <span className="ml-auto hidden h-10 w-px bg-[#e5e1dc] lg:block" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

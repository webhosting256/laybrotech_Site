import { ArrowRight, Check } from 'lucide-react';
import { whatsappHref } from '@/lib/contact';

import websiteDesignGraphic from '@/assets/Web design.webp';

const benefits = ['Mobile Responsive', 'Conversion Focused', 'Search Ready'];

export function DesignedToPerform() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:py-28" aria-labelledby="designed-to-perform-heading">
      <div className="mx-auto w-full max-w-container overflow-hidden rounded-[1.75rem] bg-[#fbf3ed] px-6 py-12 sm:px-8 sm:py-14 lg:px-16 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.41fr_0.59fr] lg:gap-14 xl:gap-16">
          <div>
            <p className="type-eyebrow">Designed to Perform</p>
            <h2 id="designed-to-perform-heading" className="mt-5 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.05rem]">
              A Website Should Do More Than Look Good.
            </h2>
            <p className="mt-6 max-w-[32rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
              Your website should communicate your value, build trust, work beautifully across devices, and guide visitors toward taking action.
            </p>

            <ul className="mt-9 flex flex-col gap-3 text-[0.95rem] font-bold text-[#18181b] sm:flex-row sm:flex-wrap sm:gap-x-6" aria-label="Website design performance benefits">
              {benefits.map((benefit) => (
                <li className="flex items-center gap-2.5" key={benefit}>
                  <Check className="size-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>

            <a className="group mt-10 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#f25a05] transition-colors duration-smooth hover:text-[#d94f04]" href={whatsappHref}>
              Start Your Project
              <ArrowRight className="size-4 transition-transform duration-smooth group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

          <div className="relative isolate flex min-h-[24rem] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#f25a05] px-5 py-8 sm:px-8 lg:min-h-[33rem] lg:px-9" aria-hidden="true">
            <span className="absolute inset-x-10 top-10 h-24 rounded-full bg-white/16 blur-3xl" />
            <span className="absolute -bottom-20 -right-12 size-60 rounded-full bg-[#1d130f]/18 blur-3xl" />
            <div className="relative z-10 mx-auto w-full max-w-[48rem] overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_44px_rgb(23_23_23/0.16)]">
              <img
                className="w-full object-contain object-center"
                src={websiteDesignGraphic}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

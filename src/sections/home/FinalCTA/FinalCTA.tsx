import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type FinalCTAProps = {
  heading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showSecondary?: boolean;
};

export function FinalCTA({
  heading = 'Ready to Build, Host, or Grow Your Business Online?',
  primaryLabel = 'Get Started',
  primaryHref = '/contact',
  secondaryLabel = 'Talk to Sales',
  secondaryHref = '/contact',
  showSecondary = true,
}: FinalCTAProps) {
  return (
    <section className="relative z-10 bg-transparent px-5 pb-16 pt-4 sm:px-6 sm:pb-20 lg:pb-28" aria-labelledby="final-cta-heading">
      <div className="mx-auto flex min-h-[300px] w-full max-w-[77.5rem] items-center justify-center overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,#171717_0%,#3f1d0d_52%,#b84608_84%,#e95508_118%)] px-6 py-14 sm:min-h-[320px] sm:px-10 sm:py-16 lg:min-h-[340px] lg:px-16 lg:py-[4.5rem]">
        <div className="mx-auto flex max-w-[48rem] flex-col items-center text-center">
          <h2 id="final-cta-heading" className="text-[2rem] font-semibold leading-tight text-[#fffaf5] sm:text-[2.45rem] lg:text-[2.85rem]">
            {heading}
          </h2>

          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Link
              className="group inline-flex items-center justify-center gap-2 rounded-button bg-white px-6 py-4 text-sm font-bold text-[#18181b] transition-colors duration-smooth hover:bg-[#fff4ed]"
              to={primaryHref}
            >
              {primaryLabel}
              <ArrowRight className="size-4 transition-transform duration-smooth group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            {showSecondary && <Link
              className="group inline-flex items-center justify-center gap-2 rounded-button border border-white/42 bg-white/0 px-6 py-4 text-sm font-bold text-[#fffaf5] transition-colors duration-smooth hover:bg-white/10"
              to={secondaryHref}
            >
              {secondaryLabel}
              <ArrowRight className="size-4 transition-transform duration-smooth group-hover:translate-x-1" aria-hidden="true" />
            </Link>}
          </div>
        </div>
      </div>
    </section>
  );
}

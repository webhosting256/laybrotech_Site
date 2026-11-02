import { BrandLogoMarquee } from './BrandLogoMarquee';
import { brandLogoRowOne, brandLogoRowTwo } from './brandLogoData';

export function BrandLogos() {
  return (
    <section className="overflow-hidden bg-white pb-8 pt-12 sm:pb-10 sm:pt-14 lg:pb-12 lg:pt-16" aria-labelledby="brand-logos-heading">
      <style>{`
        @keyframes brand-logo-marquee-left {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes brand-logo-marquee-right {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }

        .brand-logo-marquee {
          overflow: hidden;
          width: 100vw;
        }

        .brand-logo-marquee__track {
          animation: brand-logo-marquee-left var(--brand-logo-duration) linear infinite;
          will-change: transform;
        }

        .brand-logo-marquee__track--reverse {
          animation-name: brand-logo-marquee-right;
        }

        .brand-logo-marquee__track--offset {
          margin-left: -72px;
        }

        .brand-logo-marquee:hover .brand-logo-marquee__track {
          animation-play-state: paused;
        }

        @media (min-width: 640px) {
          .brand-logo-marquee__track--offset {
            margin-left: -176px;
          }
        }

        @media (min-width: 1024px) {
          .brand-logo-marquee__track--offset {
            margin-left: -320px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-logo-marquee {
            overflow-x: auto;
            scrollbar-width: thin;
          }

          .brand-logo-marquee__track,
          .brand-logo-marquee__track--reverse {
            animation: none;
            transform: none;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-container px-5 text-center sm:px-6">
        <p className="type-eyebrow">Trusted by Businesses</p>
        <h2 id="brand-logos-heading" className="mx-auto mt-3 max-w-[42rem] text-[1.8rem] font-semibold leading-tight text-[#18181b] sm:text-[2.15rem] lg:text-[2.45rem]">
          Trusted by Businesses and Organisations.
        </h2>
      </div>

      <div className="relative left-1/2 mt-9 w-screen -translate-x-1/2 sm:mt-10 lg:mt-12" data-no-reveal>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-16" />
        <BrandLogoMarquee logos={brandLogoRowOne} direction="left" duration="240s" />
        <div className="mt-3 sm:mt-4">
          <BrandLogoMarquee logos={brandLogoRowTwo} direction="right" duration="220s" offset />
        </div>
      </div>
    </section>
  );
}



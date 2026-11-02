import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BriefcaseBusiness, Building2, Check, Cloud, Database, HeartPulse, Layers3, MonitorSmartphone, Network, Rocket, School, Smartphone, Sparkles, UsersRound, Workflow, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

import modernTechnologyImage from '@/assets/Modern Technology.webp';
import businessImage from '@/assets/BUSINESSES & COMPANIES.webp';
import financeImage from '@/assets/FINANCIAL & SERVICE PROVIDERS.webp';
import healthcareImage from '@/assets/HEALTHCARE FACILITIES.webp';
import ngoImage from '@/assets/NGOs & ORGANISATIONS.webp';
import schoolImage from '@/assets/SCHOOLS & EDUCATIONAL INSTITUTIONS.webp';
import { cn } from '@/lib/cn';
import { PortfolioMarquee } from '@/sections/home/ProjectsShowcase/PortfolioMarquee';
import { portfolioRowOneProjects, portfolioRowTwoProjects } from '@/sections/home/ProjectsShowcase/projectData';

type Industry = {
  id: string;
  index: string;
  name: string;
  label: string;
  Icon: typeof Building2;
  title: string;
  copy: string;
  points: string[];
  image: string;
  alt: string;
  objectPosition: string;
};

const industries: Industry[] = [
  {
    id: 'businesses',
    index: '01 / 05',
    name: 'Businesses & Companies',
    label: 'BUSINESSES & COMPANIES',
    Icon: BriefcaseBusiness,
    title: 'Systems That Keep Business Operations Moving.',
    copy: 'Build software to manage teams, customers, inventory, finances, reporting, and internal workflows from a more connected environment.',
    points: ['Operational workflows', 'Customer management', 'Inventory & reporting'],
    image: businessImage,
    alt: 'Business team working around digital operations and customer workflows.',
    objectPosition: 'center',
  },
  {
    id: 'schools',
    index: '02 / 05',
    name: 'Schools & Educational Institutions',
    label: 'SCHOOLS & EDUCATIONAL INSTITUTIONS',
    Icon: School,
    title: 'Digital Systems for Modern School Management.',
    copy: 'Simplify academic and administrative work with systems built around students, fees, results, attendance, admissions, and communication.',
    points: ['Student & parent portals', 'Academic management', 'Fees & administration'],
    image: schoolImage,
    alt: 'Education technology workspace representing school administration systems.',
    objectPosition: 'center',
  },
  {
    id: 'ngos',
    index: '03 / 05',
    name: 'NGOs & Organisations',
    label: 'NGOs & ORGANISATIONS',
    Icon: UsersRound,
    title: 'Technology for Programmes, Teams and Reporting.',
    copy: 'Create practical systems that improve programme management, reporting, communication, records, and organisational workflows.',
    points: ['Programme management', 'Reporting workflows', 'Internal collaboration'],
    image: ngoImage,
    alt: 'Organisation website visual representing programmes, teams, and reporting workflows.',
    objectPosition: 'center',
  },
  {
    id: 'healthcare',
    index: '04 / 05',
    name: 'Healthcare Facilities',
    label: 'HEALTHCARE FACILITIES',
    Icon: HeartPulse,
    title: 'Better Systems for Healthcare Operations.',
    copy: 'Support appointments, records, internal processes, staff workflows, and service delivery with software designed around healthcare operations.',
    points: ['Appointment workflows', 'Digital records', 'Operational management'],
    image: healthcareImage,
    alt: 'Healthcare service visual representing operational and records workflows.',
    objectPosition: 'center 40%',
  },
  {
    id: 'finance',
    index: '05 / 05',
    name: 'Financial & Service Providers',
    label: 'FINANCIAL & SERVICE PROVIDERS',
    Icon: Building2,
    title: 'Secure Systems for Service Delivery.',
    copy: 'Develop software for customer management, transactions, service operations, internal workflows, and reporting.',
    points: ['Client portals', 'Transaction workflows', 'Service operations'],
    image: financeImage,
    alt: 'Service and transaction visual representing customer and payment workflows.',
    objectPosition: 'center',
  },
];

function usePinnedIndustryStory() {
  const [isPinnedMode, setIsPinnedMode] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');

    function updateMode() {
      setIsPinnedMode(query.matches);
    }

    updateMode();
    query.addEventListener('change', updateMode);

    return () => query.removeEventListener('change', updateMode);
  }, []);

  return isPinnedMode;
}

export function SoftwareIndustries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const wrapperRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const isPinnedMode = usePinnedIndustryStory();

  useEffect(() => {
    if (!isPinnedMode) {
      activeIndexRef.current = 0;
      setActiveIndex(0);
      return undefined;
    }

    let animationFrame = 0;

    function calculateActiveStory() {
      animationFrame = 0;

      const wrapper = wrapperRef.current;
      const frame = frameRef.current;

      if (!wrapper || !frame) {
        return;
      }

      const stickyTop = Number.parseFloat(window.getComputedStyle(frame).top) || 0;
      const scrollDistance = Math.max(wrapper.offsetHeight - frame.offsetHeight, 1);
      const travelled = Math.min(Math.max(stickyTop - wrapper.getBoundingClientRect().top, 0), scrollDistance);
      const progress = travelled / scrollDistance;
      const nextIndex = Math.min(industries.length - 1, Math.floor(progress * industries.length));

      if (nextIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }
    }

    function requestCalculation() {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(calculateActiveStory);
      }
    }

    calculateActiveStory();
    window.addEventListener('scroll', requestCalculation, { passive: true });
    window.addEventListener('resize', requestCalculation);

    return () => {
      window.removeEventListener('scroll', requestCalculation);
      window.removeEventListener('resize', requestCalculation);

      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [isPinnedMode]);

  return (
    <section
      ref={wrapperRef}
      className={cn('software-industry-story bg-[#fbf7f2]', isPinnedMode ? 'relative h-[calc(100svh-5rem+410vh)]' : 'px-5 py-20 sm:px-6 sm:py-24 lg:py-28')}
      aria-label="Industries We Build For"
      data-no-reveal
    >
      {isPinnedMode ? (
        <div ref={frameRef} className="industry-story-frame sticky top-20 flex h-[calc(100svh-5rem)] items-center overflow-hidden px-6 py-8">
          <div className="mx-auto grid w-full max-w-container items-center gap-14 lg:grid-cols-[0.38fr_0.62fr] xl:gap-20">
            <div className="industry-story-copy relative grid min-h-[23rem] max-w-[32rem]" aria-live="polite">
              {industries.map((industry, index) => {
                const isActive = index === activeIndex;

                return (
                  <article
                    key={industry.id}
                    className={cn('[grid-area:1/1] flex flex-col justify-center transition-all duration-500 ease-out', isActive ? 'translate-y-0 opacity-100' : index < activeIndex ? 'pointer-events-none -translate-y-6 opacity-0' : 'pointer-events-none translate-y-6 opacity-0')}
                    aria-hidden={!isActive}
                  >
                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase leading-none tracking-normal text-[#f25a05]">
                      <span>{industry.index}</span>
                      <span>{industry.label}</span>
                    </div>
                    <h3 className="mt-5 max-w-[31rem] text-[2.2rem] font-semibold leading-tight text-[#18181b] xl:text-[2.65rem]">{industry.title}</h3>
                    <p className="mt-5 max-w-[30rem] text-base leading-7 text-[#5f5a56] xl:text-lg xl:leading-8">{industry.copy}</p>
                    <ul className="mt-7 grid gap-3" aria-label={industry.name + ' use cases'}>
                      {industry.points.map((point) => (
                        <li className="flex items-center gap-3 text-sm font-bold leading-6 text-[#18181b]" key={point}>
                          <Check className="size-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_66%_38%,rgb(242_90_5/0.15),transparent_62%)]" aria-hidden="true" />
              <div className="relative aspect-[4/3] max-h-[calc(100svh-9rem)] overflow-hidden rounded-[1.75rem] border border-[#ead8c8] bg-[#fffaf5] shadow-[0_30px_80px_rgb(63_45_30/0.16)]">
                <div className="pointer-events-none absolute -left-4 bottom-4 z-10 text-[7rem] font-semibold leading-none text-white/30 mix-blend-overlay" aria-hidden="true">{String(activeIndex + 1).padStart(2, '0')}</div>
                {industries.map((industry, index) => (
                  <img
                    key={industry.id}
                    className={cn('absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out', index === activeIndex ? 'scale-100 opacity-100' : 'scale-[0.985] opacity-0')}
                    style={{ objectPosition: industry.objectPosition }}
                    src={industry.image}
                    alt={industry.alt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    aria-hidden={index !== activeIndex}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="sr-only">
            {industries.map((industry) => (
              <article key={industry.id}>
                <h3>{industry.name}</h3>
                <p>{industry.copy}</p>
                <ul>
                  {industry.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto w-full max-w-container">
          <div className="grid gap-12">
            {industries.map((industry) => (
              <article className="grid gap-6 sm:gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center" key={industry.id}>
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase leading-none tracking-normal text-[#f25a05]">
                    <span>{industry.index}</span>
                    <span>{industry.label}</span>
                  </div>
                  <h3 className="mt-5 max-w-[31rem] text-[1.85rem] font-semibold leading-tight text-[#18181b] sm:text-[2.2rem]">{industry.title}</h3>
                  <p className="mt-4 max-w-[30rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">{industry.copy}</p>
                  <ul className="mt-6 grid gap-3" aria-label={industry.name + ' use cases'}>
                    {industry.points.map((point) => (
                      <li className="flex items-center gap-3 text-sm font-bold leading-6 text-[#18181b]" key={point}>
                        <Check className="size-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-[#ead8c8] bg-[#fffaf5] shadow-[0_20px_56px_rgb(63_45_30/0.12)]">
                  <img className="h-full w-full object-cover" style={{ objectPosition: industry.objectPosition }} src={industry.image} alt={industry.alt} loading="lazy" decoding="async" />
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

const technologyItems = [
  { title: 'Web Applications', Icon: MonitorSmartphone },
  { title: 'Cloud-Based Systems', Icon: Cloud },
  { title: 'Mobile Applications', Icon: Smartphone },
  { title: 'Secure Databases', Icon: Database },
  { title: 'API Integrations', Icon: Network },
  { title: 'Responsive Interfaces', Icon: Workflow },
];

export function SoftwareTechnologies() {
  return (
    <section className="bg-[#141414] px-5 pb-12 pt-20 sm:px-6 sm:pb-14 sm:pt-24 lg:pb-16 lg:pt-32" aria-labelledby="software-technologies-heading">
      <div className="mx-auto grid w-full max-w-container items-center gap-12 lg:grid-cols-[0.55fr_0.45fr] lg:gap-16 xl:gap-20">
        <div className="overflow-hidden rounded-[1.75rem] bg-white p-5 shadow-[0_24px_60px_rgb(0_0_0/0.28)] sm:p-7 lg:p-8" aria-hidden="true">
          <img className="aspect-[4/3] h-full w-full rounded-[1.25rem] object-contain object-center" src={modernTechnologyImage} alt="" loading="lazy" decoding="async" />
        </div>
        <div>
          <p className="type-eyebrow">Modern Technology</p>
          <h2 id="software-technologies-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#fffaf5] sm:text-[2.65rem] lg:text-[3.15rem]">Built With Technologies Ready for Real-World Use.</h2>
          <p className="mt-5 max-w-[36rem] text-base leading-7 text-[#e8dfd6] sm:text-lg sm:leading-8">We use reliable and scalable technologies to develop software that performs across modern devices and platforms.</p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {technologyItems.map(({ title, Icon }, index) => (
              <div className={cn('flex flex-col items-start gap-3 pb-5', index < 3 && 'border-b border-white/10')} key={title}>
                <span className="flex size-10 items-center justify-center rounded-control bg-white/8 text-[#ff7a2b]"><Icon className="size-5" aria-hidden="true" /></span>
                <span className="text-sm font-bold leading-5 text-[#fffaf5]">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const customBenefits = [
  { title: 'Improved Efficiency', copy: 'Automate routine work and reduce repeated manual tasks.', Icon: Zap },
  { title: 'Better Decision Making', copy: 'Organise useful data so teams can understand operations clearly.', Icon: Database },
  { title: 'Increased Productivity', copy: 'Give users tools built around the way they actually work.', Icon: Rocket },
  { title: 'Scalable Growth', copy: 'Support more users, features, and workflows as needs expand.', Icon: Layers3 },
  { title: 'Competitive Advantage', copy: 'Build digital capabilities that fit your business instead of generic tools.', Icon: Sparkles },
];

export function SoftwareBenefits() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:py-28" aria-labelledby="software-benefits-heading">
      <div className="mx-auto w-full max-w-container">
        <div className="mx-auto max-w-[44rem] text-center">
          <p className="type-eyebrow">Benefits of Custom Software</p>
          <h2 id="software-benefits-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">Built to Improve How Your Organisation Works.</h2>
        </div>
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {customBenefits.map(({ title, copy, Icon }) => (
            <div className="border-t border-[#e5e1dc] pt-6" key={title}>
              <span className="flex size-11 items-center justify-center rounded-control bg-[#fff4ed] text-[#f25a05]"><Icon className="size-5" aria-hidden="true" /></span>
              <h3 className="mt-5 text-lg font-semibold leading-tight text-[#18181b]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5f5a56]">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SoftwareProjects() {
  return (
    <section className="overflow-hidden bg-[#171717] py-24 sm:py-28 lg:py-32" aria-labelledby="software-projects-heading">
      <style>{`
        @keyframes portfolio-marquee-left {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes portfolio-marquee-right {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
        .portfolio-marquee { overflow: hidden; width: 100vw; }
        .portfolio-marquee__track { animation: portfolio-marquee-left var(--marquee-duration) linear infinite; will-change: transform; }
        .portfolio-marquee__track--reverse { animation-name: portfolio-marquee-right; }
        .portfolio-marquee__track--offset { margin-left: -180px; }
        .portfolio-marquee:hover .portfolio-marquee__track { animation-play-state: paused; }
        @media (min-width: 640px) { .portfolio-marquee__track--offset { margin-left: -220px; } }
        @media (min-width: 1024px) { .portfolio-marquee__track--offset { margin-left: -280px; } }
        @media (prefers-reduced-motion: reduce) {
          .portfolio-marquee { overflow-x: auto; scrollbar-width: thin; }
          .portfolio-marquee__track,
          .portfolio-marquee__track--reverse { animation: none; transform: none; }
        }
      `}</style>
      <div className="mx-auto w-full max-w-container px-5 sm:px-6">
        <div className="mx-auto max-w-[43rem] text-center">
          <p className="type-eyebrow">Software Projects</p>
          <h2 id="software-projects-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#fffaf5] sm:text-[2.65rem] lg:text-[3.15rem]">Solutions Built for Real Organisations.</h2>
          <p className="mx-auto mt-5 max-w-[43rem] text-base leading-7 text-[#e8dfd6] sm:text-lg sm:leading-8">Explore selected digital systems, platforms, and technology projects delivered for businesses and organisations.</p>
        </div>
      </div>
      <div className="relative left-1/2 mt-16 w-screen -translate-x-1/2 sm:mt-[4.5rem] lg:mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#171717] to-transparent sm:w-16" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#171717] to-transparent sm:w-16" aria-hidden="true" />
        <PortfolioMarquee projects={portfolioRowOneProjects} direction="left" duration="44s" />
        <div className="mt-5 sm:mt-6"><PortfolioMarquee projects={portfolioRowTwoProjects} direction="right" duration="50s" offset /></div>
      </div>
      <div className="mx-auto mt-14 flex w-full max-w-container justify-center px-5 sm:mt-16 sm:px-6">
        <Link className="group inline-flex items-center gap-2 text-sm font-bold text-[#ff7a2b] transition-colors duration-smooth hover:text-[#ffb07a]" to="/projects">View All Projects<ArrowRight className="size-4 transition-transform duration-smooth group-hover:translate-x-1" aria-hidden="true" /></Link>
      </div>
    </section>
  );
}







import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BarChart3, BriefcaseBusiness, Check, ChevronRight, Globe2, GraduationCap, HeartHandshake, Mail, Megaphone, MousePointerClick, Search, Send, ShoppingBag, Target, TrendingUp, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroImage from '@/assets/images/home-hero-business-growth.webp';
import businessEmailImage from '@/assets/images/services/business-email.webp';
import digitalMarketingImage from '@/assets/images/services/digital-marketing.webp';
import domainImage from '@/assets/images/services/domain-registration.webp';
import seoImage from '@/assets/images/services/web-hosting.webp';
import softwareImage from '@/assets/images/services/software-development.webp';
import webDesignImage from '@/assets/images/services/web-design.webp';
import { ButtonLink } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import { PortfolioMarquee } from '@/sections/home/ProjectsShowcase/PortfolioMarquee';
import { portfolioRowOneProjects, portfolioRowTwoProjects } from '@/sections/home/ProjectsShowcase/projectData';

const heroPoints = ['Search Visibility', 'Targeted Advertising', 'Content & Social Media', 'Performance Tracking'];

export function DigitalMarketingHero() {
  return (
    <section className="relative isolate min-h-[100vh] overflow-hidden bg-[#171717]" aria-labelledby="digital-marketing-hero-heading">
      <img className="absolute inset-0 -z-20 h-full w-full object-cover object-[72%_center]" src={heroImage} alt="Business team reviewing online growth and marketing activity on a laptop." fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,8,8,0.98)_0%,rgba(8,8,8,0.90)_46%,rgba(8,8,8,0.72)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(8,8,8,0.82)_0%,rgba(8,8,8,0.28)_52%,rgba(8,8,8,0.64)_100%)]" />
      <div className="mx-auto flex min-h-[100vh] w-full max-w-container items-center px-6 py-20 sm:px-8 lg:px-16">
        <div className="max-w-[51rem]">
          <p className="type-eyebrow">Digital Marketing</p>
          <h1 id="digital-marketing-hero-heading" className="mt-5 text-[2.45rem] font-semibold leading-[1.08] text-[#fffaf5] sm:text-[3.35rem] lg:text-[4.15rem]">Digital Marketing That Helps Your Business Get Found and Grow.</h1>
          <p className="mt-6 max-w-[43rem] text-base leading-8 text-[#f1e8df] sm:text-lg">Laybrotech helps businesses improve online visibility, reach the right audiences, generate leads, and grow through practical digital marketing strategies.</p>
          <p className="mt-3 max-w-[42rem] text-base leading-7 text-[#e8dfd6]">From search and social media to paid advertising and content, we create marketing around your business goals.</p>
          <ul className="mt-7 flex flex-col gap-3 text-sm font-semibold text-[#fffaf5] sm:flex-row sm:flex-wrap sm:gap-x-5" aria-label="Digital marketing highlights">
            {heroPoints.map((point) => <li className="flex items-center gap-2.5" key={point}><Check className="mt-0.5 size-4 shrink-0 text-[#16a34a]" aria-hidden="true" />{point}</li>)}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink className="h-12 w-full text-[#fff] sm:h-14 sm:w-auto" href="/contact" rightIcon={<ArrowRight />} size="lg">Start Your Marketing</ButtonLink>
            <ButtonLink className="h-12 w-full border-2 border-white/90 !bg-transparent !text-white hover:border-white hover:!bg-white/10 hover:!text-white sm:h-14 sm:w-auto" href="/contact" variant="secondary" size="lg">Talk to a Marketing Specialist</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

const trustItems = [
  { label: 'SEO Focused', Icon: Search }, { label: 'Targeted Campaigns', Icon: Target }, { label: 'Multi-Channel Marketing', Icon: Megaphone }, { label: 'Performance Tracking', Icon: BarChart3 }, { label: 'Ongoing Optimisation', Icon: TrendingUp },
];

export function DigitalMarketingTrustBar() {
  return (
    <section className="relative z-10 -mt-12 px-5 sm:px-6" aria-label="Digital marketing benefits">
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

const marketingServices = [
  { id: 'seo', tab: 'SEO', label: 'Search Engine Optimization', title: 'Improve How Customers Find You in Search.', description: 'Strengthen your website search visibility through better structure, keyword targeting, technical improvements, and content optimisation.', features: ['Keyword research', 'On-page optimisation', 'Local SEO'], image: webDesignImage, Icon: Search },
  { id: 'social', tab: 'Social Media', label: 'Social Media Marketing', title: 'Build Visibility and Engage Your Audience.', description: 'Use consistent social media content and campaign planning to help your business stay visible and connected with customers.', features: ['Content creation', 'Social media management', 'Audience engagement'], image: digitalMarketingImage, Icon: Megaphone },
  { id: 'meta', tab: 'Meta Ads', label: 'Facebook & Instagram Advertising', title: 'Reach More of the Right People.', description: 'Create targeted Facebook and Instagram campaigns designed around awareness, enquiries, conversions, and customer acquisition.', features: ['Lead generation campaigns', 'Retargeting', 'Campaign optimisation'], image: businessEmailImage, Icon: Megaphone },
  { id: 'google', tab: 'Google Ads', label: 'Google Ads Management', title: 'Reach Customers Already Searching for What You Offer.', description: 'Build targeted search and display campaigns around relevant keywords, audiences, and measurable campaign goals.', features: ['Search campaigns', 'Keyword targeting', 'Conversion tracking'], image: domainImage, Icon: MousePointerClick },
  { id: 'content', tab: 'Content Marketing', label: 'Content Marketing', title: 'Create Content That Attracts and Educates Customers.', description: 'Develop useful website, blog, and campaign content designed to support visibility, engagement, and customer understanding.', features: ['Blog content', 'Website copy', 'SEO content'], image: softwareImage, Icon: Send },
  { id: 'email', tab: 'Email Marketing', label: 'Email Marketing', title: 'Stay Connected With Customers Beyond the Website.', description: 'Use professional email campaigns to communicate offers, updates, newsletters, and follow-up messages directly with your audience.', features: ['Promotional emails', 'Newsletter campaigns', 'Customer follow-ups'], image: businessEmailImage, Icon: Mail },
];

export function DigitalMarketingServices() {
  const [activeId, setActiveId] = useState(marketingServices[0].id);
  const active = marketingServices.find((item) => item.id === activeId) ?? marketingServices[0];
  const ActiveIcon = active.Icon;

  return (
    <section className="bg-[#fbfaf7] px-5 py-24 sm:px-6 sm:py-28 lg:py-32" aria-labelledby="digital-marketing-services-heading">
      <div className="mx-auto w-full max-w-container">
        <div className="mx-auto max-w-[48rem] text-center">
          <p className="type-eyebrow">Digital Marketing Services</p>
          <h2 id="digital-marketing-services-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">Marketing Services Built Around How Customers Find You.</h2>
          <p className="mx-auto mt-5 text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">Laybrotech combines search, social media, paid advertising, content, and email to help businesses reach customers across multiple digital channels.</p>
        </div>

        <div className="mx-auto mt-12 max-w-full overflow-x-auto pb-2" role="tablist" aria-label="Digital marketing services">
          <div className="mx-auto flex w-max gap-1.5 rounded-[1.15rem] border border-[#e7ddd4] bg-white/90 p-1.5 shadow-[0_12px_34px_rgb(63_45_30/0.06)] backdrop-blur">
            {marketingServices.map((service) => (
              <button
                key={service.id}
                type="button"
                role="tab"
                aria-selected={active.id === service.id}
                className={cn(
                  'rounded-[0.85rem] px-4 py-2.5 text-sm font-bold transition-colors duration-200 sm:px-5',
                  active.id === service.id ? 'bg-[#18181b] text-white shadow-[0_8px_18px_rgb(24_24_27/0.16)]' : 'text-[#5f5a56] hover:bg-[#fff4ed] hover:text-[#f25a05]',
                )}
                onClick={() => setActiveId(service.id)}
              >
                {service.tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-9 overflow-hidden rounded-[1.75rem] border border-[#e4d8cf] bg-white shadow-[0_26px_80px_rgb(63_45_30/0.09)]">
          <div className="pointer-events-none absolute -left-24 top-8 size-72 rounded-full bg-[#f25a05]/7 blur-3xl" aria-hidden="true" />
          <div className="relative grid min-h-[34rem] lg:grid-cols-[0.43fr_0.57fr]">
            <div className="flex flex-col justify-center px-7 py-10 sm:px-10 lg:px-12 lg:py-12">
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-[0.95rem] bg-[#fff4ed] text-[#f25a05]"><ActiveIcon className="size-6" aria-hidden="true" /></span>
                <p className="text-xs font-bold uppercase tracking-normal text-[#f25a05]">{active.label}</p>
              </div>
              <h3 className="mt-7 max-w-[31rem] text-[2rem] font-semibold leading-tight text-[#18181b] sm:text-[2.45rem]">{active.title}</h3>
              <p className="mt-5 max-w-[33rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">{active.description}</p>
              <ul className="mt-8 grid gap-3" aria-label={active.label + ' features'}>
                {active.features.map((feature) => (
                  <li className="flex items-center gap-3 text-sm font-bold text-[#18181b]" key={feature}>
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#ecfdf3] text-[#16a34a]"><Check className="size-3.5" aria-hidden="true" /></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-[24rem] bg-[#fff7f1] p-4 sm:p-5 lg:min-h-full lg:p-6">
              <div className="relative h-full min-h-[24rem] overflow-hidden rounded-[1.35rem] border border-[#ead8c8] bg-[#fffaf5] shadow-[inset_0_0_0_1px_rgb(255_255_255/0.7)]">
                {marketingServices.map((service) => (
                  <img
                    key={service.id}
                    className={cn('absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 ease-out', service.id === active.id ? 'scale-100 opacity-100' : 'scale-[0.985] opacity-0')}
                    src={service.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const journeyStages = [
  ['01', 'Get Discovered', 'Improve visibility through search, social, content, and advertising.'],
  ['02', 'Attract the Right Audience', 'Focus campaigns and content on people most relevant to the business.'],
  ['03', 'Build Interest & Trust', 'Use clear messaging, useful content, and consistent visibility.'],
  ['04', 'Generate Leads', 'Guide interested customers toward enquiries, forms, calls, or other actions.'],
  ['05', 'Improve Conversions', 'Measure results and refine campaigns to improve performance over time.'],
];

export function MarketingGrowthJourney() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-6 sm:py-28 lg:py-32" aria-labelledby="marketing-journey-heading">
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-[#f25a05]/5 blur-3xl" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-container">
        <div className="grid items-end gap-8 lg:grid-cols-[0.56fr_0.44fr]">
          <div>
            <p className="type-eyebrow">From Visibility to Growth</p>
            <h2 id="marketing-journey-heading" className="mt-4 max-w-[48rem] text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">Marketing Should Move Customers Toward Action.</h2>
          </div>
          <p className="max-w-[38rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8 lg:pb-2">A strong digital strategy connects visibility, traffic, engagement, leads, and conversions rather than treating each channel in isolation.</p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[1.75rem] border border-[#f25a05] bg-[#f25a05] px-5 py-8 shadow-[0_28px_80px_rgb(242_90_5/0.22)] sm:px-7 sm:py-10 lg:mt-18 lg:px-9 lg:py-12">
          <div className="pointer-events-none absolute inset-x-9 top-[4.9rem] hidden h-px bg-white/35 lg:block" aria-hidden="true" />
          <div className="relative z-10 grid gap-7 lg:grid-cols-5 lg:gap-0">
            {journeyStages.map(([number, title, copy], index) => (
              <article className="group relative grid grid-cols-[3.75rem_1fr] gap-4 lg:block lg:pr-6 lg:last:pr-0" key={number}>
                <div className="relative z-10 flex lg:justify-start">
                  <span className="flex size-[3.75rem] shrink-0 items-center justify-center rounded-full border border-white/55 bg-white text-[1.2rem] font-semibold text-[#f25a05] shadow-[0_14px_30px_rgb(103_39_0/0.18)] transition-transform duration-200 group-hover:-translate-y-1">
                    {number}
                  </span>
                  {index < journeyStages.length - 1 ? (
                    <span className="absolute left-1/2 top-1/2 hidden size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#e84f04] text-white ring-4 ring-[#f25a05] lg:flex" aria-hidden="true">
                      <ChevronRight className="size-4" />
                    </span>
                  ) : null}
                </div>
                <div className="pt-1 lg:pt-8">
                  <h3 className="max-w-[15rem] text-xl font-semibold leading-tight text-white">{title}</h3>
                  <p className="mt-3 max-w-[18rem] text-sm leading-6 text-[#fff4ed]">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const strategyBlocks = [
  { eyebrow: 'Strategy With Purpose', title: 'Marketing Built Around Business Goals.', copy: 'We plan campaigns around the customers you want to reach, the actions you want them to take, and the outcomes your business needs.', points: ['Results-driven strategy', 'Targeted advertising', 'Customized marketing plans'], image: digitalMarketingImage, reverse: false },
  { eyebrow: 'Measure. Learn. Improve.', title: 'Campaigns That Keep Getting Smarter.', copy: 'Digital marketing should be monitored and improved over time rather than launched and forgotten.', points: ['Performance tracking', 'SEO-focused optimisation', 'Creative content improvement'], image: webDesignImage, reverse: true },
];

export function DigitalMarketingWhyChoose() {
  return (
    <section className="bg-[#fbf7f2] px-5 py-24 sm:px-6 sm:py-28 lg:py-32" aria-label="Why choose Laybrotech for digital marketing">
      <div className="mx-auto grid w-full max-w-container gap-16 lg:gap-20">{strategyBlocks.map((block) => <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16" key={block.title}><div className={cn(block.reverse && 'lg:order-2')}><p className="type-eyebrow">{block.eyebrow}</p><h2 className="mt-4 max-w-[38rem] text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3rem]">{block.title}</h2><p className="mt-5 max-w-[36rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">{block.copy}</p><ul className="mt-8 grid gap-3">{block.points.map((point) => <li className="flex items-center gap-3 text-sm font-bold text-[#18181b]" key={point}><Check className="size-4 text-[#16a34a]" aria-hidden="true" />{point}</li>)}</ul></div><div className={cn('overflow-hidden rounded-[1.75rem] border border-[#ead8c8] bg-white shadow-[0_20px_60px_rgb(63_45_30/0.12)]', block.reverse && 'lg:order-1')}><img className="aspect-[4/3] h-full w-full object-cover object-center" src={block.image} alt="Digital marketing strategy visual." loading="lazy" decoding="async" /></div></article>)}</div>
    </section>
  );
}

const channels = ['Google', 'Google Search / Ads', 'Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'YouTube', 'Email', 'Website / SEO', 'Meta'];
const channelIcons = [Search, MousePointerClick, UsersRound, Megaphone, BriefcaseBusiness, TrendingUp, Send, Mail, Globe2, Target];

export function MarketingChannels() {
  return (
    <section className="bg-[#171717] px-5 py-24 sm:px-6 sm:py-28 lg:py-32" aria-labelledby="marketing-channels-heading">
      <div className="mx-auto w-full max-w-container"><div className="mx-auto max-w-[47rem] text-center surface-on-dark"><p className="type-eyebrow">Marketing Channels</p><h2 id="marketing-channels-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#fffaf5] sm:text-[2.65rem] lg:text-[3.15rem]">Reach Customers Across the Platforms They Use.</h2><p className="mx-auto mt-5 text-base leading-7 text-[#e8dfd6] sm:text-lg sm:leading-8">Different audiences discover businesses in different places, so we use the channels that best fit the campaign and customer journey.</p></div><div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{channels.map((channel, index) => { const Icon = channelIcons[index]; return <div className="group flex cursor-pointer items-center gap-3 rounded-[0.9rem] border border-white/10 bg-white/[0.055] px-4 py-4 transition-colors duration-200 hover:border-[#f25a05]/70" key={channel}><span className="flex size-9 items-center justify-center rounded-control bg-white/8 text-[#ff7a2b]"><Icon className="size-4" aria-hidden="true" /></span><span className="text-sm font-bold text-[#fffaf5]">{channel}</span></div>; })}</div></div>
    </section>
  );
}

const processSteps = [
  ['01', 'Business Consultation', 'Understand the business goals, target audience, current marketing, and campaign objectives.'],
  ['02', 'Strategy Development', 'Create a digital marketing strategy based on the business, channels, and audience.'],
  ['03', 'Campaign Setup', 'Prepare campaigns, content, audiences, tracking, and selected platforms.'],
  ['04', 'Optimisation & Monitoring', 'Monitor results and improve campaigns based on performance.'],
  ['05', 'Reporting & Growth', 'Review performance, identify opportunities, and recommend the next improvements.'],
];

function clamp(value: number, min = 0, max = 1) { return Math.min(Math.max(value, min), max); }

export function DigitalMarketingProcess() {
  const markerRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  useEffect(() => {
    let frame = 0;
    function update() {
      const markers = markerRefs.current.filter(Boolean) as HTMLSpanElement[];
      if (markers.length < 2) return;
      const centers = markers.map((marker) => { const rect = marker.getBoundingClientRect(); return rect.top + window.scrollY + rect.height / 2; });
      const scrollPoint = window.scrollY + window.innerHeight * 0.56;
      setProgress(clamp((scrollPoint - centers[0]) / (centers[centers.length - 1] - centers[0])));
      setActiveIndex(centers.reduce((current, center, index) => (scrollPoint >= center ? index : current), -1));
    }
    function requestUpdate() { window.cancelAnimationFrame(frame); frame = window.requestAnimationFrame(update); }
    requestUpdate(); window.addEventListener('scroll', requestUpdate, { passive: true }); window.addEventListener('resize', requestUpdate);
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener('scroll', requestUpdate); window.removeEventListener('resize', requestUpdate); };
  }, []);
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-6 sm:py-28 lg:py-32" aria-labelledby="digital-marketing-process-heading"><div className="pointer-events-none absolute -right-24 top-24 size-72 rounded-full bg-[#f25a05]/6 blur-3xl" aria-hidden="true" /><div className="relative z-10 mx-auto w-full max-w-container"><div className="mx-auto max-w-[42rem] text-center"><p className="type-eyebrow">Digital Marketing Process</p><h2 id="digital-marketing-process-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">A Clear Process for Campaigns That Improve Over Time.</h2></div><ol className="relative mx-auto mt-16 grid max-w-[76rem] gap-8 lg:mt-20 lg:gap-0"><span className="pointer-events-none absolute bottom-10 left-[1.05rem] top-10 w-px bg-[#eadfd6] lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true" /><span className="pointer-events-none absolute left-[1.05rem] top-10 w-px origin-top bg-[#f25a05] transition-transform duration-75 ease-linear lg:left-1/2 lg:-translate-x-1/2" style={{ bottom: '2.5rem', transform: 'scaleY(' + progress + ')' }} aria-hidden="true" />{processSteps.map(([number, title, description], index) => { const isLeft = index % 2 === 0; const isActive = activeIndex >= index; return <li className="group relative grid grid-cols-[2.25rem_1fr] gap-5 lg:grid-cols-[1fr_5rem_1fr] lg:gap-0" key={number}><article className={cn('col-start-2 row-start-1 rounded-[1.35rem] border bg-[#fffdfb] p-6 shadow-[0_8px_24px_rgb(23_23_23/0.035)] transition-[border-color,transform] duration-200 sm:p-7 lg:p-8', isLeft ? 'lg:col-start-1 lg:mr-8' : 'lg:col-start-3 lg:ml-8', isActive ? 'border-[#f25a05]/35' : 'border-[#eadfd6] group-hover:border-[#f25a05]/35')}><span className={cn('block text-[2.7rem] font-semibold leading-none transition-colors duration-200 sm:text-[3.25rem]', isActive ? 'text-[#f25a05]' : 'text-[#d8b8a5] group-hover:text-[#f25a05]')}>{number}</span><h3 className="mt-5 text-[1.45rem] font-semibold leading-tight text-[#18181b] sm:text-[1.7rem]">{title}</h3><p className="mt-3 max-w-[34rem] text-base leading-7 text-[#625c56]">{description}</p></article><div className="relative z-10 col-start-1 row-start-1 flex justify-center pt-8 lg:col-start-2"><span ref={(node) => { markerRefs.current[index] = node; }} className={cn('flex size-5 items-center justify-center rounded-full border transition-colors duration-200', isActive ? 'border-[#f25a05] bg-[#f25a05]' : 'border-[#f25a05] bg-white')}><span className="size-2 rounded-full bg-[#f25a05]" /></span></div></li>; })}</ol></div></section>
  );
}

const industries = [
  { label: 'Small Businesses', copy: 'Grow visibility and attract more customers online.', image: businessEmailImage, Icon: BriefcaseBusiness },
  { label: 'Schools & Educational Institutions', copy: 'Promote admissions, programmes, events, and educational services.', image: softwareImage, Icon: GraduationCap },
  { label: 'E-commerce Businesses', copy: 'Improve product visibility, traffic, and online sales.', image: domainImage, Icon: ShoppingBag },
  { label: 'NGOs & Organisations', copy: 'Increase awareness, outreach, and engagement.', image: webDesignImage, Icon: HeartHandshake },
  { label: 'Professional Services', copy: 'Generate enquiries for consultants, agencies, and service providers.', image: digitalMarketingImage, Icon: UsersRound },
];

export function IndustriesMarketFor() {
  const [activeIndex, setActiveIndex] = useState(0); const active = industries[activeIndex]; const ActiveIcon = active.Icon;
  return <section className="bg-[#fbf7f2] px-5 py-24 sm:px-6 sm:py-28 lg:py-32" aria-labelledby="industries-market-heading"><div className="mx-auto w-full max-w-container"><div className="mx-auto max-w-[43rem] text-center"><p className="type-eyebrow">Industries We Market For</p><h2 id="industries-market-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">Marketing for Organisations That Need Better Reach.</h2></div><div className="mt-14 grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12"><div className="grid gap-2" role="tablist" aria-label="Industries we market for">{industries.map((industry, index) => <button key={industry.label} type="button" role="tab" aria-selected={activeIndex === index} onClick={() => setActiveIndex(index)} className={cn('flex items-center gap-3 border-b border-[#e5ded6] py-4 text-left transition-colors', activeIndex === index ? 'text-[#f25a05]' : 'text-[#18181b] hover:text-[#f25a05]')}><industry.Icon className="size-5" aria-hidden="true" /><span className="font-bold">{industry.label}</span></button>)}</div><div className="grid overflow-hidden rounded-[1.75rem] border border-[#ead8c8] bg-white shadow-[0_24px_70px_rgb(63_45_30/0.1)] lg:grid-cols-[0.58fr_0.42fr]"><div className="relative min-h-[22rem]"><img className="absolute inset-0 h-full w-full object-cover object-center" src={active.image} alt="" loading="lazy" decoding="async" aria-hidden="true" /></div><div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10"><span className="flex size-12 items-center justify-center rounded-control bg-[#fff4ed] text-[#f25a05]"><ActiveIcon className="size-6" aria-hidden="true" /></span><h3 className="mt-6 text-[2rem] font-semibold leading-tight text-[#18181b]">{active.label}</h3><p className="mt-4 text-base leading-7 text-[#5f5a56]">{active.copy}</p></div></div></div></div></section>;
}

const seoItems = ['Website SEO optimisation', 'Technical SEO audits', 'Keyword research', 'Landing page optimisation', 'Website analytics', 'Conversion optimisation'];

export function SeoWebsiteMarketing() {
  return <section className="bg-white px-5 py-24 sm:px-6 sm:py-28 lg:py-32" aria-labelledby="seo-website-heading"><div className="mx-auto grid w-full max-w-container items-center gap-10 lg:grid-cols-[0.52fr_0.48fr] lg:gap-16"><div className="overflow-hidden rounded-[1.75rem] border border-[#ead8c8] bg-[#171717] shadow-[0_20px_60px_rgb(23_23_23/0.14)]"><img className="aspect-[4/3] h-full w-full object-cover object-center" src={seoImage} alt="Website and SEO marketing visual." loading="lazy" decoding="async" /></div><div><p className="type-eyebrow">SEO & Website Marketing</p><h2 id="seo-website-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3rem]">Your Website Should Be Easier to Find - and Easier to Act On.</h2><p className="mt-5 max-w-[38rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">We improve website visibility and marketing performance through SEO, analytics, landing-page optimisation, and conversion-focused improvements.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{seoItems.map((item) => <div className="flex items-center gap-3 text-sm font-bold text-[#18181b]" key={item}><Check className="size-4 text-[#16a34a]" aria-hidden="true" />{item}</div>)}</div></div></div></section>;
}

const benefits = [
  ['Increase Brand Awareness', 'Help more people recognise and understand your business.'], ['Generate More Leads', 'Guide interested customers toward enquiries and next steps.'], ['Improve Online Visibility', 'Make your business easier to discover across digital channels.'], ['Increase Website Traffic', 'Bring more relevant visitors to your website and landing pages.'], ['Boost Sales & Conversions', 'Improve campaigns and pages around measurable actions.'], ['Reach Targeted Audiences', 'Focus marketing on people most likely to care about your offer.'],
];

export function DigitalMarketingBenefits() {
  return <section className="bg-[#fbfaf7] px-5 py-20 sm:px-6 sm:py-24 lg:py-28" aria-labelledby="marketing-benefits-heading"><div className="mx-auto w-full max-w-container"><div className="mx-auto max-w-[43rem] text-center"><p className="type-eyebrow">Benefits of Digital Marketing</p><h2 id="marketing-benefits-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">Practical Marketing Benefits for Growing Organisations.</h2></div><div className="mt-14 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">{benefits.map(([title, copy], index) => <div className={cn(index >= 3 && 'border-t border-[#e5e1dc] pt-7')} key={title}><span className="text-sm font-bold text-[#f25a05]">0{index + 1}</span><h3 className="mt-3 text-lg font-semibold leading-tight text-[#18181b]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#5f5a56]">{copy}</p></div>)}</div></div></section>;
}

export function DigitalMarketingProjects() {
  return <section className="overflow-hidden bg-[#171717] py-24 sm:py-28 lg:py-32" aria-labelledby="digital-marketing-projects-heading"><style>{'@keyframes portfolio-marquee-left{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}@keyframes portfolio-marquee-right{from{transform:translate3d(-50%,0,0)}to{transform:translate3d(0,0,0)}}.portfolio-marquee{overflow:hidden;width:100vw}.portfolio-marquee__track{animation:portfolio-marquee-left var(--marquee-duration) linear infinite;will-change:transform}.portfolio-marquee__track--reverse{animation-name:portfolio-marquee-right}.portfolio-marquee__track--offset{margin-left:-180px}.portfolio-marquee:hover .portfolio-marquee__track{animation-play-state:paused}@media (min-width:640px){.portfolio-marquee__track--offset{margin-left:-220px}}@media (min-width:1024px){.portfolio-marquee__track--offset{margin-left:-280px}}@media (prefers-reduced-motion:reduce){.portfolio-marquee{overflow-x:auto;scrollbar-width:thin}.portfolio-marquee__track,.portfolio-marquee__track--reverse{animation:none;transform:none}}'}</style><div className="mx-auto w-full max-w-container px-5 sm:px-6"><div className="mx-auto max-w-[43rem] text-center"><p className="type-eyebrow">Digital Marketing & Digital Projects</p><h2 id="digital-marketing-projects-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#fffaf5] sm:text-[2.65rem] lg:text-[3.15rem]">Work Built to Help Businesses Grow Online.</h2><p className="mx-auto mt-5 max-w-[43rem] text-base leading-7 text-[#e8dfd6] sm:text-lg sm:leading-8">Explore selected websites, digital platforms, and online projects delivered for businesses and organisations.</p></div></div><div className="relative left-1/2 mt-16 w-screen -translate-x-1/2 sm:mt-[4.5rem] lg:mt-20"><div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#171717] to-transparent sm:w-16" aria-hidden="true" /><div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#171717] to-transparent sm:w-16" aria-hidden="true" /><PortfolioMarquee projects={portfolioRowOneProjects} direction="left" duration="44s" /><div className="mt-5 sm:mt-6"><PortfolioMarquee projects={portfolioRowTwoProjects} direction="right" duration="50s" offset /></div></div><div className="mx-auto mt-14 flex w-full max-w-container justify-center px-5 sm:mt-16 sm:px-6"><Link className="group inline-flex items-center gap-2 text-sm font-bold text-[#ff7a2b] transition-colors duration-smooth hover:text-[#ffb07a]" to="/projects">View All Projects<ArrowRight className="size-4 transition-transform duration-smooth group-hover:translate-x-1" aria-hidden="true" /></Link></div></section>;
}

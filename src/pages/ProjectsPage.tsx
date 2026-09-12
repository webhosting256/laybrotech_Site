import { ArrowRight, BriefcaseBusiness, HeartPulse, Plane, Shapes } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Footer } from '@/components/layout/Footer';
import { ButtonLink } from '@/components/ui/Button';
import { FinalCTA } from '@/sections/home/FinalCTA';
import { caseStudyProjects, projects, type Project } from '@/sections/home/ProjectsShowcase/projectData';

const businessNeeds = [
  { title: 'Business Websites', copy: 'Professional websites built around credibility, clarity, and customer enquiries.', Icon: BriefcaseBusiness },
  { title: 'Tourism & Travel Platforms', copy: 'Visual destination and experience-led websites that help visitors explore and enquire.', Icon: Plane },
  { title: 'Healthcare & Product Websites', copy: 'Clean brand and product presentations for healthcare, product, and service organisations.', Icon: HeartPulse },
  { title: 'Software & Digital Platforms', copy: 'Custom digital experiences and platforms shaped around practical business needs.', Icon: Shapes },
];

export function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectDiscovery />
      <FeaturedCaseStudies />
      <BusinessNeeds />
      <FinalCTA heading="Have a project in mind?" primaryLabel="Start Your Project" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      <Footer />
    </>
  );
}

function ProjectsHero() {
  const [primary, secondary, tertiary] = projects;

  return (
    <section className="relative isolate overflow-hidden bg-[#151515]" aria-labelledby="projects-hero-heading">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_24%,rgba(242,90,5,0.16),transparent_34%),linear-gradient(135deg,#101010_0%,#151515_52%,#090909_100%)]" aria-hidden="true" />
      <div className="absolute left-0 top-0 -z-10 h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 -z-10 h-[22rem] w-[22rem] rounded-full bg-[#f25a05]/10 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid min-h-[90svh] w-full max-w-container items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[0.47fr_0.53fr] lg:py-24">
        <div className="max-w-[43rem]">
          <p className="type-eyebrow">Our Work</p>
          <h1 id="projects-hero-heading" className="mt-5 text-[2.45rem] font-semibold leading-[1.08] text-[#fffaf5] sm:text-[3.35rem] lg:text-[4.15rem]">
            Digital Work Built Around Real Business Needs.
          </h1>
          <p className="mt-6 max-w-[39rem] text-base leading-8 text-[#e8dfd6] sm:text-lg">
            Explore selected Laybrotech projects across websites, digital platforms, and business solutions built for real organisations.
          </p>
          <div className="mt-8">
            <ButtonLink className="h-12 text-white sm:h-14" href="#projects-discovery" rightIcon={<ArrowRight />} size="lg">
              Explore Projects
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[25rem] sm:min-h-[33rem] lg:min-h-[35rem]" aria-label="Selected Laybrotech project previews">
          <ProjectMockup className="absolute left-0 top-12 z-30 w-[82%] rotate-[-1.5deg]" project={primary} large />
          <ProjectMockup className="absolute right-0 top-0 z-40 w-[54%] rotate-[2deg] opacity-95" project={secondary} />
          <ProjectMockup className="absolute bottom-2 right-[7%] z-20 w-[58%] rotate-[1deg] opacity-95" project={tertiary} />
        </div>
      </div>
    </section>
  );
}

function ProjectMockup({ project, className, large = false }: { project: Project; className: string; large?: boolean }) {
  return (
    <Link to={`/projects/${project.slug}`} className={className + ' group block overflow-hidden rounded-[1rem] border border-white/14 bg-[#202020] transition-transform duration-300 hover:-translate-y-1'}>
      <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-[#242424] px-4">
        <span className="size-2.5 rounded-full bg-[#f25a05]" />
        <span className="size-2.5 rounded-full bg-white/28" />
        <span className="size-2.5 rounded-full bg-white/18" />
      </div>
      <img className={(large ? 'h-[17rem] sm:h-[23rem] lg:h-[26rem]' : 'h-[12rem] sm:h-[15rem] lg:h-[17rem]') + ' w-full object-cover object-top transition duration-500 group-hover:scale-[1.015]'} src={project.image} alt={project.imageAlt} loading={large ? 'eager' : 'lazy'} decoding="async" />
    </Link>
  );
}

function ProjectDiscovery() {
  return (
    <section id="projects-discovery" className="bg-white px-5 py-24 sm:px-6 sm:py-28 lg:py-32" aria-labelledby="projects-discovery-heading">
      <div className="mx-auto w-full max-w-container">
        <div className="grid gap-6 border-b border-[#e8e8e8] pb-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
          <div>
            <p className="type-eyebrow">All Projects</p>
            <h2 id="projects-discovery-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">
              Real Work From the Laybrotech Portfolio.
            </h2>
          </div>
          <p className="max-w-[43rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8 lg:justify-self-end">
            Browse selected websites and digital experiences delivered for businesses and organisations across different industries.
          </p>
        </div>

        <div className="mt-10 grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="group block cursor-pointer" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} website`}>
      <div className="overflow-hidden rounded-[0.85rem] bg-[#f5f5f5]">
        <img className="h-[15rem] w-full object-cover object-top transition duration-500 group-hover:scale-[1.018] sm:h-[17rem]" src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
      </div>
      <div className="mt-5">
        <p className="text-xs font-bold uppercase leading-5 tracking-normal text-[#f25a05]">{project.category}</p>
        <h3 className="mt-2 text-[1.35rem] font-semibold leading-tight text-[#18181b] transition-colors duration-smooth group-hover:text-[#f25a05]">{project.name}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#5f5a56]">{project.description}</p>
      </div>
    </a>
  );
}
function FeaturedCaseStudies() {
  return (
    <section className="bg-white px-5 pb-24 sm:px-6 sm:pb-28 lg:pb-32" aria-labelledby="case-studies-heading">
      <div className="mx-auto w-full max-w-container border-t border-[#e8e8e8] pt-20 sm:pt-24 lg:pt-28">
        <div className="mx-auto max-w-[45rem] text-center">
          <p className="type-eyebrow">Featured Case Studies</p>
          <h2 id="case-studies-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">
            A Closer Look at Selected Work.
          </h2>
          <p className="mx-auto mt-5 max-w-[42rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
            Explore the challenges, thinking, and solutions behind selected Laybrotech projects.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-2">
          {caseStudyProjects.map((project) => (
            <CaseStudyFeature key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyFeature({ project }: { project: Project }) {
  return (
    <Link className="group block cursor-pointer" to={`/projects/${project.slug}`} aria-label={`View ${project.name} case study`}>
      <CaseStudyVisual project={project} />
      <div className="mt-6 max-w-[38rem]">
        <p className="type-eyebrow">{project.category}</p>
        <h3 className="mt-3 text-[1.65rem] font-semibold leading-tight text-[#18181b] transition-colors duration-smooth group-hover:text-[#f25a05] sm:text-[2rem]">{project.name}</h3>
        <p className="mt-3 text-base leading-7 text-[#5f5a56]">{project.shortDescription}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#f25a05] transition-colors duration-smooth group-hover:text-[#d94f04]">
          View Case Study<ArrowRight className="size-4 transition-transform duration-smooth group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
function CaseStudyVisual({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-[1rem] border border-[#e8e8e8] bg-[#f7f7f7]">
      <div className="flex h-9 items-center gap-1.5 border-b border-[#e8e8e8] bg-white px-4">
        <span className="size-2.5 rounded-full bg-[#f25a05]" />
        <span className="size-2.5 rounded-full bg-[#d8d8d8]" />
        <span className="size-2.5 rounded-full bg-[#cfcfcf]" />
      </div>
      <img className="h-[18rem] w-full object-cover object-top transition duration-500 group-hover:scale-[1.012] sm:h-[25rem] lg:h-[30rem]" src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
    </div>
  );
}
function BusinessNeeds() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:py-28" aria-labelledby="business-needs-heading">
      <div className="mx-auto w-full max-w-container border-t border-[#e8e8e8] pt-20 sm:pt-24 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start lg:gap-16">
          <div>
            <p className="type-eyebrow">Project Coverage</p>
            <h2 id="business-needs-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3rem]">
              Built Across Different Industries.
            </h2>
            <p className="mt-5 max-w-[38rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
              Laybrotech delivers digital projects for different business goals, from service websites to industry-focused platforms and custom digital experiences.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {businessNeeds.map(({ title, copy, Icon }) => (
              <div className="border-t border-[#e8e8e8] pt-6" key={title}>
                <span className="flex size-10 items-center justify-center rounded-control bg-[#fff4ed] text-[#f25a05]"><Icon className="size-5" aria-hidden="true" /></span>
                <h3 className="mt-4 text-lg font-semibold leading-tight text-[#18181b]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f5a56]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

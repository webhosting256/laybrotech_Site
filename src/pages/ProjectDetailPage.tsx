import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Footer } from '@/components/layout/Footer';
import { FinalCTA } from '@/sections/home/FinalCTA';
import { getProjectBySlug, type Project } from '@/sections/home/ProjectsShowcase/projectData';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (!project) {
      document.title = 'Project Not Found | Laybrotech';
      return;
    }

    document.title = `${project.name} Website Project | Laybrotech`;
    const description = project.description;
    const metaDescription = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
    metaDescription?.setAttribute('content', description);
    document.head.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', `${project.name} Website Project | Laybrotech`);
    document.head.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', description);
  }, [project]);

  if (!project) {
    return (
      <>
        <section className="bg-white px-5 py-28 sm:px-6 lg:py-32">
          <div className="mx-auto max-w-[46rem] text-center">
            <p className="type-eyebrow">Project Not Found</p>
            <h1 className="mt-4 text-[2.45rem] font-semibold leading-tight text-[#18181b]">This project is not available.</h1>
            <p className="mx-auto mt-5 max-w-[34rem] text-base leading-7 text-[#5f5a56]">The project may have moved or the link may be incorrect.</p>
            <Link className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#f25a05]" to="/projects"><ArrowLeft className="size-4" />Back to Projects</Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <ProjectHero project={project} />
      <ProjectStory project={project} />
      <VisualShowcase project={project} />
      <Delivered project={project} />
      <LiveProjectCTA project={project} />
      <FinalCTA heading="Have a similar project in mind?" primaryLabel="Start Your Project" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      <Footer />
    </>
  );
}

function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="min-h-[100vh] bg-white px-5 py-20 sm:px-6 sm:py-24 lg:py-28" aria-labelledby="project-detail-heading">
      <div className="mx-auto w-full max-w-container">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end lg:gap-16">
          <div>
            <p className="type-eyebrow">{project.category}</p>
            <h1 id="project-detail-heading" className="mt-5 text-[2.45rem] font-semibold leading-[1.08] text-[#18181b] sm:text-[3.25rem] lg:text-[4rem]">{project.name}</h1>
            <p className="mt-6 text-base leading-8 text-[#5f5a56] sm:text-lg">{project.shortDescription}</p>
            {project.liveUrl ? (
              <a className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-button bg-[#f25a05] px-6 text-sm font-bold text-white transition-colors duration-smooth hover:bg-[#d94f04]" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Visit Live Website<ExternalLink className="size-4" aria-hidden="true" />
              </a>
            ) : null}
          </div>
          <ProjectMeta project={project} />
        </div>

        <div className="mt-12 overflow-hidden rounded-[1rem] border border-[#e8e8e8] bg-[#f7f7f7] lg:mt-16">
          <div className="flex h-9 items-center gap-1.5 border-b border-[#e8e8e8] bg-white px-4">
            <span className="size-2.5 rounded-full bg-[#f25a05]" />
            <span className="size-2.5 rounded-full bg-[#d8d8d8]" />
            <span className="size-2.5 rounded-full bg-[#cfcfcf]" />
          </div>
          <img className="h-[20rem] w-full object-cover object-top sm:h-[34rem] lg:h-[42rem]" src={project.image} alt={project.imageAlt} fetchPriority="high" />
        </div>
      </div>
    </section>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  const items = [
    ['Industry', project.industry],
    ['Service', project.services.join(', ')],
    ['Year', project.year],
    ['Platform', project.platform],
  ].filter(([, value]) => Boolean(value));

  return (
    <dl className="grid gap-5 border-y border-[#e8e8e8] py-6 sm:grid-cols-2 lg:justify-self-end lg:border-y-0 lg:py-0">
      {items.map(([label, value]) => (
        <div className="border-t border-[#e8e8e8] pt-4 first:border-t-0 first:pt-0 sm:first:border-t sm:first:pt-4" key={label}>
          <dt className="text-xs font-bold uppercase tracking-normal text-[#8a8580]">{label}</dt>
          <dd className="mt-2 text-sm font-semibold leading-6 text-[#18181b]">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectStory({ project }: { project: Project }) {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:py-28" aria-labelledby="project-story-heading">
      <div className="mx-auto grid w-full max-w-container gap-12 border-t border-[#e8e8e8] pt-20 sm:pt-24 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16 lg:pt-28">
        <div>
          <p className="type-eyebrow">Project Overview</p>
          <h2 id="project-story-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem]">The Project</h2>
        </div>
        <div className="max-w-[47rem]">
          {project.overview.map((paragraph) => (
            <p className="mb-5 text-base leading-8 text-[#3f3f46] last:mb-0 sm:text-lg sm:leading-9" key={paragraph}>{paragraph}</p>
          ))}
          <div className="mt-10 grid gap-8 border-t border-[#e8e8e8] pt-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold leading-tight text-[#18181b]">The Challenge</h3>
              <p className="mt-4 text-base leading-8 text-[#5f5a56]">{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold leading-tight text-[#18181b]">The Solution</h3>
              <p className="mt-4 text-base leading-8 text-[#5f5a56]">{project.solution}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisualShowcase({ project }: { project: Project }) {
  return (
    <section className="bg-white px-5 pb-20 sm:px-6 sm:pb-24 lg:pb-28" aria-labelledby="project-showcase-heading">
      <div className="mx-auto w-full max-w-container">
        <div className="mb-10 max-w-[42rem]">
          <p className="type-eyebrow">Visual Showcase</p>
          <h2 id="project-showcase-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem]">The Finished Work</h2>
        </div>
        <div className="grid gap-6">
          <img className="h-[22rem] w-full rounded-[1rem] border border-[#e8e8e8] object-cover object-top sm:h-[34rem] lg:h-[40rem]" src={project.image} alt={`${project.name} full website preview`} loading="lazy" decoding="async" />
          <div className="grid gap-6 lg:grid-cols-2">
            <img className="h-[20rem] w-full rounded-[1rem] border border-[#e8e8e8] object-cover object-left-top sm:h-[28rem]" src={project.image} alt={`${project.name} page section preview`} loading="lazy" decoding="async" />
            <img className="h-[20rem] w-full rounded-[1rem] border border-[#e8e8e8] object-cover object-right-top sm:h-[28rem]" src={project.image} alt={`${project.name} responsive layout preview`} loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveProjectCTA({ project }: { project: Project }) {
  if (!project.liveUrl) return null;

  return (
    <section className="bg-white px-5 pb-20 sm:px-6 sm:pb-24 lg:pb-28" aria-labelledby="live-project-heading">
      <div className="mx-auto flex w-full max-w-container flex-col gap-5 border-b border-[#e8e8e8] pb-16 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="type-eyebrow">Live Project</p>
          <h2 id="live-project-heading" className="mt-3 text-[1.85rem] font-semibold leading-tight text-[#18181b] sm:text-[2.25rem]">Visit the Finished Website.</h2>
        </div>
        <a className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-button bg-[#f25a05] px-6 text-sm font-bold text-white transition-colors duration-smooth hover:bg-[#d94f04] sm:w-auto" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          Visit Project<ExternalLink className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
function Delivered({ project }: { project: Project }) {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:py-28" aria-labelledby="project-delivered-heading">
      <div className="mx-auto grid w-full max-w-container gap-10 border-y border-[#e8e8e8] py-16 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
        <div>
          <p className="type-eyebrow">Key Outcomes</p>
          <h2 id="project-delivered-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem]">What We Delivered</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {project.outcomes.map((outcome) => (
            <div className="border-t border-[#e8e8e8] pt-4" key={outcome}>
              <p className="text-base font-semibold leading-7 text-[#18181b]">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import fahariUgandaSafarisImage from '@/assets/images/Portfolio/Fahari-Uganda-Safaris.webp';
import invisionAutoParlourImage from '@/assets/images/Portfolio/Invision-Auto-Parlour-Limited.webp';
import lmkVenturesHealthcareImage from '@/assets/images/Portfolio/LMK-Ventures-Healthcare.webp';
import mealCardDinnerImage from '@/assets/images/Portfolio/Meal-Card-Dinner.webp';
import naroHoldingsImage from '@/assets/images/Portfolio/NARO-Holdings-Limited-NHL.webp';
import webhosting256Image from '@/assets/images/Portfolio/Webhosting256.webp';
import agnesApeaImage from '@/assets/images/Portfolio/Agnes Apea.webp';
import brandlinkVenturesImage from '@/assets/images/Portfolio/Brandlink Ventures.webp';
import tanganyikaToursImage from '@/assets/images/Portfolio/Tanganyika Tours.webp';

export type Project = {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  industry: string;
  services: string[];
  year?: string;
  platform?: string;
  challenge: string;
  solution: string;
  overview: string[];
  outcomes: string[];
  tags: string[];
  liveUrl?: string;
  featured?: boolean;
  caseStudyFeatured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Invision Auto Parlour Limited',
    slug: 'invision-auto-parlour',
    category: 'Automotive / Corporate Website',
    shortDescription: 'A clearer digital presence for a growing vehicle-import business.',
    description: 'A professional business website created to present vehicle-import services clearly and help customers make enquiries with confidence.',
    image: invisionAutoParlourImage,
    imageAlt: 'Invision Auto Parlour Limited website screenshot',
    liveUrl: 'https://invisionautoparlourltd.com/',
    industry: 'Automotive',
    services: ['Website Design', 'Responsive Design', 'Service Presentation'],
    year: '2026',
    platform: 'Business Website',
    challenge: 'The business needed a stronger and more credible online presence for customers researching vehicle-import services and ways to contact the team.',
    solution: 'Laybrotech reorganised the experience around clearer service presentation, stronger visuals, and easier customer contact across desktop and mobile screens.',
    overview: [
      'Invision Auto Parlour Limited needed a website that could support customer trust before the first conversation. The project focused on presenting services, visual credibility, and contact paths in a clear structure.',
      'The finished experience gives visitors a more organised way to understand the business and take the next step without unnecessary friction.',
    ],
    outcomes: ['Clearer service presentation', 'Responsive browsing experience', 'Easier customer enquiries', 'Stronger professional presence'],
    tags: ['Responsive Design', 'Service Presentation', 'Lead Generation'],
    featured: true,
    caseStudyFeatured: true,
  },
  {
    name: 'Fahari Uganda Safaris',
    slug: 'fahari-uganda-safaris',
    category: 'Tourism / Travel Website',
    shortDescription: 'Helping travellers discover Uganda through a clearer, more visual experience.',
    description: 'A tourism and safari website designed to present destinations, experiences, and enquiries clearly for travellers planning trips in Uganda.',
    image: fahariUgandaSafarisImage,
    imageAlt: 'Fahari Uganda Safaris website screenshot',
    liveUrl: 'https://fahariugandasafaris.com/',
    industry: 'Tourism & Travel',
    services: ['Website Design', 'Content Structure', 'Responsive Design'],
    year: '2026',
    platform: 'Travel Website',
    challenge: 'The project needed to make travel experiences easier to browse while keeping the brand visual, inviting, and simple for potential travellers to contact.',
    solution: 'Laybrotech shaped the website around destination discovery, visual storytelling, and direct enquiry paths so visitors can move from interest to action.',
    overview: [
      'Fahari Uganda Safaris required a website that could communicate travel experiences quickly and visually. The work focused on clarity, imagery, and practical enquiry flow.',
      'The result supports travellers as they explore destinations and gives the business a cleaner platform for presenting safari experiences.',
    ],
    outcomes: ['More visual destination presentation', 'Clearer trip discovery', 'Mobile-friendly experience', 'Simpler enquiry flow'],
    tags: ['Tourism Website', 'Visual Storytelling', 'Enquiry Flow'],
    featured: true,
    caseStudyFeatured: true,
  },
  {
    name: 'LMK Ventures Healthcare',
    slug: 'lmk-ventures-healthcare',
    category: 'Healthcare Website',
    shortDescription: 'A clean healthcare brand presence with simple product and service presentation.',
    description: 'A healthcare brand website with a strong visual identity and clean presentation for products, services, and customer trust.',
    image: lmkVenturesHealthcareImage,
    imageAlt: 'LMK Ventures Healthcare website screenshot',
    liveUrl: 'https://lmkventure.com/',
    industry: 'Healthcare',
    services: ['Website Design', 'Brand Presentation', 'Responsive Design'],
    year: '2026',
    platform: 'Brand Website',
    challenge: 'The healthcare brand needed a cleaner digital presence that could communicate credibility and organise its offering for customers.',
    solution: 'Laybrotech created a structured website experience with clearer visuals, simpler content flow, and responsive layouts for everyday users.',
    overview: ['LMK Ventures Healthcare needed a website that could present the organisation with more clarity and confidence.', 'The project focused on product visibility, brand trust, and a simple user path across screen sizes.'],
    outcomes: ['Clean brand presentation', 'Organised service information', 'Responsive layouts', 'Improved customer clarity'],
    tags: ['Healthcare', 'Brand Website', 'Responsive Design'],
    featured: true,
  },
  {
    name: 'NARO Holdings Limited NHL',
    slug: 'naro-holdings-limited',
    category: 'Corporate Website',
    shortDescription: 'A clean corporate website for a professional organisation.',
    description: 'A business website built to present organisational information in a clear, structured, and professional way.',
    image: naroHoldingsImage,
    imageAlt: 'NARO Holdings Limited NHL website screenshot',
    liveUrl: 'https://naroholdings.co.ug/',
    industry: 'Corporate',
    services: ['Website Design', 'Corporate Presentation', 'Responsive Design'],
    year: '2026',
    platform: 'Corporate Website',
    challenge: 'The organisation needed a clearer online structure for communicating its work and professional presence.',
    solution: 'Laybrotech focused on a clean information architecture, restrained visuals, and responsive presentation to keep the website easy to browse.',
    overview: ['NARO Holdings Limited NHL needed a professional website experience for organisational communication.', 'The project focused on clarity, structure, and a design language suitable for a corporate audience.'],
    outcomes: ['Professional website presence', 'Clearer information hierarchy', 'Responsive experience'],
    tags: ['Corporate Website', 'Information Architecture', 'Responsive Design'],
    featured: true,
  },
  {
    name: 'Webhosting256',
    slug: 'webhosting256',
    category: 'Hosting Website',
    shortDescription: 'A hosting-focused website experience for presenting web service packages.',
    description: 'A hosting website designed around clear service communication, package discovery, and customer action paths.',
    image: webhosting256Image,
    imageAlt: 'Webhosting256 website screenshot',
    liveUrl: 'https://webhosting256.com/',
    industry: 'Web Hosting',
    services: ['Website Design', 'Service Presentation', 'Responsive Design'],
    year: '2026',
    platform: 'Service Website',
    challenge: 'The website needed to communicate hosting services in a way that was understandable to business customers comparing options.',
    solution: 'Laybrotech structured the experience around service clarity, package presentation, and strong calls to action.',
    overview: ['Webhosting256 required a service website that could make hosting plans and support options easier to understand.', 'The project emphasised clear content, practical navigation, and responsive design.'],
    outcomes: ['Clear package presentation', 'Service-focused structure', 'Responsive browsing'],
    tags: ['Hosting', 'Service Website', 'Packages'],
  },
  {
    name: 'Meal Card Dinner',
    slug: 'meal-card-dinner',
    category: 'Digital Experience',
    shortDescription: 'A focused digital experience built around a food and dining concept.',
    description: 'A visual digital experience shaped around food presentation and a clear customer-facing interaction.',
    image: mealCardDinnerImage,
    imageAlt: 'Meal Card Dinner project screenshot',
    liveUrl: 'https://mealcarddinner.com/',
    industry: 'Food & Dining',
    services: ['Digital Experience', 'Interface Design', 'Responsive Design'],
    year: '2026',
    platform: 'Digital Experience',
    challenge: 'The concept needed a simple, attractive digital interface for presenting meal-related content clearly.',
    solution: 'Laybrotech used a visual-first layout with focused content blocks and responsive treatment for easier browsing.',
    overview: ['Meal Card Dinner is a focused digital experience built around visual presentation and simple interaction.', 'The work explored a clean customer-facing interface for food-related content.'],
    outcomes: ['Visual-first presentation', 'Simple interaction flow', 'Responsive interface'],
    tags: ['Digital Experience', 'Food', 'Interface Design'],
  },
  {
    name: 'Agnes Apea',
    slug: 'agnes-apea',
    category: 'Personal Website',
    shortDescription: 'A personal website presenting leadership, policy, and community development work.',
    description: 'A personal website for Dr. Agnes Atim Apea, presenting her profile, advisory services, publications, and community development work.',
    image: agnesApeaImage,
    imageAlt: 'Agnes Apea personal website screenshot',
    liveUrl: 'https://agnesapea.com/',
    industry: 'Leadership & Policy',
    services: ['Website Design'],
    platform: 'Personal Website',
    challenge: 'Presenting a professional profile alongside policy, advisory, and community development work.',
    solution: 'A personal website with dedicated navigation for her profile, services, publications, and media highlights.',
    overview: ['A personal website showcasing Dr. Agnes Atim Apea and her work in development economics, policy leadership, and community development.'],
    outcomes: [],
    tags: ['Personal Website', 'Leadership', 'Community Development'],
  },
  {
    name: 'Brandlink Ventures',
    slug: 'brandlink-ventures',
    category: 'Advertising / Corporate Website',
    shortDescription: 'A visual website showcasing outdoor advertising services.',
    description: 'A corporate website presenting Brandlink Ventures and its outdoor advertising services through bold imagery and clear service information.',
    image: brandlinkVenturesImage,
    imageAlt: 'Brandlink Ventures outdoor advertising website screenshot',
    liveUrl: 'https://brandlinkventures.com/',
    industry: 'Advertising',
    services: ['Website Design'],
    platform: 'Corporate Website',
    challenge: 'Presenting outdoor advertising services and the company behind them.',
    solution: 'A visual company website with service, team, and contact information.',
    overview: ['A corporate website for Brandlink Ventures, showcasing its outdoor advertising offering and brand presence.'],
    outcomes: [],
    tags: ['Corporate Website', 'Advertising', 'Brand Presentation'],
  },
  {
    name: 'Tanganyika Tours',
    slug: 'tanganyika-tours',
    category: 'Tourism / Travel Website',
    shortDescription: 'A travel website showcasing safari tours and travel services.',
    description: 'A tourism website presenting Tanganyika Tours, safari experiences, destinations, and travel services with clear enquiry options.',
    image: tanganyikaToursImage,
    imageAlt: 'Tanganyika Tours safari and travel website screenshot',
    liveUrl: 'https://tanganyikatours.com/',
    industry: 'Tourism & Travel',
    services: ['Website Design'],
    platform: 'Travel Website',
    challenge: 'Presenting safari experiences alongside destinations and travel services.',
    solution: 'A travel website with destination and safari navigation, enquiries, and flight-booking links.',
    overview: ['A tourism and travel website for Tanganyika Tours, featuring safari tours, destination discovery, and travel services.'],
    outcomes: [],
    tags: ['Tourism Website', 'Safari Tours', 'Travel Services'],
  },
];

export const portfolioRowOneProjects: Project[] = projects.slice(0, Math.ceil(projects.length / 2));
export const portfolioRowTwoProjects: Project[] = projects.slice(Math.ceil(projects.length / 2));
export const featuredPortfolioProjects: Project[] = projects.filter((project) => project.featured);
export const caseStudyProjects: Project[] = projects.filter((project) => project.caseStudyFeatured).slice(0, 2);

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string | undefined) {
  const index = projects.findIndex((project) => project.slug === slug);

  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}

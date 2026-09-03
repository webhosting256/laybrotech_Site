import businessGrowthImage from '@/assets/images/home-hero-business-growth.webp';
import digitalEcosystemImage from '@/assets/images/home-hero-digital-ecosystem.webp';
import hostingImage from '@/assets/images/home-hero-hosting.webp';

export type HeroSlide = {
  eyebrow: string;
  headline: string;
  body: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  image: string;
  imageAlt: string;
  imagePosition: string;
};

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'Technology for Business Growth.',
    headline: 'Technology & Digital Growth Solutions for Businesses in Uganda',
    body: 'Laybrotech helps businesses build, run, and grow online through professional websites, web hosting, software solutions, and digital services.',
    primaryCta: {
      label: 'Get Free Consultation',
      href: '/contact',
    },
    secondaryCta: {
      label: 'View Our Work',
      href: '/projects',
    },
    image: businessGrowthImage,
    imageAlt: 'African business professionals collaborating around a laptop in a modern office.',
    imagePosition: 'center right',
  },
  {
    eyebrow: 'Fast. Secure. Reliable.',
    headline: 'Web Hosting Built for Growing Businesses.',
    body: 'Fast and reliable hosting backed by SSL security, dependable uptime, professional support, and infrastructure designed for growing businesses.',
    primaryCta: {
      label: 'View Hosting Plans',
      href: '/hosting',
    },
    secondaryCta: {
      label: 'Talk to an Expert',
      href: '/contact',
    },
    image: hostingImage,
    imageAlt: 'Technology professional working near server infrastructure in a modern office.',
    imagePosition: 'center right',
  },
  {
    eyebrow: 'Build. Run. Grow.',
    headline: 'Everything Your Business Needs to Succeed Online.',
    body: 'From domains and professional email to website design, software development, hosting, and digital marketing, Laybrotech brings your essential digital services together.',
    primaryCta: {
      label: 'Explore Services',
      href: '/explore-more',
    },
    secondaryCta: {
      label: 'Talk to Sales',
      href: '/contact',
    },
    image: digitalEcosystemImage,
    imageAlt: 'African professionals planning digital services around a laptop in a refined workspace.',
    imagePosition: '60% center',
  },
];

export const trustItems = [
  { label: 'Customer Satisfaction', value: '97%' },
  { label: 'Best Rated Digital Marketing', value: '4.5' },
  { label: 'Projects Completed', value: '353' },
];



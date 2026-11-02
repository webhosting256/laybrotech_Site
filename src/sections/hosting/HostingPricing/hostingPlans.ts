export type HostingFeature = {
  label: string;
  included: boolean;
};

export type HostingFeatureGroup = {
  title: string;
  features: HostingFeature[];
};

export type HostingPlan = {
  name: string;
  badge: string;
  audience: string;
  pricing: string;
  cta: string;
  href: string;
  recommended?: boolean;
  featureGroups: HostingFeatureGroup[];
};

export const hostingPlans: HostingPlan[] = [
  {
    name: 'Starter Hosting',
    badge: 'Starting Plan',
    audience: 'Simple, reliable hosting for small websites, portfolios, and new businesses.',
    pricing: 'UGX 700,000',
    cta: 'Get Starter Hosting',
    href: '/contact',
    featureGroups: [
      {
        title: 'Core Hosting',
        features: [
          { label: '1 Website', included: true },
          { label: '5GB SSD Storage', included: true },
          { label: 'Business Email', included: true },
          { label: 'cPanel Access', included: true },
        ],
      },
      {
        title: 'Performance & Security',
        features: [
          { label: 'Free SSL Certificate', included: true },
          { label: 'Website Monitoring', included: true },
          { label: 'Unlimited Bandwidth', included: false },
          { label: 'Daily Backups', included: false },
        ],
      },
      {
        title: 'Support',
        features: [
          { label: 'Weekly Backups', included: true },
          { label: 'Priority Support', included: false },
        ],
      },
    ],
  },
  {
    name: 'Business Hosting',
    badge: 'Most Popular',
    audience: 'More power, storage, and support for growing business websites and organisations.',
    pricing: 'UGX 1,500,000',
    cta: 'Choose Business Hosting',
    href: '/contact',
    recommended: true,
    featureGroups: [
      {
        title: 'Core Hosting',
        features: [
          { label: 'Multiple Websites', included: true },
          { label: '20GB SSD Storage', included: true },
          { label: 'Unlimited Emails', included: true },
          { label: 'cPanel Access', included: true },
        ],
      },
      {
        title: 'Performance & Security',
        features: [
          { label: 'Free SSL Certificate', included: true },
          { label: 'Unlimited Bandwidth', included: true },
          { label: 'Faster Performance', included: true },
          { label: 'Daily Backups', included: true },
        ],
      },
      {
        title: 'Support',
        features: [
          { label: 'Website Monitoring', included: true },
          { label: 'Priority Support', included: true },
        ],
      },
    ],
  },
  {
    name: 'Enterprise Hosting',
    badge: 'Business Ready',
    audience: 'Advanced hosting resources for high-traffic websites, large organisations, and demanding platforms.',
    pricing: 'UGX 2,500,000',
    cta: 'Talk to Sales',
    href: '/contact',
    featureGroups: [
      {
        title: 'Core Hosting',
        features: [
          { label: 'Multiple Websites', included: true },
          { label: 'Large SSD Storage', included: true },
          { label: 'Unlimited Emails', included: true },
          { label: 'Dedicated Resources', included: true },
        ],
      },
      {
        title: 'Performance & Security',
        features: [
          { label: 'Advanced Security', included: true },
          { label: 'Unlimited Bandwidth', included: true },
          { label: 'Daily Backups', included: true },
          { label: 'Performance Optimisation', included: true },
        ],
      },
      {
        title: 'Support',
        features: [
          { label: 'Website Monitoring', included: true },
          { label: 'Premium Technical Support', included: true },
        ],
      },
    ],
  },
];



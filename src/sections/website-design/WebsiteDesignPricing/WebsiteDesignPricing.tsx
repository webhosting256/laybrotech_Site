import { ArrowRight, Check } from 'lucide-react';

import { ButtonLink } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import { whatsappHref } from '@/lib/contact';

type WebsiteDesignPackage = {
  name: string;
  badge: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
};

const websiteDesignPackages: WebsiteDesignPackage[] = [
  {
    name: 'Basic',
    badge: 'Basic Package',
    price: 'UGX 1,500,000',
    description: 'A professional starting point for small businesses that need a clear online presence.',
    features: [
      'FREE .com domain',
      'FREE SSL certificate',
      'Mobile-responsive pages',
      'Up to 4 pages',
      '10 business emails',
      'Content Management System',
      '1 revision',
      'SEO-friendly structure',
      'Social media integration',
      'Google Analytics setup',
      'Google Maps inclusion',
    ],
  },
  {
    name: 'Standard',
    badge: 'Most Popular',
    price: 'UGX 2,000,000',
    description: 'A more complete website package for growing businesses that need additional pages, support, and optimisation.',
    features: [
      'FREE .com domain',
      'FREE SSL certificate',
      'Mobile-responsive pages',
      '5-7 pages',
      '20 business emails',
      'Content Management System',
      '2 revisions',
      'SEO-friendly structure',
      'Sitemap development',
      'Social media integration',
      'Google Analytics setup',
      'Google Maps inclusion',
      'Search engine registration',
    ],
    recommended: true,
  },
  {
    name: 'Advanced',
    badge: 'Advanced Package',
    price: 'UGX 2,800,000',
    description: 'For businesses needing a larger website, more advanced optimisation, integrations, and e-commerce support.',
    features: [
      'FREE .org or .com domain',
      'FREE hosting for 1 year',
      'FREE SSL certificate',
      'Custom responsive design',
      'Unlimited pages',
      '50+ business emails',
      'CMS training',
      '4 revisions',
      'Advanced SEO',
      'Sitemap development',
      'Customer chat app',
      'Basic e-commerce support',
    ],
  },
];

export function WebsiteDesignPricing() {
  return (
    <section id="website-design-packages" className="bg-[#fff] px-5 py-24 sm:px-6 sm:py-28 lg:py-32" aria-labelledby="website-design-pricing-heading">
      <div className="mx-auto w-full max-w-container">
        <div className="mx-auto max-w-[44rem] text-center">
          <p className="type-eyebrow">Website Design Packages</p>
          <h2 id="website-design-pricing-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">
            Choose the Right Starting Point for Your Website.
          </h2>
          <p className="mx-auto mt-5 max-w-readable text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
            Choose a package based on the size, content, functionality, and level of support your website needs.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {websiteDesignPackages.map((item) => (
            <WebsiteDesignPricingCard item={item} key={item.name} />
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[46rem] text-center text-sm leading-6 text-[#766e67]">
          Project requirements may vary. Final scope and pricing are confirmed after discussing your website needs.
        </p>
        <p className="mx-auto mt-3 max-w-[46rem] text-center text-sm leading-6 text-[#766e67]">
          For advanced email providers such as Google Workspace, Zoho, and Microsoft 365, their per-user package prices apply.
        </p>
      </div>
    </section>
  );
}

function WebsiteDesignPricingCard({ item }: { item: WebsiteDesignPackage }) {
  const isFeatured = Boolean(item.recommended);

  return (
    <article
      className={cn(
        'relative flex min-h-full flex-col overflow-hidden rounded-[1.35rem] p-6 sm:p-7 lg:p-8',
        isFeatured
          ? 'z-10 bg-[linear-gradient(135deg,#171717_0%,#32180d_46%,#7a2b08_78%,#d94f04_128%)] text-[#fffaf5] shadow-[0_24px_55px_rgb(23_23_23/0.20)] lg:-mt-4 lg:mb-4'
          : 'bg-white text-[#18181b] shadow-[0_18px_45px_rgb(23_23_23/0.11)]',
      )}
    >
      <div className="flex min-h-[18rem] flex-col">
        <span
          className={cn(
            'w-fit rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase leading-5 tracking-normal',
            isFeatured ? 'bg-[#fff4ed] text-[#b84608]' : 'bg-[#fff4ed] text-[#f25a05]',
          )}
        >
          {item.badge}
        </span>

        <h3 className={cn('mt-5 text-[1.7rem] font-semibold leading-tight', isFeatured ? 'text-[#fffaf5]' : 'text-[#18181b]')}>{item.name}</h3>
        <p className={cn('mt-4 min-h-[5.7rem] text-sm leading-6', isFeatured ? 'text-[#e8dfd6]' : 'text-[#5f5a56]')}>{item.description}</p>
        <p className={cn('mt-1 text-[2rem] font-semibold leading-tight', isFeatured ? 'text-white' : 'text-[#18181b]')}>{item.price}</p>

        <div className="mt-6">
          <ButtonLink
            className={cn(
              'w-full',
              isFeatured
                ? 'bg-[#f25a05] text-white hover:bg-[#d94f04]'
                : 'border border-[#f25a05] !bg-transparent !text-[#f25a05] hover:!bg-[#fff4ed] hover:!text-[#d94f04]',
            )}
            href={whatsappHref}
            rightIcon={<ArrowRight className="transition-transform duration-smooth group-hover:translate-x-1" />}
            size="lg"
          >
            Start Your Project
          </ButtonLink>
        </div>
      </div>

      <div className={cn('my-7 h-px w-full', isFeatured ? 'bg-white/16' : 'bg-[#e5e1dc]')} />

      <ul className="grid gap-3" aria-label={item.name + ' package features'}>
        {item.features.map((feature) => (
          <li className={cn('flex items-start gap-3 text-sm font-medium leading-6', isFeatured ? 'text-[#fffaf5]' : 'text-[#332f2b]')} key={feature}>
            <Check className={cn('mt-1 size-4 shrink-0', isFeatured ? 'text-[#86efac]' : 'text-[#16a34a]')} aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}


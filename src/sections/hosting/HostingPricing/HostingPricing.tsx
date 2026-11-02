import { ArrowRight, Check, Minus } from 'lucide-react';

import { ButtonLink } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

import { hostingPlans, type HostingPlan } from './hostingPlans';

export function HostingPricing() {
  return (
    <section id="hosting-plans" className="bg-[#fff] px-5 pb-20 pt-20 sm:px-6 sm:pb-24 sm:pt-24 lg:pb-32 lg:pt-28" aria-labelledby="hosting-pricing-heading">
      <div className="mx-auto w-full max-w-container">
        <div className="mx-auto max-w-[44rem] text-center">
          <p className="type-eyebrow">Hosting Plans</p>
          <h2 id="hosting-pricing-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">
            Choose the Hosting Plan That Fits Your Business.
          </h2>
          <p className="mx-auto mt-5 max-w-readable text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
            Simple, reliable hosting plans for personal websites, growing businesses, organisations, and high-traffic platforms.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {hostingPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-[46rem] text-center text-sm leading-6 text-[#766e67]">
          For advanced email providers such as Google Workspace, Zoho, and Microsoft 365, their per-user package prices apply.
        </p>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: HostingPlan }) {
  const isFeatured = Boolean(plan.recommended);

  return (
    <article
      className={cn(
        'relative flex min-h-full flex-col overflow-hidden rounded-[1.35rem] p-6 sm:p-7 lg:p-8',
        isFeatured
          ? 'z-10 bg-[linear-gradient(135deg,#171717_0%,#32180d_46%,#7a2b08_78%,#d94f04_128%)] text-[#fffaf5] shadow-[0_24px_55px_rgb(23_23_23/0.20)] lg:-mt-4 lg:mb-4'
          : 'bg-white text-[#18181b] shadow-[0_18px_45px_rgb(23_23_23/0.11)]',
      )}
    >
      <div className="flex min-h-[17rem] flex-col">
        <span
          className={cn(
            'w-fit rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase leading-5 tracking-normal',
            isFeatured ? 'bg-[#fff4ed] text-[#b84608]' : 'bg-[#fff4ed] text-[#f25a05]',
          )}
        >
          {plan.badge}
        </span>

        <h3 className={cn('mt-5 text-[1.7rem] font-semibold leading-tight', isFeatured ? 'text-[#fffaf5]' : 'text-[#18181b]')}>{plan.name}</h3>
        <p className={cn('mt-3 min-h-[4.8rem] text-sm leading-6', isFeatured ? 'text-[#e8dfd6]' : 'text-[#5f5a56]')}>{plan.audience}</p>
        <p className={cn('mt-1 text-[1.8rem] font-semibold leading-tight', isFeatured ? 'text-white' : 'text-[#18181b]')}>{plan.pricing}</p>

        <div className="mt-6">
          <ButtonLink
            className={cn(
              'w-full',
              isFeatured
                ? 'bg-[#f25a05] text-white hover:bg-[#d94f04]'
                : 'border border-[#f25a05] !bg-transparent !text-[#f25a05] hover:!bg-[#fff4ed] hover:!text-[#d94f04]',
            )}
            href={plan.href}
            rightIcon={<ArrowRight className="transition-transform duration-smooth group-hover:translate-x-1" />}
            size="lg"
          >
            {plan.cta}
          </ButtonLink>
        </div>
      </div>

      <div className={cn('my-7 h-px w-full', isFeatured ? 'bg-white/16' : 'bg-[#e5e1dc]')} />

      <div className="grid gap-6">
        {plan.featureGroups.map((group) => (
          <div key={group.title}>
            <h4 className={cn('text-xs font-bold uppercase leading-5 tracking-normal', isFeatured ? 'text-[#ffb07a]' : 'text-[#8a6a55]')}>{group.title}</h4>
            <ul className="mt-3 grid gap-3" aria-label={`${plan.name} ${group.title} features`}>
              {group.features.map((feature) => (
                <li
                  className={cn(
                    'flex items-start gap-3 text-sm font-medium leading-6',
                    feature.included ? (isFeatured ? 'text-[#fffaf5]' : 'text-[#332f2b]') : isFeatured ? 'text-white/42' : 'text-[#9a928b]',
                  )}
                  key={feature.label}
                >
                  <span
                    className={cn(
                      'mt-1 flex size-4 shrink-0 items-center justify-center',
                      feature.included ? (isFeatured ? 'text-[#86efac]' : 'text-[#16a34a]') : isFeatured ? 'text-white/35' : 'text-[#b6aea6]',
                    )}
                    aria-hidden="true"
                  >
                    {feature.included ? <Check className="size-4" /> : <Minus className="size-4" />}
                  </span>
                  <span>{feature.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}








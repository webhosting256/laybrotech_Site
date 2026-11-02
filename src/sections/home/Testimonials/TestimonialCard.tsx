import { Star } from 'lucide-react';

import { cn } from '@/lib/cn';

import type { Testimonial } from './testimonialData';

const avatarToneClass = {
  orange: 'bg-[#f25a05] text-white',
  charcoal: 'bg-[#242424] text-[#fffaf5]',
  warm: 'bg-[#fff4ed] text-[#f25a05]',
  green: 'bg-[#16803c] text-white',
} satisfies Record<Testimonial['avatarTone'], string>;

type RatingStarsProps = {
  rating: number;
  className?: string;
};

export function RatingStars({ rating, className }: RatingStarsProps) {
  return (
    <div className={cn('flex items-center gap-1', className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={cn('size-4 text-[#f6b51e]', index < rating && 'fill-[#f6b51e]')}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

type TestimonialAvatarProps = {
  testimonial: Testimonial;
  className?: string;
};

export function TestimonialAvatar({ testimonial, className }: TestimonialAvatarProps) {
  if (testimonial.avatarImage) {
    return (
      <img
        className={cn('shrink-0 rounded-full object-cover ring-4 ring-white', className)}
        src={testimonial.avatarImage}
        alt={testimonial.name}
        width={64}
        height={64}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center rounded-full text-base font-bold ring-4 ring-white',
        avatarToneClass[testimonial.avatarTone],
        className,
      )}
      role="img"
      aria-label={`${testimonial.name} avatar`}
    >
      {testimonial.initials}
    </div>
  );
}

type TestimonialCardProps = {
  testimonial: Testimonial;
  onOpen: (testimonial: Testimonial) => void;
};

export function TestimonialCard({ testimonial, onOpen }: TestimonialCardProps) {
  return (
    <button
      className="group relative flex min-h-[330px] w-[86vw] shrink-0 snap-start flex-col rounded-[1.25rem] bg-[#f4f4f5] p-6 pt-12 text-center transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#f25a05]/45 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
      type="button"
      onClick={() => onOpen(testimonial)}
      aria-label={`Read full testimonial from ${testimonial.name}`}
    >
      <TestimonialAvatar testimonial={testimonial} className="absolute left-1/2 top-0 size-16 -translate-x-1/2 -translate-y-1/2" />
      <div className="flex flex-1 flex-col items-center">
        <h3 className="text-lg font-semibold leading-tight text-[#18181b]">{testimonial.name}</h3>
        <p className="mt-1 text-sm font-semibold leading-5 text-[#7a756f]">{testimonial.meta}</p>
        <div className="mt-5">
          <RatingStars rating={testimonial.rating} className="justify-center" />
        </div>
        <p className="mt-5 text-xl font-semibold leading-tight text-[#18181b]">{testimonial.title}</p>
        <p className="testimonial-excerpt mt-4 text-base leading-7 text-[#3f3f46]">{testimonial.excerpt}</p>
        <span className="mt-6 inline-flex w-fit items-center text-sm font-bold text-[#f25a05] transition-colors duration-smooth group-hover:text-[#d94f04]">
          Read more
        </span>
      </div>
    </button>
  );
}

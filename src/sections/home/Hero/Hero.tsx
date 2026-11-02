import { useEffect, useMemo, useState } from 'react';

import { HeroControls } from './HeroControls';
import { HeroSlide } from './HeroSlide';
import { heroSlides } from './heroData';
import { TrustStrip } from './TrustStrip';

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    function handleChange() {
      setPrefersReducedMotion(mediaQuery.matches);
    }

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [interactionKey, setInteractionKey] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const slideCount = heroSlides.length;

  const goToSlide = useMemo(
    () => (nextIndex: number) => {
      setActiveIndex((nextIndex + slideCount) % slideCount);
      setInteractionKey((current) => current + 1);
    },
    [slideCount],
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [interactionKey, prefersReducedMotion, slideCount]);

  return (
    <section
      className="relative bg-white pb-16 sm:pb-24"
      aria-label="Laybrotech homepage hero"
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          goToSlide(activeIndex - 1);
        }

        if (event.key === 'ArrowRight') {
          goToSlide(activeIndex + 1);
        }
      }}
    >
      <div className="relative min-h-[100vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <HeroSlide key={slide.headline} slide={slide} isActive={activeIndex === index} isFirst={index === 0} />
        ))}

        <HeroControls
          activeIndex={activeIndex}
          slideCount={slideCount}
          onPrevious={() => goToSlide(activeIndex - 1)}
          onNext={() => goToSlide(activeIndex + 1)}
          onSelect={goToSlide}
        />
      </div>

      <TrustStrip />
    </section>
  );
}

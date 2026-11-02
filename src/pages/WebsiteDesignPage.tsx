import { Footer } from '@/components/layout/Footer';
import { whatsappHref } from '@/lib/contact';
import { FAQ } from '@/sections/home/FAQ';
import { FinalCTA } from '@/sections/home/FinalCTA';
import { Testimonials } from '@/sections/home/Testimonials';
import { DesignedToPerform } from '@/sections/website-design/DesignedToPerform';
import { WebsiteDesignHero } from '@/sections/website-design/WebsiteDesignHero';
import { WebsiteDesignPortfolio } from '@/sections/website-design/WebsiteDesignPortfolio';
import { WebsiteDesignPricing } from '@/sections/website-design/WebsiteDesignPricing';
import { WebsiteDesignProcess } from '@/sections/website-design/WebsiteDesignProcess';
import { WebsiteDesignServices } from '@/sections/website-design/WebsiteDesignServices';
import { WebsiteDesignTrustBar } from '@/sections/website-design/WebsiteDesignTrustBar';
import { websiteDesignFaqItems, websiteDesignTestimonials } from '@/sections/website-design/websiteDesignPageContent';
import { WebsitePostLaunchSupport } from '@/sections/website-design/WebsitePostLaunchSupport';
import { WhoThisIsFor } from '@/sections/website-design/WhoThisIsFor';

export function WebsiteDesignPage() {
  return (
    <>
      <WebsiteDesignHero />
      <WebsiteDesignPricing />
      <WebsiteDesignTrustBar />
      <DesignedToPerform />
      <WhoThisIsFor />
      <WebsiteDesignServices />
      <WebsiteDesignPortfolio />
      <WebsiteDesignProcess />
      <WebsitePostLaunchSupport />
      <Testimonials
        eyebrow="Website Design Testimonials"
        heading="Websites Clients Are Proud to Share."
        copy="Hear from businesses that have worked with Laybrotech to improve their websites, online presence, and customer experience."
        items={websiteDesignTestimonials}
      />
      <FAQ
        eyebrow="Website Design FAQ"
        heading="Website Design Questions, Answered."
        copy="Find quick answers about timelines, content, redesigns, updates, search visibility, support, and getting started."
        items={websiteDesignFaqItems}
      />
      <FinalCTA
        heading="Ready to Build a Website That Works for Your Business?"
        primaryLabel="Start Your Project"
        primaryHref={whatsappHref}
        showSecondary={false}
      />
      <Footer />
    </>
  );
}


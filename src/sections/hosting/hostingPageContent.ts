import type { FAQEntry } from '@/sections/home/FAQ/faqData';
import { testimonials } from '@/sections/home/Testimonials/testimonialData';

export const hostingTestimonials = testimonials;

export const hostingFaqItems: FAQEntry[] = [
  {
    id: 'choose-hosting-plan',
    question: 'Which hosting plan should I choose?',
    answer:
      'The right plan depends on your website size, traffic, storage requirements, and the level of support you need. Starter Hosting is suitable for smaller websites, Business Hosting is designed for growing business websites, and Enterprise Hosting is intended for more demanding platforms and organisations.',
  },
  {
    id: 'migrate-existing-website',
    question: 'Can Laybrotech migrate my existing website?',
    answer:
      'Yes. Laybrotech can assist with moving your existing website files, database, domain configuration, and essential settings to the Laybrotech hosting environment.',
  },
  {
    id: 'ssl-included',
    question: 'Is an SSL certificate included?',
    answer:
      'Yes. SSL security is included with Laybrotech hosting plans so your website can use secure HTTPS connections.',
  },
  {
    id: 'website-backups',
    question: 'Are website backups included?',
    answer:
      'Backup availability depends on the hosting plan. Laybrotech hosting includes backup options designed to help protect website files and data.',
  },
  {
    id: 'business-email-hosting',
    question: 'Can I use professional business email with my hosting?',
    answer:
      'Yes. Laybrotech hosting supports professional business email using your own domain, helping your business communicate with a more professional identity.',
  },
  {
    id: 'more-hosting-resources',
    question: 'What happens if my website needs more resources later?',
    answer:
      'You can move to a more suitable hosting plan as your website grows and requires additional storage, bandwidth, performance, or support.',
  },
  {
    id: 'cpanel-access',
    question: 'Do I get cPanel access?',
    answer:
      'cPanel access is available on supported Laybrotech hosting plans, giving you tools to manage website files, databases, email, domains, and other hosting settings.',
  },
  {
    id: 'hosting-support',
    question: 'How do I get hosting support?',
    answer:
      'You can contact the Laybrotech support team for assistance with hosting setup, website configuration, migration, email, and other technical hosting needs.',
  },
];

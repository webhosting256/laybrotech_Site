import type { FAQEntry } from '@/sections/home/FAQ/faqData';
import { testimonials } from '@/sections/home/Testimonials/testimonialData';

export const softwareTestimonials = testimonials;

export const softwareFaqItems: FAQEntry[] = [
  {
    id: 'software-timeline',
    question: 'How long does software development take?',
    answer: 'Timelines depend on the complexity, number of features, integrations, testing requirements, and how quickly project feedback is provided.',
  },
  {
    id: 'software-upgrade',
    question: 'Can you upgrade an existing system?',
    answer: 'Yes. Laybrotech can review existing software and help improve functionality, user experience, performance, integrations, or underlying workflows where appropriate.',
  },
  {
    id: 'software-support',
    question: 'Do you provide ongoing support?',
    answer: 'Yes. Ongoing maintenance, technical support, updates, and system improvements can be provided after deployment.',
  },
  {
    id: 'software-remote-access',
    question: 'Can the software be accessed remotely?',
    answer: 'Web-based and cloud-based systems can be designed for secure remote access depending on the requirements of the project.',
  },
  {
    id: 'software-mobile-apps',
    question: 'Do you build mobile applications?',
    answer: 'Yes. Laybrotech develops mobile applications for business, customer, and service-related use cases.',
  },
  {
    id: 'software-integrations',
    question: 'Can software integrate with other systems?',
    answer: 'Where supported, custom software can be designed to exchange information with external platforms and services through APIs and other integrations.',
  },
  {
    id: 'software-get-started',
    question: 'How do I start a software project?',
    answer: 'Start by sharing the problem, process, or business requirement you want to improve. Laybrotech can review the idea and help define the appropriate solution.',
  },
];

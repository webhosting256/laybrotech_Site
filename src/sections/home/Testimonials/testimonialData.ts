export type Testimonial = {
  id: string;
  name: string;
  meta: string;
  initials: string;
  avatarTone: 'orange' | 'charcoal' | 'warm' | 'green';
  rating: number;
  title: string;
  excerpt: string;
  fullReview: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 'amos-booklines-africa',
    name: 'Amos',
    meta: 'Director, Booklines Africa',
    initials: 'A',
    avatarTone: 'orange',
    rating: 5,
    title: 'They are quick to respond to inquiries',
    excerpt:
      'I have worked with Laybrotech since 2019 and all this time i have not had any issues with them.',
    fullReview:
      'I have worked with Laybrotech since 2019 and all this time i have not had any issues with them. They are quick to respond to inquiries and are professional in their interaction with my team. I would recommend them to any one in need of their services',
  },
  {
    id: 'sandra-hindfeet-project',
    name: 'Sandra',
    meta: 'Director, Hindfeet Project',
    initials: 'S',
    avatarTone: 'charcoal',
    rating: 5,
    title: 'They always respond timely',
    excerpt:
      'I have interacted with especially Ronnie for my website redesign, hosting and email and he has been very helpful every time.',
    fullReview:
      'I have interacted with especially Ronnie for my website redesign, hosting and email and he has been very helpful every time. They always respond timely when i need some help. Thank you, Laybrotech team, for your service.',
  },
  {
    id: 'paul-nyenga-hospital',
    name: 'Paul',
    meta: 'Procurement, Nyenga Hospital',
    initials: 'P',
    avatarTone: 'warm',
    rating: 5,
    title: 'They are the best in Uganda',
    excerpt:
      'They restored the website, sorted and moved our all emails and domain and from then we have not faced any other downtime.',
    fullReview:
      'Our website was having issues with the previous developer and it was always on and off so we got recommended Laybrotech. They restored the website, sorted and moved our all emails and domain and from then we have not faced any other downtime. They are the best in Uganda',
  },
  {
    id: 'isaac-luba-properties',
    name: 'Isaac',
    meta: 'Manager, Luba properties',
    initials: 'I',
    avatarTone: 'green',
    rating: 5,
    title: 'Quality, high-end solutions on time',
    excerpt:
      "I'm highly impressed by the highly professional IT support offered by Laybrotech it delivers quality, high-end solutions on time.",
    fullReview:
      "I'm highly impressed by the highly professional IT support offered by Laybrotech it delivers quality, high-end solutions on time. Their commitment to excellence, reliability, and customer satisfaction makes them a company I would confidently recommend to any business seeking corporate IT services.",
  },
  {
    id: 'hon-dr-agness-apea',
    name: 'Hon Dr Agness Apea',
    meta: 'Personal Website',
    initials: 'AA',
    avatarTone: 'orange',
    rating: 5,
    title: 'They are the best designers',
    excerpt:
      'They are the best designers and they are very professional. A friend recommended them and i was not disappointed.',
    fullReview:
      'They are the best designers and they are very professional. A friend recommended them and i was not disappointed. Thank you Laybrotech for pulling off the design i had in my mind',
  },
];

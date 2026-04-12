export interface Testimonial {
  id: string;
  name: string;
  role: string;
  event: string;
  content: string;
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Amara & Chidi',
    role: 'Newlyweds',
    event: 'Wedding Reception',
    content: 'Jewels Event transformed our wedding venue into a dream come true. The attention to detail was incredible, and our guests are still talking about the beautiful decorations. Truly jewel-quality service!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Mrs. Okonkwo',
    role: 'Event Host',
    event: '50th Birthday Party',
    content: 'I wanted something elegant and classy for my 50th birthday, and Jewels Event delivered beyond my expectations. The gold and white theme was absolutely stunning. Highly recommended!',
    rating: 5,
  },
  {
    id: '3',
    name: 'David Emeka',
    role: 'CEO, TechStart',
    event: 'Corporate Gala',
    content: 'Professional, punctual, and perfectionists - that\'s how I describe Jewels Event. Our corporate gala was a huge success thanks to their impeccable decoration and rental services.',
    rating: 5,
  },
  {
    id: '4',
    name: 'The Adeyemi Family',
    role: 'Clients',
    event: 'Traditional Wedding',
    content: 'They understood our vision for a traditional wedding with modern elegance. The combination was perfect! Their team was courteous and delivered on time.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Sarah Johnson',
    role: 'Event Planner',
    event: 'Multiple Events',
    content: 'As an event planner, I\'ve worked with many decoration companies, but Jewels Event stands out for their creativity and reliability. They\'re now my go-to partner for all events.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Michael & Grace',
    role: 'Newlyweds',
    event: 'Outdoor Wedding',
    content: 'Our outdoor wedding was at risk due to weather concerns, but Jewels Event had everything covered - literally! The tent setup was beautiful and our day was perfect.',
    rating: 5,
  },
];

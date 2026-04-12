export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  type: string;
  category: 'weddings' | 'birthdays' | 'corporate' | 'traditional' | 'outdoor';
  description: string;
  image: string;
}

export const galleryCategories = [
  { id: 'all', name: 'All Events' },
  { id: 'weddings', name: 'Weddings' },
  { id: 'birthdays', name: 'Birthdays' },
  { id: 'corporate', name: 'Corporate' },
  { id: 'traditional', name: 'Traditional' },
  { id: 'outdoor', name: 'Outdoor' },
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Royal White Wedding',
    location: 'Lagos, Nigeria',
    type: 'Wedding Reception',
    category: 'weddings',
    description: 'An elegant all-white wedding reception with gold accents and stunning floral arrangements.',
    image: '/gallery1.jpg',
  },
  {
    id: '2',
    title: 'Golden Anniversary',
    location: 'Abuja, Nigeria',
    type: '50th Anniversary',
    category: 'weddings',
    description: 'A golden-themed 50th wedding anniversary celebration with luxurious decor.',
    image: '/gallery2.jpg',
  },
  {
    id: '3',
    title: 'Sweet 16 Celebration',
    location: 'Port Harcourt, Nigeria',
    type: 'Birthday Party',
    category: 'birthdays',
    description: 'A glamorous sweet 16 birthday with pink and gold theme.',
    image: '/gallery3.jpg',
  },
  {
    id: '4',
    title: 'CEO Birthday Gala',
    location: 'Lagos, Nigeria',
    type: '40th Birthday',
    category: 'birthdays',
    description: 'A sophisticated black and gold themed 40th birthday celebration.',
    image: '/gallery4.jpg',
  },
  {
    id: '5',
    title: 'Annual Gala Dinner',
    location: 'Lagos, Nigeria',
    type: 'Corporate Event',
    category: 'corporate',
    description: 'An elegant corporate gala dinner with premium table settings.',
    image: '/gallery5.jpg',
  },
  {
    id: '6',
    title: 'Product Launch',
    location: 'Abuja, Nigeria',
    type: 'Corporate Event',
    category: 'corporate',
    description: 'A modern product launch event with sleek, minimalist design.',
    image: '/gallery6.jpg',
  },
  {
    id: '7',
    title: 'Traditional Wedding',
    location: 'Enugu, Nigeria',
    type: 'Traditional Ceremony',
    category: 'traditional',
    description: 'A beautiful traditional wedding ceremony with cultural elements.',
    image: '/gallery7.jpg',
  },
  {
    id: '8',
    title: 'Naming Ceremony',
    location: 'Ibadan, Nigeria',
    type: 'Traditional Event',
    category: 'traditional',
    description: 'A colorful traditional naming ceremony with authentic decorations.',
    image: '/gallery8.jpg',
  },
  {
    id: '9',
    title: 'Garden Wedding',
    location: 'Lagos, Nigeria',
    type: 'Outdoor Wedding',
    category: 'outdoor',
    description: 'A romantic outdoor garden wedding with natural floral arrangements.',
    image: '/gallery9.jpg',
  },
  {
    id: '10',
    title: 'Beach Party',
    location: 'Lekki, Nigeria',
    type: 'Outdoor Event',
    category: 'outdoor',
    description: 'A stunning beachside celebration with tropical decorations.',
    image: '/gallery10.jpg',
  },
  {
    id: '11',
    title: 'Luxury Bridal Shower',
    location: 'Lagos, Nigeria',
    type: 'Bridal Shower',
    category: 'weddings',
    description: 'An intimate and elegant bridal shower with blush and gold theme.',
    image: '/gallery11.jpg',
  },
  {
    id: '12',
    title: 'Executive Board Meeting',
    location: 'Abuja, Nigeria',
    type: 'Corporate Event',
    category: 'corporate',
    description: 'A professional board meeting setup with premium furnishings.',
    image: '/gallery12.jpg',
  },
];

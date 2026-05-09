export interface RentalItem {
  id: string;
  name: string;
  description: string;
  category: string;
  price?: string;
}

export const rentalCategories = [
  'All',
  'Seating',
  'Tables',
  'Tents & Canopy',
  'Lighting',
  'Decor',
  'Stage',
];

export const rentals: RentalItem[] = [
  {
    id: 'tents',
    name: 'Luxury Tents',
    description: 'Spacious, weather-resistant tents perfect for outdoor events. Available in various sizes.',
    category: 'Tents & Canopy',
    price: 'From ₦500,000',
  },
  {
    id: 'canopy',
    name: 'Elegant Canopy',
    description: 'Beautiful canopy setups for receptions, entrances, and outdoor dining areas.',
    category: 'Tents & Canopy',
    price: 'From ₦30,000',
  },
  {
    id: 'plastic-chairs',
    name: 'Plastic Chairs',
    description: 'Durable, clean plastic chairs suitable for large gatherings and outdoor events.',
    category: 'Seating',
    price: 'From ₦300/chair',
  },
  {
    id: 'chiavari-chairs',
    name: 'Chiavari Chairs',
    description: 'Elegant gold or silver Chiavari chairs that add sophistication to any event.',
    category: 'Seating',
    price: 'From ₦1,500/chair',
  },
  {
    id: 'royal-chairs',
    name: 'Royal Chairs',
    description: 'Ornate royal chairs with plush cushioning for VIP seating and head tables.',
    category: 'Seating',
    price: 'From ₦5,000/chair',
  },
  {
    id: 'throne-chairs',
    name: 'Throne Chairs',
    description: 'Majestic throne chairs for the bride, groom, or special guests of honor.',
    category: 'Seating',
    price: 'From ₦35,000',
  },
  {
    id: 'round-tables',
    name: 'Round Tables',
    description: 'Classic round tables perfect for dining setups and guest seating.',
    category: 'Tables',
    price: 'From ₦5,000/table',
  },
  {
    id: 'rectangle-tables',
    name: 'Rectangle Tables',
    description: 'Versatile rectangular tables for buffet setups, displays, or dining.',
    category: 'Tables',
    price: 'From ₦2,500/table',
  },
  {
    id: 'rugs',
    name: 'Decorative Rugs',
    description: 'Premium rugs and carpets to elevate your event space and add warmth.',
    category: 'Decor',
    price: 'From ₦10,000',
  },
  {
    id: 'led-lights',
    name: 'LED Lighting',
    description: 'Stunning LED lighting solutions including uplights, string lights, and spotlights.',
    category: 'Lighting',
    price: 'From ₦15,000',
  },
  {
    id: 'decorative-stands',
    name: 'Decorative Stands',
    description: 'Elegant stands for floral arrangements, centerpieces, and decorative displays.',
    category: 'Decor',
    price: 'From ₦2,000',
  },
  {
    id: 'stage-platforms',
    name: 'Stage Platforms',
    description: 'Professional stage platforms for performances, speeches, and ceremonies.',
    category: 'Stage',
    price: 'From ₦40,000',
  },
];

export interface Package {
  id: string;
  name: string;
  tier: 'silver' | 'gold' | 'diamond';
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const packages: Package[] = [
  {
    id: 'silver',
    name: 'Silver Package',
    tier: 'silver',
    price: 'Starting from ₦2,000,000',
    description: 'Perfect for intimate gatherings and budget-friendly celebrations',
    features: [
      'Budget-friendly decoration',
      'Simple elegant backdrop',
      'Basic ambient lighting',
      'Standard chair dressing',
      'Classic table styling',
      'Basic floral arrangements',
      'Setup and takedown included',
    ],
  },
  {
    id: 'gold',
    name: 'Gold Package',
    tier: 'gold',
    price: 'Starting from ₦4,500,000',
    description: 'Our most popular choice for premium events',
    features: [
      'Premium decoration design',
      'Luxury backdrop with custom elements',
      'Enhanced lighting setup',
      'Beautiful floral arrangements',
      'Elegant chair and table styling',
      'Red carpet entrance',
      'Dedicated event coordinator',
      'Setup and takedown included',
    ],
    popular: true,
  },
  {
    id: 'diamond',
    name: 'Diamond Package',
    tier: 'diamond',
    price: 'Starting from ₦8,500,000',
    description: 'The ultimate luxury experience for unforgettable events',
    features: [
      'High-end luxury decoration',
      'Full venue transformation',
      'Customized theme concept',
      'Premium floral installations',
      'Luxury lighting & effects',
      'VIP seating arrangement',
      'Red carpet experience',
      'Throne chair included',
      'Personal event designer',
      'Premium rental items',
    ],
  },
];

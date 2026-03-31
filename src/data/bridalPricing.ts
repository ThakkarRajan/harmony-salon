import { PricingTier } from '@/components/PricingCards';

const hdDetailFeatures = [
  'HD makeup with international products',
  'Contouring & highlighting with a flawless, camera-ready base',
  'Techniques tailored to your preference and skin type',
  'False lashes and lenses included',
];

export const bridalAndSidersPackages: PricingTier[] = [
  {
    name: 'Marriage Day',
    price: '₹15,000',
    description: 'Bridal package — HD makeup, hairstyle & draping',
    featured: true,
    features: [...hdDetailFeatures, 'Hairstyling', 'Draping', 'Studio charges'],
  },
  {
    name: 'Bride Side Function',
    price: '₹7,000',
    description: 'Bridal makeup — HD makeup & hairstyle',
    features: [...hdDetailFeatures, 'Hairstyling', 'Studio charges'],
  },
  {
    name: 'Siders — 3D',
    price: '₹2,500',
    description: 'Siders makeup — studio',
    features: ['3D makeup & hairstyle', 'Studio charges'],
  },
  {
    name: 'Siders — HD',
    price: '₹3,500',
    description: 'Siders makeup — studio',
    features: ['HD makeup & hairstyle', 'Studio charges'],
  },
  {
    name: 'Siders — Full Package',
    price: '₹4,500',
    description: 'Siders — HD makeup & hairstyle + extras',
    features: [
      'HD makeup & hairstyle',
      'Real flowers, lenses, false lashes & hair extensions',
      'Studio charges',
    ],
  },
];

import React from 'react';

interface JsonLDProps {
  data: Record<string, unknown>;
}

export default function JsonLD({ data }: JsonLDProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Business Schema
export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  '@id': 'https://harmonysalon.biz/#organization',
  name: 'Harmony Salon | Best Bridal Makeup Artist in Ahmedabad',
  alternateName: ['Harmony Salon Bopal', 'Harmony Salon Ahmedabad'],
  legalName: 'Harmony Salon',
  image: 'https://harmonysalon.biz/logo.png',
  logo: 'https://harmonysalon.biz/logo.png',
  description:
    'Bridal makeup artist in Ahmedabad (Bopal, near TRP Mall) with 4.9/5 rating. Bridal packages, HD & 3D bridal makeup, engagement & party makeup, hairstyling, nail art. Studio bridal price list from ₹7,000–₹15,000; siders from ₹2,500. On-site service across Ahmedabad.',
  knowsAbout: [
    'Bridal makeup Ahmedabad',
    'Bridal package price list',
    'HD bridal makeup',
    'HD party makeup',
    'Engagement makeup',
    '3D bridal makeup',
    'Makeup artist fees',
    'Indian bridal packages',
  ],
  telephone: '+91-96384-37565',
  email: 'shahshreya933@gmail.com',
  url: 'https://harmonysalon.biz',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'F-403, Silver Spring, Rajyash City, near TRP Mall, Ambli – Bopal Road, Bopal',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380058',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.0310141,
    longitude: 72.4688485,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Ahmedabad',
    },
    {
      '@type': 'Place',
      name: 'Bopal',
    },
    {
      '@type': 'Place',
      name: 'Ambli',
    },
    {
      '@type': 'Place',
      name: 'Shilaj',
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
  ],
  priceRange: '₹₹',
  paymentAccepted: 'Cash, UPI, Credit Card, Debit Card',
  currenciesAccepted: 'INR',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://instagram.com/harmony__salon',
    'https://www.google.com/maps/place/Harmony+Salon',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Bridal Makeup & Beauty Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bridal Makeup',
          description: 'Professional bridal makeup with HD and airbrush options',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hair Styling',
          description: 'Professional bridal and party hairstyling',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Nail Art',
          description: 'Bridal nail art and extensions',
        },
      },
    ],
  },
};

/** WebSite + publisher link; use on homepage with businessSchema */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://harmonysalon.biz/#website',
  url: 'https://harmonysalon.biz',
  name: 'Harmony Salon Ahmedabad',
  alternateName: 'Harmony Salon — Bridal Makeup Bopal',
  inLanguage: 'en-IN',
  publisher: { '@id': 'https://harmonysalon.biz/#organization' },
};

/** ItemList of studio services & starting prices for /prices */
export const bridalStudioPriceListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Harmony Salon — bridal & party makeup price list (studio, Ahmedabad)',
  description:
    'Indicative studio rates for bridal packages, siders, and party makeup at Harmony Salon Bopal, Ahmedabad. On-site and custom quotes may differ.',
  numberOfItems: 9,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Marriage Day bridal package',
        description: 'HD makeup, hairstyling & draping — studio',
        provider: { '@id': 'https://harmonysalon.biz/#organization' },
        areaServed: { '@type': 'City', name: 'Ahmedabad' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '15000',
          availability: 'https://schema.org/InStock',
          url: 'https://harmonysalon.biz/prices',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Bride-side function bridal package',
        description: 'HD makeup & hairstyling — studio',
        provider: { '@id': 'https://harmonysalon.biz/#organization' },
        areaServed: { '@type': 'City', name: 'Ahmedabad' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '7000',
          availability: 'https://schema.org/InStock',
          url: 'https://harmonysalon.biz/prices',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Siders — 3D makeup & hairstyle',
        description: 'Studio package for family / bridesmaids',
        provider: { '@id': 'https://harmonysalon.biz/#organization' },
        areaServed: { '@type': 'City', name: 'Ahmedabad' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '2500',
          availability: 'https://schema.org/InStock',
          url: 'https://harmonysalon.biz/prices',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Siders — HD makeup & hairstyle',
        description: 'Studio package',
        provider: { '@id': 'https://harmonysalon.biz/#organization' },
        areaServed: { '@type': 'City', name: 'Ahmedabad' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '3500',
          availability: 'https://schema.org/InStock',
          url: 'https://harmonysalon.biz/prices',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        name: 'Siders — full package',
        description: 'HD makeup & hair with flowers, lenses, lashes & extensions — studio',
        provider: { '@id': 'https://harmonysalon.biz/#organization' },
        areaServed: { '@type': 'City', name: 'Ahmedabad' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '4500',
          availability: 'https://schema.org/InStock',
          url: 'https://harmonysalon.biz/prices',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'Service',
        name: 'HD party makeup',
        description: 'Starting from — studio; final quote by look & event',
        provider: { '@id': 'https://harmonysalon.biz/#organization' },
        areaServed: { '@type': 'City', name: 'Ahmedabad' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '6000',
          availability: 'https://schema.org/InStock',
          url: 'https://harmonysalon.biz/prices',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 7,
      item: {
        '@type': 'Service',
        name: 'Basic party makeup',
        description: 'Starting from — studio',
        provider: { '@id': 'https://harmonysalon.biz/#organization' },
        areaServed: { '@type': 'City', name: 'Ahmedabad' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '4000',
          availability: 'https://schema.org/InStock',
          url: 'https://harmonysalon.biz/prices',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 8,
      item: {
        '@type': 'Service',
        name: 'Bridal hairstyle',
        description: 'Starting from — studio',
        provider: { '@id': 'https://harmonysalon.biz/#organization' },
        areaServed: { '@type': 'City', name: 'Ahmedabad' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '5000',
          availability: 'https://schema.org/InStock',
          url: 'https://harmonysalon.biz/prices',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 9,
      item: {
        '@type': 'Service',
        name: 'Makeup & hairstyle combo (party)',
        description: 'Quoted per event — contact for engagement / sangeet packages',
        provider: { '@id': 'https://harmonysalon.biz/#organization' },
        areaServed: { '@type': 'City', name: 'Ahmedabad' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '8000',
          description: 'Indicative for sangeet / mehndi-style events',
          availability: 'https://schema.org/InStock',
          url: 'https://harmonysalon.biz/contact',
        },
      },
    },
  ],
};

// Product Schema (for packages)
export const createProductSchema = (name: string, description: string, price: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  description,
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    price,
    availability: 'https://schema.org/InStock',
  },
  brand: {
    '@type': 'Brand',
    name: 'Harmony Salon',
  },
});

// FAQ Schema
export const createFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

// Review Schema
export const createReviewSchema = (reviews: { author: string; rating: number; text: string; date: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Harmony Salon Services',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  review: reviews.map((review) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    datePublished: review.date,
    reviewBody: review.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
    },
  })),
});


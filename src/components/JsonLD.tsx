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
  alternateName: 'Harmony Salon Bopal',
  legalName: 'Harmony Salon',
  image: 'https://harmonysalon.biz/logo.png',
  logo: 'https://harmonysalon.biz/logo.png',
  description: 'Best bridal makeup artist in Ahmedabad with 4.9/5 rating and 500+ happy clients. Specializing in HD makeup, airbrush techniques, hairstyling, nail art, and pre-wedding grooming. Natural, long-lasting bridal looks with premium products. On-site service available.',
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
    'https://instagram.com/makeoverby_harmony',
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


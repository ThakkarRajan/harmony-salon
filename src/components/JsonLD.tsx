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
  name: 'Harmony Salon | Best Bridal Makeup Artist in Ahmedabad',
  image: 'https://harmonysalon.com/og-image.jpg',
  description: 'Best bridal makeup artist in Ahmedabad. Specializing in HD makeup, airbrush techniques, hairstyling, and pre-wedding grooming. Natural, long-lasting bridal looks with premium products.',
  telephone: '+91-96384-37565',
  url: 'https://harmonysalon.com',
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
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
  ],
  priceRange: '₹₹',
  sameAs: ['https://instagram.com/makeoverby_harmony'],
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
    reviewCount: reviews.length.toString(),
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


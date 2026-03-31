import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://harmonysalon.biz';
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/bridal`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hair-nails`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/prices`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/30-day-bridal-skin-prep-guide`,
      lastModified: new Date('2024-10-15'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/hd-vs-airbrush-makeup`,
      lastModified: new Date('2024-10-10'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/monsoon-wedding-makeup-tips`,
      lastModified: new Date('2024-10-05'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/questions-to-ask-bridal-makeup-artist-before-booking`,
      lastModified: new Date('2026-04-28'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/blog/bridal-makeup-trial-checklist-what-to-look-for`,
      lastModified: new Date('2026-04-22'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/blog/bridal-makeup-packages-india-whats-included`,
      lastModified: new Date('2026-04-15'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/blog/bridal-makeup-face-shape-features-guide`,
      lastModified: new Date('2026-04-08'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/blog/real-vs-filtered-bridal-makeup-portfolios`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/blog/bopal-bridal-makeup-salon-near-trp-mall-guide`,
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/blog/summer-wedding-makeup-ahmedabad-heat-dust`,
      lastModified: new Date('2026-03-10'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/blog/how-to-choose-bridal-makeup-artist-ahmedabad`,
      lastModified: new Date('2026-03-02'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/blog/bridal-makeup-trial-ahmedabad-when-to-book`,
      lastModified: new Date('2026-02-22'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/blog/navratri-garba-makeup-tips-ahmedabad`,
      lastModified: new Date('2026-02-12'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
  ];
}


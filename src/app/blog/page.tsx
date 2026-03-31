import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Bridal Beauty Blog — Tips & Guides | Harmony Salon Ahmedabad',
  description:
    'Bridal makeup tips for Ahmedabad brides: Bopal, heat-proof looks, trials, Navratri, and local wedding beauty guides from Harmony Salon.',
  keywords:
    'bridal makeup Ahmedabad, bridal artist Bopal, wedding makeup Gujarat, pre-wedding beauty, Harmony Salon blog',
};

const blogPosts = [
  {
    slug: 'questions-to-ask-bridal-makeup-artist-before-booking',
    title: '20 Questions to Ask Before You Book a Bridal Makeup Artist',
    excerpt:
      'From lashes and draping to travel fees and touch-ups—the questions smart brides ask so there are no surprises on the wedding day.',
    date: '2026-04-28',
    readTime: '9 min read',
    category: 'Before you book',
    image: 'https://images.unsplash.com/photo-1522338245189-ebc8ed735165?w=800',
  },
  {
    slug: 'bridal-makeup-trial-checklist-what-to-look-for',
    title: 'Bridal Makeup Trial Checklist: What to Look For',
    excerpt:
      'Use this checklist during your trial—lighting, base texture, eye symmetry, and how the look wears after a few hours.',
    date: '2026-04-22',
    readTime: '8 min read',
    category: 'Before you book',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
  },
  {
    slug: 'bridal-makeup-packages-india-whats-included',
    title: 'Bridal Makeup Packages in India: What’s Usually Included?',
    excerpt:
      'Understand typical inclusions—trial, wedding day, family slots, draping, extensions—and what to confirm in writing.',
    date: '2026-04-15',
    readTime: '7 min read',
    category: 'Before you book',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800',
  },
  {
    slug: 'bridal-makeup-face-shape-features-guide',
    title: 'Bridal Makeup for Your Face Shape & Features (Simple Guide)',
    excerpt:
      'How eye shape, jawline, and features affect liner, blush placement, and lip balance—so you can discuss goals clearly with your MUA.',
    date: '2026-04-08',
    readTime: '7 min read',
    category: 'Before you book',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
  },
  {
    slug: 'real-vs-filtered-bridal-makeup-portfolios',
    title: 'Real vs Filtered: How to Read a Bridal Makeup Portfolio',
    excerpt:
      'Spot heavy editing, studio-only lighting, and angles that flatter—so you choose an artist whose real work matches your expectations.',
    date: '2026-04-01',
    readTime: '6 min read',
    category: 'Before you book',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc29?w=800',
  },
  {
    slug: 'bopal-bridal-makeup-salon-near-trp-mall-guide',
    title: 'Bridal Makeup Near TRP Mall, Bopal: What Ahmedabad Brides Should Know',
    excerpt:
      'Planning your trial or wedding-day glam in West Ahmedabad? A practical guide to timing, parking, and what to expect near Ambli–Bopal Road.',
    date: '2026-03-18',
    readTime: '6 min read',
    category: 'Ahmedabad',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9b2f8?w=800',
  },
  {
    slug: 'summer-wedding-makeup-ahmedabad-heat-dust',
    title: 'Summer Wedding Makeup in Ahmedabad: Beat the Heat & Dust',
    excerpt:
      'Dry heat, strong sun, and outdoor venues are common in Gujarat. How to prep skin and choose makeup that stays fresh from mandap to reception.',
    date: '2026-03-10',
    readTime: '7 min read',
    category: 'Ahmedabad',
    image: 'https://images.unsplash.com/photo-1464366400600-7162389b8d1?w=800',
  },
  {
    slug: 'how-to-choose-bridal-makeup-artist-ahmedabad',
    title: 'How to Choose a Bridal Makeup Artist in Ahmedabad',
    excerpt:
      'Trials, hygiene, portfolio checks, and realistic timelines—so you book the right artist for your venue, budget, and cultural events.',
    date: '2026-03-02',
    readTime: '8 min read',
    category: 'Ahmedabad',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800',
  },
  {
    slug: 'bridal-makeup-trial-ahmedabad-when-to-book',
    title: 'When to Book Your Bridal Makeup Trial in Ahmedabad',
    excerpt:
      'Peak wedding season, festival dates, and venue distance from Bopal—all the factors that affect how early you should lock your artist.',
    date: '2026-02-22',
    readTime: '5 min read',
    category: 'Ahmedabad',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800',
  },
  {
    slug: 'navratri-garba-makeup-tips-ahmedabad',
    title: 'Navratri & Garba Makeup in Ahmedabad: Long-Lasting, Photo-Ready Looks',
    excerpt:
      'Sweat-proof bases, bindi-friendly eyes, and touch-up tricks for grounds and club events across the city.',
    date: '2026-02-12',
    readTime: '6 min read',
    category: 'Ahmedabad',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
  },
  {
    slug: '30-day-bridal-skin-prep-guide',
    title: '30-Day Bridal Skin Prep Guide',
    excerpt: 'Complete checklist and dermatologist-approved tips for glowing, camera-ready skin on your wedding day.',
    date: '2024-10-15',
    readTime: '8 min read',
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1616683693707-e796e86d2dc6?w=800',
  },
  {
    slug: 'hd-vs-airbrush-makeup',
    title: 'HD vs Airbrush: Which is Right for Your Big Day?',
    excerpt: 'Understand the differences, benefits, and best scenarios for HD and airbrush makeup techniques.',
    date: '2024-10-10',
    readTime: '6 min read',
    category: 'Makeup Techniques',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800',
  },
  {
    slug: 'monsoon-wedding-makeup-tips',
    title: 'Monsoon Wedding Makeup: Humidity-Proof Looks',
    excerpt: 'Essential tips and product recommendations for long-lasting makeup during monsoon weddings in India.',
    date: '2024-10-05',
    readTime: '7 min read',
    category: 'Seasonal Tips',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
  },
];

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Bridal Beauty Blog"
        subtitle="Guides for Ahmedabad brides—plus expert tips for skin, seasons, and your big day"
      />

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div 
                    className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gold">{post.category}</span>
                      <span className="text-sm text-charcoal/60">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-charcoal/70 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-charcoal/50">
                        {new Date(post.date).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="text-gold font-medium group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-blush/10">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-charcoal/70 mb-8">
            Get the latest bridal beauty tips and exclusive offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-full border border-charcoal/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none"
            />
            <button className="px-8 py-3 bg-gold text-white rounded-full hover:bg-gold/90 transition-all shadow-md font-medium">
              Subscribe
            </button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Ready for Your Trial?
          </h2>
          <p className="text-lg text-charcoal/70 mb-8">
            Let's create your perfect bridal look
          </p>
          <Button href="/contact" size="lg">
            Book a Consultation
          </Button>
        </Container>
      </section>
    </>
  );
}


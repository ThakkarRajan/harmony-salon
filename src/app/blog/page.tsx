import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Bridal Beauty Blog — Tips & Guides | Harmony Salon',
  description: 'Expert bridal makeup tips, skin prep guides, and beauty advice for Ahmedabad brides. Learn from professional makeup artists.',
  keywords: 'bridal makeup tips, wedding beauty guide, makeup advice, skin prep, beauty blog',
};

const blogPosts = [
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
        subtitle="Expert tips, guides, and insights for your wedding beauty journey"
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


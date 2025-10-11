import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import GalleryGrid, { GalleryImage } from '@/components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Portfolio — Harmony Salon Makeup Gallery',
  description: 'View our bridal makeup portfolio. Before/after transformations, real brides, and stunning makeup looks by Harmony Salon.',
  keywords: 'bridal makeup portfolio, makeup gallery, before after makeup, bridal transformation',
};

const portfolioImages: GalleryImage[] = [
  // Bridal
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600', alt: 'Classic Bridal Look', category: 'Bridal' },
  { src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600', alt: 'Traditional Bridal Makeup', category: 'Bridal' },
  { src: 'https://images.unsplash.com/photo-1525268771113-32d9e9021a97?w=600', alt: 'Modern Bridal Glam', category: 'Bridal' },
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600', alt: 'Airbrush Bridal Look', category: 'Bridal' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600', alt: 'HD Bridal Makeup', category: 'Bridal' },
  { src: 'https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=600', alt: 'Elegant Bridal Style', category: 'Bridal' },
  
  // Sangeet
  { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600', alt: 'Colorful Sangeet Look', category: 'Sangeet' },
  { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600', alt: 'Vibrant Sangeet Makeup', category: 'Sangeet' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600', alt: 'Glam Sangeet Style', category: 'Sangeet' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600', alt: 'Bold Sangeet Look', category: 'Sangeet' },
  
  // Reception
  { src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600', alt: 'Evening Reception Glam', category: 'Reception' },
  { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600', alt: 'Elegant Reception Look', category: 'Reception' },
  { src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600', alt: 'Sophisticated Reception', category: 'Reception' },
  { src: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600', alt: 'Classic Reception Style', category: 'Reception' },
  
  // Party
  { src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600', alt: 'Party Glam Look', category: 'Party' },
  { src: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?w=600', alt: 'Cocktail Party Makeup', category: 'Party' },
  { src: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600', alt: 'Modern Party Style', category: 'Party' },
  { src: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=600', alt: 'Glam Party Look', category: 'Party' },
];

const categories = ['Bridal', 'Sangeet', 'Reception', 'Party'];

export default function PortfolioPage() {
  return (
    <>
      <Hero
        title="Our Portfolio"
        subtitle="Real brides, real transformations. See the artistry behind every look."
      />

      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Each bride brings her unique beauty. We enhance it with expert techniques, 
              premium products, and attention to detail. Browse our portfolio to see the 
              stunning results.
            </p>
          </div>

          <GalleryGrid images={portfolioImages} categories={categories} />
        </Container>
      </section>

      {/* Before/After Note */}
      <section className="py-20 bg-blush/10">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            See Yourself Transformed
          </h2>
          <p className="text-lg text-charcoal/70 mb-8">
            These are real clients who trusted us with their special day. Every face is different, 
            and we customize each look to enhance natural beauty while ensuring long-lasting, 
            camera-ready results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-4xl mb-3">📸</div>
              <h3 className="font-bold text-charcoal mb-2">Camera-Ready</h3>
              <p className="text-sm text-charcoal/70">Looks flawless in photos and videos</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-4xl mb-3">⏰</div>
              <h3 className="font-bold text-charcoal mb-2">Long-Lasting</h3>
              <p className="text-sm text-charcoal/70">Stays perfect for 10-14 hours</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-bold text-charcoal mb-2">Natural Glow</h3>
              <p className="text-sm text-charcoal/70">Enhanced, never overdone</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-lg text-charcoal/70 mb-8">
            @makeoverby_harmony for daily inspiration, behind-the-scenes, and real bride stories
          </p>
          <a
            href="https://instagram.com/makeoverby_harmony"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-xl transition-all duration-300"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            View on Instagram
          </a>
        </Container>
      </section>
    </>
  );
}


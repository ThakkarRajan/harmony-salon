import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import GalleryGrid, { GalleryImage } from '@/components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Portfolio — Harmony Salon Makeup Gallery',
  description: 'View our Indian bridal makeup portfolio — lehenga, saree, and celebration looks. Real brides and stunning makeup by Harmony Salon.',
  keywords: 'Indian bridal makeup portfolio, Indian wedding makeup, lehenga bridal, sangeet makeup, makeup gallery',
};

const portfolioImages: GalleryImage[] = [
  // Bridal — Indian wedding & traditional bridal makeup (Unsplash)
  { src: 'https://images.unsplash.com/photo-1742891602044-7fdc0a9839ad?w=600', alt: 'Indian bride in traditional bridal lehenga and jewellery', category: 'Bridal' },
  { src: 'https://images.unsplash.com/photo-1742891602815-fa2a195f0ab3?w=600', alt: 'Traditional Indian bridal makeup and attire', category: 'Bridal' },
  { src: 'https://images.unsplash.com/photo-1742891602747-383fc69b4e39?w=600', alt: 'Indian bride with classic bridal styling', category: 'Bridal' },
  { src: 'https://images.unsplash.com/photo-1742891601435-39de27531cc7?w=600', alt: 'Indian bride adorned in traditional wedding attire', category: 'Bridal' },
  { src: 'https://images.unsplash.com/photo-1770747874505-67d0a43379d5?w=600', alt: 'Bride in traditional Indian wedding makeup and jewellery', category: 'Bridal' },
  { src: 'https://images.unsplash.com/photo-1762708597196-5b81b1649b93?w=600', alt: 'Indian bride in ornate red and gold lehenga', category: 'Bridal' },

  // Sangeet — festive colour, pre-wedding celebration looks
  { src: 'https://images.unsplash.com/photo-1756483517695-d0aa21ee1ea1?w=600', alt: 'Woman in ornate Indian lehenga and jewellery', category: 'Sangeet' },
  { src: 'https://images.unsplash.com/photo-1771929837105-122c2aab8a04?w=600', alt: 'Haldi ceremony — yellow saree and celebration glow', category: 'Sangeet' },
  { src: 'https://images.unsplash.com/photo-1600685890506-593fdf55949b?w=600', alt: 'Festive Indian bridal crown and gold styling', category: 'Sangeet' },
  { src: 'https://images.unsplash.com/photo-1587271315307-eaebc181c749?w=600', alt: 'Vibrant red and gold festive Indian wedding look', category: 'Sangeet' },

  // Reception — elegant evening Indian reception styling
  { src: 'https://images.unsplash.com/photo-1759906760638-eeffcb471e53?w=600', alt: 'Indian bride in red lehenga and dupatta veil', category: 'Reception' },
  { src: 'https://images.unsplash.com/photo-1757598147902-709659de259f?w=600', alt: 'Traditional Indian bridal attire and jewellery', category: 'Reception' },
  { src: 'https://images.unsplash.com/photo-1594140701076-3400bf982497?w=600', alt: 'Indian bride in red and gold wedding saree', category: 'Reception' },
  { src: 'https://images.unsplash.com/photo-1769500808343-62495040fd1b?w=600', alt: 'South Asian bride in red and gold wedding saree', category: 'Reception' },

  // Party — cocktail and celebration ethnic glam
  { src: 'https://images.unsplash.com/photo-1743090834072-4f70339bc917?w=600', alt: 'Woman in beautiful traditional Indian attire', category: 'Party' },
  { src: 'https://images.unsplash.com/photo-1617633150878-7df1d12a9a57?w=600', alt: 'Indian wedding guest in red and gold saree', category: 'Party' },
  { src: 'https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?w=600', alt: 'Elegant red and gold Indian wedding ensemble', category: 'Party' },
  { src: 'https://images.unsplash.com/photo-1619516388835-2b60acc4049e?w=600', alt: 'Indian woman in saree — outdoor celebration portrait', category: 'Party' },
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
            @harmony__salon for daily inspiration, behind-the-scenes, and real bride stories
          </p>
          <a
            href="https://instagram.com/harmony__salon"
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


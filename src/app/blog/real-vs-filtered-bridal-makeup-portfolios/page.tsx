import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Real vs Filtered: How to Read a Bridal Makeup Portfolio | Harmony Salon',
  description:
    'Learn to evaluate bridal MUA portfolios: lighting tricks, filters, skin blur, and what to ask so expectations match real wedding-day results.',
  keywords:
    'bridal makeup portfolio, choose makeup artist Instagram, real bridal makeup photos, wedding MUA tips',
};

const HERO = 'https://images.unsplash.com/photo-1516035069371-29a1b244cc29?w=1400&q=80';
const PHOTO_STUDIO = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1000&q=80';
const PHOTO_NATURAL = 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=80';

export default function BlogPost() {
  return (
    <>
      <article className="py-20 bg-white">
        <Container size="md">
          <Link
            href="/blog"
            className="inline-flex items-center text-gold hover:text-gold/80 mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <span className="text-gold font-medium">Before you book</span>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mt-2 mb-4">
              Real vs Filtered: How to Read a Bridal Makeup Portfolio
            </h1>
            <div className="flex items-center text-charcoal/60 text-sm">
              <span>April 1, 2026</span>
              <span className="mx-3">•</span>
              <span>6 min read</span>
            </div>
          </header>

          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={HERO}
              alt="Camera and creative tools representing portfolio and content creation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-charcoal/80 mb-8">
              Social portfolios are marketing. Beautiful work is real—but so are filters, ring
              lights, and professional colour grading. Before you book, train your eye to ask:{' '}
              <strong>Will I look like this at my actual venue?</strong>
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Signs of heavy editing</h2>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li>Skin with zero texture—pores and fine lines completely erased</li>
              <li>Identical smooth skin on every bride regardless of age or skin type</li>
              <li>Overly sharp eyes or unreal lip gradients that do not match typical photography</li>
              <li>Only extreme close-ups, never half-body or candid distance shots</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Lighting tells the truth</h2>
            <p className="text-charcoal/80 mb-6">
              Ring lights and softboxes flatter everyone. Ask to see brides shot in mixed lighting—
              hotel rooms, mandap shade, or yellow banquet halls—if the artist has those samples.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={PHOTO_STUDIO}
                    alt="Event lighting and stage setup at a wedding celebration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Venue lighting changes how blush and highlight read—compare portfolios to your own
                  setting when possible.
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={PHOTO_NATURAL}
                    alt="Bride and wedding celebration in natural outdoor light"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Outdoor or mixed light shows whether base colour and eye work still look balanced.
                </figcaption>
              </figure>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">What to request before paying a deposit</h2>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li>2–3 full faces in similar skin tone to yours, unfiltered if possible</li>
              <li>Photos from the same day: fresh after makeup and 4–6 hours later</li>
              <li>References from past clients (even short text testimonials)</li>
            </ul>

            <div className="bg-blush/20 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-charcoal mb-2">Why trials matter</h3>
              <p className="text-charcoal/80 mb-0">
                No portfolio replaces sitting in the chair. A trial is your real-world filter for
                skill, hygiene, and personality fit.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-charcoal/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/blog"
                className="text-gold hover:text-gold/80 font-medium transition-colors"
              >
                ← Back to All Posts
              </Link>
              <Button href="/contact">Book Your Trial</Button>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}

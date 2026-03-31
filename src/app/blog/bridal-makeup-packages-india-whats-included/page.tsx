import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Bridal Makeup Packages in India: What’s Included? | Harmony Salon',
  description:
    'Typical bridal makeup package breakdown: trial, wedding day, family add-ons, draping, lashes, travel—and what to get in writing.',
  keywords:
    'bridal makeup package India, wedding makeup pricing, bridal package inclusions, MUA Gujarat',
};

const HERO = 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1400&q=80';
const PHOTO_VANITY = 'https://images.unsplash.com/photo-1522337364-5a0cfe0754e7?w=1000&q=80';
const PHOTO_BRIDE = 'https://images.unsplash.com/photo-1519415943484-f343416c6284?w=1000&q=80';

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
              Bridal Makeup Packages in India: What&apos;s Usually Included?
            </h1>
            <div className="flex items-center text-charcoal/60 text-sm">
              <span>April 15, 2026</span>
              <span className="mx-3">•</span>
              <span>7 min read</span>
            </div>
          </header>

          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={HERO}
              alt="Bridal makeup products and colour palette on display"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-charcoal/80 mb-8">
              &quot;Bridal package&quot; means different things in every city. Before you compare
              quotes, know <strong>what is bundled</strong> so you are not surprised by add-ons for
              lashes, draping, or extra family members.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Common package layers</h2>
            <p className="text-charcoal/80 mb-4">
              Many artists structure offers like this (names vary—read the fine print):
            </p>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li>
                <strong>Essential:</strong> Wedding-day makeup for the bride only; trial may be extra.
              </li>
              <li>
                <strong>Standard:</strong> Trial + wedding day; sometimes includes basic lashes.
              </li>
              <li>
                <strong>Premium:</strong> Trial, wedding day, premium lashes, touch-up powder or kit,
                sometimes draping or assistant help.
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={PHOTO_VANITY}
                    alt="Makeup vanity with brushes and organised bridal kit"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Professional kits and sanitation practices are part of what you pay for—not only
                  the hour on the chair.
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={PHOTO_BRIDE}
                    alt="Bride in traditional wedding attire with full makeup"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Final pricing should match the complexity of your look and number of events.
                </figcaption>
              </figure>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Ask explicitly about</h2>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li>HD vs airbrush (if offered)—does the package allow upgrading?</li>
              <li>Saree or dupatta draping—who provides pins, and is it timed separately?</li>
              <li>Hair styling—same vendor or referral; who coordinates timing?</li>
              <li>Travel beyond X km, parking, and early-morning fees</li>
              <li>Second-day reception or mehendi—discount for multi-day booking?</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Get it in writing</h2>
            <p className="text-charcoal/80 mb-8">
              A simple WhatsApp summary is better than nothing, but a dated quote with line items
              protects both sides. Keep screenshots of agreed rates if formal contracts are not used.
            </p>
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

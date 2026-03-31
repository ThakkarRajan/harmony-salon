import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Bridal Makeup Trial Checklist: What to Look For | Harmony Salon',
  description:
    'Step-by-step checklist for your bridal makeup trial: base finish, eye symmetry, lip line, flash photos, and how the look wears over time.',
  keywords:
    'bridal makeup trial tips, makeup trial checklist, wedding makeup trial India, bridal MUA',
};

const HERO = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&q=80';
const PHOTO_LIGHT = 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1000&q=80';
const PHOTO_CLOSE = 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1000&q=80';

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
              Bridal Makeup Trial Checklist: What to Look For
            </h1>
            <div className="flex items-center text-charcoal/60 text-sm">
              <span>April 22, 2026</span>
              <span className="mx-3">•</span>
              <span>8 min read</span>
            </div>
          </header>

          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={HERO}
              alt="Artist applying bridal makeup during a trial"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-charcoal/80 mb-8">
              Your trial is the dress rehearsal for how you will look in photos, under banquet
              lights, and after hours of smiling. Print or save this checklist and tick items as you
              go—<strong>it keeps emotion from overriding practical decisions</strong>.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Before you sit in the chair</h2>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li>Sleep well the night before; avoid trying a brand-new skincare peel within a week</li>
              <li>Arrive with a clean face or only light moisturiser if your artist prefers</li>
              <li>Bring outfit swatches, nose ring, and any hair accessories you plan to wear</li>
              <li>Charge your phone and clear storage—you will want reference shots</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">During application</h2>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li>
                <strong>Base:</strong> Does skin still look like skin—no mask-like edge along the jaw
                or hairline?
              </li>
              <li>
                <strong>Colour match:</strong> Check neck and chest in daylight; undertone should
                blend, not look grey or orange.
              </li>
              <li>
                <strong>Eyes:</strong> Are wings or liner symmetrical when you look straight ahead?
              </li>
              <li>
                <strong>Lashes:</strong> Comfortable weight, no poking; inner corners secure.
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={PHOTO_LIGHT}
                    alt="Soft natural light on a finished bridal makeup look"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Step outside or near a window—daylight reveals what indoor bulbs can hide.
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={PHOTO_CLOSE}
                    alt="Makeup palette and colour products used for bridal looks"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Note lip and eye shades so you can recreate or adjust for the final event.
                </figcaption>
              </figure>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">After the look is complete</h2>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li>Take photos with flash off and flash on (simulates many photographers)</li>
              <li>Smile wide, turn profile both sides—check blush and contour in motion</li>
              <li>Wear the look 3–4 hours if possible; note creasing, oil, or dryness</li>
              <li>Ask how the artist will adapt for humidity, tears, or longer wear on the wedding</li>
            </ul>

            <div className="bg-blush/20 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-charcoal mb-2">Green flag</h3>
              <p className="text-charcoal/80 mb-0">
                An artist who invites honest feedback and tweaks liner or lip colour without rushing
                you out is invested in your final result—not only the booking.
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

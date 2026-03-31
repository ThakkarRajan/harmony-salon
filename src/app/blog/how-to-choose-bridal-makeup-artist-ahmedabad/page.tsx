import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'How to Choose a Bridal Makeup Artist in Ahmedabad | Harmony Salon',
  description:
    'Checklist for Ahmedabad brides: trials, hygiene, portfolios, pricing transparency, and red flags when booking a bridal MUA in Gujarat.',
  keywords:
    'bridal makeup artist Ahmedabad, how to choose makeup artist, wedding MUA Gujarat, bridal trial',
};

const HERO =
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1400&q=80';
const INLINE_A =
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1000&q=80';
const INLINE_B =
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&q=80';

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
            <span className="text-gold font-medium">Ahmedabad</span>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mt-2 mb-4">
              How to Choose a Bridal Makeup Artist in Ahmedabad
            </h1>
            <div className="flex items-center text-charcoal/60 text-sm">
              <span>March 2, 2026</span>
              <span className="mx-3">•</span>
              <span>8 min read</span>
            </div>
          </header>

          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={HERO}
              alt="Bridal makeup look with professional lip and eye styling"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-charcoal/80 mb-8">
              Ahmedabad has no shortage of talented makeup artists—from large teams covering
              multiple brides a day to boutique studios focused on one client at a time. The best
              choice depends on your <strong>budget, aesthetic, and how personalised you want the
              experience</strong> to feel.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={INLINE_A}
                    alt="Makeup artist applying bridal makeup during appointment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  A trial shows skill, hygiene, and how well you communicate—not only Instagram reels.
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={INLINE_B}
                    alt="Bride having makeup done in a salon setting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Ask about who works on your date and how the team handles tight timelines.
                </figcaption>
              </figure>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">1. Study real work, not only reels</h2>
            <p className="text-charcoal/80 mb-6">
              Short videos often use filters. Ask to see still photos of brides with similar skin
              tone and undertone to yours, ideally in natural and artificial light. Pay attention to
              base texture: does skin still look like skin, or overly flat?
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">2. Book a trial before you commit</h2>
            <p className="text-charcoal/80 mb-6">
              A trial is the only way to know how products sit on your face for hours. Bring outfit
              references, jewellery, and if possible, drape fabric near your face the way you will
              wear it on the wedding day.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">3. Clarify hygiene and kit practices</h2>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li>Disposable applicators or properly sanitised brushes for lip and eye products</li>
              <li>Fresh sponges or clearly cleaned tools between clients</li>
              <li>Open communication if you have allergies or sensitive skin</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">4. Align on timeline and team size</h2>
            <p className="text-charcoal/80 mb-6">
              Confirm what time the artist arrives, how long hair and makeup take, and whether
              assistants are included for mothers or sisters. For Ahmedabad traffic and multi-venue
              days, buffer time is essential.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">5. Read contracts carefully</h2>
            <p className="text-charcoal/80 mb-6">
              Understand cancellation policies, travel charges outside the city, and what is
              included (draping, lashes, touch-up kit). Transparent pricing saves stress later.
            </p>

            <div className="bg-blush/20 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-charcoal mb-2">Red flags</h3>
              <p className="text-charcoal/80 mb-0">
                Vague pricing, pressure to book without a trial, or unwillingness to customise for
                your skin concerns are signs to keep looking. The right artist will welcome
                questions.
              </p>
            </div>

            <p className="text-charcoal/80">
              Harmony Salon welcomes Ahmedabad brides who want a focused, studio-based experience in
              Bopal with trials that reflect real wedding-day lighting and timing.
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

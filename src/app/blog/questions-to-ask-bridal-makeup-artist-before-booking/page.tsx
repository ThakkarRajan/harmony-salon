import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Questions to Ask a Bridal Makeup Artist Before Booking | Harmony Salon',
  description:
    'Essential questions about trials, pricing, team, products, timing, and touch-ups—so you pick the right bridal MUA with confidence.',
  keywords:
    'questions for bridal makeup artist, book bridal MUA, bridal makeup consultation, wedding makeup India',
};

const HERO = 'https://images.unsplash.com/photo-1522338245189-ebc8ed735165?w=1400&q=80';
const PHOTO_TRIAL = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&q=80';
const PHOTO_DETAIL = 'https://images.unsplash.com/photo-1620916560808-89b5a5506d44?w=1000&q=80';

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
              20 Questions to Ask Before You Book a Bridal Makeup Artist
            </h1>
            <div className="flex items-center text-charcoal/60 text-sm">
              <span>April 28, 2026</span>
              <span className="mx-3">•</span>
              <span>9 min read</span>
            </div>
          </header>

          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={HERO}
              alt="Bridal makeup brushes and products on a vanity"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-charcoal/80 mb-8">
              Choosing a bridal makeup artist is as important as picking your photographer. The right
              questions help you compare apples to apples—<strong>pricing, inclusions, hygiene, and
              how the team works on a busy morning</strong>—before you pay a deposit.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Availability & booking</h2>
            <ol className="list-decimal pl-6 space-y-2 text-charcoal/80 mb-8">
              <li>Is my wedding date free, and do you take only one bridal booking that day?</li>
              <li>How far in advance should I book, and what deposit is required to hold the date?</li>
              <li>What is your cancellation or postponement policy?</li>
              <li>Do you travel to my venue or home? If yes, what are the travel charges?</li>
            </ol>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Trial & final look</h2>
            <ol className="list-decimal pl-6 space-y-2 text-charcoal/80 mb-8" start={5}>
              <li>Is a trial included in the package, or billed separately?</li>
              <li>How long does a trial take, and should I bring outfit fabric or jewellery?</li>
              <li>Can we adjust the look after the trial based on photos or outfit changes?</li>
              <li>Will the same senior artist who did my trial do my wedding day makeup?</li>
            </ol>

            <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={PHOTO_TRIAL}
                    alt="Bride having makeup applied during a trial session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Use your trial to see how base and eyes look in natural light—not only in salon
                  mirrors.
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={PHOTO_DETAIL}
                    alt="Salon mirror and styling station for bridal preparation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  A calm, well-lit prep space matters when timing is tight on the wedding morning.
                </figcaption>
              </figure>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Products, hygiene & skin</h2>
            <ol className="list-decimal pl-6 space-y-2 text-charcoal/80 mb-8" start={9}>
              <li>Do you use disposable applicators or sanitise brushes between clients?</li>
              <li>Can you work with sensitive skin or specific allergies I list in advance?</li>
              <li>Are premium lashes, draping, or hair styling included—or optional add-ons?</li>
              <li>Will I get a small touch-up kit or powder for after the ceremony?</li>
            </ol>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Team & timeline</h2>
            <ol className="list-decimal pl-6 space-y-2 text-charcoal/80 mb-8" start={13}>
              <li>What time will you arrive, and how long do hair + makeup take for me alone?</li>
              <li>Can your team cover my mother or sisters—and at what cost per person?</li>
              <li>Who do I contact on the day if there is a delay or last-minute change?</li>
            </ol>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Deliverables & rights</h2>
            <ol className="list-decimal pl-6 space-y-2 text-charcoal/80 mb-8" start={16}>
              <li>May I take phone photos during the trial to review at home?</li>
              <li>Can you share a written quote listing every inclusion and tax?</li>
              <li>Are there extra charges for early-morning slots or multi-day bookings?</li>
              <li>How do final payments work—and when is the balance due?</li>
            </ol>

            <div className="bg-gold/10 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-charcoal mb-2">At Harmony Salon, Bopal</h3>
              <p className="text-charcoal/80 mb-0">
                We are happy to walk through these points on WhatsApp or during your visit. Clear
                answers up front help your wedding morning feel calm and organised.
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

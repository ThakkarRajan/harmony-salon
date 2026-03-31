import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'When to Book Your Bridal Makeup Trial in Ahmedabad | Harmony Salon',
  description:
    'Peak wedding season in Gujarat, festival dates, and how far in advance to book your bridal makeup trial and wedding-day slot in Ahmedabad.',
  keywords:
    'bridal makeup trial Ahmedabad, book makeup artist early, wedding season Gujarat, bridal booking timeline',
};

const HERO =
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1400&q=80';
const INLINE_A =
  'https://images.unsplash.com/photo-1511795409834-ef478bb9b5ff?w=1000&q=80';
const INLINE_B =
  'https://images.unsplash.com/photo-1523246833789-21b36914e9f8?w=1000&q=80';

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
              When to Book Your Bridal Makeup Trial in Ahmedabad
            </h1>
            <div className="flex items-center text-charcoal/60 text-sm">
              <span>February 22, 2026</span>
              <span className="mx-3">•</span>
              <span>5 min read</span>
            </div>
          </header>

          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={HERO}
              alt="Bridal makeup products and colour palette for wedding planning"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-charcoal/80 mb-8">
              The best artists in Ahmedabad often have <strong>limited weekend dates</strong> during
              peak wedding months (typically winter through early spring, plus select festival
              periods). Booking early protects your preferred date and gives you time for a
              meaningful trial and any adjustments.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={INLINE_A}
                    alt="Calendar and planning materials for wedding dates"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Lock your artist after your date is firm—popular weekends fill months ahead.
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={INLINE_B}
                    alt="Bride preparing and planning for wedding beauty"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Leave space between trial, fittings, and final events to adjust your look calmly.
                </figcaption>
              </figure>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Ideal timeline</h2>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li>
                <strong>6–9 months before:</strong> Shortlist artists, follow their work, and enquire
                about availability on your muhurat or weekend.
              </li>
              <li>
                <strong>4–6 months before:</strong> Complete your trial once outfit colours are
                roughly finalised; small accessory changes are easier than redoing a full colour
                story.
              </li>
              <li>
                <strong>6–8 weeks before:</strong> Confirm final timeline, venue address, and any
                family members who need styling.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Gujarat’s busy windows</h2>
            <p className="text-charcoal/80 mb-6">
              Dates around Diwali, Uttarayan, and long weekends fill quickly for both venues and
              vendors. If your wedding falls in these clusters, treat makeup booking with the same
              urgency as your hall and photographer.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Short engagements</h2>
            <p className="text-charcoal/80 mb-6">
              If you have only a few months to plan, contact studios immediately with your exact
              dates. Mid-week trials are sometimes easier to schedule than Saturdays.
            </p>

            <div className="bg-gold/10 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-charcoal mb-2">Harmony Salon, Bopal</h3>
              <p className="text-charcoal/80 mb-0">
                We serve brides across West Ahmedabad and beyond. Reach out with your wedding date
                and we will suggest trial timing that fits your shopping and fitting schedule.
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

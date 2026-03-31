import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Summer Wedding Makeup in Ahmedabad — Heat & Dust Tips | Harmony Salon',
  description:
    'Keep bridal makeup fresh in Ahmedabad’s dry heat: skin prep, primers, touch-ups, and product choices for outdoor Gujarati weddings.',
  keywords:
    'summer bridal makeup Ahmedabad, heat proof wedding makeup Gujarat, outdoor wedding makeup India',
};

const HERO =
  'https://images.unsplash.com/photo-1464366400600-7162389b8d1?w=1400&q=80';
const INLINE_A =
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80';
const INLINE_B =
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&q=80';

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
              Summer Wedding Makeup in Ahmedabad: Beat the Heat & Dust
            </h1>
            <div className="flex items-center text-charcoal/60 text-sm">
              <span>March 10, 2026</span>
              <span className="mx-3">•</span>
              <span>7 min read</span>
            </div>
          </header>

          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={HERO}
              alt="Bright summer sunlight over an outdoor celebration setting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-charcoal/80 mb-8">
              Ahmedabad’s summers mean <strong>intense sun, dry air, and dust</strong>—especially
              for outdoor baraats, poolside mehendi, or daytime pheras. The right prep and product
              choices help your base stay even from the first photo to the last dance.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={INLINE_A}
                    alt="Sunny landscape suggesting hot dry summer weather"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Heat and sun increase oil and sweat—prep and primer choice matter on outdoor days.
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={INLINE_B}
                    alt="Spa water and wellness suggesting hydration and skin care"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Hydrated skin holds foundation more evenly than dry, stressed skin in AC and sun.
                </figcaption>
              </figure>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Start with calm, hydrated skin</h2>
            <p className="text-charcoal/80 mb-6">
              Heat increases oil and sweat at the hairline and nose. Counterintuitively, dehydrated
              skin can also look patchy under foundation. In the week before your wedding, focus on
              gentle cleansing, lightweight hydration, and SPF during the day—avoid harsh new
              actives that might sensitize you before outdoor exposure.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Layer for longevity</h2>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li>
                <strong>Primer matched to skin type:</strong> Mattifying for very oily zones;
                hydrating for dry cheeks if you are combination.
              </li>
              <li>
                <strong>Thin layers:</strong> Build coverage gradually rather than one thick coat,
                which can crack when you perspire.
              </li>
              <li>
                <strong>Set strategically:</strong> Pressed powder or fine setting powder on the
                T-zone; avoid over-powdering areas where you want a natural glow.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Eyes & lips that survive Gujarati celebrations</h2>
            <p className="text-charcoal/80 mb-6">
              Long receptions and late-night photography need smudge-resistant liner and a lip
              product that can be touched up cleanly. Cream blushes blended under powder often look
              fresher in heat than heavy contour alone.
            </p>

            <div className="bg-gold/10 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-charcoal mb-2">Dust & wind</h3>
              <p className="text-charcoal/80 mb-0">
                If any part of your function is open-air, keep blotting papers and a small
                translucent powder with a trusted bridesmaid. Your artist can show you a 30-second
                refresh routine that does not disturb blush and highlighter.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Why a professional artist helps in Ahmedabad</h2>
            <p className="text-charcoal/80 mb-6">
              Experienced bridal artists in Gujarat know which formulas hold up under local
              weather—not just what trends online. A trial in similar lighting to your venue helps
              you stress-test the look before the big day.
            </p>
            <p className="text-charcoal/80">
              At Harmony Salon, we tailor finishes and products to your schedule, outfit colours,
              and whether your events are mostly indoor banquet halls or outdoor lawns.
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

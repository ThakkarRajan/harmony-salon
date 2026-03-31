import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Navratri & Garba Makeup in Ahmedabad — Long-Lasting Tips | Harmony Salon',
  description:
    'Sweat-proof garba makeup for Ahmedabad Navratri: base, eyes, bindi-friendly looks, and touch-ups for grounds and club nights.',
  keywords:
    'Navratri makeup Ahmedabad, garba makeup tips, long lasting makeup Gujarat, festival makeup India',
};

const HERO =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1400&q=80';
const INLINE_A =
  'https://images.unsplash.com/photo-1464043104078-24aa95ebda3e?w=1000&q=80';
const INLINE_B =
  'https://images.unsplash.com/photo-1516450360452-9312f5f86fc7?w=1000&q=80';

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
              Navratri & Garba Makeup in Ahmedabad: Long-Lasting, Photo-Ready Looks
            </h1>
            <div className="flex items-center text-charcoal/60 text-sm">
              <span>February 12, 2026</span>
              <span className="mx-3">•</span>
              <span>6 min read</span>
            </div>
          </header>

          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={HERO}
              alt="Portrait with styled hair and makeup for a festive occasion"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-charcoal/80 mb-8">
              Ahmedabad’s Navratri nights mean <strong>hours of dancing, crowds, and heat</strong>—
              whether you are at a society ground, a club on SG Road, or a family event in the
              suburbs. Makeup that looks bold under lights but stays intact through dandiya takes a
              little planning.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={INLINE_A}
                    alt="Colourful lights and celebration atmosphere at night"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Ground and club lighting is warm and busy—test liner and shadow under similar bulbs.
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={INLINE_B}
                    alt="Friends celebrating together at a festive event"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Pack blotting paper and lip colour for quick touch-ups between garba rounds.
                </figcaption>
              </figure>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Base that moves with you</h2>
            <p className="text-charcoal/80 mb-6">
              Start with clean, moisturised skin—skip heavy new creams on the day of. A gripping
              primer helps foundation stay put when you sweat. Keep the base slightly lighter in
              texture than a full bridal pack; you can build coverage only where needed.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Eyes: colour + security</h2>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li>
                <strong>Waterproof mascara and liner</strong> are non-negotiable for outdoor
                venues.
              </li>
              <li>
                If you wear a <strong>bindi</strong>, plan eye shape so liner and shadow do not
                compete awkwardly; many Ahmedabad looks pair sharp liner with jewel tones or bronze.
              </li>
              <li>
                <strong>Setting spray</strong> after eyes (and again lightly after full face) helps
                pigment stay through midnight.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Lips that survive snacks</h2>
            <p className="text-charcoal/80 mb-6">
              Matte liquid lips last longer through farsan and cold drinks; carry the exact shade
              for corner touch-ups. If you prefer gloss, blot between rounds and reapply to avoid
              feathering.
            </p>

            <div className="bg-blush/20 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-charcoal mb-2">Quick refresh kit</h3>
              <p className="text-charcoal/80 mb-0">
                Pack blotting papers, your lip product, a mini powder, and safety pins for dupatta
                fixes. A small mirror beats phone cameras for touch-ups in dim parking areas.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Get professional help for special nights</h2>
            <p className="text-charcoal/80 mb-6">
              For the busiest weekends, booking a makeup session at a salon saves time and ensures
              symmetry when you want photos with your group. Harmony Salon in Bopal can help you
              plan a <strong>garba-ready look</strong> that matches your chaniya choli and still
              feels comfortable for hours on the floor.
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

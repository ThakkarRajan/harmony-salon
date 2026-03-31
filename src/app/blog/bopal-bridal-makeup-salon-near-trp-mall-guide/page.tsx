import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Bridal Makeup Near TRP Mall, Bopal — Guide for Ahmedabad Brides | Harmony Salon',
  description:
    'Planning bridal makeup near TRP Mall and Ambli–Bopal Road? Tips for trials, timing, and what to expect from a Bopal bridal salon.',
  keywords:
    'bridal makeup Bopal, makeup artist near TRP Mall Ahmedabad, bridal salon Ambli Bopal Road, Harmony Salon',
};

const HERO =
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9b2f8?w=1400&q=80';
const INLINE_A =
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=80';
const INLINE_B =
  'https://images.unsplash.com/photo-1519225421980-715cb02155aed?w=1000&q=80';

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
              Bridal Makeup Near TRP Mall, Bopal: What Ahmedabad Brides Should Know
            </h1>
            <div className="flex items-center text-charcoal/60 text-sm">
              <span>March 18, 2026</span>
              <span className="mx-3">•</span>
              <span>6 min read</span>
            </div>
          </header>

          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={HERO}
              alt="Bridal bouquet and wedding styling details"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-charcoal/80 mb-8">
              West Ahmedabad—especially Bopal, Ambli, and areas around TRP Mall—is home to many
              families hosting weddings, engagements, and pre-wedding events. If you live in
              Satellite, Bodakdev, or South Bopal, choosing a{' '}
              <strong>bridal makeup artist close to your home or venue</strong> can save stress on
              the morning of your functions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={INLINE_A}
                    alt="City shopping street suggesting urban Ahmedabad wedding planning"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Weekend traffic near popular banquet routes—buffer time protects your makeup slot.
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={INLINE_B}
                    alt="Wedding rings and celebration details"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  A nearby salon means less rush between finishing glam and reaching the venue.
                </figcaption>
              </figure>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Why location matters on wedding day</h2>
            <p className="text-charcoal/80 mb-6">
              Traffic peaks on weekends and near popular banquet corridors. A salon on Ambli–Bopal
              Road can be easier to reach for brides getting ready before heading to venues in
              Prahlad Nagar, SG Highway, or central Ahmedabad—especially when you factor in hair
              styling time and last-minute outfit changes.
            </p>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li>
                <strong>Buffer time:</strong> Add 20–30 minutes to Google Maps estimates on
                Saturdays and festival weeks.
              </li>
              <li>
                <strong>Day functions:</strong> Outdoor or afternoon events in Gujarat often mean
                stronger sun; finishing makeup at a cool, calm studio helps skin stay settled before
                photos.
              </li>
              <li>
                <strong>Parking & drop-off:</strong> Confirm whether your artist’s studio has
                convenient access for family members travelling with you.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">What to bring to your trial</h2>
            <p className="text-charcoal/80 mb-6">
              Trials are when you align on colour depth (how bold you want eyes and lips), draping
              style, and jewellery placement. For Ahmedabad weddings—often multi-day with haldi,
              sangeet, and reception—photos of your outfits and a few inspiration references help
              your artist plan cohesive looks.
            </p>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li>Fabric swatches or clear photos of lehenga/saree blouses under natural light</li>
              <li>Reference images that match your venue lighting (day vs evening)</li>
              <li>Notes on skin sensitivity, especially if you have tried new skincare recently</li>
            </ul>

            <div className="bg-blush/20 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-charcoal mb-2">Local tip</h3>
              <p className="text-charcoal/80 mb-0">
                Many Ahmedabad venues use warm indoor lighting and bright outdoor mandaps. Ask your
                artist to show you the look in both natural light and warm light before you finalise.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Booking Harmony Salon in Bopal</h2>
            <p className="text-charcoal/80 mb-6">
              Harmony Salon is located in <strong>Rajyash City, Silver Spring, near TRP Mall</strong>
              —a practical choice for brides across West Ahmedabad who want professional bridal
              makeup without a long cross-city drive on the morning of the wedding.
            </p>
            <p className="text-charcoal/80 mb-8">
              Ready to see the space and meet the team? Book a trial through our contact page or
              WhatsApp—we will help you plan timing around your venue and family schedule.
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

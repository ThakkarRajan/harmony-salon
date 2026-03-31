import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Bridal Makeup for Face Shape & Features (Simple Guide) | Harmony Salon',
  description:
    'Easy guide for Indian brides: how face shape, eyes, and features influence bridal makeup—so you brief your MUA with clear goals.',
  keywords:
    'bridal makeup face shape, wedding makeup for round face, Indian bridal makeup guide, eye makeup bridal',
};

const HERO = 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1400&q=80';
const PHOTO_EYES = 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1000&q=80';
const PHOTO_GLOW = 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1000&q=80';

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
              Bridal Makeup for Your Face Shape & Features (Simple Guide)
            </h1>
            <div className="flex items-center text-charcoal/60 text-sm">
              <span>April 8, 2026</span>
              <span className="mx-3">•</span>
              <span>7 min read</span>
            </div>
          </header>

          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={HERO}
              alt="Bride with elegant bridal makeup and traditional styling"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-charcoal/80 mb-8">
              You do not need to be a makeup expert. Understanding a few basics helps you describe
              what you want and <strong>judge whether a trial truly suits your features</strong>—
              beyond copying a Pinterest photo shot under different lighting.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Face shape is a soft guide</h2>
            <p className="text-charcoal/80 mb-6">
              Most people are a blend. Use shape as a conversation starter with your artist, not a
              rigid rule. Common goals:
            </p>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li>
                <strong>Round / fuller cheeks:</strong> Soft contour on temples and under cheekbones;
                avoid heavy horizontal blush stripes.
              </li>
              <li>
                <strong>Oval:</strong> Versatile; focus on balancing eye and lip drama with outfit.
              </li>
              <li>
                <strong>Long:</strong> Blush slightly horizontal on apples; avoid very long vertical
                highlight stripes.
              </li>
              <li>
                <strong>Square jaw:</strong> Soften outer jaw edges with blended contour; rounder blush
                placement can add softness.
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={PHOTO_EYES}
                    alt="Close attention to eye makeup and blending for bridal look"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Eye shape changes how wing length and crease colour read from the front—your MUA
                  should customise, not stencil one style on everyone.
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={PHOTO_GLOW}
                    alt="Editorial beauty portrait emphasising skin glow and features"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <figcaption className="text-sm text-charcoal/60 px-1">
                  Skin prep + the right base finish (matte vs dewy) matter as much as eye colour.
                </figcaption>
              </figure>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Eyes & brows</h2>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li>Monolid, hooded, or deep-set eyes each need different crease placement</li>
              <li>Brows frame the face—shape should match your natural arch, not a template</li>
              <li>Discuss kajal smudge risk if you tear up easily during rituals</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Lips</h2>
            <p className="text-charcoal/80 mb-8">
              Overlining can look stunning in close-ups but odd in person if pushed too far. Trial
              photos from conversational distance—not only selfies—help you decide.
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

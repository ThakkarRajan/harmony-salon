import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  title: '30-Day Bridal Skin Prep Guide — Harmony Salon Blog',
  description: 'Complete checklist and dermatologist-approved tips for glowing skin before your wedding. Follow this 30-day timeline for camera-ready results.',
  keywords: 'bridal skin prep, wedding skincare routine, glowing skin, pre-wedding beauty',
};

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
            <span className="text-gold font-medium">Skincare</span>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mt-2 mb-4">
              30-Day Bridal Skin Prep Guide
            </h1>
            <div className="flex items-center text-charcoal/60 text-sm">
              <span>October 15, 2024</span>
              <span className="mx-3">•</span>
              <span>8 min read</span>
            </div>
          </header>

          <div 
            className="w-full h-96 bg-cover bg-center rounded-3xl mb-12 shadow-lg"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1616683693707-e796e86d2dc6?w=1200)' }}
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-charcoal/80 mb-8">
              Your wedding day is one of the most photographed days of your life. While professional makeup 
              plays a huge role, it all starts with healthy, glowing skin. Follow this 30-day timeline to 
              ensure your skin is camera-ready.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">30 Days Before: Foundation</h2>
            <p className="text-charcoal/80 mb-6">
              This is when you lay the groundwork for beautiful skin. Start a consistent routine and 
              avoid making drastic changes.
            </p>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li><strong>Start a daily routine:</strong> Cleanse, tone, moisturize, and SPF every morning</li>
              <li><strong>Night routine:</strong> Double cleanse, serum, eye cream, night cream</li>
              <li><strong>Hydration:</strong> Drink at least 8-10 glasses of water daily</li>
              <li><strong>Dermatologist visit:</strong> Address any concerns like acne, pigmentation, or dullness</li>
              <li><strong>Start taking supplements:</strong> Vitamin C, E, biotin (consult your doctor)</li>
            </ul>

            <div className="bg-blush/20 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-charcoal mb-2">💡 Pro Tip</h3>
              <p className="text-charcoal/80 mb-0">
                Stick to products you've used before. Now is NOT the time to try new active ingredients 
                or harsh treatments that might cause reactions.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">21 Days Before: Consistency is Key</h2>
            <p className="text-charcoal/80 mb-6">
              Your routine should be in full swing. Focus on consistency and avoid temptation to over-exfoliate.
            </p>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li><strong>Gentle exfoliation:</strong> 2-3 times per week (no harsh scrubs)</li>
              <li><strong>Face masks:</strong> Hydrating or brightening masks once a week</li>
              <li><strong>Sleep:</strong> Aim for 7-8 hours nightly—your skin repairs itself while you sleep</li>
              <li><strong>Diet:</strong> Incorporate antioxidant-rich foods (berries, leafy greens, nuts)</li>
              <li><strong>Stress management:</strong> Practice meditation or yoga; stress affects skin</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">14 Days Before: Final Stretch</h2>
            <p className="text-charcoal/80 mb-6">
              Two weeks out—no more experiments! Maintain your routine and avoid anything that could 
              cause irritation or breakouts.
            </p>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li><strong>STOP trying new products:</strong> Risk of allergic reactions is too high</li>
              <li><strong>Continue hydration:</strong> Water, coconut water, fresh juices</li>
              <li><strong>Avoid excessive sun:</strong> Use SPF 50+ if you must be outdoors</li>
              <li><strong>No picking:</strong> Leave any blemishes alone—let them heal naturally</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">7 Days Before: Pre-Wedding Glow</h2>
            <p className="text-charcoal/80 mb-6">
              One week to go! Time for professional treatments and final touches.
            </p>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li><strong>Professional facial:</strong> Book a hydrating or brightening facial (not closer than 5 days before)</li>
              <li><strong>Your makeup trial:</strong> If you haven't already, do your trial this week</li>
              <li><strong>Avoid waxing/threading:</strong> Do these at least 2-3 days before to let skin settle</li>
              <li><strong>Sheet masks:</strong> Use hydrating sheet masks every 2nd day</li>
            </ul>

            <div className="bg-gold/10 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-charcoal mb-2">⚠️ Warning</h3>
              <p className="text-charcoal/80 mb-0">
                DO NOT get aggressive treatments (peels, laser, microdermabrasion) within 2 weeks of 
                your wedding. The risk of redness, irritation, or unexpected reactions is too high.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">2-3 Days Before: Calm & Hydrate</h2>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li><strong>Gentle cleansing:</strong> Stick to your routine, no changes</li>
              <li><strong>Hydrating masks:</strong> Use a calming, hydrating mask</li>
              <li><strong>Ice your face:</strong> Wrap ice cubes in a cloth and gently massage to reduce puffiness</li>
              <li><strong>Sleep well:</strong> Get extra rest to look refreshed</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Wedding Day Morning</h2>
            <p className="text-charcoal/80 mb-6">
              The big day is here! Keep your morning skincare simple and effective.
            </p>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li><strong>Cleanse gently:</strong> Use your regular cleanser, no need for anything new</li>
              <li><strong>Light moisturizer:</strong> Avoid heavy, oily products that interfere with makeup</li>
              <li><strong>Eye cream:</strong> Apply a light eye cream to reduce puffiness</li>
              <li><strong>Lip balm:</strong> Keep lips hydrated but wipe off before makeup</li>
              <li><strong>No SPF with white cast:</strong> If applying sunscreen, use a clear formula</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Recommended Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-nude/20 rounded-xl p-5">
                <h4 className="font-bold text-charcoal mb-2">Cleansers</h4>
                <ul className="text-sm text-charcoal/80 space-y-1">
                  <li>• Cetaphil Gentle Cleanser</li>
                  <li>• La Roche-Posay Toleriane</li>
                  <li>• Bioderma Sensibio</li>
                </ul>
              </div>
              <div className="bg-nude/20 rounded-xl p-5">
                <h4 className="font-bold text-charcoal mb-2">Moisturizers</h4>
                <ul className="text-sm text-charcoal/80 space-y-1">
                  <li>• Neutrogena Hydro Boost</li>
                  <li>• Clinique Moisture Surge</li>
                  <li>• The Ordinary Natural Moisturizing Factors</li>
                </ul>
              </div>
              <div className="bg-nude/20 rounded-xl p-5">
                <h4 className="font-bold text-charcoal mb-2">Serums</h4>
                <ul className="text-sm text-charcoal/80 space-y-1">
                  <li>• Hyaluronic acid for hydration</li>
                  <li>• Vitamin C for brightness</li>
                  <li>• Niacinamide for texture</li>
                </ul>
              </div>
              <div className="bg-nude/20 rounded-xl p-5">
                <h4 className="font-bold text-charcoal mb-2">Sunscreen</h4>
                <ul className="text-sm text-charcoal/80 space-y-1">
                  <li>• Neutrogena Ultra Sheer</li>
                  <li>• La Roche-Posay Anthelios</li>
                  <li>• Lotus Herbals Safe Sun</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Foods for Glowing Skin</h2>
            <p className="text-charcoal/80 mb-4">What you eat shows on your face. Include these in your diet:</p>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li><strong>Berries:</strong> Blueberries, strawberries—packed with antioxidants</li>
              <li><strong>Fatty fish:</strong> Salmon, mackerel—omega-3 for hydration</li>
              <li><strong>Nuts & seeds:</strong> Almonds, walnuts, flaxseeds—vitamin E</li>
              <li><strong>Leafy greens:</strong> Spinach, kale—detoxify and brighten</li>
              <li><strong>Avocado:</strong> Healthy fats for supple skin</li>
              <li><strong>Water & green tea:</strong> Flush toxins, reduce inflammation</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Final Thoughts</h2>
            <p className="text-charcoal/80 mb-6">
              Beautiful bridal makeup starts with beautiful skin. Give yourself these 30 days to prepare, 
              and you'll see—and feel—the difference. At Harmony Salon, we complement your hard work with 
              expert techniques and premium products to make you look absolutely stunning.
            </p>
            <p className="text-charcoal/80">
              Have questions about your skin type or specific concerns? Reach out to us, and we'll 
              customize advice for you!
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
              <Button href="/contact">
                Book Your Trial
              </Button>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}


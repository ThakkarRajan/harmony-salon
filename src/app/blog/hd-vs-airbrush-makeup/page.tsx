import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { FaArrowLeft, FaCheck, FaTimes } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'HD vs Airbrush Makeup: Which is Right for Your Big Day? — Harmony Salon',
  description: 'Complete comparison of HD and airbrush makeup techniques for brides. Understand the differences, benefits, and best scenarios for each.',
  keywords: 'HD makeup, airbrush makeup, bridal makeup techniques, makeup comparison',
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
            <span className="text-gold font-medium">Makeup Techniques</span>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mt-2 mb-4">
              HD vs Airbrush: Which is Right for Your Big Day?
            </h1>
            <div className="flex items-center text-charcoal/60 text-sm">
              <span>October 10, 2024</span>
              <span className="mx-3">•</span>
              <span>6 min read</span>
            </div>
          </header>

          <div 
            className="w-full h-96 bg-cover bg-center rounded-3xl mb-12 shadow-lg"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200)' }}
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-charcoal/80 mb-8">
              One of the most common questions brides ask: "HD or airbrush?" Both techniques create 
              stunning, camera-ready results, but they work differently and suit different needs. 
              Let's break it down so you can make the best choice for your big day.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">What is HD Makeup?</h2>
            <p className="text-charcoal/80 mb-6">
              HD (High-Definition) makeup uses specially formulated products designed to look flawless 
              under high-definition cameras and bright lights. It's applied using traditional techniques—brushes, 
              sponges, and fingers—but with products that photograph beautifully without flashback or texture.
            </p>

            <div className="bg-blush/20 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-charcoal mb-4">HD Makeup Pros</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li className="flex items-start">
                  <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Natural, skin-like finish that feels lightweight</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Easy to build coverage exactly where needed</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>No flashback in photos (no white cast)</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Works for all skin types</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>More affordable than airbrush</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">What is Airbrush Makeup?</h2>
            <p className="text-charcoal/80 mb-6">
              Airbrush makeup is applied using an airbrush gun that sprays fine mist of foundation onto 
              your skin. The result is an ultra-smooth, seamless finish with no visible lines or texture. 
              It's often called "digital makeup" because it looks flawless even in extreme close-ups.
            </p>

            <div className="bg-gold/10 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-charcoal mb-4">Airbrush Makeup Pros</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li className="flex items-start">
                  <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Incredibly smooth, poreless finish</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Lasts 12-16 hours without touch-ups</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Waterproof and transfer-resistant</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Lightweight, doesn't feel cakey</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Perfect for extreme close-up photography</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Side-by-Side Comparison</h2>
            
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blush/30">
                    <th className="border border-charcoal/10 p-4 text-left">Feature</th>
                    <th className="border border-charcoal/10 p-4 text-left">HD Makeup</th>
                    <th className="border border-charcoal/10 p-4 text-left">Airbrush Makeup</th>
                  </tr>
                </thead>
                <tbody className="text-charcoal/80">
                  <tr>
                    <td className="border border-charcoal/10 p-4 font-medium">Finish</td>
                    <td className="border border-charcoal/10 p-4">Natural, skin-like</td>
                    <td className="border border-charcoal/10 p-4">Ultra-smooth, flawless</td>
                  </tr>
                  <tr className="bg-nude/20">
                    <td className="border border-charcoal/10 p-4 font-medium">Longevity</td>
                    <td className="border border-charcoal/10 p-4">8-10 hours</td>
                    <td className="border border-charcoal/10 p-4">12-16 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-charcoal/10 p-4 font-medium">Best For</td>
                    <td className="border border-charcoal/10 p-4">All skin types, natural look</td>
                    <td className="border border-charcoal/10 p-4">Oily skin, long events</td>
                  </tr>
                  <tr className="bg-nude/20">
                    <td className="border border-charcoal/10 p-4 font-medium">Coverage</td>
                    <td className="border border-charcoal/10 p-4">Buildable, customizable</td>
                    <td className="border border-charcoal/10 p-4">Even, sheer to medium</td>
                  </tr>
                  <tr>
                    <td className="border border-charcoal/10 p-4 font-medium">Feel</td>
                    <td className="border border-charcoal/10 p-4">Lightweight</td>
                    <td className="border border-charcoal/10 p-4">Barely-there</td>
                  </tr>
                  <tr className="bg-nude/20">
                    <td className="border border-charcoal/10 p-4 font-medium">Price</td>
                    <td className="border border-charcoal/10 p-4">₹15,000-20,000</td>
                    <td className="border border-charcoal/10 p-4">₹20,000-30,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">When to Choose HD Makeup</h2>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li><strong>You want a natural, "no-makeup" makeup look</strong> — HD gives a soft, real-skin finish</li>
              <li><strong>You have dry or normal skin</strong> — Traditional application allows for targeted hydration</li>
              <li><strong>You need heavy coverage in specific areas</strong> — Easier to build and conceal with brushes</li>
              <li><strong>Shorter events (4-8 hours)</strong> — HD lasts beautifully for engagement or smaller ceremonies</li>
              <li><strong>Budget-conscious</strong> — HD is more affordable without compromising quality</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">When to Choose Airbrush Makeup</h2>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li><strong>You have oily or combination skin</strong> — Airbrush controls shine better</li>
              <li><strong>Long wedding day (10+ hours)</strong> — Airbrush stays flawless from morning ceremony to evening reception</li>
              <li><strong>Monsoon or summer wedding</strong> — Waterproof and humidity-resistant</li>
              <li><strong>Lots of photography/videography</strong> — Ultra-smooth finish looks incredible in 4K video</li>
              <li><strong>You want absolute perfection</strong> — The smoothest, most poreless finish possible</li>
            </ul>

            <div className="bg-blush/20 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-charcoal mb-2">💡 Pro Tip</h3>
              <p className="text-charcoal/80 mb-0">
                At Harmony Salon, we often combine both! We might use airbrush for the base and HD techniques 
                for contouring, highlighting, and detail work. This gives you the best of both worlds—durability 
                and artistry.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Common Myths Debunked</h2>
            
            <div className="space-y-6 my-8">
              <div className="border-l-4 border-gold pl-6">
                <h4 className="font-bold text-charcoal mb-2">Myth: "Airbrush looks fake or heavy"</h4>
                <p className="text-charcoal/80">
                  <strong>False.</strong> When done correctly, airbrush is incredibly lightweight and natural. 
                  It's the application technique, not the tool, that determines the result.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h4 className="font-bold text-charcoal mb-2">Myth: "HD doesn't last as long"</h4>
                <p className="text-charcoal/80">
                  <strong>Not necessarily.</strong> With proper primers, setting sprays, and quality products, 
                  HD makeup can last 10-12 hours beautifully.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h4 className="font-bold text-charcoal mb-2">Myth: "Airbrush can't be touched up"</h4>
                <p className="text-charcoal/80">
                  <strong>False.</strong> While airbrush is long-lasting, it can be touched up with powder or 
                  additional airbrush application if needed.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-4">Our Recommendation</h2>
            <p className="text-charcoal/80 mb-6">
              There's no universal "better" choice—it depends on your skin, event, and preferences. 
              At Harmony Salon, we recommend:
            </p>
            <ul className="space-y-3 text-charcoal/80 mb-8">
              <li><strong>HD for:</strong> Engagement, mehendi, sangeet, or if you prefer a natural finish</li>
              <li><strong>Airbrush for:</strong> Wedding day, reception, outdoor/summer weddings, or if you need maximum longevity</li>
              <li><strong>Hybrid approach:</strong> Airbrush base + HD detailing for the ultimate result</li>
            </ul>

            <p className="text-charcoal/80 mb-6">
              The best way to decide? <strong>Book a trial.</strong> We'll test both techniques on your skin, 
              see how they photograph, and help you make an informed choice. Your comfort and confidence 
              matter most.
            </p>

            <div className="bg-gold/10 rounded-2xl p-8 my-8 text-center">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Still Unsure?</h3>
              <p className="text-charcoal/80 mb-6">
                Book a complimentary consultation and trial at Harmony Salon. We'll walk you through 
                both options and create a custom plan for your big day.
              </p>
              <Button href="/contact">
                Schedule Your Trial
              </Button>
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
              <Button href="/bridal">
                View Bridal Packages
              </Button>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}


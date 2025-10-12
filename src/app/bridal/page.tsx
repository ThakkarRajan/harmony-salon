import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import PricingCards, { PricingTier } from '@/components/PricingCards';
import JsonLD, { createProductSchema } from '@/components/JsonLD';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Bridal Makeup Packages — Harmony Salon Ahmedabad',
  description: 'Professional bridal makeup services in Ahmedabad. HD & airbrush options, trial makeup, on-site team. Silver, Gold, and Premium packages available.',
  keywords: 'bridal makeup Ahmedabad, wedding makeup artist, bridal makeup packages, HD makeup, airbrush makeup',
};

const packages: PricingTier[] = [
  {
    name: 'Silver',
    price: 'From ₹15,000',
    description: 'Perfect for engagement & pre-wedding events',
    features: [
      'HD makeup application',
      'Basic hairstyle (updo or curls)',
      'Standard false lashes',
      'Makeup lasts 8-10 hours',
      'Complimentary trial makeup',
      'Touch-up kit provided',
    ],
  },
  {
    name: 'Gold',
    price: 'From ₹28,000',
    description: 'Our most popular bridal package',
    featured: true,
    features: [
      'HD or Airbrush makeup',
      '2 hairstyle changes',
      'Premium false lashes',
      'Makeup lasts 12-14 hours',
      'Complimentary trial makeup',
      'Deluxe touch-up kit',
      'Hair accessories included',
      'One assistant for support',
    ],
  },
  {
    name: 'Premium',
    price: 'Custom Quote',
    description: 'Ultimate luxury for bride + reception',
    features: [
      'Airbrush makeup (2 sessions)',
      'Multiple hairstyle changes',
      'Luxury false lashes & extensions',
      'All-day makeup coverage',
      '2 complimentary trials',
      'Premium touch-up kit',
      'Jewelry & accessories styling',
      'Dedicated assistant artist',
      'On-site team at venue',
    ],
  },
];

const products = [
  createProductSchema(
    'Silver Bridal Package',
    'HD makeup with basic hairstyle for engagement and pre-wedding events',
    '15000'
  ),
  createProductSchema(
    'Gold Bridal Package',
    'HD or Airbrush makeup with 2 hairstyle changes - most popular package',
    '28000'
  ),
];

export default function BridalPage() {
  return (
    <>
      <JsonLD data={products[0]} />
      <JsonLD data={products[1]} />
      
      <Hero
        title="Bridal Makeup Packages"
        subtitle="Natural, long-lasting looks that make you feel like the most beautiful version of yourself"
        primaryCTA={{ text: 'Book a Trial', href: '/contact' }}
      />

      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Every package includes a complimentary trial so you can perfect your look before the big day
            </p>
          </div>

          <PricingCards tiers={packages} />
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-b from-blush/20 to-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-4">✨ Premium Products Only</h3>
              <p className="text-charcoal/70 mb-4">
                We use professional-grade products from MAC, Huda Beauty, Estée Lauder, and other luxury brands. 
                Your skin deserves the best.
              </p>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>• HD & airbrush foundations</li>
                <li>• Long-wear, waterproof formulas</li>
                <li>• Hypoallergenic products available</li>
                <li>• Fresh, sanitized products for every bride</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-4">🧼 Hygiene Standards</h3>
              <p className="text-charcoal/70 mb-4">
                Your safety is our priority. We follow strict hygiene protocols for every appointment.
              </p>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>• All tools sanitized before use</li>
                <li>• Disposable applicators & brushes</li>
                <li>• Clean, organized workspace</li>
                <li>• Individual product portions</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-4">📸 Camera-Ready Results</h3>
              <p className="text-charcoal/70 mb-4">
                HD and airbrush techniques ensure you look flawless in photos and videos, without flashback.
              </p>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>• No white cast in flash photography</li>
                <li>• Skin looks natural, not cakey</li>
                <li>• Long-lasting wear (10-14 hours)</li>
                <li>• Touch-up kit for the day</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-4">🚗 On-Site Service</h3>
              <p className="text-charcoal/70 mb-4">
                Relax at home or your venue while our team comes to you—available across Ahmedabad.
              </p>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>• Door-to-door service</li>
                <li>• Comfortable, stress-free prep</li>
                <li>• Full setup with lights & mirrors</li>
                <li>• Additional charges apply</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Trial Makeup */}
      <section className="py-20 bg-white">
        <Container size="md">
          <div className="bg-gradient-to-br from-gold to-gold/90 text-white rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complimentary Trial Makeup
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Try before you commit! Every package includes a trial session where we perfect your look 
              and address any concerns. No surprises on your big day.
            </p>
            <div className="space-y-3 text-left max-w-md mx-auto mb-8">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <span>Test products on your skin</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <span>Choose your preferred style</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <span>See how makeup photographs</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <span>Discuss timeline & logistics</span>
              </div>
            </div>
            <Button 
              href="/contact" 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-gold"
            >
              Schedule Your Trial
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-blush/10">
        <Container size="md">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-charcoal mb-2">HD vs Airbrush—what should I choose?</h3>
              <p className="text-charcoal/70">
                HD makeup uses traditional application with high-definition products, great for most brides. 
                Airbrush gives an ultra-smooth, flawless finish and is ideal for long events, oily skin, or 
                extreme close-up photography. We'll help you decide during your trial.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-charcoal mb-2">Do you travel to venues?</h3>
              <p className="text-charcoal/70">
                Yes! We provide on-site service across Ahmedabad and nearby areas. Additional travel charges 
                apply based on location. We bring professional lighting, mirrors, and all equipment needed.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-charcoal mb-2">How early should I book?</h3>
              <p className="text-charcoal/70">
                We recommend booking 2-3 months in advance, especially during wedding season (October-March). 
                However, we can accommodate last-minute bookings based on availability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-charcoal mb-2">What if I have sensitive skin?</h3>
              <p className="text-charcoal/70">
                We carry hypoallergenic and sensitive-skin-friendly products. Please inform us during booking, 
                and we'll use appropriate products during your trial and wedding day.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Ready to Book Your Bridal Package?
          </h2>
          <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
            Let's create the perfect look for your special day
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Book a Trial
            </Button>
            <Button href="https://wa.me/919638437565?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20a%20...%20" variant="outline" size="lg">
              WhatsApp Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}


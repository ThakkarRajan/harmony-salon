import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import PricingCards from '@/components/PricingCards';
import Button from '@/components/Button';
import JsonLD, { bridalStudioPriceListSchema } from '@/components/JsonLD';
import { bridalAndSidersPackages } from '@/data/bridalPricing';

export const metadata: Metadata = {
  title: 'Bridal Makeup Price List — HD Party, Engagement & Packages',
  description:
    'Bridal package price list (studio Ahmedabad): Marriage Day ₹15,000, bride-side ₹7,000, siders ₹2,500–₹4,500. HD party makeup from ₹6,000, engagement & bridal hairstyle prices. Makeup artist fees at Harmony Salon Bopal.',
  keywords:
    'bridal makeup price list, bridal package price, hd party makeup price, hd makeup price, engagement makeup price, makeup artist fees, bridal hairstyle price, harmony salon ahmedabad',
  alternates: { canonical: 'https://harmonysalon.biz/prices' },
};

export default function PricesPage() {
  return (
    <>
      <JsonLD data={bridalStudioPriceListSchema} />
      <Hero
        title="Transparent Pricing"
        subtitle="No hidden costs. No surprises. Just beautiful, affordable bridal makeup."
        primaryCTA={{ text: 'Book a Consultation', href: '/contact' }}
      />

      {/* Bridal Packages */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Bridal Makeup Packages
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Bridal and siders rates below are studio charges — your quick reference for bridal package price list,
              HD party makeup price, engagement makeup, and makeup artist fees in Ahmedabad. All bridal packages include
              a complimentary trial session.
            </p>
          </div>

          <PricingCards tiers={bridalAndSidersPackages} />
        </Container>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-blush/10">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Additional Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Party Makeup */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-4">Party Makeup</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">Basic Party</span>
                  <span className="font-bold text-charcoal">₹4,000+</span>
                </div>
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">HD Party Makeup</span>
                  <span className="font-bold text-charcoal">₹6,000+</span>
                </div>
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">Sangeet/Mehendi</span>
                  <span className="font-bold text-charcoal">₹8,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/70">Full Glam</span>
                  <span className="font-bold text-charcoal">₹10,000+</span>
                </div>
              </div>
            </div>

            {/* Hairstyling */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-4">Hairstyling</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">Basic Updo</span>
                  <span className="font-bold text-charcoal">₹3,000+</span>
                </div>
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">Bridal Hairstyle</span>
                  <span className="font-bold text-charcoal">₹5,000+</span>
                </div>
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">With Extensions</span>
                  <span className="font-bold text-charcoal">₹7,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/70">Multiple Changes</span>
                  <span className="font-bold text-charcoal">Custom</span>
                </div>
              </div>
            </div>

            {/* Nail Art */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-4">Nail Art</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">Basic Manicure</span>
                  <span className="font-bold text-charcoal">₹1,500+</span>
                </div>
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">Bridal Nail Art</span>
                  <span className="font-bold text-charcoal">₹3,000+</span>
                </div>
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">Extensions</span>
                  <span className="font-bold text-charcoal">₹4,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/70">Custom 3D Art</span>
                  <span className="font-bold text-charcoal">₹5,000+</span>
                </div>
              </div>
            </div>

            {/* Add-ons */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-4">Add-ons</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">False Lashes</span>
                  <span className="font-bold text-charcoal">₹500+</span>
                </div>
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">HD Foundation</span>
                  <span className="font-bold text-charcoal">₹1,000+</span>
                </div>
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">Airbrush Upgrade</span>
                  <span className="font-bold text-charcoal">₹2,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/70">Hair Extensions</span>
                  <span className="font-bold text-charcoal">₹1,500+</span>
                </div>
              </div>
            </div>

            {/* Saree Draping */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-4">Saree Draping</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">Basic Draping</span>
                  <span className="font-bold text-charcoal">₹1,000+</span>
                </div>
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">Designer Draping</span>
                  <span className="font-bold text-charcoal">₹1,500+</span>
                </div>
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">Lehenga Set</span>
                  <span className="font-bold text-charcoal">₹800+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/70">Dupatta Set</span>
                  <span className="font-bold text-charcoal">₹500+</span>
                </div>
              </div>
            </div>

            {/* Siders (studio) — same tiers as bridal packages grid */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-4">Siders Package (Studio)</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">3D makeup & hairstyle</span>
                  <span className="font-bold text-charcoal">₹2,500</span>
                </div>
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">HD makeup & hairstyle</span>
                  <span className="font-bold text-charcoal">₹3,500</span>
                </div>
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal/70">Full package (flowers, lenses, lashes & extensions)</span>
                  <span className="font-bold text-charcoal">₹4,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/70">Mother / family / group</span>
                  <span className="font-bold text-charcoal">Ask us</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Current Offers */}
      <section className="py-20 bg-white">
        <Container size="md">
          <div className="bg-gradient-to-br from-gold to-gold/90 text-white rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Current Offers
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">🎉 Early Bird Discount</h3>
                <p className="text-white/90">
                  Book 3+ months in advance and get 10% off any bridal package
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">👯 Refer & Earn</h3>
                <p className="text-white/90">
                  Refer a friend and both get ₹1,000 off your next booking
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">💐 Bridal Party Package</h3>
                <p className="text-white/90">
                  Book makeup for 5+ people and get 15% group discount
                </p>
              </div>
            </div>

            <Button 
              href="/contact" 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-gold"
            >
              Claim Your Offer
            </Button>
          </div>
        </Container>
      </section>

      {/* Payment & Policy */}
      <section className="py-20 bg-blush/10">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Payment & Policies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-charcoal mb-3 flex items-center">
                <span className="text-2xl mr-2">💳</span>
                Payment Methods
              </h3>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>• Cash, UPI, Cards accepted</li>
                <li>• 50% advance to confirm booking</li>
                <li>• Remaining balance on service day</li>
                <li>• Digital invoices provided</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-charcoal mb-3 flex items-center">
                <span className="text-2xl mr-2">🚗</span>
                Travel Charges
              </h3>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>• Within 10km: No charge</li>
                <li>• 10-20km: ₹1,000</li>
                <li>• 20-30km: ₹2,000</li>
                <li>• Beyond 30km: Custom quote</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-charcoal mb-3 flex items-center">
                <span className="text-2xl mr-2">📅</span>
                Cancellation Policy
              </h3>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>• 30+ days: Full refund</li>
                <li>• 15-30 days: 50% refund</li>
                <li>• Less than 15 days: No refund</li>
                <li>• Rescheduling allowed once</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-charcoal mb-3 flex items-center">
                <span className="text-2xl mr-2">⏰</span>
                Timing
              </h3>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>• Bridal makeup: 90-120 mins</li>
                <li>• Party makeup: 60-90 mins</li>
                <li>• Hairstyling: 45-60 mins</li>
                <li>• Please arrive on time for trials</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Ready to Book Your Service?
          </h2>
          <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
            Contact us for a detailed quote or to schedule your complimentary trial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get a Quote
            </Button>
            <Button href="https://wa.me/919638437565?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20a%20...%20" variant="outline" size="lg">
              WhatsApp for Pricing
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}


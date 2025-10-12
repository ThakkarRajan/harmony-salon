import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Hair Styling & Nail Art — Harmony Salon Ahmedabad',
  description: 'Professional hairstyling, nail art, party makeup, and beauty services in Ahmedabad. Complete your look with expert styling.',
  keywords: 'hair styling Ahmedabad, nail art, party makeup, hairstyles, beauty salon Bopal',
};

export default function HairNailsPage() {
  return (
    <>
      <Hero
        title="Hair, Nails & Party Makeup"
        subtitle="Complete your transformation with expert styling services"
        primaryCTA={{ text: 'Book an Appointment', href: '/contact' }}
      />

      {/* Hairstyling */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Professional Hairstyling
              </h2>
              <p className="text-lg text-charcoal/70 mb-6">
                From elegant updos to flowing curls, our hairstyling services complement your makeup 
                perfectly. Whether it's your wedding day, sangeet, or a special party, we create 
                hairstyles that last all day.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-gold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-charcoal">Bridal Hairstyles</h4>
                    <p className="text-sm text-charcoal/70">Traditional buns, modern updos, and half-up styles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-charcoal">Party & Event Styling</h4>
                    <p className="text-sm text-charcoal/70">Curls, waves, braids, and contemporary styles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-charcoal">Hair Extensions & Volume</h4>
                    <p className="text-sm text-charcoal/70">Clip-in extensions for added length and fullness</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-charcoal">Hair Accessories</h4>
                    <p className="text-sm text-charcoal/70">Flowers, pins, and jewelry placement</p>
                  </div>
                </div>
              </div>

              <Button href="/contact">Book Hairstyling</Button>
            </div>

            <div className="bg-gradient-to-br from-blush to-nude rounded-3xl p-12 text-center">
              <div className="text-6xl mb-4">💇</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Hairstyling Prices</h3>
              <div className="space-y-4 text-left max-w-sm mx-auto">
                <div className="flex justify-between items-center border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal">Basic Updo</span>
                  <span className="font-bold text-charcoal">₹3,000+</span>
                </div>
                <div className="flex justify-between items-center border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal">Bridal Hairstyle</span>
                  <span className="font-bold text-charcoal">₹5,000+</span>
                </div>
                <div className="flex justify-between items-center border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal">With Extensions</span>
                  <span className="font-bold text-charcoal">₹7,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal">Multiple Changes</span>
                  <span className="font-bold text-charcoal">Custom</span>
                </div>
              </div>
            </div>
          </div>

          {/* Party Makeup */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-gold/20 to-blush/30 rounded-3xl p-12 text-center">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Party Makeup Prices</h3>
              <div className="space-y-4 text-left max-w-sm mx-auto">
                <div className="flex justify-between items-center border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal">Basic Party Makeup</span>
                  <span className="font-bold text-charcoal">₹4,000+</span>
                </div>
                <div className="flex justify-between items-center border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal">HD Party Makeup</span>
                  <span className="font-bold text-charcoal">₹6,000+</span>
                </div>
                <div className="flex justify-between items-center border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal">Sangeet/Mehendi</span>
                  <span className="font-bold text-charcoal">₹8,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal">Full Glam Look</span>
                  <span className="font-bold text-charcoal">₹10,000+</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Party & Event Makeup
              </h2>
              <p className="text-lg text-charcoal/70 mb-6">
                Look your best for any occasion—from sangeet and mehendi to cocktail parties 
                and receptions. We create stunning looks tailored to your event and outfit.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-gold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-charcoal">Sangeet & Mehendi Makeup</h4>
                    <p className="text-sm text-charcoal/70">Colorful, playful looks for pre-wedding celebrations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-charcoal">Reception Makeup</h4>
                    <p className="text-sm text-charcoal/70">Elegant evening looks that photograph beautifully</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-charcoal">Cocktail & Party Glam</h4>
                    <p className="text-sm text-charcoal/70">Bold, contemporary looks for modern events</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-charcoal">Guest Makeup</h4>
                    <p className="text-sm text-charcoal/70">Perfect for wedding guests and bridesmaids</p>
                  </div>
                </div>
              </div>

              <Button href="/contact">Book Party Makeup</Button>
            </div>
          </div>

          {/* Nail Art */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Nail Art & Extensions
              </h2>
              <p className="text-lg text-charcoal/70 mb-6">
                Complete your bridal look with beautiful nail art. From subtle French manicures to 
                intricate bridal designs, we create nails that complement your overall aesthetic.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-gold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-charcoal">Bridal Nail Art</h4>
                    <p className="text-sm text-charcoal/70">Elegant designs with stones, glitter, and 3D elements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-charcoal">Gel & Acrylic Extensions</h4>
                    <p className="text-sm text-charcoal/70">Long-lasting extensions in any length and shape</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-charcoal">Manicure & Pedicure</h4>
                    <p className="text-sm text-charcoal/70">Professional grooming and polish application</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-charcoal">Custom Designs</h4>
                    <p className="text-sm text-charcoal/70">Match your outfit, jewelry, and theme</p>
                  </div>
                </div>
              </div>

              <Button href="/contact">Book Nail Services</Button>
            </div>

            <div className="bg-gradient-to-br from-nude to-blush rounded-3xl p-12 text-center">
              <div className="text-6xl mb-4">💅</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Nail Art Prices</h3>
              <div className="space-y-4 text-left max-w-sm mx-auto">
                <div className="flex justify-between items-center border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal">Basic Manicure</span>
                  <span className="font-bold text-charcoal">₹1,500+</span>
                </div>
                <div className="flex justify-between items-center border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal">Bridal Nail Art</span>
                  <span className="font-bold text-charcoal">₹3,000+</span>
                </div>
                <div className="flex justify-between items-center border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal">Nail Extensions</span>
                  <span className="font-bold text-charcoal">₹4,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal">Custom 3D Art</span>
                  <span className="font-bold text-charcoal">₹5,000+</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-blush/10">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Popular Add-Ons
            </h2>
            <p className="text-lg text-charcoal/70">
              Enhance your service with these popular extras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'False Lashes', price: 'From ₹500', desc: 'Natural to dramatic lashes' },
              { name: 'HD Foundation', price: 'From ₹1,000', desc: 'Upgrade to HD products' },
              { name: 'Airbrush Makeup', price: 'From ₹2,000', desc: 'Flawless airbrush finish' },
              { name: 'Hair Extensions', price: 'From ₹1,500', desc: 'Clip-in for volume' },
              { name: 'Draping/Saree Set', price: 'From ₹1,000', desc: 'Professional draping' },
              { name: 'Touch-up Kit', price: 'From ₹800', desc: 'Take-home products' },
            ].map((addon, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md text-center">
                <h3 className="font-bold text-charcoal mb-2">{addon.name}</h3>
                <p className="text-gold font-bold text-lg mb-2">{addon.price}</p>
                <p className="text-sm text-charcoal/70">{addon.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Ready to Complete Your Look?
          </h2>
          <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
            Book your hairstyling, nail art, or party makeup service today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Book an Appointment
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


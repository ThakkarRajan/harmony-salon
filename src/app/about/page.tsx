import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'About Us — Harmony Salon Bridal Makeup Artist',
  description: 'Meet the artists behind Harmony Salon. Certified makeup professionals using premium products with strict hygiene standards in Ahmedabad.',
  keywords: 'about makeup artist, certified makeup artist Ahmedabad, professional bridal artist',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Harmony Salon"
        subtitle="Where artistry meets hygiene, and beauty meets confidence"
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Our Story
              </h2>
              <p className="text-lg text-charcoal/70 mb-4">
                Harmony Salon was born from a simple belief: every bride deserves to feel like 
                the most beautiful version of herself on her special day. Not overdone, not 
                unrecognizable—just naturally radiant and camera-ready.
              </p>
              <p className="text-lg text-charcoal/70 mb-4">
                Since our founding, we've had the privilege of being part of hundreds of wedding 
                stories across Ahmedabad. Each bride brings her unique beauty, style, and vision—and 
                we're here to enhance it, not change it.
              </p>
              <p className="text-lg text-charcoal/70 mb-6">
                Our approach combines professional artistry with premium products and strict hygiene 
                standards. We believe beautiful makeup shouldn't come at the cost of your skin's health.
              </p>
              <Button href="/contact">Work With Us</Button>
            </div>

            <div className="bg-gradient-to-br from-blush to-nude rounded-3xl p-12">
              <div className="space-y-8">
                <div>
                  <div className="text-4xl mb-3">✨</div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Our Philosophy</h3>
                  <p className="text-charcoal/70">
                    Natural beauty, elevated. We enhance what makes you uniquely beautiful, 
                    ensuring you look like yourself—just more radiant.
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🎨</div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Our Expertise</h3>
                  <p className="text-charcoal/70">
                    Certified in HD and airbrush techniques, with years of experience in 
                    bridal, party, and special occasion makeup.
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-3">💝</div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Our Promise</h3>
                  <p className="text-charcoal/70">
                    Long-lasting, camera-ready results with premium products and hygienic 
                    processes. Your satisfaction is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Meet the Artist */}
      <section className="py-20 bg-blush/10">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Meet the Lead Artist
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gold to-gold/70 flex items-center justify-center text-white text-6xl mb-4">
                  👩‍🎨
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">Harmony</h3>
                <p className="text-charcoal/60">Lead Makeup Artist</p>
              </div>

              <div className="md:col-span-2">
                <p className="text-lg text-charcoal/70 mb-6">
                  With over 8 years of experience in bridal and special occasion makeup, Harmony 
                  specializes in creating soft-glam, long-lasting looks that photograph beautifully. 
                  Her signature style focuses on enhancing natural beauty while ensuring every bride 
                  feels confident and comfortable.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-charcoal mb-2">Certifications & Training</h4>
                    <ul className="space-y-1 text-charcoal/70">
                      <li>• Professional Makeup Artistry Diploma</li>
                      <li>• HD & Airbrush Makeup Certification</li>
                      <li>• Bridal Makeup Specialist Course</li>
                      <li>• Advanced Color Theory & Face Shaping</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-charcoal mb-2">Specializations</h4>
                    <ul className="space-y-1 text-charcoal/70">
                      <li>• Indian bridal makeup (traditional & contemporary)</li>
                      <li>• HD & airbrush techniques for photography</li>
                      <li>• Long-wear makeup for all-day events</li>
                      <li>• Skin-tone matching & color correction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blush/30 to-nude/30 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-charcoal mb-2">Premium Products</h3>
              <p className="text-sm text-charcoal/70">
                MAC, Huda Beauty, Estée Lauder, and other luxury brands
              </p>
            </div>

            <div className="bg-gradient-to-br from-gold/20 to-blush/30 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🧼</div>
              <h3 className="font-bold text-charcoal mb-2">Hygiene First</h3>
              <p className="text-sm text-charcoal/70">
                Sanitized tools, disposable applicators, fresh products
              </p>
            </div>

            <div className="bg-gradient-to-br from-nude/30 to-blush/30 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">📸</div>
              <h3 className="font-bold text-charcoal mb-2">Camera-Ready</h3>
              <p className="text-sm text-charcoal/70">
                HD & airbrush for flawless photos without flashback
              </p>
            </div>

            <div className="bg-gradient-to-br from-blush/30 to-gold/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="font-bold text-charcoal mb-2">On-Site Available</h3>
              <p className="text-sm text-charcoal/70">
                We come to your venue across Ahmedabad
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Products We Use */}
      <section className="py-20 bg-gradient-to-b from-blush/10 to-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Premium Products We Use
            </h2>
            <p className="text-lg text-charcoal/70">
              Your skin deserves the best. We use only professional-grade, high-quality products.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['MAC', 'Huda Beauty', 'Estée Lauder', 'NARS', 'Urban Decay', 'Bobbi Brown', 
                'Anastasia', 'Charlotte Tilbury', 'Laura Mercier', 'Makeup Forever', 'PAC', 'Kryolan'].map((brand) => (
                <div key={brand} className="bg-blush/20 rounded-xl p-4 text-center font-medium text-charcoal">
                  {brand}
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-charcoal mb-2">Foundations & Bases</h4>
                <p className="text-sm text-charcoal/70">
                  HD, airbrush, and long-wear formulas
                </p>
              </div>
              <div>
                <h4 className="font-bold text-charcoal mb-2">Eye Products</h4>
                <p className="text-sm text-charcoal/70">
                  Waterproof, crease-proof, high-pigment
                </p>
              </div>
              <div>
                <h4 className="font-bold text-charcoal mb-2">Setting Products</h4>
                <p className="text-sm text-charcoal/70">
                  Professional sprays and powders for longevity
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Hygiene Standards */}
      <section className="py-20 bg-white">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Hygiene Standards
            </h2>
            <p className="text-lg text-charcoal/70">
              Your safety and well-being are our top priorities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blush/10 rounded-2xl p-6">
              <h3 className="font-bold text-charcoal mb-3 flex items-center">
                <span className="text-2xl mr-2">🧴</span>
                Products
              </h3>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>• Individual portions for each client</li>
                <li>• Fresh sponges and applicators</li>
                <li>• Hypoallergenic options available</li>
                <li>• All products within expiry dates</li>
              </ul>
            </div>

            <div className="bg-blush/10 rounded-2xl p-6">
              <h3 className="font-bold text-charcoal mb-3 flex items-center">
                <span className="text-2xl mr-2">🔧</span>
                Tools
              </h3>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>• Brushes sanitized after every use</li>
                <li>• Disposable mascara wands</li>
                <li>• Clean towels and capes</li>
                <li>• Tools stored in sterilized containers</li>
              </ul>
            </div>

            <div className="bg-blush/10 rounded-2xl p-6">
              <h3 className="font-bold text-charcoal mb-3 flex items-center">
                <span className="text-2xl mr-2">🧼</span>
                Workspace
              </h3>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>• Clean, organized setup</li>
                <li>• Sanitized surfaces</li>
                <li>• Proper lighting and ventilation</li>
                <li>• Professional studio environment</li>
              </ul>
            </div>

            <div className="bg-blush/10 rounded-2xl p-6">
              <h3 className="font-bold text-charcoal mb-3 flex items-center">
                <span className="text-2xl mr-2">✋</span>
                Personal Hygiene
              </h3>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>• Hand sanitization before service</li>
                <li>• Clean attire and appearance</li>
                <li>• Masks available upon request</li>
                <li>• Professional conduct maintained</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gold to-gold/90 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Harmony Difference?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Book a trial and see why brides across Ahmedabad trust us with their special day
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="/contact" 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-gold"
            >
              Schedule a Trial
            </Button>
            <Button 
              href="/portfolio" 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-gold"
            >
              View Our Work
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}


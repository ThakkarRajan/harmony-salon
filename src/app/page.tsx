import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import StatsRow from '@/components/StatsRow';
import Container from '@/components/Container';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import TestimonialCarousel, { Testimonial } from '@/components/TestimonialCarousel';
import Button from '@/components/Button';
import JsonLD, { businessSchema, websiteSchema } from '@/components/JsonLD';

export const metadata: Metadata = {
  title: {
    absolute:
      'Harmony Salon Ahmedabad | Bridal Makeup Artist — Packages & Price List',
  },
  description:
    'Harmony Salon in Bopal, Ahmedabad (near TRP Mall): bridal makeup packages, HD & 3D bridal makeup, engagement & party rates. Studio price list from ₹7,000–₹15,000; siders from ₹2,500. Book a complimentary trial.',
  alternates: { canonical: 'https://harmonysalon.biz' },
};

const testimonials: Testimonial[] = [
  {
    name: 'Jahanvi S',
    service: 'Bridal Makeup',
    rating: 5,
    text: 'Oh my god, I never knew I could look like this! Thank you so much, you were amazing. I am so happy with the way I look. You are truly an incredible artist and individual. You make me feel the most gorgeous I have ever felt. Once again thank you so much for this bridal look!',
    date: '2024-11-20',
  },
  {
    name: 'Rishita S',
    service: 'Professional Makeup',
    rating: 5,
    text: 'I had the pleasure of getting my makeup done by Shreya. They are incredibly talented and professional, paying attention to every detail to create a flawless look. The makeup lasted all day, felt lightweight, and looked stunning in photos. They perfectly understood my preferences and enhanced my natural beauty without making it look overdone.',
    date: '2024-11-15',
  },
  {
    name: 'Ishna P',
    service: 'Hair Color',
    rating: 5,
    text: 'After having so many failed experiences on my hair in Ahmedabad, I finally found Harmony Salon which not only provided me enough time but also were super empathetic. They were completely packed for the day but somehow managed some time and did my hair color. It turned out to be good as well!',
    date: '2024-11-10',
  },
  {
    name: 'Heli S',
    service: 'Bridal Package',
    rating: 5,
    text: 'Fantastic work! I\'m completely in love with your artwork and had a wonderful time getting ready there. A perfect recommendation for every beauty style you like to get one for yourself.',
    date: '2024-10-28',
  },
  {
    name: 'Bhakti S',
    service: 'Nail Art Services & Classes',
    rating: 5,
    text: 'It\'s been great experience getting service from Harmony! Her quality and clarity of technique of teaching is amazing and her dedication towards her work is amazing. Her work makes you glow up on its own and makes your days more beautiful.',
    date: '2024-10-20',
  },
];

export default function Home() {
  return (
    <>
      <JsonLD data={businessSchema} />
      <JsonLD data={websiteSchema} />
      
      <Hero
        title="Bridal Makeup that looks like you—just elevated."
        subtitle="Soft-glam, long-wear looks for Ahmedabad brides. Hygienic, premium, camera-ready."
        primaryCTA={{ text: 'Book a Trial', href: '/contact' }}
        secondaryCTA={{ text: 'WhatsApp Us', href: 'https://wa.me/919638437565' }}
      />

      <StatsRow />

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-blush/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              From bridal perfection to party glam, we create looks that celebrate your unique beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💍</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Bridal Makeup</h3>
              <p className="text-charcoal/70 mb-4">
                Long-lasting, camera-ready bridal looks with HD & airbrush options. Trial makeup included.
              </p>
              <Button href="/bridal" variant="outline" size="sm">
                Learn More
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💇</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Hair & Styling</h3>
              <p className="text-charcoal/70 mb-4">
                From elegant updos to flowing curls, complete your look with professional hairstyling.
              </p>
              <Button href="/hair-nails" variant="outline" size="sm">
                Learn More
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💅</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Nail Art & More</h3>
              <p className="text-charcoal/70 mb-4">
                Beautiful nail art, extensions, and party makeup to complete your transformation.
              </p>
              <Button href="/hair-nails" variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              See the Transformation
            </h2>
            <p className="text-lg text-charcoal/70">
              Natural beauty, enhanced to perfection
            </p>
          </div>

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BeforeAfterSlider
              beforeImage="htps://images.unsplash.com/photo-1595475884562-073c30d45670?w=800"
              afterImage="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800"
              alt="Bridal Makeup Transformation"
            />
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800"
              afterImage="https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800"
              alt="Party Makeup Transformation"
            />
          </div> */}

          <div className="text-center mt-12">
            <Button href="/portfolio" size="lg">
              View Full Portfolio
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-blush/20 to-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Why Brides Choose Harmony
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '✨',
                title: 'Premium Products',
                desc: 'MAC, Huda Beauty, Estée Lauder—only the best for your special day',
              },
              {
                icon: '🧼',
                title: 'Hygienic Process',
                desc: 'Sanitized tools, fresh products, and clean workspace guaranteed',
              },
              {
                icon: '📸',
                title: 'Camera-Ready',
                desc: 'HD & airbrush options that look stunning in photos and in person',
              },
              {
                icon: '🚗',
                title: 'On-Site Team',
                desc: 'We come to your venue across Ahmedabad for stress-free prep',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{feature.title}</h3>
                <p className="text-sm text-charcoal/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-charcoal/70">
              500+ satisfied clients with 4.9/5 rating
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />

          <div className="text-center mt-12">
            <Button href="/reviews" variant="outline" size="lg">
              Read All Reviews
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gold to-gold/90 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Book a complimentary trial and see how Harmony Salon can make your special day even more beautiful
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gold">
              Book Your Trial
            </Button>
            <a
              href="https://wa.me/919638437565"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-gold rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg"
          >
              WhatsApp Us Now
          </a>
        </div>
        </Container>
      </section>
    </>
  );
}

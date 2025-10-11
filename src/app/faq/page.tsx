import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import FAQAccordion, { FAQ } from '@/components/FAQAccordion';
import JsonLD, { createFAQSchema } from '@/components/JsonLD';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'FAQ — Common Questions About Bridal Makeup | Harmony Salon',
  description: 'Find answers to common questions about bridal makeup, pricing, booking, and services at Harmony Salon Ahmedabad.',
  keywords: 'bridal makeup FAQ, makeup artist questions, bridal prep tips, Ahmedabad makeup',
};

const faqs: FAQ[] = [
  {
    question: 'HD vs Airbrush—what should I choose?',
    answer: 'HD makeup uses high-definition products applied with traditional techniques (brushes/sponges). It gives a natural, skin-like finish and is great for most brides. Airbrush makeup is sprayed on using an airbrush gun, creating an ultra-smooth, flawless finish that photographs exceptionally well and lasts longer. We recommend airbrush for oily skin, long events (12+ hours), or if you want an extremely smooth, poreless look in close-up photos. During your trial, we can help you decide what works best for your skin type and preferences.',
  },
  {
    question: 'Do you travel to venues?',
    answer: 'Yes! We provide on-site bridal makeup services across Ahmedabad and nearby areas. We bring professional lighting, mirrors, and all necessary equipment. Travel charges apply based on distance: within 10km is free, 10-20km is ₹1,000, 20-30km is ₹2,000, and beyond 30km we provide a custom quote. On-site service is perfect for stress-free morning preparations at your home or wedding venue.',
  },
  {
    question: 'How early should I book?',
    answer: 'We recommend booking 2-3 months in advance, especially during peak wedding season (October to March). This ensures you get your preferred date and allows enough time for a trial session. However, we do our best to accommodate last-minute bookings based on availability. If your wedding is less than a month away, contact us immediately via WhatsApp and we\'ll check our schedule.',
  },
  {
    question: 'What is included in a trial?',
    answer: 'A trial makeup session includes full face makeup application with your chosen look (HD or airbrush), product testing on your skin, discussion of your preferences and outfit, photography to see how it looks in camera, and a consultation about the wedding day timeline. The trial typically takes 90-120 minutes. It\'s complimentary with all bridal packages. This is your chance to perfect the look and make any adjustments before your big day.',
  },
  {
    question: 'What if I have sensitive skin or allergies?',
    answer: 'We carry hypoallergenic and sensitive-skin-friendly products from brands like MAC, Estée Lauder, and Bobbi Brown. Please inform us about any allergies or skin sensitivities during booking. We\'ll do a patch test during your trial and use appropriate products for your skin. If you have specific product preferences or restrictions, let us know in advance.',
  },
  {
    question: 'How long does bridal makeup take?',
    answer: 'Full bridal makeup (face + hair) takes approximately 2-2.5 hours. Makeup alone takes 90-120 minutes, and hairstyling adds 45-60 minutes. We recommend starting early enough to have buffer time. For a morning wedding, plan for makeup to begin 3-4 hours before the ceremony. We\'ll provide a detailed timeline after booking.',
  },
  {
    question: 'Will my makeup last all day?',
    answer: 'Yes! We use long-wear, waterproof products and professional setting techniques to ensure your makeup lasts 10-14 hours (depending on the package). We also provide a touch-up kit with essentials like blotting papers, lipstick, and powder so you can refresh throughout the day. Our makeup is designed to withstand heat, humidity, tears, and hours of celebration.',
  },
  {
    question: 'Can I see examples of your work?',
    answer: 'Absolutely! Check out our Portfolio page to see before/after transformations and real bride photos. We also regularly post on Instagram @makeoverby_harmony with behind-the-scenes, Reels, and client stories. During your trial consultation, we can show you specific looks similar to what you\'re envisioning.',
  },
  {
    question: 'What should I bring to my trial?',
    answer: 'Bring pictures of makeup looks you like, your wedding outfit (or a similar color), any jewelry or accessories you plan to wear, and hair inspiration photos if you\'re booking hairstyling. Come with a clean, moisturized face and your hair washed (for hairstyling trials). If you have favorite products or specific items you want to use, bring those too.',
  },
  {
    question: 'Do you do makeup for bridesmaids and family?',
    answer: 'Yes! We offer party makeup packages for bridesmaids, mother of the bride/groom, and family members. Pricing starts at ₹3,500 per person for basic party makeup. For groups of 5+, we offer a 15% discount. We can coordinate multiple artists to ensure everyone is ready on time.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 30+ days before the event receive a full refund. Cancellations 15-30 days before receive a 50% refund. Cancellations less than 15 days before the event are non-refundable. However, we do allow one free reschedule if you need to change your wedding date. We understand plans change, so please communicate with us as early as possible.',
  },
  {
    question: 'What products do you use?',
    answer: 'We use premium, professional-grade products from brands like MAC, Huda Beauty, Estée Lauder, NARS, Urban Decay, Bobbi Brown, Anastasia Beverly Hills, and Charlotte Tilbury. All products are within expiry dates, and we use fresh, sanitized tools for each client. We also stock hypoallergenic and vegan options for clients with specific needs.',
  },
  {
    question: 'How do I prepare my skin before the wedding?',
    answer: 'Start a skincare routine 30 days before: cleanse, moisturize, and use sunscreen daily. Stay hydrated, get enough sleep, and avoid trying new products 2 weeks before the wedding. Get a facial 1 week prior (not sooner). On the wedding day, come with clean, moisturized skin—no heavy creams or oils. Exfoliate gently 2-3 days before. We also provide a detailed bridal skin prep guide after booking.',
  },
  {
    question: 'Can I request a specific makeup style?',
    answer: 'Absolutely! Whether you want natural/minimal, soft glam, traditional Indian bridal, or bold glamorous makeup, we customize every look to your preferences. Bring inspiration photos to your trial, and we\'ll work together to create a style that suits your face, outfit, and personality. We\'re skilled in all techniques and styles.',
  },
  {
    question: 'Do you provide hair accessories?',
    answer: 'Our Gold and Premium bridal packages include basic hair accessories like pins, flowers, and small decorative pieces. If you have specific jewelry or accessories (maang tikka, hair chains, fresh flowers), please bring them, and we\'ll style them into your hair. For elaborate floral arrangements, we can coordinate with a florist (additional charges apply).',
  },
];

const faqSchemaData = faqs.map(faq => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function FAQPage() {
  return (
    <>
      <JsonLD data={createFAQSchema(faqSchemaData)} />
      
      <Hero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about booking bridal makeup at Harmony Salon"
      />

      {/* Main FAQ Section */}
      <section className="py-20 bg-white">
        <Container size="md">
          <FAQAccordion faqs={faqs} />
        </Container>
      </section>

      {/* Bridal Skin Prep Guide */}
      <section className="py-20 bg-blush/10">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              30-Day Bridal Skin Prep Guide
            </h2>
            <p className="text-lg text-charcoal/70">
              Follow this timeline for glowing, camera-ready skin
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-gold mb-2">30 Days Before</h3>
              <ul className="space-y-2 text-charcoal/70">
                <li>• Start daily skincare routine (cleanse, tone, moisturize, SPF)</li>
                <li>• Drink 8+ glasses of water daily</li>
                <li>• Begin taking vitamins (consult your doctor)</li>
                <li>• Visit a dermatologist for skin concerns</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-gold mb-2">2 Weeks Before</h3>
              <ul className="space-y-2 text-charcoal/70">
                <li>• Stop trying new products (risk of reactions)</li>
                <li>• Get plenty of sleep (7-8 hours)</li>
                <li>• Avoid excessive sun exposure</li>
                <li>• Continue hydration and healthy eating</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-gold mb-2">1 Week Before</h3>
              <ul className="space-y-2 text-charcoal/70">
                <li>• Get a professional facial (not closer than 5 days before)</li>
                <li>• Do your makeup trial if you haven\'t already</li>
                <li>• Avoid waxing/threading 2-3 days before the wedding</li>
                <li>• Use a gentle exfoliator 2-3 times</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-gold mb-2">Wedding Day</h3>
              <ul className="space-y-2 text-charcoal/70">
                <li>• Cleanse and moisturize (light, non-oily products)</li>
                <li>• No heavy creams before makeup</li>
                <li>• Come with clean, dry hair (if getting hairstyling)</li>
                <li>• Relax and trust the process!</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* What to Bring */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              What to Bring to Your Trial
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blush/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">👗</div>
              <h3 className="font-bold text-charcoal mb-2">Your Outfit</h3>
              <p className="text-sm text-charcoal/70">
                Wedding outfit or similar color to see the complete look
              </p>
            </div>

            <div className="bg-nude/30 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">📸</div>
              <h3 className="font-bold text-charcoal mb-2">Inspiration Photos</h3>
              <p className="text-sm text-charcoal/70">
                Screenshots of makeup/hair looks you love
              </p>
            </div>

            <div className="bg-blush/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">💍</div>
              <h3 className="font-bold text-charcoal mb-2">Accessories</h3>
              <p className="text-sm text-charcoal/70">
                Jewelry, hair pieces, or accessories you\'ll wear
              </p>
            </div>

            <div className="bg-nude/30 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">💄</div>
              <h3 className="font-bold text-charcoal mb-2">Favorite Products</h3>
              <p className="text-sm text-charcoal/70">
                Any specific products you want incorporated
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-br from-gold to-gold/90 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We\'re here to help! Reach out via WhatsApp or fill out our contact form
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="https://wa.me/919876543210" 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-gold"
            >
              WhatsApp Us
            </Button>
            <Button 
              href="/contact" 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-gold"
            >
              Contact Form
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}


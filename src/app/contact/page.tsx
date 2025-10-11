import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import ContactForm from '@/components/ContactForm';
import { FaPhone, FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact Us — Book Your Bridal Makeup Trial | Harmony Salon',
  description: 'Contact Harmony Salon for bridal makeup booking in Ahmedabad. Call, WhatsApp, or fill our form. Located in Bopal, near TRP Mall.',
  keywords: 'contact bridal makeup artist, book makeup appointment Ahmedabad, Bopal beauty salon',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get in Touch"
        subtitle="Ready to book your trial? We're just a message away"
      />

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-charcoal/70 mb-8">
                Reach out via phone, WhatsApp, or the form. We typically respond within a few hours 
                during business hours.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <FaPhone className="text-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">Call Us</h3>
                    <a 
                      href="tel:+919638437565" 
                      className="text-charcoal/70 hover:text-gold transition-colors"
                    >
                      +91 96384 37565
                    </a>
                    <p className="text-sm text-charcoal/50">Sunday to Saturday: 10:00 AM – 8:00 PM</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                    <FaWhatsapp className="text-[#25D366] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/919638437565?text=Hi%2C%20I%27d%20like%20to%20book%20a%20trial%20at%20Harmony%20Salon" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal/70 hover:text-[#25D366] transition-colors"
                    >
                      +91 96384 37565
                    </a>
                    <p className="text-sm text-charcoal/50">Quick responses & booking confirmations</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center">
                    <FaInstagram className="text-pink-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">Instagram</h3>
                    <a 
                      href="https://instagram.com/makeoverby_harmony" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal/70 hover:text-pink-500 transition-colors"
                    >
                      @makeoverby_harmony
                    </a>
                    <p className="text-sm text-charcoal/50">DM us for quick questions</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">Visit Us</h3>
                    <p className="text-charcoal/70">
                      F-403, Silver Spring, Rajyash City,<br />
                      near TRP Mall, Ambli – Bopal Road,<br />
                      Bopal, Ahmedabad, Gujarat 380058
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <FaClock className="text-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">Business Hours</h3>
                    <p className="text-charcoal/70">
                      Sunday to Saturday: 10:00 AM – 8:00 PM<br />
                      <span className="text-sm text-charcoal/50">By appointment only</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="mt-8 bg-blush/20 rounded-2xl p-6">
                <h3 className="font-bold text-charcoal mb-3">Service Area</h3>
                <p className="text-charcoal/70 mb-2">
                  We provide on-site bridal makeup services across:
                </p>
                <ul className="space-y-1 text-sm text-charcoal/70">
                  <li>• Bopal, Ambli, Shilaj</li>
                  <li>• Prahlad Nagar, Bodakdev</li>
                  <li>• Satellite, Thaltej</li>
                  <li>• S.G. Highway area</li>
                  <li>• And other areas in Ahmedabad (travel charges apply)</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-blush/30 to-nude/30 rounded-3xl p-8 md:p-10">
                <h2 className="text-3xl font-bold text-charcoal mb-2">
                  Book Your Trial
                </h2>
                <p className="text-charcoal/70 mb-6">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-blush/10">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Find Us on the Map
            </h2>
            <p className="text-lg text-charcoal/70">
              Located in Bopal, easily accessible from all parts of Ahmedabad
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.802735544076!2d72.4688485!3d23.0310141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85660ed3e34d%3A0xf18d8e77aaf54220!2sHarmony%20Salon%20%7C%20Best%20Bridal%20Makeup%20Artist%20In%20Ahmedabad!5e0!3m2!1sen!2sca!4v1760153228680!5m2!1sen!2sca"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Harmony Salon Location - F-403, Silver Spring, Bopal, Ahmedabad"
            />
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/maps/dir//Harmony+Salon+Best+Bridal+Makeup+Artist+In+Ahmedabad/@23.0310141,72.4688485"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gold text-white rounded-full hover:bg-gold/90 transition-all duration-300 shadow-md"
            >
              <FaMapMarkerAlt className="mr-2" />
              Get Directions
            </a>
          </div>
        </Container>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Prefer a Quick Chat?
            </h2>
            <p className="text-lg text-charcoal/70">
              For immediate assistance, reach out via WhatsApp or call us directly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="https://wa.me/919638437565"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
            >
              <FaWhatsapp className="text-5xl mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-2">WhatsApp Us</h3>
              <p className="text-white/90 text-sm">Instant responses</p>
            </a>

            <a
              href="tel:+919638437565"
              className="bg-gold text-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
            >
              <FaPhone className="text-5xl mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-2">Call Now</h3>
              <p className="text-white/90 text-sm">+91 96384 37565</p>
            </a>

            <a
              href="https://instagram.com/makeoverby_harmony"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
            >
              <FaInstagram className="text-5xl mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-2">Instagram DM</h3>
              <p className="text-white/90 text-sm">@makeoverby_harmony</p>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}


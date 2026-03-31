import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import { FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="Harmony Salon Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <h3 className="text-xl font-bold font-heading">Harmony Salon</h3>
            </div>
            <p className="text-white/80 mb-4 text-sm">
              Natural, long-lasting bridal makeup with premium products and hygienic processes. 
              Making Ahmedabad brides camera-ready.
            </p>
            <a
              href="https://instagram.com/harmony__salon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gold hover:text-gold/80 transition-colors"
            >
              <FaInstagram size={20} />
              <span>@harmony__salon</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/bridal" className="text-white/80 hover:text-gold transition-colors">
                  Bridal Makeup
                </Link>
              </li>
              <li>
                <Link href="/hair-nails" className="text-white/80 hover:text-gold transition-colors">
                  Hair & Nails
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/80 hover:text-gold transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/prices" className="text-white/80 hover:text-gold transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-gold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Bridal Makeup</li>
              <li>Engagement Makeup</li>
              <li>Party Makeup</li>
              <li>Hairstyling</li>
              <li>Nail Art</li>
              <li>HD & Airbrush Makeup</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-gold" />
                <a
                  href="https://www.google.com/maps/dir//Harmony+Salon+Best+Bridal+Makeup+Artist+In+Ahmedabad/@23.0310141,72.4688485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-gold transition-colors cursor-pointer"
                >
                  F-403, Silver Spring, Rajyash City, near TRP Mall, Ambli – Bopal Road, Bopal, Ahmedabad, Gujarat 380058
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaClock className="flex-shrink-0 text-gold" />
                <span className="text-white/80">Sunday to Saturday: 10:00 AM – 8:00 PM</span>
              </li>
              <li>
                <a
                  href="tel:+919638437565"
                  className="flex items-center space-x-2 text-white/80 hover:text-gold transition-colors"
                >
                  <FaPhone className="flex-shrink-0 text-gold" />
                  <span>+91 96384 37565</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919638437565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/80 hover:text-gold transition-colors"
                >
                  <FaWhatsapp className="flex-shrink-0 text-gold" />
                  <span>WhatsApp Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-white/60 text-center">
            <p>&copy; {new Date().getFullYear()} Harmony Salon. All rights reserved.</p>
            <span className="hidden sm:inline text-white/30 select-none" aria-hidden>
              |
            </span>
            <Link
              href="/terms"
              className="text-white/70 hover:text-gold transition-colors underline-offset-2 hover:underline shrink-0"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}


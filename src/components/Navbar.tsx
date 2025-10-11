'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Container from './Container';
import Button from './Button';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/bridal', label: 'Bridal' },
  { href: '/hair-nails', label: 'Hair & Nails' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/prices', label: 'Prices' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Harmony Salon Logo"
                width={50}
                height={50}
                className="object-contain"
                priority
              />
              <span className="text-xl md:text-2xl font-bold text-charcoal font-heading">
                Harmony Salon
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    pathname === link.href ? 'text-gold' : 'text-charcoal'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button href="/contact" size="sm">
                Book a Trial
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-charcoal p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-[73px] left-0 right-0 bg-white shadow-lg">
            <div className="py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-6 py-3 text-base font-medium transition-colors hover:bg-blush ${
                    pathname === link.href ? 'text-gold bg-blush/50' : 'text-charcoal'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-6 pt-4">
                <Button href="/contact" className="w-full">
                  Book a Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-[73px]" />
    </>
  );
}


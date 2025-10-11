'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919638437565?text=Hi%2C%20I%27d%20like%20to%20book%20a%20trial%20at%20Harmony%20Salon"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={28} />
      <span className="absolute right-full mr-3 bg-charcoal text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with us
      </span>
    </a>
  );
}


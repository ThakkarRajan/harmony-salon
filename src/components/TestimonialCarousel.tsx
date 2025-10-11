'use client';

import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export interface Testimonial {
  name: string;
  service: string;
  rating: number;
  text: string;
  date: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="flex items-center justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-2xl ${
                i < testimonials[current].rating ? 'text-gold' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <p className="text-lg md:text-xl text-charcoal/80 text-center mb-6 italic">
          &ldquo;{testimonials[current].text}&rdquo;
        </p>
        <div className="text-center">
          <p className="font-bold text-charcoal text-lg">{testimonials[current].name}</p>
          <p className="text-sm text-charcoal/60">{testimonials[current].service}</p>
        </div>
      </div>

      {/* Navigation */}
      {testimonials.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gold hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gold hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? 'bg-gold w-8' : 'bg-charcoal/20'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}


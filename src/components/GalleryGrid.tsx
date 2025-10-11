'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  categories: string[];
}

export default function GalleryGrid({ images, categories }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages =
    activeCategory === 'All'
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            activeCategory === 'All'
              ? 'bg-gold text-white shadow-lg'
              : 'bg-white text-charcoal border border-charcoal/20 hover:border-gold'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === category
                ? 'bg-gold text-white shadow-lg'
                : 'bg-white text-charcoal border border-charcoal/20 hover:border-gold'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-medium">{image.alt}</p>
                <p className="text-white/80 text-sm">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12 text-charcoal/60">
          No images found in this category.
        </div>
      )}
    </div>
  );
}


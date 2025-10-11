'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  alt,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div
      className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg cursor-col-resize"
      onMouseMove={handleMove}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt={`${alt} - Before`}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4 bg-charcoal/80 text-white px-3 py-1 rounded-full text-sm">
          Before
        </div>
      </div>

      {/* After Image */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={afterImage}
          alt={`${alt} - After`}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-gold/90 text-white px-3 py-1 rounded-full text-sm">
          After
        </div>
      </div>

      {/* Slider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-4 h-4 border-l-2 border-r-2 border-charcoal" />
        </div>
      </div>
    </div>
  );
}


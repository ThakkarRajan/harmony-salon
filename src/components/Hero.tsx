import React from 'react';
import Container from './Container';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blush via-nude to-white"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(249, 231, 233, 0.9), rgba(245, 239, 234, 0.9)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <Container className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && (
              <Button href={primaryCTA.href} size="lg">
                {primaryCTA.text}
              </Button>
            )}
            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="outline" size="lg">
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}


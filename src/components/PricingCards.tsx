import React from 'react';
import Button from './Button';
import { FaCheck } from 'react-icons/fa';

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

interface PricingCardsProps {
  tiers: PricingTier[];
}

export default function PricingCards({ tiers }: PricingCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tiers.map((tier, index) => (
        <div
          key={index}
          className={`relative rounded-2xl p-8 transition-all duration-300 ${
            tier.featured
              ? 'bg-gradient-to-br from-gold to-gold/90 text-white shadow-xl scale-105'
              : 'bg-white shadow-lg hover:shadow-xl'
          }`}
        >
          {tier.featured && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-charcoal text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
          )}

          <h3 className={`text-2xl font-bold mb-2 font-heading ${tier.featured ? 'text-white' : 'text-charcoal'}`}>
            {tier.name}
          </h3>
          <p className={`text-sm mb-4 ${tier.featured ? 'text-white/90' : 'text-charcoal/60'}`}>
            {tier.description}
          </p>

          <div className="mb-6">
            <span className={`text-4xl font-bold ${tier.featured ? 'text-white' : 'text-charcoal'}`}>
              {tier.price}
            </span>
          </div>

          <ul className="space-y-3 mb-8">
            {tier.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start space-x-3">
                <FaCheck className={`mt-1 flex-shrink-0 ${tier.featured ? 'text-white' : 'text-gold'}`} />
                <span className={tier.featured ? 'text-white/90' : 'text-charcoal/80'}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <Button
            href="/contact"
            variant={tier.featured ? 'outline' : 'primary'}
            className={`w-full ${tier.featured ? 'border-white text-white hover:bg-white hover:text-gold' : ''}`}
          >
            Book Now
          </Button>
        </div>
      ))}
    </div>
  );
}


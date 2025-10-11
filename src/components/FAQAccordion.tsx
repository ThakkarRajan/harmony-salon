'use client';

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-blush/30 transition-colors"
          >
            <span className="font-semibold text-charcoal pr-4">{faq.question}</span>
            <FaChevronDown
              className={`flex-shrink-0 text-gold transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6 text-charcoal/80 leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


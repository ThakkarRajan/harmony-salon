'use client';

import React, { useRef, useState } from 'react';
import Button from './Button';

const WHATSAPP_E164 =
  (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919638437565').replace(/\D/g, '');

function buildTrialBookingMessage(data: TrialBookingFields): string {
  const lines = [
    'Hi Harmony Salon!',
    '',
    "I'd like to book a trial. Details:",
    '',
    `Name: ${data.name}`,
    `My WhatsApp: ${data.whatsapp}`,
    `Event date: ${data.date || 'Not specified'}`,
    `Venue: ${data.venue || 'Not specified'}`,
    `Service: ${data.services || 'Not specified'}`,
  ];
  if (data.message.trim()) {
    lines.push('', `Message: ${data.message.trim()}`);
  }
  return lines.join('\n');
}

function openWhatsAppWithTrialDetails(data: TrialBookingFields): void {
  const text = encodeURIComponent(buildTrialBookingMessage(data));
  window.open(
    `https://wa.me/${WHATSAPP_E164}?text=${text}`,
    '_blank',
    'noopener,noreferrer'
  );
}

interface TrialBookingFields {
  name: string;
  whatsapp: string;
  date: string;
  venue: string;
  services: string;
  message: string;
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<TrialBookingFields>({
    name: '',
    whatsapp: '',
    date: '',
    venue: '',
    services: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendViaWhatsApp = () => {
    if (!formRef.current?.reportValidity()) return;
    openWhatsAppWithTrialDetails(formData);
  };

  return (
    <form
      ref={formRef}
      onSubmit={(e) => e.preventDefault()}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-charcoal mb-2">
            WhatsApp Number *
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            required
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
            placeholder="+91-"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-charcoal mb-2">
            Event Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="venue" className="block text-sm font-medium text-charcoal mb-2">
            Venue
          </label>
          <input
            type="text"
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
            placeholder="Event location"
          />
        </div>
      </div>

      <div>
        <label htmlFor="services" className="block text-sm font-medium text-charcoal mb-2">
          Services Interested In
        </label>
        <select
          id="services"
          name="services"
          value={formData.services}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
        >
          <option value="">Select a service</option>
          <option value="Bridal Makeup">Bridal Makeup</option>
          <option value="Engagement Makeup">Engagement Makeup</option>
          <option value="Party Makeup">Party Makeup</option>
          <option value="Hair Styling">Hair Styling</option>
          <option value="Nail Art">Nail Art</option>
          <option value="Full Package">Full Package</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
        <Button
          type="button"
          variant="primary"
          onClick={handleSendViaWhatsApp}
          className="w-full sm:w-auto"
          size="lg"
        >
          Send via WhatsApp
        </Button>
      </div>
      <p className="text-sm text-charcoal/60">
        Opens WhatsApp on your phone or desktop with this message ready to send.
      </p>
    </form>
  );
}

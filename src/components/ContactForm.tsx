'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button';

interface FormData {
  name: string;
  whatsapp: string;
  date: string;
  venue: string;
  services: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    whatsapp: '',
    date: '',
    venue: '',
    services: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // EmailJS Configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_simqch2';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_wcvbfmg';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'N6ozcGGLHW_J-9dw6';

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_whatsapp: formData.whatsapp,
          event_date: formData.date || 'Not specified',
          venue: formData.venue || 'Not specified',
          service: formData.services || 'Not specified',
          message: formData.message || 'No additional message',
          reply_to: formData.whatsapp,
        },
        publicKey
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData({
          name: '',
          whatsapp: '',
          date: '',
          venue: '',
          services: '',
          message: '',
        });
        
        // Optional: Also open WhatsApp for instant confirmation
        setTimeout(() => {
          window.open(
            `https://wa.me/919638437565?text=Hi%20Harmony%20Salon!%0A%0AI%20just%20submitted%20a%20booking%20form.%0A%0AName:%20${formData.name}%0AService:%20${formData.services}%0A%0APlease%20confirm%20my%20trial%20booking.`,
            '_blank'
          );
        }, 1000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form. Please try WhatsApp instead.');
      console.error('EmailJS Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4">
          Thank you! We&apos;ll get back to you shortly via WhatsApp.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto"
        size="lg"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}


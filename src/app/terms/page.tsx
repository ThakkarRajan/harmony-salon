import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and conditions for using the Harmony Salon website and services, including liability limitations and disclaimers.',
  alternates: { canonical: 'https://harmonysalon.biz/terms' },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-charcoal font-heading mb-4">{title}</h2>
      <div className="text-lg text-charcoal/70 leading-relaxed space-y-4">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <Hero
        title="Terms & Conditions"
        subtitle="Please read the following terms that apply to your use of this website and our services"
      />

      <section className="py-16 md:py-20 bg-white">
        <Container size="md">
          <p className="text-sm text-charcoal/60 mb-10 pb-6 border-b border-charcoal/10">
            By accessing this website or using our services, you agree to these terms. Harmony
            Harmony Salon operates in Ahmedabad, Gujarat, India. These terms are for general use;
            consider having them reviewed by a lawyer for your situation. If you do not agree, please
            do not use the site or our services.
          </p>

          <div className="space-y-12">
            <Section title="Acceptance of terms">
              <p>
                Your use of harmonysalon.biz and related pages, contact forms, WhatsApp or phone
                enquiries, and any booking or service at our studio or on location is subject to
                these Terms & Conditions and to applicable law in India.
              </p>
            </Section>

            <Section title="Website imagery and content">
              <p>
                Images shown on this website may not be true or accurate representations of work
                performed at Harmony Salon. Some or all images may have been collected from the
                internet and are used for illustrative or reference purposes only. They should not
                be taken as a guarantee of a specific result or as photographs of our own clients
                unless clearly stated otherwise.
              </p>
              <p>
                Text, prices, package names, and descriptions on this site are for general
                information. We may change prices, packages, availability, and site content at any
                time without notice. Final terms are confirmed when you book or receive a written
                quote.
              </p>
            </Section>

            <Section title="No guarantee of results">
              <p>
                Beauty, makeup, hair, and nail services depend on individual factors (skin, hair,
                products, allergies, lighting, photography, and aftercare). We do not guarantee any
                specific cosmetic or photographic outcome. Patch tests, trials, and clear
                disclosure of allergies or sensitivities are your responsibility where we request
                them.
              </p>
            </Section>

            <Section title="Bookings, cancellations, and conduct">
              <p>
                Appointments and quotes are subject to availability. Cancellation, rescheduling,
                deposits, and no-show policies communicated at booking (including via WhatsApp,
                phone, or in person) form part of your agreement with us.
              </p>
              <p>
                You agree to treat our staff and premises respectfully. We may refuse service or
                ask you to leave if behaviour is abusive, unsafe, or violates hygiene or studio
                rules.
              </p>
            </Section>

            <Section title="Health, allergies, and consent">
              <p>
                You are responsible for informing us of medical conditions, allergies, pregnancy,
                or sensitivities relevant to services. Services are performed only with your
                informed consent. If you are unsure whether a service is suitable, consult a
                medical professional before booking.
              </p>
            </Section>

            <Section title="Limitation of liability">
              <p>
                To the fullest extent permitted by applicable law in India, Harmony Salon and its
                owners, staff, and representatives shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, or for loss of profits,
                data, goodwill, or similar losses arising from your use of this website or our
                services.
              </p>
              <p>
                Our total aggregate liability for any claim arising out of or related to services
                we provide shall not exceed the amount you paid us for those specific services in
                the transaction giving rise to the claim, except where the law does not allow such
                a limitation.
              </p>
              <p>
                We are not responsible for delays or failures due to events outside our reasonable
                control (including weather, transport, venue access, power, internet, or government
                action).
              </p>
            </Section>

            <Section title="Disclaimer of warranties">
              <p>
                This website and our services are provided on an “as is” and “as available” basis.
                To the fullest extent permitted by law, we disclaim all
                warranties, express or implied, including implied warranties of merchantability,
                fitness for a particular purpose, and non-infringement, except any that cannot be
                excluded under Indian law.
              </p>
            </Section>

            <Section title="Indemnity">
              <p>
                You agree to indemnify and hold harmless Harmony Salon and its owners, staff, and
                representatives from claims, damages, losses, or expenses (including reasonable
                legal costs) arising from your misuse of the website, breach of these terms, or
                your violation of any law or third-party rights, to the extent permitted by law.
              </p>
            </Section>

            <Section title="Third-party links and platforms">
              <p>
                Links to Instagram, Google Maps, WhatsApp, or other sites are for convenience. We do
                not control third-party sites or messaging platforms and are not responsible for
                their content, privacy practices, or availability.
              </p>
            </Section>

            <Section title="Intellectual property">
              <p>
                All content on this website (text, branding, layout, and original images where
                applicable) is owned by Harmony Salon or its licensors unless stated otherwise.
                You may not copy, scrape, or reuse site content for commercial purposes without our
                written permission.
              </p>
            </Section>

            <Section title="Privacy and communications">
              <p>
                Information you submit through forms, WhatsApp, or phone may be used to respond to
                enquiries and manage bookings. Do not send confidential or sensitive information you
                are not comfortable sharing for that purpose.
              </p>
            </Section>

            <Section title="Governing law and jurisdiction">
              <p>
                These terms are governed by the laws of India. Subject to mandatory consumer or
                other protections that may apply, you agree that courts located in Ahmedabad,
                Gujarat, shall have exclusive jurisdiction over disputes arising from these terms or
                your use of the website or services, where such agreement is permitted by law.
              </p>
            </Section>

            <Section title="Changes">
              <p>
                We may update these Terms & Conditions from time to time. The version on this
                page is the current one. Continued use of the website after changes constitutes
                your acceptance of the updated terms, to the extent permitted by law.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                For questions about these terms, contact us using the details on our{' '}
                <a href="/contact" className="text-gold hover:text-charcoal underline underline-offset-2">
                  Contact
                </a>{' '}
                page or the phone and WhatsApp number shown in the site footer.
              </p>
            </Section>
          </div>
        </Container>
      </section>
    </>
  );
}

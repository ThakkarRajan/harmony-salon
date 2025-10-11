import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Harmony Salon | Best Bridal Makeup Artist in Ahmedabad",
  description: "Best bridal makeup artist in Ahmedabad. Specializing in HD makeup, airbrush techniques, hairstyling, nail art, and pre-wedding grooming. Perfect for weddings, engagement, mehndi, sangeet, cocktail, and reception. Book your trial now!",
  keywords: "bridal makeup Ahmedabad, best makeup artist Ahmedabad, makeup artist Bopal, HD makeup, airbrush makeup, engagement makeup, party makeup, hairstyling, nail art, beauty salon Ahmedabad, bridal studio, wedding makeup",
  authors: [{ name: "Harmony Salon" }],
  openGraph: {
    title: "Harmony Salon | Best Bridal Makeup Artist in Ahmedabad",
    description: "Best bridal makeup artist specializing in HD & airbrush makeup for weddings in Ahmedabad",
    type: "website",
    locale: "en_IN",
    siteName: "Harmony Salon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

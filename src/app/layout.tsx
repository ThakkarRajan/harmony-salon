import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL('https://harmonysalon.com'),
  title: {
    default: "Harmony Salon | Best Bridal Makeup Artist in Ahmedabad - 4.9★ Rated",
    template: "%s | Harmony Salon Ahmedabad"
  },
  description: "⭐ 4.9/5 Rating | 500+ Happy Clients | Best bridal makeup artist in Ahmedabad. Specializing in HD makeup, airbrush techniques, hairstyling, nail art. Premium products, hygienic process, on-site service. Book your trial at Bopal, Ahmedabad. Available for weddings, engagement, mehndi, sangeet, cocktail & reception.",
  keywords: [
    "bridal makeup artist Ahmedabad",
    "best makeup artist Ahmedabad",
    "makeup artist Bopal",
    "HD makeup Ahmedabad",
    "airbrush makeup",
    "bridal makeup near me",
    "wedding makeup artist",
    "engagement makeup",
    "party makeup Ahmedabad",
    "professional makeup artist",
    "hairstyling Ahmedabad",
    "nail art Bopal",
    "beauty salon Ahmedabad",
    "bridal studio Bopal",
    "makeup artist Shreya",
    "on-site makeup artist",
    "home service makeup",
    "bridal package Ahmedabad",
    "sangeet makeup",
    "mehndi makeup",
    "reception makeup",
    "pre-wedding grooming",
    "makeup classes Ahmedabad",
    "nail art classes",
    "TRP Mall beauty salon",
    "Rajyash City salon",
    "Ambli Bopal makeup",
  ],
  authors: [{ name: "Harmony Salon", url: "https://harmonysalon.com" }],
  creator: "Harmony Salon",
  publisher: "Harmony Salon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/logo.png",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://harmonysalon.com",
    siteName: "Harmony Salon",
    title: "Harmony Salon | Best Bridal Makeup Artist in Ahmedabad - 4.9★ Rated",
    description: "⭐ 4.9/5 Rating with 500+ Happy Clients. Premier bridal makeup artist in Ahmedabad offering HD & airbrush makeup, hairstyling, nail art. Book your trial today!",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Harmony Salon - Best Bridal Makeup Artist in Ahmedabad",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmony Salon | Best Bridal Makeup Artist in Ahmedabad",
    description: "⭐ 4.9/5 Rating | 500+ Happy Clients | Premium bridal makeup services in Ahmedabad. Book your trial!",
    images: ["/logo.png"],
    creator: "@makeoverby_harmony",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://harmonysalon.com",
  },
  category: "Beauty & Personal Care",
  classification: "Beauty Salon, Bridal Makeup, Wedding Services",
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

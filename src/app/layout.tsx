import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL('https://harmonysalon.biz/'),
  verification: {
    google: 'eDwFE8E5W6fPeZ6xhv-DQ6wt3_mcVGpxBsD97Qnod_g',
  },
  title: {
    default:
      "Harmony Salon Ahmedabad | Bridal Package Prices & HD Makeup",
    template: "%s | Harmony Salon Ahmedabad",
  },
  description:
    "Studio bridal package price list: Marriage Day from ₹15,000, bride-side from ₹7,000, siders from ₹2,500. HD party & engagement makeup, 3D bridal makeup, hairstyling. Makeup artist in Bopal (near TRP Mall) — 4.9★, trial included. On-site Ahmedabad.",
  keywords: [
    // Primary Bridal Keywords
    "bridal makeup artist Ahmedabad",
    "best bridal makeup artist Ahmedabad",
    "top bridal makeup artist Ahmedabad",
    "professional bridal makeup Ahmedabad",
    "bridal makeup artist near me",
    "bridal makeup near me Ahmedabad",
    
    // Location-Specific
    "makeup artist Bopal",
    "bridal makeup Bopal Ahmedabad",
    "makeup artist near TRP Mall",
    "beauty salon Rajyash City",
    "makeup artist Ambli Bopal Road",
    "bridal makeup Shilaj",
    "makeup artist Prahlad Nagar",
    "bridal makeup Bodakdev",
    "makeup artist Satellite Ahmedabad",
    "bridal makeup Thaltej",
    "makeup artist SG Highway",
    "bridal makeup Vastrapur",
    
    // Service-Specific
    "HD makeup artist Ahmedabad",
    "airbrush makeup Ahmedabad",
    "HD bridal makeup",
    "airbrush bridal makeup",
    "professional makeup artist",
    "celebrity makeup artist Ahmedabad",
    "luxury bridal makeup",
    "premium makeup artist",
    
    // Wedding Event Types
    "wedding makeup artist Ahmedabad",
    "engagement makeup artist Ahmedabad",
    "sangeet makeup artist",
    "mehndi makeup artist",
    "reception makeup artist",
    "cocktail party makeup",
    "pre-wedding makeup",
    "roka ceremony makeup",
    "haldi makeup artist",
    
    // Hair Services
    "bridal hairstylist Ahmedabad",
    "hairstyling Ahmedabad",
    "hair styling for wedding",
    "bridal hair and makeup",
    "hair color Ahmedabad",
    "hair spa Bopal",
    "bridal bun hairstyle",
    
    // Nail Services
    "nail art Ahmedabad",
    "nail art Bopal",
    "bridal nail art",
    "nail extensions Ahmedabad",
    "manicure pedicure Ahmedabad",
    
    // Service Features
    "on-site bridal makeup",
    "home service makeup artist",
    "makeup artist at home",
    "door to door makeup service",
    "venue makeup artist",
    "hotel makeup service",
    
    // Price-Related
    "affordable bridal makeup Ahmedabad",
    "bridal makeup price Ahmedabad",
    "bridal package price list",
    "hd party makeup price",
    "hd makeup price",
    "makeup artist fees",
    "bridal makeup cost",
    "engagement makeup price",
    "harmony salon ahmedabad",
    "harmony salon near me",
    "best price makeup artist",
    "budget bridal makeup",
    "bridal makeup packages Ahmedabad",
    
    // Quality Indicators
    "top rated makeup artist Ahmedabad",
    "best reviewed makeup artist",
    "5 star makeup artist",
    "award winning makeup artist",
    "certified makeup artist Ahmedabad",
    
    // Training & Classes
    "makeup classes Ahmedabad",
    "nail art classes",
    "bridal makeup course",
    "professional makeup training",
    
    // Artist Name
    "makeup artist Shreya Ahmedabad",
    "Shreya bridal makeup",
    "Harmony Salon Shreya",
    "Monu hairstylist Ahmedabad",
    
    // Competitor Comparisons
    "best makeup artist in Ahmedabad",
    "top 10 makeup artists Ahmedabad",
    "famous makeup artist Ahmedabad",
    "trending makeup artist",
    
    // Customer Intent
    "book bridal makeup trial",
    "bridal makeup trial near me",
    "hire makeup artist for wedding",
    "find bridal makeup artist",
    "contact makeup artist Ahmedabad",
    
    // Long-Tail Keywords
    "who is the best bridal makeup artist in Ahmedabad",
    "where to find good makeup artist in Bopal",
    "how much does bridal makeup cost in Ahmedabad",
    "best salon for bridal makeup near me",
    "makeup artist with good reviews Ahmedabad",
    
    // Problem-Solving
    "long lasting bridal makeup",
    "waterproof makeup artist",
    "sweat proof makeup",
    "all day makeup artist",
    "no touch up makeup",
    
    // Seasonal
    "summer wedding makeup Ahmedabad",
    "monsoon bridal makeup",
    "winter wedding makeup",
    
    // Trending
    "Instagram makeup artist Ahmedabad",
    "viral makeup artist",
    "trending bridal looks",
    "2024 bridal makeup",
    "2025 bridal makeup trends",
  ],
  authors: [{ name: "Harmony Salon", url: "https://harmonysalon.biz" }],
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
    url: "https://harmonysalon.biz",
    siteName: "Harmony Salon",
    title: "Harmony Salon Ahmedabad | Bridal Packages & HD Makeup Prices",
    description:
      "Bridal package prices from ₹7k–₹15k (studio), HD party makeup, engagement & siders packages. 4.9★ makeup artist Bopal, Ahmedabad — book trial.",
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
    title: "Harmony Salon Ahmedabad | Bridal Makeup Price List & Packages",
    description:
      "Bridal & HD party makeup prices, packages & trial at Harmony Salon Bopal, Ahmedabad. WhatsApp to book.",
    images: ["/logo.png"],
    creator: "@harmony__salon",
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

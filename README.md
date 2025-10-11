# Harmony Salon — Bridal Makeup & Beauty Salon Website

A modern, fast, mobile-first website for Harmony Salon, a premier bridal makeup and beauty salon in Ahmedabad, India.

## 🌟 Features

- **Modern Design**: Clean, high-end aesthetic with soft color palette (blush, nude, charcoal, gold)
- **Mobile-First**: Fully responsive design optimized for all devices
- **SEO Optimized**: Structured data (JSON-LD), meta tags, sitemap, and robots.txt
- **Performance**: Optimized images, lazy loading, fast page loads
- **Complete Pages**:
  - Home with hero, stats, services, portfolio preview
  - Bridal Makeup packages and pricing
  - Hair & Nails services
  - Portfolio gallery with filters
  - Transparent pricing page
  - About us with artist bio
  - Customer reviews and testimonials
  - FAQ section
  - Contact form with map
  - Blog with 3 starter posts

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd harmony-salon
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your configuration:
- Contact phone numbers
- WhatsApp number
- Email addresses
- Site URL
- Social media links

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
harmony-salon/
├── src/
│   ├── app/                    # Next.js 15 App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── bridal/            # Bridal makeup page
│   │   ├── hair-nails/        # Hair & nails services
│   │   ├── portfolio/         # Portfolio gallery
│   │   ├── prices/            # Pricing page
│   │   ├── about/             # About us
│   │   ├── reviews/           # Customer reviews
│   │   ├── faq/               # FAQ page
│   │   ├── contact/           # Contact form
│   │   ├── blog/              # Blog index & posts
│   │   ├── api/               # API routes
│   │   │   └── contact/       # Contact form API
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   └── components/            # React components
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── ContactForm.tsx
│       └── ... more components
├── public/                    # Static assets
│   └── robots.txt
├── .env.example              # Environment variables template
├── package.json
├── next.config.ts
└── README.md
```

## 🎨 Design System

### Colors
- **Blush**: #F9E7E9
- **Nude**: #F5EFEA
- **Charcoal**: #2E2E2E
- **Gold**: #C9A66B

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## 🔧 Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Validation**: Zod
- **Icons**: React Icons
- **Fonts**: Google Fonts (Playfair Display, Inter)

## 📱 Key Components

- **Navbar**: Sticky navigation with mobile menu
- **Hero**: Full-width hero sections with CTAs
- **StatsRow**: Trust badges and statistics
- **BeforeAfterSlider**: Interactive before/after image slider
- **TestimonialCarousel**: Rotating customer reviews
- **PricingCards**: Service package cards
- **GalleryGrid**: Filterable portfolio gallery
- **FAQAccordion**: Expandable FAQ items
- **ContactForm**: Form with validation and API integration
- **FloatingWhatsApp**: Persistent WhatsApp button

## 🔍 SEO Features

- Structured data (JSON-LD) for:
  - LocalBusiness
  - Product (service packages)
  - FAQPage
  - Review aggregation
- XML sitemap at `/sitemap.xml`
- Robots.txt for search engine crawlers
- Open Graph tags for social sharing
- Optimized meta descriptions
- Semantic HTML structure

## 📞 Contact Configuration

Update these in `.env.local`:
- `CONTACT_PHONE`: Primary phone number
- `WHATSAPP_NUMBER`: WhatsApp business number
- `CONTACT_EMAIL`: Email for inquiries
- `INSTAGRAM_URL`: Instagram profile link

## 🎯 Business Information

**Harmony Salon**  
F-403 Silver Spring, Rajyash City  
Near TRP Mall, Ambli-Bopal Road  
Bopal, Ahmedabad 380058  

**Hours**: Daily 10:00 AM – 8:00 PM  
**Instagram**: @makeoverby_harmony  

## 📝 API Routes

### POST /api/contact
Contact form submission endpoint with Zod validation.

**Request Body**:
```json
{
  "name": "string",
  "whatsapp": "string",
  "date": "string (optional)",
  "venue": "string (optional)",
  "services": "string (optional)",
  "message": "string (optional)"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Thank you for contacting us!"
}
```

## 🚀 Deployment

This project is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Vercel Deployment

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

## 📄 License

Copyright © 2024 Harmony Salon. All rights reserved.

## 🤝 Support

For support or inquiries:
- WhatsApp: +91-98765 43210
- Email: shahshreya933@gmail.com
- Instagram: @makeoverby_harmony

---

Built with ❤️ for brides in Ahmedabad

# Business Information Setup Guide

This guide shows you where to update all business information from your Google My Business profile throughout the Harmony Salon website.

## 📋 Information Needed from Google My Business

Gather the following information from your Google Business Profile:

- [ ] Business name
- [ ] Full address
- [ ] Phone number
- [ ] WhatsApp number (if different)
- [ ] Business hours
- [ ] Business email
- [ ] Instagram handle
- [ ] Business description
- [ ] Service categories
- [ ] Photos (logo, interior, portfolio)
- [ ] Service area/locations served
- [ ] Latitude & Longitude (for map)

## 🔧 Files to Update

### 1. Environment Variables (.env.local)

Create a `.env.local` file (copy from `.env.example`) and update:

```bash
# Contact Information
CONTACT_PHONE=+91XXXXXXXXXX          # Your actual phone
WHATSAPP_NUMBER=91XXXXXXXXXX         # WhatsApp number (no + or -)
CONTACT_EMAIL=your-email@domain.com  # Your email

# Site Configuration
SITE_URL=https://yourwebsite.com     # Your actual domain
SITE_NAME=Harmony Salon — Bridal Makeup & Beauty Salon

# Social Media
INSTAGRAM_URL=https://instagram.com/your_handle

# Business Address
BUSINESS_ADDRESS=Your full address from Google Business
BUSINESS_LATITUDE=XX.XXXX            # Get from Google Maps
BUSINESS_LONGITUDE=XX.XXXX           # Get from Google Maps
```

### 2. Footer Component

**File:** `src/components/Footer.tsx`

Update these sections:
- Business description (lines ~17-21)
- Instagram handle (line 24)
- Address (lines 79-81)
- Phone number (line 90)
- WhatsApp link (line 97)

### 3. Contact Page

**File:** `src/app/contact/page.tsx`

Update:
- Phone number (line 55-60)
- WhatsApp number (line 70-75)
- Instagram handle (line 85-90)
- Full address (line 100-105)
- Business hours (line 115-120)
- Service area list (lines 145-150)
- Google Maps embed (line 170)

### 4. JSON-LD Schema (for SEO)

**File:** `src/components/JsonLD.tsx`

Update the `businessSchema` object (lines 17-50):
- name
- image (upload your logo)
- telephone
- address (all fields)
- geo coordinates
- openingHours
- sameAs (social media links)

### 5. Root Layout (Global Metadata)

**File:** `src/app/layout.tsx`

Update metadata (lines 7-19):
- title
- description
- keywords

### 6. Navbar

**File:** `src/components/Navbar.tsx`

Update business name display (line 23)

### 7. Floating WhatsApp

**File:** `src/components/FloatingWhatsApp.tsx`

Update WhatsApp link (line 9)

### 8. Google Maps Embed

**File:** `src/app/contact/page.tsx`

To get the correct embed URL:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business address
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Replace the URL on line 170 in `src/app/contact/page.tsx`

## 🕐 Business Hours Format

If your hours differ from the current setup (Daily 10:00 AM – 8:00 PM), update in:

1. **Footer** (`src/components/Footer.tsx` line 117)
2. **Contact page** (`src/app/contact/page.tsx` line 118)
3. **JSON-LD Schema** (`src/components/JsonLD.tsx` lines 37-44)

Example for different daily hours:
```javascript
openingHoursSpecification: [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '20:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: 'Sunday',
    opens: '10:00',
    closes: '18:00',
  },
],
```

## 📸 Images to Replace

### Priority Images:
1. **Logo/Business Image** - Add to `public/logo.png` and update schema
2. **Portfolio Photos** - Replace Unsplash URLs in:
   - `src/app/page.tsx` (before/after sliders)
   - `src/app/portfolio/page.tsx` (gallery)
3. **Blog Images** - Update featured images in blog posts
4. **Open Graph Image** - Add `public/og-image.jpg` for social sharing

### Where Images Are Used:
```
src/app/page.tsx (lines 116, 117, 123, 124) - Home before/after
src/app/portfolio/page.tsx (lines 18-46) - Portfolio gallery
src/app/blog/page.tsx (lines 14, 21, 28) - Blog post thumbnails
src/app/blog/[slug]/page.tsx - Individual blog posts
```

## 🔍 SEO Optimization

### Update Business Information in Schema:

1. **LocalBusiness Schema** - `src/components/JsonLD.tsx`
   - Includes your address, hours, phone
   - Used on every page via businessSchema

2. **Product Schema** - Used in pricing pages
   - Update package names if different
   - Update starting prices

3. **Review Schema** - `src/app/reviews/page.tsx`
   - Add real customer reviews
   - Update rating (currently 4.9/5)

## 📱 Social Media Links

Update everywhere Instagram is mentioned:
- Footer
- Contact page
- Reviews page
- Blog posts

Current placeholder: `@makeoverby_harmony`
Update to: `@your_actual_handle`

## 🗺️ Service Area

**File:** `src/app/contact/page.tsx` (lines 145-151)

Update the list of areas you serve based on your Google Business service area.

## ✅ Quick Update Checklist

- [ ] Create `.env.local` with real contact info
- [ ] Update Footer phone/WhatsApp/Instagram
- [ ] Update Contact page details
- [ ] Update JSON-LD schema with real address/hours
- [ ] Update Google Maps embed
- [ ] Replace Unsplash images with your photos
- [ ] Update Instagram handle throughout site
- [ ] Update service area list
- [ ] Update business hours if different
- [ ] Add your logo
- [ ] Update reviews with real customer testimonials
- [ ] Update pricing if different from placeholders
- [ ] Test all WhatsApp links
- [ ] Test contact form
- [ ] Verify map location is correct

## 🚀 After Updates

1. Restart dev server: `npm run dev`
2. Test all contact links (phone, WhatsApp, email)
3. Verify map shows correct location
4. Check all pages for updated information
5. Test contact form submission
6. Review SEO metadata in browser inspector

## 💡 Pro Tips

1. **Get exact coordinates**: Go to Google Maps, right-click your location, copy the coordinates
2. **WhatsApp link format**: Use `https://wa.me/91XXXXXXXXXX` (no spaces, no + sign)
3. **Phone link format**: Use `tel:+91-XXXXX-XXXXX` (with + and hyphens for display)
4. **Test mobile**: WhatsApp links work best on mobile devices

## 🆘 Need Help?

If you need assistance updating any specific section, let me know which file and what information you want to change!


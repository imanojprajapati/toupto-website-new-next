# Toupto Technologies Website

A professional, conversion-focused corporate product website for Toupto Technologies - a product-led technology company offering EAP Solutions (Exhibition, Attendee, and Parking management).

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **SEO Optimized** (Metadata, Structured Data, Sitemap, Robots.txt)
- **Modular Architecture**

## 📁 Project Structure

```
toupto-website/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Product pages
│   │   ├── exhibition/    # Exhibition Management
│   │   ├── attendee/      # Attendee Management
│   │   └── parking/       # Parking Management
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # Robots.txt
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Solutions.tsx
│   │   ├── Features.tsx
│   │   ├── Benefits.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   ├── products/          # Product components
│   │   ├── ProductGrid.tsx
│   │   └── ProductDetail.tsx
│   ├── contact/           # Contact components
│   │   └── ContactForm.tsx
│   └── SEO/               # SEO components
│       └── StructuredData.tsx
└── public/                # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Features

### SEO Optimizations
- ✅ Comprehensive metadata for all pages
- ✅ Open Graph and Twitter Card support
- ✅ Structured data (JSON-LD) for organizations and products
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure

### Conversion-Focused Design
- ✅ Clear call-to-action buttons
- ✅ Hero section with value proposition
- ✅ Social proof (testimonials, stats)
- ✅ Feature highlights
- ✅ Product showcase
- ✅ Contact forms

### Modern UI/UX
- ✅ Responsive design (mobile-first)
- ✅ Smooth animations and transitions
- ✅ Accessible components
- ✅ Professional color scheme
- ✅ Clean, modern aesthetics

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
- Primary colors: Blue palette
- Secondary colors: Purple palette

### Content

Update content in:
- Page components (`app/*/page.tsx`)
- Section components (`components/sections/*.tsx`)
- Layout components (`components/layout/*.tsx`)

### SEO

Update metadata in:
- `app/layout.tsx` (global metadata)
- Individual page files (page-specific metadata)
- `components/SEO/StructuredData.tsx` (structured data)

## 📝 License

This project is proprietary software owned by Toupto Technologies.


# Next.js 14 App Router - Corporate SaaS Website Folder Structure

## Recommended Folder Structure

```
toupto-website/
│
├── app/                          # Next.js 14 App Router directory
│   ├── (marketing)/             # Route group for marketing pages
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── pricing/
│   │       └── page.tsx
│   │
│   ├── (products)/              # Route group for product pages
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   ├── exhibition/
│   │   │   │   └── page.tsx
│   │   │   ├── attendee/
│   │   │   │   └── page.tsx
│   │   │   └── parking/
│   │   │       └── page.tsx
│   │   └── solutions/
│   │       └── page.tsx
│   │
│   ├── (dashboard)/             # Route group for authenticated areas (future)
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── api/                     # API routes
│   │   ├── contact/
│   │   │   └── route.ts
│   │   ├── newsletter/
│   │   │   └── route.ts
│   │   └── cms/
│   │       └── route.ts
│   │
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── sitemap.ts               # Dynamic sitemap
│   ├── robots.ts                # Robots.txt
│   └── metadata.ts              # Shared metadata config
│
├── components/                   # Reusable React components
│   ├── ui/                      # Base UI components (shadcn/ui style)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── modal.tsx
│   │   ├── dropdown.tsx
│   │   └── badge.tsx
│   │
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── MobileMenu.tsx
│   │
│   ├── sections/                # Page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Benefits.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   ├── Stats.tsx
│   │   └── Pricing.tsx
│   │
│   ├── products/                # Product-specific components
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductDetail.tsx
│   │   └── ProductComparison.tsx
│   │
│   ├── forms/                   # Form components
│   │   ├── ContactForm.tsx
│   │   ├── NewsletterForm.tsx
│   │   └── DemoRequestForm.tsx
│   │
│   ├── blog/                    # Blog components
│   │   ├── PostCard.tsx
│   │   ├── PostList.tsx
│   │   └── PostContent.tsx
│   │
│   └── SEO/                     # SEO components
│       ├── StructuredData.tsx
│       └── Metadata.tsx
│
├── lib/                          # Utility functions and helpers
│   ├── utils.ts                 # General utilities
│   ├── api.ts                   # API client functions
│   ├── cms.ts                   # CMS integration (Contentful, Sanity, etc.)
│   ├── validation.ts            # Form validation schemas (Zod)
│   └── constants.ts             # App constants
│
├── hooks/                        # Custom React hooks
│   ├── useMediaQuery.ts
│   ├── useScroll.ts
│   ├── useForm.ts
│   └── useCMS.ts
│
├── types/                        # TypeScript type definitions
│   ├── index.ts                 # Shared types
│   ├── product.ts
│   ├── blog.ts
│   ├── cms.ts
│   └── api.ts
│
├── styles/                       # Additional styles
│   ├── animations.css
│   └── variables.css
│
├── content/                      # Content files (markdown, JSON)
│   ├── blog/
│   │   └── *.md
│   ├── products/
│   │   └── *.json
│   └── translations/            # i18n content
│       ├── en.json
│       └── es.json
│
├── public/                       # Static assets
│   ├── images/
│   │   ├── hero/
│   │   ├── products/
│   │   ├── team/
│   │   └── logos/
│   ├── icons/
│   ├── fonts/
│   ├── og-image.jpg
│   └── favicon.ico
│
├── config/                       # Configuration files
│   ├── site.ts                  # Site configuration
│   ├── cms.config.ts            # CMS configuration
│   └── seo.config.ts            # SEO configuration
│
├── middleware.ts                 # Next.js middleware (auth, redirects, etc.)
│
├── .env.local                   # Environment variables (gitignored)
├── .env.example                 # Example environment variables
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── package.json
└── README.md
```

## Folder Explanations

### `/app`
**Next.js 14 App Router root** - Contains all routes and pages. Uses route groups `(marketing)`, `(products)`, `(dashboard)` to organize routes without affecting URLs.

- **Route Groups** `()`: Organize routes without affecting URL structure
- **API Routes**: Server-side endpoints for forms, CMS integration, etc.
- **Layout files**: Shared layouts for route groups
- **Metadata files**: SEO configuration (sitemap, robots)

### `/components`
**Reusable React components** organized by purpose:
- **`ui/`**: Base UI components (buttons, inputs, cards) - ready for shadcn/ui or custom
- **`layout/`**: Site-wide layout components (header, footer, nav)
- **`sections/`**: Reusable page sections (hero, features, CTA)
- **`products/`**: Product-specific components
- **`forms/`**: Form components with validation
- **`blog/`**: Blog-specific components
- **`SEO/`**: SEO and structured data components

### `/lib`
**Utility functions and business logic**:
- **`utils.ts`**: General helper functions
- **`api.ts`**: API client and fetch utilities
- **`cms.ts`**: CMS integration layer (Contentful, Sanity, Strapi, etc.)
- **`validation.ts`**: Zod schemas for form validation
- **`constants.ts`**: App-wide constants

### `/hooks`
**Custom React hooks** for shared logic:
- Media queries, scroll detection, form handling, CMS data fetching

### `/types`
**TypeScript type definitions** organized by domain for type safety and better DX.

### `/styles`
**Additional CSS files** for animations, custom styles, and CSS variables.

### `/content`
**Content files** for CMS-free setup or static content:
- Markdown blog posts
- JSON product data
- i18n translation files

### `/public`
**Static assets** organized by type:
- Images by category (hero, products, team)
- Icons, fonts, favicons
- OG images for social sharing

### `/config`
**Configuration files** separated from code:
- Site-wide settings
- CMS credentials and settings
- SEO defaults

### Root Files
- **`middleware.ts`**: Next.js middleware for auth, redirects, headers
- **`.env.*`**: Environment variables (local for dev, example for team)
- **Config files**: Next.js, Tailwind, TypeScript configurations

## Benefits of This Structure

✅ **Scalable**: Easy to add new pages, products, or features  
✅ **Maintainable**: Clear separation of concerns  
✅ **SEO-Ready**: Metadata, sitemap, structured data support  
✅ **CMS-Ready**: Integration layer prepared for headless CMS  
✅ **Type-Safe**: Comprehensive TypeScript coverage  
✅ **Reusable**: Component library approach  
✅ **Performance**: Server Components by default, client components when needed  


# Roadmap: Seaduced

## Overview

Build a premium brand website for Seaduced — a sea moss-based intimate lubricant. Starting from a bare Next.js scaffold, we'll establish the brand design system, build a stunning hero/landing experience, fill out content pages (product, about, ingredients, contact), optimize for SEO and performance, then wire up e-commerce and deploy to production.

## Phases

- [ ] **Phase 1: Foundation & Brand System** — Design tokens, typography, layout shell, responsive grid
- [ ] **Phase 2: Hero & Landing** — Hero section with product imagery, brand storytelling, tasteful tone
- [ ] **Phase 3: Content Pages** — Product, About, Ingredients/Science, Contact pages
- [ ] **Phase 4: SEO & Performance** — Meta tags, Open Graph, structured data, Lighthouse 90+
- [ ] **Phase 5: E-Commerce & Launch** — Buy Now flow, domain setup, Vercel production deploy

## Phase Details

### Phase 1: Foundation & Brand System
**Goal**: Establish the visual DNA — color tokens, typography, layout components, and responsive grid that every page will inherit
**Depends on**: Nothing (first phase)
**Requirements**: BRAND-02, BRAND-03, BRAND-04
**Research**: Unlikely — standard Tailwind v4 setup
**Success Criteria** (what must be TRUE):
  1. Brand colors (royal blue, metallic gold, white, ocean teal) are available as Tailwind tokens and used in a visible layout shell
  2. "SEADUCED" heading renders in an elegant serif font; "Naturally Intimate!" renders in cursive script
  3. Layout is responsive — looks correct at 375px (mobile), 768px (tablet), and 1440px (desktop)
  4. A shared layout component (header + footer) wraps all pages with brand navigation
**Plans**: TBD

### Phase 2: Hero & Landing
**Goal**: Build the above-the-fold hero section that makes visitors immediately understand the brand and want to learn more
**Depends on**: Phase 1
**Requirements**: BRAND-01, BRAND-05
**Research**: Unlikely — creative design work
**Success Criteria** (what must be TRUE):
  1. Hero section displays product image/mockup, "Seaduced" brand name, and "Sea Moss Infused Personal Lubricant" tagline
  2. A clear CTA button leads to the product page
  3. Content tone is premium, body-positive, and tasteful — no crude or clinical language
  4. Hero loads fast with optimized imagery (no layout shift, under 2.5s LCP)
**Plans**: TBD

### Phase 3: Content Pages
**Goal**: Build out the four core content pages — product details, brand story, ingredients science, and contact form
**Depends on**: Phase 2
**Requirements**: PAGE-01, PAGE-02, PAGE-03, PAGE-04
**Research**: Likely — sea moss ingredient benefits, competitor product pages
**Success Criteria** (what must be TRUE):
  1. Product page shows ingredients list, key benefits, product size (5 oz / 148 ml), and pricing
  2. About page tells the Seaduced brand story and Gina's vision for natural intimate wellness
  3. Ingredients/Science page explains sea moss properties, pH-balanced formula, and clean/plant-based credentials
  4. Contact page has a working inquiry form that sends submissions (email or webhook)
  5. All pages use consistent brand typography, colors, and layout from Phase 1
**Plans**: TBD

### Phase 4: SEO & Performance
**Goal**: Optimize the site for search engines and ensure fast load times across all pages
**Depends on**: Phase 3
**Requirements**: TECH-01, TECH-03
**Research**: Likely — Product structured data schema, intimate wellness SEO keywords
**Success Criteria** (what must be TRUE):
  1. Every page has unique meta title, description, and Open Graph image
  2. Product page includes JSON-LD Product structured data
  3. Lighthouse mobile score is 90+ for Performance, Accessibility, Best Practices, and SEO
  4. All images are optimized (WebP, lazy loaded, proper alt text)
**Plans**: TBD

### Phase 5: E-Commerce & Launch
**Goal**: Wire up a purchase flow and deploy the site to production with a custom domain
**Depends on**: Phase 4
**Requirements**: ECOM-01, TECH-02
**Research**: Likely — Shopify Buy Button vs Stripe Payment Links vs other embedded checkout
**Success Criteria** (what must be TRUE):
  1. A "Buy Now" button on the product page initiates a checkout flow (Shopify, Stripe, or similar)
  2. Site is deployed to Vercel and accessible at the custom domain
  3. SSL certificate active, all pages load without errors on production
**Plans**: TBD

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Brand System | 0/TBD | Not started | — |
| 2. Hero & Landing | 0/TBD | Not started | — |
| 3. Content Pages | 0/TBD | Not started | — |
| 4. SEO & Performance | 0/TBD | Not started | — |
| 5. E-Commerce & Launch | 0/TBD | Not started | — |

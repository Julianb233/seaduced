# Roadmap: Seaduced

## Overview

Build a premium brand website for Seaduced — the first sea moss-infused personal lubricant on the market. Starting from a bare Next.js 16 scaffold, establish the brand design system from label comp assets, build a stunning product showcase, fill out content pages, optimize for SEO (owning the "sea moss lubricant" keyword space), wire up e-commerce, and deploy to production.

**Market context:** Zero competitors in sea moss lubricant space. Royal blue + gold palette is distinctive vs competitor earth tones. Carrageenan (sea moss compound) has clinical validation for vaginal/penile use. Price point: $28-35 premium tier.

## Milestone 1: MVP Launch Site (v1.0)

### Phase 1: Design System & Layout Foundation
**Goal**: Establish the visual DNA — brand colors, typography, layout shell, and reusable components that every page inherits
**Depends on**: Nothing (first phase)
**Success Criteria** (what must be TRUE):
  1. Brand colors (royal blue #3B5EAB, metallic gold #C5A55A, white #FFFFFF, ocean teal #1A6B5C) are Tailwind tokens used in a visible layout shell
  2. "SEADUCED" heading renders in elegant serif; "Naturally Intimate!" in cursive script; body in clean sans-serif
  3. Shared layout (header/nav + footer) wraps all pages with responsive navigation
  4. Reusable UI primitives exist: Button, Section, Container, Badge, Card
  5. Brand assets in public/ — logo SVG, favicon, OG images
  6. Layout is responsive at 375px, 768px, and 1440px
  7. `npm run build` passes with zero errors
**Plans**: TBD

### Phase 2: Hero & Landing Page
**Goal**: Build the above-the-fold experience that captures attention, communicates the brand instantly, and drives scroll
**Depends on**: Phase 1
**Success Criteria** (what must be TRUE):
  1. Hero section: full-viewport with product bottle mockup, "SEADUCED" wordmark, tagline, and primary CTA
  2. Value proposition section: 3-4 key benefits (sea moss-infused, pH-balanced, plant-based, naturally silky)
  3. Product highlight section: bottle image with key details (5 oz, pump, clean ingredients)
  4. Trust badges: pH-balanced, vegan, cruelty-free, paraben-free
  5. Email capture section: "Join the Wave" newsletter/early access signup
  6. Smooth scroll animations for premium feel
  7. Page loads under 3s, looks premium on mobile (375px) and desktop (1440px)
**Plans**: TBD

### Phase 3: Product Page
**Goal**: The page that sells — detailed product info answering every question and driving "Add to Cart"
**Depends on**: Phase 1
**Success Criteria** (what must be TRUE):
  1. Product hero with large images, name, price, size, and "Add to Cart" button
  2. Ingredient list with expandable details and benefit explanations
  3. "Why Sea Moss?" science section — carrageenan benefits, natural gel texture, mineral content
  4. "Free From" badges — parabens, glycerin, fragrances, petroleum
  5. FAQ accordion — pH-balanced? Condom-safe? Vegan? Discreet shipping?
  6. Reviews section (placeholder, integration-ready)
  7. Mobile-optimized with smooth interactions
**Plans**: TBD

### Phase 4: About & Brand Story Pages
**Goal**: Build trust and emotional connection through brand narrative and ingredient transparency
**Depends on**: Phase 1
**Success Criteria** (what must be TRUE):
  1. About page tells Gina's story, brand origin, "Naturally Intimate" mission
  2. Sea Moss Science page — deep dive on benefits, carrageenan science, sourcing
  3. Ingredients page — full transparency on what's in it and what's NOT
  4. Brand values section — sustainability, clean beauty, body positivity
  5. All content is tasteful, body-positive, premium tone
**Plans**: TBD

### Phase 5: Contact, Legal & Footer Pages
**Goal**: Complete the site with essential supporting pages
**Depends on**: Phase 1
**Success Criteria** (what must be TRUE):
  1. Contact page with working inquiry form (name, email, message)
  2. Privacy Policy, Terms of Service, Shipping & Returns pages
  3. Discreet shipping messaging throughout site
  4. Footer with links to all pages, social placeholders, newsletter signup
  5. All pages linked and navigable
**Plans**: TBD

### Phase 6: SEO & Performance Optimization
**Goal**: Own the "sea moss lubricant" keyword space and ensure fast load times
**Depends on**: Phases 2-5
**Success Criteria** (what must be TRUE):
  1. Unique meta title, description, and OG image for every page
  2. JSON-LD structured data: Product, Organization, BreadcrumbList, FAQPage
  3. Image optimization — WebP, responsive srcsets, lazy loading
  4. Sitemap.xml and robots.txt
  5. Lighthouse mobile 90+ on Performance, SEO, Accessibility
  6. Target keywords integrated: "sea moss lubricant", "natural personal lubricant", "plant-based lubricant"
**Plans**: TBD

### Phase 7: E-Commerce Integration
**Goal**: Enable purchases via Shopify Buy Button or Stripe Checkout
**Depends on**: Phase 3
**Success Criteria** (what must be TRUE):
  1. "Buy Now" flow works end-to-end (needs Gina's input on platform + pricing)
  2. Product pricing displayed correctly
  3. Checkout redirect or embedded checkout functional
  4. Discreet billing descriptor configured
**Plans**: TBD

### Phase 8: Deployment & Launch
**Goal**: Ship it live on a custom domain
**Depends on**: All prior phases
**Success Criteria** (what must be TRUE):
  1. Vercel production deployment successful
  2. Custom domain configured (pending from Gina)
  3. SSL active, analytics tracking (Vercel Analytics)
  4. Cross-browser QA passed (Chrome, Safari, Firefox, mobile)
  5. Zero console errors on production
**Plans**: TBD

## Phase Dependencies

```
Phase 1 (Design System) ──┬──→ Phase 2 (Hero/Landing)
                          ├──→ Phase 3 (Product Page)
                          ├──→ Phase 4 (About/Story)
                          └──→ Phase 5 (Contact/Legal)

Phases 2-5 ──→ Phase 6 (SEO & Performance)
Phase 3 ──→ Phase 7 (E-Commerce)
Phases 6+7 ──→ Phase 8 (Launch)
```

**Parallelization:** Phases 2-5 can execute in parallel after Phase 1. Phases 6-7 can partially overlap. Phase 8 requires all prior.

## Progress

| Phase | Plans | Status | Completed |
|-------|-------|--------|-----------|
| 1. Design System & Layout | 0/TBD | Not started | — |
| 2. Hero & Landing Page | 0/TBD | Not started | — |
| 3. Product Page | 0/TBD | Not started | — |
| 4. About & Brand Story | 0/TBD | Not started | — |
| 5. Contact, Legal & Footer | 0/TBD | Not started | — |
| 6. SEO & Performance | 0/TBD | Not started | — |
| 7. E-Commerce Integration | 0/TBD | Not started | — |
| 8. Deployment & Launch | 0/TBD | Not started | — |

## Milestone 2: Growth & Content (v2.0) — Future

- Blog/content marketing ("Can you use sea moss as lube?", ingredient guides, "sea moss benefits for intimacy")
- Email marketing (Klaviyo/Mailchimp integration)
- Subscription/auto-ship option (10-25% discount)
- Product line expansion pages
- Affiliate/referral program
- Social media integration (Instagram feed)
- Amazon marketplace listing

---
*Created: 2026-04-09*
*Research: Market analysis completed — zero sea moss lubricant competitors, first-mover advantage confirmed*

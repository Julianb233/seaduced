---
date: 2026-04-21
owner: julian@aiacrobatics.com (dev lead), Gina Grek (client)
scope: flesh out every Seaduced subpage from stub → full editorial design using the bottle-sampled nautical palette (DESIGN.md) + template motion system
---

# Seaduced — Subsections & Subpages Plan

Every subpage builds on the same primitives: `SubpageHero`, `SubpageSection`, `Section` (cream/navy/white variants), Framer Motion reveals, bottle-sampled palette. All motion primitives + variants should be imported, not re-invented.

## Cross-cutting rules

- **Palette:** use only tokens from `.planning/DESIGN.md` (no invention).
- **Typography:** Playfair Display headings, Inter body, JetBrains Mono eyebrows, Dancing Script for `Naturally Intimate!` tagline only.
- **Motion:** every section headline uses `y: 80 → 0` reveal inside `overflow-hidden` wrapper with ease `[0.25, 0.4, 0.25, 1]`.
- **Contrast:** on navy bg use near-white `#FAFBFB` body + muted gold `#AD9952` accent; on cream bg use navy `#263747` body + deep teal `#325360` headings.
- **Eyebrows:** always JetBrains Mono, `tracking-[0.3em]`, uppercase, colored `#325360/70` on cream or `#AD9952` on navy.
- **CTAs:** primary gold pill (muted `#AD9952`), secondary outline in deep teal `#325360` with hover fill.
- **Images:** use `next/image`, always supply width/height or `fill` + `sizes`; LCP images `priority`.
- **Accessibility:** every route passes Lighthouse a11y ≥ 95; every image has real alt text.

## Subpages — sectional plan

### 1) `/product` — "The Bottle"

**Mission:** sell the signature edition; support research/trust.

| # | Section | Spec | Motion |
|---|---|---|---|
| 1 | ProductHero | Parallax bottle (reuse `frame-01-rest.png`) on cream; H1 "Naturally Intimate."; subline 5oz / $28 / Add to Ritual CTA | bottle scrollY parallax, headline reveal |
| 2 | ProductGallery | Horizontal embla-carousel with 4 real bottle shots + 1 lifestyle shot (placeholder until Gina supplies) | drag + dot pagination |
| 3 | BenefitsStrip | 4-pill row (92 minerals / pH balanced / plant-based / sea moss infused) | staggered fade-up |
| 4 | IngredientsTeaser | 2-column split: left image of sea moss macro, right list of 5 headline ingredients, link to `/ingredients` | reveal on view |
| 5 | HowToUse | 3-step illustrated card row (Apply → Enjoy → Reapply as needed) | bento-style 3D tilt |
| 6 | PriceBreak | Single SKU card $28 with bullet list of what's included (5 oz bottle, pump, discreet pkg) + Add to Cart CTA | hover scale |
| 7 | TrustRow | 5-tile row: vegan / cruelty-free / no parabens / no petroleum / made in USA (SVG icons + label) | stagger fade |
| 8 | FAQ | 6-question Radix Accordion (Is it condom-safe? / Does it stain? / Scent? / Vegan? / Made-where? / Safe-for-sensitive-skin?) | accordion expand |
| 9 | CTABand | Cream band "Ready to feel Seaduced?" with Add to Cart + Gift CTAs | fade in |

**Owner:** Agent PRODUCT

### 2) `/about` — "Our Story"

**Mission:** found-by-a-woman + inclusive + sea-moss-origin narrative.

| # | Section | Spec | Motion |
|---|---|---|---|
| 1 | SubpageHero | "Made from the sea. Made for you." / inclusive subline | reveal |
| 2 | OriginStory | Left text column / right ocean image (tile-01 or new) describing the founder's aha moment | text-reveal + image scale on view |
| 3 | ValuesGrid | 4-card bento (Plant-based / Body-positive / Inclusive / Earth-first) with mini icon + 1-sentence why | 3D tilt |
| 4 | WhoItsFor | Navy section with 3 personas (menopause wellness / couples / LGBTQ+) — each persona in a short editorial paragraph | stagger |
| 5 | FounderNote | Full-width cream quote section (Gina's voice, 3-4 sentences, signature script) | pull-quote reveal |
| 6 | PressQuote | Placeholder editorial quote row (`"`The intimate wellness brand redefining self-care`"` -- _PLACEHOLDER_) | fade |
| 7 | Timeline | 4-node horizontal timeline (2024 concept → 2025 formulation → 2026 launch → next) | scroll-driven line + dot fills |
| 8 | CTABand | "Join the wave" email capture | focus glow |

**Owner:** Agent STORY

### 3) `/science` — "The Science"

**Mission:** educate without medical claims; reinforce trust via real science.

| # | Section | Spec |
|---|---|---|
| 1 | SubpageHero | "Why sea moss." |
| 2 | SeaMossIntro | Historical + biological explainer (Chondrus crispus, Atlantic, Irish/Caribbean traditional use) |
| 3 | Minerals92 | Big-number "92" feature card + ASCII/SVG grid diagram showing mineral density vs other sources |
| 4 | CarrageenanExplainer | 2-col: left illustration of carrageenan gel texture / right scientific (non-medical) explanation |
| 5 | pHMatters | Navy section; numeric pH scale visualization with 3.8–4.5 highlighted; why mismatched pH causes irritation |
| 6 | FormulationFlow | Horizontal 4-step "how we make it" (source → clean → formulate → bottle) |
| 7 | WhatWeDontClaim | Cream section with a short, clear limitation statement — not a medical device |
| 8 | FurtherReading | 3-card row linking to NIH/journal references (real, with captions) |
| 9 | CTABand | Shop the result → `/product` |

**Owner:** Agent SCIENCE

### 4) `/ingredients` — "What's in It"

**Mission:** exhaustive ingredient transparency.

| # | Section | Spec |
|---|---|---|
| 1 | SubpageHero | "Clean, on purpose." |
| 2 | IngredientCards | Grid of 5 main ingredients, each card expandable (Radix Accordion) with: botanical name, role, source, % range |
| 3 | WhatNotInIt | Navy section with 6-tile "✗" grid (petroleum / parabens / glycerin / fragrance / dyes / animal products) |
| 4 | SourcingStandards | Text section: harvested from regulated Atlantic sources / third-party tested / batch traceable |
| 5 | Allergens | Cream section: "Common allergens + our take" — peanut-free, latex-free, etc |
| 6 | TestingLab | 2-col: image of lab + short text on independent testing |
| 7 | FullLabel | Mini expandable panel with the literal full INCI list (for regulators + power users) |
| 8 | CTABand | "Shop confidently" -> /product |

**Owner:** Agent INGREDIENTS

### 5) `/contact` — "Say Hello"

**Mission:** route messages to the right inbox; look alive.

| # | Section | Spec |
|---|---|---|
| 1 | SubpageHero | "Say hello." |
| 2 | ThreeCards | 3 side-by-side cards (General / Press / Wholesale) each with email + short description + icon | 3D tilt |
| 3 | ContactForm | Real form (name / email / topic dropdown / message) — submits to Formspree (env var) or logs to console for MVP | focus glow + shimmer submit |
| 4 | FAQ | 4-question short accordion (response time / shipping Qs / allergen Qs / wholesale terms) |
| 5 | SocialStrip | 2-row Instagram-style strip (reuses wellness tiles) — link to Instagram |
| 6 | CTABand | "Follow along" link to Instagram |

**Owner:** Agent CONTACT

### 6) `/shipping` — "Shipping & Returns"

**Mission:** set expectations + reduce "where's my order" support load.

| # | Section | Spec |
|---|---|---|
| 1 | SubpageHero | "Discreet. Honest." |
| 2 | ShippingInfo | 4-row table (Standard / Express / International / Discreet pkg details) |
| 3 | TimelineSteps | 4-node "order → processed → shipped → delivered" with scroll-triggered fills |
| 4 | ReturnsPolicy | Navy section with clear unopened / 30-day / damaged flows |
| 5 | FAQ | 5-question accordion |
| 6 | ContactCTA | "Need help? Email hello@seaducedproducts.com" |

**Owner:** Agent LEGAL-TRIO (shared with privacy + terms)

### 7) `/privacy` — "Privacy Policy"

| # | Section | Spec |
|---|---|---|
| 1 | SubpageHero | "Your privacy, plainly." |
| 2 | WhatWeCollect | 3-bullet section + small icon per bullet |
| 3 | WhatWeNeverDo | Navy section with 4-bullet list |
| 4 | YourRights | GDPR/CCPA-style rights statement |
| 5 | CookieNotice | Short in-line explainer + link to future cookie settings |
| 6 | LastUpdatedTag | Small cream footer with date + version |

**Owner:** Agent LEGAL-TRIO

### 8) `/terms` — "Terms of Service"

| # | Section | Spec |
|---|---|---|
| 1 | SubpageHero | "The basics, readably." |
| 2 | SiteUse | Short paragraph on acceptable use |
| 3 | ProductUse | Navy section with clear "not a medical device / consult HCP if concerns" |
| 4 | OrdersPayments | Stripe mention, cancellation policy |
| 5 | LimitationOfLiability | Governing law + dispute resolution |
| 6 | LastUpdatedTag | Date + version |

**Owner:** Agent LEGAL-TRIO

## Homepage sections — follow-ups (LOW priority, after subpages)

- **Hero:** polish copy — "FEEL SEADUCED" → test variant "Naturally infused." for A/B
- **ParallaxSplash:** once dramatic F1/F2/F3 frames land, re-verify scroll-sync
- **ProductShowcase:** swap in real bottle photography when Gina delivers
- **BenefitsBento:** consider adding a 5th "Founder-owned" card for trust signal
- **Activations:** keep; copy is fine
- **Social:** swap placeholder tiles for real IG content when Gina delivers; possibly wire Instagram API for live feed
- **Footer:** confirm newsletter endpoint (Klaviyo? Mailchimp?)

## Parallelization strategy

Four agents work in **isolated git worktrees** from `main`, each scoped to specific subpages. Each:
1. Creates a new branch `feat/subpage-<owner>`
2. Builds sections per plan (TypeScript + Framer Motion + Tailwind + Radix primitives)
3. Runs `npm run build` — MUST pass zero warnings, zero type errors
4. Pushes branch, opens PR via `gh pr create`
5. Reports PR URL + summary

Branches are non-overlapping (each agent touches different `src/app/<page>/` files). Only shared touchpoint: `src/components/layout/SubpageHero.tsx` + `src/components/layout/SubpageSection.tsx` + possibly new primitives — edits to shared files MUST be additive-only (no rewrites).

Julian merges PRs in order: PRODUCT → STORY → SCIENCE → INGREDIENTS → CONTACT → LEGAL-TRIO.

## Dependencies to install (if missing)

- `@radix-ui/react-accordion` (already installed for FAQ)
- `embla-carousel-react` (already installed for product gallery)
- Formspree endpoint env var for contact form — ask Julian if not configured

## Out of scope

- E-commerce checkout wiring (separate Stripe Payment Links decision per `/tmp/ecommerce-decision-for-gina.md`)
- Blog / content marketing (post-launch)
- Multi-SKU variants (single 5oz bottle only)
- User accounts / login (none)

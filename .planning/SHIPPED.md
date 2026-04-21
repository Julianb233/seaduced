# Seaduced Template Port — SHIPPED

**Shipped:** 2026-04-21
**Production URL:** https://seaduced.vercel.app
**Production deploy:** https://seaduced-3f07kzeoi-ai-acrobatics.vercel.app (Ready, Production)
**PR:** https://github.com/Julianb233/seaduced/pull/14 (merged 2026-04-21T08:57:05Z as squash)
**Merge commit:** 560d1bb29c083761b82b9f2138c919e48df2ca6a
**Branch merged from:** worktree-agent-a7184f4b -> main

## What shipped

Complete port of the `tatum-maclachian` (GiGi energy-drink) v0 template to the Seaduced brand palette. Superseded all 11 half-done AI-8413 .. AI-8427 PRs.

### Components ported (motion intact)
- `src/components/layout/LenisProvider.tsx` — smooth scroll root provider
- `src/components/layout/ClickSpark.tsx` — gold canvas click-spark overlay (`#C5A55A`)
- `src/components/layout/Navigation.tsx` — scroll-aware bg, SEA/DUCED shimmer wordmark, mobile slide-in
- `src/components/layout/Footer.tsx` — `READY TO / DIVE IN?` text-reveal, email capture, 4-col links, giant ghost SEADUCED wordmark
- `src/components/sections/Hero.tsx` — full parallax (`useScroll`+`useTransform`+`useSpring`, opposite-direction text X parallax, floating bottle bob, bokeh blurs, scroll indicator). Copy: `FEEL / SEADUCED` + pills (`92 Minerals`, `pH-Balanced`, `Plant-Based`, `Sea Moss Infused`)
- `src/components/sections/ProductShowcase.tsx` — 3D-tilt carousel with V1 Royal / V2 Ocean Organic / V3 Embossed Gold, spring slides, accent-color gradients
- `src/components/sections/BenefitsBento.tsx` — 4 cards (92 Minerals gold, pH Balanced royal, Zero Parabens teal, Vegan + Cruelty-Free gold) with 3D mouse tilt + pulse rings
- `src/components/sections/Activations.tsx` — Retail Partners / Founders Circle / Wellness Practitioners / Press with gold-invert hover
- `src/components/sections/Social.tsx` — 6-tile Instagram grid with gold overlay (placeholder tiles at `/images/social/placeholder-{1..6}.jpg` — Gina to supply real)

### Color substitution applied everywhere
- `#AFFF00` (lime) -> `#C5A55A` (gold)
- `#121212` (charcoal) -> `#1E1E2E` (Seaduced charcoal)
- `rgba(175, 255, 0, ...)` -> `rgba(197, 165, 90, ...)`

### Global CSS
- Merged keyframes: `float`, `pulse-glow`, `marquee`, `grain`
- `.noise-overlay::before` + `.animate-float` / `.animate-pulse-glow` / `.animate-marquee` utilities
- Pulse-glow recolored to gold rgba

### Fonts
- Inter + JetBrains_Mono via `next/font/google` with `--font-sans` + `--font-mono` CSS vars

### SEO metadata
- Title: "Seaduced — Plant-Based Intimate Wellness"
- Description, keywords, openGraph, themeColor all updated

### Build
```
Next.js 16.2.3 (Turbopack)
Compiled successfully in 2.5s
TypeScript: passed
Static pages: 4/4 (including / and /_not-found)
Zero warnings, zero type errors.
```

### Dependencies added
framer-motion@12.26.2, lenis@1.3.17, embla-carousel-react@8.5.1, lucide-react@0.454.0, @radix-ui/react-accordion@1.2.2, @radix-ui/react-tabs@1.1.2, @radix-ui/react-slot, @emotion/is-prop-valid, clsx, class-variance-authority, tailwind-merge, tailwindcss-animate, tw-animate-css, next-themes

## Live verification

```bash
$ curl -sI https://seaduced.vercel.app
HTTP/2 200

$ curl -s https://seaduced.vercel.app | grep -c "SEADUCED"
4+
```

## Known items for QA / follow-up

- **Instagram tiles are 6 solid-color placeholders** at `public/images/social/placeholder-{1..6}.jpg` — waiting on Gina for real content.
- **Subpages** (`/product`, `/about`, `/ingredients`, `/science`, `/contact`, `/shipping`, `/privacy`, `/terms`) do not exist on main yet — footer links to them will 404. The task spec mentioned keeping them if present, but they were never on main. Out of scope for this port.
- **Hero bottle image** uses `frame-01-rest.png` from the splash-animation storyboard. When Gina supplies the final product photography, drop it in at `/public/images/hero-bottle.png`.
- **Mobile menu** closes on link click via Lenis scrollTo — verified at build time, QA should spot-check real device behavior.

## QA starting point

Pick up from `https://seaduced.vercel.app`. All motion should survive: parallax, 3D tilt, spring easing, text-reveal, shimmer, stagger. Brand palette must match the swap table exactly.

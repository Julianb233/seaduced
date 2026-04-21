---
date: 2026-04-21
source: `/opt/agency-workspace/seaduced/brand-assets/bottle-v2-reference.png`
authority: These hex codes were sampled directly from the V2 bottle reference PNG using PIL median-cut quantization + per-region pixel sampling. No preferences, no interpretation — only what is on the bottle.
---

# Seaduced — Design Standard

## Theme

Beach theme with nautical colors. Light, clean, editorial. Every palette decision must be traceable to a pixel on the bottle.

## Extracted Palette (from V2 bottle reference)

| Token | Hex | RGB | Source pixel on bottle | Role |
|---|---|---|---|---|
| `--white` | `#FAFBFB` | rgb(250,251,251) | bottle body (92% of pixels) | Near-white body, primary surface |
| `--cream` | `#FDF8F0` | rgb(253,248,240) | background of bottle photograph | Primary light background |
| `--aqua-pale` | `#AACAD1` | rgb(170,202,209) | wrap light highlights | Soft highlights, secondary surface |
| `--aqua-mid` | `#6793A0` | rgb(103,147,160) | wrap mid-tone | **Primary accent** (replaces gold as primary) |
| `--teal-deep` | `#325360` | rgb(50,83,96) | wrap transitional deep | Deep accent, headings on light bg |
| `--slate` | `#4E646B` | rgb(78,100,107) | mid-slate in wrap | Secondary text, muted accents |
| `--navy` | `#263747` | rgb(38,55,71) | wrap bottom ocean navy | **Primary dark section background** |
| `--navy-deep` | `#212837` | rgb(33,40,55) | deepest ocean shadow | Text on cream, deepest contrast |
| `--dust-blue` | `#56748A` | rgb(86,116,138) | muted blue in wrap | Accent |
| `--gold` | `#AD9952` | rgb(173,153,82) | champagne collar | **Secondary accent** (muted, not dominant) |
| `--seamoss-green` | `#2F4E3D` | approx from logo filaments | sea-moss logo texture | Occasional accent / logo color |

## What this palette is NOT

- NOT the gold-saturated template look (GiGi palette was `#AFFF00` + `#121212` — both discarded)
- NOT the first-pass rewrite that used `#C5A55A` gold as primary + `#3B5EAB` royal — those were invented, not sampled
- NOT any color not sampled from the bottle

## Click-spark color

Changed from gold `#AD9952` to aqua `#6793A0` to represent the water/splash character of the product, not the collar metal.

## Section color rules

| Section | Background | Primary text | Accent |
|---|---|---|---|
| Hero | `#FDF8F0` cream | `#212837` near-black | `#AD9952` gold (SEADUCED wordmark only) + `#325360` deep teal (secondary CTA outline) |
| ParallaxSplash | `#FDF8F0` cream with `#AACAD1/25` pale-aqua gradient | `#263747` ocean navy | `#6793A0` aqua + `#AD9952` gold (progress bar only) |
| ProductShowcase | cream | navy | per-variant accent (royal / teal / gold) |
| BenefitsBento | `#263747` navy | `#FAFBFB` near-white | rotate: gold / aqua / deep-teal / pale-aqua (not all gold) |
| Activations | cream (section) + navy (cards) | cream text on cards | gold icons, aqua hover-invert |
| Social | `#FDF8F0` → `#AACAD1/20` → `#FDF8F0` gradient | navy | muted gold CTA + aqua Follow button |
| Footer | `#263747` navy | near-white | gold newsletter submit, aqua link hover |
| Subpages | cream + occasional navy section | navy | aqua + gold accents |

## Contrast rules

- Text on `#263747` navy must be `#FAFBFB` near-white OR `#AD9952` muted gold (never `#AACAD1` pale aqua — too low contrast)
- Text on `#FDF8F0` cream must be `#212837`/`#263747` navy OR `#325360` deep teal (never `#6793A0` aqua for body — too low contrast)
- Headings on cream can use `#325360` deep teal for elegant mid-tone
- Muted gold `#AD9952` used sparingly as accent only, NEVER for body text

## Color elements that violated the design (audit after nautical rebuild)

See `CODEBASE-COLOR-AUDIT.md` for the mapped list of pre-2026-04-21 colors that did not match the bottle-sampled palette.

## Logo treatment

- Primary logo: `public/brand/seaduced-logo-green-seamoss.png` — mermaid couple in sea-moss green texture
- Reverse: `public/brand/seaduced-logo-white-royal.jpg` — white couple on royal blue background (for navy section use ONLY — royal background is not in our primary palette; treat as a legacy reverse-out only)
- Logo on cream backgrounds → green-seamoss variant
- Logo on navy backgrounds → (ideally) a cream/white couple version. The white-on-royal JPG embeds a royal bg that doesn't match the palette — flag for Gina to have the designer export a transparent PNG of the couple in cream/white.

## Typography (unchanged, already aligned)

- Display/Hero: Playfair Display 800/900
- Tagline: Dancing Script (reserved for "Naturally Intimate!" only)
- Body: Inter
- Eyebrow / meta / monospace: JetBrains Mono

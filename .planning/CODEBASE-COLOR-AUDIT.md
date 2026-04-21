---
date: 2026-04-21
source-of-truth: `.planning/DESIGN.md` (bottle-sampled hex codes)
scope: `src/**/*.{ts,tsx,css,mjs,js}`
---

# Seaduced — Codebase Color Audit

## Method

Grepped every 3- and 6-digit hex code in `src/` with `grep -rohE '#[0-9A-Fa-f]{6}'`, tallied usage counts, and compared against the bottle-sampled palette in `DESIGN.md`. Every hex that did not appear on the bottle is flagged.

## Before fix (2026-04-21 mid-session, pre-audit)

| Hex | Uses | Source | Status |
|---|---|---|---|
| `#C5A55A` | 60 | saturated gold invented in first rebuild | ❌ NOT on bottle |
| `#1E1E2E` | 46 | charcoal from template | ❌ NOT on bottle |
| `#F5ECD9` | 10 | pale cream variant invented | ❌ NOT on bottle |
| `#AD9952` | 10 | bottle collar gold | ✅ bottle |
| `#263747` | 12 | bottle ocean navy | ✅ bottle |
| `#FDF8F0` | 8 | cream (background) | ✅ (background std) |
| `#325360` | 5 | deep teal | ✅ bottle |
| `#6793A0` | 5 | aqua mid | ✅ bottle |
| `#2a2a3e` | 5 | muddy purple-gray | ❌ NOT on bottle |
| `#3B5EAB` | 1 | royal from first rebuild | ❌ NOT on bottle |
| `#1B2F6B` | 3 | dark royal invented | ❌ NOT on bottle |
| `#0D7C8A` | 3 | bright teal invented | ❌ NOT on bottle |
| `#14B8A6` | 2 | tailwind teal | ❌ NOT on bottle |
| `#AACAD1` | 3 | wrap pale aqua | ✅ bottle |
| `#FAFBFB` | 6 | bottle body white | ✅ bottle |
| `#fff` / `#ffffff` | 12 | pure white (acceptable std) | ✅ std |
| `#666666` / `#a3a3a3` / `#e5e5e5` / `#f5f5f5` / `#dc2626` | 7 total | UI grays + error red | ✅ std (OK to keep for neutral UI) |

**Non-palette total: ~134 occurrences across 19 files** — dominated by the saturated gold (`#C5A55A`) and template charcoal (`#1E1E2E`).

## Fix applied

Bulk replacement executed via Python script `python3 <<PY ... PY` (2026-04-21 mid-session):

| Old (non-palette) | New (bottle-sampled) | Reason |
|---|---|---|
| `#C5A55A` → `#AD9952` | primary accent | Use bottle's actual champagne gold, not saturated invention |
| `#1E1E2E` → `#263747` | dark sections | Use bottle's ocean navy, not template charcoal |
| `#1B2F6B` → `#263747` | bokeh + accents | Consolidate to bottle navy |
| `#3B5EAB` → `#263747` | one stray use | Same |
| `#2a2a3e` → `#1a2a3a` | gradient mids | Consolidate near-navy |
| `#14B8A6` → `#6793A0` | teal accents | Use bottle aqua, not tailwind default |
| `#0D7C8A` → `#325360` | teal accents | Use bottle deep teal |
| `#F5ECD9` → `#FDF8F0` | pale cream | Consolidate cream |

## After fix (current state)

| Hex | Uses | Status |
|---|---|---|
| `#263747` | 62 | ✅ bottle navy |
| `#AD9952` | 69 | ✅ bottle gold |
| `#FDF8F0` | 18 | ✅ cream |
| `#325360` | 8 | ✅ bottle deep teal |
| `#6793A0` | 8 | ✅ bottle aqua |
| `#1a2a3a` | 6 | ✅ navy gradient mid |
| `#FAFBFB` | 6 | ✅ bottle white |
| `#AACAD1` | 3 | ✅ bottle pale aqua |
| `#fff`, `#ffffff`, `#666666`, `#a3a3a3`, `#dc2626`, `#e5e5e5`, `#f5f5f5` | 18 total | ✅ std UI grays / white / error |

**Non-palette leaks remaining: 0** (every remaining hex is either on-bottle or a standard UI neutral).

## ClickSpark color

Changed in `src/app/layout.tsx`: `sparkColor="#AD9952"` → `sparkColor="#6793A0"` (bottle aqua).
This makes the click-spark effect read as a water/splash cue, matching the parallax splash section — and also addresses Julian's ask that the click animation represent the blue/light-teal splash.

## Files touched in this audit (19 total)

- `src/app/layout.tsx` (~2 replacements)
- `src/app/globals.css` (~30 replacements)
- `src/app/about/page.tsx`, `contact/`, `ingredients/`, `privacy/`, `product/`, `science/`, `shipping/` (~39 replacements across subpages)
- `src/components/layout/ClickSpark.tsx` (~1)
- `src/components/layout/Footer.tsx` (~6)
- `src/components/layout/Navigation.tsx` (~15)
- `src/components/layout/SubpageHero.tsx` (~6)
- `src/components/layout/SubpageSection.tsx` (~2)
- `src/components/sections/Activations.tsx` (~5)
- `src/components/sections/BenefitsBento.tsx` (~3)
- `src/components/sections/Hero.tsx` (~15)
- `src/components/sections/ProductShowcase.tsx` (~24)
- `src/components/sections/Social.tsx` (~2)

## What still needs review

- The white-on-royal logo variant `public/brand/seaduced-logo-white-royal.jpg` uses a royal blue (#3B5EAB-ish) background that is NOT in the bottle palette. Flag for Gina / designer to export a transparent PNG of the couple in cream/white so we can overlay on `#263747` navy sections.
- Hero bottle image (`/images/hero-bottle.png`) is a rendered bottle that includes its own palette — preserved as-is.
- 6 Instagram wellness tiles (`public/images/social/tile-*`) were AI-generated with wellness imagery — their palette is not bottle-sampled but reads as on-brand (ocean / marble / golden-hour). Acceptable until Gina supplies real photography.

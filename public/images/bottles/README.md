# Seaduced Bottle Variants

All 3 bottle variants extracted from Gina's label comps PDF
(`brand-assets/Seaduced_Label_Comps_V1_081924.pdf`, Aug 19 2024), background
stripped with `rembg` + u2net + alpha matting, tight-cropped with 12px pad,
resized LANCZOS.

Each variant ships in three files:
- `<name>.png` — transparent, ~1200px tall (primary hero / ProductShowcase use)
- `<name>-lg.png` — transparent, ~1800px tall (hero-scale use, retina)
- `<name>.webp` — q90, ~1200px tall (prod-optimized; preferred by `next/image`)

## Variants

### V1 — `bottle-v1-royal`
- **Source page:** PDF page 2
- **Material:** Solid royal-blue glass bottle with gold print applied **directly
  to the bottle surface** (no label, no shrink-wrap). White + gold pump closure.
- **Feel:** Luxury / minimalist. High-contrast gold-on-blue. Reads as premium
  spa / apothecary.
- **When to use:** Launch hero variant if Gina goes direct-print route.

### V2 — `bottle-v2-ocean-organic`
- **Source page:** PDF page 3
- **Material:** White bottle with **matte shrink-wrap** showing sea-moss /
  ocean-wave texture wrapping the lower third + top. Teal single-mermaid logo,
  teal wordmark, gold + teal pump closure.
- **Feel:** Natural / wellness / editorial. The organic shrink-wrap is the
  whole story.
- **When to use:** Gina's **approved variant** as of Apr 2026 — this is the
  one currently driving the site hero + product shots.

### V3 — `bottle-v3-embossed-gold`
- **Source page:** PDF page 4 (front view; page 5 has the side view)
- **Material:** Royal-blue glass bottle wrapped in a **textured cream paper
  label** with embossed logo and metallic gold stamp (gold SEADUCED wordmark
  runs vertical-diagonal, deep-press embossing on the mermaid). Gold neck ring,
  white pump.
- **Feel:** Premium / tactile / editorial. Paper + foil + emboss = touch-first.
- **When to use:** Giftable / limited-edition SKUs, premium-tier messaging.

## Regenerating

Source script: `/tmp/extract-bottles.py` (not committed). Re-render the PDF
with `pdftoppm -r 300 -png` then run the script to rebuild. If rembg leaves
a halo, tighten: `alpha_matting_foreground_threshold=250`,
`alpha_matting_erode_size=15`. Current output is clean — no refinement
needed.

## Medi Tagg / packaging metadata

Julian mentioned packaging metadata ("Medi Tagg data") that can aid
background stripping. At time of extraction no explicit Medi Tagg file was
present in `brand-assets/`. If one is dropped in later, prefer it over the
rembg output — drop the refined PNGs on top of the files here with the same
naming scheme.

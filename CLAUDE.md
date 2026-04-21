@AGENTS.md

# Seaduced — Natural Intimate Wellness Brand Website

## Project Overview

**Client:** Gina Grek (ginagreksells@gmail.com, +1 708-466-1102) — AI Acrobatics client for the Seaduced project. Julian is the point of contact; apply full client protocol for all deliverables (PPP, canonical deliverable send path, client-request Linear labels, 4-check client context load before any client-facing send).
**Product:** Sea moss-based moisturizing personal lubricant ("Naturally Intimate" product line), 5 oz / 148 ml, $20-$35
**Domain:** seaducedproducts.com (purchased by Gina 2026-04-21 — not yet wired to Vercel; preview at seaduced.vercel.app until DNS is set)
**Stack:** Next.js 16 + React 19 + Tailwind v4 (App Router), Vercel
**Telegram:** -1003903452659 (AI Acrobatics | Seaduced)
**Linear Project:** https://linear.app/ai-acrobatics/project/seaduced-natural-intimate-wellness-brand-bc3216cd4638

## Target Demographics (from Gina 2026-04-21)

1. Anyone upgrading their self-care routine
2. Older women navigating hormonal changes (menopause, perimenopause)
3. LGBTQ+ community

Messaging must be inclusive, body-positive, and wellness-oriented — not kink-oriented, not purely youth-targeted.

## Brand

Seaduced is a natural intimate wellness brand. The core product is a sea moss-based moisturizing lubricant — clean, plant-based, pH-balanced. Part of the "Naturally Intimate" product line.

## Final logo (2026-04-21)

Canonical logo is a mermaid COUPLE intertwined forming the S — supersedes the single-mermaid in the Aug 2024 V2 label comp PDF. Variants saved:
- `public/brand/seaduced-logo-blue-seamoss.png` / `.webp` — **PRIMARY** (teal/aqua sea-moss couple on transparent, matches bottle blue palette)
- `public/brand/seaduced-logo-white-royal.jpg` (white couple on royal)
- `public/brand/seaduced-logo-green-seamoss.png` (archive — Gina's original green sea-moss-textured couple on transparent)

## Deployment

Standard Vercel deployment via GitHub integration. Pushes to `main` auto-deploy.

```bash
# Manual deploy if needed
npx vercel build --prod && npx vercel deploy --prebuilt --prod --yes
```

## Key Directories

```
src/app/           # App Router pages
src/components/    # React components
public/            # Static assets (images, fonts)
.planning/         # Project planning docs
```

## After Every Work Session

1. Update `.planning/STATE.md` with what was done
2. Commit atomically with descriptive messages
3. Push to GitHub

## Brand Colors (locked — do not deviate)

- Royal Blue `#3B5EAB` (dark `#2D4A8A`, light `#5A7CC4`)
- Metallic Gold `#C5A55A` (dark `#A8893D`, light `#D4BA78`) — primary accent / CTAs
- Ocean Teal `#1A6B5C` (dark `#145549`, light `#238F7A`)
- Cream `#FDF8F0` — neutral background
- Charcoal `#1E1E2E` (light `#2A2A3D`) — body text / dark sections

## Client Protocol Reminders

- All Gina-facing deliverables MUST go through `/opt/agency-workspace/scripts/send-client-deliverable.sh` (HTML email from julian@aiacrobatics.com + Telegram mirror + PPP inserts). Do NOT hand-roll plain-text `gws gmail +send` for deliverables.
- 4-check client context load (Obsidian Gina.md + PPP + Linear + Telegram history) is MANDATORY before any client-facing send. See `.claude/rules/client-context-load.md`.
- Linear issues for Gina's review: use `client-request` + `client-action` labels appropriately.
- PPP URL (when provisioned): portal.aiacrobatics.com/seaduced.
- E-commerce roadmap: Stripe Payment Links at launch, Shopify Basic at ~30 orders/month. See `/tmp/ecommerce-decision-for-gina.md` (awaiting Gina's pick).

## Compliance

No regulatory requirements. Standard consumer product marketing rules apply.

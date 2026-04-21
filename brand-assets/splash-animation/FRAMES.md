# Seaduced Hero Parallax — Sea Moss Splash Animation

Reference bottle: `../bottle-v2-reference.png` (V2 from `Seaduced_Label_Comps_V1_081924.pdf`)
Reference logo: `../logos-final-2026-04-21/logo-green-seamoss.png` (FINAL mermaid-couple logo from Gina 2026-04-21)
Target: parallax scroll on the home hero — as user scrolls, the bottle tilts and ejects a sea-moss-infused cream/gel splash that arcs across the frame.
Model: `gemini-3.1-flash-image-preview` (Nano Banana 2). Output 1024x1365 JPEG ~ 500–600 KB per frame.

Frame 1 = bottle at rest. Frame N (7) = peak squirt with mid-air splash + sea-moss strands suspended.

## Invariants — KEEP CONSTANT across every frame

### Bottle render
- 5 oz / 148 ml pump bottle, squat cylindrical body, softly tapered shoulder
- Matte porcelain-white body with ocean shrink-wrap lower third (dark teal #0c3d4a to aqua #3b8a96 + silhouetted sea-moss fronds)
- 12mm polished champagne-gold collar (#c6a770) between body and pump neck
- Pump dispenser: matte white head, narrow chrome nozzle tip, safety-clip lock ring
- Upper body centered: mermaid COUPLE logo (male + female mermaids intertwined forming S), sea-moss green-organic texture, ~25mm tall — SOURCED FROM `logo-green-seamoss.png`
- Wordmark below logo: "SEADUCED" deep-teal refined serif, letter-spacing ~0.04em
- Subtitle below wordmark, small caps, teal: "SEA MOSS INFUSED PERSONAL LUBRICANT"
- Tagline across ocean wrap in cream cursive: "Naturally Intimate!"
- Size callout lower right: "5 oz | 148 ml" thin white sans

### Fluid character
- Product body: translucent pearl-white with pale aqua undertone (#eaf5f2 → #c0dcd6), viscous but not thick, draping like warm honey mixed with whipped cream
- Sea-moss accent strands: golden-bronze (#b89b68) filaments 8–12 suspended inside the arcs, delicate curling wet moss texture, ~2mm thickness
- Bubbles: 30% micro-bubbles sub-mm scale glinting in highlights, NOT foaming suds

### Lighting
- Key: large octabox camera-left at 45°, soft daylight 5200K
- Fill: white v-flat right, 1-stop under key
- Rim: narrow strip backlight behind-right edge-lighting bottle + fluid arcs
- Ground: subtle reflection on polished cream marble surface with faint veining
- Background: soft dusty cream-to-mist gradient (#FDF8F0 → #ECE4D2), very slight noise

### Framing
- Lens: 85mm macro equivalent, f/4.5
- Portrait 3:4 1024x1365
- Bottle centered horizontally; base at ~78% frame height in frame 1, shifts right as it tilts

---

## FRAME 1 — `frame-01-rest.png` (GENERATED ✓)

### References passed to Nano Banana
1. `../bottle-v2-reference.png` — for shape/proportions/wrap
2. `../logos-final-2026-04-21/logo-green-seamoss.png` — for the FINAL mermaid-couple logo

### Prompt

Generate an editorial product photograph of a Seaduced V2 sea-moss-infused personal lubricant pump bottle at absolute rest, using the two reference images as the source of truth: FIRST reference for bottle shape + wrap + proportions, SECOND reference for the mermaid-couple logo which REPLACES any single-mermaid seen in the first reference.

Bottle description (verbatim from invariants above).

Setting: bottle perfectly upright, centered on polished cream marble, against soft dusty cream gradient background. No people, no other objects.

Lighting + camera (verbatim from invariants above).

Portrait 3:4 1024x1365. Bottle centered, base at ~78% height.

MUST NOT INCLUDE: drips, droplets, fluid outside bottle, splash, motion lines, bottle tilt, pump actuation, single-mermaid logo. Pristine still "before" frame — luxury wellness editorial, serene, confident.

---

## FRAME N (LAST) — `frame-N-peak-splash.png` (GENERATED ✓)

### References passed to Nano Banana
1. `../logos-final-2026-04-21/logo-green-seamoss.png` — mermaid-couple logo
2. `frame-01-rest.png` — anchor for lighting + bottle + background consistency

### Prompt

Generate an editorial product photograph of the SAME Seaduced bottle as frame-01-rest, captured at the PEAK INSTANT of an elegant dispenser squirt.

Action: bottle tilted 22° right. Pump head at peak stroke. Chrome nozzle aimed up + right.

Fluid: single graceful ribbon of translucent pearl-white cream arcing up and to the right, apex near top-right corner, folding into a lush mid-air splash crown with curling tendrils and tiny droplets radiating outward. 3–5 free-flying teardrops suspended near apex. Thin continuous thread of cream connects nozzle tip to ribbon. 8–12 golden-bronze sea-moss filaments (~2mm) suspended INSIDE the ribbon + splash, catching rim backlight and glowing faintly bronze. Micro-bubbles sparkle throughout, sub-mm, concentrated in highlights. Not foamy — luxury viscous.

Lighting: IDENTICAL to frame 1 — octabox key camera-left 45° 5200K, v-flat fill right -1 stop, strip backlight behind-right rim-lighting bottle AND fluid ribbon. Splash catches bright specular highlight on curling top; translucency shows background hints; backlight glows sea-moss bronze.

Background: UNCHANGED from frame 1 — dusty cream gradient #FDF8F0 to #ECE4D2, polished cream marble with stray droplets beginning to bead near bottle base.

Logo: mermaid-couple logo from reference 1 crisply visible on bottle upper body (centered, sea-moss green). Do NOT substitute with single-mermaid. SEADUCED wordmark, subtitle, "Naturally Intimate!" tagline all UNCHANGED from frame 1.

Camera: 85mm macro, f/4.5, 1/8000s — bottle + splash ALL tack-sharp, no motion blur.

Composition: portrait 3:4 1024x1365. Bottle tilted right; splash ribbon occupies upper-right quadrant.

Mood: luxurious, sensual-but-clinical, confident, premium skincare editorial. Hero moment of a modern wellness brand campaign.

---

## Middle-frame guidance (future generation)

Interpolate 5 in-between frames. Every invariant (bottle render, lighting, background, marble, framing, color temperature) IDENTICAL to anchors. Only tilt + fluid state evolve.

| Frame | Tilt | Pump | Fluid |
|---|---|---|---|
| 01 | 0° | rest | none |
| 02 | 4° | starting depress | tiny bead at nozzle tip |
| 03 | 9° | mid-depress | single thick drop extruding |
| 04 | 14° | deep-depress | short spurt clearing nozzle, thin stream |
| 05 | 18° | near-peak | extending stream, 6 bubbles, first 2 sea-moss filaments |
| 06 | 20° | peak stroke | full ribbon forming, half splash crown |
| 07 | 22° | peak+hold | **FRAME N** — full ribbon + splash crown + all 8-12 filaments |

## Prompt-engineering invariants (COPY VERBATIM in every future frame request)

Always include:
- "Seaduced V2 matte-white 5 oz pump bottle, 12mm champagne-gold collar, ocean shrink-wrap lower third, mermaid-COUPLE logo (reference image), SEADUCED serif wordmark, Naturally Intimate cursive tagline"
- Lighting: "octabox camera-left at 45 degrees 5200K, v-flat fill right, strip backlight behind-right rim"
- Background: "dusty cream gradient #FDF8F0 to #ECE4D2 with faint noise, polished cream marble surface"
- Fluid: "translucent pearl-white cream (#eaf5f2 to #c0dcd6) with pale-aqua undertone, golden-bronze (#b89b68) sea-moss filaments 2mm thickness"
- Camera: "85mm macro, f/4.5, portrait 3:4 1024x1365, 1/8000s, tack-sharp"
- Negative: "no blur, no foaming, no cartoonish splash, no single-mermaid logo, no changes to bottle wrap or text"

Pass logo-green-seamoss.png + frame-01-rest.png as inline references on EVERY future frame request to enforce consistency.

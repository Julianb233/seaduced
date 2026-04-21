# Seaduced Parallax - Passthrough Archive (2026-04-21)

This directory preserves the 7-frame parallax splash sequence that Julian reviewed on 2026-04-21, before the same-day refresh.

## Why this exists

Julian's feedback on the 7-frame set:
1. The F3 transition ("Ready / Primed.") didn't land visually and was dropped from the live sequence.
2. F1 (mist entry), F2 (beauty), and F4 (first bead) needed more water drama / aqueous energy.
3. F5, F6, F7 were fine as-is and carried forward unchanged.

This archive is the **reviewable pass-through version** — a frozen reference so Gina (or anyone else auditing) can see the before-state and compare it against the 2026-04-21 refresh.

## Files

| File | Role in the original sequence |
|------|-------------------------------|
| `f1-mist.jpg` | Emerge from sea mist |
| `f2-beauty.jpg` | Beauty shot on cream marble |
| `f3-primed.jpg` | Gold halo on pump ("Ready / Primed.") - DROPPED from live sequence |
| `f4-bead.jpg` | First cream bead at the nozzle |
| `f5-stream.jpg` | Cream stream arcing with sea-moss filaments |
| `f6-splash.jpg` | Peak splash |
| `f7-settle.jpg` | Settled with cream pool on marble |

Files are marked read-only to prevent accidental overwrite.

## Live sequence (post-2026-04-21)

After this archive was taken, the live parallax in `src/components/sections/ParallaxSplash.tsx`:
- Removed F3 entirely (6 frames total now)
- Regenerated F1, F2, F4 with heavier water effect via Nano Banana
- Kept F5, F6, F7 unchanged

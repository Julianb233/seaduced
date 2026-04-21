/**
 * Global Type System — Seaduced
 *
 * Centralised typography tokens consumed by all pages.
 * Maps semantic levels to Tailwind v4 class strings using the brand palette
 * defined in globals.css (@theme inline).
 */

/** Heading presets */
export const HEADING = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05]',
  h2: 'text-3xl md:text-4xl font-bold tracking-tight leading-tight',
  h3: 'text-xl md:text-2xl font-semibold tracking-tight leading-snug',
  h4: 'text-lg font-semibold leading-snug',
} as const;

/** Body text presets */
export const BODY = {
  base: 'text-base leading-relaxed text-white/80',
  muted: 'text-sm leading-relaxed text-white/60',
  fine: 'text-xs leading-relaxed text-white/50 font-mono',
} as const;

/** Accent utilities */
export const ACCENT = {
  gold: 'text-gold',
  goldGradient: 'text-gradient-gold',
  white: 'text-white',
} as const;

/**
 * Static page layout tokens — fallback for pages not using StaticPageShell.
 * StaticPageShell is preferred for /shipping, /privacy, /terms.
 */
export const STATIC_PAGE = {
  wrapper: 'relative min-h-screen bg-charcoal pt-28 pb-20',
  container: 'mx-auto max-w-3xl px-6',
  title: 'text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] text-white mb-2',
  subtitle: 'text-sm font-mono text-white/40 mb-12',
  sectionHeading: 'text-xl md:text-2xl font-semibold tracking-tight text-white mt-10 mb-4',
  paragraph: 'text-base leading-relaxed text-white/75 mb-6',
  list: 'list-disc list-inside space-y-2 text-base leading-relaxed text-white/75 mb-6 ml-2',
  link: 'text-gold hover:text-gold-dark underline underline-offset-2 transition-colors',
  divider: 'border-t border-white/10 my-10',
} as const;

// Single source of truth for Seaduced product bundles.
// Imported by /shop, /shop/[slug], /cart, /checkout, /order/[id].

export type BundleSlug = "single" | "ritual-3-pack" | "wave-6-pack" | "gift-set";
export type BundleCategory = "starter" | "value" | "gift";
export type BundleVisual = "single" | "triple" | "sextet" | "gift";

export interface Bundle {
  slug: BundleSlug;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  /** Price in whole USD (not cents) to keep the data human-readable. */
  price: number;
  /** MSRP / crossed-out comparison price. `null` if no discount. */
  compareAtPrice: number | null;
  /** Savings vs compareAtPrice, human-readable like "Save $9". `null` when not applicable. */
  save: string | null;
  /** Number of 5oz bottles in the bundle — used for per-unit price + imagery composition. */
  unitCount: number;
  /** Hero + card imagery composition hint. Actual images are composed from /images/bottle-isolated.png. */
  visual: BundleVisual;
  /** Category used for the /shop filter chips. */
  category: BundleCategory;
  /** Whether this bundle is highlighted as "Best Value" on the shop index. */
  featured: boolean;
  /** What's included checklist for the detail page. */
  includes: string[];
  /** Specifications for the product detail table. */
  specs: Array<{ label: string; value: string }>;
  /** FAQ entries specific to this bundle. */
  faq: Array<{ q: string; a: string }>;
  /**
   * TODO(stripe): Stripe Price ID wired up at launch. Gina to provide once she
   * provisions the Stripe account. For now all checkouts go through a mocked
   * PaymentIntent endpoint so the flow is end-to-end testable.
   */
  stripePriceId: string | null;
  /** Primary image for shop cards + cart thumbnails. Always /images/bottle-isolated.png — composed via <BundleComposite>. */
  image: string;
}

const sharedSpecs: Array<{ label: string; value: string }> = [
  { label: "Size", value: "5 oz / 148 ml" },
  { label: "Texture", value: "Water-based, silky" },
  { label: "pH", value: "3.8–4.5 (body-balanced)" },
  { label: "Scent", value: "Fragrance-free" },
  { label: "Ingredients", value: "Sea moss extract, aloe barbadensis, water, natural humectants" },
  { label: "Origin", value: "Formulated + bottled in the USA" },
  { label: "Certifications", value: "100% vegan, cruelty-free, plant-based" },
];

const sharedFaq: Array<{ q: string; a: string }> = [
  {
    q: "Is Seaduced condom-safe?",
    a: "Yes. Water-based and compatible with latex, polyisoprene, and polyurethane. Safe with silicone and body-safe toys.",
  },
  {
    q: "Will it stain sheets or clothing?",
    a: "No. Water-based and clear — a standard wash removes it easily.",
  },
  {
    q: "Does it have a scent?",
    a: "Fragrance-free. You may notice a very faint, clean note from the sea moss itself — never perfume or masking agents.",
  },
  {
    q: "Is it safe for sensitive skin?",
    a: "pH-balanced (3.8–4.5) and free of parabens, petroleum, glycerin, fragrance, and dyes. If you have a known allergy, consult your healthcare provider before use.",
  },
];

export const bundles: Bundle[] = [
  {
    slug: "single",
    name: "Single",
    tagline: "Start the ritual",
    shortDescription: "One 5 oz bottle — everything you need to begin.",
    description:
      "The Single is one 5 oz pump bottle of our sea moss-infused personal lubricant. It's the simplest way to start the ritual — a single clean, plant-based bottle delivered in discreet, unbranded packaging.",
    price: 28,
    compareAtPrice: null,
    save: null,
    unitCount: 1,
    visual: "single",
    category: "starter",
    featured: false,
    includes: [
      "1 x 5 oz / 148 ml pump bottle",
      "Sea moss-infused, pH-balanced formula",
      "Discreet, unbranded packaging",
      "Flat-rate US shipping",
      "30-day satisfaction guarantee (unopened)",
    ],
    specs: sharedSpecs,
    faq: [
      ...sharedFaq,
      {
        q: "How long does one bottle last?",
        a: "At typical use, a 5 oz bottle lasts most people 2-3 months. Your mileage may vary.",
      },
    ],
    stripePriceId: null,
    image: "/images/bottle-isolated.png",
  },
  {
    slug: "ritual-3-pack",
    name: "Ritual 3-Pack",
    tagline: "For the routine",
    shortDescription: "Three 5 oz bottles — save $9 vs singles.",
    description:
      "The Ritual 3-Pack is three 5 oz bottles for $75 — enough to stock a nightstand, a drawer, and a travel bag. Same clean, plant-based formula, now at a routine-friendly price. Save $9 vs buying three singles.",
    price: 75,
    compareAtPrice: 84,
    save: "Save $9",
    unitCount: 3,
    visual: "triple",
    category: "value",
    featured: false,
    includes: [
      "3 x 5 oz / 148 ml pump bottles",
      "Sea moss-infused, pH-balanced formula",
      "Discreet, unbranded packaging",
      "Flat-rate US shipping (free over $50)",
      "30-day satisfaction guarantee on unopened bottles",
    ],
    specs: sharedSpecs,
    faq: [
      ...sharedFaq,
      {
        q: "Can I gift one of the bottles from the 3-Pack?",
        a: "Absolutely. Each bottle ships in its own sleeve — gift one, keep two, or spread them across rooms.",
      },
    ],
    stripePriceId: null,
    image: "/images/bottle-isolated.png",
  },
  {
    slug: "wave-6-pack",
    name: "Wave 6-Pack",
    tagline: "Share the wave",
    shortDescription: "Six 5 oz bottles — best value per bottle.",
    description:
      "The Wave 6-Pack is six 5 oz bottles for $140 — our best per-bottle value. Ideal for households, co-founders of a shared ritual, or anyone who wants to stay stocked for the long haul. Save $28 vs buying six singles.",
    price: 140,
    compareAtPrice: 168,
    save: "Save $28",
    unitCount: 6,
    visual: "sextet",
    category: "value",
    featured: true,
    includes: [
      "6 x 5 oz / 148 ml pump bottles",
      "Sea moss-infused, pH-balanced formula",
      "Discreet, unbranded packaging",
      "Free US shipping",
      "30-day satisfaction guarantee on unopened bottles",
    ],
    specs: sharedSpecs,
    faq: [
      ...sharedFaq,
      {
        q: "Is there a subscription option?",
        a: "Not yet. We're testing subscribe-and-save in late 2026. Join the list for early access.",
      },
    ],
    stripePriceId: null,
    image: "/images/bottle-isolated.png",
  },
  {
    slug: "gift-set",
    name: "Gift Set",
    tagline: "Wrap it with intention",
    shortDescription: "One 5 oz bottle in a linen-textured gift box.",
    description:
      "The Gift Set is a single 5 oz bottle presented in a linen-textured gift box with a satin ribbon and an optional hand-written card. Ready to give — no extra wrapping required.",
    price: 45,
    compareAtPrice: null,
    save: null,
    unitCount: 1,
    visual: "gift",
    category: "gift",
    featured: false,
    includes: [
      "1 x 5 oz / 148 ml pump bottle",
      "Linen-textured gift box",
      "Satin ribbon tie",
      "Optional hand-written card (add at checkout)",
      "Discreet outer packaging",
    ],
    specs: sharedSpecs,
    faq: [
      ...sharedFaq,
      {
        q: "Can you include a personal note?",
        a: "Yes. Add your note at checkout and we'll hand-write it on a linen card tucked inside the box.",
      },
    ],
    stripePriceId: null,
    image: "/images/bottle-isolated.png",
  },
];

export const bundlesBySlug: Record<BundleSlug, Bundle> = bundles.reduce(
  (acc, b) => ({ ...acc, [b.slug]: b }),
  {} as Record<BundleSlug, Bundle>
);

export function getBundle(slug: string): Bundle | undefined {
  return bundlesBySlug[slug as BundleSlug];
}

/** Promo codes accepted at checkout. Placeholder wiring for Stripe Coupons / HTTP backend. */
export const PROMO_CODES: Record<string, { percentOff: number; label: string }> = {
  SEAWAVE10: { percentOff: 10, label: "10% off (SEAWAVE10)" },
};

/** Flat shipping fee until real carrier calc is wired. */
export const FLAT_SHIPPING_CENTS = 695; // $6.95
export const FREE_SHIPPING_THRESHOLD_CENTS = 5000; // $50
/** Sales tax — flat estimate until TaxJar / Stripe Tax. */
export const ESTIMATED_TAX_RATE = 0.0725;

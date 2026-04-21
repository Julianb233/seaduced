"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  bundlesBySlug,
  ESTIMATED_TAX_RATE,
  FLAT_SHIPPING_CENTS,
  FREE_SHIPPING_THRESHOLD_CENTS,
  PROMO_CODES,
  type BundleSlug,
} from "./bundles";

export interface CartLine {
  slug: BundleSlug;
  qty: number;
}

interface CartState {
  lines: CartLine[];
  promoCode: string | null;
  /** true after the store has rehydrated from localStorage. Prevents SSR/client flicker. */
  hydrated: boolean;
  setHydrated: (v: boolean) => void;
  addItem: (slug: BundleSlug, qty?: number) => void;
  removeItem: (slug: BundleSlug) => void;
  updateQty: (slug: BundleSlug, qty: number) => void;
  applyPromo: (code: string) => { ok: boolean; message: string };
  clearPromo: () => void;
  clear: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      promoCode: null,
      hydrated: false,
      setHydrated: (v) => set({ hydrated: v }),
      addItem: (slug, qty = 1) =>
        set((state) => {
          const existing = state.lines.find((l) => l.slug === slug);
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                l.slug === slug ? { ...l, qty: l.qty + qty } : l
              ),
            };
          }
          return { lines: [...state.lines, { slug, qty }] };
        }),
      removeItem: (slug) =>
        set((state) => ({ lines: state.lines.filter((l) => l.slug !== slug) })),
      updateQty: (slug, qty) =>
        set((state) => {
          if (qty <= 0) {
            return { lines: state.lines.filter((l) => l.slug !== slug) };
          }
          return {
            lines: state.lines.map((l) =>
              l.slug === slug ? { ...l, qty } : l
            ),
          };
        }),
      applyPromo: (code) => {
        const upper = code.trim().toUpperCase();
        if (PROMO_CODES[upper]) {
          set({ promoCode: upper });
          return { ok: true, message: `Applied: ${PROMO_CODES[upper].label}` };
        }
        return { ok: false, message: `"${code}" isn't a valid code.` };
      },
      clearPromo: () => set({ promoCode: null }),
      clear: () => set({ lines: [], promoCode: null }),
    }),
    {
      name: "seaduced-cart",
      storage: createJSONStorage(() => (typeof window !== "undefined" ? localStorage : (undefined as unknown as Storage))),
      partialize: (state) => ({ lines: state.lines, promoCode: state.promoCode }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);

// -------- Selectors (pure, safe to call in render) --------

export interface CartSummary {
  itemCount: number;
  /** All numbers are in **cents** to avoid float math until presentation. */
  subtotalCents: number;
  discountCents: number;
  shippingCents: number;
  taxCents: number;
  totalCents: number;
  freeShippingRemainingCents: number;
  promoLabel: string | null;
}

export function summarizeCart(
  lines: CartLine[],
  promoCode: string | null
): CartSummary {
  const subtotalCents = lines.reduce((sum, line) => {
    const bundle = bundlesBySlug[line.slug];
    if (!bundle) return sum;
    return sum + bundle.price * 100 * line.qty;
  }, 0);

  const itemCount = lines.reduce((sum, line) => sum + line.qty, 0);

  let discountCents = 0;
  let promoLabel: string | null = null;
  if (promoCode && PROMO_CODES[promoCode]) {
    discountCents = Math.round((subtotalCents * PROMO_CODES[promoCode].percentOff) / 100);
    promoLabel = PROMO_CODES[promoCode].label;
  }

  const discountedSubtotal = Math.max(0, subtotalCents - discountCents);
  const shippingCents =
    itemCount === 0
      ? 0
      : discountedSubtotal >= FREE_SHIPPING_THRESHOLD_CENTS
      ? 0
      : FLAT_SHIPPING_CENTS;

  const taxCents = Math.round(discountedSubtotal * ESTIMATED_TAX_RATE);
  const totalCents = discountedSubtotal + shippingCents + taxCents;
  const freeShippingRemainingCents = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD_CENTS - discountedSubtotal
  );

  return {
    itemCount,
    subtotalCents,
    discountCents,
    shippingCents,
    taxCents,
    totalCents,
    freeShippingRemainingCents,
    promoLabel,
  };
}

export function formatMoney(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

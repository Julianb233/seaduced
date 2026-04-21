"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, Tag, ArrowRight, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useCart, summarizeCart, formatMoney } from "@/lib/cart";
import { bundlesBySlug, FREE_SHIPPING_THRESHOLD_CENTS } from "@/lib/bundles";
import { BundleComposite } from "./BundleComposite";

export function CartView() {
  const lines = useCart((s) => s.lines);
  const promoCode = useCart((s) => s.promoCode);
  const updateQty = useCart((s) => s.updateQty);
  const removeItem = useCart((s) => s.removeItem);
  const applyPromo = useCart((s) => s.applyPromo);
  const clearPromo = useCart((s) => s.clearPromo);
  const hydrated = useCart((s) => s.hydrated);
  const [promoInput, setPromoInput] = useState("");

  const summary = summarizeCart(lines, promoCode);
  const progressPct = Math.min(
    100,
    Math.round(((FREE_SHIPPING_THRESHOLD_CENTS - summary.freeShippingRemainingCents) / FREE_SHIPPING_THRESHOLD_CENTS) * 100)
  );

  // Avoid server/client flicker: render nothing meaningful until hydrated.
  if (!hydrated) {
    return (
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-64 flex items-center justify-center text-[#263747]/50 font-mono text-xs tracking-widest uppercase">
          Loading cart...
        </div>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex w-20 h-20 rounded-full bg-white/60 items-center justify-center mb-6">
          <ShoppingBag className="w-9 h-9 text-[#325360]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[#263747] tracking-tight">
          Your ritual is empty.
        </h1>
        <p className="mt-3 text-[#263747]/70 max-w-md mx-auto">
          Pick the bottle that fits your routine — a Single to start, a 3-Pack for the drawer,
          the Wave 6-Pack for the long haul, or the Gift Set wrapped in linen.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#AD9952] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-shadow"
        >
          Start here &rarr;
        </Link>
      </div>
    );
  }

  function handleApplyPromo() {
    const res = applyPromo(promoInput);
    if (res.ok) {
      toast.success(res.message);
      setPromoInput("");
    } else {
      toast.error(res.message);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="mb-8">
        <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70">
          The cart
        </span>
        <h1 className="mt-2 text-4xl md:text-5xl font-black text-[#263747] tracking-tight">
          Your ritual.
        </h1>
      </div>

      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8">
        <div className="space-y-4">
          {/* Free shipping progress */}
          <div className="bg-white rounded-2xl p-5 border border-[#263747]/10 shadow-sm">
            {summary.freeShippingRemainingCents > 0 ? (
              <p className="text-sm text-[#263747]">
                Spend{" "}
                <span className="font-black text-[#AD9952]">
                  {formatMoney(summary.freeShippingRemainingCents)}
                </span>{" "}
                more for free US shipping.
              </p>
            ) : (
              <p className="text-sm font-bold text-emerald-700">
                You qualify for free US shipping.
              </p>
            )}
            <div className="mt-3 h-2 bg-[#AACAD1]/40 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#AD9952] to-[#6793A0]"
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </div>
          </div>

          <AnimatePresence initial={false}>
            {lines.map((line) => {
              const bundle = bundlesBySlug[line.slug];
              if (!bundle) return null;
              return (
                <motion.div
                  key={line.slug}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white rounded-2xl p-4 md:p-5 border border-[#263747]/10 shadow-sm flex gap-4"
                >
                  <Link
                    href={`/shop/${bundle.slug}`}
                    className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl bg-gradient-to-br from-[#AACAD1]/50 to-[#FDF8F0]/40 flex-shrink-0 overflow-hidden"
                  >
                    <BundleComposite visual={bundle.visual} size="sm" />
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <Link
                          href={`/shop/${bundle.slug}`}
                          className="font-black text-base md:text-lg text-[#263747] hover:underline block"
                        >
                          {bundle.name}
                        </Link>
                        <p className="font-mono text-[10px] tracking-widest uppercase text-[#263747]/50 mt-0.5">
                          {bundle.unitCount}x 5 oz bottle{bundle.unitCount > 1 ? "s" : ""} &bull; ${bundle.price} each
                        </p>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${bundle.name}`}
                        onClick={() => {
                          removeItem(line.slug);
                          toast(`Removed ${bundle.name}`);
                        }}
                        className="text-[#263747]/40 hover:text-red-500 transition-colors flex-shrink-0 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-0.5 border border-[#263747]/15 rounded-full overflow-hidden">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQty(line.slug, line.qty - 1)}
                          className="w-9 h-9 flex items-center justify-center hover:bg-[#263747]/5 text-[#263747]"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-9 text-center text-sm font-bold text-[#263747]">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQty(line.slug, line.qty + 1)}
                          className="w-9 h-9 flex items-center justify-center hover:bg-[#263747]/5 text-[#263747]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="font-black text-lg text-[#263747]">
                        ${bundle.price * line.qty}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          <div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-[#325360] hover:text-[#AD9952] transition-colors"
            >
              &larr; Continue shopping
            </Link>
          </div>
        </div>

        {/* Summary rail */}
        <aside className="h-fit lg:sticky lg:top-28 bg-white rounded-2xl p-6 border border-[#263747]/10 shadow-lg shadow-[#263747]/5">
          <h2 className="font-black text-xl text-[#263747]">Order summary</h2>

          {/* Promo */}
          <div className="mt-5">
            <label
              htmlFor="promo"
              className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#263747]/60 flex items-center gap-1.5"
            >
              <Tag className="w-3 h-3" /> Promo code
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="promo"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                placeholder="Try SEAWAVE10"
                className="flex-1 border border-[#263747]/15 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#AD9952] bg-[#FDF8F0]/50 text-[#263747] placeholder:text-[#263747]/40"
              />
              <button
                type="button"
                onClick={handleApplyPromo}
                className="px-4 py-2 rounded-full bg-[#263747] text-white font-bold text-xs hover:bg-[#325360] transition-colors"
              >
                Apply
              </button>
            </div>
            {promoCode ? (
              <div className="mt-2 flex items-center justify-between gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5">
                <span className="text-xs font-bold text-emerald-700">
                  {summary.promoLabel}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    clearPromo();
                    toast("Promo removed");
                  }}
                  className="text-[10px] font-mono tracking-widest uppercase text-emerald-700 hover:underline"
                >
                  Remove
                </button>
              </div>
            ) : null}
          </div>

          {/* Totals */}
          <dl className="mt-5 space-y-2 text-sm">
            <div className="flex justify-between text-[#263747]/70">
              <dt>Subtotal</dt>
              <dd>{formatMoney(summary.subtotalCents)}</dd>
            </div>
            {summary.discountCents > 0 ? (
              <div className="flex justify-between text-emerald-700">
                <dt>Discount</dt>
                <dd>-{formatMoney(summary.discountCents)}</dd>
              </div>
            ) : null}
            <div className="flex justify-between text-[#263747]/70">
              <dt>Estimated tax</dt>
              <dd>{formatMoney(summary.taxCents)}</dd>
            </div>
            <div className="flex justify-between text-[#263747]/70">
              <dt>Shipping</dt>
              <dd>
                {summary.shippingCents === 0 ? (
                  <span className="font-bold text-emerald-700">Free</span>
                ) : (
                  formatMoney(summary.shippingCents)
                )}
              </dd>
            </div>
            <p className="text-[10px] text-[#263747]/40 font-mono leading-relaxed pt-1">
              {/* TODO(carrier): replace flat shipping + estimated tax with real calc. */}
              Tax + shipping are estimates. Final totals calculate at checkout.
            </p>
            <div className="flex justify-between pt-3 border-t border-[#263747]/10 font-black text-lg text-[#263747]">
              <dt>Total</dt>
              <dd>{formatMoney(summary.totalCents)}</dd>
            </div>
          </dl>

          <Link
            href="/checkout"
            className="mt-6 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#AD9952] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-shadow"
          >
            Checkout
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="mt-3 text-center text-[10px] font-mono tracking-widest uppercase text-[#263747]/40">
            Discreet packaging &bull; Secure checkout
          </p>
        </aside>
      </div>
    </div>
  );
}

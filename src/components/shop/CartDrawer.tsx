"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart, summarizeCart, formatMoney } from "@/lib/cart";
import { bundlesBySlug } from "@/lib/bundles";
import { BundleComposite } from "./BundleComposite";

export function CartTrigger({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);
  const lines = useCart((s) => s.lines);
  const hydrated = useCart((s) => s.hydrated);
  const count = hydrated ? lines.reduce((sum, l) => sum + l.qty, 0) : 0;

  return (
    <>
      <button
        type="button"
        aria-label={`Open cart (${count} items)`}
        onClick={() => setOpen(true)}
        className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
          variant === "dark"
            ? "hover:bg-white/10 text-white"
            : "hover:bg-black/5 text-[#263747]"
        }`}
      >
        <ShoppingBag className="w-5 h-5" />
        {count > 0 ? (
          <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#AD9952] text-[10px] font-bold text-white flex items-center justify-center shadow-sm">
            {count}
          </span>
        ) : null}
      </button>
      <CartDrawer open={open} onOpenChange={setOpen} />
    </>
  );
}

export function CartDrawer({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const lines = useCart((s) => s.lines);
  const promoCode = useCart((s) => s.promoCode);
  const updateQty = useCart((s) => s.updateQty);
  const removeItem = useCart((s) => s.removeItem);
  const summary = summarizeCart(lines, promoCode);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-[#263747]/50 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />
          <motion.aside
            role="dialog"
            aria-label="Shopping cart"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed right-0 top-0 bottom-0 z-[91] w-full max-w-md bg-[#FDF8F0] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#263747]/10">
              <h2 className="font-black text-lg tracking-tight text-[#263747]">
                Your ritual
              </h2>
              <button
                type="button"
                aria-label="Close cart"
                onClick={() => onOpenChange(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#263747]/5 text-[#263747]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {lines.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#AACAD1]/50 flex items-center justify-center mb-4">
                    <ShoppingBag className="w-7 h-7 text-[#325360]" />
                  </div>
                  <p className="text-[#263747] font-bold text-lg">Your ritual is empty.</p>
                  <p className="text-[#263747]/60 text-sm mt-1 mb-5">Start with one bottle.</p>
                  <Link
                    href="/shop"
                    onClick={() => onOpenChange(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#AD9952] text-white font-semibold text-sm hover:shadow-lg transition-shadow"
                  >
                    Shop bundles
                  </Link>
                </div>
              ) : (
                <ul className="space-y-4">
                  {lines.map((line) => {
                    const bundle = bundlesBySlug[line.slug];
                    if (!bundle) return null;
                    return (
                      <li
                        key={line.slug}
                        className="flex gap-4 p-3 rounded-2xl bg-white border border-[#263747]/10"
                      >
                        <div className="relative w-20 h-20 rounded-xl bg-gradient-to-br from-[#AACAD1]/50 to-[#FDF8F0]/40 flex-shrink-0 overflow-hidden">
                          <BundleComposite visual={bundle.visual} size="sm" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <Link
                                href={`/shop/${bundle.slug}`}
                                onClick={() => onOpenChange(false)}
                                className="font-bold text-sm text-[#263747] hover:underline truncate block"
                              >
                                {bundle.name}
                              </Link>
                              <p className="font-mono text-[10px] tracking-widest uppercase text-[#263747]/50 mt-0.5">
                                {bundle.unitCount}x 5 oz
                              </p>
                            </div>
                            <button
                              type="button"
                              aria-label={`Remove ${bundle.name}`}
                              onClick={() => removeItem(line.slug)}
                              className="text-[#263747]/40 hover:text-red-500 transition-colors flex-shrink-0"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="mt-2 flex items-center justify-between gap-2">
                            <div className="inline-flex items-center gap-0.5 border border-[#263747]/15 rounded-full overflow-hidden">
                              <button
                                type="button"
                                aria-label="Decrease quantity"
                                onClick={() => updateQty(line.slug, line.qty - 1)}
                                className="w-7 h-7 flex items-center justify-center hover:bg-[#263747]/5 text-[#263747]"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-7 text-center text-sm font-bold text-[#263747]">
                                {line.qty}
                              </span>
                              <button
                                type="button"
                                aria-label="Increase quantity"
                                onClick={() => updateQty(line.slug, line.qty + 1)}
                                className="w-7 h-7 flex items-center justify-center hover:bg-[#263747]/5 text-[#263747]"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <span className="font-black text-sm text-[#263747]">
                              ${bundle.price * line.qty}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {lines.length > 0 ? (
              <div className="border-t border-[#263747]/10 p-6 space-y-3 bg-white">
                {summary.freeShippingRemainingCents > 0 ? (
                  <p className="text-xs text-[#325360] font-medium">
                    Spend {formatMoney(summary.freeShippingRemainingCents)} more for free US shipping.
                  </p>
                ) : (
                  <p className="text-xs text-emerald-700 font-medium">
                    You qualify for free US shipping.
                  </p>
                )}
                <div className="flex justify-between text-sm text-[#263747]/70">
                  <span>Subtotal</span>
                  <span>{formatMoney(summary.subtotalCents)}</span>
                </div>
                {summary.discountCents > 0 ? (
                  <div className="flex justify-between text-sm text-emerald-700">
                    <span>Discount ({summary.promoLabel})</span>
                    <span>-{formatMoney(summary.discountCents)}</span>
                  </div>
                ) : null}
                <div className="flex justify-between text-base font-black text-[#263747]">
                  <span>Total</span>
                  <span>{formatMoney(summary.totalCents)}</span>
                </div>
                <div className="pt-2 grid grid-cols-2 gap-2">
                  <Link
                    href="/cart"
                    onClick={() => onOpenChange(false)}
                    className="text-center px-4 py-3 rounded-full border border-[#263747]/20 text-[#263747] font-semibold text-sm hover:bg-[#263747]/5 transition-colors"
                  >
                    View cart
                  </Link>
                  <Link
                    href="/checkout"
                    onClick={() => onOpenChange(false)}
                    className="text-center px-4 py-3 rounded-full bg-[#AD9952] text-white font-semibold text-sm hover:shadow-lg transition-shadow"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            ) : null}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

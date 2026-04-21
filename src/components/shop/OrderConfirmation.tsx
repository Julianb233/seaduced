"use client";

import { useEffect, useState, startTransition } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Package, Truck, Home, Instagram, FileText } from "lucide-react";
import { bundlesBySlug } from "@/lib/bundles";
import { formatMoney, type CartLine } from "@/lib/cart";
import type { CartSummary } from "@/lib/cart";
import { BundleComposite } from "./BundleComposite";

// Shape written to localStorage by CheckoutFlow.
interface StoredOrder {
  id: string;
  createdAt: string;
  email: string;
  shipping: {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    postalCode: string;
    phone?: string;
    discreetPackaging?: boolean;
  };
  lines: CartLine[];
  promoCode: string | null;
  summary: CartSummary;
  mocked?: boolean;
}

const TIMELINE = [
  { key: "confirmed", label: "Confirmed", icon: Check },
  { key: "packed", label: "Packed", icon: Package },
  { key: "shipped", label: "Shipped", icon: Truck },
  { key: "delivered", label: "Delivered", icon: Home },
];

export function OrderConfirmation({ orderId }: { orderId: string }) {
  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem(`seaduced-order-${orderId}`);
    let parsed: StoredOrder | null = null;
    if (raw) {
      try {
        parsed = JSON.parse(raw) as StoredOrder;
      } catch {
        parsed = null;
      }
    }
    startTransition(() => {
      setOrder(parsed);
      setLoaded(true);
    });
  }, [orderId]);

  if (!loaded) {
    return (
      <div className="max-w-4xl mx-auto px-6 text-center text-[#263747]/50 font-mono text-xs tracking-widest uppercase py-16">
        Loading your order...
      </div>
    );
  }

  if (!order) {
    return (
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-black text-[#263747]">
          We can&rsquo;t find order #{orderId}.
        </h1>
        <p className="mt-3 text-[#263747]/70 max-w-md mx-auto">
          Order details are stored locally in your browser until our backend is wired up.
          If you placed this order on another device, check there. Otherwise,{" "}
          <Link href="/contact" className="underline text-[#AD9952]">
            contact us
          </Link>
          .
        </p>
      </div>
    );
  }

  const firstName = order.shipping.firstName || "friend";
  const estimatedDelivery = new Date(order.createdAt);
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 7);
  const estStr = estimatedDelivery.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className="text-center"
      >
        <div className="inline-flex w-16 h-16 rounded-full bg-emerald-100 items-center justify-center">
          <Check className="w-8 h-8 text-emerald-700" strokeWidth={3} />
        </div>
        <h1 className="mt-5 text-4xl md:text-5xl font-black text-[#263747] tracking-tight">
          Thank you, {firstName}.
        </h1>
        <p className="mt-3 text-[#263747]/70 max-w-xl mx-auto">
          Your ritual is on the way. We&rsquo;ve sent a confirmation to{" "}
          <span className="font-bold text-[#263747]">{order.email}</span>.
        </p>
        <p className="mt-2 font-mono text-xs tracking-widest uppercase text-[#325360]">
          Order #{order.id}
        </p>
        {order.mocked ? (
          <p className="mt-2 inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[10px] font-mono tracking-widest uppercase">
            Test mode — no card charged
          </p>
        ) : null}
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 bg-white rounded-2xl p-6 md:p-8 border border-[#263747]/10"
      >
        <h2 className="font-black text-lg text-[#263747] mb-5">What happens next</h2>
        <ol className="flex items-start justify-between gap-2 relative">
          <div
            aria-hidden
            className="absolute top-5 left-6 right-6 h-px bg-[#263747]/10"
          />
          {TIMELINE.map((step, i) => {
            const active = i === 0;
            const Icon = step.icon;
            return (
              <li key={step.key} className="relative flex flex-col items-center flex-1 text-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    active
                      ? "bg-[#AD9952] text-white"
                      : "bg-white border border-[#263747]/15 text-[#263747]/40"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span
                  className={`mt-2 font-mono text-[10px] tracking-widest uppercase ${
                    active ? "text-[#263747]" : "text-[#263747]/40"
                  }`}
                >
                  {step.label}
                </span>
              </li>
            );
          })}
        </ol>
        <p className="mt-6 text-center text-sm text-[#263747]/70">
          Estimated delivery: <span className="font-bold text-[#263747]">{estStr}</span>
        </p>
      </motion.div>

      {/* Summary + shipping */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 grid md:grid-cols-[1.4fr_1fr] gap-6"
      >
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#263747]/10">
          <h2 className="font-black text-lg text-[#263747]">Your items</h2>
          <ul className="mt-5 space-y-4">
            {order.lines.map((line) => {
              const b = bundlesBySlug[line.slug];
              if (!b) return null;
              return (
                <li key={line.slug} className="flex gap-4 items-center">
                  <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#AACAD1]/50 to-[#FDF8F0]/40 overflow-hidden flex-shrink-0">
                    <BundleComposite visual={b.visual} size="sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/shop/${b.slug}`}
                      className="font-bold text-sm text-[#263747] hover:underline truncate block"
                    >
                      {b.name}
                    </Link>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-[#263747]/50">
                      Qty {line.qty}
                    </p>
                  </div>
                  <span className="font-bold text-sm text-[#263747]">
                    ${b.price * line.qty}
                  </span>
                </li>
              );
            })}
          </ul>

          <dl className="mt-6 pt-5 border-t border-[#263747]/10 space-y-2 text-sm">
            <div className="flex justify-between text-[#263747]/70">
              <dt>Subtotal</dt>
              <dd>{formatMoney(order.summary.subtotalCents)}</dd>
            </div>
            {order.summary.discountCents > 0 ? (
              <div className="flex justify-between text-emerald-700">
                <dt>Discount</dt>
                <dd>-{formatMoney(order.summary.discountCents)}</dd>
              </div>
            ) : null}
            <div className="flex justify-between text-[#263747]/70">
              <dt>Tax</dt>
              <dd>{formatMoney(order.summary.taxCents)}</dd>
            </div>
            <div className="flex justify-between text-[#263747]/70">
              <dt>Shipping</dt>
              <dd>
                {order.summary.shippingCents === 0
                  ? "Free"
                  : formatMoney(order.summary.shippingCents)}
              </dd>
            </div>
            <div className="flex justify-between pt-2 border-t border-[#263747]/10 font-black text-base text-[#263747]">
              <dt>Total</dt>
              <dd>{formatMoney(order.summary.totalCents)}</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-[#263747]/10">
            <h3 className="font-black text-sm text-[#263747]">Shipping to</h3>
            <address className="mt-2 not-italic text-sm text-[#263747]/75 leading-relaxed">
              {order.shipping.firstName} {order.shipping.lastName}
              <br />
              {order.shipping.address1}
              {order.shipping.address2 ? (
                <>
                  <br />
                  {order.shipping.address2}
                </>
              ) : null}
              <br />
              {order.shipping.city}, {order.shipping.state} {order.shipping.postalCode}
            </address>
            {order.shipping.discreetPackaging ? (
              <p className="mt-3 text-xs font-mono tracking-widest uppercase text-[#325360]">
                Discreet packaging selected
              </p>
            ) : null}
          </div>

          <div className="bg-gradient-to-br from-[#263747] to-[#325360] text-white rounded-2xl p-6">
            <h3 className="font-black text-sm">Stay in the wave</h3>
            <p className="mt-1 text-sm text-white/70">
              Follow along for early drops and rituals.
            </p>
            <a
              href="https://instagram.com/seaduced"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#AD9952] text-white text-xs font-bold hover:shadow-lg transition-shadow"
            >
              <Instagram className="w-4 h-4" />
              Follow @seaduced
            </a>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-sm">
        <Link
          href="/returns"
          className="inline-flex items-center gap-2 text-[#325360] hover:text-[#AD9952] font-mono text-xs tracking-widest uppercase"
        >
          <FileText className="w-3.5 h-3.5" />
          Return policy
        </Link>
        <Link
          href="/account/orders"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#325360] hover:text-[#AD9952]"
        >
          View all orders &rarr;
        </Link>
      </div>

      <p className="mt-6 text-center text-[10px] font-mono tracking-widest uppercase text-[#263747]/40">
        Tracking link arrives by email once your order ships.
      </p>
    </div>
  );
}

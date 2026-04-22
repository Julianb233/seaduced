"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Check, ArrowRight, Lock, Package } from "lucide-react";
import { useCart, summarizeCart, formatMoney } from "@/lib/cart";
import { bundlesBySlug } from "@/lib/bundles";
import { US_STATES } from "@/lib/us-states";
import { STRIPE_CONFIGURED } from "@/lib/stripe";
import { BundleComposite } from "./BundleComposite";

const infoSchema = z.object({
  email: z.string().email("Valid email required"),
  newsletter: z.boolean().optional(),
});
type InfoValues = z.infer<typeof infoSchema>;

const infoDefaults: InfoValues = { email: "", newsletter: true };

const shippingSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  address1: z.string().min(1, "Required"),
  address2: z.string().optional(),
  city: z.string().min(1, "Required"),
  state: z.string().min(2, "Select a state"),
  postalCode: z.string().regex(/^\d{5}(-\d{4})?$/, "ZIP like 92130 or 92130-1234"),
  phone: z.string().optional(),
  discreetPackaging: z.boolean(),
});
type ShippingValues = z.infer<typeof shippingSchema>;

const shippingDefaults: ShippingValues = {
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  postalCode: "",
  phone: "",
  discreetPackaging: true,
};

type Step = 1 | 2 | 3;

const STEPS: Array<{ key: Step; label: string }> = [
  { key: 1, label: "Info" },
  { key: 2, label: "Shipping" },
  { key: 3, label: "Payment" },
];

export function CheckoutFlow() {
  const router = useRouter();
  const lines = useCart((s) => s.lines);
  const promoCode = useCart((s) => s.promoCode);
  const clearCart = useCart((s) => s.clear);
  const hydrated = useCart((s) => s.hydrated);
  const summary = summarizeCart(lines, promoCode);

  const [step, setStep] = useState<Step>(1);
  const [info, setInfo] = useState<InfoValues | null>(null);
  const [shipping, setShipping] = useState<ShippingValues | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (!hydrated) {
    return (
      <div className="max-w-5xl mx-auto px-6 text-center text-[#263747]/50 font-mono text-xs tracking-widest uppercase py-16">
        Loading checkout...
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-black text-[#263747]">
          Your cart is empty.
        </h1>
        <p className="mt-3 text-[#263747]/70">
          Add a bottle before checking out.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#AD9952] text-white font-bold text-sm"
        >
          Shop bundles
        </Link>
      </div>
    );
  }

  async function handlePlaceOrder() {
    if (!info || !shipping) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/checkout/create-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: info.email,
          lines,
          amountCents: summary.totalCents,
          promoCode,
        }),
      });
      if (!res.ok) throw new Error("Failed to create intent");
      const data = (await res.json()) as {
        clientSecret: string;
        orderId: string;
        mocked?: boolean;
      };

      // Persist order snapshot to localStorage for the confirmation page.
      // TODO(backend): move order records server-side once auth + DB exist.
      if (typeof window !== "undefined") {
        const order = {
          id: data.orderId,
          createdAt: new Date().toISOString(),
          email: info.email,
          shipping,
          lines,
          promoCode,
          summary,
          mocked: data.mocked ?? false,
        };
        const existing = JSON.parse(
          localStorage.getItem("seaduced-orders") ?? "[]"
        ) as unknown[];
        localStorage.setItem(
          "seaduced-orders",
          JSON.stringify([order, ...existing].slice(0, 20))
        );
        localStorage.setItem(`seaduced-order-${data.orderId}`, JSON.stringify(order));
      }
      clearCart();
      toast.success("Order placed — redirecting...");
      router.push(`/order/${data.orderId}`);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="mb-8">
        <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70">
          Checkout
        </span>
        <h1 className="mt-2 text-3xl md:text-5xl font-black text-[#263747] tracking-tight">
          Almost there.
        </h1>
      </div>

      {/* Stepper */}
      <div className="mb-8 flex items-center gap-2 md:gap-4">
        {STEPS.map((s, i) => {
          const state: "done" | "active" | "todo" =
            step > s.key ? "done" : step === s.key ? "active" : "todo";
          return (
            <div key={s.key} className="flex items-center gap-2 md:gap-4 flex-1">
              <div
                className={`flex items-center gap-2 ${
                  state === "todo" ? "opacity-40" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${
                    state === "done"
                      ? "bg-emerald-600 text-white"
                      : state === "active"
                      ? "bg-[#AD9952] text-white"
                      : "bg-white text-[#263747]/40 border border-[#263747]/15"
                  }`}
                >
                  {state === "done" ? <Check className="w-4 h-4" /> : s.key}
                </div>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#263747]/75 hidden sm:block">
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 ? (
                <div className="flex-1 h-px bg-[#263747]/20" />
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8">
        {/* Steps */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <InfoStep
                key="1"
                defaults={info}
                onNext={(values) => {
                  setInfo(values);
                  setStep(2);
                }}
              />
            ) : null}
            {step === 2 ? (
              <ShippingStep
                key="2"
                defaults={shipping}
                onBack={() => setStep(1)}
                onNext={(values) => {
                  setShipping(values);
                  setStep(3);
                }}
              />
            ) : null}
            {step === 3 ? (
              <PaymentStep
                key="3"
                onBack={() => setStep(2)}
                onSubmit={handlePlaceOrder}
                submitting={submitting}
                totalCents={summary.totalCents}
              />
            ) : null}
          </AnimatePresence>
        </div>

        <aside className="h-fit lg:sticky lg:top-28 bg-white rounded-2xl p-6 border border-[#263747]/10 shadow-lg shadow-[#263747]/5">
          <details open className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-black text-lg text-[#263747]">Order summary</span>
              <span className="text-xs font-mono tracking-widest uppercase text-[#263747]/50 group-open:rotate-180 transition-transform">
                &#9662;
              </span>
            </summary>
            <ul className="mt-4 space-y-3">
              {lines.map((line) => {
                const b = bundlesBySlug[line.slug];
                if (!b) return null;
                return (
                  <li key={line.slug} className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-lg bg-gradient-to-br from-[#AACAD1]/50 to-[#FDF8F0]/40 overflow-hidden flex-shrink-0">
                      <BundleComposite visual={b.visual} size="sm" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#263747] truncate">
                        {b.name}
                      </p>
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

            <dl className="mt-5 pt-4 border-t border-[#263747]/10 space-y-2 text-sm">
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
                <dt>Tax (est.)</dt>
                <dd>{formatMoney(summary.taxCents)}</dd>
              </div>
              <div className="flex justify-between text-[#263747]/70">
                <dt>Shipping</dt>
                <dd>
                  {summary.shippingCents === 0
                    ? "Free"
                    : formatMoney(summary.shippingCents)}
                </dd>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#263747]/10 font-black text-base text-[#263747]">
                <dt>Total</dt>
                <dd>{formatMoney(summary.totalCents)}</dd>
              </div>
            </dl>
          </details>

          <p className="mt-5 flex items-center gap-2 text-xs text-[#263747]/55">
            <Lock className="w-3 h-3" />
            {STRIPE_CONFIGURED
              ? "Payment handled by Stripe. We never touch your card."
              : "Stripe not yet configured — checkout runs in test mode."}
          </p>
        </aside>
      </div>
    </div>
  );
}

// ---------- Step 1: Info ----------

function InfoStep({
  defaults,
  onNext,
}: {
  defaults: InfoValues | null;
  onNext: (v: InfoValues) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InfoValues>({
    resolver: zodResolver(infoSchema),
    defaultValues: defaults ?? infoDefaults,
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-6 md:p-8 border border-[#263747]/10"
    >
      <h2 className="font-black text-xl text-[#263747]">Contact</h2>
      <form
        onSubmit={handleSubmit(onNext)}
        className="mt-5 space-y-4"
      >
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            {...register("email")}
            className={inputClass}
            placeholder="you@example.com"
          />
        </Field>

        <label className="flex items-center gap-3 text-sm text-[#263747]/75">
          <input
            type="checkbox"
            {...register("newsletter")}
            className="w-4 h-4 rounded border-[#263747]/20 text-[#AD9952] focus:ring-[#AD9952]"
          />
          Email me early drops, self-care notes, and 10% off my next bottle.
        </label>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#AD9952] text-white font-bold text-sm hover:shadow-lg transition-shadow"
          >
            Continue to shipping <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </motion.section>
  );
}

// ---------- Step 2: Shipping ----------

function ShippingStep({
  defaults,
  onBack,
  onNext,
}: {
  defaults: ShippingValues | null;
  onBack: () => void;
  onNext: (v: ShippingValues) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingValues>({
    resolver: zodResolver(shippingSchema),
    defaultValues: defaults ?? shippingDefaults,
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-6 md:p-8 border border-[#263747]/10"
    >
      <h2 className="font-black text-xl text-[#263747]">Shipping address</h2>
      <form onSubmit={handleSubmit(onNext)} className="mt-5 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="First name" error={errors.firstName?.message}>
            <input
              {...register("firstName")}
              autoComplete="given-name"
              className={inputClass}
            />
          </Field>
          <Field label="Last name" error={errors.lastName?.message}>
            <input
              {...register("lastName")}
              autoComplete="family-name"
              className={inputClass}
            />
          </Field>
        </div>
        <Field label="Address line 1" error={errors.address1?.message}>
          <input
            {...register("address1")}
            autoComplete="address-line1"
            className={inputClass}
            placeholder="123 Sea Breeze Dr"
          />
        </Field>
        <Field label="Address line 2 (optional)">
          <input
            {...register("address2")}
            autoComplete="address-line2"
            className={inputClass}
            placeholder="Apt, suite, etc."
          />
        </Field>
        <div className="grid sm:grid-cols-[1.2fr_0.8fr_1fr] gap-4">
          <Field label="City" error={errors.city?.message}>
            <input
              {...register("city")}
              autoComplete="address-level2"
              className={inputClass}
            />
          </Field>
          <Field label="State" error={errors.state?.message}>
            <select
              {...register("state")}
              autoComplete="address-level1"
              className={inputClass}
              defaultValue=""
            >
              <option value="" disabled>
                Select
              </option>
              {US_STATES.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.name}
                </option>
              ))}
            </select>
          </Field>
          <Field label="ZIP" error={errors.postalCode?.message}>
            <input
              {...register("postalCode")}
              autoComplete="postal-code"
              className={inputClass}
              placeholder="92130"
            />
          </Field>
        </div>
        <Field label="Phone (optional)">
          <input
            type="tel"
            {...register("phone")}
            autoComplete="tel"
            className={inputClass}
            placeholder="For delivery questions"
          />
        </Field>

        <label className="flex items-start gap-3 text-sm text-[#263747]/80 pt-1">
          <input
            type="checkbox"
            {...register("discreetPackaging")}
            defaultChecked
            className="w-4 h-4 mt-0.5 rounded border-[#263747]/20 text-[#AD9952] focus:ring-[#AD9952]"
          />
          <span>
            <span className="inline-flex items-center gap-1.5 font-bold">
              <Package className="w-3.5 h-3.5" /> Discreet, unbranded packaging
            </span>
            <span className="block text-xs text-[#263747]/60 mt-0.5">
              No brand markings outside. Just a plain box and your bottle inside.
            </span>
          </span>
        </label>

        <div className="pt-3 flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="px-5 py-2.5 rounded-full border border-[#263747]/20 text-[#263747] font-bold text-sm hover:bg-[#263747]/5 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#AD9952] text-white font-bold text-sm hover:shadow-lg transition-shadow"
          >
            Continue to payment <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </motion.section>
  );
}

// ---------- Step 3: Payment ----------

function PaymentStep({
  onBack,
  onSubmit,
  submitting,
  totalCents,
}: {
  onBack: () => void;
  onSubmit: () => void;
  submitting: boolean;
  totalCents: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-6 md:p-8 border border-[#263747]/10"
    >
      <h2 className="font-black text-xl text-[#263747]">Payment</h2>

      {STRIPE_CONFIGURED ? (
        <div className="mt-5 space-y-3">
          <p className="text-sm text-[#263747]/70">
            Enter your card below. Payment is processed securely by Stripe.
          </p>
          {/* TODO(stripe): render Stripe Elements here once NEXT_PUBLIC_STRIPE_PK
              is configured. The import exists (@stripe/react-stripe-js) and the
              client loader is `getStripe()` from @/lib/stripe. */}
          <StripeElementsPlaceholder />
        </div>
      ) : (
        <div className="mt-5 p-4 rounded-xl border border-amber-300 bg-amber-50 text-sm text-amber-900">
          <p className="font-bold">Test mode</p>
          <p className="mt-1">
            Stripe keys aren&rsquo;t wired up yet, so this checkout uses a mocked
            PaymentIntent endpoint. You can place the order to preview the
            confirmation flow — no card is charged.
          </p>
        </div>
      )}

      <div className="pt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-2.5 rounded-full border border-[#263747]/20 text-[#263747] font-bold text-sm hover:bg-[#263747]/5 transition-colors"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={submitting}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#263747] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Lock className="w-4 h-4" />
          {submitting
            ? "Placing order..."
            : `Pay ${formatMoney(totalCents)}`}
        </button>
      </div>
    </motion.section>
  );
}

function StripeElementsPlaceholder() {
  // Renders a visual card-input scaffold until real Stripe Elements are wired.
  return (
    <div
      aria-hidden
      className="rounded-xl border border-[#263747]/15 bg-[#FDF8F0]/40 p-4 text-sm text-[#263747]/60"
    >
      <div className="font-mono text-[10px] tracking-widest uppercase text-[#263747]/40 mb-2">
        Card
      </div>
      <div className="h-10 rounded-md bg-white border border-[#263747]/10" />
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="h-10 rounded-md bg-white border border-[#263747]/10" />
        <div className="h-10 rounded-md bg-white border border-[#263747]/10" />
      </div>
      <p className="mt-3 font-mono text-[10px] tracking-widest uppercase text-[#263747]/40">
        Stripe Elements will mount here.
      </p>
    </div>
  );
}

// ---------- Helpers ----------

const inputClass =
  "w-full border border-[#263747]/15 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#AD9952] focus:ring-1 focus:ring-[#AD9952]/30 text-[#263747] placeholder:text-[#263747]/40";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#263747]/60">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
      {error ? (
        <span className="mt-1 block text-xs text-red-600">{error}</span>
      ) : null}
    </label>
  );
}

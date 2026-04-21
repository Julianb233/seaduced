"use client";

import { useState, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Check, Upload, X } from "lucide-react";

const REASONS = [
  "Changed my mind (unopened)",
  "Damaged in transit",
  "Wrong item shipped",
  "Allergic reaction / sensitivity",
  "Other",
];

export function ReturnsForm() {
  const [orderNumber, setOrderNumber] = useState("");
  const [reason, setReason] = useState(REASONS[0]);
  const [message, setMessage] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    setPhotos((prev) => [...prev, ...files].slice(0, 4));
  }

  function removePhoto(idx: number) {
    setPhotos((prev) => prev.filter((_, i) => i !== idx));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!orderNumber.trim()) {
      toast.error("Order number is required");
      return;
    }
    setSubmitting(true);
    // TODO(backend): POST to a real returns endpoint (Zendesk, Gorgias, or a
    // lightweight /api/returns route that emails support + creates a case).
    console.log("[returns] submit", {
      orderNumber,
      reason,
      message,
      photoCount: photos.length,
      photoNames: photos.map((p) => p.name),
    });
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Return request received — we'll be in touch within 1 business day.");
  }

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-8">
        <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70">
          Shipping & Returns
        </span>
        <h1 className="mt-2 text-3xl md:text-5xl font-black text-[#263747] tracking-tight">
          Let&rsquo;s make it right.
        </h1>
        <p className="mt-3 max-w-xl text-[#263747]/70">
          Our 30-day satisfaction guarantee covers unopened bottles and any item
          that arrives damaged. Start a return below and we&rsquo;ll walk you through it.
        </p>
      </div>

      <div className="grid md:grid-cols-[1.2fr_1fr] gap-8">
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#263747]/10">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8"
            >
              <div className="inline-flex w-14 h-14 rounded-full bg-emerald-100 items-center justify-center">
                <Check className="w-6 h-6 text-emerald-700" strokeWidth={3} />
              </div>
              <h2 className="mt-4 font-black text-xl text-[#263747]">
                Return request received.
              </h2>
              <p className="mt-2 text-sm text-[#263747]/70">
                We&rsquo;ll email you with return instructions and a prepaid label (if
                eligible) within 1 business day.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="font-black text-xl text-[#263747]">Initiate a return</h2>

              <label className="block">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#263747]/60">
                  Order number
                </span>
                <input
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="mock_abc123..."
                  className="mt-1.5 w-full border border-[#263747]/15 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#AD9952] focus:ring-1 focus:ring-[#AD9952]/30 text-[#263747] placeholder:text-[#263747]/40"
                />
              </label>

              <label className="block">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#263747]/60">
                  Reason
                </span>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="mt-1.5 w-full border border-[#263747]/15 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#AD9952] focus:ring-1 focus:ring-[#AD9952]/30 text-[#263747]"
                >
                  {REASONS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#263747]/60">
                  Anything else we should know?
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Tell us what happened (optional)"
                  className="mt-1.5 w-full border border-[#263747]/15 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#AD9952] focus:ring-1 focus:ring-[#AD9952]/30 text-[#263747] placeholder:text-[#263747]/40 resize-y"
                />
              </label>

              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#263747]/60">
                  Photos (optional, up to 4)
                </span>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {photos.map((p, i) => (
                    <div
                      key={i}
                      className="relative w-20 h-20 rounded-lg bg-[#263747]/5 border border-[#263747]/10 flex items-center justify-center text-[10px] text-center px-1 text-[#263747]/60"
                    >
                      {p.name.slice(0, 20)}
                      <button
                        type="button"
                        onClick={() => removePhoto(i)}
                        aria-label={`Remove ${p.name}`}
                        className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#263747] text-white flex items-center justify-center"
                      >
                        <X className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  ))}
                  {photos.length < 4 ? (
                    <label className="w-20 h-20 rounded-lg border border-dashed border-[#263747]/30 flex items-center justify-center text-[#263747]/60 cursor-pointer hover:border-[#AD9952] hover:text-[#AD9952] transition-colors">
                      <Upload className="w-5 h-5" />
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        className="sr-only"
                      />
                    </label>
                  ) : null}
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-3 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#AD9952] text-white font-bold text-sm hover:shadow-lg transition-shadow disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit return request"}
              </button>
              <p className="text-[10px] font-mono tracking-widest uppercase text-[#263747]/40">
                {/* TODO(backend): replace console.log with real submission. */}
                Demo mode — submissions log to console until the real endpoint is wired.
              </p>
            </form>
          )}
        </section>

        <aside className="bg-[#AACAD1]/50 rounded-2xl p-6 md:p-8 border border-[#263747]/10 h-fit">
          <h2 className="font-black text-lg text-[#263747]">Return policy</h2>
          <ul className="mt-4 space-y-3 text-sm text-[#263747]/80">
            <PolicyItem>
              <strong>30-day satisfaction guarantee</strong> on unopened bottles. Full refund
              to original payment method.
            </PolicyItem>
            <PolicyItem>
              <strong>Damaged in transit?</strong> Send us a photo of the damaged item and
              we&rsquo;ll ship a replacement at no cost.
            </PolicyItem>
            <PolicyItem>
              <strong>Wrong item shipped?</strong> Free return label + we send the correct
              bundle immediately.
            </PolicyItem>
            <PolicyItem>
              Opened or used bottles are not eligible for refund for hygiene reasons,
              unless the product is defective.
            </PolicyItem>
            <PolicyItem>
              Refunds process within 3-5 business days once we receive your return.
            </PolicyItem>
          </ul>
        </aside>
      </div>
    </div>
  );
}

function PolicyItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="w-5 h-5 rounded-full bg-white text-[#325360] flex items-center justify-center flex-shrink-0 mt-0.5">
        <Check className="w-3 h-3" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

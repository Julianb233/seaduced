"use client";

import { motion } from "framer-motion";
import { Scale } from "lucide-react";

export function LimitationOfLiability() {
  return (
    <section className="relative bg-luxe-cream noise-overlay py-20 md:py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <motion.span
          className="block font-mono text-xs tracking-[0.3em] uppercase text-[#325360] mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Limitation of liability
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-[#263747] tracking-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The boring-but-necessary part, said plainly.
        </motion.h2>

        <motion.div
          className="rounded-2xl bg-white border border-[#263747]/10 p-7 md:p-9 space-y-5 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center gap-3 pb-2 border-b border-[#263747]/10">
            <Scale className="w-5 h-5 text-[#325360]" aria-hidden />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#325360]">
              Plain-English summary
            </span>
          </div>
          <p className="text-[#263747]/85 leading-relaxed">
            Seaduced products are offered {`"as is."`} We stand behind our
            ingredients and craftsmanship, and we want every customer to have
            a great experience. At the same time, we cannot guarantee how any
            specific person will experience the product.
          </p>
          <p className="text-[#263747]/85 leading-relaxed">
            To the extent allowed by law, our total liability to you for any
            claim arising out of your purchase or use of a Seaduced product is
            limited to the amount you paid for that product. We are not liable
            for indirect, incidental, or consequential damages.
          </p>
          <p className="text-[#263747]/85 leading-relaxed">
            This does not limit any rights you have under consumer protection
            laws that cannot be waived. If anything here conflicts with those
            laws, those laws win.
          </p>

          <div className="pt-4 border-t border-[#263747]/10">
            <span className="block font-mono text-xs tracking-[0.2em] uppercase text-[#325360] mb-1">
              Governing law
            </span>
            <p className="text-[#263747]/85 text-sm md:text-base leading-relaxed">
              These terms are governed by the laws of the State of California.
              Any dispute will be handled in California courts, and both sides
              agree to first try to resolve things informally by email before
              going further.
            </p>
          </div>

          {/* TODO: Gina to route this section through her lawyer before launch — this
              is a plain-English placeholder that captures intent, not a finalized legal
              document. See `.planning/SUBPAGES-PLAN.md` §8. */}
        </motion.div>
      </div>
    </section>
  );
}

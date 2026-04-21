"use client";

import { motion } from "framer-motion";
import { Cookie } from "lucide-react";

export function CookieNotice() {
  return (
    <section className="bg-[#FDF8F0] py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row gap-6 md:items-start rounded-2xl bg-white border border-[#263747]/10 px-7 py-7 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="shrink-0 w-12 h-12 rounded-full bg-[#AD9952]/15 flex items-center justify-center">
            <Cookie className="w-6 h-6 text-[#AD9952]" aria-hidden />
          </div>
          <div className="min-w-0">
            <span className="block font-mono text-xs tracking-[0.3em] uppercase text-[#325360] mb-1">
              Cookie notice
            </span>
            <h2
              className="text-2xl md:text-3xl font-serif text-[#263747] tracking-tight mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Plain cookies, not the tracking kind.
            </h2>
            <p className="text-[#263747]/80 leading-relaxed">
              We use a small number of cookies for two reasons:{" "}
              <strong className="text-[#263747]">essentials</strong> (to keep
              you signed in and your cart working) and{" "}
              <strong className="text-[#263747]">aggregate analytics</strong>{" "}
              (to count anonymous visits so we know what pages people find
              useful).
            </p>
            <p className="text-[#263747]/80 leading-relaxed mt-3">
              No third-party ad cookies. No cross-site tracking. You can
              clear cookies any time from your browser settings — the site
              will keep working, you just may need to sign in again.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

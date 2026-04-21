"use client";

import { motion } from "framer-motion";
import { FileText, Trash2, Eye, BellOff } from "lucide-react";

const rights = [
  {
    icon: FileText,
    title: "Access your data",
    body: "Ask for a copy of everything we have on file. We will send it within 30 days (usually much sooner).",
  },
  {
    icon: Trash2,
    title: "Delete your data",
    body: "Request erasure any time. We keep order records that tax law requires; everything else goes.",
  },
  {
    icon: Eye,
    title: "Correct or object",
    body: "If something is wrong, tell us. If you want us to stop a specific use, tell us that too.",
  },
  {
    icon: BellOff,
    title: "Opt out, anytime",
    body: "Unsubscribe from any email with one click. Under CCPA, California residents can opt out of data sales (we do not sell data, but the right stands).",
  },
];

export function YourRights() {
  return (
    <section className=" relative bg-luxe-teal noise-overlay py-20 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.span
          className="block font-mono text-xs tracking-[0.3em] uppercase text-[#325360] mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Your rights
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl font-black text-[#263747] tracking-tight mb-4"
          style={{ fontFamily: "var(--font-sans)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          You are in charge of your data.
        </motion.h2>
        <motion.p
          className="text-[#263747]/75 max-w-2xl text-base md:text-lg mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          GDPR (EU/UK) and CCPA (California) give you specific rights. We
          honor them for every customer, no matter where you live.
        </motion.p>

        <div className="grid gap-5 sm:grid-cols-2">
          {rights.map((r, idx) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                className="rounded-2xl bg-[#FDF8F0]/80 border border-[#263747]/10 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#325360]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#325360]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#263747]">
                    {r.title}
                  </h3>
                </div>
                <p className="text-sm text-[#263747]/80 leading-relaxed">
                  {r.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-10 rounded-2xl border border-[#263747]/15 bg-[#FDF8F0]/60 px-6 py-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-[#263747]/85 text-sm md:text-base">
            To exercise any of these rights, email{" "}
            <a
              href="mailto:privacy@seaducedproducts.com"
              className="font-medium text-[#325360] underline decoration-[#325360]/40 hover:decoration-[#325360] underline-offset-4"
            >
              privacy@seaducedproducts.com
            </a>
            . We will confirm within 48 hours and complete the request within
            30 days.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export function LastUpdatedTag({
  date,
  governingLaw,
  note,
}: {
  date: string;
  governingLaw?: string;
  note?: string;
}) {
  return (
    <section className=" relative bg-luxe-teal noise-overlay py-14 border-t border-[#263747]/10 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-[#263747]/15 bg-[#FDF8F0]/70 backdrop-blur-sm px-6 py-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <span
              className="inline-block w-2 h-2 rounded-full bg-[#325360]"
              aria-hidden
            />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#325360]">
              Last updated
            </span>
            <span className="text-[#263747] text-sm md:text-base font-medium">
              {date}
            </span>
          </div>
          {governingLaw && (
            <div className="flex items-center gap-2 text-sm text-[#263747]/70">
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#325360]">
                Governing law
              </span>
              <span>{governingLaw}</span>
            </div>
          )}
        </motion.div>
        {note && (
          <motion.p
            className="mt-4 text-xs text-[#263747]/60 text-center font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {note}
          </motion.p>
        )}
      </div>
    </section>
  );
}

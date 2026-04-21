"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const allowed = [
  "Learning about and shopping our products",
  "Sharing links to pages with friends",
  "Signing up for the newsletter and managing your account",
];

const notAllowed = [
  "Scraping the site, pricing, or inventory in bulk",
  "Reselling products without a wholesale agreement",
  "Attempting to reverse-engineer, probe, or misuse the site",
];

export function SiteUse() {
  return (
    <section className=" relative bg-luxe-teal noise-overlay py-20 md:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.span
          className="block font-mono text-xs tracking-[0.3em] uppercase text-[#325360] mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Using this site
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl font-black text-[#263747] tracking-tight mb-4"
          style={{ fontFamily: "var(--font-sans)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Use the site the way you would use a thoughtful shop.
        </motion.h2>
        <motion.p
          className="text-[#263747]/75 max-w-2xl text-base md:text-lg mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          By using seaducedproducts.com, you agree to use it for what it is
          for: learning about and buying our products. That is it.
        </motion.p>

        <div className="grid gap-5 md:grid-cols-2">
          <motion.div
            className="rounded-2xl bg-[#FDF8F0]/80 border border-[#263747]/10 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-[#325360] mb-4">
              You can
            </h3>
            <ul className="space-y-3">
              {allowed.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check
                    className="w-4 h-4 text-[#325360] mt-1 shrink-0"
                    aria-hidden
                  />
                  <span className="text-[#263747]/85 text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="rounded-2xl bg-[#FDF8F0]/80 border border-[#263747]/10 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-[#AD9952] mb-4">
              Please do not
            </h3>
            <ul className="space-y-3">
              {notAllowed.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#AD9952] mt-2.5 shrink-0"
                    aria-hidden
                  />
                  <span className="text-[#263747]/85 text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { bundles, type BundleCategory } from "@/lib/bundles";
import { BundleComposite } from "./BundleComposite";
import { AddToCartButton } from "./AddToCartButton";
import { ArrowUpRight } from "lucide-react";

type FilterKey = "all" | BundleCategory;

const FILTERS: Array<{ key: FilterKey; label: string }> = [
  { key: "all", label: "All" },
  { key: "starter", label: "Starter" },
  { key: "value", label: "Value" },
  { key: "gift", label: "Gift" },
];

export function ShopIndex() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const visible = useMemo(() => {
    if (filter === "all") return bundles;
    return bundles.filter((b) => b.category === filter);
  }, [filter]);

  return (
    <>
      <section className="relative pt-32 pb-10 md:pt-40 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#AACAD1] via-[#FDF8F0]/40 to-[#AACAD1]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70"
          >
            The Shop
          </motion.span>
          <div className="overflow-hidden mt-3">
            <motion.h1
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-4xl md:text-6xl font-black text-[#263747] tracking-tight"
            >
              One bottle. <span className="italic text-[#325360]">Four ways to stock it.</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-[#263747]/75 max-w-2xl mx-auto leading-relaxed"
          >
            Same 5 oz bottle, same clean sea moss formula. Pick the pack that fits
            your routine, your household, or the person you&rsquo;re gifting.
          </motion.p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  type="button"
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-5 py-2 rounded-full font-mono text-[11px] tracking-[0.2em] uppercase transition-all ${
                    active
                      ? "bg-[#263747] text-white shadow-md"
                      : "bg-white/60 text-[#263747]/70 hover:bg-white"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {visible.map((bundle, i) => {
              const perBottle = (bundle.price / bundle.unitCount).toFixed(2);
              return (
                <motion.article
                  layout
                  key={bundle.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className={`relative group flex flex-col bg-white rounded-3xl overflow-hidden border-2 shadow-xl shadow-[#263747]/10 ${
                    bundle.featured ? "border-[#AD9952]/70" : "border-[#263747]/10"
                  }`}
                >
                  {bundle.featured ? (
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#AD9952] text-white font-mono text-[10px] tracking-[0.25em] uppercase shadow-md shadow-[#AD9952]/40">
                      Best Value
                    </div>
                  ) : null}

                  <Link
                    href={`/shop/${bundle.slug}`}
                    className="relative aspect-[4/3] bg-gradient-to-br from-[#AACAD1]/50 via-[#FDF8F0]/40 to-[#6793A0]/25 border-b border-[#263747]/5 block"
                  >
                    <BundleComposite visual={bundle.visual} size="md" />
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#263747] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>

                  <div className="flex flex-col flex-1 p-5 md:p-6 gap-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#AD9952]">
                        {bundle.tagline}
                      </span>
                      {bundle.save ? (
                        <span className="font-mono text-[10px] tracking-widest uppercase text-[#325360] bg-[#AACAD1]/50 px-2 py-1 rounded-full">
                          {bundle.save}
                        </span>
                      ) : null}
                    </div>

                    <Link href={`/shop/${bundle.slug}`}>
                      <h3 className="text-xl md:text-2xl font-black text-[#263747] tracking-tight hover:text-[#AD9952] transition-colors">
                        {bundle.name}
                      </h3>
                    </Link>

                    <p className="text-xs font-mono tracking-wide uppercase text-[#263747]/55">
                      {bundle.unitCount}x 5 oz bottle{bundle.unitCount > 1 ? "s" : ""}
                    </p>

                    <p className="text-sm text-[#263747]/75 leading-relaxed">
                      {bundle.shortDescription}
                    </p>

                    <div className="flex items-baseline gap-2 mt-auto pt-2">
                      <span className="text-3xl md:text-4xl font-black text-[#263747] tracking-tight">
                        ${bundle.price}
                      </span>
                      {bundle.compareAtPrice ? (
                        <span className="font-mono text-xs text-[#263747]/40 line-through">
                          ${bundle.compareAtPrice}
                        </span>
                      ) : null}
                      {bundle.unitCount > 1 ? (
                        <span className="font-mono text-[10px] tracking-widest uppercase text-[#263747]/45 ml-auto">
                          ${perBottle} / bottle
                        </span>
                      ) : null}
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <Link
                        href={`/shop/${bundle.slug}`}
                        className="text-center px-4 py-3 rounded-full border border-[#263747]/20 text-[#263747] font-semibold text-xs hover:bg-[#263747]/5 transition-colors"
                      >
                        Details
                      </Link>
                      <AddToCartButton
                        slug={bundle.slug}
                        variant={bundle.featured ? "primary" : "dark"}
                        size="sm"
                        label="Quick add"
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {visible.length === 0 ? (
            <p className="text-center text-[#263747]/60 py-24 font-mono text-sm tracking-widest uppercase">
              No bundles in this filter yet.
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}

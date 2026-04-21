"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Check, Plus, Minus, ShoppingBag } from "lucide-react";
import { bundles, type Bundle } from "@/lib/bundles";
import { BundleComposite } from "./BundleComposite";
import { AddToCartButton } from "./AddToCartButton";

export function BundleDetail({ bundle }: { bundle: Bundle }) {
  const [qty, setQty] = useState(1);
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  useEffect(() => {
    function onScroll() {
      setShowSticky(window.scrollY > 520);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const related = bundles.filter((b) => b.slug !== bundle.slug);
  const perBottle = (bundle.price / bundle.unitCount).toFixed(2);

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: `Seaduced — ${bundle.name}`,
    image: bundle.image,
    description: bundle.shortDescription,
    brand: { "@type": "Brand", name: "Seaduced" },
    sku: bundle.slug,
    offers: {
      "@type": "Offer",
      url: `https://seaducedproducts.com/shop/${bundle.slug}`,
      priceCurrency: "USD",
      price: bundle.price,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative pt-32 md:pt-36 pb-16 overflow-hidden noise-overlay"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#AACAD1] via-[#FDF8F0]/40 to-[#AACAD1]" />
        <motion.div
          className="absolute top-24 left-[8%] w-72 h-72 rounded-full bg-[#6793A0]/25 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -25, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-[10%] w-96 h-96 rounded-full bg-[#AD9952]/15 blur-3xl"
          animate={{ x: [0, -35, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <nav className="mb-6 flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-[#325360]/70">
            <Link href="/shop" className="hover:text-[#AD9952]">
              Shop
            </Link>
            <span>/</span>
            <span className="text-[#263747]">{bundle.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              style={{ y: heroY, scale: heroScale }}
              className="relative mx-auto w-full max-w-md aspect-[3/4]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8F0]/40 via-transparent to-[#6793A0]/20 rounded-[3rem] blur-2xl" />
              <div className="relative w-full h-full">
                <BundleComposite visual={bundle.visual} size="lg" />
              </div>
            </motion.div>

            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70"
              >
                {bundle.tagline}
              </motion.span>
              <div className="overflow-hidden mt-3">
                <motion.h1
                  initial={{ y: 80 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                  className="text-4xl md:text-6xl font-black text-[#263747] tracking-tight leading-[0.95]"
                >
                  {bundle.name}
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-5 text-base md:text-lg text-[#263747]/75 leading-relaxed"
              >
                {bundle.description}
              </motion.p>

              <div className="mt-6 flex items-baseline gap-3 flex-wrap">
                <span className="text-4xl font-black text-[#263747]">
                  ${bundle.price}
                </span>
                {bundle.compareAtPrice ? (
                  <span className="font-mono text-sm text-[#263747]/40 line-through">
                    ${bundle.compareAtPrice}
                  </span>
                ) : null}
                {bundle.save ? (
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#325360] bg-[#AACAD1]/60 px-2 py-1 rounded-full">
                    {bundle.save}
                  </span>
                ) : null}
                {bundle.unitCount > 1 ? (
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#263747]/55">
                    ${perBottle} / bottle
                  </span>
                ) : null}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-1 border border-[#263747]/20 rounded-full overflow-hidden bg-white">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-10 h-11 flex items-center justify-center hover:bg-[#263747]/5 text-[#263747]"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center text-base font-bold text-[#263747]">
                    {qty}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQty(qty + 1)}
                    className="w-10 h-11 flex items-center justify-center hover:bg-[#263747]/5 text-[#263747]"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <AddToCartButton slug={bundle.slug} qty={qty} size="lg" />
              </div>

              <p className="mt-4 text-xs font-mono tracking-wide text-[#263747]/50">
                Free US shipping over $50 &bull; Ships in 2-3 business days &bull; Discreet, unbranded packaging
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS STRIP */}
      <section className="relative py-14 overflow-hidden bg-[#FDF8F0]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { kicker: "Sea moss", body: "92 essential minerals" },
            { kicker: "pH balanced", body: "3.8–4.5, body-matched" },
            { kicker: "Plant-based", body: "Sea moss, aloe, minerals" },
            { kicker: "100% vegan", body: "Cruelty-free, always" },
          ].map((item) => (
            <div key={item.kicker}>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#AD9952]">
                {item.kicker}
              </div>
              <div className="mt-1 text-sm md:text-base font-bold text-[#263747]">
                {item.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="relative py-20 bg-luxe-teal noise-overlay overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70">
              What&rsquo;s inside
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-[#263747] tracking-tight">
              Everything in your {bundle.name}.
            </h2>
            <ul className="mt-6 space-y-3">
              {bundle.includes.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3 text-[#263747]/85"
                >
                  <span className="w-6 h-6 rounded-full bg-[#6793A0]/25 text-[#325360] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-[#263747]/10 p-6 md:p-8">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#AD9952]">
              Specifications
            </span>
            <h3 className="mt-2 text-xl font-black text-[#263747]">The details</h3>
            <dl className="mt-4 divide-y divide-[#263747]/10">
              {bundle.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="py-3 grid grid-cols-[120px_1fr] gap-3 items-baseline"
                >
                  <dt className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#263747]/55">
                    {spec.label}
                  </dt>
                  <dd className="text-sm text-[#263747]">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 bg-luxe-cream noise-overlay overflow-hidden">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70">
              FAQ
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-[#263747] tracking-tight">
              The honest answers.
            </h2>
          </div>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {bundle.faq.map((faq, i) => (
              <Accordion.Item
                key={faq.q}
                value={`item-${i}`}
                className="bg-white border border-[#325360]/15 rounded-2xl overflow-hidden data-[state=open]:border-[#325360]/40 transition-colors"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#AACAD1]/10 transition-colors">
                    <span className="font-black text-sm md:text-base text-[#263747] tracking-tight">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border border-[#325360]/30 text-[#325360] flex items-center justify-center group-data-[state=open]:rotate-45 group-data-[state=open]:bg-[#325360] group-data-[state=open]:text-white transition-all">
                      <Plus className="w-4 h-4" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-6 pb-6 text-sm text-[#263747]/75 leading-relaxed">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* RELATED */}
      <section className="relative py-20 bg-[#FDF8F0] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
            <div>
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70">
                Related
              </span>
              <h2 className="mt-2 text-2xl md:text-4xl font-black text-[#263747] tracking-tight">
                Stock it another way.
              </h2>
            </div>
            <Link
              href="/shop"
              className="font-mono text-xs tracking-widest uppercase text-[#AD9952] hover:underline"
            >
              View all bundles &rarr;
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                href={`/shop/${r.slug}`}
                key={r.slug}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#263747]/10 hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#AACAD1]/50 via-[#FDF8F0]/40 to-[#6793A0]/25 border-b border-[#263747]/5">
                  <BundleComposite visual={r.visual} size="md" />
                </div>
                <div className="p-5 flex flex-col gap-1.5 flex-1">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#AD9952]">
                    {r.tagline}
                  </span>
                  <h3 className="text-lg font-black text-[#263747] group-hover:text-[#AD9952] transition-colors">
                    {r.name}
                  </h3>
                  <p className="text-xs text-[#263747]/60">{r.shortDescription}</p>
                  <div className="mt-auto pt-3 flex items-baseline gap-2">
                    <span className="text-2xl font-black text-[#263747]">${r.price}</span>
                    {r.save ? (
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#325360]">
                        {r.save}
                      </span>
                    ) : null}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY ADD-TO-CART BAR */}
      <motion.div
        initial={false}
        animate={{
          y: showSticky ? 0 : 100,
          opacity: showSticky ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 240, damping: 28 }}
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#263747]/10 shadow-[0_-8px_24px_-12px_rgba(38,55,71,0.2)]"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#AACAD1]/50 to-[#FDF8F0]/40 flex-shrink-0 overflow-hidden">
            <BundleComposite visual={bundle.visual} size="sm" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-[#263747] truncate">{bundle.name}</p>
            <p className="font-mono text-[10px] tracking-widest uppercase text-[#263747]/50">
              ${bundle.price}
              {bundle.unitCount > 1 ? ` • $${perBottle}/bottle` : ""}
            </p>
          </div>
          <AddToCartButton
            slug={bundle.slug}
            qty={qty}
            size="sm"
            label={
              <>
                <ShoppingBag className="w-4 h-4 inline mr-1" />
                Add
              </>
            }
          />
        </div>
      </motion.div>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-posts";

// The CTA is tailored per post: copy matches the emotional state each article
// leaves the reader in (see .planning/BLOG-TOPICS.md "Buying Emotion" column
// and each post's `ctaLabel` / `ctaHref` fields in src/lib/blog-posts.ts).
export function ArticleCTA({ post }: { post: BlogPost }) {
  return (
    <section className="bg-luxe-deep noise-overlay text-[#263747] py-20 md:py-28 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-[#AD9952]/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.span
          className="inline-block font-mono text-[#AD9952] text-xs tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to feel Seaduced?
        </motion.span>

        <motion.p
          className="text-2xl md:text-4xl text-[#263747] leading-[1.15] tracking-tight mb-8 italic"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          &ldquo;{post.buyingEmotion}&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Link
            href={post.ctaHref}
            className="inline-flex items-center gap-3 bg-[#AD9952] text-[#263747] px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase hover:scale-[1.03] transition-transform"
          >
            {post.ctaLabel}
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

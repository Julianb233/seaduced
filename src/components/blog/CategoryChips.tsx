"use client";

import { motion } from "framer-motion";
import { BLOG_CATEGORIES } from "@/lib/blog-posts";

export function CategoryChips() {
  // Visual-only for now — filter logic is TODO once the post library grows.
  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        className="flex flex-wrap items-center justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#325360]/70 mr-2">
          Filter
        </span>
        <button
          className="px-4 py-2 rounded-full border border-[#263747] bg-[#263747] text-[#FDF8F0] text-xs font-medium tracking-wide"
          aria-pressed="true"
        >
          All
        </button>
        {BLOG_CATEGORIES.map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 rounded-full border border-[#325360]/30 bg-transparent text-[#263747] text-xs font-medium tracking-wide hover:border-[#263747] hover:bg-[#FDF8F0] transition-colors cursor-default"
            // TODO(blog-filter): wire up filtering — currently visual only
            aria-disabled="true"
          >
            {cat}
          </button>
        ))}
      </motion.div>
    </div>
  );
}

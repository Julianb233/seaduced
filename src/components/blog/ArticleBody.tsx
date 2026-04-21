"use client";

import { motion } from "framer-motion";
import type { BlogPost, BlogSection } from "@/lib/blog-posts";
import { ShareRail } from "./ShareRail";

export function ArticleBody({ post }: { post: BlogPost }) {
  return (
    <section className="bg-[#FDF8F0] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[72px_minmax(0,1fr)] gap-8">
          <ShareRail title={post.title} />

          <article className="max-w-prose mx-auto md:mx-0">
            <motion.p
              className="text-xl md:text-2xl text-[#263747] leading-relaxed mb-10 font-medium"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {post.hook}
            </motion.p>

            <div className="space-y-6">
              {post.body.map((section, i) => (
                <SectionRenderer key={i} section={section} />
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-[#325360]/15">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#325360]/70">
                Seaduced Journal · {post.category}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function SectionRenderer({ section }: { section: BlogSection }) {
  if (section.kind === "heading") {
    return (
      <motion.h2
        className="text-2xl md:text-3xl text-[#263747] mt-10 mb-4 tracking-tight"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {section.text}
      </motion.h2>
    );
  }

  if (section.kind === "paragraph") {
    return (
      <motion.p
        className="text-base md:text-lg text-[#263747]/85 leading-relaxed"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {section.text}
      </motion.p>
    );
  }

  if (section.kind === "quote") {
    return (
      <motion.blockquote
        className="my-8 pl-6 border-l-4 border-[#AD9952] bg-[#AACAD1]/25 py-5 pr-6 rounded-r-xl"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p
          className="text-xl md:text-2xl text-[#263747] leading-snug italic"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
        >
          &ldquo;{section.text}&rdquo;
        </p>
        {section.attribution && (
          <cite className="block mt-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[#325360] not-italic">
            — {section.attribution}
          </cite>
        )}
      </motion.blockquote>
    );
  }

  if (section.kind === "list") {
    return (
      <motion.ul
        className="space-y-3 pl-6 my-4"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {section.items.map((item, i) => (
          <li
            key={i}
            className="relative text-base md:text-lg text-[#263747]/85 leading-relaxed list-disc marker:text-[#AD9952]"
          >
            {item}
          </li>
        ))}
      </motion.ul>
    );
  }

  return null;
}

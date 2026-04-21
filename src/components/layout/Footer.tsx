"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Instagram, Mail, ShoppingBag, Music } from "lucide-react";
import {
  GlassEffect,
  GlassDock,
  GlassButton,
  GlassFilter,
  type DockIcon,
} from "@/components/ui/liquid-glass";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export function Footer() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const socialIcons: DockIcon[] = [
    {
      icon: <Instagram className="w-8 h-8 text-[#FAFBFB]" strokeWidth={1.5} />,
      alt: "Instagram",
      href: "https://instagram.com/seaduced",
    },
    {
      icon: <Music className="w-8 h-8 text-[#FAFBFB]" strokeWidth={1.5} />,
      alt: "TikTok",
      href: "https://tiktok.com/@seaduced",
    },
    {
      icon: <Mail className="w-8 h-8 text-[#FAFBFB]" strokeWidth={1.5} />,
      alt: "Email",
      href: "mailto:hello@seaducedproducts.com",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-[#FAFBFB]" strokeWidth={1.5} />,
      alt: "Shop",
      onClick: () => router.push("/shop"),
    },
  ];

  const footerLinks: { title: string; links: { label: string; href: string }[] }[] = [
    {
      title: "Product",
      links: [
        { label: "The Bottle", href: "/product" },
        { label: "Ingredients", href: "/ingredients" },
        { label: "Science", href: "/science" },
        { label: "Shipping", href: "/shipping" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Our Story", href: "/about" },
        { label: "Journal", href: "/blog" },
        { label: "Contact", href: "/contact" },
        { label: "Press", href: "#" },
        { label: "Partners", href: "#activations" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "Instagram", href: "https://instagram.com/seaduced" },
        { label: "Founders Circle", href: "#activations" },
        { label: "Practitioners", href: "#activations" },
        { label: "Stockists", href: "#activations" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Shipping & Returns", href: "/returns" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Accessibility", href: "#" },
      ],
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-luxe-footer noise-overlay relative pt-16 pb-6 overflow-hidden"
    >
      {/* SVG displacement filter for liquid-glass — mounted once */}
      <GlassFilter />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              READY TO
            </motion.span>
            <motion.span
              className="block text-[#AD9952]"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            >
              DIVE IN?
            </motion.span>
          </h2>
        </motion.div>

        {/* Newsletter — liquid-glass panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto mb-10"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <GlassEffect
              className="rounded-2xl p-2 w-full"
              style={{ borderRadius: "1rem" }}
            >
              <div className="flex flex-col sm:flex-row gap-2 w-full items-stretch">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  aria-label="Email address"
                  className="flex-1 bg-transparent px-4 py-3 text-[#FAFBFB] placeholder:text-white/50 font-mono text-sm focus:outline-none"
                />
                <GlassButton
                  type="submit"
                  className="whitespace-nowrap rounded-xl"
                  ariaLabel="Join the newsletter"
                >
                  <span
                    className={
                      isSubmitting ? "opacity-70 animate-pulse" : ""
                    }
                  >
                    {isSubmitting ? "Joining..." : "Join the List"}
                  </span>
                </GlassButton>
              </div>
            </GlassEffect>
          </form>
          <motion.p
            className="text-white/60 font-mono text-xs mt-3 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Get early drops, rituals, and 10% off your first bottle.
          </motion.p>
        </motion.div>

        {/* Social dock — liquid-glass */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GlassDock icons={socialIcons} />
        </motion.div>

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/60 font-mono text-xs max-w-xl mx-auto leading-relaxed">
            Seaduced is plant-based intimate wellness — sea moss, minerals, and
            pH-balanced care crafted for every body and every pairing.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-white/10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-bold text-white text-sm mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((item) => (
                  <li key={item.label}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Link
                        href={item.href}
                        className="text-white/60 hover:text-[#AD9952] font-mono text-xs transition-colors inline-block"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright row — optional glass wrap */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-6 border-t border-white/10"
        >
          <GlassEffect
            className="rounded-2xl px-6 py-4 w-full"
            style={{ borderRadius: "1rem" }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-xl font-black">
                  <span className="text-white">SEA</span>
                  <span className="text-[#AD9952]">DUCED</span>
                </span>
              </motion.div>

              <p className="text-white/70 font-mono text-xs">
                &copy; 2026 Seaduced. All rights reserved.
              </p>

              <motion.p
                className="text-white/50 font-mono text-xs cursor-pointer"
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
                animate={
                  isHovering
                    ? {
                        rotate: [0, -5, 5, -5, 5, 0],
                        scale: [1, 1.1, 1],
                        color: "#AD9952",
                      }
                    : {
                        rotate: 0,
                        scale: 1,
                        color: "rgba(255,255,255,0.5)",
                      }
                }
                transition={{ duration: 0.5 }}
              >
                made with care
              </motion.p>
            </div>
          </GlassEffect>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15rem] md:text-[30rem] font-black text-white/[0.03] pointer-events-none select-none leading-none"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        SEADUCED
      </motion.div>
    </footer>
  );
}

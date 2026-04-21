'use client';

import type React from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Leaf, Sparkles, Shield, Eye, Users } from 'lucide-react';
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
  fadeUp,
  easeSmooth,
  tiltSpring,
} from '@/lib/motion';

/* ─── Parallax Hero ──────────────────────────────── */

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 120]), {
    stiffness: 80,
    damping: 30,
  });

  return (
    <section
      ref={ref}
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#1E1E2E] pt-24"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E] via-[#0f0f1a] to-[#1E1E2E]"
        style={{ y: bgY }}
      />

      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C5A55A]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.span
          className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A55A]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          About Us
        </motion.span>

        <div className="overflow-hidden mt-3">
          <motion.h1
            className="font-[var(--font-playfair)] text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: easeSmooth }}
          >
            Our <span className="text-[#C5A55A]">Story</span>
          </motion.h1>
        </div>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: easeSmooth }}
        >
          Born from the ocean. Made for intimacy. A new standard in natural
          wellness.
        </motion.p>

        <motion.div
          className="mx-auto mt-6 h-[2px] w-12 rounded-full bg-[#C5A55A]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: easeSmooth }}
        />
      </div>
    </section>
  );
}

/* ─── Story Section (staggered paragraphs) ───────── */

const storyParagraphs = [
  'Seaduced started with a simple question: why are so many intimate products filled with synthetic chemicals and harsh preservatives? We believed there had to be a better way — something that works with your body, not against it.',
  'Sea moss has been treasured for centuries across Caribbean and Irish coastal communities for its remarkable mineral content and natural gel-like texture. When we discovered that carrageenan — a compound extracted from sea moss — creates an incredibly silky, long-lasting glide, we knew we had found our answer.',
  'Every bottle of Seaduced is crafted with wildcrafted Irish sea moss, soothing aloe vera, and hyaluronic acid. No parabens, no glycerin, no artificial fragrances. Just clean, plant-based ingredients that respect your body and the planet.',
  'We are committed to radical transparency. Every ingredient is listed, every claim is backed by science, and every bottle ships in discreet, eco-conscious packaging. This is intimate wellness, reimagined.',
];

function StorySection() {
  return (
    <section className="relative overflow-hidden bg-[#1E1E2E] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          className="mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A55A]">
            The Beginning
          </span>
          <div className="overflow-hidden mt-2">
            <motion.h2
              className="font-[var(--font-playfair)] text-3xl font-extrabold tracking-tight text-white md:text-4xl"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: easeSmooth }}
            >
              Why Sea Moss?
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {storyParagraphs.map((text, i) => (
            <motion.p
              key={i}
              className="text-base leading-relaxed text-white/75 md:text-lg md:leading-relaxed"
              variants={staggerItem}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Values Bento Grid with 3D Tilt ─────────────── */

const values = [
  {
    icon: Leaf,
    title: 'Clean Ingredients',
    description:
      'No parabens, glycerin, petroleum, silicone, or artificial fragrances. Ever.',
    accent: '#1A6B5C',
    span: 'md:col-span-2',
  },
  {
    icon: Heart,
    title: 'Body Positivity',
    description:
      'Designed for every body. Intimacy is natural, and your products should be too.',
    accent: '#C5A55A',
    span: '',
  },
  {
    icon: Shield,
    title: 'Transparency',
    description:
      'Every ingredient listed. Every claim backed. No fine-print surprises.',
    accent: '#3B5EAB',
    span: '',
  },
  {
    icon: Sparkles,
    title: 'Ocean Sourced',
    description:
      'Wildcrafted sea moss harvested sustainably from pristine Atlantic waters.',
    accent: '#C5A55A',
    span: '',
  },
  {
    icon: Eye,
    title: 'Radical Honesty',
    description:
      'We tell you exactly what is in our products and why. No greenwashing.',
    accent: '#1A6B5C',
    span: '',
  },
  {
    icon: Users,
    title: 'Community First',
    description:
      'Built by real people, for real people. Your feedback shapes every batch.',
    accent: '#3B5EAB',
    span: 'md:col-span-2',
  },
];

function TiltCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mx = useSpring(x, tiltSpring);
  const my = useSpring(y, tiltSpring);

  const rotateX = useTransform(my, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mx, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      variants={staggerItem}
    >
      {children}
    </motion.div>
  );
}

function ValuesSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#1E1E2E]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E] via-[#0f0f1a] to-[#1E1E2E]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A55A]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
          >
            What We Stand For
          </motion.span>

          <div className="overflow-hidden mt-2">
            <motion.h2
              className="font-[var(--font-playfair)] text-3xl font-extrabold tracking-tight text-white md:text-5xl"
              initial={{ y: 60 }}
              whileInView={{ y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: easeSmooth, delay: 0.15 }}
            >
              Our Values
            </motion.h2>
          </div>

          <motion.div
            className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-[#C5A55A]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.4, ease: easeSmooth }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <TiltCard
                key={item.title}
                className={`group cursor-default ${item.span}`}
              >
                <div className="relative h-full rounded-2xl border border-white/10 bg-[#1E1E2E] p-6 overflow-hidden transition-colors duration-300 hover:border-white/20">
                  <div
                    className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                    style={{
                      background: `linear-gradient(135deg, ${item.accent}30, transparent, ${item.accent}30)`,
                    }}
                  />
                  <div className="relative z-10">
                    <div
                      className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${item.accent}20` }}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{ color: item.accent }}
                      />
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page Export ─────────────────────────────────── */

export default function AboutContent() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <ValuesSection />
    </>
  );
}

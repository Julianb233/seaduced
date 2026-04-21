'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { viewportOnce, fadeUp, easeSmooth, staggerContainer, staggerItem } from '@/lib/motion';

/* --- Data ----------------------------------------- */

const sections = [
  {
    id: 'carrageenan',
    label: 'Carrageenan',
    title: 'The Power of Carrageenan',
    quote:
      'Carrageenan has been used for centuries as a natural thickener and emulsifier in food and pharmaceutical products.',
    paragraphs: [
      'At the heart of Seaduced is carrageenan — a family of linear sulfated polysaccharides extracted from red edible seaweeds, including our star ingredient, Chondrus crispus (Irish sea moss). Carrageenan forms a gel-like matrix when hydrated, creating a remarkably silky, long-lasting texture.',
      'Unlike synthetic thickeners or silicone-based alternatives, carrageenan is biocompatible and biodegradable. Its molecular structure allows it to interact gently with mucosal tissues, providing lubrication without disrupting the natural microbiome.',
      'Research published in peer-reviewed journals has explored carrageenan-based gels for their potential protective properties. While Seaduced is formulated as a personal lubricant — not a medical device — the underlying science of carrageenan supports its role as a superior natural base.',
    ],
  },
  {
    id: 'minerals',
    label: 'Minerals',
    title: '92 Essential Minerals',
    quote:
      'Sea moss contains 92 of the 102 minerals the human body needs, including zinc, magnesium, potassium, and iodine.',
    paragraphs: [
      'Irish sea moss (Chondrus crispus) is one of the most mineral-dense marine organisms on the planet. When extracted and formulated correctly, these minerals remain bioavailable — meaning they can be absorbed and utilized by the body on contact.',
      'Key minerals in our formulation include zinc (supports tissue repair), magnesium (calms sensitive tissue), potassium (maintains cellular hydration), and iodine (supports healthy skin function). Together, they create a lubricant that does more than reduce friction — it nourishes.',
      'We source our sea moss from sustainable wild-harvest operations in the North Atlantic, where cold, mineral-rich waters produce the highest-quality Chondrus crispus available.',
    ],
  },
  {
    id: 'ph-balance',
    label: 'pH Balance',
    title: 'pH-Balanced Formula',
    quote:
      'The vaginal pH typically ranges from 3.8 to 4.5. Products outside this range can disrupt healthy flora and cause irritation.',
    paragraphs: [
      'pH balance is not a marketing buzzword — it is one of the most critical factors in intimate product safety. Many popular lubricants have a pH of 5 to 7 (some even higher), which can disrupt the natural acidic environment and increase susceptibility to infections.',
      'Seaduced is formulated between 3.8 and 4.5, matching the body\'s natural acidity. We use citric acid as a gentle pH adjuster, avoiding harsh buffers. Every batch is tested to ensure consistency.',
      'This careful pH management works in concert with our clean ingredient list — no glycerin (which can feed yeast), no parabens (endocrine disruptors), and no petroleum derivatives. The result is a lubricant that supports, rather than undermines, intimate health.',
    ],
  },
  {
    id: 'research',
    label: 'Research',
    title: 'Clinical Context',
    quote:
      'Plant-based intimate care is one of the fastest-growing segments in personal wellness, driven by consumer demand for transparency and clean ingredients.',
    paragraphs: [
      'While Seaduced is a personal care product — not a pharmaceutical — our formulation is informed by published research on carrageenan-based gels, natural humectants, and mucosal compatibility.',
      'Studies on carrageenan gels have appeared in journals including PLOS ONE and Contraception, examining their lubricating properties and biocompatibility. Hyaluronic acid, another key ingredient in Seaduced, has extensive clinical literature supporting its role in tissue hydration and moisture retention.',
      'We are committed to evidence-informed formulation. As the body of research on natural intimate care grows, Seaduced will continue to evolve — always grounded in science, never in hype.',
    ],
  },
];

const footnotes = [
  'Carrageenan: a family of linear sulfated polysaccharides extracted from red edible seaweeds. Widely used in food, pharmaceutical, and cosmetic applications.',
  'Chondrus crispus: a species of red algae native to the Atlantic coastlines of Europe and North America. Also known as Irish moss.',
  'pH: a scale used to specify the acidity or basicity of an aqueous solution. Lower values indicate higher acidity.',
  'Hyaluronic acid: a naturally occurring glycosaminoglycan found in connective tissue. Known for exceptional moisture-binding capacity.',
  'Biocompatible: compatible with living tissue or a living system by not being toxic, injurious, or physiologically reactive.',
];

/* --- Sticky Sub-Nav ------------------------------- */

function StickyNav() {
  const [active, setActive] = useState('carrageenan');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className="sticky top-20 z-20 mb-12 overflow-x-auto rounded-xl border border-white/10 bg-[#1E1E2E]/90 backdrop-blur-md"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
    >
      <div className="flex min-w-max gap-1 p-1">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`rounded-lg px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
              active === s.id
                ? 'bg-[#C5A55A] text-[#1E1E2E] shadow-md'
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}

/* --- Pull Quote ----------------------------------- */

function PullQuote({ text }: { text: string }) {
  return (
    <motion.blockquote
      className="relative my-10 pl-6 md:pl-8"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[#C5A55A] to-[#C5A55A]/20"
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: easeSmooth, delay: 0.2 }}
      />
      <p className="font-[var(--font-playfair)] text-lg italic leading-relaxed text-white/70 md:text-xl">
        &ldquo;{text}&rdquo;
      </p>
    </motion.blockquote>
  );
}

/* --- Science Section ------------------------------ */

function ScienceSection({
  section,
}: {
  section: (typeof sections)[number];
}) {
  return (
    <section id={section.id} className="scroll-mt-32 mb-20 last:mb-0">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A55A]">
          {section.label}
        </span>
        <div className="overflow-hidden mt-2">
          <motion.h2
            className="font-[var(--font-playfair)] text-2xl font-extrabold tracking-tight text-white md:text-4xl"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: easeSmooth }}
          >
            {section.title}
          </motion.h2>
        </div>
      </motion.div>

      <PullQuote text={section.quote} />

      <motion.div
        className="space-y-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {section.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            className="text-base leading-relaxed text-white/75 md:text-lg md:leading-relaxed"
            variants={staggerItem}
          >
            {p}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        className="mt-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, ease: easeSmooth }}
      />
    </section>
  );
}

/* --- Footnotes with Parallax ---------------------- */

function Footnotes() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [40, -40]), {
    stiffness: 80,
    damping: 30,
  });

  return (
    <motion.div ref={ref} className="mt-20" style={{ y }}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A55A]">
          Glossary
        </span>
        <h3 className="mt-2 font-[var(--font-playfair)] text-xl font-bold text-white md:text-2xl">
          Key Terms
        </h3>
      </motion.div>

      <motion.ol
        className="mt-6 space-y-3 list-decimal list-inside"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {footnotes.map((note, i) => (
          <motion.li
            key={i}
            className="text-sm leading-relaxed text-white/50"
            variants={staggerItem}
          >
            {note}
          </motion.li>
        ))}
      </motion.ol>
    </motion.div>
  );
}

/* --- Page Export ----------------------------------- */

export default function ScienceContent() {
  return (
    <div className="relative min-h-screen bg-[#1E1E2E] pt-28 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E] via-[#0f0f1a] to-[#1E1E2E]" />
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full bg-[#3B5EAB]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Hero */}
        <motion.div className="mb-12 text-center">
          <motion.span
            className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A55A]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            The Science
          </motion.span>

          <div className="overflow-hidden mt-3">
            <motion.h1
              className="font-[var(--font-playfair)] text-4xl font-black tracking-tight text-white md:text-6xl"
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: easeSmooth }}
            >
              Why <span className="text-[#C5A55A]">Sea Moss</span>?
            </motion.h1>
          </div>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            The ocean has always known what science is now confirming. Dive into
            the research behind our formulation.
          </motion.p>

          <motion.div
            className="mx-auto mt-6 h-[2px] w-12 rounded-full bg-[#C5A55A]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: easeSmooth }}
          />
        </motion.div>

        {/* Sticky Nav */}
        <StickyNav />

        {/* Sections */}
        {sections.map((s) => (
          <ScienceSection key={s.id} section={s} />
        ))}

        {/* Footnotes */}
        <Footnotes />
      </div>
    </div>
  );
}

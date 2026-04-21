'use client';

import type React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Droplets,
  Scale,
  Leaf,
  Sparkles,
  FlaskConical,
  Citrus,
  X,
} from 'lucide-react';
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
  fadeUp,
  easeSmooth,
  tiltSpring,
} from '@/lib/motion';

/* --- Data ----------------------------------------- */

const ingredients = [
  {
    id: 'sea-moss',
    icon: Droplets,
    title: 'Organic Irish Sea Moss',
    subtitle: 'Chondrus crispus',
    brief:
      'The star ingredient. Wildcrafted sea moss provides 92 essential minerals and creates naturally silky glide.',
    detail:
      'Chondrus crispus, also known as Irish sea moss, is a species of red algae that grows along the rocky Atlantic coastlines of Europe and North America. Rich in carrageenan — a natural polysaccharide — it forms a gel-like matrix when hydrated that provides exceptional lubrication without synthetic thickeners. Our sea moss is sustainably wildcrafted from pristine North Atlantic waters, ensuring the highest mineral concentration and purity.',
    accent: '#C5A55A',
    span: 'md:col-span-2',
  },
  {
    id: 'aloe-vera',
    icon: Leaf,
    title: 'Aloe Vera Extract',
    subtitle: 'Aloe barbadensis',
    brief:
      'Soothing botanical that moisturizes and helps prevent irritation naturally.',
    detail:
      'Aloe barbadensis leaf juice has been used for millennia as a skin soother and moisturizer. In our formulation, it works synergistically with sea moss to enhance hydration, reduce the potential for irritation, and provide a cooling, calming sensation. It also contributes to the overall silky texture of the product.',
    accent: '#1A6B5C',
    span: '',
  },
  {
    id: 'hyaluronic-acid',
    icon: Sparkles,
    title: 'Hyaluronic Acid',
    subtitle: 'Sodium hyaluronate',
    brief:
      'Moisture powerhouse that holds up to 1,000x its weight in water for lasting hydration.',
    detail:
      'Hyaluronic acid is a naturally occurring glycosaminoglycan found throughout the body\'s connective tissue. It can hold up to 1,000 times its weight in water, making it one of the most effective humectants available. In Seaduced, it provides deep, lasting moisture that prevents dryness without leaving a sticky residue.',
    accent: '#3B5EAB',
    span: '',
  },
  {
    id: 'chamomile',
    icon: FlaskConical,
    title: 'Chamomile Extract',
    subtitle: 'Chamomilla recutita',
    brief:
      'Calming botanical known for its anti-inflammatory and skin-soothing properties.',
    detail:
      'Chamomilla recutita extract has been used in traditional medicine for centuries. Rich in bisabolol and chamazulene, it possesses natural anti-inflammatory properties that help soothe sensitive intimate tissue. In our formula, chamomile works alongside aloe vera to create a calming, gentle experience.',
    accent: '#C5A55A',
    span: '',
  },
  {
    id: 'glycerin',
    icon: Scale,
    title: 'Vegetable Glycerin',
    subtitle: 'Plant-derived humectant',
    brief:
      'Plant-based moisture barrier that enhances glide and texture without glycerin sensitivity concerns.',
    detail:
      'Unlike petroleum-derived glycerin found in many conventional lubricants, our vegetable glycerin is sourced from plant oils. Used in a carefully calibrated concentration, it enhances the product\'s texture and glide while creating a moisture barrier that extends the lubricating effect. Our formula uses the minimum effective amount to avoid the glycerin sensitivity concerns associated with high-concentration formulas.',
    accent: '#1A6B5C',
    span: '',
  },
  {
    id: 'citric-acid',
    icon: Citrus,
    title: 'Citric Acid',
    subtitle: 'pH adjuster',
    brief:
      'Natural pH balancer that keeps the formula between 3.8-4.5 to match your body.',
    detail:
      'Citric acid serves as our gentle pH adjuster, ensuring every batch of Seaduced falls within the optimal 3.8-4.5 range that matches the body\'s natural acidity. This is critical for intimate health — products with a higher pH can disrupt the vaginal microbiome and increase susceptibility to infections. Citric acid achieves this without harsh chemical buffers.',
    accent: '#3B5EAB',
    span: 'md:col-span-2',
  },
];

/* --- TiltCard ------------------------------------- */

function TiltCard({
  children,
  className = '',
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
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
      onClick={onClick}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      variants={staggerItem}
    >
      {children}
    </motion.div>
  );
}

/* --- Detail Modal --------------------------------- */

function DetailModal({
  ingredient,
  onClose,
}: {
  ingredient: (typeof ingredients)[number];
  onClose: () => void;
}) {
  const Icon = ingredient.icon;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Content */}
      <motion.div
        className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#1E1E2E] p-8 shadow-2xl"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div
          className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${ingredient.accent}20` }}
        >
          <Icon className="h-6 w-6" style={{ color: ingredient.accent }} />
        </div>

        <h3 className="font-[var(--font-playfair)] text-2xl font-bold text-white">
          {ingredient.title}
        </h3>
        <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
          {ingredient.subtitle}
        </p>

        <div
          className="my-6 h-[2px] w-10 rounded-full"
          style={{ backgroundColor: ingredient.accent }}
        />

        <p className="text-base leading-relaxed text-white/75">
          {ingredient.detail}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* --- Page Export ----------------------------------- */

export default function IngredientsContent() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedIngredient = ingredients.find((i) => i.id === selected);

  return (
    <div className="relative min-h-screen bg-[#1E1E2E] pt-28 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E] via-[#0f0f1a] to-[#1E1E2E]" />
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-[#1A6B5C]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div className="text-center mb-14">
          <motion.span
            className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A55A]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Ingredients
          </motion.span>

          <div className="overflow-hidden mt-3">
            <motion.h1
              className="font-[var(--font-playfair)] text-4xl font-black tracking-tight text-white md:text-6xl"
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: easeSmooth }}
            >
              What&apos;s <span className="text-[#C5A55A]">Inside</span>
            </motion.h1>
          </div>

          <motion.p
            className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Every ingredient chosen with purpose. No fillers, no mystery
            compounds. Tap any card to learn more.
          </motion.p>

          <motion.div
            className="mx-auto mt-6 h-[2px] w-12 rounded-full bg-[#C5A55A]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: easeSmooth }}
          />
        </motion.div>

        {/* Ingredient Grid */}
        <motion.div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {ingredients.map((item) => {
            const Icon = item.icon;
            return (
              <TiltCard
                key={item.id}
                className={`group cursor-pointer ${item.span}`}
                onClick={() => setSelected(item.id)}
              >
                <div className="relative h-full rounded-2xl border border-white/10 bg-[#1E1E2E] p-6 overflow-hidden transition-colors duration-300 hover:border-white/20">
                  {/* Hover glow */}
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
                    <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-white/30">
                      {item.subtitle}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-white/50">
                      {item.brief}
                    </p>

                    {/* Learn more indicator */}
                    <span className="mt-3 inline-block font-mono text-[9px] font-semibold uppercase tracking-wider text-[#C5A55A]/60 transition-colors duration-200 group-hover:text-[#C5A55A]">
                      Learn more &rarr;
                    </span>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </motion.div>

        {/* Full Ingredient List */}
        <motion.div
          className="mt-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A55A]">
              Full INCI List
            </h3>
            <p className="mt-4 text-sm leading-loose text-white/60">
              Purified Water, Chondrus Crispus (Sea Moss) Extract, Aloe
              Barbadensis Leaf Juice, Sodium Hyaluronate (Hyaluronic Acid),
              Chamomilla Recutita (Chamomile) Extract, Vegetable Glycerin,
              Citric Acid, Phenoxyethanol.
            </p>
            <p className="mt-4 text-xs text-white/30">
              That&apos;s it. Eight ingredients. No parabens, no silicone, no
              petroleum, no artificial fragrances.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Detail Modal */}
      {selectedIngredient && (
        <DetailModal
          ingredient={selectedIngredient}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

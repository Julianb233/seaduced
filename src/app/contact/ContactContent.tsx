'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import { viewportOnce, fadeUp, easeSmooth, staggerContainer, staggerItem } from '@/lib/motion';

/* --- Shimmer Button ------------------------------- */

function ShimmerButton({
  children,
  disabled,
  type = 'button',
}: {
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
}) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#C5A55A] px-8 py-3.5 text-sm font-semibold tracking-wider text-[#1E1E2E] uppercase transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {/* Shimmer sweep */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}

/* --- Focus-Glow Input ----------------------------- */

function GlowInput({
  label,
  name,
  type = 'text',
  placeholder,
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <motion.div variants={staggerItem}>
      <label
        htmlFor={name}
        className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-[#C5A55A]/60 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(197,165,90,0.15),inset_0_0_20px_rgba(197,165,90,0.05)] focus:ring-1 focus:ring-[#C5A55A]/40"
      />
    </motion.div>
  );
}

function GlowTextarea({
  label,
  name,
  placeholder,
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <motion.div variants={staggerItem}>
      <label
        htmlFor={name}
        className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={5}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-[#C5A55A]/60 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(197,165,90,0.15),inset_0_0_20px_rgba(197,165,90,0.05)] focus:ring-1 focus:ring-[#C5A55A]/40"
      />
    </motion.div>
  );
}

/* --- Contact Info --------------------------------- */

function ContactInfo() {
  return (
    <motion.div
      className="space-y-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.div variants={staggerItem}>
        <h3 className="font-[var(--font-playfair)] text-xl font-bold text-white">
          Reach Out
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          Questions about our product, wholesale inquiries, or just want to say
          hello? We would love to hear from you.
        </p>
      </motion.div>

      <motion.div
        className="flex items-center gap-3"
        variants={staggerItem}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C5A55A]/10">
          <Mail className="h-4 w-4 text-[#C5A55A]" />
        </div>
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
            Email
          </p>
          <a
            href="mailto:hello@seaduced.com"
            className="text-sm text-white/80 transition-colors hover:text-[#C5A55A]"
          >
            hello@seaduced.com
          </a>
        </div>
      </motion.div>

      <motion.div
        className="flex items-center gap-3"
        variants={staggerItem}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B5EAB]/10">
          <MapPin className="h-4 w-4 text-[#3B5EAB]" />
        </div>
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
            Location
          </p>
          <p className="text-sm text-white/80">San Diego, California</p>
        </div>
      </motion.div>

      <motion.div
        className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6"
        variants={staggerItem}
      >
        <p className="text-xs leading-relaxed text-white/40">
          <strong className="text-white/60">Response time:</strong>{" "}We typically respond within 24 hours during business days. For urgent inquiries, please include &quot;URGENT&quot; in your subject.
        </p>
      </motion.div>
    </motion.div>
  );
}

/* --- Page Export ----------------------------------- */

export default function ContactContent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#1E1E2E] pt-28 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E] via-[#141420] to-[#1E1E2E]" />
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full bg-[#C5A55A]/3 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <span className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A55A]">
            Contact
          </span>

          <div className="overflow-hidden mt-3">
            <motion.h1
              className="font-[var(--font-playfair)] text-4xl font-black tracking-tight text-white md:text-6xl"
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: easeSmooth }}
            >
              Get in <span className="text-[#C5A55A]">Touch</span>
            </motion.h1>
          </div>

          <motion.div
            className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-[#C5A55A]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easeSmooth }}
          />
        </motion.div>

        {/* Two-column: Form + Info */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Form */}
          {submitted ? (
            <motion.div
              className="flex flex-col items-center justify-center rounded-2xl border border-[#C5A55A]/20 bg-[#C5A55A]/5 p-12 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C5A55A]/20">
                <Send className="h-6 w-6 text-[#C5A55A]" />
              </div>
              <h3 className="font-[var(--font-playfair)] text-xl font-bold text-white">
                Message Sent
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Thank you for reaching out. We will get back to you soon.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-5"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <GlowInput
                label="Name"
                name="name"
                placeholder="Your name"
                required
                value={name}
                onChange={setName}
              />
              <GlowInput
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={setEmail}
              />
              <GlowTextarea
                label="Message"
                name="message"
                placeholder="How can we help?"
                required
                value={message}
                onChange={setMessage}
              />
              <motion.div variants={staggerItem}>
                <ShimmerButton type="submit">
                  <Send className="h-4 w-4" />
                  Send Message
                </ShimmerButton>
              </motion.div>
            </motion.form>
          )}

          {/* Info */}
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

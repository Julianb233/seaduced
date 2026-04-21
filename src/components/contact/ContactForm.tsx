"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const topics = [
  "General question",
  "Order help",
  "Press / creator",
  "Retail / wholesale",
  "Partnership",
  "Feedback",
] as const;

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<string>(topics[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // TODO: Wire Formspree / Resend endpoint before launch.
    // Suggested: POST to https://formspree.io/f/{FORM_ID} with
    // { name, email, topic, message }. Pending Gina's inbox
    // decision — for now we log to console so agents can verify
    // the form renders and captures input correctly.
    console.log("[Seaduced contact form]", { name, email, topic, message });

    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setTopic(topics[0]);
      setMessage("");
    }, 600);
  };

  return (
    <section className="relative bg-luxe-cream noise-overlay py-20 md:py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="block font-mono text-xs tracking-[0.3em] uppercase text-[#325360] mb-3">
            Send us a note
          </span>
          <h2
            className="text-3xl md:text-4xl font-black text-[#263747] tracking-tight"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Rather type it here?
          </h2>
          <p className="mt-3 text-[#263747]/70 max-w-lg">
            Fill out the form and we will reply from the right inbox within one
            business day.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="grid gap-5 md:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          noValidate
        >
          <div className="md:col-span-1">
            <label
              htmlFor="contact-name"
              className="block font-mono text-xs tracking-[0.2em] uppercase text-[#325360] mb-2"
            >
              Your name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-[#263747]/20 bg-white px-4 py-3 text-[#263747] placeholder:text-[#263747]/40 focus:outline-none focus:border-[#325360] focus:ring-2 focus:ring-[#325360]/20 transition-all"
              placeholder="Jamie Coastal"
              autoComplete="name"
            />
          </div>

          <div className="md:col-span-1">
            <label
              htmlFor="contact-email"
              className="block font-mono text-xs tracking-[0.2em] uppercase text-[#325360] mb-2"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-[#263747]/20 bg-white px-4 py-3 text-[#263747] placeholder:text-[#263747]/40 focus:outline-none focus:border-[#325360] focus:ring-2 focus:ring-[#325360]/20 transition-all"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="contact-topic"
              className="block font-mono text-xs tracking-[0.2em] uppercase text-[#325360] mb-2"
            >
              Topic
            </label>
            <select
              id="contact-topic"
              name="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full rounded-xl border border-[#263747]/20 bg-white px-4 py-3 text-[#263747] focus:outline-none focus:border-[#325360] focus:ring-2 focus:ring-[#325360]/20 transition-all"
            >
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="contact-message"
              className="block font-mono text-xs tracking-[0.2em] uppercase text-[#325360] mb-2"
            >
              Your message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border border-[#263747]/20 bg-white px-4 py-3 text-[#263747] placeholder:text-[#263747]/40 focus:outline-none focus:border-[#325360] focus:ring-2 focus:ring-[#325360]/20 transition-all resize-y"
              placeholder="Tell us what is on your mind..."
            />
          </div>

          <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-[#263747]/60">
              We read everything. Usually reply within 1 business day.
            </p>
            <motion.button
              type="submit"
              disabled={status === "submitting"}
              className="group inline-flex items-center gap-2 bg-[#AD9952] text-[#263747] px-6 py-3 rounded-full font-bold text-sm tracking-wide disabled:opacity-60 shadow-sm hover:shadow-md transition-all"
              whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
              whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
            >
              <span>
                {status === "submitting"
                  ? "Sending..."
                  : status === "success"
                    ? "Sent!"
                    : "Send message"}
              </span>
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </motion.button>
          </div>

          {status === "success" && (
            <motion.div
              className="md:col-span-2 rounded-xl bg-[#325360]/10 border border-[#325360]/25 px-4 py-3 text-sm text-[#263747]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              role="status"
            >
              Thanks — your note is queued. We will reply from the inbox that
              matches your topic.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

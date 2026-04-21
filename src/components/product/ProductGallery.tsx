"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/hero-bottle.png",
    alt: "Seaduced bottle — front label detail",
    caption: "Front label",
    tag: "01",
  },
  {
    src: "/images/bottle-v2.png",
    alt: "Seaduced V2 bottle — three-quarter view",
    caption: "Three-quarter view",
    tag: "02",
  },
  {
    src: "/images/parallax/f4-bead.jpg",
    alt: "Seaduced formulation — a single bead of product",
    caption: "One bead, crystal clear",
    tag: "03",
  },
  {
    src: "/images/parallax/f5-stream.jpg",
    alt: "Seaduced formulation — long ribbon stream",
    caption: "Silk-slow stream",
    tag: "04",
  },
  {
    src: "/images/social/tile-03-bathroom-marble.png",
    alt: "Seaduced bottle at rest on a marble bathroom counter",
    caption: "On the counter. On purpose.",
    tag: "05",
  },
];

export function ProductGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi]);

  return (
    <section id="gallery" className="relative bg-[#AACAD1] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#AACAD1] via-[#FDF8F0]/30 to-[#AACAD1]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70">
              Gallery
            </span>
            <div className="overflow-hidden mt-2">
              <motion.h2
                className="text-3xl md:text-5xl font-serif text-[#263747] tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={{ y: 80 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              >
                Every angle, honestly.
              </motion.h2>
            </div>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="w-11 h-11 rounded-full border border-[#325360]/40 text-[#325360] flex items-center justify-center hover:bg-[#325360] hover:text-[#FAFBFB] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next slide"
              className="w-11 h-11 rounded-full border border-[#325360]/40 text-[#325360] flex items-center justify-center hover:bg-[#325360] hover:text-[#FAFBFB] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, i) => (
              <div
                key={slide.tag}
                className="relative flex-[0_0_85%] md:flex-[0_0_60%] min-w-0 px-3"
              >
                <motion.div
                  className="relative aspect-[4/5] md:aspect-[16/11] rounded-3xl overflow-hidden bg-[#FAFBFB] border border-[#325360]/10 shadow-2xl shadow-[#263747]/10"
                  initial={{ opacity: 0.6, scale: 0.96 }}
                  animate={{
                    opacity: i === selectedIndex ? 1 : 0.6,
                    scale: i === selectedIndex ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 85vw, 60vw"
                  />
                  <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.3em] uppercase bg-[#FAFBFB]/80 backdrop-blur px-3 py-1.5 rounded-full text-[#325360]">
                    {slide.tag} &mdash; {slides.length.toString().padStart(2, "0")}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#263747]/80 via-[#263747]/20 to-transparent p-6">
                    <p
                      className="text-[#FAFBFB] font-serif text-xl md:text-2xl tracking-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {slide.caption}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-8 md:hidden">
          <button
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full border border-[#325360]/40 text-[#325360] flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full border border-[#325360]/40 text-[#325360] flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {slides.map((s, i) => (
            <button
              key={s.tag}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === selectedIndex ? 28 : 8,
                backgroundColor: i === selectedIndex ? "#325360" : "#32536033",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

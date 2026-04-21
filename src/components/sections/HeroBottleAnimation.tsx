"use client";

/**
 * HeroBottleAnimation
 *
 * Cinematic GSAP-driven hero bottle loop for Seaduced.
 * Sequence (~6s, infinite loop):
 *   0.0-1.0s  entrance: fade + rise (y:30->0) + scale (0.96->1)
 *   1.0-1.4s  idle breath (y +/-4 oscillation)
 *   1.4-2.0s  tilt begin: rotate 0->18deg, pump head depresses 6px
 *   2.0-3.2s  squirt: cream ribbon path-reveal with sea-moss strands + droplets
 *   3.2-3.8s  peak hold + micro-sway
 *   3.8-4.8s  retract + reset (ribbon fade, droplets fall, bottle returns to 0)
 *   4.8-6.0s  still + gentle breath -> loop
 *
 * Respects prefers-reduced-motion: renders a static bottle with no timeline.
 *
 * TODO(sibling agent): swap `/images/hero-bottle.png` for `/images/bottle-isolated.png`
 * once the transparent isolated bottle lands. File check below auto-picks whichever exists.
 */

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";

// prefers-reduced-motion subscription (SSR-safe via useSyncExternalStore)
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
function subscribeReducedMotion(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia(reducedMotionQuery);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(reducedMotionQuery).matches;
}
function getReducedMotionServerSnapshot() {
  return false;
}

// Try the high-res isolated bottle first, then standard isolated, then hero fallback.
// HEAD probes upgrade the src at mount; we default to the standard isolated PNG
// which is now guaranteed to exist in public/images/.
const BOTTLE_HIGHRES = "/images/bottle-isolated-lg.png";
const BOTTLE_PRIMARY = "/images/bottle-isolated.png";
const BOTTLE_FALLBACK = "/images/hero-bottle.png";

export function HeroBottleAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);
  const pumpRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<SVGPathElement>(null);
  const ribbonHighlightRef = useRef<SVGPathElement>(null);
  const mossRefs = useRef<(SVGPathElement | null)[]>([]);
  const dropletRefs = useRef<(SVGCircleElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  // Default to the standard isolated bottle (guaranteed present). Probe upgrades
  // to the high-res lg variant when available, and falls back to hero-bottle
  // only if both isolated variants vanish.
  const [bottleSrc, setBottleSrc] = useState<string>(BOTTLE_PRIMARY);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;

    const probe = async () => {
      // Prefer the high-res variant when available
      try {
        const hi = await fetch(BOTTLE_HIGHRES, { method: "HEAD" });
        if (!cancelled && hi.ok) {
          setBottleSrc(BOTTLE_HIGHRES);
          return;
        }
      } catch {
        // ignore
      }
      // Confirm the standard isolated bottle; fall back to hero only if missing
      try {
        const std = await fetch(BOTTLE_PRIMARY, { method: "HEAD" });
        if (!cancelled) {
          setBottleSrc(std.ok ? BOTTLE_PRIMARY : BOTTLE_FALLBACK);
        }
      } catch {
        if (!cancelled) setBottleSrc(BOTTLE_FALLBACK);
      }
    };

    probe();
    return () => {
      cancelled = true;
    };
  }, []);

  // GSAP timeline — gsap is dynamically imported so the reduced-motion fallback
  // never loads it into the bundle's initial runtime path.
  useEffect(() => {
    if (reducedMotion) return;
    if (!bottleRef.current || !ribbonRef.current) return;

    let tl: gsap.core.Timeline | null = null;
    let cancelled = false;

    const run = async () => {
      const gsapMod = await import("gsap");
      if (cancelled) return;
      const gsap = gsapMod.default;

      if (!bottleRef.current || !ribbonRef.current) return;

      const ribbon = ribbonRef.current;
      const ribbonHighlight = ribbonHighlightRef.current;
      const mossPaths = mossRefs.current.filter(Boolean) as SVGPathElement[];
      const droplets = dropletRefs.current.filter(Boolean) as SVGCircleElement[];

      // Prime path reveals
      const ribbonLen = ribbon.getTotalLength();
      ribbon.style.strokeDasharray = `${ribbonLen}`;
      ribbon.style.strokeDashoffset = `${ribbonLen}`;
      ribbon.style.opacity = "0";

      if (ribbonHighlight) {
        const hlLen = ribbonHighlight.getTotalLength();
        ribbonHighlight.style.strokeDasharray = `${hlLen}`;
        ribbonHighlight.style.strokeDashoffset = `${hlLen}`;
        ribbonHighlight.style.opacity = "0";
      }

      const mossLengths = mossPaths.map((p) => p.getTotalLength());
      mossPaths.forEach((p, i) => {
        p.style.strokeDasharray = `${mossLengths[i]}`;
        p.style.strokeDashoffset = `${mossLengths[i]}`;
        p.style.opacity = "0";
      });

      gsap.set(droplets, { scale: 0, opacity: 0, transformOrigin: "50% 50%" });
      gsap.set(bottleRef.current, { y: 30, opacity: 0, scale: 0.96, rotation: 0 });
      if (pumpRef.current) gsap.set(pumpRef.current, { y: 0 });
      if (glowRef.current) gsap.set(glowRef.current, { opacity: 0.35, scale: 0.8 });

      tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });

    // 0.0 - 1.0 : entrance
    tl.to(
      bottleRef.current,
      { y: 0, opacity: 1, scale: 1, duration: 1.0, ease: "power2.out" },
      0
    );

    // 1.0 - 1.4 : idle breath
    tl.to(
      bottleRef.current,
      { y: -4, duration: 0.4, ease: "sine.inOut" },
      1.0
    );

    // 1.4 - 2.0 : tilt + pump depress
    tl.to(
      bottleRef.current,
      { rotation: 18, y: -2, duration: 0.6, ease: "power2.inOut", transformOrigin: "50% 90%" },
      1.4
    );
    if (pumpRef.current) {
      tl.to(
        pumpRef.current,
        { y: 6, duration: 0.35, ease: "power2.in" },
        1.55
      );
    }

    // 2.0 - 3.2 : squirt (ribbon + moss + droplets + glow bloom)
    tl.to(
      ribbon,
      { opacity: 1, duration: 0.08, ease: "none" },
      2.0
    );
    tl.to(
      ribbon,
      { strokeDashoffset: 0, duration: 1.1, ease: "power2.out" },
      2.0
    );
    if (ribbonHighlight) {
      tl.to(ribbonHighlight, { opacity: 0.6, duration: 0.1 }, 2.05);
      tl.to(
        ribbonHighlight,
        { strokeDashoffset: 0, duration: 1.0, ease: "power2.out" },
        2.1
      );
    }
    tl.to(
      mossPaths,
      {
        opacity: 1,
        strokeDashoffset: 0,
        duration: 0.9,
        ease: "power1.out",
        stagger: 0.08,
      },
      2.15
    );
    tl.to(
      droplets,
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.05,
      },
      2.5
    );
    if (glowRef.current) {
      tl.to(
        glowRef.current,
        { opacity: 0.7, scale: 1.1, duration: 0.8, ease: "power2.out" },
        2.0
      );
    }

    // 3.2 - 3.8 : peak hold + micro-sway
    tl.to(
      bottleRef.current,
      { rotation: 16, duration: 0.3, ease: "sine.inOut", yoyo: true, repeat: 1 },
      3.2
    );

    // 3.8 - 4.8 : retract + reset
    tl.to(
      ribbon,
      { strokeDashoffset: ribbonLen, duration: 0.7, ease: "power2.in" },
      3.8
    );
    tl.to(ribbon, { opacity: 0, duration: 0.4, ease: "power2.in" }, 4.2);
    if (ribbonHighlight) {
      tl.to(
        ribbonHighlight,
        {
          strokeDashoffset: (ribbonHighlight.getTotalLength?.() ?? 0),
          opacity: 0,
          duration: 0.6,
          ease: "power2.in",
        },
        3.8
      );
    }
    tl.to(
      mossPaths,
      {
        strokeDashoffset: (i) => mossLengths[i],
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
        stagger: 0.04,
      },
      3.85
    );
    tl.to(
      droplets,
      {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power2.in",
        stagger: 0.03,
      },
      3.9
    );
    tl.to(
      bottleRef.current,
      { rotation: 0, y: 0, duration: 0.8, ease: "power2.inOut" },
      4.0
    );
    if (pumpRef.current) {
      tl.to(
        pumpRef.current,
        { y: 0, duration: 0.5, ease: "power2.out" },
        4.0
      );
    }
    if (glowRef.current) {
      tl.to(
        glowRef.current,
        { opacity: 0.35, scale: 0.8, duration: 0.9, ease: "power2.inOut" },
        4.0
      );
    }

      // 4.8 - 6.0 : still + gentle breath, then reset droplets for next loop
      tl.to(
        bottleRef.current,
        { y: -3, duration: 0.6, ease: "sine.inOut", yoyo: true, repeat: 1 },
        4.8
      );
      // Reset droplet y offset for next loop (without animating visibly)
      tl.set(droplets, { y: 0, scale: 0, opacity: 0 }, 5.9);
    };

    run();

    return () => {
      cancelled = true;
      tl?.kill();
    };
  }, [reducedMotion]);

  // Reduced-motion fallback: static bottle only
  if (reducedMotion) {
    return (
      <div
        className="relative flex items-center justify-center w-full"
        aria-label="Seaduced bottle"
      >
        <Image
          src={bottleSrc}
          alt="Seaduced Sea Moss Intimate Wellness Bottle"
          width={420}
          height={630}
          className="relative z-10 drop-shadow-2xl h-[420px] md:h-[560px] w-auto object-contain"
          priority
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      aria-label="Seaduced bottle with animated sea-moss splash"
      role="img"
      className="relative w-full h-[420px] md:h-[560px] flex items-center justify-center"
    >
      {/* Warm gold bloom behind bottle */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full bg-[#AD9952]/40 blur-[90px]" />
      </div>

      {/* SVG splash layer (above bottle) */}
      <svg
        viewBox="0 0 600 700"
        className="pointer-events-none absolute inset-0 w-full h-full z-20"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Cream ribbon — arcs up-right then folds back */}
        <path
          ref={ribbonRef}
          d="M 260 180 C 310 80, 420 40, 500 90 C 540 115, 548 190, 540 260"
          stroke="#FDF8F0"
          strokeWidth={22}
          strokeLinecap="round"
          fill="none"
        />

        {/* Ribbon specular highlight */}
        <path
          ref={ribbonHighlightRef}
          d="M 268 170 C 316 78, 420 44, 496 94"
          stroke="#FFFFFF"
          strokeOpacity={0.9}
          strokeWidth={6}
          strokeLinecap="round"
          fill="none"
        />

        {/* Sea-moss filaments inside the ribbon bounds */}
        <path
          ref={(el) => {
            mossRefs.current[0] = el;
          }}
          d="M 275 172 C 320 110, 410 68, 490 108"
          stroke="#AD9952"
          strokeWidth={2.5}
          strokeLinecap="round"
          fill="none"
        />
        <path
          ref={(el) => {
            mossRefs.current[1] = el;
          }}
          d="M 282 184 C 330 130, 400 90, 478 124 C 510 140, 524 180, 520 230"
          stroke="#8C7A3A"
          strokeWidth={2}
          strokeLinecap="round"
          fill="none"
        />
        <path
          ref={(el) => {
            mossRefs.current[2] = el;
          }}
          d="M 290 178 C 340 128, 418 84, 486 112"
          stroke="#AD9952"
          strokeWidth={2}
          strokeLinecap="round"
          fill="none"
        />
        <path
          ref={(el) => {
            mossRefs.current[3] = el;
          }}
          d="M 296 190 C 346 150, 412 120, 500 148"
          stroke="#C5A55A"
          strokeWidth={2.5}
          strokeLinecap="round"
          fill="none"
        />
        <path
          ref={(el) => {
            mossRefs.current[4] = el;
          }}
          d="M 270 176 C 308 98, 408 58, 498 102"
          stroke="#8C7A3A"
          strokeWidth={1.8}
          strokeLinecap="round"
          fill="none"
        />

        {/* Splash crown droplets around ribbon apex (~460, 70) */}
        <circle
          ref={(el) => {
            dropletRefs.current[0] = el;
          }}
          cx="420"
          cy="60"
          r="10"
          fill="#FDF8F0"
        />
        <circle
          ref={(el) => {
            dropletRefs.current[1] = el;
          }}
          cx="470"
          cy="48"
          r="8"
          fill="#FDF8F0"
        />
        <circle
          ref={(el) => {
            dropletRefs.current[2] = el;
          }}
          cx="510"
          cy="70"
          r="11"
          fill="#FDF8F0"
        />
        <circle
          ref={(el) => {
            dropletRefs.current[3] = el;
          }}
          cx="445"
          cy="35"
          r="6"
          fill="#FDF8F0"
        />
        <circle
          ref={(el) => {
            dropletRefs.current[4] = el;
          }}
          cx="540"
          cy="110"
          r="9"
          fill="#FDF8F0"
        />
        <circle
          ref={(el) => {
            dropletRefs.current[5] = el;
          }}
          cx="395"
          cy="85"
          r="7"
          fill="#FDF8F0"
        />
        <circle
          ref={(el) => {
            dropletRefs.current[6] = el;
          }}
          cx="490"
          cy="28"
          r="5"
          fill="#AD9952"
        />
        <circle
          ref={(el) => {
            dropletRefs.current[7] = el;
          }}
          cx="525"
          cy="45"
          r="6"
          fill="#FDF8F0"
        />
      </svg>

      {/* Bottle — transform origin at base so tilt pivots naturally */}
      <div
        ref={bottleRef}
        className="relative z-10 flex flex-col items-center justify-end h-full will-change-transform"
        style={{ transformOrigin: "50% 90%" }}
      >
        {/* Pump head overlay — sits near top of bottle, depresses during squirt.
            Purely decorative — the actual pump is baked into the PNG. This
            shifts the ENTIRE bottle group's top edge subtly to sell the press. */}
        <div ref={pumpRef} className="will-change-transform">
          <Image
            src={bottleSrc}
            alt="Seaduced Sea Moss Intimate Wellness Bottle"
            width={420}
            height={630}
            className="h-[420px] md:h-[560px] w-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import type { BundleVisual } from "@/lib/bundles";

/**
 * BundleComposite — visual composition of a bundle using a single source bottle
 * image. `visual` determines how many bottles render and how they're arranged.
 * Reused across shop cards, detail hero, and cart thumbnails.
 */
export function BundleComposite({
  visual,
  size = "md",
}: {
  visual: BundleVisual;
  size?: "sm" | "md" | "lg";
}) {
  const src = "/images/bottle-isolated.png";

  const thumbPx = size === "sm" ? 80 : size === "md" ? 200 : 420;

  if (visual === "single") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-[60%] h-[92%]">
          <Image
            src={src}
            alt="Seaduced 5 oz bottle"
            fill
            className="object-contain drop-shadow-[0_16px_22px_rgba(38,55,71,0.25)]"
            sizes={`${thumbPx}px`}
          />
        </div>
      </div>
    );
  }

  if (visual === "triple") {
    return (
      <div className="relative w-full h-full flex items-end justify-center">
        {[-1, 0, 1].map((i) => (
          <div
            key={i}
            className="relative h-[82%] aspect-[1/3]"
            style={{
              transform: `translateX(${i * 32}%) rotate(${i * 4}deg)`,
              zIndex: i === 0 ? 3 : 2,
              filter: `drop-shadow(0 ${12 + Math.abs(i) * 3}px ${16 + Math.abs(i) * 3}px rgba(38,55,71,${0.2 - Math.abs(i) * 0.04}))`,
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-contain"
              sizes={`${Math.round(thumbPx / 3)}px`}
            />
          </div>
        ))}
      </div>
    );
  }

  if (visual === "sextet") {
    const positions = [-2.5, -1.5, -0.5, 0.5, 1.5, 2.5];
    return (
      <div className="relative w-full h-full flex items-end justify-center">
        {positions.map((i) => (
          <div
            key={i}
            className="relative h-[78%] aspect-[1/3]"
            style={{
              transform: `translateX(${i * 18}%) rotate(${i * 5}deg)`,
              zIndex: 10 - Math.round(Math.abs(i) * 2),
              filter: `drop-shadow(0 ${10 + Math.abs(i) * 2}px ${14 + Math.abs(i) * 2}px rgba(38,55,71,${0.18 - Math.abs(i) * 0.02}))`,
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-contain"
              sizes={`${Math.round(thumbPx / 6)}px`}
            />
          </div>
        ))}
      </div>
    );
  }

  // gift
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[60%] h-[90%]">
        <Image
          src={src}
          alt="Seaduced 5 oz bottle (gift set)"
          fill
          className="object-contain drop-shadow-[0_16px_22px_rgba(38,55,71,0.25)]"
          sizes={`${thumbPx}px`}
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-y-[8%] left-1/2 -translate-x-1/2 w-[12%] bg-[#AD9952]/85 rounded-sm shadow-[0_4px_10px_rgba(173,153,82,0.35)]"
      />
      <div
        aria-hidden
        className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[36%] h-[10%]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="block w-[48%] h-full bg-[#AD9952]/85 rounded-t-full -rotate-[22deg] origin-bottom-right" />
          <span className="block w-[48%] h-full bg-[#AD9952]/85 rounded-t-full rotate-[22deg] origin-bottom-left" />
        </div>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18%] h-[70%] bg-[#AD9952] rounded-sm" />
      </div>
    </div>
  );
}

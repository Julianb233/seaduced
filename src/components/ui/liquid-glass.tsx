"use client";

import React, {
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";

/* ============================================================
 * Types
 * ============================================================ */

export interface GlassEffectProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  href?: string;
  onClick?: () => void;
}

export interface DockIcon {
  src?: string;
  icon?: ReactNode;
  alt: string;
  onClick?: () => void;
  href?: string;
}

/* ============================================================
 * GlassEffect — the shared glass container shell
 * ============================================================ */

const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style,
  href,
  onClick,
}) => {
  const glassStyle: CSSProperties = {
    boxShadow: "0 6px 24px rgba(0, 0, 0, 0.18)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  };

  const content = (
    <div
      className={`relative flex font-semibold overflow-hidden text-black cursor-pointer transition-all duration-700 ${className}`}
      style={glassStyle}
    >
      {/* backdrop blur + SVG displacement filter (requires <GlassFilter /> mounted once) */}
      <div
        className="absolute z-0 inset-0 rounded-[inherit] overflow-hidden isolate"
        style={{
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          filter: "url(#glass-distortion)",
        }}
      />

      {/* translucent tint layer */}
      <div
        className="z-10 absolute inset-0 rounded-[inherit]"
        style={{ background: "rgba(255, 255, 255, 0.18)" }}
      />

      {/* inner highlight */}
      <div
        className="absolute z-20 inset-0 rounded-[inherit] overflow-hidden"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.25)",
        }}
      />

      {/* actual content */}
      <div className="relative z-30">{children}</div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="inline-flex"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className="inline-flex">
        {content}
      </button>
    );
  }

  return content;
};

/* ============================================================
 * GlassFilter — SVG displacement map (mount once per page)
 * ============================================================ */

const GlassFilter: React.FC = () => (
  <svg style={{ display: "none" }} aria-hidden="true">
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="200"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

/* ============================================================
 * GlassDock — macOS-style icon dock
 * ============================================================ */

interface GlassDockProps {
  icons: DockIcon[];
  className?: string;
}

const GlassDock: React.FC<GlassDockProps> = ({ icons, className = "" }) => {
  const dockRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = dockRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouseX(e.clientX - rect.left);
  };

  const handleMouseLeave = () => setMouseX(null);

  return (
    <GlassEffect
      className={`rounded-[2rem] p-3 ${className}`}
      style={{ borderRadius: "32px" }}
    >
      <div
        ref={dockRef}
        className="flex items-end gap-3 px-2"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {icons.map((ic, i) => {
          // simple magnification based on pointer distance
          let scale = 1;
          if (mouseX !== null && dockRef.current) {
            const children = Array.from(dockRef.current.children) as HTMLElement[];
            const child = children[i];
            if (child) {
              const center =
                child.offsetLeft + child.offsetWidth / 2;
              const dist = Math.abs(mouseX - center);
              const maxDist = 120;
              scale =
                dist < maxDist ? 1 + (1 - dist / maxDist) * 0.35 : 1;
            }
          }

          const inner = ic.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={ic.src}
              alt={ic.alt}
              className="w-10 h-10 object-contain"
            />
          ) : (
            <div className="w-10 h-10 flex items-center justify-center">
              {ic.icon}
            </div>
          );

          const body = (
            <div
              className="flex items-center justify-center rounded-2xl transition-transform duration-200 ease-out"
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "bottom center",
              }}
              aria-label={ic.alt}
            >
              {inner}
            </div>
          );

          if (ic.href) {
            return (
              <a
                key={i}
                href={ic.href}
                target={ic.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  ic.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block"
                aria-label={ic.alt}
              >
                {body}
              </a>
            );
          }
          if (ic.onClick) {
            return (
              <button
                key={i}
                type="button"
                onClick={ic.onClick}
                className="block"
                aria-label={ic.alt}
              >
                {body}
              </button>
            );
          }
          return (
            <div key={i} className="block" aria-label={ic.alt}>
              {body}
            </div>
          );
        })}
      </div>
    </GlassEffect>
  );
};

/* ============================================================
 * GlassButton — inline glass CTA
 * ============================================================ */

interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  ariaLabel?: string;
}

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  ariaLabel,
}) => (
  <button
    type={type}
    onClick={onClick}
    aria-label={ariaLabel}
    className={`relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-6 py-3 font-semibold text-[#FAFBFB] transition-all duration-500 hover:-translate-y-[1px] active:translate-y-[1px] ${className}`}
    style={{
      boxShadow: "0 6px 24px rgba(0, 0, 0, 0.18)",
    }}
  >
    <span
      className="absolute inset-0 rounded-[inherit]"
      style={{
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(3px)",
        filter: "url(#glass-distortion)",
      }}
    />
    <span
      className="absolute inset-0 rounded-[inherit]"
      style={{ background: "rgba(255, 255, 255, 0.18)" }}
    />
    <span
      className="absolute inset-0 rounded-[inherit]"
      style={{
        boxShadow:
          "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.25)",
      }}
    />
    <span className="relative z-10">{children}</span>
  </button>
);

export { GlassEffect, GlassDock, GlassButton, GlassFilter };

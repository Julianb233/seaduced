"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";
import type { BundleSlug } from "@/lib/bundles";
import { bundlesBySlug } from "@/lib/bundles";

interface Props {
  slug: BundleSlug;
  qty?: number;
  variant?: "primary" | "secondary" | "dark";
  size?: "sm" | "md" | "lg";
  label?: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function AddToCartButton({
  slug,
  qty = 1,
  variant = "primary",
  size = "md",
  label,
  className = "",
  fullWidth = false,
}: Props) {
  const addItem = useCart((s) => s.addItem);
  const [added, setAdded] = useState(false);
  const bundle = bundlesBySlug[slug];

  const sizeClasses =
    size === "sm"
      ? "px-4 py-2 text-xs"
      : size === "lg"
      ? "px-7 py-4 text-base"
      : "px-5 py-3 text-sm";

  const variantClasses =
    variant === "primary"
      ? "bg-[#AD9952] text-white shadow-[#AD9952]/30 hover:shadow-lg hover:shadow-[#AD9952]/40"
      : variant === "dark"
      ? "bg-[#263747] text-white shadow-[#263747]/25 hover:shadow-lg hover:shadow-[#263747]/35"
      : "bg-white text-[#263747] border border-[#263747]/20 hover:bg-[#263747]/5";

  function handleAdd() {
    if (!bundle) return;
    addItem(slug, qty);
    setAdded(true);
    toast.success(`${bundle.name} added to your ritual`, {
      description: `${qty} x ${bundle.name} — $${bundle.price * qty}`,
    });
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <motion.button
      type="button"
      onClick={handleAdd}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`relative overflow-hidden rounded-full font-semibold tracking-wide shadow-md transition-shadow inline-flex items-center justify-center gap-2 ${sizeClasses} ${variantClasses} ${fullWidth ? "w-full" : ""} ${className}`}
      aria-label={`Add ${bundle?.name ?? "bundle"} to cart`}
    >
      <motion.span
        className="absolute inset-0 bg-white/15"
        initial={{ x: "-110%" }}
        whileHover={{ x: "110%" }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative inline-flex items-center gap-2">
        {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
        {label ?? (bundle ? `Add to cart — $${bundle.price * qty}` : "Add to cart")}
      </span>
    </motion.button>
  );
}

"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#1E1E2E]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-black">
          <span className="text-white">SEADUC</span>
          <span className="text-[#C5A55A]">ED</span>
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-[#C5A55A]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

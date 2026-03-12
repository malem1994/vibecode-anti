"use client";

import React from "react";
import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";

/**
 * Navbar component for the MORAE shop.
 * Features a minimalist floating design with backdrop blur.
 *
 * @returns {React.ReactElement} The Navbar component.
 * @example
 * <Navbar />
 */
export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div
        className="shadow-morae flex h-12 w-full max-w-xl items-center justify-between
                    border border-white/10 bg-black/60 px-6 backdrop-blur-xl"
      >
        {/* Menu */}
        <button
          aria-label="Menu"
          className="text-white/70 transition-opacity hover:text-white"
        >
          <Menu size={18} />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-base tracking-[0.25em] text-white"
        >
          MORAE®
        </Link>

        {/* Cart */}
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-mono tracking-[-0.28px] text-white/60">1</span>
          <ShoppingBag size={16} className="text-white/70" />
        </div>
      </div>
    </nav>
  );
}

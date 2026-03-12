"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Variant {
  id: string;
  name: string;
  image: string;
}

const VARIANTS: Variant[] = [
  { id: "orange", name: "Orange", image: "/images/morae/orange_headphone.jpg" },
  { id: "gray", name: "Gray", image: "/images/morae/grey_headphone.jpg" },
  { id: "black", name: "Black", image: "/images/morae/black_headphone.jpg" },
];

/**
 * FloatingShopBar — a persistent bottom bar with variant selection,
 * quantity controls and an "Add to Cart" button.
 *
 * @returns {React.ReactElement} The FloatingShopBar component.
 */
export function FloatingShopBar() {
  const [activeVariant, setActiveVariant] = useState(VARIANTS[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div
      className="shadow-morae fixed bottom-6 left-1/2 z-50 flex h-16 w-[calc(100%-2rem)]
                  max-w-2xl -translate-x-1/2 items-center justify-between
                  border border-white/10 bg-zinc-900/90 px-4 backdrop-blur-xl md:px-6"
    >
      {/* Thumbnail + info */}
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden border border-white/5 bg-black/40 p-0.5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVariant.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.25 }}
              className="relative h-full w-full"
            >
              <Image
                src={activeVariant.image}
                alt={activeVariant.name}
                fill
                className="object-cover"
                sizes="40px"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col">
          <span className="font-serif text-[11px] leading-none text-white">
            MORAE Headphone
          </span>
          <div className="mt-1 flex gap-2">
            {VARIANTS.map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveVariant(v)}
                className={cn(
                  "font-mono text-[9px] tracking-[-0.28px] transition-colors",
                  activeVariant.id === v.id
                    ? "text-white"
                    : "text-white/35 hover:text-white/60",
                )}
              >
                {v.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Price + controls */}
      <div className="flex items-center gap-4 md:gap-6">
        <div className="hidden flex-col items-end sm:flex">
          <span className="font-mono text-[11px] tracking-[-0.28px] text-white">
            $259.00
          </span>
          <button className="font-mono text-[9px] tracking-[-0.28px] text-morae-orange underline underline-offset-2 hover:text-morae-orange-hover">
            More Details
          </button>
        </div>

        {/* Quantity */}
        <div className="flex h-9 items-center gap-3 border border-white/10 bg-white/5 px-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="text-white/40 transition-colors hover:text-white"
          >
            <Minus size={12} />
          </button>
          <span className="w-3 text-center font-mono text-xs tracking-[-0.28px] text-white">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="text-white/40 transition-colors hover:text-white"
          >
            <Plus size={12} />
          </button>
        </div>

        {/* CTA */}
        <button className="h-9 bg-white px-5 font-sans text-[10px] font-medium uppercase text-black transition-colors hover:bg-white/90">
          Add to cart
        </button>
      </div>
    </div>
  );
}

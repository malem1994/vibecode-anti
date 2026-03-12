"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * HeroSection — full-screen hero with the main product image,
 * large serif headline, and a "Buy Now" CTA.
 *
 * @returns {React.ReactElement} The HeroSection component.
 */
export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 pb-16 pt-24">
      {/* Floating monospace labels */}
      <p
        className="absolute left-10 top-[25%] z-10 hidden max-w-[180px]
                   font-mono text-sm uppercase leading-[1.2] tracking-[-0.28px] text-white/40 sm:block"
      >
        Designed to feel nothing — and that's what makes it real.
      </p>

      <p
        className="absolute right-20 top-[45%] z-10 hidden
                   font-mono text-sm uppercase tracking-[-0.28px] text-morae-orange md:block"
      >
        Distortion in clarity
      </p>

      {/* Main headphone image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-0 flex aspect-square w-full max-w-[700px] items-center justify-center lg:aspect-video"
      >
        <Image
          src="/images/morae/hero.png"
          alt="MORAE Headphones — front view"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 700px"
        />
      </motion.div>

      {/* Bottom floor: headline + CTA */}
      <div className="absolute bottom-16 left-0 right-0 flex flex-col items-end justify-between gap-8 px-10 md:flex-row md:items-end md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl font-serif text-[2.75rem] italic leading-[0.9] tracking-[-1.76px] text-white md:text-[3.5rem] md:tracking-[-2.8px] lg:text-[5rem] lg:tracking-[-4px]"
        >
          Silence speaks louder when design refuses to explain itself.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex max-w-[240px] flex-col items-end gap-4"
        >
          <p className="text-right font-mono text-sm leading-[1.2] tracking-[-0.28px] text-white/50">
            In a world full of noise, silence became a choice.
          </p>
          <button className="h-10 bg-white px-8 font-sans text-sm font-medium uppercase text-black transition-colors hover:bg-white/90">
            Buy Now
          </button>
          <span className="mt-2 font-mono text-sm uppercase tracking-[-0.28px] text-white/30">
            [Scroll]
          </span>
        </motion.div>
      </div>
    </section>
  );
}

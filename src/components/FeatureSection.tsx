"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * FeatureSection — immersive full-bleed section with large serif text
 * and a parallax-style product detail shot.
 *
 * @returns {React.ReactElement} The FeatureSection component.
 */
export function FeatureSection() {
  return (
    <section className="relative flex w-full flex-col items-center bg-black">
      {/* Sticky text overlay */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/morae/background.jpg"
            alt="Feature background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-5xl px-6 text-center font-[var(--font-instrument-serif)] text-5xl italic leading-[0.85] tracking-tighter text-white md:text-8xl lg:text-9xl"
        >
          Sound is not just heard — it moves through you. It breathes, it
          glows, it becomes part of who you are.
        </motion.h2>
      </div>

      {/* Detail shot below sticky text */}
      <div className="relative z-10 w-full max-w-4xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-video w-full border border-white/10"
        >
          <Image
            src="/images/morae/foam_detail.png"
            alt="Memory foam cushion detail"
            fill
            className="object-cover opacity-80"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
          <span className="absolute left-8 top-8 font-[var(--font-roboto-mono)] text-[10px] uppercase tracking-widest text-morae-orange">
            [ The Core ]
          </span>
        </motion.div>
      </div>
    </section>
  );
}

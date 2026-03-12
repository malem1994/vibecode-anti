"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * ProductViewer — technical product detail section.
 * Displays product shots with indexed feature labels in monospace.
 *
 * @returns {React.ReactElement} The ProductViewer component.
 */
export function ProductViewer() {
  return (
    <section className="relative w-full bg-black px-6 py-32">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-24 lg:grid-cols-2">
        {/* Product detail image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square w-full"
        >
          <Image
            src="/images/morae/shell_detail.png"
            alt="Transparent shell detail"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        {/* Technical feature labels */}
        <div className="flex flex-col gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 block font-[var(--font-roboto-mono)] text-[10px] uppercase tracking-[0.2em] text-morae-orange">
              [ 4 ]
            </span>
            <h2 className="mb-6 font-[var(--font-instrument-serif)] text-4xl italic leading-tight text-white md:text-5xl">
              / Intuitive Touch Controls
            </h2>
            <p className="max-w-md font-[var(--font-roboto-mono)] text-sm uppercase leading-relaxed text-white/40">
              No buttons. Just gestures. Smooth, natural, and quietly precise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="mb-4 block font-[var(--font-roboto-mono)] text-[10px] uppercase tracking-[0.2em] text-morae-orange">
              [ 5 ]
            </span>
            <h2 className="mb-6 font-[var(--font-instrument-serif)] text-4xl italic leading-tight text-white md:text-5xl">
              / Adaptive Smart Sound Balance
            </h2>
            <p className="max-w-md font-[var(--font-roboto-mono)] text-sm uppercase leading-relaxed text-white/40">
              Every space has a tone. It learns and adjusts — so you don&apos;t have to.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

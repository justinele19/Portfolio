"use client";

import { motion } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    /* Fills the screen below the nav bar so the hero card is the only thing
       in frame on load. Card is vertically centred inside it. */
    <section className="section-shell flex min-h-[calc(100svh-var(--header-height))] items-center justify-center">
      {/* HERO CARD. Width = --content-width (same as every section below, so
          everything lines up). Height and radius are tokens in globals.css.
          Text inside is sized in `cqw` — 1cqw = 1% of this card's width — so
          it all rescales together if you change the card size. The comment
          after each value is its size at the 1292px design width. */}
      <div className="@container w-full h-[var(--hero-height)] flex flex-col justify-center gap-[3.39cqw] rounded-[var(--hero-radius)] bg-hero-card px-[var(--hero-padding-x)]">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          /* 7.91cqw ≈ 82px · max-w 80cqw ≈ 832px controls where it wraps */
          className="font-display text-[clamp(30px,7.91cqw,96px)] @md:max-w-[80cqw] font-bold leading-[1.1]"
        >
          Designed and built, start to finish.
        </motion.h1>

        {/* Paragraph + button, right-aligned under the headline */}
        <div className="flex flex-col items-end gap-[1.32cqw] self-end text-right @md:max-w-[74cqw]">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
            /* 2.11cqw ≈ 22px */
            className="text-[clamp(13px,2.11cqw,26px)] leading-normal tracking-[0.01em] text-hero-muted"
          >
            Studying CS at UC San Diego, with a background in security
            research and experience alongside DoD and NIWC Pacific leaders.
          </motion.p>
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            /* 3.44cqw ≈ 36px horizontal padding · 2.11cqw ≈ 22px text */
            className="inline-flex items-center justify-center rounded-[var(--hero-radius)] bg-hero-button px-[clamp(20px,3.44cqw,44px)] py-[clamp(8px,1.17cqw,16px)] text-[clamp(13px,2.11cqw,26px)] tracking-[0.01em] transition-colors duration-200 hover:bg-border"
          >
            View My Work
          </motion.a>
        </div>
      </div>
    </section>
  );
}

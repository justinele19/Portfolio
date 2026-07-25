"use client";

import { motion } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="mx-auto max-w-[1220px] px-6 pb-16 pt-6 sm:px-8">
      <div className="flex flex-col gap-10 rounded-[40px] bg-border/70 px-8 py-16 sm:rounded-[60px] sm:px-14 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="font-display max-w-xl text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[60px]"
        >
          Designed and built, start to finish.
        </motion.h1>

        <div className="flex flex-col items-start gap-6 lg:max-w-md lg:items-end">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
            className="text-base leading-relaxed tracking-[0.01em] text-muted-foreground lg:text-right"
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
            className="inline-flex items-center justify-center rounded-full bg-surface-muted px-6 py-3 text-base tracking-[0.01em] transition-colors duration-200 hover:bg-border"
          >
            View My Work
          </motion.a>
        </div>
      </div>
    </section>
  );
}

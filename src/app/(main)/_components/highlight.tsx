"use client";
import { motion } from "framer-motion";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mx-auto px-4 text-center text-4xl font-bold leading-relaxed text-neutral-700 dark:text-white lg:leading-snug"
      >
        Plan Smarter, Connect Locally,
        <Highlight className="text-black dark:text-white">
          Celebrate Seamlessly!
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}

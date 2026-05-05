"use client";

import { useScrollProgress } from "@/lib/hooks";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{
        scaleX: progress,
        background: `linear-gradient(90deg, oklch(0.65 0.15 250), oklch(0.70 0.18 250))`,
      }}
    />
  );
}

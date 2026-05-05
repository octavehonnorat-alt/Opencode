"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { site } from "@/config/theme";
import { Magnetic, Reveal, TextReveal } from "@/components/effects/Animations";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroScene } from "@/components/effects/HeroScene";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroScene />

      <div className="absolute inset-0 gradient-mesh" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="flex flex-col items-center text-center">
          <Reveal delay={0.2}>
            <div className="glass rounded-full px-6 py-2 mb-10 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-sm font-mono text-warm-light tracking-wider uppercase">
                Disponible pour de nouveaux projets
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight mb-8">
              <span className="block text-lunar">{site.name.split(" ")[0]}</span>
              <span className="block text-accent glow-text">{site.name.split(" ")[1] || ""}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-accent/50" />
              <p className="text-mono text-sm tracking-[0.3em] uppercase text-warm-light">
                {site.title}
              </p>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-accent/50" />
            </div>
          </Reveal>

          <div className="max-w-2xl mb-16">
            <TextReveal
              text={site.description}
              className="text-lg md:text-xl text-warm-light leading-relaxed max-line-length mx-auto"
            />
          </div>

          <Reveal delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Magnetic>
                <motion.a
                  href="#projets"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group px-8 py-4 bg-accent/10 border border-accent/30 rounded-xl text-lunar font-medium tracking-wide hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Voir mes projets
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.a>
              </Magnetic>
              <Magnetic>
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 glass rounded-xl text-warm-light font-medium tracking-wide hover:text-lunar transition-colors duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Me contacter
                </motion.a>
              </Magnetic>
            </div>
          </Reveal>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <a
              href="#projets"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex flex-col items-center gap-2 text-warm-light/40 hover:text-warm-light transition-colors duration-300"
            >
              <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
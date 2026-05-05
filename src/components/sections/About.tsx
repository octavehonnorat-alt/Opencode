"use client";

import { motion, useInView } from "framer-motion";
import { Reveal, TextReveal, Parallax, Stagger, StaggerItem, Magnetic } from "@/components/effects/Animations";
import { site } from "@/config/theme";
import { Download, Sparkles } from "lucide-react";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Framer Motion", "Three.js", "GSAP", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Prisma", "Redis", "GraphQL"] },
  { category: "Design", items: ["Figma", "Design Systems", "OKLCH", "Typography", "Motion Design", "Prototyping"] },
  { category: "DevOps", items: ["Docker", "Vercel", "CI/CD", "AWS", "GitHub Actions", "Terraform"] },
];

function SkillBar({ name, index }: { name: string; index: number }) {
  return (
    <StaggerItem>
      <motion.span
        className="px-4 py-2 glass rounded-lg text-sm font-mono text-warm-light hover:text-lunar hover:glass-strong transition-all duration-300 cursor-default inline-block"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {name}
      </motion.span>
    </StaggerItem>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <span className="text-mono text-xs tracking-[0.3em] uppercase text-accent mb-4 block">
            À propos
          </span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl font-bold text-lunar mb-16">
            Qui suis-je<span className="text-accent">?</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5">
            <Parallax speed={0.3}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden glass">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse at 40% 40%, oklch(0.65 0.15 250 / 0.1), oklch(0.08 0.015 260))`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="w-48 h-48 border border-lunar/10 rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: [360, 0] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute w-32 h-32 border border-accent/20 rounded-full"
                    />
                    <span className="text-display text-6xl font-bold text-lunar/10 select-none">
                      AM
                    </span>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 glass rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Sparkles className="w-8 h-8 text-accent" />
                </motion.div>
              </div>
            </Parallax>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <TextReveal
              text="Je suis un développeur créatif passionné par la conception d'expériences web immersives et mémorables."
              className="text-display text-2xl md:text-3xl font-medium text-lunar leading-relaxed mb-8"
            />

            <Reveal delay={0.3}>
              <p className="text-warm-light leading-relaxed mb-6 max-line-length">
                Avec plus de 8 ans d'expérience, je combine expertise technique et sensibilité
                esthétique pour créer des interfaces qui marient performance et émotion. Mon
                approche : un design épuré, des animations fluides et une attention obsessionnelle
                aux détails.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-warm-light leading-relaxed mb-12 max-line-length">
                Chaque projet est une opportunité de repousser les limites du possible sur le web.
                Je crois que la technologie doit servir l'émotion, pas l'inverse.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <Magnetic>
                <motion.a
                  href="#"
                  className="group inline-flex items-center gap-3 px-6 py-3 glass rounded-xl text-warm-light hover:text-lunar transition-colors duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium tracking-wide">Télécharger le CV</span>
                </motion.a>
              </Magnetic>
            </Reveal>
          </div>
        </div>

        <div className="mt-32">
          <Reveal>
            <h3 className="text-display text-2xl md:text-3xl font-semibold text-lunar mb-12">
              Compétences<span className="text-accent">.</span>
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skills.map((group, gi) => (
              <Reveal key={group.category} delay={gi * 0.1}>
                <div>
                  <h4 className="text-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">
                    {group.category}
                  </h4>
                  <Stagger staggerDelay={0.05} className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <SkillBar key={item} name={item} index={i} />
                    ))}
                  </Stagger>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



"use client";

import { motion, useInView } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/effects/Animations";

const experiences = [
  {
    period: "2022 — Présent",
    role: "Lead Creative Developer",
    company: "Studio Lumière",
    description:
      "Direction technique et créative d'une équipe de 5 développeurs. Conception d'expériences web immersives pour des clients de luxe et des marques premium.",
    tech: ["Next.js", "Three.js", "GSAP", "Figma"],
  },
  {
    period: "2020 — 2022",
    role: "Senior Frontend Developer",
    company: "Nebula Tech",
    description:
      "Développement de plateformes SaaS complexes avec visualisations de données temps réel. Optimisation des performances et de l'accessibilité.",
    tech: ["React", "D3.js", "TypeScript", "PostgreSQL"],
  },
  {
    period: "2018 — 2020",
    role: "Frontend Developer",
    company: "Agence Flux",
    description:
      "Création de sites vitrines et e-commerce pour des PME et startups. Mise en place de design systems et d'animations interactives.",
    tech: ["Vue.js", "Nuxt", "SCSS", "Prismic"],
  },
  {
    period: "2016 — 2018",
    role: "Web Developer",
    company: "Digitale Startup",
    description:
      "Développement full-stack d'applications web. Premières expériences avec React et les animations CSS avancées.",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
  },
];

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  return (
    <StaggerItem>
      <div className="relative pl-8 md:pl-12 pb-12 last:pb-0 group">
        <div className="absolute left-0 top-2 w-[1px] h-full bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

        <motion.div
          className="absolute left-0 top-2 w-3 h-3 -translate-x-[5px] rounded-full border-2 border-accent bg-midnight-deep"
          whileInView={{ scale: [0, 1.2, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        />

        <div className="glass rounded-2xl p-6 md:p-8 hover:glass-strong transition-all duration-500 group-hover:translate-x-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-display text-xl font-semibold text-lunar group-hover:text-accent transition-colors duration-300">
                {exp.role}
              </h3>
              <p className="text-warm-light text-sm font-mono mt-1">{exp.company}</p>
            </div>
            <span className="text-mono text-xs tracking-widest uppercase text-accent whitespace-nowrap">
              {exp.period}
            </span>
          </div>

          <p className="text-warm-light text-sm leading-relaxed mb-4 max-line-length">
            {exp.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono tracking-wide glass rounded-md text-warm-light"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </StaggerItem>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <span className="text-mono text-xs tracking-[0.3em] uppercase text-accent mb-4 block">
            Parcours
          </span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl font-bold text-lunar mb-16">
            Expérience<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Stagger staggerDelay={0.15} className="max-w-3xl">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.period} exp={exp} index={i} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Magnetic, Reveal, Stagger, StaggerItem } from "@/components/effects/Animations";
import { cn } from "@/lib/utils";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";

const projects = [
  {
    id: "01",
    title: "Nebula Dashboard",
    category: "Web App",
    description:
      "Plateforme analytique temps réel avec visualisations 3D immersives et tableaux de bord interactifs.",
    tech: ["Next.js", "Three.js", "D3.js", "Prisma"],
    image: null,
    color: "oklch(0.65 0.15 250)",
  },
  {
    id: "02",
    title: "Lumière Studio",
    category: "Site Vitrine",
    description:
      "Site immersif pour un studio de photographie avec galerie 3D et transitions cinématiques.",
    tech: ["React", "GSAP", "WebGL", "Sanity"],
    image: null,
    color: "oklch(0.60 0.12 280)",
  },
  {
    id: "03",
    title: "Flux Commerce",
    category: "E-Commerce",
    description:
      "Boutique de luxe en ligne avec expérience d'achat premium, 3D product viewer et animations fluides.",
    tech: ["Next.js", "Stripe", "Framer Motion", "Shopify"],
    image: null,
    color: "oklch(0.55 0.10 200)",
  },
  {
    id: "04",
    title: "Prisme AI",
    category: "SaaS",
    description:
      "Interface utilisateur pour une plateforme IA avec visualisation de données complexes et dashboard adaptatif.",
    tech: ["TypeScript", "Python", "FastAPI", "PostgreSQL"],
    image: null,
    color: "oklch(0.58 0.13 230)",
  },
  {
    id: "05",
    title: "Écho Social",
    category: "Mobile App",
    description:
      "Application sociale avec système de messagerie temps réel, stories immersives et partage média.",
    tech: ["React Native", "Firebase", "WebRTC", "Expo"],
    image: null,
    color: "oklch(0.62 0.11 260)",
  },
  {
    id: "06",
    title: "Atlas Carto",
    category: "Data Viz",
    description:
      "Cartographie interactive avec visualisation géospatiale, analyses démographiques et couches de données multiples.",
    tech: ["Mapbox", "Deck.gl", "React", "Node.js"],
    image: null,
    color: "oklch(0.64 0.14 240)",
  },
];

const categories = ["Tous", "Web App", "Site Vitrine", "E-Commerce", "SaaS", "Mobile App", "Data Viz"];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative overflow-hidden rounded-2xl glass hover:glass-strong transition-all duration-500">
        <div
          className="relative h-64 sm:h-72 overflow-hidden"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${project.color} / 0.12), oklch(0.12 0.01 260)`,
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-display text-[120px] font-bold opacity-[0.06] text-lunar select-none">
                {project.id}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-6 right-6 w-24 h-24 rounded-full opacity-20"
            style={{ background: `radial-gradient(circle, ${project.color} / 0.3), transparent` }}
            animate={
              isHovered
                ? { scale: 1.5, opacity: 0.3 }
                : { scale: 1, opacity: 0.2 }
            }
            transition={{ duration: 0.5 }}
          />

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 origin-left"
            style={{ background: project.color }}
            initial={{ scaleX: 0 }}
            animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-mono text-xs tracking-widest uppercase text-accent">
              {project.category}
            </span>
            <div className="flex gap-2">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 glass rounded-lg flex items-center justify-center text-warm-light hover:text-lunar transition-colors cursor-pointer"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 glass rounded-lg flex items-center justify-center text-warm-light hover:text-lunar transition-colors cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.div>
            </div>
          </div>

          <h3 className="text-display text-2xl font-semibold text-lunar mb-3 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-warm-light text-sm leading-relaxed mb-6 max-line-length">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
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
    </motion.div>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const filtered =
    activeFilter === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projets" className="relative py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-mono text-xs tracking-[0.3em] uppercase text-accent mb-4 block">
                Portfolio
              </span>
              <h2 className="text-display text-4xl md:text-5xl lg:text-6xl font-bold text-lunar">
                Projets
                <span className="text-accent">.</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Magnetic key={cat} strength={0.2}>
                  <motion.button
                    onClick={() => setActiveFilter(cat)}
                    className={cn(
                      "px-4 py-2 text-xs font-mono tracking-wide rounded-lg transition-all duration-300",
                      activeFilter === cat
                        ? "glass-strong text-lunar"
                        : "text-warm-light hover:text-lunar"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {cat}
                  </motion.button>
                </Magnetic>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

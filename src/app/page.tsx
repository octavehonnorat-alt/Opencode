"use client";

import { useSmoothScroll } from "@/lib/hooks";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { LightOrbs } from "@/components/effects/LightOrbs";
import { GrainOverlay } from "@/components/effects/GrainOverlay";

export default function Home() {
  useSmoothScroll();

  return (
    <>
      <CustomCursor />
      <LightOrbs />
      <GrainOverlay />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
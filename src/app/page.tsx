"use client";

import dynamic from "next/dynamic";
import { useSmoothScroll } from "@/lib/hooks";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

const CustomCursor = dynamic(
  () => import("@/components/effects/CustomCursor").then((m) => m.CustomCursor),
  { ssr: false }
);
const LightOrbs = dynamic(
  () => import("@/components/effects/LightOrbs").then((m) => m.LightOrbs),
  { ssr: false }
);
const GrainOverlay = dynamic(
  () => import("@/components/effects/GrainOverlay").then((m) => m.GrainOverlay),
  { ssr: false }
);

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

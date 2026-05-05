"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { site } from "@/config/theme";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Projets", href: "#projets" },
  { label: "À propos", href: "#about" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["projets", "about", "experience", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-strong py-3"
          : "py-6 bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-display text-xl font-semibold tracking-tight text-lunar hover:text-accent transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {site.name.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "text-accent" : ""}>{word}</span>
          ))}
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-lg",
                activeSection === link.href.replace("#", "")
                  ? "text-lunar"
                  : "text-warm-light hover:text-lunar"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeSection === link.href.replace("#", "") && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 glass rounded-lg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </motion.button>
          ))}
          <motion.a
            href={`mailto:${site.email}`}
            className="ml-4 px-5 py-2.5 text-sm font-medium tracking-wide glass rounded-lg text-lunar hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Me contacter
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.a>
        </div>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 glass rounded-lg text-lunar"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden glass-strong mt-2 mx-4 rounded-2xl"
          >
            <div className="p-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-left px-4 py-3 text-lg font-medium text-warm-light hover:text-lunar hover:glass rounded-xl transition-all duration-300"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href={`mailto:${site.email}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }
                }
                className="mt-2 px-4 py-3 text-lg font-medium glass rounded-xl text-accent text-center"
              >
                Me contacter
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

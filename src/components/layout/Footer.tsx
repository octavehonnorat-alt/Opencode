"use client";

import { motion } from "framer-motion";
import { Magnetic } from "@/components/effects/Animations";
import { site } from "@/config/theme";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedInIcon, XTwitterIcon, DribbbleIcon } from "@/components/ui/BrandIcons";

const socialLinks: Array<{ icon: any; href: string; label: string }> = [
  { icon: GithubIcon, href: site.social.github, label: "GitHub" },
  { icon: LinkedInIcon, href: site.social.linkedin, label: "LinkedIn" },
  { icon: XTwitterIcon, href: site.social.twitter, label: "X (Twitter)" },
  { icon: DribbbleIcon, href: site.social.dribbble, label: "Dribbble" },
];

const footerLinks = [
  { label: "Projets", href: "#projets" },
  { label: "À propos", href: "#about" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  { label: "Conditions d'utilisation", href: "/conditions-utilisation" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-glass-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-display text-xl font-semibold text-lunar hover:text-accent transition-colors duration-300 inline-block"
            >
              {site.name.split(" ").map((word, i) => (
                <span key={i} className={i === 1 ? "text-accent" : ""}>
                  {word}{" "}
                </span>
              ))}
            </a>
            <p className="text-warm-light text-sm leading-relaxed mt-4 max-line-length">
              {site.description}
            </p>
          </div>

          <div>
            <h4 className="text-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = link.href.replace("#", "");
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-warm-light hover:text-lunar transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">
              Légal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-warm-light hover:text-lunar transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-glass-border">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Magnetic key={social.label} strength={0.3}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-warm-light hover:text-lunar hover:glass-strong transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              </Magnetic>
            ))}
          </div>

          <p className="text-mono text-xs text-warm-light/60">
            © {new Date().getFullYear()} {site.legal.company}. Tous droits réservés.
          </p>

          <Magnetic>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 h-10 glass rounded-lg flex items-center justify-center text-warm-light hover:text-lunar hover:glass-strong transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}

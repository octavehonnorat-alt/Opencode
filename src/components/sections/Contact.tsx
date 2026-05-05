"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Magnetic } from "@/components/effects/Animations";
import { site } from "@/config/theme";
import { Send, Check, AlertCircle, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => setFormState("success"), 1500);
    setTimeout(() => setFormState("idle"), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <span className="text-mono text-xs tracking-[0.3em] uppercase text-accent mb-4 block">
            Contact
          </span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl font-bold text-lunar mb-6">
            Parlons<span className="text-accent">.</span>
          </h2>
          <p className="text-warm-light max-line-length mb-16">
            Vous avez un projet en tête ? Je suis toujours ouvert à de nouvelles opportunités
            et collaborations.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-mono text-xs tracking-widest uppercase text-warm-light mb-3">
                      Nom
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 glass rounded-xl bg-transparent text-lunar placeholder:text-warm-light/40 focus:outline-none focus:glass-strong transition-all duration-300 font-body"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-mono text-xs tracking-widest uppercase text-warm-light mb-3">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 glass rounded-xl bg-transparent text-lunar placeholder:text-warm-light/40 focus:outline-none focus:glass-strong transition-all duration-300 font-body"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-mono text-xs tracking-widest uppercase text-warm-light mb-3">
                    Sujet
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 glass rounded-xl bg-transparent text-lunar placeholder:text-warm-light/40 focus:outline-none focus:glass-strong transition-all duration-300 font-body"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-mono text-xs tracking-widest uppercase text-warm-light mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 glass rounded-xl bg-transparent text-lunar placeholder:text-warm-light/40 focus:outline-none focus:glass-strong transition-all duration-300 resize-none font-body"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <Magnetic>
                  <motion.button
                    type="submit"
                    disabled={formState === "sending" || formState === "success"}
                    className="group w-full sm:w-auto px-8 py-4 bg-accent/10 border border-accent/30 rounded-xl text-lunar font-medium tracking-wide hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <AnimatePresence mode="wait">
                      {formState === "idle" && (
                        <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                          Envoyer le message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.span>
                      )}
                      {formState === "sending" && (
                        <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-lunar/30 border-t-lunar rounded-full" />
                          Envoi en cours...
                        </motion.span>
                      )}
                      {formState === "success" && (
                        <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3 text-accent">
                          <Check className="w-4 h-4" />
                          Message envoyé !
                        </motion.span>
                      )}
                      {formState === "error" && (
                        <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3 text-red-400">
                          <AlertCircle className="w-4 h-4" />
                          Erreur, réessayez
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </Magnetic>
              </form>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="space-y-6">
                <div className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 glass rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-mono text-xs tracking-widest uppercase text-warm-light">
                      Email
                    </span>
                  </div>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-lunar hover:text-accent transition-colors duration-300"
                  >
                    {site.email}
                  </a>
                </div>

                <div className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 glass rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-mono text-xs tracking-widest uppercase text-warm-light">
                      Localisation
                    </span>
                  </div>
                  <p className="text-lunar">Paris, France</p>
                </div>

                <div className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 glass rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-mono text-xs tracking-widest uppercase text-warm-light">
                      Disponibilité
                    </span>
                  </div>
                  <p className="text-lunar">Freelance & CDI</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

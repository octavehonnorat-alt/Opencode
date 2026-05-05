import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

// Three.js Background
function AnimatedBackground() {
  const meshRef = useRef<THREE.Mesh>(null);
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.PI * 0.1;
    }
  }, []);
  return (
    <>
      <color attach="background" args={['#1a1a2e']} />
      <Stars radius={100} depth={60} count={3000} factor={4} saturation={0} fade speed={1} />
      <mesh ref={meshRef} position={[0, 0, -10]}>
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial color="#16213e" transparent opacity={0.3} />
      </mesh>
    </>
  );
}

// Section animation wrapper
const MotionSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.8, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

// Hero Section
const Hero = () => (
  <section style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '2rem',
  }}>
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
    }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <AnimatedBackground />
      </Canvas>
    </div>
    <div style={{
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      maxWidth: '900px',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p style={{
          fontFamily: 'var(--font-mono)',
          color: 'var(--color-gold)',
          fontSize: '0.9rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}>
          Développeur Full Stack
        </p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, var(--color-ivory) 0%, var(--color-gold) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Octave<br />Honnorat
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--color-soft-slate)',
          maxWidth: '600px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
        }}>
          Je conçois et développe des expériences web immersives, 
          alliant design minimaliste et technologie de pointe.
        </p>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a href="#projects" style={{
            padding: '1rem 2.5rem',
            background: 'var(--color-gold)',
            color: 'var(--color-ink)',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            borderRadius: '4px',
            fontSize: '0.95rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>
            Voir mes projets
          </a>
          <a href="#contact" style={{
            padding: '1rem 2.5rem',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'var(--color-ivory)',
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            borderRadius: '4px',
            fontSize: '0.95rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            background: 'transparent',
          }}>
            Me contacter
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plateforme e-commerce immersive avec animations 3D et paiement sécurisé.',
      tech: ['React', 'Next.js', 'Stripe', 'Three.js'],
      color: 'var(--color-gold)',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Interface d\'analyse de données en temps réel avec visualisations interactives.',
      tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      color: 'var(--color-rose)',
    },
    {
      title: 'Mobile Banking App',
      description: 'Application mobile de banque en ligne avec authentification biométrique.',
      tech: ['React Native', 'TypeScript', 'NestJS', 'MongoDB'],
      color: 'var(--color-slate)',
    },
  ];

  return (
    <MotionSection>
      <section id="projects" className="section">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '3rem',
            color: 'var(--color-ivory)',
          }}
        >
          Projets Sélectionnés
        </motion.h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass"
              style={{
                padding: '2.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: '60px',
                height: '4px',
                background: project.color,
                marginBottom: '1.5rem',
                borderRadius: '2px',
              }} />
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: 'var(--color-ivory)',
              }}>
                {project.title}
              </h3>
              <p style={{
                color: 'var(--color-soft-slate)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}>
                {project.description}
              </p>
              <div style={{
                display: 'flex',
                gap: '0.75rem',
                flexWrap: 'wrap',
              }}>
                {project.tech.map(tech => (
                  <span key={tech} style={{
                    padding: '0.4rem 1rem',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-gold)',
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </MotionSection>
  );
};

// About Section
const About = () => (
  <MotionSection delay={0.2}>
    <section id="about" className="section">
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
      }}>
        <div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '2rem',
            color: 'var(--color-ivory)',
          }}>
            À propos de moi
          </h2>
          <p style={{
            color: 'var(--color-soft-slate)',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}>
            Développeur passionné avec plus de 5 ans d'expérience dans la création 
            d'applications web et mobiles. Je me spécialise dans les technologies 
            modernes comme React, Next.js, et Three.js.
          </p>
          <p style={{
            color: 'var(--color-soft-slate)',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}>
            Mon approche allie rigueur technique et sens du design, avec une attention 
            particulière portée à l'expérience utilisateur et aux performances.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
          }}>
            {[
              { label: 'Projets livrés', value: '50+' },
              { label: 'Années d\'expérience', value: '5+' },
              { label: 'Clients satisfaits', value: '30+' },
              { label: 'Cafés bus', value: '∞' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  color: 'var(--color-gold)',
                  fontWeight: 700,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-soft-slate)',
                  marginTop: '0.3rem',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{
            aspectRatio: '4/3',
            background: 'linear-gradient(135deg, rgba(196,181,144,0.1), rgba(101,78,163,0.1))',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--color-soft-slate)',
            fontSize: '0.9rem',
          }}>
            Photo / Visual
          </p>
        </motion.div>
      </div>
    </section>
  </MotionSection>
);

// Experience Section
const Experience = () => {
  const experiences = [
    {
      company: 'Tech Startup',
      role: 'Lead Developer',
      period: '2023 - Present',
      description: 'Direction technique et développement d\'applications web innovantes avec React et Node.js.',
    },
    {
      company: 'Digital Agency',
      role: 'Senior Developer',
      period: '2021 - 2023',
      description: 'Création de sites vitrines et e-commerce pour des clients du CAC 40.',
    },
    {
      company: 'Freelance',
      role: 'Full Stack Developer',
      period: '2019 - 2021',
      description: 'Développement de solutions sur mesure pour divers clients et startups.',
    },
  ];

  return (
    <MotionSection delay={0.3}>
      <section id="experience" className="section">
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: '3rem',
          color: 'var(--color-ivory)',
        }}>
          Expérience
        </h2>
        <div style={{
          borderLeft: '2px solid rgba(196,181,144,0.2)',
          paddingLeft: '2rem',
        }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              style={{
                marginBottom: '3rem',
                position: 'relative',
              }}
            >
              <div style={{
                position: 'absolute',
                left: '-2.55rem',
                top: '0.5rem',
                width: '12px',
                height: '12px',
                background: 'var(--color-gold)',
                borderRadius: '50%',
              }} />
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--color-gold)',
                marginBottom: '0.5rem',
              }}>
                {exp.period}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                marginBottom: '0.3rem',
                color: 'var(--color-ivory)',
              }}>
                {exp.role}
              </h3>
              <p style={{
                color: 'var(--color-soft-slate)',
                marginBottom: '0.5rem',
              }}>
                {exp.company}
              </p>
              <p style={{
                color: 'var(--color-soft-slate)',
                fontSize: '0.95rem',
                lineHeight: 1.7,
              }}>
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </MotionSection>
  );
};

// Contact Section
const Contact = () => (
  <MotionSection delay={0.1}>
    <section id="contact" className="section" style={{ textAlign: 'center' }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        marginBottom: '1.5rem',
        color: 'var(--color-ivory)',
      }}>
        Travaillons ensemble
      </h2>
      <p style={{
        fontSize: '1.1rem',
        color: 'var(--color-soft-slate)',
        maxWidth: '600px',
        margin: '0 auto 3rem',
        lineHeight: 1.7,
      }}>
        Vous avez un projet en tête ? Une idée à concrétiser ? 
        N'hésitez pas à me contacter pour discuter de vos besoins.
      </p>
      <motion.a
        href="mailto:octavetour@gmail.com"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        style={{
          display: 'inline-block',
          padding: '1.2rem 3rem',
          background: 'var(--color-gold)',
          color: 'var(--color-ink)',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          borderRadius: '4px',
          fontSize: '1rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
      >
        octavetour@gmail.com
      </motion.a>
      <div style={{
        marginTop: '3rem',
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
      }}>
        {['GitHub', 'LinkedIn', 'Twitter'].map(platform => (
          <motion.a
            key={platform}
            href={`https://${platform.toLowerCase()}.com`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: 'var(--color-soft-slate)',
              letterSpacing: '0.05em',
            }}
          >
            {platform}
          </motion.a>
        ))}
      </div>
    </section>
  </MotionSection>
);

// Footer
const Footer = () => (
  <footer style={{
    padding: '3rem 2rem',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    textAlign: 'center',
  }}>
    <p style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.85rem',
      color: 'var(--color-soft-slate)',
      marginBottom: '1rem',
    }}>
      © {new Date().getFullYear()} Octave Honnorat. Tous droits réservés.
    </p>
    <div style={{
      display: 'flex',
      gap: '2rem',
      justifyContent: 'center',
    }}>
      <a href="/Opencode/mentions-legales" style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
        color: 'var(--color-soft-slate)',
      }}>
        Mentions Légales
      </a>
      <a href="/Opencode/politique-confidentialite" style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
        color: 'var(--color-soft-slate)',
      }}>
        Politique de Confidentialité
      </a>
      <a href="/Opencode/conditions-utilisation" style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
        color: 'var(--color-soft-slate)',
      }}>
        Conditions d'Utilisation
      </a>
    </div>
  </footer>
);

// Main HomePage Component
export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

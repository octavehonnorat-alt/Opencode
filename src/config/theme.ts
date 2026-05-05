export const colors = {
  midnight: "oklch(0.12 0.01 260)",
  midnightDeep: "oklch(0.08 0.015 260)",
  lunar: "oklch(0.97 0.005 260)",
  lunarSoft: "oklch(0.94 0.005 260)",
  warm: "oklch(0.55 0.01 260)",
  warmLight: "oklch(0.70 0.008 260)",
  accent: "oklch(0.65 0.15 250)",
  accentSoft: "oklch(0.75 0.08 250)",
  accentGlow: "oklch(0.70 0.18 250)",
  glass: "oklch(0.97 0.005 260 / 0.06)",
  glassBorder: "oklch(0.97 0.005 260 / 0.12)",
} as const;

export const typography = {
  display: {
    family: '"Playfair Display", "Georgia", serif',
    weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
  },
  body: {
    family: '"Instrument Sans", "system-ui", sans-serif',
    weights: { regular: 400, medium: 500, semibold: 600 },
  },
  mono: {
    family: '"JetBrains Mono", "Fira Code", monospace',
    weights: { regular: 400, medium: 500 },
  },
} as const;

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "6rem",
  "5xl": "8rem",
  "6xl": "12rem",
} as const;

export const animation = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
    slower: 800,
  },
  easing: {
    smooth: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    out: [0.16, 1, 0.3, 1] as [number, number, number, number],
    inOut: [0.76, 0, 0.24, 1] as [number, number, number, number],
    spring: { stiffness: 300, damping: 30 },
  },
} as const;

export const site = {
  name: "Alexandre Moreau",
  title: "Creative Developer",
  description:
    "Développeur créatif spécialisé en expériences web immersives, interactions 3D et design luxueux.",
  url: "https://alexandre-moreau.dev",
  email: "hello@alexandre-moreau.dev",
  social: {
    github: "https://github.com/alexandremoreau",
    linkedin: "https://linkedin.com/in/alexandremoreau",
    twitter: "https://twitter.com/alexandremoreau",
    dribbble: "https://dribbble.com/alexandremoreau",
  },
  legal: {
    company: "Alexandre Moreau",
    address: "42 rue de la Créativité, 75001 Paris, France",
    siret: "XXX XXX XXX XXXXX",
    email: "legal@alexandre-moreau.dev",
    host: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA",
    publication: "Alexandre Moreau",
    dpo: "Alexandre Moreau — dpo@alexandre-moreau.dev",
  },
} as const;

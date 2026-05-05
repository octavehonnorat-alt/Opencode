import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  base: '/Opencode',
  build: {
    format: 'file',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            three: ['three', '@react-three/fiber', '@react-three/drei'],
          },
        },
      },
    },
  },
});

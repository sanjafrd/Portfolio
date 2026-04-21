import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://sanja.works',
  output: 'static',
  integrations: [
    react(),
    mdx(),
    sitemap(),
    icon({
      iconDir: 'src/assets/icons',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  devToolbar: {
    enabled: false,
  },
});

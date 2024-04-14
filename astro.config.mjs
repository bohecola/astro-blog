import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";

import { SITE } from './src/config';

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind(),
    mdx(),
    vue(),
    sitemap()
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-black'
      }
    }
  }
});
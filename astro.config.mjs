import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), vue()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-black'
      },
    }
  }
});
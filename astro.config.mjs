// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',
  adapter: cloudflare({
    routes: {
      extend: {
        include: [{ pattern: '/' }], // Include root (/) for SSR
        exclude: [{ pattern: '/static/**' }] // Exclude /static and its subdirectories from SSR
      }
    },
  })
});

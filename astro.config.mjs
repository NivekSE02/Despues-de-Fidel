import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://example.com', // replace with actual domain when deploying
  // Enable sitemap for SEO
  build: {
    sitemap: true,
  },
});

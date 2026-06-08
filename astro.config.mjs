// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain (GoDaddy/registrar → Netlify, kayraysmith account)
export default defineConfig({
  site: 'https://ohkaywriting.co.za',
  integrations: [sitemap()],
  server: {
    // Bind to all hosts so 127.0.0.1 works on Windows (IPv6-only bug fix)
    host: true,
  },
});

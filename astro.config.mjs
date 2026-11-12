import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { unified } from '@astrojs/markdown-remark';
import remarkGuide from './src/lib/remark-guide.mjs';
import legacyRedirects from './src/lib/legacy-redirects.mjs';

const base = process.env.BASE_PATH || '/guide/';
const LOCALES = ['', 'en/', 'ja/', 'zh/', 'zh-tw/'];
// Old VitePress pages that no longer exist.
const removed = Object.fromEntries(LOCALES.map(l => [`${l}photogallery/terms.html`, 'https://nupa.moe/license/']));

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || 'https://nupa.moe',
  base,
  trailingSlash: 'always',
  integrations: [react(), legacyRedirects({ extra: removed })],
  markdown: {
    processor: unified({ remarkPlugins: [[remarkGuide, { base }]], smartypants: false }),
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});

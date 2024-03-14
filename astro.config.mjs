import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://voodoo.gihub.io/blog',
	base: '/blog/',
	integrations: [mdx(), sitemap()],
});

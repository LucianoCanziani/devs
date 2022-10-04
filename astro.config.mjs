import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify/functions';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.operationdev.com/',

	experimental: {
		integrations: true,
	  },

	integrations: [mdx(), sitemap(),robotsTxt()],
	output: 'server',
	adapter: netlify(),
});

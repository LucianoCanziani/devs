import type { AstroUserConfig } from "astro";
import compress from "astro-compress";

export default (): AstroUserConfig => ({
	outDir: "./src",
	integrations: [
		compress({
			path: "./src",
            assets: "./public",
		}),
	],
});

export const SITE_TITLE = 'Operation Dev';
export const SITE_DESCRIPTION = 'Welcome to my website!';

import alpinejs from "@astrojs/alpinejs";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	integrations: [alpinejs()],
	site: "https://seokh1213.github.io",
	vite: {
		plugins: [tailwindcss()],
	},
});

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.islamarietas.com",
  output: "static",
  integrations: [
    mdx(),
    sitemap({
      // Páginas en borrador (noindex): quitar de aquí al publicarlas.
      filter: (page) => !page.includes("/charter-privado-islas-marietas/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

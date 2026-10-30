import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://www.islamarietas.com",
  output: "static",
  // CSS dentro del HTML: evita peticiones de hojas de estilo que bloquean el render.
  build: {
    inlineStylesheets: "always",
  },
  // Fuentes autoalojadas: se descargan al compilar y se sirven desde /_astro/fonts/.
  // Solo subset latin y los pesos que usa el diseño.
  fonts: [
    {
      name: "DM Sans",
      cssVariable: "--font-dm-sans",
      provider: fontProviders.google(),
      weights: [400, 500, 700],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
      display: "swap",
    },
    {
      name: "Playfair Display",
      cssVariable: "--font-playfair",
      provider: fontProviders.google(),
      weights: [500, 600],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["Georgia", "serif"],
      display: "swap",
    },
  ],
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

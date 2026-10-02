import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const seoSchema = z.object({
  meta_title: z.string(),
  meta_description: z.string(),
  canonical: z.string().url().optional(),
  og_image: z.string().optional(),
  noindex: z.boolean().default(false),
});

const priceSchema = z.object({
  etiqueta: z.string(),
  precio: z.number(),
  moneda: z.enum(["MXN", "USD"]).default("MXN"),
  nota: z.string().optional(),
  tipo: z.enum(["estandar", "addon"]).default("estandar"),
});

const tourSchema = z.object({
  nombre: z.string(),
  h1: z.string(),
  resumen: z.string(),
  seo: seoSchema,
  // Vacío = tour "a cotizar" (se muestra sin precio y con CTA a WhatsApp).
  precios: z.array(priceSchema).default([]),
  nota_precio: z.string(),
  badges: z.array(z.string()).default([]),
  orden: z.number().int().default(99),
  meses: z.array(z.number().int().min(1).max(12)).default([]),
  galeria: z.array(z.object({ imagen: z.string(), alt: z.string() })).min(1),
  duracion: z.string(),
  destacado: z.boolean().default(false),
  ultima_actualizacion: z.coerce.date().optional(),
});

const tours = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/tours" }),
  schema: tourSchema,
});

const toursEn = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/tours-en" }),
  schema: tourSchema,
});

export const collections = { tours, toursEn };

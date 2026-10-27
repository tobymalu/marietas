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
  // La PRIMERA tarifa estándar debe ser la de adulto: es el precio "Desde".
  precios: z.array(priceSchema).default([]),
  // Opcional si `cargos_muelle` es true: la nota se genera desde src/lib/park.ts.
  nota_precio: z.string().optional(),
  // true = el cliente paga en el muelle el brazalete ANP y el impuesto
  // portuario (montos centralizados en src/lib/park.ts).
  cargos_muelle: z.boolean().default(false),
  horario: z
    .object({
      salida: z.string(),
      regreso: z.string().optional(),
      // Ej. "30 minutos antes" para registro y pago de cargos.
      presentarse: z.string().optional(),
      dias: z.string(),
      punto: z.string(),
      punto_alterno: z.string().optional(),
    })
    .optional(),
  badges: z.array(z.string()).default([]),
  orden: z.number().int().default(99),
  meses: z.array(z.number().int().min(1).max(12)).default([]),
  // La primera foto es la portada del carrusel y de la tarjeta del tour.
  galeria: z
    .array(
      z.object({
        imagen: z.string(),
        alt: z.string(),
        width: z.number().int().default(1600),
        height: z.number().int().default(1200),
      }),
    )
    .min(1),
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

const imageSchema = z.object({
  url: z.string(),
  alt: z.string(),
  width: z.number().int(),
  height: z.number().int(),
});

// Guías / blog. Ruta: /guia/<categoria>/<slug>/ (es) y /en/guide/<categoria>/<slug>/ (en).
const guideSchema = z.object({
  title: z.string(),
  meta_title: z.string(),
  meta_description: z.string(),
  h1: z.string(),
  categoria: z.string(),
  resumen: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default("Equipo Islas Marietas"),
  featured_image: imageSchema,
  // Fotos del carrusel de portada (la primera debe ser featured_image).
  carrusel: z.array(imageSchema).min(1),
  // Preguntas frecuentes: se muestran con <GuideFaq /> y generan JSON-LD FAQPage.
  faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
  // Ruta de la misma guía en el otro idioma.
  alternate: z.string().optional(),
  canonical: z.string().url().optional(),
  noindex: z.boolean().default(false),
});

const guias = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guias" }),
  schema: guideSchema,
});

const guiasEn = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guias-en" }),
  schema: guideSchema,
});

export const collections = { tours, toursEn, guias, guiasEn };

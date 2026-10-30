// Imágenes optimizadas por Astro. Viven en src/assets/imgMarietas/ y se
// referencian con la misma ruta que tenían en public: "/imgMarietas/...".
import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";
import { site } from "./site";

const files = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/imgMarietas/**/*.{jpg,jpeg,JPG,png}",
  { eager: true },
);

/** "/imgMarietas/x.jpg" → ImageMetadata (o la propia metadata si ya lo es). */
export function asset(src: string | ImageMetadata): ImageMetadata {
  if (typeof src !== "string") return src;
  const file = files[`/src/assets${src.normalize("NFC")}`];
  if (!file) {
    throw new Error(
      `Imagen no encontrada: ${src}. Debe estar en src/assets${src}`,
    );
  }
  return file.default;
}

/** Anchos responsivos por defecto, limitados al ancho real de la imagen. */
export function responsiveWidths(
  image: ImageMetadata,
  candidates = [480, 800, 1200, 1600, 1920],
) {
  const widths = candidates.filter((width) => width < image.width);
  return [...widths, Math.min(image.width, candidates.at(-1)!)];
}

/**
 * URL absoluta de una versión JPG para Open Graph / datos estructurados
 * (WhatsApp, Facebook y Google no leen AVIF de forma fiable).
 */
export async function absoluteImageUrl(src: string | ImageMetadata, width = 1200) {
  const image = asset(src);
  const optimized = await getImage({
    src: image,
    width: Math.min(width, image.width),
    format: "jpg",
    quality: 80,
  });
  return new URL(optimized.src, site.url).href;
}

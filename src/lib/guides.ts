import { getCollection, type CollectionEntry } from "astro:content";
import type { SiteLanguage } from "./site";

export type Guide = CollectionEntry<"guias"> | CollectionEntry<"guiasEn">;

/** Guías publicadas (sin noindex), de la más reciente a la más antigua. */
export async function getGuides(lang: SiteLanguage = "es", limit?: number) {
  const guides = (await getCollection(lang === "en" ? "guiasEn" : "guias"))
    .filter((guide) => !guide.data.noindex)
    .sort(
      (a, b) =>
        (b.data.updatedDate ?? b.data.pubDate).getTime() -
        (a.data.updatedDate ?? a.data.pubDate).getTime(),
    );
  return limit ? guides.slice(0, limit) : guides;
}

export function guideHref(guide: Guide, lang: SiteLanguage = "es") {
  return lang === "en"
    ? `/en/guide/${guide.data.categoria}/${guide.id}/`
    : `/guia/${guide.data.categoria}/${guide.id}/`;
}

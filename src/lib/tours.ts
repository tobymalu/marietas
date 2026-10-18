import { pierFeesNote } from "./park";
import type { SiteLanguage } from "./site";

// Nota de precio de un tour: la escrita en su ficha o, si no tiene y paga
// cargos en el muelle, la generada con las tarifas vigentes.
export function tourPriceNote(
  data: { nota_precio?: string; cargos_muelle: boolean },
  lang: SiteLanguage = "es",
) {
  if (data.nota_precio) return data.nota_precio;
  return data.cargos_muelle ? pierFeesNote(lang) : "";
}

interface TourPrice {
  precio: number;
  moneda: string;
  tipo: string;
}

// Precio "desde" que se muestra en tarjetas y fichas: la tarifa de adulto,
// que por convención es la PRIMERA tarifa estándar de `precios`.
// Devuelve null cuando el tour se cotiza (sin precios publicados).
export function adultPrice(precios: TourPrice[]) {
  const adult = precios.find((price) => price.tipo === "estandar");
  if (!adult) return null;
  return { amount: adult.precio, currency: adult.moneda };
}

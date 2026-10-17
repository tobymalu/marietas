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

// Precio "desde" a partir de las tarifas estándar (sin addons).
// Devuelve null cuando el tour se cotiza (sin precios publicados).
export function lowestStandardPrice(precios: TourPrice[]) {
  const standard = precios.filter((price) => price.tipo === "estandar");
  if (standard.length === 0) return null;
  return {
    amount: Math.min(...standard.map((price) => price.precio)),
    currency: standard[0].moneda,
  };
}

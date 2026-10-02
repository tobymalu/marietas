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

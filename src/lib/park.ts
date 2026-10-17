// Registro único de cargos oficiales que se pagan en el muelle.
// Cuando cambien las tarifas, se actualizan solo aquí y se reflejan en
// todos los tours con `cargos_muelle: true`, en las fichas y en las FAQ.
import type { SiteLanguage } from "./site";

export const pierFees = {
  actualizado: "2026-10-17",
  moneda: "MXN",
  items: [
    {
      id: "brazalete-anp",
      monto: 240,
      es: "Brazalete de Áreas Naturales Protegidas (CONANP)",
      en: "Protected Natural Areas bracelet (CONANP)",
      // Forma usada dentro de una frase.
      esFrase: "el brazalete de Áreas Naturales Protegidas de la CONANP",
      enFrase: "the CONANP Protected Natural Areas bracelet",
    },
    {
      id: "impuesto-portuario",
      monto: 35,
      es: "Impuesto portuario",
      en: "Port tax",
      esFrase: "el impuesto portuario",
      enFrase: "the port tax",
    },
  ],
} as const;

export function formatFee(amount: number, lang: SiteLanguage = "es") {
  return `$${amount.toLocaleString(lang === "en" ? "en-US" : "es-MX")} ${pierFees.moneda}`;
}

/** Frase: "el brazalete … ($240 MXN) y el impuesto portuario ($35 MXN)". */
export function pierFeesSentence(lang: SiteLanguage = "es") {
  const parts = pierFees.items.map((fee) => {
    const label = lang === "en" ? fee.enFrase : fee.esFrase;
    return `${label} (${formatFee(fee.monto, lang)})`;
  });
  return parts.join(lang === "en" ? " and " : " y ");
}

/** Nota de precio para tours que no incluyen los cargos del muelle. */
export function pierFeesNote(lang: SiteLanguage = "es") {
  return lang === "en"
    ? `Not included, paid at the pier: ${pierFeesSentence("en")}.`
    : `No incluye ${pierFeesSentence("es")}, que se pagan en el muelle.`;
}

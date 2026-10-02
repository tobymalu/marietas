export const site = {
  name: "Islas Marietas",
  url: "https://www.islamarietas.com",
  email: "info@islamarietas.com",
  phone: {
    display: "+52 322 304 8986",
    e164: "+523223048986",
  },
  whatsapp: {
    number: "523223048986",
    // Mensaje único para todos los CTA de WhatsApp (identifica que vienen del sitio).
    message: "Vi en la página de Marietas tu contacto",
  },
  social: {
    instagram: "https://www.instagram.com/islamarietas",
    facebook: "https://www.facebook.com/islamarietas",
  },
} as const;

export const PARTNERS = [
  { name: "Vallarta Mágico", url: "https://www.vallartamagico.com" },
  { name: "Praben", url: "https://www.praben.com" },
  { name: "Nubenca", url: "https://www.nubenca.com" },
  { name: "PV Luxury Concierge", url: "https://pvluxuryconcierge.com" },
  { name: "Hola Punta Mita", url: "https://holapuntamita.com" },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/tours/", label: "Tours" },
  { href: "/nosotros/", label: "Nosotros" },
  { href: "/galeria/", label: "Galería" },
  { href: "/blog/", label: "Blog" },
  { href: "/contacto/", label: "Contacto" },
] as const;

export const NAV_LINKS_EN = [
  { href: "/en/", label: "Home" },
  { href: "/en/tours/", label: "Tours" },
  { href: "/en/about/", label: "About us" },
  { href: "/en/gallery/", label: "Gallery" },
  { href: "/en/blog/", label: "Blog" },
  { href: "/en/contact/", label: "Contact" },
] as const;

export type SiteLanguage = "es" | "en";

export const languageLabels = {
  es: "Español",
  en: "English",
} as const;

export function whatsappUrl() {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`;
}

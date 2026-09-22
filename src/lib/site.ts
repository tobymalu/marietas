export const site = {
  name: "Islas Marietas",
  url: "https://www.islamarietas.com",
  email: "info@islamarietas.com",
  phone: {
    display: "+52 1 322 147 3221",
    e164: "+5213221473221",
  },
  whatsapp: {
    number: "523221473221",
    defaultMessage:
      "Hola, quiero información sobre los tours a las Islas Marietas.",
  },
  social: {
    instagram: "https://www.instagram.com/islamarietas",
    facebook: "https://www.facebook.com/islamarietas",
  },
} as const;

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

export function whatsappUrl(message = site.whatsapp.defaultMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

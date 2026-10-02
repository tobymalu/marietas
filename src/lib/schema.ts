// Datos estructurados (JSON-LD) compartidos entre páginas e idiomas.
import type { FaqItem } from "./home-content";
import { site } from "./site";

export const organizationId = `${site.url}/#organization`;

export function travelAgencySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": organizationId,
    name: site.name,
    url: site.url,
    logo: new URL("/imgMarietas/MarietasLogo.png", site.url).href,
    image: new URL("/imgMarietas/portada.jpg", site.url).href,
    telephone: site.phone.e164,
    email: site.email,
    areaServed: "Islas Marietas, Bahía de Banderas, Nayarit, México",
    address: {
      "@type": "PostalAddress",
      addressLocality: "La Cruz de Huanacaxtle",
      addressRegion: "Nayarit",
      addressCountry: "MX",
    },
    sameAs: [site.social.instagram, site.social.facebook],
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function aboutPageSchema(meta: {
  name: string;
  path: string;
  inLanguage: string;
  parkDescription: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: meta.name,
    url: new URL(meta.path, site.url).href,
    inLanguage: meta.inLanguage,
    about: {
      "@type": "TravelAgency",
      "@id": organizationId,
      name: site.name,
      url: site.url,
      telephone: site.phone.e164,
      email: site.email,
      sameAs: [site.social.instagram, site.social.facebook],
    },
    mentions: {
      "@type": "TouristAttraction",
      name: "Parque Nacional Islas Marietas",
      description: meta.parkDescription,
      geo: { "@type": "GeoCoordinates", latitude: 20.6983, longitude: -105.5717 },
    },
  };
}

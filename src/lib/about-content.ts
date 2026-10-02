// Textos de Nosotros / About us. Cambiar en ambos idiomas a la par.
import type { SiteLanguage } from "./site";

const es = {
  meta: {
    title: "Nosotros | Operadores locales en el Parque Nacional Islas Marietas",
    description:
      "Somos un equipo local de la Bahía de Banderas. Conoce la historia del Parque Nacional Islas Marietas y cómo lo visitamos con respeto a la CONANP.",
    name: "Nosotros | Islas Marietas",
    path: "/nosotros/",
    inLanguage: "es-MX",
    parkDescription:
      "Área natural protegida en la Bahía de Banderas, Nayarit, México. Parque Nacional desde 2005 y Reserva de la Biosfera de la UNESCO desde 2008.",
  },
  toursHref: "/tours/",
  hero: {
    alt: "Acantilados volcánicos de las Islas Marietas con aves marinas volando sobre ellos",
    eyebrow: "Nosotros · Bahía de Banderas",
    title: "Más que un tour: nuestra misión de conservación en las Islas Marietas",
    lede: "Somos un equipo local. Te llevamos a conocer el santuario de la Playa Escondida cuidando la biodiversidad que lo hace único.",
    trust: "Operadores locales · Acceso regulado por la CONANP",
    factsTitle: "El parque en datos",
    facts: [
      { label: "Parque Nacional", value: "2005" },
      { label: "Reserva de la Biosfera UNESCO", value: "2008" },
      { label: "Sitio Ramsar", value: "2004" },
      { label: "Administra", value: "CONANP" },
    ],
    cta: "Ver tours disponibles",
  },
  pillars: {
    label: "Nuestros compromisos",
    items: [
      { icon: "🕊️", title: "Fauna primero", text: "Observamos aves y ballenas a distancia, sin perseguirlas." },
      { icon: "⚖️", title: "Capacidad de carga", text: "Respetamos el cupo y los horarios que asigna la CONANP." },
      { icon: "🧭", title: "Guías certificados", text: "Te acompañan en cada actividad dentro del agua." },
      { icon: "🎟️", title: "Cuota de conservación", text: "El brazalete del parque financia su cuidado; te lo explicamos aparte." },
    ],
  },
  history: {
    eyebrow: "Historia y patrimonio",
    title: "De blanco militar a santuario protegido",
    lede: "Un archipiélago volcánico frente a Punta de Mita que estuvo a punto de perderse y hoy es refugio de aves, peces y arrecifes.",
    timeline: [
      { year: "Años 60", text: "Las islas se usaban como blanco de prácticas militares. La presión de científicos, con Jacques Cousteau entre las voces más conocidas, ayudó a detenerlas." },
      { year: "2004", text: "Se reconocen como sitio Ramsar, humedal de importancia internacional." },
      { year: "2005", text: "El 25 de abril se decretan Parque Nacional Islas Marietas, bajo resguardo de la CONANP." },
      { year: "2008", text: "La UNESCO las integra a su red de Reservas de la Biosfera (Programa MaB)." },
      { year: "2016", text: "La CONANP cierra temporalmente la Playa del Amor para su recuperación y la reabre con cupo diario limitado." },
    ],
  },
  team: {
    alt: "Grupo de viajeros a bordo de nuestra lancha bajo un arco de roca volcánica en las Islas Marietas",
    eyebrow: "Quiénes somos",
    title: "Navegantes locales, no visitantes de ocasión",
    paragraphs: [
      "Conocemos estas aguas, sus temporadas y la responsabilidad que implica recibir visitantes en un área natural protegida. Por eso diseñamos recorridos honestos, claros y cercanos.",
      "Cada salida la planeamos con las reglas del parque: horarios asignados, grupos por turno y actividades que no alteran el ecosistema.",
    ],
  },
  gallery: {
    eyebrow: "Lo que protegemos",
    title: "Un santuario de roca, arena y vida marina",
    alts: [
      "Túnel de roca por el que se entra nadando a la Playa Escondida, visto desde la arena",
      "Pájaro bobo de patas azules, especie emblemática de las Islas Marietas",
      "Coral hermatípico en el arrecife de las Islas Marietas",
      "Vegetación de las Islas Marietas con el océano Pacífico al fondo",
    ],
  },
  manifesto: {
    label: "Nuestro manifiesto",
    quote:
      "“Creemos en un turismo que no deja huella, solo recuerdos. Al viajar con nosotros, te conviertes en aliado del Parque Nacional Islas Marietas.”",
  },
  rules: {
    eyebrow: "Antes de zarpar",
    title: "Guía del viajero responsable",
    lede: "Estas reglas del parque protegen el arrecife y a la fauna. Tu guía te las recordará a bordo.",
    cta: "¿Dudas? Escríbenos",
    items: [
      "Usa bloqueador solar biodegradable o, mejor aún, lycra con protección UV.",
      "No toques, pises ni te pares sobre los corales.",
      "No alimentes ni persigas a la fauna.",
      "No extraigas arena, conchas, rocas ni organismos.",
      "Lleva de regreso todo lo que traigas: la basura no se queda en la isla.",
      "Usa siempre el chaleco salvavidas y sigue las indicaciones del guía.",
    ],
  },
  route: {
    alt: "Mapa ilustrado de las Islas Marietas con la ubicación de la Playa del Amor en Isla Redonda y la Playa La Nopalera en Isla Larga",
    eyebrow: "Tu recorrido",
    title: "Dos islas, dos playas, un solo santuario",
    lede: "En Isla Redonda está la Playa del Amor, a la que se entra nadando por un túnel. En Isla Larga, la Playa La Nopalera. Te ayudamos a elegir el tour que va contigo.",
    tours: "Ver tours",
    talk: "Hablar con nosotros",
  },
};

const en: typeof es = {
  meta: {
    title: "About Us | Local Operators in the Islas Marietas National Park",
    description:
      "We are a local crew from Banderas Bay. Learn the history of the Islas Marietas National Park and how we visit it following CONANP rules.",
    name: "About us | Islas Marietas",
    path: "/en/about/",
    inLanguage: "en-US",
    parkDescription:
      "Protected natural area in Banderas Bay, Nayarit, Mexico. National Park since 2005 and UNESCO Biosphere Reserve since 2008.",
  },
  toursHref: "/en/tours/",
  hero: {
    alt: "Volcanic cliffs of the Islas Marietas with seabirds flying above",
    eyebrow: "About us · Banderas Bay",
    title: "More than a tour: our conservation mission in the Islas Marietas",
    lede: "We are a local crew. We take you to explore the Hidden Beach sanctuary while protecting the biodiversity that makes it unique.",
    trust: "Local operators · Access regulated by CONANP",
    factsTitle: "The park at a glance",
    facts: [
      { label: "National Park", value: "2005" },
      { label: "UNESCO Biosphere Reserve", value: "2008" },
      { label: "Ramsar Site", value: "2004" },
      { label: "Managed by", value: "CONANP" },
    ],
    cta: "See available tours",
  },
  pillars: {
    label: "Our commitments",
    items: [
      { icon: "🕊️", title: "Wildlife first", text: "We watch birds and whales from a distance, never chasing them." },
      { icon: "⚖️", title: "Carrying capacity", text: "We respect the daily limits and time slots set by CONANP." },
      { icon: "🧭", title: "Certified guides", text: "They are with you during every activity in the water." },
      { icon: "🎟️", title: "Conservation fee", text: "The park bracelet funds its care; we always explain it separately." },
    ],
  },
  history: {
    eyebrow: "History & heritage",
    title: "From military target to protected sanctuary",
    lede: "A volcanic archipelago off Punta de Mita that was almost lost and is now a refuge for birds, fish and reefs.",
    timeline: [
      { year: "1960s", text: "The islands were used as a target for military exercises. Pressure from scientists, with Jacques Cousteau among the best-known voices, helped stop it." },
      { year: "2004", text: "They are recognized as a Ramsar Site, a wetland of international importance." },
      { year: "2005", text: "On April 25 they are declared the Islas Marietas National Park, protected by CONANP." },
      { year: "2008", text: "UNESCO adds them to its network of Biosphere Reserves (MAB Programme)." },
      { year: "2016", text: "CONANP temporarily closes Hidden Beach so it can recover, then reopens it with a limited daily capacity." },
    ],
  },
  team: {
    alt: "Group of travelers aboard our boat under a volcanic rock arch in the Islas Marietas",
    eyebrow: "Who we are",
    title: "Local sailors, not occasional visitors",
    paragraphs: [
      "We know these waters, their seasons and the responsibility of welcoming visitors to a protected natural area. That is why we create honest, clear and personal trips.",
      "We plan every departure around the park rules: assigned time slots, groups by shift and activities that don’t disturb the ecosystem.",
    ],
  },
  gallery: {
    eyebrow: "What we protect",
    title: "A sanctuary of rock, sand and marine life",
    alts: [
      "Rock tunnel you swim through to reach Hidden Beach, seen from the sand",
      "Blue-footed booby, an iconic species of the Islas Marietas",
      "Reef-building coral in the Islas Marietas",
      "Islas Marietas vegetation with the Pacific Ocean in the background",
    ],
  },
  manifesto: {
    label: "Our manifesto",
    quote:
      "“We believe in travel that leaves no trace, only memories. When you sail with us, you become an ally of the Islas Marietas National Park.”",
  },
  rules: {
    eyebrow: "Before you set sail",
    title: "Responsible traveler guide",
    lede: "These park rules protect the reef and the wildlife. Your guide will remind you of them on board.",
    cta: "Questions? Message us",
    items: [
      "Use biodegradable sunscreen or, even better, a UV rash guard.",
      "Don’t touch, step on or stand on the coral.",
      "Don’t feed or chase the wildlife.",
      "Don’t take sand, shells, rocks or living organisms.",
      "Take back everything you bring: no trash stays on the island.",
      "Always wear your life jacket and follow your guide’s instructions.",
    ],
  },
  route: {
    alt: "Illustrated map of the Islas Marietas showing Hidden Beach on Isla Redonda and La Nopalera Beach on Isla Larga",
    eyebrow: "Your trip",
    title: "Two islands, two beaches, one sanctuary",
    lede: "Hidden Beach is on Isla Redonda, and you reach it by swimming through a tunnel. La Nopalera Beach is on Isla Larga. We’ll help you choose the right tour.",
    tours: "See tours",
    talk: "Talk to us",
  },
};

export function getAboutContent(lang: SiteLanguage = "es") {
  return lang === "en" ? en : es;
}

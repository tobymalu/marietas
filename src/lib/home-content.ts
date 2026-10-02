import type { SiteLanguage } from "./site";

type AddonPrice = { precio: number; moneda: string };

// Textos informativos del Home. Revisar con la información oficial de la
// CONANP antes de cada temporada: estos datos alimentan también el JSON-LD.

export interface FaqItem {
  question: string;
  answer: string;
}

const parkInfoEs: FaqItem[] = [
  {
    question: "¿Por qué el acceso a la Playa del Amor es limitado?",
    answer:
      "Las Islas Marietas son Parque Nacional y Reserva de la Biosfera. La CONANP fija una capacidad de carga diaria para proteger el arrecife y la playa, por lo que solo entra un número reducido de visitantes al día y en horarios asignados.",
  },
  {
    question: "¿Qué días cierra el parque?",
    answer:
      "El acceso a la Playa del Amor opera normalmente de miércoles a domingo; lunes y martes permanece cerrado para la recuperación del ecosistema. La CONANP también puede suspender el acceso por clima o mantenimiento, así que confirmamos cada fecha antes de reservar.",
  },
  {
    question: "¿Qué condición física se necesita para entrar por la cueva?",
    answer:
      "Para llegar a la playa se nada un tramo corto por un túnel natural, con chaleco salvavidas obligatorio. Es necesario saber nadar y sentirse cómodo en el mar; con marea alta u oleaje el acceso puede suspenderse por seguridad.",
  },
  {
    question: "¿Qué no se permite dentro del parque?",
    answer:
      "No se permite extraer arena, conchas, corales ni fauna, alimentar animales ni usar bloqueador solar que no sea biodegradable. Seguir las indicaciones del guía es obligatorio.",
  },
];

function buildFaqEs(addonPrice?: AddonPrice): FaqItem[] {
  const bracelet = addonPrice
    ? `El brazalete de acceso a la Playa Escondida cuesta $${addonPrice.precio.toLocaleString("es-MX")} ${addonPrice.moneda} adicionales y está sujeto a la disponibilidad de la CONANP.`
    : "El brazalete de acceso a la Playa Escondida se cotiza aparte y está sujeto a la disponibilidad de la CONANP.";

  return [
    {
      question:
        "¿Cuál es la diferencia entre el tour a la Playa del Amor y el tour tradicional?",
      answer:
        "El tour a la Playa del Amor incluye el acceso regulado a la Playa Escondida, con cupo limitado por la CONANP. El tour tradicional recorre los alrededores del archipiélago con snorkel, kayak y visita a la Playa Nopalera, sin entrar a la Playa del Amor.",
    },
    {
      question: "¿Qué incluye la tarifa y qué costos adicionales hay?",
      answer: `Los tours compartidos incluyen traslado en barco, equipo de snorkel y guía especializado; lo demás varía según el tour y lo detallamos en cada ficha. ${bracelet} En el tour de snorkel, el impuesto de conservación del parque (aprox. $180 MXN) y el impuesto portuario (aprox. $30 MXN) se pagan aparte en el muelle. Te confirmamos el precio final por escrito antes de pagar.`,
    },
    {
      question: "¿Cuál es la mejor época para visitar las Islas Marietas?",
      answer:
        "Se pueden visitar todo el año. De diciembre a marzo es temporada de ballena jorobada en la Bahía de Banderas; de abril a noviembre el mar suele estar más cálido para nadar y hacer snorkel.",
    },
    {
      question: "¿Pueden ir niños o adultos mayores?",
      answer:
        "Sí. Hay tarifa infantil para niños de 6 a 11 años. Para entrar a la Playa del Amor hay que nadar un tramo corto, así que escríbenos por WhatsApp y te recomendamos la opción adecuada según la edad y condición de cada persona.",
    },
  ];
}

const parkInfoEn: FaqItem[] = [
  {
    question: "Why is access to Hidden Beach limited?",
    answer:
      "The Islas Marietas are a National Park and a Biosphere Reserve. CONANP sets a daily carrying capacity to protect the reef and the beach, so only a small number of visitors can enter each day, at assigned times.",
  },
  {
    question: "Which days is the park closed?",
    answer:
      "Access to Hidden Beach normally runs Wednesday to Sunday; it is closed on Mondays and Tuesdays so the ecosystem can recover. CONANP may also close access due to weather or maintenance, so we confirm every date before you book.",
  },
  {
    question: "How fit do I need to be to swim through the cave?",
    answer:
      "To reach the beach you swim a short stretch through a natural tunnel, wearing a mandatory life jacket. You need to know how to swim and feel comfortable in the ocean; at high tide or with big swells, access may be suspended for safety.",
  },
  {
    question: "What is not allowed inside the park?",
    answer:
      "You may not take sand, shells, coral or wildlife, feed animals, or use sunscreen that is not biodegradable. Following your guide’s instructions is mandatory.",
  },
];

function buildFaqEn(addonPrice?: AddonPrice): FaqItem[] {
  const bracelet = addonPrice
    ? `The Hidden Beach access bracelet costs an extra $${addonPrice.precio.toLocaleString("en-US")} ${addonPrice.moneda} and is subject to CONANP availability.`
    : "The Hidden Beach access bracelet is quoted separately and is subject to CONANP availability.";

  return [
    {
      question: "What is the difference between the Hidden Beach tour and the classic tour?",
      answer:
        "The Hidden Beach tour includes regulated access to the beach, with limited spots set by CONANP. The classic tour explores the archipelago with snorkeling, kayaking and a stop at Nopalera Beach, without entering Hidden Beach.",
    },
    {
      question: "What is included in the price and what are the extra costs?",
      answer: `Shared tours include the boat ride, snorkeling gear and a specialized guide; everything else depends on the tour and is listed on each tour page. ${bracelet} On the snorkeling tour, the park conservation fee (approx. $180 MXN) and the port tax (approx. $30 MXN) are paid separately at the pier. We confirm the final price in writing before you pay.`,
    },
    {
      question: "When is the best time to visit the Islas Marietas?",
      answer:
        "You can visit all year round. December to March is humpback whale season in Banderas Bay; from April to November the water is usually warmer for swimming and snorkeling.",
    },
    {
      question: "Can children or older adults come?",
      answer:
        "Yes. There is a child rate for ages 6 to 11. Getting into Hidden Beach requires a short swim, so message us on WhatsApp and we’ll recommend the right option for each person’s age and fitness.",
    },
  ];
}

export function getParkInfo(lang: SiteLanguage = "es") {
  return lang === "en" ? parkInfoEn : parkInfoEs;
}

export function buildFaq(lang: SiteLanguage = "es", addonPrice?: AddonPrice) {
  return lang === "en" ? buildFaqEn(addonPrice) : buildFaqEs(addonPrice);
}

export function getHomeValueProps(lang: SiteLanguage = "es") {
  return lang === "en"
    ? {
        label: "Tour essentials",
        items: [
          { icon: "🚤", title: "Departures Wednesday to Sunday", text: "From Puerto Vallarta and La Cruz de Huanacaxtle, depending on the tour." },
          { icon: "🎟️", title: "Transparent prices", text: "The CONANP Hidden Beach bracelet is quoted separately, no surprises." },
          { icon: "👥", title: "Small groups", text: "A personal experience, without the crowds." },
          { icon: "🐬", title: "Wildlife in its habitat", text: "Whales in season, dolphins and the blue-footed booby." },
        ],
      }
    : {
        label: "Lo esencial de tu tour",
        items: [
          { icon: "🚤", title: "Salidas de miércoles a domingo", text: "Desde Puerto Vallarta y La Cruz de Huanacaxtle, según el tour." },
          { icon: "🎟️", title: "Precios transparentes", text: "El brazalete CONANP de Playa Escondida se cotiza aparte, sin sorpresas." },
          { icon: "👥", title: "Grupos reducidos", text: "Una experiencia personalizada, sin aglomeraciones." },
          { icon: "🐬", title: "Fauna en su hábitat", text: "Ballenas en temporada, delfines y el pájaro bobo de patas azules." },
        ],
      };
}

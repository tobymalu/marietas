import { pierFeesSentence } from "./park";
import type { SiteLanguage } from "./site";


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
      "El parque cierra los lunes. La Playa del Amor cierra lunes y martes para la recuperación del ecosistema, así que solo se puede visitar de miércoles a domingo; los demás recorridos, como el de snorkel, operan de martes a domingo. La CONANP también puede suspender el acceso por clima o mantenimiento, así que confirmamos cada fecha antes de reservar.",
  },
  {
    question: "¿Qué condición física se necesita para entrar por la cueva?",
    answer:
      "Para llegar a la playa se nada un tramo corto por un túnel natural, con chaleco salvavidas obligatorio. Solo pueden entrar personas de 12 a 60 años que sepan nadar y se sientan cómodas en el mar; con marea alta u oleaje el acceso puede suspenderse por seguridad.",
  },
  {
    question: "¿Qué no se permite dentro del parque?",
    answer:
      "No se permite extraer arena, conchas, corales ni fauna, alimentar animales ni usar bloqueador solar que no sea biodegradable. Seguir las indicaciones del guía es obligatorio.",
  },
];

function buildFaqEs(): FaqItem[] {
  return [
    {
      question:
        "¿Cuál es la diferencia entre el tour a la Playa del Amor y el tour tradicional?",
      answer:
        "Es el mismo día completo: snorkel, kayak, paddleboard, Playa Nopalera, desayuno, comida y barra libre. El tour Playa Escondida suma 30 a 45 minutos dentro de la Playa del Amor, con cupo limitado por la CONANP y solo para personas de 12 a 60 años. El tour tradicional no entra a la Playa del Amor y es ideal para familias con niños.",
    },
    {
      question: "¿Qué incluye la tarifa y qué costos adicionales hay?",
      answer: `Ambos tours incluyen traslado en barco, desayuno, comida parrillada, barra libre en el regreso, equipo de snorkel, kayak y paddleboard, y guía. Aparte, en el muelle se pagan ${pierFeesSentence("es")} por persona. Te confirmamos el precio final por escrito antes de pagar.`,
    },
    {
      question: "¿Cuál es la mejor época para visitar las Islas Marietas?",
      answer:
        "Se pueden visitar todo el año. De diciembre a marzo es temporada de ballena jorobada en la Bahía de Banderas; de abril a noviembre el mar suele estar más cálido para nadar y hacer snorkel.",
    },
    {
      question: "¿Pueden ir niños o adultos mayores?",
      answer:
        "En el tour tradicional sí: hay tarifa de menores (6 a 11 años) e infantes (1 a 5 años). A la Playa del Amor solo pueden entrar personas de 12 a 60 años, así que si viajas con niños o adultos mayores, el tour tradicional es la mejor opción.",
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
      "The park is closed on Mondays. Hidden Beach is closed on Mondays and Tuesdays so the ecosystem can recover, so you can only visit it Wednesday to Sunday; other trips, like the snorkeling tour, run Tuesday to Sunday. CONANP may also close access due to weather or maintenance, so we confirm every date before you book.",
  },
  {
    question: "How fit do I need to be to swim through the cave?",
    answer:
      "To reach the beach you swim a short stretch through a natural tunnel, wearing a mandatory life jacket. Only people aged 12 to 60 who know how to swim and feel comfortable in the ocean can enter; at high tide or with big swells, access may be suspended for safety.",
  },
  {
    question: "What is not allowed inside the park?",
    answer:
      "You may not take sand, shells, coral or wildlife, feed animals, or use sunscreen that is not biodegradable. Following your guide’s instructions is mandatory.",
  },
];

function buildFaqEn(): FaqItem[] {
  return [
    {
      question: "What is the difference between the Hidden Beach tour and the classic tour?",
      answer:
        "It is the same full day: snorkeling, kayaking, paddleboarding, Nopalera Beach, breakfast, lunch and open bar. The Hidden Beach tour adds 30 to 45 minutes inside Hidden Beach, with limited spots set by CONANP and only for ages 12 to 60. The classic tour does not enter Hidden Beach and is ideal for families with kids.",
    },
    {
      question: "What is included in the price and what are the extra costs?",
      answer: `Both tours include the boat ride, breakfast, grilled lunch, an open bar on the way back, snorkeling, kayak and paddleboard gear, and a guide. Separately, ${pierFeesSentence("en")} are paid at the pier per person. We confirm the final price in writing before you pay.`,
    },
    {
      question: "When is the best time to visit the Islas Marietas?",
      answer:
        "You can visit all year round. December to March is humpback whale season in Banderas Bay; from April to November the water is usually warmer for swimming and snorkeling.",
    },
    {
      question: "Can children or older adults come?",
      answer:
        "On the classic tour, yes: there are child (6 to 11) and infant (1 to 5) rates. Hidden Beach is only open to ages 12 to 60, so if you are traveling with kids or older adults, the classic tour is the best choice.",
    },
  ];
}

export function getParkInfo(lang: SiteLanguage = "es") {
  return lang === "en" ? parkInfoEn : parkInfoEs;
}

export function buildFaq(lang: SiteLanguage = "es") {
  return lang === "en" ? buildFaqEn() : buildFaqEs();
}

export function getHomeValueProps(lang: SiteLanguage = "es") {
  return lang === "en"
    ? {
        label: "Tour essentials",
        items: [
          { icon: "🚤", title: "Departures Tuesday to Sunday", text: "From the Puerto Vallarta Cruise Terminal, with a Nuevo Vallarta pickup." },
          { icon: "🎟️", title: "Transparent prices", text: "The CONANP bracelet and port tax are paid separately at the pier, no surprises." },
          { icon: "👥", title: "Small groups", text: "A personal experience, without the crowds." },
          { icon: "🐬", title: "Wildlife in its habitat", text: "Whales in season, dolphins and the blue-footed booby." },
        ],
      }
    : {
        label: "Lo esencial de tu tour",
        items: [
          { icon: "🚤", title: "Salidas de martes a domingo", text: "Desde la Terminal Marítima de Puerto Vallarta, con punto alterno en Nuevo Vallarta." },
          { icon: "🎟️", title: "Precios transparentes", text: "El brazalete CONANP y el impuesto portuario se pagan aparte en el muelle, sin sorpresas." },
          { icon: "👥", title: "Grupos reducidos", text: "Una experiencia personalizada, sin aglomeraciones." },
          { icon: "🐬", title: "Fauna en su hábitat", text: "Ballenas en temporada, delfines y el pájaro bobo de patas azules." },
        ],
      };
}

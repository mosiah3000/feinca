export type CategoryId = "bombas" | "agua" | "proteccion" | "herramientas";

export interface Category {
  id: CategoryId;
  label: string;
  shortLabel: string;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  brand: string;
  category: CategoryId;
  description: string;
  image: string;
  badges: string[];
  rating: string;
  reviews: number;
  featured?: boolean;
}

export const categories: Category[] = [
  { id: "bombas", label: "Bombas de Agua", shortLabel: "Bombas" },
  { id: "agua", label: "Purificación de Agua", shortLabel: "Filtración" },
  { id: "proteccion", label: "Protección Eléctrica", shortLabel: "Electricidad" },
  { id: "herramientas", label: "Herramientas Profesionales", shortLabel: "Herramientas" },
];

export const products: Product[] = [
  {
    id: "cortapernos-dyllu-30",
    name: 'Cortapernos / Cizalla Profesional de 30" CR-V',
    shortName: 'Cortapernos Dyllu 30" CR-V',
    brand: "Dyllu",
    category: "herramientas",
    description:
      "Quijadas forjadas en acero Cromo-Vanadio (CR-V) de 30 pulgadas de alta resistencia con mangos ergonómicos antideslizantes para trabajo pesado.",
    image: "/images/products/01_cortapernos_dyllu_30.jpg",
    badges: ['30"', "CR-V"],
    rating: "4.9",
    reviews: 124,
    featured: true,
  },
  {
    id: "protector-exceline-18000",
    name: "Protector de Voltaje Aire Acondicionado 18.000 BTU",
    shortName: "Protector Exceline 18.000 BTU",
    brand: "Exceline",
    category: "proteccion",
    description:
      "Protección especializada contra variaciones de voltaje, picos y apagones para aires acondicionados tipo consola/split e inverter (120V~ con bornera).",
    image: "/images/products/02_protector_voltaje_exceline.jpg",
    badges: ["120V~", "Split / Inverter"],
    rating: "4.9",
    reviews: 210,
    featured: true,
  },
  {
    id: "bombas-leo",
    name: "Línea de Bombas de Agua y Presurizadores LEO",
    shortName: "Bombas y Presurizadores LEO",
    brand: "LEO",
    category: "bombas",
    description:
      "Amplia variedad de bombas periféricas, centrífugas en acero inoxidable y hierro, y sistemas presurizadores automáticos para uso residencial y comercial.",
    image: "/images/products/03_bombas_agua_leo.jpg",
    badges: ["Acero Inox", "Presurización"],
    rating: "4.8",
    reviews: 186,
    featured: true,
  },
  {
    id: "osmosis-nurfilter",
    name: "Filtro de Agua de Ósmosis Inversa 6 Etapas 50G",
    shortName: "Ósmosis Inversa 6 Etapas 50G",
    brand: "Nurfilter",
    category: "agua",
    description:
      "Sistema de purificación de agua en 6 etapas con bomba de llenado de 50 GPD, tanque de almacenamiento y grifo incluido para hogar u oficina.",
    image: "/images/products/04_filtro_osmosis_inversa_nurfilter.jpg",
    badges: ["6 Etapas", "50G con Bomba"],
    rating: "4.9",
    reviews: 142,
    featured: true,
  },
  {
    id: "bombas-shimge",
    name: "Bombas Centrífugas, Jet y Controladores SHIMGE",
    shortName: "Bombas Industriales SHIMGE",
    brand: "SHIMGE",
    category: "bombas",
    description:
      "Equipos de bombeo de alto caudal, bombas tipo jet y controladores automáticos de presión para instalaciones residenciales, agrícolas e industriales.",
    image: "/images/products/05_bombas_industriales_shimge.jpg",
    badges: ["Alto Caudal", "Industrial"],
    rating: "4.8",
    reviews: 98,
    featured: true,
  },
];

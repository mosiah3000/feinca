export type CategoryId = "dispositivos" | "solar" | "iluminacion" | "agua" | "herramientas";

export interface Category {
  id: CategoryId;
  label: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: CategoryId;
  description: string;
  badges: string[];
  featured?: boolean;
}

export const categories: Category[] = [
  { id: "dispositivos", label: "Dispositivos Eléctricos" },
  { id: "solar", label: "Energía Solar" },
  { id: "iluminacion", label: "Iluminación LED" },
  { id: "agua", label: "Purificación de Agua" },
  { id: "herramientas", label: "Herramientas Profesionales" },
];

export const products: Product[] = [
  // Dispositivos eléctricos
  {
    id: "tania-wiring",
    name: "Tania Wiring Devices – Tomacorrientes y Apagadores",
    brand: "Tania",
    category: "dispositivos",
    description: "Línea completa de dispositivos de cableado para uso residencial y comercial.",
    badges: ["UL", "NOM"],
  },
  {
    id: "toma-gfci",
    name: "Toma GFCI con protección de falla a tierra",
    brand: "Tania",
    category: "dispositivos",
    description: "Protección contra descargas en baños, cocinas y áreas húmedas.",
    badges: ["UL", "ETL"],
  },
  {
    id: "linea-dek",
    name: "Línea Decorativa DEK",
    brand: "DEK",
    category: "dispositivos",
    description: "Placas y dispositivos decorativos de acabado moderno.",
    badges: ["UL"],
  },
  {
    id: "linea-esty",
    name: "Línea Decorativa Esty",
    brand: "Esty",
    category: "dispositivos",
    description: "Diseño elegante y funcional para proyectos residenciales.",
    badges: ["UL", "NOM"],
  },
  // Solar
  {
    id: "panel-630w",
    name: "Panel Solar Bifacial 630W",
    brand: "Bifacial",
    category: "solar",
    description: "Alto rendimiento con captación por ambas caras. Ideal para techos y granjas solares.",
    badges: ["IEC", "Bifacial"],
    featured: true,
  },
  {
    id: "sistema-fotovoltaico",
    name: "Sistemas Fotovoltaicos (Kits residenciales y comerciales)",
    brand: "FEINCA Solar",
    category: "solar",
    description: "Paneles, inversores y baterías con asesoría técnica de instalación.",
    badges: ["UL", "ETL"],
  },
  // Iluminación
  {
    id: "vapoleta-ip65",
    name: "Vapoleta LED IP65 para exterior",
    brand: "FEINCA",
    category: "iluminacion",
    description: "Hermética, resistente al agua y al polvo. Perfecta para galpones y fachadas.",
    badges: ["IP65", "ETL"],
  },
  {
    id: "plafon-exxel",
    name: "Plafón LED Exxel",
    brand: "Exxel",
    category: "iluminacion",
    description: "Iluminación eficiente para interiores comerciales y hogar.",
    badges: ["UL"],
  },
  {
    id: "plafon-run",
    name: "Plafón LED Run",
    brand: "Run",
    category: "iluminacion",
    description: "Bajo consumo y larga vida útil en diseño delgado.",
    badges: ["NOM"],
  },
  {
    id: "plafon-igoto",
    name: "Plafón LED iGoto",
    brand: "iGoto",
    category: "iluminacion",
    description: "Luz uniforme sin parpadeo, fácil instalación.",
    badges: ["UL"],
  },
  // Agua
  {
    id: "osmosis-nurfilter",
    name: "Sistema de Ósmosis Inversa 6 Etapas",
    brand: "Nurfilter",
    category: "agua",
    description: "Agua pura y segura para el hogar u oficina con filtración en 6 etapas.",
    badges: ["NSF", "6 Etapas"],
  },
  // Herramientas
  {
    id: "set-channellock",
    name: "Set de Llaves y Alicates Channellock",
    brand: "Channellock",
    category: "herramientas",
    description: "Herramientas profesionales de alta durabilidad.",
    badges: ["Pro"],
  },
  {
    id: "set-dados-stanley",
    name: "Set de Dados y Llaves Stanley",
    brand: "Stanley",
    category: "herramientas",
    description: "Sets mecánicos completos para taller y mantenimiento industrial.",
    badges: ["Pro"],
  },
  {
    id: "set-hyper-tough",
    name: "Set de Dados Hyper Tough",
    brand: "Hyper Tough",
    category: "herramientas",
    description: "Excelente relación calidad-precio para uso diario.",
    badges: ["Value"],
  },
];

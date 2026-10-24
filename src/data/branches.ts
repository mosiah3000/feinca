export interface Branch {
  id: "cabimas" | "maracaibo" | "ciudad-ojeda";
  name: string;
  city: string;
  address: string;
  /** Dígitos internacionales sin "+" (para wa.me) */
  whatsapp: string;
  /** Números mostrados al usuario */
  phones: { label: string; display: string; digits: string }[];
}

export const branches: Branch[] = [
  {
    id: "cabimas",
    name: "Sucursal Cabimas",
    city: "Cabimas, Zulia",
    address: "Costa Oriental del Lago, Cabimas, Edo. Zulia",
    whatsapp: "584124514222",
    phones: [{ label: "WhatsApp", display: "+58 412-4514222", digits: "584124514222" }],
  },
  {
    id: "maracaibo",
    name: "Sucursal Maracaibo",
    city: "Maracaibo, Zulia",
    address: "Maracaibo, Edo. Zulia",
    whatsapp: "584246925269",
    phones: [
      { label: "Ventas", display: "+58 424-6925269", digits: "584246925269" },
      { label: "Atención", display: "+58 424-6459056", digits: "584246459056" },
    ],
  },
  {
    id: "ciudad-ojeda",
    name: "Sucursal Ciudad Ojeda",
    city: "Ciudad Ojeda, Zulia",
    address: "Ciudad Ojeda, Edo. Zulia",
    // TODO: reemplazar por el número propio de Ciudad Ojeda cuando esté disponible
    whatsapp: "584124514222",
    phones: [{ label: "WhatsApp", display: "+58 412-4514222", digits: "584124514222" }],
  },
];

export const WHATSAPP_MAIN = branches[0].whatsapp;

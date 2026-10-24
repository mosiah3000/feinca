"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Droplets,
  Hammer,
  Lightbulb,
  MessageCircle,
  Plug,
  Sun,
  type LucideIcon,
} from "lucide-react";
import { categories, products, type CategoryId, type Product } from "@/data/products";
import { WHATSAPP_MAIN } from "@/data/branches";
import { productQuoteLink } from "@/lib/whatsapp";

const icons: Record<CategoryId, LucideIcon> = {
  dispositivos: Plug,
  solar: Sun,
  iluminacion: Lightbulb,
  agua: Droplets,
  herramientas: Hammer,
};

const categoryShowcase: {
  label: string;
  category: CategoryId;
  image: string;
  alt: string;
}[] = [
  {
    label: "Material eléctrico",
    category: "dispositivos",
    image: "/images/products/01_interruptores_tania_dek.jpg",
    alt: "Productos de material eléctrico",
  },
  {
    label: "Interruptores y tomacorrientes",
    category: "dispositivos",
    image: "/images/products/02_tomacorrientes_industriales.jpg",
    alt: "Interruptores y tomacorrientes",
  },
  {
    label: "Iluminación LED",
    category: "iluminacion",
    image: "/images/products/07_lamparas_led_variedad.jpg",
    alt: "Variedad de lámparas LED",
  },
  {
    label: "Energía solar",
    category: "solar",
    image: "/images/products/04_panel_solar_bifacial_630w.jpg",
    alt: "Panel solar bifacial de 630 W",
  },
  {
    label: "Herramientas",
    category: "herramientas",
    image: "/images/products/05_juegos_herramientas_mecanicas.jpg",
    alt: "Juegos de herramientas mecánicas",
  },
  {
    label: "Filtración de agua",
    category: "agua",
    image: "/images/products/03_filtro_agua_osmosis_inversa.jpg",
    alt: "Sistema de filtración de agua por ósmosis inversa",
  },
];

const productImages: Record<Product["id"], string> = {
  "tania-wiring": "/images/products/01_interruptores_tania_dek.jpg",
  "toma-gfci": "/images/products/02_tomacorrientes_industriales.jpg",
  "linea-dek": "/images/products/01_interruptores_tania_dek.jpg",
  "linea-esty": "/images/products/01_interruptores_tania_dek.jpg",
  "panel-630w": "/images/products/04_panel_solar_bifacial_630w.jpg",
  "sistema-fotovoltaico": "/images/products/04_panel_solar_bifacial_630w.jpg",
  "vapoleta-ip65": "/images/products/08_vapoleta_led_18w.jpg",
  "plafon-exxel": "/images/products/07_lamparas_led_variedad.jpg",
  "plafon-run": "/images/products/07_lamparas_led_variedad.jpg",
  "plafon-igoto": "/images/products/07_lamparas_led_variedad.jpg",
  "osmosis-nurfilter": "/images/products/03_filtro_agua_osmosis_inversa.jpg",
  "set-channellock": "/images/products/05_juegos_herramientas_mecanicas.jpg",
  "set-dados-stanley": "/images/products/05_juegos_herramientas_mecanicas.jpg",
  "set-hyper-tough": "/images/products/05_juegos_herramientas_mecanicas.jpg",
};

export default function Catalog() {
  const [active, setActive] = useState<CategoryId>("dispositivos");
  const visible = products.filter((p) => p.category === active);

  return (
    <section id="categorias" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-feinca">Catálogo FEINCA</p>
            <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-slate-ink sm:text-4xl">
              Soluciones para cada parte de tu proyecto
            </h2>
          </div>
          <p className="hidden border-l border-slate-300 pb-1 pl-4 text-sm text-slate-500 md:block">
            Seis categorías, un solo proveedor
          </p>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {categoryShowcase.map((item) => (
            <a
              key={item.label}
              href="#productos"
              onClick={() => setActive(item.category)}
              className="group overflow-hidden border border-slate-200 bg-white transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-feinca/60"
            >
              <div className="relative aspect-[1.18] bg-[#f2f1ed] p-1.5 sm:p-2">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 639px) 45vw, (max-width: 1023px) 29vw, 16vw"
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex min-h-14.5 items-center justify-between gap-1 border-t-[3px] border-t-feinca px-3 py-2 sm:px-3.5">
                <span className="text-xs font-semibold leading-4 text-slate-700 sm:text-sm">{item.label}</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-feinca transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>

        <div id="productos" className="mt-12 scroll-mt-24 border-t border-slate-200 pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Selección de productos</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-ink">Encuentra lo que buscas</h3>
        <div
          role="tablist"
          aria-label="Categorías de productos"
          className="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {categories.map((c) => {
            const TabIcon = icons[c.id];
            const selected = c.id === active;
            return (
              <button
                key={c.id}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={selected}
                aria-controls="catalog-panel"
                onClick={() => setActive(c.id)}
                className={`inline-flex min-h-10 shrink-0 items-center gap-2 rounded-md border px-3 py-2 text-sm font-semibold transition-colors ${
                  selected
                    ? "border-feinca bg-feinca text-white shadow-md"
                    : "border-slate-200 bg-white text-slate-600 hover:border-feinca/40 hover:text-feinca"
                }`}
              >
                <TabIcon className="h-4 w-4" /> {c.label}
              </button>
            );
          })}
        </div>

        <div
          id="catalog-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden border border-slate-200 bg-white transition-colors hover:border-slate-400"
            >
              <div className="relative h-56 bg-[#f2f1ed] p-3">
                <Image
                  src={productImages[p.id]}
                  alt={p.name}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                />
                {p.featured && (
                  <span className="absolute right-3 top-3 rounded-sm bg-feinca px-2.5 py-1 text-xs font-bold text-white">
                    Destacado
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{p.brand}</p>
                <h3 className="mt-1 text-lg font-bold text-slate-ink">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{p.description}</p>
                <a
                  href={productQuoteLink(WHATSAPP_MAIN, p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-slate-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-feinca"
                >
                  <MessageCircle className="h-4 w-4" /> Solicitar cotización
                </a>
              </div>
            </article>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

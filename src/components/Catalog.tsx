"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ShoppingCart, Star, X } from "lucide-react";
import { categories, products, type CategoryId } from "@/data/products";
import { WHATSAPP_MAIN } from "@/data/branches";
import { productQuoteLink, whatsappLink } from "@/lib/whatsapp";

type FilterId = "todos" | CategoryId;

const categoryShowcase: {
  label: string;
  category: CategoryId;
  image: string;
  alt: string;
}[] = [
  {
    label: "Herramientas",
    category: "herramientas",
    image: "/images/products/01_cortapernos_dyllu_30.jpg",
    alt: 'Cortapernos profesional Dyllu de 30 pulgadas CR-V',
  },
  {
    label: "Electricidad",
    category: "proteccion",
    image: "/images/products/02_protector_voltaje_exceline.jpg",
    alt: "Protector de voltaje Exceline 18.000 BTU",
  },
  {
    label: "Bombas LEO",
    category: "bombas",
    image: "/images/products/03_bombas_agua_leo.jpg",
    alt: "Bombas de agua y presurizadores LEO",
  },
  {
    label: "Plomería y Agua",
    category: "agua",
    image: "/images/products/04_filtro_osmosis_inversa_nurfilter.jpg",
    alt: "Filtro de agua de ósmosis inversa 6 etapas Nurfilter",
  },
  {
    label: "Bombeo Industrial",
    category: "bombas",
    image: "/images/products/05_bombas_industriales_shimge.jpg",
    alt: "Bombas centrífugas y controlador SHIMGE",
  },
];

export default function Catalog() {
  const [active, setActive] = useState<FilterId>("todos");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const onSearch = (e: Event) => {
      const custom = e as CustomEvent<string>;
      setSearchQuery(custom.detail ?? "");
    };
    window.addEventListener("feinca:search", onSearch);
    return () => window.removeEventListener("feinca:search", onSearch);
  }, []);

  const visible = products.filter((p) => {
    const matchesCategory = active === "todos" || p.category === active;
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.shortName.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="categorias" className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:space-y-12 sm:px-6">
        {/* 1. Categorías principales */}
        <div>
          <div className="flex items-center justify-between gap-4">
            <h2 className="border-l-4 border-feinca pl-3 text-lg font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              <span className="sm:hidden">Categorías</span>
              <span className="hidden sm:inline">Categorías principales</span>
            </h2>
            <a
              href="#productos"
              onClick={() => {
                setActive("todos");
                setSearchQuery("");
              }}
              className="inline-flex items-center gap-1 text-xs font-bold text-feinca hover:underline sm:text-sm"
            >
              Ver todas <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2.5 sm:mt-5 sm:gap-4 lg:grid-cols-5">
            {categoryShowcase.map((item) => {
              const isSelected = active === item.category;
              return (
                <a
                  key={item.label}
                  href="#productos"
                  onClick={() => setActive(item.category)}
                  className={`group flex flex-col items-center rounded-xl border p-2.5 text-center transition-all sm:p-3.5 ${
                    isSelected
                      ? "border-feinca bg-red-50/40 shadow-sm"
                      : "border-slate-200/80 bg-[#f4f4f5] hover:-translate-y-0.5 hover:border-feinca/60 hover:bg-white hover:shadow-sm"
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#141619]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 639px) 30vw, (max-width: 1023px) 30vw, 18vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="mt-2.5 text-xs font-bold text-slate-900 sm:text-sm">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* 2. Promociones */}
        <div id="promociones" className="scroll-mt-28">
          <div className="flex items-center justify-between gap-4">
            <h2 className="border-l-4 border-feinca pl-3 text-lg font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              Promociones
            </h2>
            <a
              href={whatsappLink(WHATSAPP_MAIN, "Hola FEINCA, quisiera consultar las promociones disponibles.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-feinca hover:underline sm:text-sm"
            >
              <span className="sm:hidden">Ver más</span>
              <span className="hidden sm:inline">Ver más promociones</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3.5 sm:mt-5 md:grid-cols-3 md:gap-4">
            {/* Promo Card 1 - Red */}
            <a
              href={productQuoteLink(WHATSAPP_MAIN, 'Cortapernos / Cizalla Profesional de 30" CR-V (Promoción)')}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative grid min-h-[150px] grid-cols-[1.15fr_0.85fr] items-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#9e1118] via-[#c41922] to-[#dc2626] p-4 text-white shadow-sm sm:min-h-[168px] sm:p-5"
            >
              <div className="relative z-10 pr-2">
                <p className="text-xs font-semibold text-white/90 sm:text-sm">Hasta</p>
                <p className="mt-0.5 text-2xl font-black tracking-tight sm:text-3xl">20% OFF</p>
                <p className="mt-1 text-xs font-semibold leading-4 text-white/95 sm:text-sm">
                  en herramientas seleccionadas
                </p>
              </div>
              <div className="relative h-28 w-full overflow-hidden rounded-xl border border-white/15 bg-[#141619] shadow-md sm:h-32">
                <Image
                  src="/images/products/01_cortapernos_dyllu_30.jpg"
                  alt="Promoción en herramientas Dyllu"
                  fill
                  sizes="(max-width: 767px) 42vw, 15vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>

            {/* Promo Card 2 - Dark */}
            <a
              href={productQuoteLink(WHATSAPP_MAIN, "Promoción en Bombas de Agua LEO y SHIMGE")}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative grid min-h-[150px] grid-cols-[1.15fr_0.85fr] items-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#121417] via-[#1c2026] to-[#272c35] p-4 text-white shadow-sm sm:min-h-[168px] sm:p-5"
            >
              <div className="relative z-10 pr-2">
                <p className="text-sm font-bold text-white/90 sm:text-base">Ofertas en</p>
                <p className="text-xl font-black leading-tight tracking-tight sm:text-2xl">
                  bombas de agua
                </p>
                <p className="mt-1.5 text-xs text-slate-300">
                  Potencia y caudal para tus proyectos
                </p>
              </div>
              <div className="relative h-28 w-full overflow-hidden rounded-xl border border-white/15 bg-[#141619] shadow-md sm:h-32">
                <Image
                  src="/images/products/03_bombas_agua_leo.jpg"
                  alt="Ofertas en bombas de agua LEO"
                  fill
                  sizes="(max-width: 767px) 42vw, 15vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>

            {/* Promo Card 3 - Light */}
            <a
              href={productQuoteLink(WHATSAPP_MAIN, "Promoción en Protección Eléctrica y Ósmosis Inversa")}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative grid min-h-[150px] grid-cols-[1.15fr_0.85fr] items-center overflow-hidden rounded-2xl border border-slate-200 bg-[#f2f1ed] p-4 text-slate-900 shadow-sm sm:min-h-[168px] sm:p-5"
            >
              <div className="relative z-10 pr-2">
                <p className="text-2xl font-black tracking-tight text-feinca sm:text-3xl">10% OFF</p>
                <p className="mt-1 text-xs font-bold leading-4 text-slate-800 sm:text-sm">
                  en protección eléctrica y filtración
                </p>
              </div>
              <div className="relative h-28 w-full overflow-hidden rounded-xl border border-slate-300 bg-[#141619] shadow-md sm:h-32">
                <Image
                  src="/images/products/02_protector_voltaje_exceline.jpg"
                  alt="Descuento en protector de voltaje Exceline"
                  fill
                  sizes="(max-width: 767px) 42vw, 15vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
          </div>
        </div>

        {/* 3. Productos destacados */}
        <div id="productos" className="scroll-mt-28">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="border-l-4 border-feinca pl-3 text-lg font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              Productos destacados
            </h2>
            <button
              type="button"
              onClick={() => {
                setActive("todos");
                setSearchQuery("");
              }}
              className="inline-flex items-center gap-1 text-xs font-bold text-feinca hover:underline sm:text-sm"
            >
              Ver todos <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Filter Pills */}
          <div
            role="tablist"
            aria-label="Filtrar productos por categoría"
            className="-mx-4 mt-4 flex items-center gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
          >
            <button
              type="button"
              role="tab"
              aria-selected={active === "todos"}
              onClick={() => setActive("todos")}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors sm:text-sm ${
                active === "todos"
                  ? "border-feinca bg-feinca text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-feinca hover:text-feinca"
              }`}
            >
              Todos ({products.length})
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={active === c.id}
                onClick={() => setActive(c.id)}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors sm:text-sm ${
                  active === c.id
                    ? "border-feinca bg-feinca text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-feinca hover:text-feinca"
                }`}
              >
                {c.label}
              </button>
            ))}
            {searchQuery.trim() && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="inline-flex shrink-0 items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200"
              >
                Búsqueda: &ldquo;{searchQuery}&rdquo; <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Products Grid */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {visible.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-3 shadow-xs transition-all hover:border-slate-300 hover:shadow-md sm:p-3.5"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#141619]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 639px) 46vw, (max-width: 1023px) 30vw, 18vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <p className="mt-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {p.brand}
                  </p>
                  <h3
                    title={p.name}
                    className="mt-0.5 line-clamp-2 text-xs font-bold leading-snug text-slate-900 sm:text-sm"
                  >
                    {p.shortName}
                  </h3>

                  {/* Rating & Badges Row */}
                  <div className="mt-1.5 flex items-center gap-1 text-xs">
                    <Star className="h-3.5 w-3.5 fill-feinca text-feinca" />
                    <span className="font-bold text-feinca">{p.rating}</span>
                    <span className="text-slate-400">({p.reviews})</span>
                  </div>
                </div>

                <a
                  href={productQuoteLink(WHATSAPP_MAIN, p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5 inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-lg border-2 border-feinca px-3 py-1.5 text-xs font-bold text-feinca transition-colors hover:bg-feinca hover:text-white sm:min-h-10 sm:text-sm"
                >
                  <ShoppingCart className="h-3.5 w-3.5 text-slate-800 group-hover:text-current sm:h-4 sm:w-4" />
                  Agregar / Cotizar
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

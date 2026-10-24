"use client";

import { useState } from "react";
import {
  Droplets,
  Hammer,
  Lightbulb,
  MessageCircle,
  Plug,
  ShieldCheck,
  Sun,
  type LucideIcon,
} from "lucide-react";
import { categories, products, type CategoryId } from "@/data/products";
import { WHATSAPP_MAIN } from "@/data/branches";
import { productQuoteLink } from "@/lib/whatsapp";

const icons: Record<CategoryId, LucideIcon> = {
  dispositivos: Plug,
  solar: Sun,
  iluminacion: Lightbulb,
  agua: Droplets,
  herramientas: Hammer,
};

export default function Catalog() {
  const [active, setActive] = useState<CategoryId>("dispositivos");
  const visible = products.filter((p) => p.category === active);
  const Icon = icons[active];

  return (
    <section id="categorias" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-feinca">Catálogo</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-ink sm:text-4xl">
          Todo para tu proyecto, en un solo lugar
        </h2>

        <div
          role="tablist"
          aria-label="Categorías de productos"
          className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
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
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
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
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-feinca/30 hover:shadow-xl"
            >
              <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-slate-ink to-gray-900">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,158,11,0.25),transparent_60%)]"
                />
                <Icon className="relative h-16 w-16 text-white/90 transition-transform group-hover:scale-110" />
                {p.featured && (
                  <span className="absolute right-3 top-3 rounded-full bg-volt px-2.5 py-0.5 text-xs font-bold text-slate-ink">
                    Destacado
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-1.5">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-600"
                    >
                      <ShieldCheck className="h-3 w-3 text-feinca" /> {b}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-slate-400">{p.brand}</p>
                <h3 className="mt-1 text-lg font-bold text-slate-ink">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{p.description}</p>
                <a
                  href={productQuoteLink(WHATSAPP_MAIN, p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-feinca active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" /> Consultar disponibilidad / Cotizar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

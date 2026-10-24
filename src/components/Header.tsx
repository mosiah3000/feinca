"use client";

import { useState } from "react";
import { Menu, X, MessageCircle, MapPin } from "lucide-react";
import Logo from "./Logo";
import { branches } from "@/data/branches";
import { whatsappLink } from "@/lib/whatsapp";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#categorias", label: "Categorías" },
  { href: "#solar", label: "Ofertas Solares" },
  { href: "#sucursales", label: "Sucursales" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [branchId, setBranchId] = useState(branches[0].id);
  const branch = branches.find((b) => b.id === branchId) ?? branches[0];
  const quote = whatsappLink(branch.whatsapp, "Hola FEINCA, quisiera solicitar una cotización.");

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" aria-label="FEINCA inicio">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-feinca"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <label className="relative">
            <span className="sr-only">Seleccionar sucursal</span>
            <MapPin className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <select
              value={branchId}
              onChange={(e) => setBranchId(e.target.value as typeof branchId)}
              className="h-10 rounded-lg border border-slate-200 bg-white pl-8 pr-3 text-sm text-slate-700 focus:border-feinca focus:outline-none focus:ring-2 focus:ring-feinca/20"
            >
              {branches.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.city.split(",")[0]}
                </option>
              ))}
            </select>
          </label>
          <a
            href={quote}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-feinca px-4 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-feinca-dark hover:shadow-md active:translate-y-0"
          >
            <MessageCircle className="h-4 w-4" /> Cotizar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-4 pb-4 lg:hidden">
          <nav aria-label="Móvil" className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-slate-700 hover:text-feinca"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-2 flex gap-2">
            <select
              aria-label="Seleccionar sucursal"
              value={branchId}
              onChange={(e) => setBranchId(e.target.value as typeof branchId)}
              className="h-11 flex-1 rounded-lg border border-slate-200 bg-white px-3 text-sm"
            >
              {branches.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.city.split(",")[0]}
                </option>
              ))}
            </select>
            <a
              href={quote}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-feinca px-4 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> Cotizar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

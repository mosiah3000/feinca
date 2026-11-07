"use client";

import { useState, type FormEvent } from "react";
import { Menu, X, MessageCircle, MapPin, Search, ShoppingBag, Sun } from "lucide-react";
import Logo from "./Logo";
import { branches } from "@/data/branches";
import { products } from "@/data/products";
import { whatsappLink } from "@/lib/whatsapp";

const links = [
  { href: "#inicio", label: "Home", active: true },
  { href: "#productos", label: "Productos" },
  { href: "#promociones", label: "Promociones" },
  { href: "#solar", label: "Energía Solar" },
  { href: "#sucursales", label: "Sucursales" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [branchId, setBranchId] = useState(branches[0].id);
  const branch = branches.find((b) => b.id === branchId) ?? branches[0];
  const quote = whatsappLink(branch.whatsapp, "Hola FEINCA, quisiera asesoría por WhatsApp para mi proyecto.");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("feinca:search", { detail: query }));
    const el = document.getElementById("productos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    window.dispatchEvent(new CustomEvent("feinca:search", { detail: value }));
  };

  return (
    <header className="sticky top-0 z-40 shadow-sm">
      {/* Top dark bar */}
      <div className="bg-[#141416] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:py-3.5">
          <a href="#inicio" aria-label="FEINCA inicio" className="shrink-0">
            <Logo light />
          </a>

          {/* Desktop Search Bar */}
          <form onSubmit={handleSearch} role="search" className="hidden max-w-xl flex-1 lg:flex">
            <div className="flex w-full overflow-hidden rounded-lg bg-white shadow-inner focus-within:ring-2 focus-within:ring-feinca">
              <label htmlFor="desktop-search" className="sr-only">
                Buscar productos
              </label>
              <input
                id="desktop-search"
                type="search"
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                placeholder="Buscar productos (ej. bombas, protector, ósmosis, cizalla...)"
                className="w-full bg-transparent px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Buscar"
                className="flex items-center justify-center bg-feinca px-4 text-white transition-colors hover:bg-feinca-dark"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Desktop Quick Actions */}
          <div className="hidden items-center gap-5 lg:flex">
            <div className="relative flex flex-col items-center text-xs text-slate-200 hover:text-white">
              <MapPin className="mb-0.5 h-5 w-5 text-white" />
              <label htmlFor="branch-select" className="sr-only">
                Seleccionar sucursal
              </label>
              <select
                id="branch-select"
                value={branchId}
                onChange={(e) => setBranchId(e.target.value as typeof branchId)}
                className="cursor-pointer bg-transparent text-center text-xs font-medium text-slate-200 focus:outline-none"
              >
                {branches.map((b) => (
                  <option key={b.id} value={b.id} className="bg-slate-900 text-white">
                    {b.city.split(",")[0]}
                  </option>
                ))}
              </select>
            </div>

            <a
              href="#solar"
              className="flex flex-col items-center gap-0.5 text-xs font-medium text-slate-200 transition-colors hover:text-white"
            >
              <Sun className="h-5 w-5" />
              <span>Solar</span>
            </a>

            <a
              href="#productos"
              aria-label="Ver catálogo de productos"
              className="relative flex flex-col items-center gap-0.5 text-xs font-medium text-slate-200 transition-colors hover:text-white"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className=" -right-2 -top-1.5 absolute flex h-4 min-w-4 items-center justify-center rounded-full bg-feinca px-1 text-[10px] font-bold text-white">
                {products.length}
              </span>
              <span>Catálogo</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#productos"
              aria-label="Ver productos"
              className="relative rounded-md p-2 text-white hover:bg-white/10"
            >
              <ShoppingBag className="h-6 w-6" />
              <span className="right-0.5 top-0.5 absolute flex h-4 min-w-4 items-center justify-center rounded-full bg-feinca px-1 text-[10px] font-bold text-white">
                {products.length}
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="rounded-md p-2 text-white hover:bg-white/10"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="px-4 pb-3 lg:hidden">
          <form onSubmit={handleSearch} role="search">
            <div className="flex w-full overflow-hidden rounded-lg bg-white shadow-inner">
              <label htmlFor="mobile-search" className="sr-only">
                Buscar productos
              </label>
              <input
                id="mobile-search"
                type="search"
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                placeholder="Buscar productos..."
                className="w-full bg-transparent px-3.5 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Buscar"
                className="flex items-center justify-center bg-feinca px-3.5 text-white transition-colors hover:bg-feinca-dark"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Desktop Sub-navigation Bar */}
      <div className="hidden border-b border-slate-200 bg-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-7">
            <a
              href="#categorias"
              className="inline-flex items-center gap-2.5 bg-feinca px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-feinca-dark"
            >
              <Menu className="h-4 w-4" /> Categorías
            </a>

            <nav aria-label="Principal" className="flex items-center gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`py-3 text-sm font-semibold transition-colors ${
                    l.active
                      ? "border-b-2 border-feinca text-slate-900"
                      : "text-slate-700 hover:text-feinca"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <a
            href={quote}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2 text-sm font-bold text-slate-800 transition-colors hover:text-feinca"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-feinca text-white">
              <MessageCircle className="h-3.5 w-3.5" />
            </span>
            Asesoría por WhatsApp
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div id="mobile-menu" className="border-b border-slate-200 bg-white px-4 pb-4 lg:hidden">
          <nav aria-label="Móvil" className="flex flex-col divide-y divide-slate-100">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-semibold text-slate-800 hover:text-feinca"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex gap-2">
            <select
              aria-label="Seleccionar sucursal"
              value={branchId}
              onChange={(e) => setBranchId(e.target.value as typeof branchId)}
              className="h-10 flex-1 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700"
            >
              {branches.map((b) => (
                <option key={b.id} value={b.id}>
                  Sucursal {b.city.split(",")[0]}
                </option>
              ))}
            </select>
            <a
              href={quote}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-feinca px-4 text-sm font-bold text-white transition-colors hover:bg-feinca-dark"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

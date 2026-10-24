"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { branches } from "@/data/branches";
import { whatsappLink } from "@/lib/whatsapp";

const options = branches.filter((b) => b.id === "cabimas" || b.id === "maracaibo");

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={ref} className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="Elegir sucursal para WhatsApp"
          className="w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        >
          <p className="bg-emerald-600 px-4 py-3 text-sm font-semibold text-white">
            ¿Con qué sucursal deseas hablar?
          </p>
          <ul className="p-2">
            {options.map((b) => (
              <li key={b.id}>
                <a
                  href={whatsappLink(b.whatsapp, `Hola FEINCA ${b.city.split(",")[0]}, necesito información.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-ink hover:bg-emerald-50"
                >
                  <MessageCircle className="h-5 w-5 text-emerald-600" />
                  <span>
                    {b.city.split(",")[0]}
                    <span className="block text-xs font-normal text-slate-500">{b.phones[0].display}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Cerrar menú de WhatsApp" : "Abrir menú de WhatsApp"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl transition hover:scale-110 hover:bg-emerald-600 active:scale-95"
      >
        {open ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  );
}

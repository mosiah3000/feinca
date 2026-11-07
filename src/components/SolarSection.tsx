"use client";

import { useState } from "react";
import { Building2, Home, MessageCircle, Sun, Zap } from "lucide-react";
import { WHATSAPP_MAIN } from "@/data/branches";
import { whatsappLink } from "@/lib/whatsapp";

type Kind = "hogar" | "negocio";

const PANEL_WATTS = 630;
const SUN_HOURS = 5; // horas-sol pico aproximadas en el Zulia
const EFFICIENCY = 0.8;

export default function SolarSection() {
  const [kind, setKind] = useState<Kind>("hogar");
  const [kwhMonth, setKwhMonth] = useState(300);

  const dailyKwh = kwhMonth / 30;
  const panels = Math.max(1, Math.ceil((dailyKwh * 1000) / (PANEL_WATTS * SUN_HOURS * EFFICIENCY)));
  const kwp = ((panels * PANEL_WATTS) / 1000).toFixed(2);

  const message = `Hola FEINCA, quisiera un estudio de energía solar para ${
    kind === "hogar" ? "mi hogar" : "mi negocio"
  }. Consumo aprox.: ${kwhMonth} kWh/mes. Estimado: ${panels} paneles de 630W (${kwp} kWp).`;

  return (
    <section id="solar" className="overflow-hidden border-t border-slate-200 bg-[#f4f4f5] py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="flex flex-col justify-center py-1">
          <h2 className="border-l-4 border-feinca pl-3 text-xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Soluciones de Energía Solar
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Paneles, inversores y baterías para sistemas residenciales y comerciales, con asesoría técnica personalizada para tu proyecto.
          </p>
          <div className="relative mt-6 grid min-h-48 grid-cols-[1fr_auto] overflow-hidden rounded-2xl bg-[#141416] text-white shadow-md sm:min-h-56">
            <div className="relative z-10 flex flex-col justify-between p-5 sm:p-7">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                <Sun className="h-3.5 w-3.5 text-feinca" /> Energía para avanzar
              </span>
              <div>
                <p className="text-4xl font-extrabold leading-none sm:text-5xl">
                  630<span className="text-feinca">W</span>
                </p>
                <p className="mt-2 max-w-48 text-xs leading-5 text-white/80 sm:text-sm">
                  Paneles bifaciales de alto rendimiento disponibles bajo cotización
                </p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute inset-y-0 right-0 w-[34%] -skew-x-12 translate-x-4 bg-feinca" />
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-2.5 text-xs font-semibold sm:text-sm">
            {["Tecnología bifacial", "Paneles de 630 W", "Sistemas residenciales", "Sistemas comerciales"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-slate-700">
                <Zap className="h-4 w-4 shrink-0 text-feinca" /> {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-feinca">Planifica tu proyecto</p>
          <h3 className="mt-1 text-xl font-extrabold sm:text-2xl">Calculadora solar aproximada</h3>
          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            Estimación referencial; solicita un estudio personalizado con nuestro equipo.
          </p>

          <div role="radiogroup" aria-label="Tipo de cliente" className="mt-5 grid grid-cols-2 gap-3">
            {([
              { id: "hogar", label: "Hogar", icon: Home },
              { id: "negocio", label: "Negocio", icon: Building2 },
            ] as const).map(({ id, label, icon: I }) => (
              <button
                key={id}
                type="button"
                role="radio"
                aria-checked={kind === id}
                onClick={() => {
                  setKind(id);
                  setKwhMonth(id === "hogar" ? 300 : 1500);
                }}
                className={`flex min-h-11 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold transition-colors ${
                  kind === id
                    ? "border-feinca bg-feinca text-white shadow-xs"
                    : "border-slate-200 bg-white text-slate-700 hover:border-feinca"
                }`}
              >
                <I className="h-4 w-4" /> {label}
              </button>
            ))}
          </div>

          <label htmlFor="kwh" className="mt-5 flex justify-between text-sm font-semibold">
            <span>Consumo mensual</span>
            <span className="font-bold text-feinca">{kwhMonth} kWh</span>
          </label>
          <input
            id="kwh"
            type="range"
            min={100}
            max={kind === "hogar" ? 1000 : 10000}
            step={50}
            value={kwhMonth}
            onChange={(e) => setKwhMonth(Number(e.target.value))}
            className="mt-2 w-full accent-red-600"
          />

          <div className="mt-5 grid grid-cols-2 gap-4 rounded-xl bg-[#f4f4f5] p-4 text-center">
            <div>
              <p className="text-3xl font-extrabold text-feinca" aria-live="polite">
                {panels}
              </p>
              <p className="text-xs font-medium text-slate-500">paneles de 630 W</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-feinca">{kwp}</p>
              <p className="text-xs font-medium text-slate-500">kWp estimados</p>
            </div>
          </div>

          <a
            href={whatsappLink(WHATSAPP_MAIN, message)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-feinca px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-feinca-dark"
          >
            <MessageCircle className="h-4 w-4" /> Solicitar estudio por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

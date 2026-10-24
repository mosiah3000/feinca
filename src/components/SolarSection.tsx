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
    <section id="solar" className="overflow-hidden bg-[#e7e8e7] py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="flex flex-col justify-center py-2">
          <span className="inline-flex items-center gap-2 border-l-[3px] border-feinca pl-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-600">
            <Sun className="h-4 w-4" /> Soluciones de Energía Solar
          </span>
          <h2 className="mt-5 max-w-lg text-3xl font-extrabold tracking-tight text-slate-ink sm:text-4xl">
            Energía solar para tu hogar o negocio
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-600">
            Paneles, inversores y baterías para sistemas residenciales y comerciales, con asesoría técnica para tu proyecto.
          </p>
          <div className="relative mt-7 grid min-h-52.5 grid-cols-[1fr_auto] overflow-hidden bg-slate-ink text-white sm:min-h-60">
            <div className="relative z-10 flex flex-col justify-between p-5 sm:p-7">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Energía para avanzar</span>
              <div>
                <p className="text-4xl font-extrabold leading-none sm:text-5xl">630<span className="text-feinca">W</span></p>
                <p className="mt-2 max-w-45 text-sm leading-5 text-white/75">Panel bifacial disponible en el catálogo</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute bottom-0 right-0 h-2/3 w-[38%] bg-feinca" />
          </div>
          <ul className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
            {["Tecnología bifacial", "Panel de 630 W", "Sistemas residenciales", "Sistemas comerciales"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-slate-700">
                <Zap className="h-4 w-4 shrink-0 text-feinca" /> {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t-4 border-feinca bg-white p-5 text-slate-ink shadow-[0_18px_50px_-35px_rgba(15,23,42,0.45)] sm:p-8 lg:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-feinca">Planifica tu proyecto</p>
          <h3 className="mt-2 text-xl font-bold sm:text-2xl">Calculadora solar aproximada</h3>
          <p className="mt-1 text-sm text-slate-500">Estimación referencial; solicita un estudio personalizado.</p>

          <div role="radiogroup" aria-label="Tipo de cliente" className="mt-6 grid grid-cols-2 gap-3">
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
                className={`flex min-h-12 items-center justify-center gap-2 rounded-md border px-4 py-3 font-semibold transition-colors ${
                  kind === id
                    ? "border-feinca bg-feinca text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-feinca"
                }`}
              >
                <I className="h-5 w-5" /> {label}
              </button>
            ))}
          </div>

          <label htmlFor="kwh" className="mt-6 flex justify-between text-sm font-medium">
            <span>Consumo mensual</span>
            <span className="font-semibold text-feinca">{kwhMonth} kWh</span>
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

          <div className="mt-6 grid grid-cols-2 gap-4 rounded-md bg-slate-100 p-4 text-center">
            <div>
              <p className="text-3xl font-extrabold text-feinca" aria-live="polite">{panels}</p>
              <p className="text-xs text-slate-500">paneles de 630 W</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-feinca">{kwp}</p>
              <p className="text-xs text-slate-500">kWp estimados</p>
            </div>
          </div>

          <a
            href={whatsappLink(WHATSAPP_MAIN, message)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-feinca px-5 py-3.5 font-semibold text-white transition-colors hover:bg-feinca-dark"
          >
            <MessageCircle className="h-5 w-5" /> Solicitar estudio por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

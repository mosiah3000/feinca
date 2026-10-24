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
    <section id="solar" className="relative overflow-hidden bg-slate-ink py-20 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(245,158,11,0.25),transparent_50%)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-volt/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-volt">
            <Sun className="h-4 w-4" /> Soluciones de Energía Solar
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Panel Solar Bifacial <span className="text-volt">630W</span> de alto rendimiento
          </h2>
          <p className="mt-4 text-slate-300">
            Capta energía por ambas caras para generar más con menos espacio. Reduce tu factura, protégete de
            los apagones y haz crecer tu negocio con energía limpia.
          </p>
          <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            {["Tecnología bifacial", "630W por panel", "Garantía de rendimiento", "Asesoría e instalación"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-slate-200">
                <Zap className="h-4 w-4 text-volt" /> {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur sm:p-8">
          <h3 className="text-xl font-bold">Calculadora solar aproximada</h3>
          <p className="mt-1 text-sm text-slate-400">Estimación referencial; solicita un estudio personalizado.</p>

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
                className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-3 font-semibold transition ${
                  kind === id
                    ? "border-volt bg-volt text-slate-ink"
                    : "border-white/15 bg-white/5 hover:bg-white/10"
                }`}
              >
                <I className="h-5 w-5" /> {label}
              </button>
            ))}
          </div>

          <label htmlFor="kwh" className="mt-6 flex justify-between text-sm font-medium">
            <span>Consumo mensual</span>
            <span className="text-volt">{kwhMonth} kWh</span>
          </label>
          <input
            id="kwh"
            type="range"
            min={100}
            max={kind === "hogar" ? 1000 : 10000}
            step={50}
            value={kwhMonth}
            onChange={(e) => setKwhMonth(Number(e.target.value))}
            className="mt-2 w-full accent-amber-500"
          />

          <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-black/30 p-4 text-center">
            <div>
              <p className="text-3xl font-extrabold text-volt" aria-live="polite">{panels}</p>
              <p className="text-xs text-slate-400">paneles de 630W</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-volt">{kwp}</p>
              <p className="text-xs text-slate-400">kWp instalados</p>
            </div>
          </div>

          <a
            href={whatsappLink(WHATSAPP_MAIN, message)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-feinca px-5 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:bg-feinca-dark"
          >
            <MessageCircle className="h-5 w-5" /> Solicitar estudio por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

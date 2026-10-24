import { ArrowRight, BadgeCheck, Headset, MessageCircle, Truck, Zap } from "lucide-react";
import { WHATSAPP_MAIN } from "@/data/branches";
import { whatsappLink } from "@/lib/whatsapp";

const trust = [
  { icon: BadgeCheck, label: "Material Certificado (UL, NOM)" },
  { icon: Truck, label: "Envíos en Zulia" },
  { icon: Headset, label: "Atención Técnica Inmediata" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-slate-ink text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(245,158,11,0.18),transparent_50%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-volt/40 bg-volt/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-volt">
          <Zap className="h-3.5 w-3.5" /> Venta al mayor y al detal
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Potencia, Innovación y Seguridad para tus{" "}
          <span className="bg-gradient-to-r from-red-500 to-volt bg-clip-text text-transparent">
            Proyectos Eléctricos e Industriales
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Suministramos a contratistas, electricistas y hogares en todo el Zulia: material eléctrico
          comercial e industrial, energía solar, iluminación LED y más, con asesoría técnica real.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#categorias"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-feinca px-6 py-3.5 font-semibold text-white shadow-lg shadow-red-900/40 transition hover:-translate-y-0.5 hover:bg-feinca-dark"
          >
            Ver Catálogo
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={whatsappLink(WHATSAPP_MAIN, "Hola FEINCA, quisiera cotizar material para mi proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-3.5 font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            <MessageCircle className="h-5 w-5" /> Cotizar por WhatsApp
          </a>
        </div>
        <ul className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
          {trust.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-sm font-medium text-slate-200">
              <Icon className="h-5 w-5 text-volt" /> {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

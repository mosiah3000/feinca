import { ArrowRight, Boxes, Headset, MapPin, MessageCircle, Phone } from "lucide-react";
import { branches } from "@/data/branches";
import { whatsappLink } from "@/lib/whatsapp";

const advantages = [
  {
    icon: Boxes,
    title: "Variedad de soluciones",
    description: "Material eléctrico, iluminación, energía solar, herramientas y filtración.",
  },
  {
    icon: Headset,
    title: "Atención personalizada",
    description: "Asesoría para consultas y cotizaciones de tus proyectos.",
  },
  {
    icon: MapPin,
    title: "Tres sucursales en Zulia",
    description: "Cabimas, Maracaibo y Ciudad Ojeda.",
  },
];

export default function Branches() {
  return (
    <section id="sucursales" className="bg-white">
      <div className="bg-slate-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-3 md:gap-8 md:py-10">
          {advantages.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="grid grid-cols-[34px_1fr] gap-3 border-l border-white/20 pl-4">
              <span className="text-xs font-bold text-red-300">0{index + 1}</span>
              <div>
                <h2 className="flex items-center gap-2 text-sm font-bold text-white">
                  <Icon className="h-4 w-4 text-red-300" /> {title}
                </h2>
                <p className="mt-1 text-sm leading-5 text-slate-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-9 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-feinca">Sucursales</p>
          <h2 className="mt-3 max-w-md text-3xl font-bold tracking-tight text-slate-ink sm:text-4xl">
            Estamos cerca de ti en el Zulia
          </h2>
          <p className="mt-4 max-w-sm leading-7 text-slate-600">
            Elige la sucursal que te quede mejor y contacta directamente a su equipo.
          </p>
          <div className="mt-7 flex items-center gap-3 border-t border-slate-200 pt-5 text-sm font-semibold text-slate-700">
            <MapPin className="h-5 w-5 text-feinca" /> Cabimas · Maracaibo · Ciudad Ojeda
          </div>
        </div>

        <div className="border-t border-slate-300">
          {branches.map((b, index) => (
            <article
              key={b.id}
              className="grid gap-4 border-b border-slate-300 py-5 sm:grid-cols-[52px_1fr_auto] sm:items-center sm:gap-5 sm:py-6"
            >
              <span className="text-2xl font-light tabular-nums text-feinca">0{index + 1}</span>
              <div>
                <h3 className="text-lg font-bold text-slate-ink">{b.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{b.address}</p>
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-700">
                  {b.phones.map((p) => (
                    <li key={p.digits}><span className="text-slate-400">{p.label}:</span> {p.display}</li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:w-55">
                <a
                  href={`tel:+${b.phones[0].digits}`}
                  className="inline-flex min-h-10 items-center justify-center gap-2 border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-ink transition-colors hover:border-feinca hover:text-feinca"
                >
                  <Phone className="h-4 w-4" /> Llamar
                </a>
                <a
                  href={whatsappLink(b.whatsapp, `Hola FEINCA ${b.city.split(",")[0]}, quisiera más información.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center justify-center gap-2 bg-feinca px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-feinca-dark"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="bg-feinca text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">Hablemos de tu proyecto</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Solicita una cotización</h2>
          </div>
          <a
            href={whatsappLink(branches[0].whatsapp, "Hola FEINCA, quisiera solicitar una cotización para mi proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 self-start border border-white/60 px-5 font-semibold text-white transition-colors hover:bg-white hover:text-feinca md:self-auto"
          >
            Cotizar por WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

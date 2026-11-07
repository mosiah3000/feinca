import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { branches } from "@/data/branches";
import { whatsappLink } from "@/lib/whatsapp";

export default function Branches() {
  return (
    <section id="sucursales" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="border-l-4 border-feinca pl-3 text-lg font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              Nuestras sucursales en el Zulia
            </h2>
            <p className="mt-2 text-xs text-slate-500 sm:text-sm">
              Elige la sucursal más cercana y comunícate directamente con nuestro equipo de ventas.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 sm:text-sm">
            <MapPin className="h-4 w-4 text-feinca" /> Cabimas · Maracaibo · Ciudad Ojeda
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {branches.map((b, index) => (
            <article
              key={b.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#f4f4f5]/60 p-5 transition-all hover:border-slate-300 hover:bg-white hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-bold text-feinca">
                    <MapPin className="h-3 w-3" /> {b.city.split(",")[0]}
                  </span>
                  <span className="text-xs font-bold text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="mt-3 text-base font-extrabold text-slate-900 sm:text-lg">{b.name}</h3>
                <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm">{b.address}</p>
                <ul className="mt-3 space-y-1 border-t border-slate-200/80 pt-3 text-xs text-slate-700 sm:text-sm">
                  {b.phones.map((p) => (
                    <li key={p.digits}>
                      <span className="font-semibold text-slate-400">{p.label}:</span> {p.display}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:+${b.phones[0].digits}`}
                  className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg border-2 border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-800 transition-colors hover:border-feinca hover:text-feinca sm:text-sm"
                >
                  <Phone className="h-3.5 w-3.5" /> Llamar
                </a>
                <a
                  href={whatsappLink(b.whatsapp, `Hola FEINCA ${b.city.split(",")[0]}, quisiera más información.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg bg-feinca px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-feinca-dark sm:text-sm"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="bg-feinca text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/80">Atención inmediata</p>
            <h2 className="mt-1 text-xl font-extrabold sm:text-2xl">
              ¿Buscas asesoría o cotización al mayor y detal?
            </h2>
          </div>
          <a
            href={whatsappLink(branches[0].whatsapp, "Hola FEINCA, quisiera solicitar una cotización para mi proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-white px-6 text-sm font-bold text-feinca shadow-sm transition-colors hover:bg-slate-100 md:self-auto"
          >
            Cotizar por WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

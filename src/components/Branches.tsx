import { MapPin, MessageCircle, Phone } from "lucide-react";
import { branches } from "@/data/branches";
import { whatsappLink } from "@/lib/whatsapp";

export default function Branches() {
  return (
    <section id="sucursales" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-feinca">Sucursales</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-ink sm:text-4xl">
          Estamos cerca de ti en el Zulia
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {branches.map((b) => (
            <article
              key={b.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-feinca/10 text-feinca">
                <MapPin className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-ink">{b.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{b.address}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-700">
                {b.phones.map((p) => (
                  <li key={p.digits}>
                    <span className="text-slate-400">{p.label}:</span> {p.display}
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={`tel:+${b.phones[0].digits}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-slate-ink transition hover:border-feinca hover:text-feinca"
                >
                  <Phone className="h-4 w-4" /> Llamar
                </a>
                <a
                  href={whatsappLink(b.whatsapp, `Hola FEINCA ${b.city.split(",")[0]}, quisiera más información.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-feinca px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-feinca-dark"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

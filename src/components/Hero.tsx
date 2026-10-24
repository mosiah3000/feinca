import Image from "next/image";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_MAIN } from "@/data/branches";
import { whatsappLink } from "@/lib/whatsapp";

const showcase = [
  {
    src: "/images/products/07_lamparas_led_variedad.jpg",
    alt: "Variedad de lámparas y productos de iluminación LED",
    label: "Iluminación LED",
    className: "row-span-2",
    width: 731,
    height: 912,
  },
  {
    src: "/images/products/02_tomacorrientes_industriales.jpg",
    alt: "Interruptores y tomacorrientes industriales",
    label: "Material eléctrico",
    className: "",
    width: 731,
    height: 1275,
  },
  {
    src: "/images/products/05_juegos_herramientas_mecanicas.jpg",
    alt: "Juegos de herramientas mecánicas profesionales",
    label: "Herramientas",
    className: "",
    width: 742,
    height: 909,
  },
];

export default function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-[#f2f1ed]">
      <div className="mx-auto grid max-w-7xl lg:min-h-165 lg:grid-cols-[0.84fr_1.16fr]">
        <div className="relative z-10 flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          <span className="inline-flex w-fit items-center gap-2 border-l-[3px] border-feinca pl-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-600">
            Venta al mayor y al detal
          </span>
          <h1 className="mt-5 max-w-135 text-[2.55rem] font-extrabold leading-[1.04] text-slate-ink sm:text-5xl lg:text-[3.45rem]">
            Todo para tus proyectos <span className="text-feinca">eléctricos e industriales.</span>
          </h1>
          <p className="mt-5 max-w-122.5 text-base leading-7 text-slate-600 sm:text-lg">
            Material eléctrico, iluminación LED, energía solar y herramientas para profesionales,
            empresas y hogares. Encuentra soluciones confiables con atención personalizada.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#categorias"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-feinca px-5 font-semibold text-white transition-colors hover:bg-feinca-dark"
            >
              Explorar catálogo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappLink(WHATSAPP_MAIN, "Hola FEINCA, quisiera cotizar material para mi proyecto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-slate-300 bg-white/70 px-5 font-semibold text-slate-ink transition-colors hover:border-feinca hover:text-feinca"
            >
              <MessageCircle className="h-4 w-4" /> Cotizar por WhatsApp
            </a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500">
            <MapPin className="h-4 w-4 text-feinca" />
            Cabimas · Maracaibo · Ciudad Ojeda
          </p>
        </div>

        <div className="relative min-h-92.5 overflow-hidden bg-slate-ink sm:min-h-120 lg:min-h-165">
          <div aria-hidden="true" className="absolute inset-y-0 right-0 w-[38%] bg-feinca" />
          <div aria-hidden="true" className="absolute bottom-0 left-0 h-[38%] w-[62%] bg-[#d8d9d7]" />
          <figure className="absolute inset-y-[7%] left-[7%] z-10 w-[54%] overflow-hidden border-[7px] border-white bg-white shadow-2xl sm:border-10">
            <Image
              src={showcase[0].src}
              alt={showcase[0].alt}
              width={showcase[0].width}
              height={showcase[0].height}
              priority
              loading="eager"
              sizes="(max-width: 1023px) 54vw, 34vw"
              className="h-full w-full object-contain"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-slate-ink px-3 py-2 text-xs font-bold uppercase tracking-wider text-white sm:px-4 sm:py-3 sm:text-sm">
              {showcase[0].label}
            </figcaption>
          </figure>
          {showcase.slice(1).map((item, index) => (
            <figure
              key={item.src}
              className={`absolute right-[6%] z-20 w-[30%] overflow-hidden border-[5px] border-white bg-white shadow-xl sm:border-[7px] ${index === 0 ? "top-[8%]" : "bottom-[7%]"}`}
            >
              <div className="relative aspect-[0.82]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1023px) 30vw, 19vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="border-t border-slate-200 px-2 py-1.5 text-[10px] font-bold text-slate-700 sm:px-3 sm:py-2 sm:text-xs">
                {item.label}
              </figcaption>
            </figure>
          ))}
          <span className="absolute bottom-4 left-4 z-20 text-[10px] font-bold uppercase tracking-[0.2em] text-white/75 sm:bottom-6 sm:left-7">
            FEINCA · Zulia
          </span>
        </div>
      </div>
    </section>
  );
}

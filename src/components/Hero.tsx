"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Headset, ShieldCheck, Store, Truck } from "lucide-react";

const slides = [
  {
    src: "/images/products/03_bombas_agua_leo.jpg",
    alt: "Estantería con bombas de agua y presurizadores LEO",
    badge: "Bombas de Agua LEO",
  },
  {
    src: "/images/products/01_cortapernos_dyllu_30.jpg",
    alt: 'Cortapernos profesional Dyllu de 30 pulgadas CR-V',
    badge: 'Cortapernos Dyllu 30"',
  },
  {
    src: "/images/products/05_bombas_industriales_shimge.jpg",
    alt: "Bombas centrífugas, periféricas y controlador SHIMGE",
    badge: "Equipos Industriales SHIMGE",
  },
];

const features = [
  {
    icon: Truck,
    title: "Despachos",
    subtitle: "En todo el Zulia",
    mobileLabel: "Envíos",
  },
  {
    icon: ShieldCheck,
    title: "Compras seguras",
    subtitle: "Garantía de marcas",
    mobileLabel: "Seguridad",
  },
  {
    icon: Store,
    title: "Retiro en tienda",
    subtitle: "3 sucursales disponibles",
    mobileLabel: "Retiro",
  },
  {
    icon: Headset,
    title: "Asesoría experta",
    subtitle: "Te ayudamos a elegir",
    mobileLabel: "Asesoría",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="bg-[#f1f2f4]">
      {/* Hero Split Banner */}
      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <div className="grid min-h-[260px] grid-cols-[1.12fr_0.88fr] items-stretch sm:min-h-[340px] lg:min-h-[420px] lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Copy */}
          <div className="relative z-20 flex flex-col justify-center py-6 pl-4 pr-2 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
            <h1 className="max-w-lg text-xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.85rem]">
              Todo lo que necesitas para{" "}
              <span className="text-feinca">construir, reparar y mejorar</span> tu hogar
            </h1>
            <p className="mt-2.5 hidden max-w-md text-sm leading-6 text-slate-600 sm:block sm:text-base">
              Bombas de agua, protección eléctrica, purificación y herramientas con la mejor calidad.
            </p>
            <div className="mt-4 sm:mt-7">
              <a
                href="#productos"
                className="inline-flex items-center gap-2 rounded-full bg-feinca px-4 py-2 text-xs font-bold text-white shadow-md transition-colors hover:bg-feinca-dark sm:px-6 sm:py-3 sm:text-sm"
              >
                Ver productos
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            </div>
          </div>

          {/* Right Image with Diagonal Red Slash */}
          <div className="relative min-h-full overflow-hidden bg-[#141619]">
            {/* Diagonal Red Stripe */}
            <div
              aria-hidden="true"
              className="-left-6 sm:-left-10 absolute inset-y-0 z-10 w-8 -skew-x-12 bg-feinca sm:w-14 lg:w-16"
            />
            {/* Soft Left Mask to blend on mobile/desktop */}
            <div
              aria-hidden="true"
              className="-left-8 sm:-left-12 absolute inset-y-0 z-10 w-6 -skew-x-12 bg-[#f1f2f4] sm:w-10"
            />

            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              priority
              sizes="(max-width: 1023px) 50vw, 55vw"
              className="object-cover object-center transition-all duration-500"
            />

            {/* Carousel Dots */}
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 sm:bottom-4 sm:gap-2">
              {slides.map((s, idx) => (
                <button
                  key={s.src}
                  type="button"
                  aria-label={`Ver diapositiva ${idx + 1}: ${s.badge}`}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all sm:h-2.5 ${
                    current === idx ? "w-5 bg-feinca sm:w-6" : "w-2 bg-white/80 hover:bg-white sm:w-2.5"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4-Column Trust / Benefits Bar */}
      <div className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-slate-200 px-2 py-3.5 sm:px-6 sm:py-5">
          {features.map(({ icon: Icon, title, subtitle, mobileLabel }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-center gap-1.5 px-1 text-center md:flex-row md:justify-center md:gap-3.5 md:px-4 md:text-left"
            >
              <Icon className="h-5 w-5 shrink-0 text-slate-800 sm:h-7 sm:w-7" strokeWidth={1.75} />
              <div>
                <p className="text-[11px] font-bold text-slate-900 md:hidden">{mobileLabel}</p>
                <p className="hidden text-sm font-bold text-slate-900 md:block">{title}</p>
                <p className="hidden text-xs text-slate-500 md:block">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

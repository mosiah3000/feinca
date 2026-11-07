import { AtSign, Clock } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#141416] text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 text-sm text-slate-300">Ferretería Eléctrica Industrial, C.A.</p>
          <p className="text-xs text-slate-400">RIF: J-301146395</p>
        </div>
        <div>
          <h2 className="flex items-center gap-2 font-bold text-white">
            <Clock className="h-4 w-4 text-feinca" /> Horarios de atención
          </h2>
          <ul className="mt-3 space-y-1 text-sm">
            <li>Lunes a viernes: 8:00 a.m. – 5:00 p.m.</li>
            <li>Sábados: 8:00 a.m. – 1:00 p.m.</li>
          </ul>
          <p className="mt-2 text-xs text-slate-500">Horario referencial; confirma con tu sucursal.</p>
        </div>
        <div>
          <h2 className="font-bold text-white">Síguenos</h2>
          <a
            href="https://www.instagram.com/feinca"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm transition hover:text-feinca"
          >
            <AtSign className="h-4 w-4" /> @feinca en Instagram
          </a>
          <p className="mt-3 text-sm text-slate-400">Cabimas · Maracaibo · Ciudad Ojeda</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © 2026 FEINCA – Ferretería Eléctrica Industrial, C.A. Todos los derechos reservados.
      </div>
    </footer>
  );
}

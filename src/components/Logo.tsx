export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-feinca to-feinca-dark text-2xl font-bold text-white shadow-md shadow-red-900/30"
      >
        Ω
      </span>
      <span className="leading-none">
        <span className={`block text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-slate-ink"}`}>
          FEINCA
        </span>
        <span className={`block text-[10px] font-medium uppercase tracking-widest ${light ? "text-slate-400" : "text-slate-500"}`}>
          Ferretería Eléctrica
        </span>
      </span>
    </span>
  );
}

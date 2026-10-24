export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex flex-col leading-none">
      <span className={`text-xl font-extrabold ${light ? "text-white" : "text-slate-ink"}`}>
          FEINCA
      </span>
      <span className={`mt-1 text-[9px] font-semibold uppercase tracking-widest ${light ? "text-slate-400" : "text-slate-500"}`}>
        Ferretería Eléctrica Industrial
      </span>
    </span>
  );
}

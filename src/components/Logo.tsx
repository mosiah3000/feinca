import { Wrench } from "lucide-react";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-feinca text-white shadow-sm">
        <Wrench className="h-5 w-5 -rotate-12" />
      </span>
      <span className="inline-flex flex-col leading-none">
        <span className={`text-xl font-extrabold tracking-tight sm:text-2xl ${light ? "text-white" : "text-slate-ink"}`}>
          FEINCA
        </span>
        <span className={`mt-1 text-[11px] font-medium ${light ? "text-slate-300" : "text-slate-500"}`}>
          Todo para tu proyecto
        </span>
      </span>
    </span>
  );
}

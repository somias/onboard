import { AlertTriangle, CheckCircle2, Circle } from "lucide-react";
import { TODAY, TRACK_ICON } from "../data/constants";
import { fmt } from "../data/hires";

export function TrackBlock({ track, tasks, onToggle }) {
  const Icon = TRACK_ICON[track];
  const done = tasks.filter((t) => t.done).length;
  const isCompliance = track === "Compliance & regulatory";

  return (
    <div className={`rounded-xl border bg-white ${isCompliance ? "border-amber-200" : "border-slate-200"}`}>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2.5">
          <Icon size={17} className={isCompliance ? "text-amber-600" : "text-slate-400"} />
          <span className="text-sm font-medium text-slate-700">{track}</span>
          {isCompliance && (
            <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700">
              Regulated
            </span>
          )}
        </div>
        <span className="text-xs tabular-nums text-slate-400">{done} / {tasks.length}</span>
      </div>
      <div className="border-t border-slate-100">
        {tasks.map((t) => (
          <button
            key={t.id}
            onClick={() => onToggle(t.id)}
            className="flex w-full items-center gap-3 px-4 py-2.5 text-left hover:bg-slate-50"
          >
            {t.done
              ? <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
              : <Circle size={18} className="shrink-0 text-slate-300" />}
            <span className={`flex-1 text-sm ${t.done ? "text-slate-400 line-through" : "text-slate-700"}`}>
              {t.label}
            </span>
            <span className="hidden text-xs text-slate-400 sm:inline">{t.assignee}</span>
            <span className={`inline-flex items-center gap-1 text-xs tabular-nums ${!t.done && t.due < TODAY ? "text-rose-500" : "text-slate-400"}`}>
              {!t.done && t.due < TODAY && <AlertTriangle size={12} />}
              {fmt(t.due)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

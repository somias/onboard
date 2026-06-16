import { ArrowLeft } from "lucide-react";
import { TRACK_ORDER } from "../data/constants";
import { derive, fmt, initials } from "../data/hires";
import { TEMPLATES } from "../data/templates";
import { Eyebrow, Ring, StatusPill } from "./primitives";
import { TrackBlock } from "./TrackBlock";

export function HireDetail({ hire, onBack, onToggle }) {
  const d = derive(hire);
  const byTrack = TRACK_ORDER
    .map((track) => ({ track, tasks: hire.tasks.filter((t) => t.track === track) }))
    .filter((g) => g.tasks.length);

  return (
    <div className="space-y-5">
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800"
      >
        <ArrowLeft size={16} /> Back to dashboard
      </button>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-sm font-medium text-sky-700">
              {initials(hire.name)}
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-lg font-semibold text-slate-900">{hire.name}</h2>
                <StatusPill status={d.status} />
              </div>
              <div className="mt-0.5 text-sm text-slate-500">{hire.role} · {hire.department}</div>
              <div className="mt-1 text-xs text-slate-400">
                Starts {fmt(hire.start)} · owner {hire.owner} · template {TEMPLATES[hire.templateKey].label}
              </div>
            </div>
          </div>
          <Ring pct={d.pct} />
        </div>
      </div>

      <div className="space-y-3">
        <Eyebrow>Checklist · {d.done} of {d.total} complete</Eyebrow>
        {byTrack.map((g) => (
          <TrackBlock
            key={g.track}
            track={g.track}
            tasks={g.tasks}
            onToggle={(taskId) => onToggle(hire.id, taskId)}
          />
        ))}
      </div>
    </div>
  );
}

import {
  Laptop, KeyRound, FileText, ShieldCheck, Building2, CalendarDays,
} from "lucide-react";

export const TODAY = new Date(2026, 5, 16);

export const TRACK_ORDER = [
  "IT & equipment",
  "System access",
  "HR & documents",
  "Compliance & regulatory",
  "Facilities",
  "First-week schedule",
];

export const TRACK_ICON = {
  "IT & equipment": Laptop,
  "System access": KeyRound,
  "HR & documents": FileText,
  "Compliance & regulatory": ShieldCheck,
  "Facilities": Building2,
  "First-week schedule": CalendarDays,
};

export const TRACK_OFFSET = {
  "IT & equipment": -5,
  "System access": -3,
  "HR & documents": -2,
  "Compliance & regulatory": -1,
  "Facilities": 0,
  "First-week schedule": 2,
};

export const TRACK_TEAM = {
  "IT & equipment": "IT service desk",
  "System access": "IT service desk",
  "HR & documents": "HR team",
  "Compliance & regulatory": "Compliance",
  "Facilities": "Facilities",
  "First-week schedule": "Hiring manager",
};

export const STATUS_STYLE = {
  Complete: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Overdue: "bg-rose-50 text-rose-700 border-rose-200",
  "In progress": "bg-sky-50 text-sky-700 border-sky-200",
  "Starting soon": "bg-sky-50 text-sky-700 border-sky-200",
  Upcoming: "bg-slate-100 text-slate-600 border-slate-200",
};

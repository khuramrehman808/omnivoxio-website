import { industries } from "@/lib/content";

export function IndustryGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {industries.map((industry) => (
        <article key={industry} className="rounded-xl border border-white/10 bg-slate-900/50 px-4 py-4 text-sm text-slate-200">
          {industry}
        </article>
      ))}
    </div>
  );
}

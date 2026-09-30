import { caseStudies } from "@/lib/content";

export function CaseStudyCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {caseStudies.map((caseStudy) => (
        <article key={caseStudy.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Demo case study</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{caseStudy.title}</h3>
          <p className="mt-3 text-slate-300">{caseStudy.summary}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {caseStudy.focus.map((item) => (
              <li key={item} className="rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

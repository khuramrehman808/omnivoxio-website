import { processSteps } from "@/lib/content";

export function ProcessSteps() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {processSteps.map((step, index) => (
        <article key={step.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Step {index + 1}</p>
          <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{step.description}</p>
        </article>
      ))}
    </div>
  );
}

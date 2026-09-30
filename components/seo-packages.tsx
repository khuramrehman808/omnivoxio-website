import { seoPackages } from "@/lib/content";

export function SeoPackages() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {seoPackages.map((pkg) => (
        <article key={pkg.name} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
          <p className="mt-2 text-2xl font-semibold text-cyan-300">{pkg.price}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {pkg.details.map((detail) => (
              <li key={detail} className="rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2">
                {detail}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

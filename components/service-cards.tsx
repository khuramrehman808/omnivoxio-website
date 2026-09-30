import Link from "next/link";
import { serviceHighlights } from "@/lib/content";

export function ServiceCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {serviceHighlights.map((service) => (
        <article key={service.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
          <p className="mt-3 text-slate-300">{service.description}</p>
          <Link
            href={service.href}
            className="mt-5 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
          >
            Explore service →
          </Link>
        </article>
      ))}
    </div>
  );
}

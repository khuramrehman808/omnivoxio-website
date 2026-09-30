import { PrimaryLink } from "@/components/page-elements";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950/40 sm:p-10 lg:grid-cols-[1.2fr_1fr]">
      <div className="space-y-6">
        <p className="inline-flex rounded-full border border-cyan-300/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
          Website Development + SEO Growth
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Build a Better Website. Get Found. Grow With Confidence.
        </h1>
        <p className="max-w-2xl text-lg text-slate-300">
          We design and develop premium websites, then support your growth with evidence-based SEO systems covering search visibility, authority signals, local discoverability, and conversion.
        </p>
        <div className="flex flex-wrap gap-3">
          <PrimaryLink href="/contact#consultation-form">Book a Consultation</PrimaryLink>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Message on WhatsApp
          </a>
        </div>
        <p className="text-sm text-slate-400">
          Strategy-led execution • Accessibility-aware development • Clear, evidence-based growth priorities
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Website + SEO system demo</h2>
        <div className="mt-4 space-y-3">
          {[
            "1) Define positioning and conversion paths",
            "2) Build responsive, SEO-ready page architecture",
            "3) Audit visibility, authority, and local signals",
            "4) Improve content, UX, and conversion opportunities",
          ].map((line) => (
            <div key={line} className="rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-200">
              {line}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

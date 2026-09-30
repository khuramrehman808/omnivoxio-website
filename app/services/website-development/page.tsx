import { PageHeader, SectionTitle } from "@/components/page-elements";
import { ProcessSteps } from "@/components/process-steps";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Website Development",
  description:
    "Strategy-led website development with planning, responsive UI engineering, conversion structure, accessibility, and performance foundations.",
  path: "/services/website-development",
});

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Website Development"
        title="Professional website development built for growth"
        description="We combine business strategy, UX structure, and premium engineering to launch sites that are clear, fast, and conversion-oriented."
      />

      <section className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <SectionTitle title="What we cover" />
          <ul className="space-y-3 text-slate-300">
            {[
              "Discovery strategy and audience alignment",
              "Sitemap and page planning",
              "Premium responsive website development",
              "Website redesigns and focused landing pages",
              "Mobile-first layout systems",
              "Conversion structures and form journeys",
              "SEO-ready architecture",
              "Accessibility and performance optimization",
            ].map((item) => (
              <li key={item} className="rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Premium website mockup</h2>
          <p className="mt-2 text-slate-300">
            A front-end demonstration of modern page composition with clear hierarchy, trust sections, service modules, and conversion-focused forms.
          </p>
          <div className="mt-5 rounded-xl border border-white/10 bg-slate-900/80 p-4">
            <div className="h-3 w-24 rounded-full bg-cyan-300/70" />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4 text-xs text-slate-300">Hero + value proposition</div>
              <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4 text-xs text-slate-300">Service trust modules</div>
              <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4 text-xs text-slate-300">Case-study blocks</div>
              <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4 text-xs text-slate-300">Contact conversion area</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-14">
        <SectionTitle
          title="Understand · Structure · Design · Develop · Improve"
          description="Our process balances strategic clarity with production quality so your website stays useful long after launch."
        />
        <ProcessSteps />
      </section>
    </>
  );
}

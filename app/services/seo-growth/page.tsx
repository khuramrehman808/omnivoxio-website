import { PageHeader, SectionTitle } from "@/components/page-elements";
import { SeoPackages } from "@/components/seo-packages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "SEO Growth",
  description:
    "Evidence-based SEO growth support across SEO, AEO, GEO, entity, authority, reputation, local visibility, backlinks, and conversion.",
  path: "/services/seo-growth",
});

export default function SeoGrowthPage() {
  return (
    <>
      <PageHeader
        eyebrow="SEO Growth"
        title="SEO · AEO · GEO · Entity · Authority · Reputation · Local Visibility · Backlinks · Conversion"
        description="We audit your website, identify evidence-backed opportunities, and prioritize practical recommendations for measurable improvement over time."
      />

      <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-slate-300">
        <SectionTitle
          title="Evidence-based audits and recommendations"
          description="Our recommendations are based on your website structure, search intent alignment, technical crawlability, content clarity, authority signals, and conversion pathways."
        />
      </section>

      <section className="mt-12">
        <SectionTitle title="SEO audit and growth packages" description="Choose a starting scope and adjust based on your current website maturity." />
        <SeoPackages />
        <p className="mt-4 rounded-lg border border-amber-300/30 bg-amber-900/10 px-4 py-3 text-sm text-amber-100">
          No-guarantees notice: We do not guarantee rankings, traffic, leads, or revenue. We provide evidence-based analysis, prioritization, and implementation support.
        </p>
      </section>
    </>
  );
}

import { IndustryGrid } from "@/components/industry-grid";
import { PageHeader } from "@/components/page-elements";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Solutions and Industries",
  description:
    "Omnivoxio supports website development and SEO growth projects across multiple industries with practical, evidence-based execution.",
  path: "/solutions-industries",
});

export default function SolutionsIndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions & Industries"
        title="Flexible delivery for different business contexts"
        description="Our methods adapt to your market while avoiding unrealistic claims. We focus on clear websites, stronger discoverability, and better conversion structures."
      />

      <IndustryGrid />

      <section className="mt-12 rounded-xl border border-white/10 bg-slate-900/60 p-6 text-sm text-slate-300">
        We do not provide medical, financial, or legal guarantees. Every recommendation is scoped to your project context and reviewed with your team before implementation.
      </section>
    </>
  );
}

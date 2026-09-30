import { PageHeader, SectionTitle } from "@/components/page-elements";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Omnivoxio's focused mission in website development and evidence-based SEO growth execution.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Omnivoxio"
        title="Focused expertise for website quality and growth clarity"
        description="Omnivoxio is built around two capabilities: professional website development and evidence-based SEO growth systems for modern teams."
      />

      <section className="grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-slate-300">
          <h2 className="text-xl font-semibold text-white">What we believe</h2>
          <p className="mt-3">
            Better digital performance starts with clear messaging, thoughtful architecture, and disciplined implementation. We avoid inflated promises and focus on practical progress.
          </p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-slate-300">
          <h2 className="text-xl font-semibold text-white">How we work</h2>
          <p className="mt-3">
            Every project is approached through strategy, design, engineering, and iterative optimization to keep your website useful for users and search systems.
          </p>
        </article>
      </section>

      <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <SectionTitle
          title="Technology selection is project-dependent"
          description="We select frameworks, integrations, and tooling based on your business requirements, existing stack, performance targets, and maintainability priorities."
        />
      </section>
    </>
  );
}

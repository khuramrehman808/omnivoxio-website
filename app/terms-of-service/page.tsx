import { PageHeader } from "@/components/page-elements";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Read Omnivoxio terms of service for website development and SEO growth engagements.",
  path: "/terms-of-service",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="These terms outline engagement expectations for Omnivoxio website development and SEO growth services."
      />
      <section className="space-y-5 rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-slate-300">
        <h2 className="text-xl font-semibold text-white">Scope</h2>
        <p>Omnivoxio provides only website development and SEO growth-related services unless explicitly agreed in writing.</p>
        <h2 className="text-xl font-semibold text-white">No guarantees</h2>
        <p>We do not guarantee rankings, traffic, leads, sales, or business outcomes. Recommendations are evidence-based and context-specific.</p>
        <h2 className="text-xl font-semibold text-white">Client responsibilities</h2>
        <p>Clients are responsible for timely feedback, approvals, and providing required access and business context.</p>
      </section>
    </>
  );
}

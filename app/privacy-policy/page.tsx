import { PageHeader } from "@/components/page-elements";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Read the Omnivoxio privacy policy for website and contact form interactions.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page explains what information we collect and how we use it when you interact with Omnivoxio."
      />
      <section className="space-y-5 rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-slate-300">
        <h2 className="text-xl font-semibold text-white">Information we collect</h2>
        <p>We collect only the information you provide through our forms or direct communication channels.</p>
        <h2 className="text-xl font-semibold text-white">How we use information</h2>
        <p>Information is used to respond to inquiries, scope project discussions, and improve service delivery.</p>
        <h2 className="text-xl font-semibold text-white">Data handling</h2>
        <p>We do not sell your personal information. Data access is limited to project communication and support needs.</p>
      </section>
    </>
  );
}

import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-elements";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Omnivoxio for website development and SEO growth consultations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s discuss your website and growth goals"
        description="Share your scope and we’ll suggest the right next step. You can also start immediately on WhatsApp."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-slate-300">
          <h2 className="text-xl font-semibold text-white">Direct channels</h2>
          <p className="mt-3">Email placeholder: {siteConfig.email}</p>
          <p className="mt-2">WhatsApp: {siteConfig.whatsappNumber}</p>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950"
          >
            Open WhatsApp
          </a>
        </article>

        <ContactForm />
      </div>
    </>
  );
}

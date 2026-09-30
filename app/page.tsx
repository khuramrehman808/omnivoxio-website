import Link from "next/link";
import { CaseStudyCards } from "@/components/case-study-cards";
import { ContactForm } from "@/components/contact-form";
import { HeroSection } from "@/components/hero-section";
import { IndustryGrid } from "@/components/industry-grid";
import { SectionTitle } from "@/components/page-elements";
import { FourStepProcess } from "@/components/four-step-process";
import { ServiceCards } from "@/components/service-cards";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Build Better Websites and SEO Growth",
  description:
    "Omnivoxio builds premium websites and evidence-based SEO growth systems for teams that want better visibility and stronger conversion foundations.",
  path: "/",
});

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Omnivoxio",
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    sameAs: [siteConfig.whatsappUrl],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Omnivoxio",
    serviceType: ["Website Development", "SEO Growth"],
    url: siteConfig.siteUrl,
    areaServed: "Global",
    description: siteConfig.description,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <HeroSection />

      <section className="mt-16 space-y-4">
        <p className="text-sm text-slate-400">
          Trusted by teams who want a practical website-and-growth partner focused on clear execution and sustainable progress.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            "Strategy-first website planning",
            "Evidence-based SEO and search growth",
            "Conversion-aware design and content structures",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-slate-900/50 px-4 py-4 text-sm text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle
          title="Services Overview"
          description="We only offer two service lines, designed to work independently or as one integrated website growth system."
        />
        <ServiceCards />
      </section>

      <section className="mt-16">
        <SectionTitle title="Solutions & Industries" description="Project scope is adapted by industry and business model while keeping the same high standards for usability, search readiness, and conversion clarity." />
        <IndustryGrid />
      </section>

      <section className="mt-16">
        <SectionTitle title="Why Omnivoxio" description="You get focused expertise, transparent workflows, and practical deliverables—without inflated claims or black-box tactics." />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Premium design and engineering quality",
            "Clear communication and milestone-based progress",
            "Evidence-based SEO recommendations",
            "Technical decisions aligned with business goals",
          ].map((point) => (
            <article key={point} className="rounded-xl border border-white/10 bg-slate-900/50 p-5 text-slate-200">
              {point}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle title="Our 4-Step Delivery Process" description="A practical framework that keeps your project strategic, organized, and measurable." />
        <FourStepProcess />
      </section>

      <section className="mt-16">
        <SectionTitle title="Demo Case Study Previews" description="Examples below are demonstrations only and do not represent live clients or guaranteed outcomes." />
        <CaseStudyCards />
        <Link href="/case-studies" className="mt-6 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm">
          View all demo case studies →
        </Link>
      </section>

      <section className="mt-16 rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-slate-900 to-slate-800 p-8">
        <h2 className="text-3xl font-semibold text-white">Ready to improve your website and growth foundation?</h2>
        <p className="mt-3 max-w-3xl text-slate-200">
          Start with a consultation and we will map the right path for website development, SEO growth, or both.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact#consultation-form" className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950">
            Book Consultation
          </Link>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white">
            WhatsApp Us
          </a>
        </div>
      </section>

      <section id="contact" className="mt-16">
        <SectionTitle title="Contact Omnivoxio" description="Tell us about your website and growth goals. We will review your brief and suggest the best starting point." />
        <ContactForm />
      </section>
    </>
  );
}

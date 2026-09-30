import { PageHeader, SectionTitle } from "@/components/page-elements";
import { ServiceCards } from "@/components/service-cards";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description: "Explore Omnivoxio services: professional website development and evidence-based SEO growth systems.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Two focused services for modern digital growth"
        description="Omnivoxio only offers website development and SEO growth so your roadmap stays clear, specialized, and execution-ready."
      />

      <ServiceCards />

      <section className="mt-14">
        <SectionTitle
          title="How these services work together"
          description="A strong website foundation supports visibility and conversion improvements. SEO growth guidance then helps your best pages become easier to discover and more effective at turning visits into qualified opportunities."
        />
      </section>
    </>
  );
}

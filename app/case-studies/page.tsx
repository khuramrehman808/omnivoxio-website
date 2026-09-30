import { CaseStudyCards } from "@/components/case-study-cards";
import { PageHeader } from "@/components/page-elements";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Case Studies",
  description:
    "Explore clearly labeled Omnivoxio demo case studies showing website and SEO growth approaches without invented clients or outcomes.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Demo case studies for planning and execution reference"
        description="These are demonstration scenarios only. They are included to illustrate our process and deliverables without claiming real client identities or measured outcomes."
      />
      <CaseStudyCards />
    </>
  );
}

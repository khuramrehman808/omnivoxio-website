import { FaqAccordion } from "@/components/faq-accordion";
import { PageHeader } from "@/components/page-elements";
import { faqs } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "FAQ",
  description: "Frequently asked questions about Omnivoxio website development and SEO growth services.",
  path: "/faq",
});

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHeader
        eyebrow="FAQ"
        title="Common questions"
        description="Answers about scope, process, and expectations for website development and SEO growth work."
      />
      <FaqAccordion />
    </>
  );
}

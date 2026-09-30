import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMeta): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteUrl("/og-image.svg"),
          width: 1200,
          height: 630,
          alt: "Omnivoxio website development and SEO growth",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og-image.svg")],
    },
  };
}

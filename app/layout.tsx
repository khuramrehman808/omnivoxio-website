import type { Metadata } from "next";
import { LayoutShell } from "@/components/layout-shell";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Omnivoxio | Website Development & SEO Growth",
    template: "%s | Omnivoxio",
  },
  description: siteConfig.description,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "Omnivoxio | Website Development & SEO Growth",
    description: siteConfig.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omnivoxio | Website Development & SEO Growth",
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}

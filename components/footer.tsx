import Link from "next/link";
import { BrandMark } from "@/components/brand";
import { footerLinks, siteConfig } from "@/lib/site";

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-slate-400">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="md:col-span-2">
          <BrandMark />
          <p className="mt-4 max-w-md text-sm text-slate-400">
            Professional website development and evidence-based SEO growth systems for teams that want clearer positioning and sustainable website performance.
          </p>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Chat on WhatsApp
          </a>
        </div>

        <FooterColumn title="Company" links={footerLinks.company} />
        <FooterColumn title="Services" links={footerLinks.services} />
        <FooterColumn title="Legal" links={footerLinks.legal} />
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Omnivoxio. All rights reserved.</p>
          <p>Editable contact email: {siteConfig.email}</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/brand";
import { navLinks, siteConfig } from "@/lib/site";

function NavItems({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className={`rounded-md px-3 py-2 text-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              active ? "text-white" : "text-slate-300"
            } ${mobile ? "block" : "hidden lg:inline-flex"}`}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <BrandMark />

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          <NavItems />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact#consultation-form"
            className="rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Consultation
          </Link>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="rounded-md border border-white/15 p-2 text-slate-200 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
        </button>
      </div>

      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-slate-950 px-4 py-4 lg:hidden">
          <nav aria-label="Mobile navigation" className="space-y-1">
            <NavItems mobile onNavigate={() => setMenuOpen(false)} />
          </nav>
          <div className="mt-4 grid gap-2">
            <Link
              href="/contact#consultation-form"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-cyan-400/40 px-4 py-2 text-center text-sm font-medium text-cyan-200"
            >
              Consultation
            </Link>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-cyan-500 px-4 py-2 text-center text-sm font-semibold text-slate-950"
            >
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-slate-950/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-7xl gap-2">
        <Link
          href="/contact#consultation-form"
          className="inline-flex flex-1 items-center justify-center rounded-full border border-white/20 px-3 py-2 text-sm font-medium text-white"
        >
          Consultation
        </Link>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

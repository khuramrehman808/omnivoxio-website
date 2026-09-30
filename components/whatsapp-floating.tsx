import { siteConfig } from "@/lib/site";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-slate-900/95 px-4 py-2 text-sm font-medium text-cyan-200 shadow-lg transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 md:bottom-6"
      aria-label={`Chat with Omnivoxio on WhatsApp at ${siteConfig.whatsappNumber}`}
    >
      <span aria-hidden="true">💬</span>
      WhatsApp
    </a>
  );
}

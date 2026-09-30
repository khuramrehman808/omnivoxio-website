import { Footer } from "@/components/footer";
import { MobileContactBar } from "@/components/mobile-contact-bar";
import { Navbar } from "@/components/navbar";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-24 pt-12 sm:px-6 lg:px-8">{children}</main>
      <Footer />
      <FloatingWhatsAppButton />
      <MobileContactBar />
    </>
  );
}

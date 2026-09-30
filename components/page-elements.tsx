import Link from "next/link";

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="mb-12 space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">{eyebrow}</p>
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
      <p className="max-w-3xl text-lg text-slate-300">{description}</p>
    </section>
  );
}

export function SectionTitle({ id, title, description }: { id?: string; title: string; description?: string }) {
  return (
    <div id={id} className="mb-6 space-y-3">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      {description ? <p className="max-w-3xl text-slate-300">{description}</p> : null}
    </div>
  );
}

export function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
    >
      {children}
    </Link>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
    >
      {children}
    </Link>
  );
}

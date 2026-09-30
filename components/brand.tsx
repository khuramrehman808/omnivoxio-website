import Link from "next/link";

export function BrandMark() {
  return (
    <Link href="/" className="inline-flex items-center gap-3 rounded-full px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-slate-700 to-slate-900 text-sm font-bold text-cyan-300">
        O
      </span>
      <span className="text-sm font-semibold tracking-wide text-white">Omnivoxio</span>
    </Link>
  );
}

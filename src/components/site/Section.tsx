import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold-dim">
      <span className="h-px w-8 bg-gold-dim/60" />
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="bg-ink text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.135_78),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 relative">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1 className="font-display text-4xl md:text-6xl mt-5 max-w-4xl leading-[1.05]">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-cream/70 text-lg">{subtitle}</p>}
        <div className="gold-divider mt-10 max-w-xs" />
      </div>
    </section>
  );
}

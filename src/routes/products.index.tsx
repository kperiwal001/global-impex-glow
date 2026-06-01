import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/site-data";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Indian FMCG Product Categories | Golden Impex Exporter" },
      { name: "description", content: "Browse Indian FMCG export categories — spices, tea, pulses, snacks, instant foods, cosmetics, beverages, pickles, copper utensils and pooja items." },
      { property: "og:title", content: "Indian FMCG Product Categories | Golden Impex" },
      { property: "og:description", content: "Authentic branded Indian grocery for global supermarkets, ethnic stores, distributors and private label buyers." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Product Range"
        title={<>A complete Indian FMCG export portfolio.</>}
        subtitle="Spices, tea, pulses, snacks, instant foods, cosmetics, beverages, pickles, copper utensils and pooja items — sourced from authorized distributors, packed for export, and ready for global retail."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <Link key={c.slug} to="/products/$slug" params={{ slug: c.slug }} className="group bg-card border border-border hover:border-gold transition-colors overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.image} alt={c.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold-dim">{c.brands?.join(" · ") ?? c.items?.slice(0,2).join(" · ")}</div>
                <h2 className="font-display text-2xl mt-2">{c.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{c.short}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-ink border-b border-gold pb-0.5">
                  View category <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

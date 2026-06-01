import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { seoPages } from "@/lib/site-data";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Export Services | FMCG Sourcing, Private Label & Container Solutions" },
      { name: "description", content: "Golden Impex export services: FMCG sourcing, private label manufacturing, mixed grocery containers, bulk FCL supply and quality inspection from India." },
      { property: "og:title", content: "Export Services | Golden Impex" },
      { property: "og:description", content: "Mixed containers, FCL supply, private label and category-specific export services from India." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services & Solutions"
        title={<>Sourcing solutions built for global FMCG buyers.</>}
        subtitle="Dedicated programs for distributors, supermarkets, ethnic stores and private label buyers — designed around how you source Indian FMCG."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {seoPages.map((p) => (
            <Link key={p.slug} to="/services/$slug" params={{ slug: p.slug }} className="group border border-border hover:border-gold p-8 bg-card transition-colors">
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold-dim">{p.keywords[0]}</div>
              <h2 className="font-display text-2xl mt-3">{p.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm text-ink border-b border-gold pb-0.5">
                Learn more <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

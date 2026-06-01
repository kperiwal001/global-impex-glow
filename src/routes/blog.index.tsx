import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/site-data";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Insights & Guides for FMCG Importers | Golden Impex Blog" },
      { name: "description", content: "Practical guides for FMCG importers — how to source Indian grocery, top brands in demand, private labelling, mixed containers and import compliance." },
      { property: "og:title", content: "Insights & Guides for FMCG Importers | Golden Impex" },
      { property: "og:description", content: "Indian FMCG export knowledge base for global buyers." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero eyebrow="Insights" title={<>Guides & knowledge for global FMCG importers.</>} subtitle="Practical, no-fluff articles on sourcing, importing and selling Indian FMCG products." />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="divide-y divide-border">
          {blogPosts.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block py-8 hover:bg-secondary/40 transition-colors -mx-4 px-4">
              <div className="text-xs uppercase tracking-[0.2em] text-gold-dim">{new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
              <h2 className="font-display text-2xl md:text-3xl mt-2 group-hover:text-gold transition-colors">{p.title}</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

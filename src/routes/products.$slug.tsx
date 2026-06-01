import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { categories, company } from "@/lib/site-data";
import { PageHero, SectionEyebrow } from "@/components/site/Section";
import { InquiryForm } from "@/components/site/InquiryForm";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.category;
    if (!c) return { meta: [{ title: "Category | Golden Impex" }] };
    return {
      meta: [
        { title: `Export ${c.name} from India | Golden Impex FMCG Exporter` },
        { name: "description", content: c.intro },
        { property: "og:title", content: `Export ${c.name} from India | Golden Impex` },
        { property: "og:description", content: c.intro },
        { property: "og:url", content: `/products/${c.slug}` },
        { property: "og:image", content: c.image },
        { property: "twitter:image", content: c.image },
      ],
      links: [{ rel: "canonical", href: `/products/${c.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: c.name,
            description: c.intro,
            image: c.image,
            brand: c.brands?.map((b) => ({ "@type": "Brand", name: b })),
            offers: { "@type": "AggregateOffer", priceCurrency: "USD", availability: "https://schema.org/InStock", seller: { "@type": "Organization", name: company.name } },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: c.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="text-center">
        <h1 className="font-display text-3xl">Category not found</h1>
        <Link to="/products" className="text-gold mt-4 inline-block">View all categories →</Link>
      </div>
    </div>
  ),
});

function CategoryPage() {
  const { category: c } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={c.brands ? `Brands: ${c.brands.join(" · ")}` : "Category"}
        title={<>Export <span className="gold-text-gradient">{c.name}</span> from India</>}
        subtitle={c.intro}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <img src={c.image} alt={c.name} width={1024} height={768} loading="lazy" className="w-full aspect-[16/10] object-cover shadow-luxe" />

          <div className="prose prose-neutral max-w-none">
            {c.body.map((p: string, i: number) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-base">{p}</p>
            ))}
          </div>

          {(c.brands || c.items) && (
            <div>
              <SectionEyebrow>{c.brands ? "Available Brands" : "Available Products"}</SectionEyebrow>
              <div className="mt-5 flex flex-wrap gap-3">
                {(c.brands ?? c.items ?? []).map((b: string) => (
                  <span key={b} className="px-4 py-2 border border-gold/40 text-sm bg-card">{b}</span>
                ))}
              </div>
            </div>
          )}

          <div>
            <SectionEyebrow>Export Packaging</SectionEyebrow>
            <p className="mt-4 text-muted-foreground">{c.packaging}</p>
          </div>

          <div>
            <SectionEyebrow>Frequently Asked Questions</SectionEyebrow>
            <div className="mt-6 space-y-4">
              {c.faqs.map((f: { q: string; a: string }) => (
                <details key={f.q} className="group border border-border bg-card p-5 open:border-gold transition-colors">
                  <summary className="cursor-pointer flex items-center justify-between gap-4 font-display text-lg">
                    {f.q}
                    <span className="text-gold transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-ink border-b border-gold pb-1">
            <ArrowLeft size={14} /> All categories
          </Link>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-28 bg-ink text-cream p-8 shadow-luxe">
            <SectionEyebrow>Request a quote</SectionEyebrow>
            <h3 className="font-display text-2xl mt-3">Get pricing for {c.name}</h3>
            <p className="text-sm text-cream/70 mt-2">Tell us your destination and quantity. We'll respond within 24 hours.</p>
            <ul className="mt-6 space-y-2 text-sm text-cream/80">
              {["Authentic branded SKUs", "Mixed & FCL container support", "Private labelling available", "Full export documentation"].map((x) => (
                <li key={x} className="flex gap-2"><Check className="text-gold shrink-0" size={16} /> {x}</li>
              ))}
            </ul>
            <Link to="/contact" className="mt-6 block text-center px-5 py-3 bg-gradient-gold text-ink">Enquire Now</Link>
          </div>
        </aside>
      </section>

      <section className="bg-secondary/40 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <SectionEyebrow>Send your inquiry</SectionEyebrow>
          <h2 className="font-display text-3xl md:text-4xl mt-3">Inquiry for {c.name}</h2>
          <div className="mt-8 bg-card p-8 shadow-luxe">
            <InquiryForm defaultProduct={c.name} />
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { blogPosts, company } from "@/lib/site-data";
import { PageHero } from "@/components/site/Section";

const bodyBySlug: Record<string, string[]> = {
  "how-to-import-fmcg-products-from-india": [
    "Importing FMCG products from India requires a partner that can navigate sourcing, packaging, documentation and shipping. The opportunity is significant — India is home to global FMCG brands like MDH, Tata Tea, Maggi, Himalaya and Real, and demand for authentic Indian grocery continues to grow in ethnic stores and mainstream supermarkets alike.",
    "Start with a clear SKU list and target market. The right exporter will quickly tell you which SKUs are export-ready, which need country-specific labelling, and which can be private-labelled. Confirm the exporter's brand relationships — authorized distributor status matters because it guarantees authenticity.",
    "Next, lock down packaging, MOQs and container strategy. Mixed grocery containers are ideal for distributors who want variety without committing to single-SKU FCLs. Confirm shelf life, batch codes and country-of-origin labelling for your destination.",
    "Finally, align on documentation: commercial invoice, packing list, bill of lading, phytosanitary certificate, FSSAI certificate, country-of-origin certificate and any destination-specific paperwork. A good exporter handles all of this in-house.",
  ],
  "top-indian-fmcg-brands-in-demand": [
    "The Indian FMCG brands seeing the strongest international demand in 2026 cut across spices, tea, snacks, instant foods and herbal beauty. Here's what's moving on shelves abroad.",
    "Spices: MDH, Everest and Catch continue to dominate. Garam masala, biryani masala and chaat masala are the standout SKUs in mainstream supermarkets.",
    "Tea: Tata Tea Gold and Tata Tea Premium lead the loose-leaf segment. Wagh Bakri and Red Label dominate Indian diaspora households.",
    "Snacks: Haldiram's and Bikaji are the export powerhouses. Aloo bhujia, all-in-one mixture and moong dal remain best sellers worldwide.",
    "Beauty: Mamaearth, Himalaya and VLCC are growing fast — especially in the GCC, UK and Southeast Asia.",
  ],
  "complete-guide-importing-indian-tea": [
    "Indian tea is one of the most universally loved beverages, and importing it directly from India offers strong margins and authenticity that buyers value.",
    "Understand the varieties first: Assam CTC for milk tea, Darjeeling for premium, masala chai blends for ethnic markets, and instant chai pre-mixes for HoReCa and convenience-led retail.",
    "Choose packaging based on your channel — 250g and 500g cartons for supermarkets, tea-bag cartons of 25 / 50 / 100 for HoReCa, and 1 kg packs for the diaspora household.",
    "Confirm certifications — FSSAI, ISO, and where required, organic / fair-trade. Match your destination's labelling rules early to avoid customs delays.",
  ],
  "best-indian-spice-brands-for-importers": [
    "The Indian spice brands that perform best for importers combine brand recognition, distribution depth and pack consistency. MDH, Everest and Catch lead the pack across most international markets.",
    "MDH is strongest in North America and the GCC, particularly for blends like Deggi Mirch, Chunky Chat Masala and Garam Masala.",
    "Everest is dominant in Europe and the UK with Garam Masala, Tikka Masala and Pav Bhaji Masala.",
    "Catch is a growing favorite in Australia and New Zealand with its hygienic premium positioning.",
  ],
  "private-labelling-fmcg-india": [
    "Private labelling FMCG products from India is a powerful way to build margin and a distinctive shelf presence. Spices, tea, snacks, ready-to-eat and herbal beauty are the most popular private label categories.",
    "Typical MOQs start at 500–1000 units per SKU for spices and tea, and 2000+ units for cosmetics. Lead times run 30–45 days for first production and 21–30 days for repeat orders.",
    "Plan for region-specific labelling, allergen and nutrition panels, and any halal / kosher / organic certifications your destination market requires.",
  ],
  "mixed-grocery-containers-explained": [
    "A mixed grocery container is a single FCL packed with multiple SKUs across categories. It's the ideal model for ethnic supermarkets and distributors that want variety without committing to single-SKU full containers.",
    "Typical mixed FCL contains 50–150 SKUs across spices, tea, snacks, pulses, instant foods, pickles and ready-to-eat. Your exporter consolidates from multiple authorized distributors, palletizes and ships as one container with one bill of lading.",
    "This reduces inventory risk, broadens your assortment, and improves cash-conversion cycles.",
  ],
  "how-to-source-fmcg-products-from-india": [
    "The sourcing playbook for Indian FMCG starts with picking the right partner. Look for an exporter with direct brand relationships (no grey market), category depth and proven export documentation experience.",
    "Build a target SKU list by destination market, set realistic MOQs and align on packaging early. Use mixed containers to broaden range and FCLs for high-velocity SKUs.",
    "Insist on pre-dispatch quality inspection — packaging integrity, batch codes, shelf life and labelling compliance — to avoid customs and shelf issues at destination.",
  ],
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post, paragraphs: bodyBySlug[post.slug] ?? [] };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [{ title: "Article | Golden Impex" }] };
    return {
      meta: [
        { title: `${p.title} | Golden Impex` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:url", content: `/blog/${p.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/blog/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            author: { "@type": "Organization", name: company.name },
            publisher: { "@type": "Organization", name: company.name },
          }),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post, paragraphs } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow="Insight" title={post.title} subtitle={post.excerpt} />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-xs uppercase tracking-[0.2em] text-gold-dim">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
        <div className="mt-8 space-y-6 text-foreground/90 leading-relaxed">
          {paragraphs.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm border-b border-gold pb-1"><ArrowLeft size={14} /> All articles</Link>
        </div>
      </article>
    </>
  );
}

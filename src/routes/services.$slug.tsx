import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ArrowLeft } from "lucide-react";
import { seoPages, company } from "@/lib/site-data";
import { PageHero, SectionEyebrow } from "@/components/site/Section";
import { InquiryForm } from "@/components/site/InquiryForm";

const bodyBySlug: Record<string, { lead: string; sections: { h: string; p: string }[] }> = {
  "fmcg-exporter-india": {
    lead: "As a leading FMCG exporter in India, Golden Impex Private Limited supplies authentic branded grocery, spices, tea, snacks, cosmetics, beverages and pickles to importers, supermarket chains and distributors across the world.",
    sections: [
      { h: "Why choose an Indian FMCG export company", p: "India is the largest producer of spices, tea and pulses, and home to global FMCG brands like MDH, Tata Tea, Maggi, Himalaya and Real. Working with a specialized FMCG exporter gives international buyers access to verified manufacturers, consolidated logistics, full documentation and consistent quality." },
      { h: "Categories we export", p: "Spices, tea and hot beverages, pulses and food grains, snacks and namkeen, instant foods, cosmetics and personal care, juices and beverages, pickles and condiments, copper utensils and pooja items. Our portfolio covers more than 500 SKUs from India's most trusted FMCG brands." },
      { h: "Markets we serve", p: "Australia, UAE, USA, Canada, UK, New Zealand, Europe, Africa and the GCC. We ship to ethnic grocery stores, supermarket chains, distributors, wholesalers, e-commerce sellers and private label buyers." },
      { h: "How we deliver consistent quality", p: "Every shipment goes through pre-dispatch quality inspection covering packaging integrity, batch codes, shelf life and labelling compliance. Cold-chain and moisture-resistant packaging is used wherever required." },
    ],
  },
  "indian-grocery-exporter": {
    lead: "Golden Impex is a trusted Indian grocery exporter supplying daily-use FMCG and packaged grocery brands to supermarkets, ethnic stores and distributors worldwide.",
    sections: [
      { h: "Complete Indian grocery range", p: "From dry grocery and dals to ready-to-eat meals, atta, oils, ghee, masalas, papad, instant mixes and traditional sweets — we supply the full Indian grocery basket under one roof." },
      { h: "Mixed grocery containers", p: "Our mixed container model lets you stock multiple categories without committing to single-SKU FCLs. Ideal for ethnic stores and regional distributors." },
      { h: "Documentation & compliance", p: "Phytosanitary certificates, country-of-origin documents, FSSAI / FDA labelling, allergen statements and customs paperwork are handled in-house." },
    ],
  },
  "export-indian-tea": {
    lead: "Export Tata Tea, Taj Mahal, Wagh Bakri and Red Label from India in loose leaf, dust, tea bags and instant variants — sourced from authorized distributors with full export support.",
    sections: [
      { h: "Tea brands we export", p: "Tata Tea Gold, Tata Tea Premium, Taj Mahal, Wagh Bakri, Red Label, Brooke Bond, Society Tea, Lipton and regional brands. Available as black CTC, Assam, Darjeeling, masala chai, cardamom chai, ginger chai and instant chai pre-mixes." },
      { h: "Packaging formats", p: "100g, 250g, 500g, 1kg consumer packs, tea bag cartons of 25 / 50 / 100, and 25 kg bulk sacks for HoReCa and white-label buyers." },
      { h: "Quality & shelf life", p: "Moisture-controlled warehousing, food-grade poly bags and barrier packaging ensure full 18–24 month shelf life from manufacture." },
    ],
  },
  "export-indian-spices": {
    lead: "Export MDH, Everest and Catch Indian spices in retail and bulk packs to supermarkets and ethnic grocery stores worldwide.",
    sections: [
      { h: "Brands & SKUs", p: "MDH, Everest, Catch and Eastern — turmeric, red chili, coriander, cumin, garam masala, biryani masala, sambhar, rasam, chaat masala and 100+ SKUs." },
      { h: "Bulk and private label", p: "Available as branded retail packs or private-labelled blends for buyers building their own spice brand." },
      { h: "Export ready", p: "Pallet-ready cartons, container loading plans, phytosanitary documentation and full traceability batch-to-batch." },
    ],
  },
  "export-indian-snacks": {
    lead: "Bulk Indian snacks and namkeen exporter — Haldiram's, Bikaji, Bikano, Balaji — for international supermarkets and ethnic retail.",
    sections: [
      { h: "Snack categories", p: "Bhujia, mixtures, namkeen, chips, papad, Indian sweets and modern fusion snacks across 200+ SKUs." },
      { h: "Packaging that travels", p: "Nitrogen-flushed packs, pallet-friendly cartons and master cases of 24 / 36 / 48 pieces." },
      { h: "Compliance", p: "Allergen statements, ingredient lists and country-specific nutrition panels to meet FDA, FSANZ and EU requirements." },
    ],
  },
  "export-cosmetics-from-india": {
    lead: "Export VLCC, Himalaya, Mamaearth, Fogg, Patanjali and Dabur cosmetics from India with full regulatory compliance.",
    sections: [
      { h: "Ayurvedic & herbal beauty", p: "India's herbal beauty industry has gone global — face washes, creams, oils, shampoos, deodorants, soaps and supplements." },
      { h: "Country-specific labelling", p: "GCC, EU, US, UK and African market labelling, MSDS and batch certificates included." },
      { h: "Private label cosmetics", p: "Contract manufacturing for skincare and haircare with custom formulation, packaging and design." },
    ],
  },
  "export-pickles-from-india": {
    lead: "Export Mother's Recipe and Nilons Indian pickles and condiments in glass and PET jars to ethnic markets worldwide.",
    sections: [
      { h: "Pickle range", p: "Mango pickle, lime pickle, mixed pickle, chili pickle, garlic pickle, chutneys, cooking pastes and sauces." },
      { h: "Safe transit", p: "Glass jars shrink-wrapped, corner-cushioned and palletized for damage-free international transit." },
      { h: "Shelf-stable", p: "18–24 months shelf life. No refrigeration required." },
    ],
  },
  "export-beverages-from-india": {
    lead: "Export Real, Pepsi, Coca-Cola, Jeeru and Paper Boat beverages from India in tetra packs, PET bottles and aluminium cans.",
    sections: [
      { h: "Beverage portfolio", p: "Fruit juices, soft drinks, energy drinks, traditional Indian drinks like jal-jeera, jeera, aam panna and chaas." },
      { h: "Multi-format packaging", p: "Tetra (200ml / 1L), PET (500ml / 1L), aluminium cans (250ml) and bulk syrup formats." },
      { h: "Safe shipping", p: "Temperature-monitored containers and reinforced packaging for glass-bottle SKUs." },
    ],
  },
  "private-label-fmcg": {
    lead: "Private label FMCG manufacturing and packaging solutions from India for international supermarkets, distributors and D2C brands.",
    sections: [
      { h: "What we private label", p: "Spices, tea, snacks, ready-to-eat, pickles, juices, cosmetics, copperware and pooja kits." },
      { h: "Custom branding", p: "Logo design, packaging design, region-specific artwork, multi-language labels and barcode generation." },
      { h: "Low MOQ to FCL", p: "Start with low MOQ samples and scale to full containers as your private label brand grows." },
    ],
  },
  "mixed-grocery-container": {
    lead: "Consolidated mixed grocery container shipments combining multiple Indian FMCG categories in one FCL for distributors and ethnic stores.",
    sections: [
      { h: "Why mixed containers", p: "Stock variety without committing to single-SKU FCLs. Perfect for ethnic supermarkets, distributors and growing importers." },
      { h: "How it works", p: "Send us your SKU list — we consolidate from authorized brand distributors, palletize and ship as a single FCL with one bill of lading." },
      { h: "Categories you can mix", p: "Spices, tea, pulses, snacks, instant foods, cosmetics, juices, pickles, copperware and pooja items in one container." },
    ],
  },
  "bulk-fcl-container-supply": {
    lead: "Full Container Load (FCL) Indian FMCG sourcing and supply for large importers, supermarket chains and distributors worldwide.",
    sections: [
      { h: "Single SKU FCL", p: "Container-load supply for high-volume SKUs — Tata Tea, MDH masalas, Maggi, Real juices and more." },
      { h: "Multi-SKU FCL", p: "Mixed FCLs across categories with consolidated documentation." },
      { h: "Direct factory pricing", p: "Best landed cost through direct distributor relationships and optimized container loading." },
    ],
  },
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const page = seoPages.find((p) => p.slug === params.slug);
    if (!page) throw notFound();
    return { page, body: bodyBySlug[page.slug] };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.page;
    if (!p) return { meta: [{ title: "Service | Golden Impex" }] };
    return {
      meta: [
        { title: `${p.title} | Golden Impex` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.title} | Golden Impex` },
        { property: "og:description", content: p.description },
        { property: "og:url", content: `/services/${p.slug}` },
        { name: "keywords", content: p.keywords.join(", ") },
      ],
      links: [{ rel: "canonical", href: `/services/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: p.title,
            description: p.description,
            provider: { "@type": "Organization", name: company.name, url: `https://${company.domain}` },
            areaServed: ["Australia", "United Arab Emirates", "United States", "Canada", "United Kingdom", "New Zealand", "Europe", "Africa"],
          }),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { page, body } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={page.keywords[0]} title={page.h1} subtitle={page.description} />
      <section className="mx-auto max-w-4xl px-6 py-16">
        {body && (
          <>
            <p className="text-lg text-foreground/90 leading-relaxed">{body.lead}</p>
            <div className="gold-divider my-10" />
            <div className="space-y-10">
              {body.sections.map((s) => (
                <div key={s.h}>
                  <h2 className="font-display text-2xl md:text-3xl">{s.h}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{s.p}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 border border-border bg-card p-8">
              <SectionEyebrow>What you get</SectionEyebrow>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  "Verified, authentic SKUs",
                  "24-hour quotation turnaround",
                  "End-to-end export documentation",
                  "Quality inspection before dispatch",
                  "Mixed / FCL / private label flexibility",
                  "Door-to-door logistics support",
                ].map((x) => (
                  <li key={x} className="flex gap-2"><Check className="text-gold shrink-0" size={16} /> {x}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <SectionEyebrow>Get a quote</SectionEyebrow>
          <h2 className="font-display text-3xl mt-3">Send us your requirement</h2>
          <div className="mt-8 bg-cream text-ink p-8">
            <InquiryForm defaultProduct={page.title} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm border-b border-gold pb-1"><ArrowLeft size={14} /> All services</Link>
      </div>
    </>
  );
}

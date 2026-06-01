import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Boxes, Package, Sparkles, Globe2, Truck } from "lucide-react";
import heroImg from "@/assets/hero-export.jpg";
import containersImg from "@/assets/containers.jpg";
import { categories, company } from "@/lib/site-data";
import { SectionEyebrow } from "@/components/site/Section";
import { InquiryForm } from "@/components/site/InquiryForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FMCG Exporter India | Golden Impex — Indian Grocery, Spices, Tea, Cosmetics" },
      { name: "description", content: "Golden Impex is a leading FMCG exporter from India supplying authentic Indian spices, tea, snacks, cosmetics, beverages, pickles and grocery to global importers, distributors and supermarket chains." },
      { property: "og:title", content: "FMCG Exporter India | Golden Impex" },
      { property: "og:description", content: "Global sourcing partner for Indian FMCG products. MDH, Tata Tea, Maggi, Himalaya, Real and more." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "preload", as: "image", href: heroImg, fetchpriority: "high" }],
  }),
  component: Home,
});

const advantages = [
  { icon: Boxes, title: "Mixed Grocery Containers", desc: "Consolidated FMCG shipments combining multiple categories in one container — perfect for ethnic stores and distributors." },
  { icon: Package, title: "Bulk FCL Container Supply", desc: "Full Container Load sourcing for large-scale importers, supermarket chains and wholesale distributors." },
  { icon: ShieldCheck, title: "Quality Check Solutions", desc: "Product verification, inspection, packaging review and shipment checks before every dispatch." },
  { icon: Sparkles, title: "Brand Tie-Ups", desc: "Direct access to India's leading FMCG brands and trusted authorized manufacturers." },
  { icon: Globe2, title: "Private Labelling", desc: "Custom branding, packaging and region-specific artwork for international private label buyers." },
  { icon: Truck, title: "Genuine Branded Products", desc: "Authentic SKUs sourced through reliable distribution channels — never grey market." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink text-cream overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Indian FMCG products ready for export" className="h-full w-full object-cover opacity-50" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
          <SectionEyebrow>Global FMCG Sourcing · Since India</SectionEyebrow>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl mt-6">
            Export <span className="gold-text-gradient">Premium Indian FMCG</span> Products Worldwide
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/80">
            Reliable exporter and sourcing partner for authentic Indian food products, beverages, spices,
            cosmetics, personal care and grocery brands — shipped to importers, supermarkets and distributors across the globe.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-gold text-ink font-medium hover:shadow-gold transition-shadow">
              Request a Quote <ArrowRight size={18} />
            </Link>
            <a href={`mailto:${company.email}?subject=Catalogue request`} className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold/40 text-cream hover:bg-gold/10 transition-colors">
              Download Catalogue
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-cream/80 hover:text-gold">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              ["20+", "Countries served"],
              ["500+", "FMCG SKUs"],
              ["50+", "Indian brands"],
              ["100%", "Genuine sourcing"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl md:text-4xl text-gold">{n}</div>
                <div className="text-xs uppercase tracking-widest text-cream/60 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionEyebrow>About Golden Impex</SectionEyebrow>
          <h2 className="font-display text-4xl md:text-5xl mt-5">A trusted global sourcing partner for Indian FMCG.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Golden Impex Private Limited is an India-based FMCG export company specializing in sourcing
            and exporting genuine branded products from leading Indian manufacturers. We help importers,
            distributors, wholesalers and retailers source authentic Indian grocery through reliable supply
            chains, competitive pricing and efficient export solutions.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold-dim">Mission</div>
              <p className="mt-2 text-sm">To become a trusted global sourcing partner for Indian FMCG products.</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold-dim">Vision</div>
              <p className="mt-2 text-sm">To connect global buyers with authentic Indian brands through efficient export solutions and long-term business partnerships.</p>
            </div>
          </div>
          <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-sm text-ink border-b border-gold pb-1 hover:gap-3 transition-all">
            More about us <ArrowRight size={16} />
          </Link>
        </div>
        <div className="relative">
          <img src={containersImg} alt="International shipping containers at port" loading="lazy" width={1280} height={800} className="w-full h-[500px] object-cover shadow-luxe" />
          <div className="absolute -bottom-6 -left-6 bg-ink text-cream p-6 max-w-xs shadow-luxe hidden md:block">
            <div className="text-gold text-3xl font-display">FCL · LCL · Mixed</div>
            <div className="text-xs uppercase tracking-widest text-cream/60 mt-2">Flexible export models</div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionEyebrow>Product Categories</SectionEyebrow>
              <h2 className="font-display text-4xl md:text-5xl mt-5 max-w-2xl">Authentic Indian FMCG across every aisle.</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm border-b border-gold pb-1 hover:gap-3 transition-all">
              View all categories <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/products/$slug"
                params={{ slug: c.slug }}
                className="group relative block overflow-hidden bg-ink aspect-[4/5]"
              >
                <img src={c.image} alt={c.name} loading="lazy" width={1024} height={768} className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-cream">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2">{c.brands?.slice(0,2).join(" · ") ?? "Export ready"}</div>
                  <h3 className="font-display text-2xl">{c.name}</h3>
                  <p className="text-sm text-cream/70 mt-2 line-clamp-2">{c.short}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-gold text-sm">
                    Explore <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>Why Choose Golden Impex</SectionEyebrow>
          <h2 className="font-display text-4xl md:text-5xl mt-5">Built for the way modern importers source.</h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {advantages.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-8 hover:bg-secondary/50 transition-colors">
              <div className="h-12 w-12 grid place-items-center bg-gradient-gold text-ink mb-5">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionEyebrow>Send us your requirement</SectionEyebrow>
            <h2 className="font-display text-4xl md:text-5xl mt-5">Request a quotation in 24 hours.</h2>
            <p className="mt-6 text-cream/70 max-w-md">
              Tell us what you need to import. Our export team will respond with available SKUs,
              indicative pricing, packaging and lead time within one business day.
            </p>
            <div className="mt-10 space-y-3 text-sm">
              <div><span className="text-gold">Email</span> · <a className="hover:text-gold" href={`mailto:${company.email}`}>{company.email}</a></div>
              <div><span className="text-gold">Phone</span> · <a className="hover:text-gold" href={`tel:${company.phoneRaw}`}>{company.phone}</a></div>
              <div><span className="text-gold">Location</span> · {company.location}</div>
            </div>
          </div>
          <div className="bg-cream text-ink p-8 md:p-10 shadow-luxe">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}

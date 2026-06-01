import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Boxes, Package, Sparkles, Globe2, Truck, Star, Quote } from "lucide-react";
import heroImg from "@/assets/hero-export.jpg";
import containersImg from "@/assets/containers.jpg";
import { categories, company, featuredProducts, testimonials } from "@/lib/site-data";
import { SectionEyebrow } from "@/components/site/Section";
import { InquiryForm } from "@/components/site/InquiryForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const trustBrands = [
  "MDH", "Tata Tea", "Haldiram's", "Maggi", "Himalaya", "Dabur",
  "Patanjali", "Real", "Mother's Recipe", "Bikaji", "Amul", "Cadbury",
  "Britannia", "Parle", "Wagh Bakri", "Everest",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-noir text-cream overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Indian FMCG products ready for export" className="h-full w-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.78_0.135_78/0.18),transparent_60%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-40">
          <SectionEyebrow>Global FMCG Sourcing · Est. India</SectionEyebrow>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98] max-w-5xl mt-7">
            Export <span className="gold-text-gradient italic">Premium Indian FMCG</span> Products Worldwide
          </h1>
          <p className="mt-7 max-w-2xl text-lg md:text-xl text-cream/75 font-light leading-relaxed">
            Reliable exporter and sourcing partner for authentic Indian food products, beverages, spices,
            cosmetics, personal care and grocery brands — shipped to importers, supermarkets and distributors across the globe.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-ink font-medium tracking-wide hover:shadow-gold transition-all">
              Request a Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`mailto:${company.email}?subject=Catalogue request`} className="inline-flex items-center gap-2 px-8 py-4 border border-gold/40 text-cream hover:bg-gold/10 hover:border-gold transition-colors">
              Download Catalogue
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            {[
              ["20+", "Countries served"],
              ["500+", "FMCG SKUs"],
              ["50+", "Indian brands"],
              ["100%", "Genuine sourcing"],
            ].map(([n, l]) => (
              <div key={l} className="border-l border-gold/30 pl-5">
                <div className="font-display text-4xl md:text-5xl gold-shimmer">{n}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-cream/55 mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BRANDS MARQUEE */}
      <section className="bg-ink-soft text-cream/70 border-y border-gold/15 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center gap-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold whitespace-nowrap hidden md:block">Trusted Brands</span>
          <div className="flex-1 overflow-hidden">
            <div className="marquee-track flex gap-12 whitespace-nowrap font-display text-2xl italic">
              {[...trustBrands, ...trustBrands].map((b, i) => (
                <span key={i} className="opacity-80">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <SectionEyebrow>About Golden Impex</SectionEyebrow>
            <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.1]">A trusted global sourcing partner for <em className="text-gold-dim">Indian FMCG</em>.</h2>
            <p className="mt-7 text-muted-foreground leading-relaxed text-[15px]">
              Golden Impex Private Limited is an India-based FMCG export company specializing in sourcing
              and exporting genuine branded products from leading Indian manufacturers. We help importers,
              distributors, wholesalers and retailers source authentic Indian grocery through reliable supply
              chains, competitive pricing and efficient export solutions.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              <div className="border-t border-gold/40 pt-5">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold-dim">Mission</div>
                <p className="mt-3 text-sm leading-relaxed">To become a trusted global sourcing partner for Indian FMCG products.</p>
              </div>
              <div className="border-t border-gold/40 pt-5">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold-dim">Vision</div>
                <p className="mt-3 text-sm leading-relaxed">To connect global buyers with authentic Indian brands through long-term partnerships.</p>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 mt-10 text-sm text-ink border-b border-gold pb-1 hover:gap-3 transition-all">
              More about us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl" />
            <img src={containersImg} alt="International shipping containers at port" loading="lazy" width={1280} height={800} className="relative w-full h-[520px] object-cover shadow-luxe" />
            <div className="absolute -bottom-8 -left-8 bg-ink text-cream p-7 max-w-xs shadow-luxe hidden md:block border border-gold/30">
              <div className="text-gold text-3xl font-display italic">FCL · LCL · Mixed</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-cream/60 mt-3">Flexible export models</div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-cream border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <SectionEyebrow>Product Categories</SectionEyebrow>
              <h2 className="font-display text-4xl md:text-5xl mt-5 max-w-2xl leading-[1.1]">Authentic Indian FMCG across <em className="text-gold-dim">every aisle</em>.</h2>
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
                <img src={c.image} alt={c.name} loading="lazy" width={1024} height={768} className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-95 group-hover:scale-110 transition-all duration-[1200ms] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end text-cream">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-3">{c.brands?.slice(0,2).join(" · ") ?? "Export ready"}</div>
                  <h3 className="font-display text-2xl md:text-3xl leading-tight">{c.name}</h3>
                  <p className="text-sm text-cream/70 mt-3 line-clamp-2 leading-relaxed">{c.short}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-gold text-sm group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={14} />
                  </div>
                </div>
                <div className="absolute top-5 right-5 h-10 w-10 border border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center">
                  <ArrowRight className="text-gold" size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS CAROUSEL */}
      <section className="bg-noir text-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionEyebrow>Other Featured Products</SectionEyebrow>
              <h2 className="font-display text-4xl md:text-5xl mt-5 max-w-2xl leading-[1.1]">Specialty FMCG, <em className="text-gold italic">handpicked for export</em>.</h2>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-gold border-b border-gold pb-1 hover:gap-3 transition-all">
              Request full catalogue <ArrowRight size={16} />
            </Link>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-6">
              {featuredProducts.map((p) => (
                <CarouselItem key={p.name} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden bg-ink-soft border border-gold/15 hover:border-gold/50 transition-colors">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img src={p.image} alt={p.name} loading="lazy" width={800} height={1000} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                      {p.tag && (
                        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-gradient-gold text-ink px-3 py-1.5">{p.tag}</span>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-gold/80">{p.category}</div>
                      <h3 className="font-display text-2xl mt-2">{p.name}</h3>
                      <p className="text-xs text-cream/60 mt-2">{p.brand}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-3 mt-8">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-none border-gold/40 bg-transparent text-gold hover:bg-gold hover:text-ink" />
              <CarouselNext className="static translate-y-0 h-12 w-12 rounded-none border-gold/40 bg-transparent text-gold hover:bg-gold hover:text-ink" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>Why Choose Golden Impex</SectionEyebrow>
          <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.1]">Built for the way <em className="text-gold-dim">modern importers</em> source.</h2>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {advantages.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-10 hover:bg-secondary/60 transition-colors group">
              <div className="h-14 w-14 grid place-items-center bg-gradient-gold text-ink mb-6 group-hover:rotate-3 transition-transform">
                <Icon size={24} />
              </div>
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,oklch(0.78_0.135_78/0.12),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionEyebrow>Buyers Worldwide</SectionEyebrow>
            <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.1]">Trusted by importers across <em className="text-gold italic">20+ countries</em>.</h2>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-6">
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <figure className="relative h-full p-8 md:p-10 bg-ink-soft border border-gold/20 hover:border-gold/60 transition-colors">
                    <Quote className="text-gold/30 absolute top-6 right-6" size={48} />
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="fill-gold text-gold" size={14} />
                      ))}
                    </div>
                    <blockquote className="font-serif text-lg md:text-xl text-cream/90 leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-8 pt-6 border-t border-gold/20">
                      <div className="font-display text-lg text-cream">{t.name}</div>
                      <div className="text-xs text-cream/60 mt-1">{t.role} · {t.company}</div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-gold mt-2">{t.country}</div>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-3 mt-10">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-none border-gold/40 bg-transparent text-gold hover:bg-gold hover:text-ink" />
              <CarouselNext className="static translate-y-0 h-12 w-12 rounded-none border-gold/40 bg-transparent text-gold hover:bg-gold hover:text-ink" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-14">
          <div>
            <SectionEyebrow>Send us your requirement</SectionEyebrow>
            <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.1]">Request a quotation in <em className="text-gold-dim">24 hours</em>.</h2>
            <p className="mt-7 text-muted-foreground max-w-md leading-relaxed">
              Tell us what you need to import. Our export team will respond with available SKUs,
              indicative pricing, packaging and lead time within one business day.
            </p>
            <div className="mt-10 space-y-4 text-sm">
              <div className="flex gap-4 items-baseline"><span className="text-[10px] uppercase tracking-[0.3em] text-gold-dim w-20">Email</span><a className="hover:text-gold transition-colors" href={`mailto:${company.email}`}>{company.email}</a></div>
              <div className="flex gap-4 items-baseline"><span className="text-[10px] uppercase tracking-[0.3em] text-gold-dim w-20">Phone</span><a className="hover:text-gold transition-colors" href={`tel:${company.phoneRaw}`}>{company.phone}</a></div>
              <div className="flex gap-4 items-baseline"><span className="text-[10px] uppercase tracking-[0.3em] text-gold-dim w-20">Location</span>{company.location}</div>
            </div>
          </div>
          <div className="bg-ink text-cream p-8 md:p-12 shadow-luxe relative">
            <div className="absolute top-0 left-0 w-16 h-px bg-gradient-gold" />
            <div className="absolute top-0 left-0 w-px h-16 bg-gradient-gold" />
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}

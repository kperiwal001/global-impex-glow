import { createFileRoute } from "@tanstack/react-router";
import containersImg from "@/assets/containers.jpg";
import { PageHero, SectionEyebrow } from "@/components/site/Section";
import { licenses } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Golden Impex | FMCG Exporter from India" },
      { name: "description", content: "Learn about Golden Impex Private Limited — an India-based FMCG export company sourcing authentic branded Indian grocery for global buyers since inception." },
      { property: "og:title", content: "About Golden Impex | FMCG Exporter from India" },
      { property: "og:description", content: "India-based FMCG export company connecting global buyers with authentic Indian brands." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>A trusted Indian sourcing partner — built for global FMCG buyers.</>}
        subtitle="Golden Impex Private Limited is an India-based FMCG export company specializing in sourcing and exporting genuine branded products from leading Indian manufacturers."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionEyebrow>Our story</SectionEyebrow>
          <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.1]">Authentic Indian FMCG, <em className="text-gold-dim">end-to-end</em>.</h2>
          <div className="mt-7 space-y-5 text-muted-foreground leading-relaxed">
            <p>From our base in Jaipur, Rajasthan, we work with India's leading FMCG brands and authorized distributors to consolidate, pack and ship branded products to importers, distributors, wholesalers, supermarkets, ethnic grocery stores and e-commerce sellers worldwide.</p>
            <p>We help international buyers source authentic Indian grocery through reliable supply chains, competitive pricing and efficient export solutions — across Australia, the UAE, the USA, Canada, the UK, New Zealand, Europe and Africa.</p>
            <p>Our deep brand relationships, mixed-container model and private label capabilities make us a preferred long-term partner for buyers building Indian FMCG portfolios overseas.</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-gold opacity-15 blur-2xl" />
          <img src={containersImg} alt="Export shipping containers" width={1280} height={800} loading="lazy" className="relative w-full h-[520px] object-cover shadow-luxe" />
        </div>
      </section>

      <section className="bg-noir text-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-10">
          <div className="border border-gold/30 p-12 relative">
            <div className="absolute top-0 left-0 w-12 h-px bg-gradient-gold" />
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Mission</div>
            <p className="font-display text-2xl md:text-3xl mt-6 leading-snug">To become a trusted global sourcing partner for Indian FMCG products.</p>
          </div>
          <div className="border border-gold/30 p-12 bg-gradient-dark relative">
            <div className="absolute top-0 left-0 w-12 h-px bg-gradient-gold" />
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Vision</div>
            <p className="font-display text-2xl md:text-3xl mt-6 leading-snug">To connect global buyers with authentic Indian brands through efficient export solutions and long-term business partnerships.</p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & LICENSES */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionEyebrow>Certifications & Licenses</SectionEyebrow>
            <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.1]">Fully <em className="text-gold-dim">certified</em>, fully compliant.</h2>
            <p className="mt-6 text-muted-foreground">
              Every shipment is backed by government-issued licenses, export registrations and international quality certifications — giving our buyers complete peace of mind.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {licenses.map((l) => (
              <div key={l.code} className="group bg-card border border-border hover:border-gold/60 transition-colors overflow-hidden shadow-soft">
                <div className="aspect-[4/5] bg-ink overflow-hidden">
                  <img
                    src={l.image}
                    alt={`${l.code} ${l.name} certificate`}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold-dim">{l.code}</div>
                  <h3 className="font-display text-xl mt-2">{l.name}</h3>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{l.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-muted-foreground italic">
            Verified certificates available on request for due-diligence and onboarding.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionEyebrow>What sets us apart</SectionEyebrow>
        <div className="grid md:grid-cols-3 gap-px bg-border mt-8">
          {[
            ["Authentic Sourcing", "Direct relationships with authorized distributors — no grey market, no compromise."],
            ["Flexible Models", "Mixed grocery containers, FCL, LCL and private label — built to fit your buying pattern."],
            ["Export Excellence", "End-to-end documentation, quality checks, and on-time shipments to 20+ countries."],
          ].map(([t, d]) => (
            <div key={t} className="bg-background p-10">
              <h3 className="font-display text-2xl">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import containersImg from "@/assets/containers.jpg";
import { PageHero, SectionEyebrow } from "@/components/site/Section";

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

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <SectionEyebrow>Our story</SectionEyebrow>
          <h2 className="font-display text-4xl mt-4">Authentic Indian FMCG, end-to-end.</h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>From our base in Jaipur, Rajasthan, we work with India's leading FMCG brands and authorized distributors to consolidate, pack and ship branded products to importers, distributors, wholesalers, supermarkets, ethnic grocery stores and e-commerce sellers worldwide.</p>
            <p>We help international buyers source authentic Indian grocery through reliable supply chains, competitive pricing and efficient export solutions — across Australia, the UAE, the USA, Canada, the UK, New Zealand, Europe and Africa.</p>
            <p>Our deep brand relationships, mixed-container model and private label capabilities make us a preferred long-term partner for buyers building Indian FMCG portfolios overseas.</p>
          </div>
        </div>
        <img src={containersImg} alt="Export shipping containers" width={1280} height={800} loading="lazy" className="w-full h-[500px] object-cover shadow-luxe" />
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10">
          <div className="border border-gold/30 p-10">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Mission</div>
            <p className="font-display text-2xl md:text-3xl mt-5 leading-snug">To become a trusted global sourcing partner for Indian FMCG products.</p>
          </div>
          <div className="border border-gold/30 p-10 bg-gradient-dark">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Vision</div>
            <p className="font-display text-2xl md:text-3xl mt-5 leading-snug">To connect global buyers with authentic Indian brands through efficient export solutions and long-term business partnerships.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionEyebrow>What sets us apart</SectionEyebrow>
        <div className="grid md:grid-cols-3 gap-px bg-border mt-8">
          {[
            ["Authentic Sourcing", "Direct relationships with authorized distributors — no grey market, no compromise."],
            ["Flexible Models", "Mixed grocery containers, FCL, LCL and private label — built to fit your buying pattern."],
            ["Export Excellence", "End-to-end documentation, quality checks, and on-time shipments to 20+ countries."],
          ].map(([t, d]) => (
            <div key={t} className="bg-background p-8">
              <h3 className="font-display text-xl">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

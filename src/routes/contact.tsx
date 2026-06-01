import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company } from "@/lib/site-data";
import { PageHero, SectionEyebrow } from "@/components/site/Section";
import { InquiryForm } from "@/components/site/InquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Golden Impex | FMCG Exporter India" },
      { name: "description", content: `Contact Golden Impex Private Limited for FMCG export inquiries. Email ${company.email}, phone ${company.phone}, based in Jaipur, Rajasthan, India.` },
      { property: "og:title", content: "Contact Golden Impex | FMCG Exporter India" },
      { property: "og:description", content: "Send your FMCG export inquiry and receive a quote within 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build your Indian FMCG sourcing pipeline.</>}
        subtitle="Send us your product list and destination — our export desk responds within 24 hours."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-5 gap-12">
        <aside className="lg:col-span-2 space-y-8">
          <div>
            <SectionEyebrow>Reach us directly</SectionEyebrow>
            <div className="mt-6 space-y-5">
              {[
                { Icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phoneRaw}` },
                { Icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
                { Icon: MapPin, label: "Location", value: company.location },
                { Icon: Clock, label: "Hours", value: "Mon – Sat · 09:30 – 19:00 IST" },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-start border-b border-border pb-5">
                  <div className="h-10 w-10 grid place-items-center bg-gradient-gold text-ink shrink-0"><Icon size={18} /></div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gold-dim">{label}</div>
                    {href ? <a href={href} className="block mt-1 hover:text-gold">{value}</a> : <div className="mt-1">{value}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ink text-cream p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-gold">Prefer WhatsApp?</div>
            <p className="font-display text-2xl mt-2">Chat with our export team instantly.</p>
            <a
              href={`https://wa.me/${company.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block px-6 py-3 bg-[#25D366] text-white text-sm"
            >
              Start WhatsApp chat
            </a>
          </div>
        </aside>

        <div className="lg:col-span-3 bg-card border border-border p-8 md:p-10 shadow-luxe">
          <SectionEyebrow>Inquiry form</SectionEyebrow>
          <h2 className="font-display text-3xl mt-3">Tell us what you need to import.</h2>
          <p className="text-sm text-muted-foreground mt-2">All fields marked * are required.</p>
          <div className="mt-8">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}

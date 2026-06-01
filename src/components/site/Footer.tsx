import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { company, categories } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/80 border-t border-gold/20">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-2xl text-cream">Golden Impex</div>
          <p className="text-sm mt-3 text-cream/60">{company.tagline}</p>
          <div className="gold-divider my-5" />
          <p className="text-xs text-cream/50">CIN-ready · IEC certified · APEDA registered exporter</p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/products" className="hover:text-gold">Products</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Insights</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Categories</div>
          <ul className="space-y-2 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link to="/products/$slug" params={{ slug: c.slug }} className="hover:text-gold">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Get in touch</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone size={16} className="text-gold mt-0.5 shrink-0" />
              <a href={`tel:${company.phoneRaw}`} className="hover:text-gold">{company.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="text-gold mt-0.5 shrink-0" />
              <a href={`mailto:${company.email}`} className="hover:text-gold">{company.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span>{company.location}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/15">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-cream/50 flex flex-col md:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
          <div>Jaipur, Rajasthan · India</div>
        </div>
      </div>
    </footer>
  );
}

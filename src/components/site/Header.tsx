import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { company } from "@/lib/site-data";
import logoGold from "@/assets/logo-gold.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-ink/85 border-b border-gold/20">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logoGold} alt="Golden Impex logo" className="h-11 w-11 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-cream text-lg tracking-wide">Golden Impex</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold/80">{company.tagline.split(" ").slice(0,3).join(" ")}</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm text-cream/80 hover:text-gold transition-colors data-[status=active]:text-gold"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-gradient-gold text-ink text-sm font-medium rounded-sm hover:shadow-gold transition-shadow"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-cream"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-gold/20">
          <div className="px-6 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-cream/90 hover:text-gold"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-2.5 bg-gradient-gold text-ink text-sm font-medium rounded-sm text-center"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

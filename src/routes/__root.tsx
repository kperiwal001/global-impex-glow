import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import { company } from "@/lib/site-data";

function NotFoundComponent() {
  return (
    <>
      <Header />
      <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-display text-gold">404</h1>
          <h2 className="mt-4 text-xl font-display">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Link to="/" className="inline-flex items-center justify-center bg-ink text-cream px-5 py-2.5 text-sm hover:bg-gradient-gold hover:text-ink transition-colors">
              Go home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-display">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-ink text-cream px-5 py-2.5 text-sm hover:bg-gradient-gold hover:text-ink transition-colors"
          >
            Try again
          </button>
          <a href="/" className="border border-input px-5 py-2.5 text-sm hover:bg-accent">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Golden Impex | FMCG Products Exporter" },
      { name: "description", content: "Golden Impex is a trusted FMCG products exporter from India supplying spices, tea, snacks, cosmetics, beverages, pickles and grocery to global importers and distributors worldwide." },
      { name: "author", content: company.name },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: company.short },
      { property: "og:title", content: "Golden Impex | FMCG Products Exporter" },
      { property: "og:description", content: "Trusted FMCG products exporter from India. Bulk sourcing of spices, tea, snacks, cosmetics and grocery for global importers and distributors." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Golden Impex | FMCG Products Exporter" },
      { name: "twitter:description", content: "Trusted FMCG products exporter from India. Bulk sourcing of spices, tea, snacks, cosmetics and grocery for global importers and distributors." },
      { name: "theme-color", content: "#0b0b0b" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: company.name,
          url: `https://${company.domain}`,
          email: company.email,
          telephone: company.phone,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            addressCountry: "IN",
          },
          sameAs: [],
          slogan: company.tagline,
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </QueryClientProvider>
  );
}

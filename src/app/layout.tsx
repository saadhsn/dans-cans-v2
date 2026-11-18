import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

// Component Imports
import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SUPPORT_PHONE_DISPLAY } from "@/data/contact";
import { SERVICED_TOWNS } from "@/data/serviceArea";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.danscansdumpsterrental.com").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dans Cans | Premium Dumpster Rental Services",
  description: "Reliable flat-rate dumpster rentals across Connecticut. Family-owned service with driveway-safe delivery and transparent pricing.",
  keywords: [
    "Connecticut dumpster rental",
    "dumpster rental CT",
    "roll-off dumpster Connecticut",
    "driveway-safe dumpster delivery",
    "residential dumpster rental",
    "construction dumpster rental",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dans Cans | Premium Dumpster Rental Services",
    description: "Reliable flat-rate dumpster rentals across Connecticut. Family-owned service with driveway-safe delivery and transparent pricing.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/hero-can.png",
        width: 1200,
        height: 630,
        alt: "Dans Cans branded dumpster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dans Cans | Premium Dumpster Rental Services",
    description: "Reliable flat-rate dumpster rentals across Connecticut. Family-owned service with driveway-safe delivery and transparent pricing.",
    images: ["/hero-can.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dans Cans",
    url: SITE_URL,
    telephone: SUPPORT_PHONE_DISPLAY,
    areaServed: SERVICED_TOWNS.map((town) => ({
      "@type": "City",
      name: town,
      containedInPlace: {
        "@type": "State",
        name: "Connecticut",
      },
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: "CT",
      addressCountry: "US",
    },
    serviceType: "Dumpster Rental Service",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-slate-50 text-slate-900`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16926603223"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16926603223');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        <Navbar />
        <ScrollReveal />
        {children}

        <footer className="bg-brand-dark py-12 text-white/50 text-center text-sm border-t border-white/5">
          <div className="container mx-auto px-6">
            <p>© {new Date().getFullYear()} Dans Cans. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Component Imports
import Navbar from "@/components/layout/Navbar";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

// Loading the Inter font - best for professional service sites
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dans Cans | Premium Dumpster Rental Services",
  description: "Reliable, flat-rate dumpster rentals for homeowners and contractors. Driveway safe and on-time delivery guaranteed.",
  keywords: ["dumpster rental", "roll-off bins", "waste management", "construction dumpster"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-slate-50 text-slate-900`}
      >
        {/* The Navbar stays at the top of every page */}
        <Navbar />

        {/* This is where the content of your page.tsx will be injected */}
        {children}

        {/* The floating theme toggle tool */}
        <ThemeSwitcher />

        {/* Future Footer goes here */}
        <footer className="bg-brand-dark py-12 text-white/50 text-center text-sm border-t border-white/5">
          <div className="container mx-auto px-6">
            <p>© {new Date().getFullYear()} Dans Cans. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
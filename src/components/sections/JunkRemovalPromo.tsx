"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, HandHelping, Truck, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

export default function JunkRemovalPromo() {
  return (
    <section aria-labelledby="junk-removal-promo-title" className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#0B1221] text-white shadow-2xl"
        >
          <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand-primary/20 blur-[110px]" />
          <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:p-16">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-brand-accent">
                <HandHelping size={16} />
                Now offering junk removal
              </div>
              <h2
                id="junk-removal-promo-title"
                className="mb-6 text-4xl font-black uppercase italic leading-[0.95] tracking-tighter sm:text-5xl lg:text-6xl"
              >
                DON&apos;T WANT TO <span className="text-brand-primary">LOAD IT YOURSELF?</span>
              </h2>
              <p className="mb-8 max-w-xl text-base font-medium leading-relaxed text-slate-300 sm:text-lg">
                We still deliver dumpsters when you want to handle the loading. Need an extra hand with the cleanup instead? Ask us about our new junk removal service.
              </p>
              <Link
                href="/junk-removal/"
                onClick={() => trackEvent("junk_removal_page_click", { cta_location: "home_promo" })}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-brand-primary px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-brand-primary/20 transition-transform hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/40"
              >
                Explore Junk Removal <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Truck size={26} className="text-brand-accent" />
                </div>
                <h3 className="text-xl font-black uppercase italic">Dumpster Rental</h3>
                <p className="mt-2 text-sm font-medium text-slate-400">We drop off the dumpster. You fill it at your pace.</p>
              </div>
              <div className="rounded-[1.75rem] border border-brand-primary/30 bg-brand-primary/10 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary text-white">
                  <HandHelping size={26} />
                </div>
                <h3 className="flex items-center gap-2 text-xl font-black uppercase italic">
                  Junk Removal <CheckCircle2 size={19} className="text-brand-accent" />
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-300">Tell us what needs to go. We&apos;ll discuss the help you need.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

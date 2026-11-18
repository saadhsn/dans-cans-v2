"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Building2, CheckCircle2,
  ClipboardList, HandHelping, Home, Phone, Sofa, Trash2, Truck,
} from "lucide-react";
import { SUPPORT_PHONE_DISPLAY, SUPPORT_PHONE_TEL } from "@/data/contact";
import { SERVICED_TOWNS } from "@/data/serviceArea";
import { trackCallClick, trackEvent } from "@/lib/gtag";

const examples = [
  {
    icon: Sofa,
    title: "Furniture & Bulky Items",
    description: "Need a hand clearing out old furniture or other bulky household items? Tell us what you need removed.",
  },
  {
    icon: Home,
    title: "Garage & Home Cleanouts",
    description: "Make room again in garages, basements, attics, and other cluttered spaces.",
  },
  {
    icon: Building2,
    title: "Move-Out & Property Cleanups",
    description: "Get help planning a cleanup around a move, property refresh, or turnover.",
  },
  {
    icon: Trash2,
    title: "Project Debris & General Junk",
    description: "Ask about removal assistance for cleanup and renovation leftovers. Material acceptance is confirmed when you call.",
  },
];

const steps = [
  { icon: ClipboardList, title: "1. Tell Us About It", description: "Call and describe the items, amount of junk, and where the cleanup is located." },
  { icon: HandHelping, title: "2. Review Your Options", description: "We'll discuss what assistance is available and provide pricing for your specific job." },
  { icon: Truck, title: "3. Arrange Your Cleanup", description: "Confirm the details and schedule the service with our team." },
];

const faqs = [
  {
    question: "How is junk removal different from dumpster rental?",
    answer: "With dumpster rental, we deliver a container for you to load. Junk removal is for customers who want help with the removal process. Call us to discuss the work involved.",
  },
  {
    question: "How much does junk removal cost?",
    answer: "Pricing depends on the items, volume, access, and scope of the work. Call us for a quote tailored to your cleanup.",
  },
  {
    question: "What items can you remove?",
    answer: "Tell us what needs to go when you call. We'll confirm what we can accept and discuss any special handling requirements before scheduling.",
  },
  {
    question: "Do you offer junk removal in my town?",
    answer: "We serve communities across our Connecticut service area. Call us with your address so we can confirm coverage and availability for junk removal.",
  },
];

function PhoneCTA({ location, label, secondary = false }: { location: string; label: string; secondary?: boolean }) {
  return (
    <a
      href={SUPPORT_PHONE_TEL}
      onClick={() => {
        trackCallClick(location);
        trackEvent("junk_removal_call_click", { cta_location: location });
      }}
      className={
        secondary
          ? "inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
          : "inline-flex items-center justify-center gap-3 rounded-xl bg-brand-primary px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-brand-primary/20 transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/40"
      }
    >
      <Phone size={18} aria-hidden="true" /> {label}
    </a>
  );
}

export default function JunkRemovalPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#0B1221] pb-20 pt-40 text-white md:pb-28 md:pt-48">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-4 h-[30rem] w-[30rem] rounded-full bg-brand-primary/15 blur-[115px]" />
        <div className="container relative mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-5xl"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-brand-accent">
              <HandHelping size={17} /> Now offering junk removal
            </div>
            <h1 className="max-w-4xl text-5xl font-black uppercase italic leading-[0.92] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              JUNK REMOVAL <br /><span className="text-brand-primary">WITHOUT THE HASSLE.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-slate-300 md:text-xl">
              Clearing out a space? Don&apos;t want to handle everything yourself? Dans Cans now offers junk removal assistance alongside our dumpster rental service. Tell us about your project and we&apos;ll help you find the right option.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PhoneCTA location="junk_removal_hero" label={`Call for a Quote: ${SUPPORT_PHONE_DISPLAY}`} />
              <Link
                href="/#sizes"
                onClick={() => trackEvent("junk_removal_dumpster_click", { cta_location: "junk_removal_hero" })}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
              >
                Prefer a Dumpster? <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7 text-xs font-black uppercase tracking-widest text-slate-300">
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={18} className="text-brand-primary" /> Locally Owned</span>
              <span className="inline-flex items-center gap-2"><BadgeCheck size={18} className="text-brand-primary" /> Straightforward Quotes</span>
              <span className="inline-flex items-center gap-2"><Truck size={18} className="text-brand-primary" /> Connecticut Service</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" aria-labelledby="junk-services-heading">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-3xl">
            <div className="mb-5 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-primary">
              <div className="h-[2px] w-9 bg-brand-primary" /> What We Can Help With
            </div>
            <h2 id="junk-services-heading" className="text-4xl font-black uppercase italic leading-tight tracking-tighter text-brand-dark md:text-6xl">
              MORE SPACE. <span className="text-brand-primary">LESS STRESS.</span>
            </h2>
            <p className="mt-5 text-lg font-medium leading-relaxed text-slate-500">
              Every cleanup is different. Here are common types of projects to ask us about.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {examples.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -7 }}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition-colors hover:border-brand-primary/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                  <item.icon size={28} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black uppercase italic tracking-tight text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-sm font-medium text-slate-500">
            Items, access requirements, and disposal restrictions are reviewed before a job is confirmed.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="junk-process-heading">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 id="junk-process-heading" className="text-4xl font-black uppercase italic tracking-tighter text-brand-dark md:text-6xl">
              CLEANUP MADE <span className="text-brand-primary">EASY.</span>
            </h2>
            <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-brand-primary" />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                  <step.icon size={32} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-brand-dark">{step.title}</h3>
                <p className="mt-3 font-medium leading-relaxed text-slate-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" aria-labelledby="junk-choices-heading">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 text-xs font-black uppercase tracking-widest text-brand-primary">Two Ways to Get It Done</div>
              <h2 id="junk-choices-heading" className="text-4xl font-black uppercase italic leading-tight tracking-tighter text-brand-dark md:text-6xl">
                YOU CHOOSE <span className="text-brand-primary">THE HELP.</span>
              </h2>
              <p className="mt-6 text-lg font-medium leading-relaxed text-slate-500">
                Our original dumpster rental service is still available. Junk removal gives you another way to tackle the mess.
              </p>
            </div>
            <div className="space-y-5">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
                <div className="mb-3 flex items-center gap-3">
                  <Truck size={26} className="text-brand-primary" />
                  <h3 className="text-xl font-black uppercase italic text-brand-dark">Dumpster Rental</h3>
                </div>
                <p className="mb-5 font-medium text-slate-500">We deliver the dumpster. You take care of loading it.</p>
                <Link
                  href="/#sizes"
                  onClick={() => trackEvent("junk_removal_dumpster_click", { cta_location: "junk_removal_comparison" })}
                  className="inline-flex items-center gap-2 text-sm font-black uppercase text-brand-primary hover:underline"
                >
                  View Dumpster Sizes <ArrowRight size={16} />
                </Link>
              </div>
              <div className="rounded-[2rem] border border-brand-primary/25 bg-brand-primary/5 p-7">
                <div className="mb-3 flex items-center gap-3">
                  <HandHelping size={26} className="text-brand-primary" />
                  <h3 className="text-xl font-black uppercase italic text-brand-dark">Junk Removal</h3>
                </div>
                <p className="mb-5 font-medium text-slate-500">Want help with the removal? Tell us what needs to go and request a quote.</p>
                <a
                  href={SUPPORT_PHONE_TEL}
                  onClick={() => {
                    trackCallClick("junk_removal_comparison");
                    trackEvent("junk_removal_call_click", { cta_location: "junk_removal_comparison" });
                  }}
                  className="inline-flex items-center gap-2 text-sm font-black uppercase text-brand-primary hover:underline"
                >
                  Call About Junk Removal <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-16 text-white md:py-24" aria-labelledby="junk-area-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-5 text-xs font-black uppercase tracking-widest text-brand-accent">Locally Focused</div>
            <h2 id="junk-area-heading" className="text-4xl font-black uppercase italic tracking-tighter md:text-6xl">
              PROUD TO SERVE <span className="text-brand-primary">CONNECTICUT.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-slate-300">
              We work with customers across our local service area. Junk removal coverage is confirmed when you call with your location and project details.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {SERVICED_TOWNS.map((town) => (
                <span key={town} className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-slate-300">
                  {town}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" aria-labelledby="junk-faq-heading">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 id="junk-faq-heading" className="text-4xl font-black uppercase italic tracking-tighter text-brand-dark md:text-6xl">
                COMMON <span className="text-brand-primary">QUESTIONS.</span>
              </h2>
              <p className="mt-5 max-w-sm font-medium leading-relaxed text-slate-500">We can talk through the details of your cleanup before you schedule.</p>
            </div>
            <div className="divide-y divide-slate-200 border-t border-slate-200">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black tracking-tight text-brand-dark marker:content-none [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span aria-hidden="true" className="text-brand-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 font-medium leading-relaxed text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 pb-20 pt-6 md:pb-28">
        <div className="container mx-auto">
          <div className="rounded-[2.5rem] bg-[#0B1221] p-8 text-center text-white sm:p-12 md:p-16">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter md:text-6xl">
              READY TO <span className="text-brand-primary">CLEAR IT OUT?</span>
            </h2>
            <p className="mx-auto mb-8 mt-5 max-w-xl text-lg font-medium text-slate-300">
              Give us a call to talk about your junk removal project and get a quote.
            </p>
            <PhoneCTA location="junk_removal_final_cta" label={`Call ${SUPPORT_PHONE_DISPLAY}`} secondary />
          </div>
        </div>
      </section>
    </main>
  );
}

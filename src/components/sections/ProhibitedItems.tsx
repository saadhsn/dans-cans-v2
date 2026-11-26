"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  XCircle, 
  Droplet, 
  Battery, 
  Trash2, 
  Zap, 
  Flame, 
  LifeBuoy,
  AlertTriangle,
  Fuel,
  Phone
} from 'lucide-react';
import { SUPPORT_PHONE_DISPLAY, SUPPORT_PHONE_TEL } from '@/data/contact';

const prohibited = [
  { 
    icon: Droplet, 
    name: "Wet Paint", 
    desc: "Liquid paints and lacquers are strictly prohibited.",
    color: { text: "text-blue-600", bg: "bg-blue-50", hoverBg: "group-hover:bg-blue-100", hoverShadow: "group-hover:shadow-blue-600/10" }
  },
  { 
    icon: Battery, 
    name: "Batteries", 
    desc: "Lead-acid and lithium-ion batteries are hazardous.",
    color: { text: "text-amber-600", bg: "bg-amber-50", hoverBg: "group-hover:bg-amber-100", hoverShadow: "group-hover:shadow-amber-600/10" }
  },
  { 
    icon: Flame, 
    name: "Propane", 
    desc: "Tanks, cylinders, or any pressurized vessels.",
    color: { text: "text-orange-600", bg: "bg-orange-50", hoverBg: "group-hover:bg-orange-100", hoverShadow: "group-hover:shadow-orange-600/10" }
  },
  { 
    icon: Fuel, 
    name: "Petroleum Products", 
    desc: "Gasoline, oil, and other petroleum-based liquids.",
    color: { text: "text-red-600", bg: "bg-red-50", hoverBg: "group-hover:bg-red-100", hoverShadow: "group-hover:shadow-red-600/10" }
  },
  { 
    icon: LifeBuoy, 
    name: "Tires", 
    desc: "Most landfills do not accept tires in dumpsters.",
    color: { text: "text-slate-600", bg: "bg-slate-100", hoverBg: "group-hover:bg-slate-200", hoverShadow: "group-hover:shadow-slate-600/10" }
  },
  { 
    icon: Trash2, 
    name: "Hazardous", 
    desc: "Asbestos, pesticides, and medical waste.",
    color: { text: "text-purple-600", bg: "bg-purple-50", hoverBg: "group-hover:bg-purple-100", hoverShadow: "group-hover:shadow-purple-600/10" }
  },
];

export default function ProhibitedItems() {
  return (
    <section id="prohibited-items" className="py-16 md:py-24 bg-white transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-red-600 font-black uppercase tracking-widest text-sm mb-4"
            >
              <AlertTriangle size={18} />
              Important Guidelines
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter">
              WHAT <span className="text-red-600 underline decoration-4 underline-offset-8">NOT</span> TO LOAD.
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm font-medium">
            Loading prohibited items may result in additional sorting fees or refusal of pickup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prohibited.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-50 border border-slate-100 p-8 rounded-[2rem] overflow-hidden transition-all hover:shadow-xl hover:bg-white"
            >
              {/* "NO" Indicator Overlay */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <XCircle size={32} className="text-red-600" />
              </div>

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-all ${item.color.bg} ${item.color.text} ${item.color.hoverBg} ${item.color.hoverShadow}`}>
                <item.icon size={28} />
              </div>

              <h3 className="text-xl font-black text-brand-dark mb-2 uppercase tracking-tight">
                {item.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA for questions */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 rounded-[2.5rem] bg-brand-dark text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="bg-brand-primary p-3 rounded-full">
              <Zap size={24} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-lg">Not sure about an item?</p>
              <p className="text-white/60 text-sm font-medium">Give us a quick call to avoid extra fees.</p>
            </div>
          </div>
          <a 
            href={SUPPORT_PHONE_TEL}
            className="bg-white text-brand-dark px-8 py-4 rounded-2xl font-black hover:bg-brand-primary hover:text-white transition-all whitespace-nowrap inline-flex items-center gap-2"
          >
            <Phone size={18} />
            {SUPPORT_PHONE_DISPLAY}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

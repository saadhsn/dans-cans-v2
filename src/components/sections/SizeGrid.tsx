"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ChevronRight, Info, Home, HardHat, Building2 } from 'lucide-react';

const SIZES = [
  { id: '10yd', name: '10 Yard Bin', price: '349', icon: Home, loads: '4-5 Truck Loads' },
  { id: '20yd', name: '20 Yard Bin', price: '459', icon: HardHat, loads: '8-10 Truck Loads' },
  { id: '30yd', name: '30 Yard Bin', price: '589', icon: Building2, loads: '12-15 Truck Loads' },
];

export default function SizeGrid() {
  return (
    <section id="sizes" className="py-24 bg-white transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">
            PICK YOUR <span className="text-brand-primary">DUMPSTER.</span>
          </h2>
          <p className="text-slate-500">Simple, flat-rate pricing based on your project size.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SIZES.map((bin) => (
            <motion.div
              key={bin.id}
              whileHover={{ y: -10 }}
              className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200 group hover:border-brand-primary transition-all"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <bin.icon size={32} />
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black uppercase text-slate-400">Starting at</span>
                  <p className="text-3xl font-black text-brand-dark">${bin.price}</p>
                </div>
              </div>

              <h3 className="text-2xl font-black text-brand-dark mb-2">{bin.name}</h3>
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-[10px] font-black mb-6 uppercase">
                <Truck size={12} /> {bin.loads}
              </div>

              <button className="w-full bg-brand-dark text-white group-hover:bg-brand-primary py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 uppercase tracking-tight">
                Rent This Bin <ChevronRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
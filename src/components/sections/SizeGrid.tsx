"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ChevronRight, Home, HardHat, Scale, Clock } from 'lucide-react';

const SIZES = [
  { 
    id: '10-15yd', 
    name: '10-15 Yard Bin', 
    icon: Home, 
    loads: '4-6 Truck Loads',
    options: [
      { days: '3 Day Rental', price: '399', weight: '1 Ton Included' },
      { days: '7 Day Rental', price: '430', weight: '1 Ton Included' }
    ]
  },
  { 
    id: '20yd', 
    name: '20 Yard Bin', 
    icon: HardHat, 
    loads: '8-10 Truck Loads',
    options: [
      { days: '3 Day Rental', price: '499', weight: '1 Ton Included' },
      { days: '7 Day Rental', price: '530', weight: '1 Ton Included' }
    ]
  }
];

export default function SizeGrid() {
  return (
    <section id="sizes" className="py-24 bg-white transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">
              PICK YOUR <span className="text-brand-primary">DUMPSTER.</span>
            </h2>
            <p className="text-slate-500 font-medium italic">Simple, flat-rate pricing based on your project size and duration.</p>
          </div>
          
          {/* Overweight Policy Card */}
          <div className="bg-brand-primary/5 border border-brand-primary/20 p-4 rounded-2xl flex items-center gap-4">
            <Scale className="text-brand-primary" size={24} />
            <p className="text-xs font-bold text-brand-dark leading-tight">
              OVERWEIGHT POLICY:<br />
              <span className="text-brand-primary font-black">$175 PER TON</span> AFTER INCLUDED WEIGHT
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SIZES.map((bin) => (
            <motion.div
              key={bin.id}
              whileHover={{ y: -10 }}
              className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200 group hover:border-brand-primary transition-all shadow-sm hover:shadow-xl hover:shadow-brand-primary/10"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <bin.icon size={32} />
                </div>
                <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-[10px] font-black uppercase">
                  <Truck size={12} /> {bin.loads}
                </div>
              </div>

              <h3 className="text-3xl font-black text-brand-dark mb-6 italic tracking-tight uppercase">{bin.name}</h3>
              
              {/* Pricing Options Grid */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                {bin.options.map((opt, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center justify-between group-hover:border-brand-primary/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <Clock size={18} className="text-brand-primary" />
                      <div>
                        <p className="text-sm font-black text-brand-dark uppercase tracking-tight">{opt.days}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">{opt.weight}</p>
                      </div>
                    </div>
                    <p className="text-2xl font-black text-brand-dark">${opt.price}</p>
                  </div>
                ))}
              </div>

              <button className="w-full bg-brand-dark text-white group-hover:bg-brand-primary py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-2 uppercase tracking-tight active:scale-95 shadow-lg shadow-brand-dark/10 group-hover:shadow-brand-primary/20">
                Rent This Bin <ChevronRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footnote for transparency */}
        <p className="text-center mt-12 text-slate-400 text-xs font-bold uppercase tracking-widest">
          All prices include delivery, pickup, and the specified tonnage limit.
        </p>
      </div>
    </section>
  );
}
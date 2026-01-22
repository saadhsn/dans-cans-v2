"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ChevronRight, Home, HardHat, Scale, Clock, Ruler, Leaf } from 'lucide-react';

const SIZES = [
  { 
    id: '10yd', 
    name: '10 Yard Bin', 
    icon: Home, 
    dimensions: '10ft L x 8ft W x 4ft H',
    useCase: 'Great for small cleanups & minor projects.',
    loads: '4-5 Truck Loads',
    options: [
      { days: '3 Day Rental', price: '399', weight: '1 Ton Included' },
      { days: '7 Day Rental', price: '430', weight: '1 Ton Included' }
    ]
  },
  { 
    id: '12yd', 
    name: '12 Yard Bin', 
    icon: Home, 
    dimensions: '12ft L x 8ft W x 4ft H',
    useCase: 'Perfect for small remodeling & junk removal.',
    loads: '5-6 Truck Loads',
    options: [
      { days: '3 Day Rental', price: '425', weight: '1.5 Tons Included' },
      { days: '7 Day Rental', price: '460', weight: '1.5 Tons Included' }
    ]
  },
  { 
    id: '15yd', 
    name: '15 Yard Bin', 
    icon: HardHat, 
    dimensions: '12ft L x 8ft W x 4.5-5ft H',
    useCase: 'Ideal for larger cleanups & basement cleanouts.',
    loads: '6-7 Truck Loads',
    options: [
      { days: '3 Day Rental', price: '475', weight: '2 Tons Included' },
      { days: '7 Day Rental', price: '510', weight: '2 Tons Included' }
    ]
  },
  { 
    id: '20yd', 
    name: '20 Yard Bin', 
    icon: HardHat, 
    dimensions: '12ft L x 8ft W x 5.5-6ft H',
    useCase: 'Best for large cleanups & full room remodels.',
    loads: '8-10 Truck Loads',
    options: [
      { days: '3 Day Rental', price: '525', weight: '3 Tons Included' },
      { days: '7 Day Rental', price: '560', weight: '3 Tons Included' }
    ]
  }
];

export default function SizeGrid() {
  return (
    <section id="sizes" className="py-24 bg-white transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 uppercase italic tracking-tighter">
              PICK YOUR <span className="text-brand-primary">DUMPSTER.</span>
            </h2>
            <p className="text-slate-500 font-medium italic">Simple, flat-rate pricing based on your project size and duration.</p>
          </div>
          
          <div className="bg-brand-primary/5 border border-brand-primary/20 p-4 rounded-2xl flex items-center gap-4">
            <Scale className="text-brand-primary" size={24} />
            <p className="text-xs font-bold text-brand-dark leading-tight">
              OVERWEIGHT POLICY:<br />
              <span className="text-brand-primary font-black">$175 PER TON</span> AFTER INCLUDED WEIGHT
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIZES.map((bin) => (
            <motion.div
              key={bin.id}
              whileHover={{ y: -10 }}
              className="bg-slate-50 rounded-[2.5rem] p-6 border border-slate-200 group hover:border-brand-primary transition-all shadow-sm hover:shadow-xl hover:shadow-brand-primary/10 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-white p-3 rounded-xl shadow-sm text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <bin.icon size={24} />
                </div>
                <div className="inline-flex items-center gap-1.5 bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-full text-[9px] font-black uppercase">
                  <Truck size={10} /> {bin.loads}
                </div>
              </div>

              <h3 className="text-2xl font-black text-brand-dark mb-2 italic tracking-tight uppercase">{bin.name}</h3>
              
              <div className="flex items-center gap-2 text-slate-400 mb-4">
                <Ruler size={14} className="text-brand-primary" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{bin.dimensions}</span>
              </div>

              <p className="text-slate-500 text-xs font-medium mb-6 leading-relaxed">
                {bin.useCase}
              </p>
              
              <div className="grid grid-cols-1 gap-3 mb-6 mt-auto">
                {bin.options.map((opt, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-slate-100 flex items-center justify-between group-hover:border-brand-primary/30 transition-colors">
                    <div>
                      <p className="text-[11px] font-black text-brand-dark uppercase tracking-tight">{opt.days}</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase">{opt.weight}</p>
                    </div>
                    <p className="text-xl font-black text-brand-dark">${opt.price}</p>
                  </div>
                ))}
              </div>

              <button className="w-full bg-brand-dark text-white group-hover:bg-brand-primary py-4 rounded-xl font-black transition-all flex items-center justify-center gap-2 uppercase tracking-tight text-sm active:scale-95 shadow-lg shadow-brand-dark/10 group-hover:shadow-brand-primary/20">
                Rent Now <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 border-t border-slate-100 pt-12">
          <div className="flex items-center gap-3 bg-green-50 text-green-700 px-6 py-4 rounded-2xl border border-green-100">
            <Leaf size={24} className="fill-green-600/20" />
            <div>
              <p className="font-black text-sm uppercase tracking-tight">Organic Landscape Dumpsters</p>
              <p className="text-[11px] font-bold opacity-80">Rates may be lower for clean organic waste—ask us for details!</p>
            </div>
          </div>
          
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest max-w-xs text-center md:text-left">
            All prices include delivery, pickup, and the specified tonnage limit.
          </p>
        </div>
      </div>
    </section>
  );
}
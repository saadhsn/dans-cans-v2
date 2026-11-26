"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Scale, Ruler, Leaf, CalendarDays } from 'lucide-react';
import { SUPPORT_PHONE_TEL } from '@/data/contact';
import { ADS_CONVERSIONS, trackAdsConversion, trackRentNowClick } from '@/lib/gtag';

const SIZES = [
  { 
    id: '10yd', 
    name: '10 Yard Bin', 
    dimensions: '10ft L x 8ft W x 4ft H',
    options: [
      { days: '3 Day Rental', price: '399', weight: '1 Ton Included' },
      { days: '7 Day Rental', price: '439', weight: '1 Ton Included' }
    ]
  },
  { 
    id: '12yd', 
    name: '12 Yard Bin', 
    dimensions: '12ft L x 8ft W x 4ft H',
    options: [
      { days: '3 Day Rental', price: '399', weight: '1 Ton Included' },
      { days: '7 Day Rental', price: '439', weight: '1 Ton Included' }
    ]
  },
  { 
    id: '15yd', 
    name: '15 Yard Bin', 
    dimensions: '12ft L x 8ft W x 4.5-5ft H',
    options: [
      { days: '3 Day Rental', price: '399', weight: '1 Ton Included' },
      { days: '7 Day Rental', price: '439', weight: '1 Ton Included' }
    ]
  },
  { 
    id: '20yd', 
    name: '20 Yard Bin', 
    dimensions: '12ft L x 8ft W x 5.5-6ft H',
    options: [
      { days: '3 Day Rental', price: '439', weight: '1 Ton Included' },
      { days: '7 Day Rental', price: '499', weight: '1 Ton Included' }
    ]
  }
];

export default function SizeGrid() {
  return (
    <section id="sizes" className="py-16 md:py-24 bg-white transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 uppercase italic tracking-tighter">
              PICK YOUR <span className="text-brand-primary">DUMPSTER.</span>
            </h2>
            <p className="text-slate-500 font-medium italic">Simple, flat-rate pricing based on your project size and duration.</p>
          </div>
          
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <div className="bg-brand-primary/5 border border-brand-primary/20 p-4 rounded-2xl flex items-center gap-4">
              <Scale className="text-brand-primary" size={24} />
              <p className="text-xs font-bold text-brand-dark leading-tight">
                OVERWEIGHT POLICY:<br />
                <span className="text-brand-primary font-black">$190 PER TON</span> AFTER INCLUDED WEIGHT
              </p>
            </div>
            <div className="bg-brand-primary/5 border border-brand-primary/20 p-4 rounded-2xl flex items-center gap-4">
              <CalendarDays className="text-brand-primary" size={24} />
              <p className="text-xs font-bold text-brand-dark leading-tight">
                EXTRA DAY POLICY:<br />
                <span className="text-brand-primary font-black">$35 PER DAY</span> AFTER INCLUDED RENTAL PERIOD
              </p>
            </div>
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
                <div className="transition-transform group-hover:scale-105">
                  <Image
                    src="/dumpster-icon.svg"
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-black text-brand-dark mb-2 italic tracking-tight uppercase">{bin.name}</h3>
              
              <div className="flex items-center gap-2 text-slate-400 mb-4">
                <Ruler size={14} className="text-brand-primary" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{bin.dimensions}</span>
              </div>

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

              <a
                href={SUPPORT_PHONE_TEL}
                onClick={() => {
                  trackRentNowClick({
                    binId: bin.id,
                    binName: bin.name,
                    ctaLocation: 'size_grid',
                  });
                  trackAdsConversion(ADS_CONVERSIONS.dumpsterLead);
                }}
                className="w-full bg-brand-dark text-white group-hover:bg-brand-primary py-4 rounded-xl font-black transition-all flex items-center justify-center gap-2 uppercase tracking-tight text-sm active:scale-95 shadow-lg shadow-brand-dark/10 group-hover:shadow-brand-primary/20"
              >
                Rent Now <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 border-t border-slate-100 pt-12">
          <div className="flex items-center gap-3 bg-green-50 text-green-700 px-6 py-4 rounded-2xl border border-green-100">
            <Leaf size={24} className="fill-green-600/20" />
            <div>
              <p className="font-black text-sm uppercase tracking-tight">Organic Landscape Dumpsters</p>
              <p className="text-base font-black tracking-tight">Starting at $375</p>
              <p className="text-[11px] font-bold opacity-80">Clean organic waste only. Standard rental policies apply; call for details.</p>
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

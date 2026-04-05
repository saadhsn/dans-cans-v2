"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Truck, Zap, Trash2, CheckCircle2 } from 'lucide-react';
import { SERVICEABLE_ZIPS } from '@/data/serviceArea';

export default function Hero() {
  const [zipCode, setZipCode] = useState("");
  const [status, setStatus] = useState<'idle' | 'valid' | 'invalid' | 'tooShort'>('idle');

  const handleCheckPrices = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipCode.trim();
    if (cleanZip.length === 0) {
      setStatus('idle');
      return;
    }
    if (cleanZip.length < 5) {
      setStatus('tooShort');
      return;
    }

    if (SERVICEABLE_ZIPS.includes(cleanZip)) {
      setStatus('valid');
      const pricingSection = document.getElementById('sizes');
      if (pricingSection) {
        const offset = 80; 
        const elementPosition = pricingSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      setStatus('invalid');
    }
  };

  return (
    <section className="relative min-h-[90vh] bg-[#0B1221] text-white flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* LEFT COLUMN: Content */}
          <div className="lg:w-1/2 z-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-brand-primary" />
                <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">
                  Top-Rated Local Service
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="bg-gradient-to-r from-brand-primary to-orange-400 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-brand-primary/30 inline-flex items-center gap-2 ring-1 ring-white/10">
                  <Trash2 size={14} className="text-white/90" />
                  Talkin’ Trash?
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
                DUMPSTER <br />
                RENTAL <br />
                <span className="text-brand-primary">WITHOUT THE <br /> HASSLE.</span>
              </h1>

              <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
                From home cleanouts to construction sites, Dans Cans provides 
                transparent pricing and driveway-safe delivery.
              </p>

              {/* Functional Zip Form */}
              <form onSubmit={handleCheckPrices} className="flex flex-col sm:flex-row gap-2 max-w-md bg-white rounded-2xl p-2">
                <input 
                  type="text" 
                  placeholder="Enter Zip Code" 
                  value={zipCode}
                  onChange={(e) => {
                    const nextZip = e.target.value.replace(/\D/g, '');
                    setZipCode(nextZip);
                    if (nextZip.length === 0) {
                      setStatus('idle');
                    } else if (nextZip.length < 5) {
                      setStatus('tooShort');
                    } else {
                      setStatus('idle');
                    }
                  }}
                  className="flex-grow px-6 py-4 text-slate-900 focus:outline-none font-bold"
                  aria-label="Zip code"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  autoComplete="postal-code"
                  maxLength={5}
                />
                <button type="submit" className="bg-brand-primary hover:bg-orange-600 text-white font-black px-8 py-4 rounded-xl transition-all uppercase italic">
                  Check Prices
                </button>
              </form>
              {status === 'valid' && (
                <div className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/50 flex items-center gap-3 text-green-400 font-bold">
                  Ready for delivery! We serve {zipCode}.
                </div>
              )}
              {status === 'tooShort' && (
                <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/50 flex items-center gap-3 text-amber-300 font-bold">
                  Please enter a 5-digit ZIP code.
                </div>
              )}
              {status === 'invalid' && (
                <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/50 flex items-center gap-3 text-red-400 font-bold">
                  Sorry, {zipCode} is outside our current zone.
                </div>
              )}

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-8">
                <div className="flex items-center gap-2 text-slate-400">
                  <ShieldCheck size={18} className="text-brand-primary" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-200">Driveway Safe</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Truck size={18} className="text-brand-primary" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-200">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Zap size={18} className="text-brand-primary" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-200">No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle2 size={18} className="text-brand-primary" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-200">Fully Insured</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The Visual Hero (Optimized Size) */}
          <div className="lg:w-1/2 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[650px] aspect-square lg:scale-110 z-10"
            >
              <Image 
                src="/hero-can.png" 
                alt="Branded Dans Cans Dumpster"
                fill
                className="object-contain drop-shadow-[0_35px_35px_rgba(255,107,44,0.2)]"
                priority
              />
            </motion.div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/10 rounded-full blur-[120px] -z-0" />
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Navigation, Search, Building2, Truck } from 'lucide-react';
import { SERVICEABLE_ZIPS, SERVICED_TOWNS } from '../../data/serviceArea';

export default function ServiceArea() {
  const [zip, setZip] = useState("");
  const [status, setStatus] = useState<'idle' | 'valid' | 'invalid' | 'tooShort'>('idle');

  const checkZip = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zip.trim();
    if (!cleanZip) {
      setStatus('idle');
      return;
    }
    if (cleanZip.length < 5) {
      setStatus('tooShort');
      return;
    }
    
    // Check the data file for a match
    if (SERVICEABLE_ZIPS.includes(cleanZip)) {
      setStatus('valid');
    } else {
      setStatus('invalid');
    }
  };

  return (
    <section id="service-area" className="py-16 md:py-24 bg-brand-dark overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Logic & Input */}
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-brand-primary font-black uppercase tracking-widest text-sm mb-6"
            >
              <Navigation size={18} />
              Live Coverage Check
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight uppercase italic tracking-tighter">
              DO WE DELIVER <br />
              <span className="text-brand-primary">TO YOU?</span>
            </h2>
            
            <p className="text-white/60 text-xl mb-12 max-w-lg leading-relaxed">
              We provide 24-hour dumpster delivery across the local metro area. Enter your zip code to confirm.
            </p>

            <form onSubmit={checkZip} className="max-w-md mb-12">
              <div className="relative group">
                <input 
                  type="text" 
                  maxLength={5}
                  value={zip}
                  onChange={(e) => {
                    const nextZip = e.target.value.replace(/\D/g, '');
                    setZip(nextZip);
                    if (nextZip.length === 0) {
                      setStatus('idle');
                    } else if (nextZip.length < 5) {
                      setStatus('tooShort');
                    } else {
                      setStatus('idle');
                    }
                  }}
                  placeholder="Enter Zip Code"
                  className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-5 text-white font-bold text-lg outline-none focus:border-brand-primary transition-all pr-32"
                  aria-label="Zip code"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  autoComplete="postal-code"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-brand-primary text-white px-6 rounded-xl font-black flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
                >
                  <Search size={18} />
                  Check
                </button>
              </div>

              <AnimatePresence mode="wait">
                {status === 'valid' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/50 flex items-center gap-3 text-green-400 font-bold"
                  >
                    <CheckCircle2 size={20} />
                    Ready for delivery! We serve {zip}.
                  </motion.div>
                )}
                {status === 'tooShort' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/50 flex items-center gap-3 text-amber-300 font-bold"
                  >
                    <XCircle size={20} />
                    Please enter a 5-digit ZIP code.
                  </motion.div>
                )}
                {status === 'invalid' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/50 flex items-center gap-3 text-red-400 font-bold"
                  >
                    <XCircle size={20} />
                    Sorry, {zip} is outside our current zone.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* List of Towns (SEO Helper) */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/40 font-bold text-xs uppercase tracking-widest mb-4">
                <Building2 size={14} />
                Major Service Cities
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {SERVICED_TOWNS.map((town) => (
                  <span key={town} className="text-white/60 font-medium hover:text-brand-primary transition-colors cursor-default">
                    {town}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Visual Map */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-square bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20" 
                   style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
              />
              
              <div className="relative w-full h-full">
                {[
                  { t: '20%', l: '24%' },
                  { t: '22%', l: '78%' },
                  { t: '40%', l: '88%' },
                  { t: '62%', l: '82%' },
                  { t: '80%', l: '70%' },
                  { t: '82%', l: '26%' },
                  { t: '60%', l: '12%' },
                  { t: '34%', l: '14%' },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute text-brand-primary"
                    style={{ top: pos.t, left: pos.l }}
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-2xl bg-brand-primary/15 border border-brand-primary/30 flex items-center justify-center shadow-lg shadow-brand-primary/10">
                      <Truck className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />
                    </div>
                  </motion.div>
                ))}
                
                <div
                  className="absolute top-1/2 left-1/2"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                   <div className="w-20 h-20 md:w-28 md:h-28 bg-brand-primary rounded-full blur-[70px] opacity-20 animate-pulse" />
                   <div className="relative w-14 h-14 md:w-20 md:h-20 bg-brand-primary rounded-3xl flex items-center justify-center shadow-2xl shadow-brand-primary/50 rotate-12">
                      <Navigation className="w-6 h-6 md:w-[34px] md:h-[34px] text-white -rotate-12" />
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

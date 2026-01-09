"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      style={{ backgroundColor: 'rgb(var(--hero-bg))' }}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden transition-colors duration-500"
    >
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-brand-primary font-bold mb-6 tracking-widest uppercase text-sm"
          >
            <span className="w-8 h-[2px] bg-brand-primary" />
            Top-Rated Local Service
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ color: 'rgb(var(--hero-text))' }}
            className="text-5xl md:text-8xl font-black leading-[0.9] mb-8"
          >
            DUMPSTER RENTAL <br />
            <span className="text-brand-primary">WITHOUT THE HASSLE.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'rgb(var(--hero-text))' }}
            className="text-xl opacity-60 max-w-2xl mb-12 leading-relaxed"
          >
            From home cleanouts to construction sites, Dans Cans provides 
            transparent pricing, driveway-safe delivery, and 24/7 support.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row gap-4"
          >
            <div className="flex bg-white rounded-2xl p-1 shadow-2xl w-full md:w-auto border border-slate-100">
              <input 
                type="text" 
                placeholder="Enter Zip Code" 
                className="bg-transparent px-6 py-4 text-slate-900 font-bold outline-none w-full md:w-48"
              />
              <button className="bg-brand-primary hover:opacity-90 text-white font-black px-8 py-4 rounded-xl transition-all whitespace-nowrap">
                Check Prices
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-8 border-t border-brand-primary/20 pt-8"
          >
            <div className="flex items-center gap-3 text-brand-primary">
              <ShieldCheck size={20} />
              <span className="font-bold text-xs uppercase tracking-tighter" style={{ color: 'rgb(var(--hero-text))' }}>Driveway Protected</span>
            </div>
            <div className="flex items-center gap-3 text-brand-primary">
              <Truck size={20} />
              <span className="font-bold text-xs uppercase tracking-tighter" style={{ color: 'rgb(var(--hero-text))' }}>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-3 text-brand-primary">
              <Zap size={20} />
              <span className="font-bold text-xs uppercase tracking-tighter" style={{ color: 'rgb(var(--hero-text))' }}>No Hidden Fees</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
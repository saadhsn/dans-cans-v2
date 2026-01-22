// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Truck, ShieldCheck, Zap } from 'lucide-react';

// export default function Hero() {
//   return (
//     <section 
//       style={{ backgroundColor: 'rgb(var(--hero-bg))' }}
//       className="relative min-h-screen flex items-center pt-20 overflow-hidden transition-colors duration-500"
//     >
//       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-3xl" />
      
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="max-w-4xl">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex items-center gap-2 text-brand-primary font-bold mb-6 tracking-widest uppercase text-sm"
//           >
//             <span className="w-8 h-[2px] bg-brand-primary" />
//             Top-Rated Local Service
//           </motion.div>

//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             style={{ color: 'rgb(var(--hero-text))' }}
//             className="text-5xl md:text-8xl font-black leading-[0.9] mb-8"
//           >
//             DUMPSTER RENTAL <br />
//             <span className="text-brand-primary">WITHOUT THE HASSLE.</span>
//           </motion.h1>

//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             style={{ color: 'rgb(var(--hero-text))' }}
//             className="text-xl opacity-60 max-w-2xl mb-12 leading-relaxed"
//           >
//             From home cleanouts to construction sites, Dans Cans provides 
//             transparent pricing, driveway-safe delivery, and 24/7 support.
//           </motion.p>

//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="flex flex-col md:flex-row gap-4"
//           >
//             <div className="flex bg-white rounded-2xl p-1 shadow-2xl w-full md:w-auto border border-slate-100">
//               <input 
//                 type="text" 
//                 placeholder="Enter Zip Code" 
//                 className="bg-transparent px-6 py-4 text-slate-900 font-bold outline-none w-full md:w-48"
//               />
//               <button className="bg-brand-primary hover:opacity-90 text-white font-black px-8 py-4 rounded-xl transition-all whitespace-nowrap">
//                 Check Prices
//               </button>
//             </div>
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="mt-16 flex flex-wrap gap-8 border-t border-brand-primary/20 pt-8"
//           >
//             <div className="flex items-center gap-3 text-brand-primary">
//               <ShieldCheck size={20} />
//               <span className="font-bold text-xs uppercase tracking-tighter" style={{ color: 'rgb(var(--hero-text))' }}>Driveway Protected</span>
//             </div>
//             <div className="flex items-center gap-3 text-brand-primary">
//               <Truck size={20} />
//               <span className="font-bold text-xs uppercase tracking-tighter" style={{ color: 'rgb(var(--hero-text))' }}>Fast Delivery</span>
//             </div>
//             <div className="flex items-center gap-3 text-brand-primary">
//               <Zap size={20} />
//               <span className="font-bold text-xs uppercase tracking-tighter" style={{ color: 'rgb(var(--hero-text))' }}>No Hidden Fees</span>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Below is with the Image.

"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Truck, Zap } from 'lucide-react';

export default function Hero() {
  const [zipCode, setZipCode] = useState("");

  const handleCheckPrices = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length < 5) return;
    
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
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))}
                  className="flex-grow px-6 py-4 text-slate-900 focus:outline-none font-bold"
                  maxLength={5}
                />
                <button type="submit" className="bg-brand-primary hover:bg-orange-600 text-white font-black px-8 py-4 rounded-xl transition-all uppercase italic">
                  Check Prices
                </button>
              </form>

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
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The Visual Hero (Optimized Size) */}
          <div className="lg:w-1/2 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              /* Increased max-width slightly and added lg:scale-110 for better fill */
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
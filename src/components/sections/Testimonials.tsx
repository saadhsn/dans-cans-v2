"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS } from '@/data/reviews'; // Fetching from our data store

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-black uppercase mb-6"
          >
            <CheckCircle size={14} />
            Verified Customer Feedback
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 uppercase italic tracking-tighter leading-none">
            Real Stories from <br />
            <span className="text-brand-primary">The Driveway.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 relative group hover:shadow-xl hover:border-brand-primary/20 transition-all flex flex-col justify-between"
            >
              <div>
                <Quote 
                  className="absolute top-8 right-8 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors" 
                  size={40} 
                />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-primary text-brand-primary" />
                  ))}
                </div>

                <p className="text-slate-600 font-medium mb-8 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-white font-black shrink-0">
                  {review.name[0]}
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-black text-brand-dark leading-none mb-1 truncate">{review.name}</h4>
                  <div className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-slate-400">
                    <span className="text-brand-primary shrink-0">{review.tag}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full shrink-0" />
                    <span className="truncate">{review.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Third-Party Trust Badges */}
        <div className="mt-20 pt-10 border-t border-slate-200 flex flex-wrap justify-center gap-12 items-center opacity-40">
           <div className="flex items-center gap-2 font-black text-xl italic">Google <span className="text-blue-500">Reviews</span></div>
           <div className="flex items-center gap-2 font-black text-xl italic">Yelp<span className="text-red-600">.</span></div>
           <div className="flex items-center gap-2 font-black text-xl italic">Nextdoor</div>
           <div className="flex items-center gap-2 font-black text-xl italic underline">Angi</div>
        </div>
      </div>
    </section>
  );
}
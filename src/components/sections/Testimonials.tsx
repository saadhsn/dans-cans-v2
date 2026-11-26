"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Quote, ArrowUpRight } from 'lucide-react';
import { REVIEWS } from '@/data/reviews'; // Fetching from our data store

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50 transition-colors duration-500">
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
            <div
              key={idx}
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
                  &ldquo;{review.text}&rdquo;
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
            </div>
          ))}
        </div>

        {/* Third-Party Trust Badges */}
        <div className="mt-20 pt-10 border-t border-slate-200 flex flex-wrap justify-center items-center opacity-60">
          <a
            href="https://share.google/W4AQctB4FU5sUERFs"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 sm:gap-2 px-1 py-1 cursor-pointer font-black text-lg sm:text-xl italic text-slate-800 border-b-2 border-slate-500 hover:text-slate-950 hover:border-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 rounded-sm transition-all"
          >
            <span>Google</span>
            <span className="text-blue-700 group-hover:text-blue-800">Reviews</span>
            <ArrowUpRight
              size={16}
              className="ml-0.5 text-blue-700 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

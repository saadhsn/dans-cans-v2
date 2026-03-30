"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROJECT_PHOTOS } from "@/data/projectPhotos";

export default function ProjectGallery() {
  return (
    <section id="project-photos" className="py-16 md:py-24 bg-white transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-xs font-black uppercase mb-6"
          >
            Project Gallery
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 uppercase italic tracking-tighter leading-none">
            REAL PROJECTS.<br />
            <span className="text-brand-primary">REAL CLEANUPS.</span>
          </h2>
          <p className="text-slate-500 font-medium">
            A look at recent driveway cleanouts and jobsite drop-offs across the metro area.
          </p>
        </div>

        <div className="masonry columns-1 sm:columns-2 lg:columns-3">
          {PROJECT_PHOTOS.map((photo, idx) => (
            <div
              key={`${photo.src}-${idx}`}
              className="masonry-item overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-sm hover:shadow-xl hover:border-brand-primary/20 transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

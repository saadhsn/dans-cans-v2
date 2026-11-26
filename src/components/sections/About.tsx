import React from 'react';
import { Award, Users, Heart, Coffee } from 'lucide-react';
import Image from 'next/image';

const values = [
  { icon: Award, title: "15+ Years of Local Project Experience", desc: "Family-owned with deep roots in the communities we serve." },
  { icon: Users, title: "Locally Owned", desc: "Born and raised in the community." },
  { icon: Heart, title: "Community First", desc: "We support local clean-up events." },
  { icon: Coffee, title: "Personal Touch", desc: "No call centers. Talk to us directly." },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Image/Visual Block */}
          <div className="order-2 lg:order-1 lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              {/* We use aspect-[4/5] to define the shape. */}
              <div className="aspect-[4/5] bg-slate-200 flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

                <Image
                  src="/about-team.jpeg"
                  alt="Dans Cans Team"
                  fill
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />

                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white z-20">
                  <p className="text-brand-dark font-black italic text-xl">&ldquo;We treat your driveway like our own.&rdquo;</p>
                  <p className="text-brand-primary font-bold text-sm uppercase mt-1">— Dan, Founder</p>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-0" />
          </div>

          {/* Right Side: Content */}
          <div className="order-1 lg:order-2 lg:w-1/2">
            <div className="inline-flex items-center gap-2 text-brand-primary font-black uppercase tracking-widest text-sm mb-6">
              <div className="w-10 h-[2px] bg-brand-primary" />
              The Local Difference
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-8 leading-tight uppercase italic tracking-tighter">
              BORN IN THE <br />
              <span className="text-brand-primary">COMMUNITY.</span>
            </h2>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
              Dans Cans wasn&apos;t started in a corporate boardroom. It was started in a local driveway. 
              We saw how difficult it was for homeowners to get a straight answer on pricing and 
              reliable delivery times.
            </p>

            <p className="text-slate-600 text-lg mb-12 leading-relaxed font-medium">
              Today, we serve communities across Connecticut with a simple mission: provide the cleanest, 
              fastest, and most transparent dumpster rental service in CT.
            </p>

            {/* Value Grid */}
            <div className="grid grid-cols-2 gap-8">
              {values.map((v, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-primary border border-slate-100">
                    <v.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-brand-dark uppercase text-sm tracking-tight">{v.title}</h4>
                    <p className="text-slate-400 text-xs font-bold leading-tight">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

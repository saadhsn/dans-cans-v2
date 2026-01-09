"use client";
import React from 'react';
import { CalendarCheck, Truck, Recycle } from 'lucide-react';

const steps = [
  {
    icon: CalendarCheck,
    title: "1. Choose Your Size",
    desc: "Select from our 10, 20, or 30 yard bins based on your project needs."
  },
  {
    icon: Truck,
    title: "2. Schedule Delivery",
    desc: "We drop off the bin exactly where you need it with driveway protection."
  },
  {
    icon: Recycle,
    title: "3. We Haul It Away",
    desc: "Once full, let us know. We'll pick it up and handle the disposal responsibly."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-brand-dark mb-4 uppercase italic tracking-tighter">
            Rental Made <span className="text-brand-primary">Easy.</span>
          </h2>
          <div className="h-1.5 w-20 bg-brand-primary mx-auto rounded-full mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:rotate-6 transition-all">
                <step.icon size={32} className="text-brand-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-black text-brand-dark mb-3 uppercase tracking-tight">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
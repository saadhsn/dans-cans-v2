"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { SUPPORT_PHONE_TEL } from '@/data/contact';

const faqs = [
  {
    question: "How long is the standard rental period?",
    answer: "We offer 3-day and 7-day rental options to fit your project needs. Need it longer? No problem. We provide flexible extensions—just give us a call and we’ll take care of it."
  },
  {
    question: "Do I need to be home for delivery or pickup?",
    answer: "Nope! As long as the drop-off area is clear of vehicles or obstructions, our drivers can handle everything. We'll even text you a photo once it's placed."
  },
  {
    question: "How do you protect my driveway?",
    answer: "Every 'Dans Can' is delivered using our Driveway Protection System. We place specialized wooden boards or heavy-duty rubber mats under the rollers to ensure your pavement stays mark-free."
  },
  {
    question: "What happens if I overfill the dumpster?",
    answer: "For safety reasons, we cannot haul dumpsters filled above the 'top rail.' If it's overfilled, our driver will ask you to remove the excess before we can safely transport it."
  },
  {
    question: "Are there any hidden fees for weight?",
    answer: "We believe in transparent pricing. Each bin comes with a generous weight allowance (tonnage). You only pay extra if you exceed that limit, and we'll provide the official landfill scale ticket as proof."
  },
  {
    question: "What size dumpster do I need?",
    answer: "10–15 yard dumpsters are great for cleanouts and small projects. 20 yard dumpsters are best for larger renovations and construction."
  },
  {
    question: "How long can I keep the dumpster?",
    answer: "We offer 3-day and 7-day rentals. Need longer? Just ask."
  },
  {
    question: "Do you offer same-day delivery?",
    answer: "Yes, same-day or next-day delivery is often available. Call or text to check availability."
  },
  {
    question: "What can each dumpster size be used for?",
    answer: "10-yard: attic/basement/garage cleanouts and small remodel debris like a bath update or a single wall tear‑out. 15-yard: kitchen cabinet removal, flooring, multiple rooms of junk, or outdoor work like patio tear‑outs and yard waste. 20-yard: larger renovations such as kitchen remodels or roof tear‑offs, plus whole‑home decluttering or move‑out cleanups."
  },
  {
    question: "When do I pay for the dumpster?",
    answer: "We charge the initial rental to your card when you place the order. Any overage or special-item fees are processed after pickup once we receive the official weight ticket. We’ll email a final invoice detailing all charges."
  },
  {
    question: "Why should I choose Dans Cans?",
    answer: "We’re family‑owned and operated, with responsive local service and fair, competitive pricing. We’re big enough to handle any job, but small enough to deliver the personal attention you’d expect from a one‑person shop."
  },
  {
    question: "How full can I load the dumpster?",
    answer: "Fill only to the marked load line or top rail. Overfilling can cause debris to spill during pickup, and DOT rules prohibit hauling overloaded containers for safety."
  },
  {
    question: "How many hauls are included?",
    answer: "Your rental includes one haul. If you expect multiple loads, we can quote a multi‑haul plan upfront. If you need an extra haul unexpectedly, call us and we can swap the full dumpster for a new one at pickup."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void 
}) {
  return (
    <div className={`border-b border-slate-200 transition-all ${isOpen ? "bg-slate-50/50" : ""}`}>
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left gap-4"
      >
        <span className={`text-lg font-black tracking-tight transition-colors ${isOpen ? "text-brand-primary" : "text-brand-dark"}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
          isOpen ? "bg-brand-primary border-brand-primary text-white" : "border-slate-200 text-slate-400"
        }`}>
          {isOpen ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-slate-600 leading-relaxed max-w-3xl font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <HelpCircle size={16} />
                Support Center
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-brand-dark leading-[0.9] mb-6 uppercase italic">
                Popular <br />
                <span className="text-brand-primary">Questions.</span>
              </h2>
              <p className="text-slate-500 font-medium mb-8">
                Everything you need to know about renting a dumpster with Dans Cans. Can&apos;t find the answer? Chat with us.
              </p>
              <a href={SUPPORT_PHONE_TEL} className="inline-block bg-brand-dark text-white px-8 py-4 rounded-2xl font-black hover:bg-brand-primary transition-all">
                Contact Support
              </a>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:w-2/3 border-t border-slate-200">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const themes = [
  { name: 'safety', color: 'bg-[#ea580c]' },
  { name: 'eco', color: 'bg-[#16a34a]' },
  { name: 'midnight', color: 'bg-[#2563eb]' },
  { name: 'industrial', color: 'bg-[#ca8a04]' },
  { name: 'service', color: 'bg-[#dc2626]' },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('safety');

  const changeTheme = (themeName: string) => {
    const root = document.documentElement;
    if (themeName === 'safety') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', themeName);
    }
    setActiveTheme(themeName);
  };

  return (
    <div className="fixed bottom-8 left-8 z-[9999]">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-slate-900 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/20 hover:scale-110 active:scale-95 transition-all"
        >
          <Palette className="text-white" size={24} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              className="bg-white p-3 rounded-2xl shadow-2xl flex gap-3 border border-slate-200"
            >
              {themes.map((t) => (
                <button
                  key={t.name}
                  onClick={() => changeTheme(t.name)}
                  className="flex flex-col items-center gap-1 group"
                >
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white shadow-inner transition-all group-hover:scale-110`}>
                    {activeTheme === t.name && <Check size={18} strokeWidth={4} />}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400 group-hover:text-slate-900 transition-colors">
                    {t.name}
                  </span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
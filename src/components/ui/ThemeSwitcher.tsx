"use client";

import React, { useEffect, useState } from 'react';
import { Type } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme] = useState(() => {
    if (typeof window === 'undefined') return 'safety';
    return localStorage.getItem('dc-color-theme') || document.documentElement.getAttribute('data-theme') || 'safety';
  });
  const [activeFont, setActiveFont] = useState<'modern' | 'classic'>(() => {
    if (typeof window === 'undefined') return 'modern';
    const storedFont = localStorage.getItem('dc-font-preset');
    return storedFont === 'classic' ? 'classic' : 'modern';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (activeTheme === 'safety') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', activeTheme);
    }
    localStorage.setItem('dc-color-theme', activeTheme);
  }, [activeTheme]);

  useEffect(() => {
    const body = document.body;
    body.classList.remove('font-modern', 'font-classic');
    body.classList.add(activeFont === 'classic' ? 'font-classic' : 'font-modern');
    localStorage.setItem('dc-font-preset', activeFont);
  }, [activeFont]);

  const changeFont = (fontPreset: 'modern' | 'classic') => {
    setActiveFont(fontPreset);
  };

  return (
    <div className="fixed bottom-8 left-8 z-[9999]">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-slate-900 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/20 hover:scale-110 active:scale-95 transition-all"
        >
          <Type className="text-white" size={24} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              className="bg-white p-3 rounded-2xl shadow-2xl flex flex-col gap-3 border border-slate-200"
            >
              <div>
                <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2">
                  <Type size={14} />
                  Font Style
                </div>
                <div className="grid grid-cols-2 gap-2 min-w-44">
                  <button
                    onClick={() => changeFont('modern')}
                    className={`px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wide border transition-colors ${
                      activeFont === 'modern'
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    Modern
                  </button>
                  <button
                    onClick={() => changeFont('classic')}
                    className={`px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wide border transition-colors ${
                      activeFont === 'classic'
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    Classic
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

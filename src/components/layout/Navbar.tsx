"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Truck, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { SUPPORT_PHONE_DISPLAY, SUPPORT_PHONE_TEL } from '@/data/contact';

type LogoVariant = 'between' | 'right' | 'above' | 'below' | 'below-row' | 'replace' | 'none';
const LOGO_VARIANT: LogoVariant = 'right';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function for smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offsets the height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false); // Close mobile menu on click
  };

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 px-6 py-4 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" onClick={handleBrandClick} className="flex flex-col items-start gap-2 group">
          <div className="flex items-start gap-3">
            <div className="bg-brand-primary p-2 rounded-xl shadow-lg shadow-brand-primary/20 transition-transform group-hover:scale-110">
              <Truck className="text-white" size={24} strokeWidth={3} />
            </div>
          {LOGO_VARIANT === 'between' && (
            <div className="relative h-10 w-32">
              <Image
                src="/logo.png"
                alt="Dans Cans Logo"
                fill
                className="object-contain"
                sizes="128px"
                priority
              />
            </div>
          )}
          {LOGO_VARIANT === 'right' && (
            <span className={`text-2xl font-black tracking-tighter transition-colors ${
              isScrolled ? "text-brand-dark" : "text-white"
            }`}>
              DANS<span className="text-brand-primary">CANS</span>
            </span>
          )}
          {LOGO_VARIANT === 'above' ? (
            <div className="flex flex-col leading-none">
              <div className="relative h-8 w-32 -mb-1">
                <Image
                  src="/logo.png"
                  alt="Dans Cans Logo"
                  fill
                  className="object-contain"
                  sizes="128px"
                  priority
                />
              </div>
              <span className={`text-2xl font-black tracking-tighter transition-colors ${
                isScrolled ? "text-brand-dark" : "text-white"
              }`}>
                DANS<span className="text-brand-primary">CANS</span>
              </span>
            </div>
          ) : LOGO_VARIANT === 'below' ? (
            <div className="flex flex-col items-start leading-none">
              <span className={`text-2xl font-black tracking-tighter transition-colors ${
                isScrolled ? "text-brand-dark" : "text-white"
              }`}>
                DANS<span className="text-brand-primary">CANS</span>
              </span>
              <div className="relative h-8 w-32 -mt-1">
                <Image
                  src="/logo.png"
                  alt="Dans Cans Logo"
                  fill
                  className="object-contain"
                  sizes="128px"
                  priority
                />
              </div>
            </div>
          ) : (
            LOGO_VARIANT !== 'replace' && LOGO_VARIANT !== 'right' && LOGO_VARIANT !== 'below-row' && (
              <span className={`text-2xl font-black tracking-tighter transition-colors ${
                isScrolled ? "text-brand-dark" : "text-white"
              }`}>
                DANS<span className="text-brand-primary">CANS</span>
              </span>
            )
          )}
          {LOGO_VARIANT === 'below-row' && (
            <span className={`pt-1 text-2xl font-black tracking-tighter transition-colors ${
              isScrolled ? "text-brand-dark" : "text-white"
            }`}>
              DANS<span className="text-brand-primary">CANS</span>
            </span>
          )}
          {LOGO_VARIANT === 'right' && (
            <div className="relative h-10 w-32">
              <Image
                src="/logo.png"
                alt="Dans Cans Logo"
                fill
                className="object-contain"
                sizes="128px"
                priority
              />
            </div>
          )}
          {LOGO_VARIANT === 'replace' && (
            <>
              <div className="relative h-10 w-36">
                <Image
                  src="/logo.png"
                  alt="Dans Cans Logo"
                  fill
                  className="object-contain"
                  sizes="144px"
                  priority
                />
              </div>
              <span className="sr-only">DANS CANS</span>
            </>
          )}
          </div>
          {LOGO_VARIANT === 'below-row' && (
            <div className="relative h-9 w-36 mt-2 ml-10">
              <Image
                src="/logo.png"
                alt="Dans Cans Logo"
                fill
                className="object-contain"
                sizes="144px"
                priority
              />
            </div>
          )}
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Sizes', 'How it Works', 'FAQ'].map((item) => {
            const id = item.toLowerCase().replace(/\s+/g, '-');
            return (
              <a 
                key={item} 
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className={`text-sm font-bold uppercase tracking-widest hover:text-brand-primary transition-colors cursor-pointer ${
                  isScrolled ? "text-slate-600" : "text-white/80"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* CTA Actions */}
        <div className="flex items-center gap-4">
          <a 
            href={SUPPORT_PHONE_TEL}
            className={`hidden lg:flex items-center gap-2 font-black transition-colors hover:text-brand-primary ${
              isScrolled ? "text-brand-dark" : "text-white"
            }`}
          >
            <Phone size={18} fill="currentColor" className="text-brand-primary" />
            <span>{SUPPORT_PHONE_DISPLAY}</span>
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-menu" className="absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-6 md:hidden shadow-2xl animate-in slide-in-from-top duration-300">
           <a onClick={(e) => scrollToSection(e, 'sizes')} href="#sizes" className="text-xl font-black text-brand-dark uppercase tracking-tight">Dumpster Sizes</a>
           <a onClick={(e) => scrollToSection(e, 'how-it-works')} href="#how-it-works" className="text-xl font-black text-brand-dark uppercase tracking-tight">How It Works</a>
           <a onClick={(e) => scrollToSection(e, 'faq')} href="#faq" className="text-xl font-black text-brand-dark uppercase tracking-tight">FAQ</a>
           <div className="h-px bg-slate-100 w-full" />
           <a href={SUPPORT_PHONE_TEL} className="flex items-center gap-3 text-brand-primary font-black text-2xl">
            <Phone size={24} fill="currentColor" />
            {SUPPORT_PHONE_DISPLAY}
           </a>
        </div>
      )}
    </nav>
  );
}

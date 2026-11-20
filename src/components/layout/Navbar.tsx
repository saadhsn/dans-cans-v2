"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Truck, Menu, X, HandHelping } from 'lucide-react';
import Image from 'next/image';
import { SUPPORT_PHONE_DISPLAY, SUPPORT_PHONE_TEL } from '@/data/contact';
import { ADS_CONVERSIONS, trackAdsConversion, trackCallClick } from '@/lib/gtag';

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
    if (pathname !== "/") {
      setMobileMenuOpen(false);
      return; // Let the browser navigate to the homepage anchor.
    }
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
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
        <div className="hidden xl:flex items-center gap-6">
          {['Sizes', 'How it Works', 'FAQ'].map((item) => {
            const id = item.toLowerCase().replace(/\s+/g, '-');
            return (
              <a 
                key={item} 
                href={`/#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className={`text-sm font-bold uppercase tracking-widest hover:text-brand-primary transition-colors cursor-pointer ${
                  isScrolled ? "text-slate-600" : "text-white/80"
                }`}
              >
                {item}
              </a>
            );
          })}
          <Link
            href="/junk-removal/"
            onClick={() => setMobileMenuOpen(false)}
            aria-current={pathname.startsWith("/junk-removal") ? "page" : undefined}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-black uppercase tracking-wide transition-colors hover:border-brand-primary/50 ${
              pathname.startsWith("/junk-removal")
                ? "border-brand-primary/50 bg-brand-primary/15 text-brand-primary"
                : isScrolled
                  ? "border-brand-primary/20 bg-brand-primary/5 text-brand-dark hover:bg-brand-primary/10"
                  : "border-white/20 bg-white/10 text-white hover:bg-white/15"
            }`}
          >
            <HandHelping size={16} className="text-brand-primary" aria-hidden="true" />
            Junk Removal
            <span className="rounded-full bg-brand-primary px-2 py-0.5 text-[9px] font-black tracking-wider text-white">NEW</span>
          </Link>
        </div>

        {/* CTA Actions */}
        <div className="flex items-center gap-4">
          <a 
            href={SUPPORT_PHONE_TEL}
            onClick={() => {
              trackCallClick('navbar_desktop');
              trackAdsConversion(ADS_CONVERSIONS.dumpsterLead);
            }}
            className={`hidden xl:flex items-center gap-2 font-black transition-colors hover:text-brand-primary ${
              isScrolled ? "text-brand-dark" : "text-white"
            }`}
          >
            <Phone size={18} fill="currentColor" className="text-brand-primary" />
            <span className="hidden 2xl:inline">{SUPPORT_PHONE_DISPLAY}</span>
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden text-brand-primary"
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
        <div id="mobile-nav-menu" className="absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-6 xl:hidden shadow-2xl animate-in slide-in-from-top duration-300">
           <Link onClick={(e) => scrollToSection(e, 'sizes')} href="/#sizes" className="text-xl font-black text-brand-dark uppercase tracking-tight">Dumpster Sizes</Link>
           <Link onClick={(e) => scrollToSection(e, 'how-it-works')} href="/#how-it-works" className="text-xl font-black text-brand-dark uppercase tracking-tight">How It Works</Link>
           <Link onClick={(e) => scrollToSection(e, 'faq')} href="/#faq" className="text-xl font-black text-brand-dark uppercase tracking-tight">FAQ</Link>
           <Link href="/junk-removal/" onClick={() => setMobileMenuOpen(false)} aria-current={pathname.startsWith("/junk-removal") ? "page" : undefined} className="inline-flex items-center gap-3 text-xl font-black text-brand-primary uppercase tracking-tight"><HandHelping size={22} aria-hidden="true" /> Junk Removal <span className="rounded-full bg-brand-primary px-2 py-1 text-[10px] font-black tracking-wider text-white">NEW</span></Link>
           <div className="h-px bg-slate-100 w-full" />
           <a
             href={SUPPORT_PHONE_TEL}
             onClick={() => {
               trackCallClick('navbar_mobile');
               trackAdsConversion(ADS_CONVERSIONS.dumpsterLead);
             }}
             className="flex items-center gap-3 text-brand-primary font-black text-2xl"
           >
            <Phone size={24} fill="currentColor" />
            {SUPPORT_PHONE_DISPLAY}
           </a>
        </div>
      )}
    </nav>
  );
}

// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Phone, Truck, Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Handle scroll effect to change navbar background
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav 
//       className={`fixed top-0 w-full z-[100] transition-all duration-300 px-6 py-4 ${
//         isScrolled 
//           ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Logo Section */}
//         <Link href="/" className="flex items-center gap-2 group">
//           <div className="bg-brand-primary p-2 rounded-xl shadow-lg shadow-brand-primary/20 transition-transform group-hover:scale-110">
//             <Truck className="text-white" size={24} strokeWidth={3} />
//           </div>
//           <span className={`text-2xl font-black tracking-tighter transition-colors ${
//             isScrolled ? "text-brand-dark" : "text-white"
//           }`}>
//             DANS<span className="text-brand-primary">CANS</span>
//           </span>
//         </Link>

//         {/* Desktop Links - Optimized for UX */}
//         <div className="hidden md:flex items-center gap-8">
//           {['Sizes', 'How it Works', 'FAQ'].map((item) => (
//             <Link 
//               key={item} 
//               href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
//               className={`text-sm font-bold uppercase tracking-widest hover:text-brand-primary transition-colors ${
//                 isScrolled ? "text-slate-600" : "text-white/80"
//               }`}
//             >
//               {item}
//             </Link>
//           ))}
//         </div>

//         {/* CTA Actions */}
//         <div className="flex items-center gap-4">
//           <a 
//             href="tel:5555555555" 
//             className={`hidden lg:flex items-center gap-2 font-black transition-colors hover:text-brand-primary ${
//               isScrolled ? "text-brand-dark" : "text-white"
//             }`}
//           >
//             <Phone size={18} fill="currentColor" className="text-brand-primary" />
//             <span>(555) 000-0000</span>
//           </a>
          
//           <button className="bg-brand-primary hover:opacity-90 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-brand-primary/30 transition-all active:scale-95">
//             Book Online
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button 
//             className="md:hidden text-brand-primary"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {mobileMenuOpen && (
//         <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-6 md:hidden shadow-2xl animate-in slide-in-from-top duration-300">
//            <Link onClick={() => setMobileMenuOpen(false)} href="#sizes" className="text-xl font-black text-brand-dark uppercase tracking-tight">Dumpster Sizes</Link>
//            <Link onClick={() => setMobileMenuOpen(false)} href="#how-it-works" className="text-xl font-black text-brand-dark uppercase tracking-tight">How It Works</Link>
//            <Link onClick={() => setMobileMenuOpen(false)} href="#faq" className="text-xl font-black text-brand-dark uppercase tracking-tight">FAQ</Link>
//            <div className="h-px bg-slate-100 w-full" />
//            <a href="tel:5555555555" className="flex items-center gap-3 text-brand-primary font-black text-2xl">
//             <Phone size={24} fill="currentColor" />
//             (555) 000-0000
//            </a>
//         </div>
//       )}
//     </nav>
//   );
// }


//With check price Id working etc. 

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Truck, Menu, X } from 'lucide-react';

export default function Navbar() {
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
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand-primary p-2 rounded-xl shadow-lg shadow-brand-primary/20 transition-transform group-hover:scale-110">
            <Truck className="text-white" size={24} strokeWidth={3} />
          </div>
          <span className={`text-2xl font-black tracking-tighter transition-colors ${
            isScrolled ? "text-brand-dark" : "text-white"
          }`}>
            DANS<span className="text-brand-primary">CANS</span>
          </span>
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
            href="tel:5555555555" 
            className={`hidden lg:flex items-center gap-2 font-black transition-colors hover:text-brand-primary ${
              isScrolled ? "text-brand-dark" : "text-white"
            }`}
          >
            <Phone size={18} fill="currentColor" className="text-brand-primary" />
            <span>(555) 000-0000</span>
          </a>
          
          <button className="bg-brand-primary hover:opacity-90 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-brand-primary/30 transition-all active:scale-95">
            Book Online
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-6 md:hidden shadow-2xl animate-in slide-in-from-top duration-300">
           <a onClick={(e) => scrollToSection(e, 'sizes')} href="#sizes" className="text-xl font-black text-brand-dark uppercase tracking-tight">Dumpster Sizes</a>
           <a onClick={(e) => scrollToSection(e, 'how-it-works')} href="#how-it-works" className="text-xl font-black text-brand-dark uppercase tracking-tight">How It Works</a>
           <a onClick={(e) => scrollToSection(e, 'faq')} href="#faq" className="text-xl font-black text-brand-dark uppercase tracking-tight">FAQ</a>
           <div className="h-px bg-slate-100 w-full" />
           <a href="tel:5555555555" className="flex items-center gap-3 text-brand-primary font-black text-2xl">
            <Phone size={24} fill="currentColor" />
            (555) 000-0000
           </a>
        </div>
      )}
    </nav>
  );
}
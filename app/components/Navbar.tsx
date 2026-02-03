"use client";

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Show navbar when scrolling up or at the top
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }

        // Change background opacity based on scroll
        setIsScrolled(currentScrollY > 50);
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className={`transition-all duration-300 border-b ${isScrolled ? 'bg-black/95 backdrop-blur-xl border-blue-500/30 shadow-lg shadow-blue-500/10' : 'bg-black/60 backdrop-blur-md border-slate-800/50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Enhanced Logo */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                    <div className="text-white font-bold text-sm">🛡️</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-20 animate-pulse"></div>
                </div>
                <div>
                  <h1 className="font-newsflash text-xl bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
                    SECURE CONTAIN PROTECT
                  </h1>
                  <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {['Services', 'Solutions', 'Resources', 'About', 'Contact'].map((item, index) => (
                  <a 
                    key={item} 
                    href="#" 
                    className="relative px-4 py-2 text-slate-300 hover:text-white transition-all duration-300 font-dm text-sm font-medium group overflow-hidden rounded-lg"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-cyan-600/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="hidden md:block">
              <button className="relative px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-dm text-sm font-semibold transition-all duration-300 group overflow-hidden transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                <span className="relative z-10">Get Protected</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="md:hidden">
              <button className="text-slate-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-blue-600/20">
                <svg className="h-6 w-6 transform hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Subtle animated border */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-pulse"></div>
      </div>
    </nav>
  );
}
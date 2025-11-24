
import React, { useState, useEffect } from 'react';
import { Menu, X, Lock } from 'lucide-react';

interface NavbarProps {
  logoUrl: string;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ logoUrl, onOpenLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Metodo F.I.L.O.', href: '#filo' },
    { name: 'Aree', href: '#progetti' },
    { name: 'Contatti', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className={`transition-all duration-300 ${isScrolled ? 'w-12' : 'w-16 md:w-24'}`}>
            <img 
              src={logoUrl} 
              alt="2D Logo" 
              className="w-full h-auto transition-transform duration-500 ease-out transform group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]" 
            />
          </div>
        </a>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-cyan-500 bg-transparent border-none cursor-pointer ${
                isScrolled ? 'text-slate-600' : 'text-white drop-shadow-sm'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#filo')}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 ${
              isScrolled 
                ? 'bg-cyan-600 text-white hover:bg-cyan-700' 
                : 'bg-white text-slate-900 hover:bg-gray-100'
            }`}
          >
            Scopri il Metodo
          </button>
          
          {/* Login Trigger */}
          <button 
            onClick={onOpenLogin}
            className={`p-2 rounded-full transition-all ${
               isScrolled ? 'text-slate-400 hover:text-[#003366] hover:bg-slate-100' : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            title="Area Riservata"
          >
            <Lock className="w-5 h-5" />
          </button>
        </nav>

        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-8 h-8 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
          ) : (
            <Menu className={`w-8 h-8 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-4 px-6 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-lg font-medium text-slate-700 border-b border-gray-100 pb-2 hover:text-cyan-600 bg-transparent"
            >
              {link.name}
            </button>
          ))}
          <button 
             onClick={() => {
               setIsMobileMenuOpen(false);
               onOpenLogin();
             }}
             className="text-left text-lg font-medium text-[#003366] flex items-center gap-2 pt-2"
          >
            <Lock className="w-4 h-4" /> Area Riservata
          </button>
        </div>
      </div>
    </header>
  );
};

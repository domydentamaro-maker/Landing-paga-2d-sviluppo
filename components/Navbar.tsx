
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
    { label: 'Chi Siamo', href: '#mission' },
    { label: 'Metodo F.I.L.O', href: '#filo' },
    { label: 'Permuta', href: '#permuta' },
    { label: 'Glossario', href: '#glossario' },
    { label: 'Area Tecnica', href: '#partners' },
    { label: 'Contatti', href: '#contact' }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Placeholder for Logo (Removed as requested) */}
        <div className="w-24"></div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`font-medium text-sm tracking-wide transition-colors relative group ${
                isScrolled ? 'text-slate-700 hover:text-[#003366]' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-[#003366]' : 'bg-white'
              }`}></span>
            </a>
          ))}
          
          <button 
            onClick={onOpenLogin}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
              isScrolled 
                ? 'border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white' 
                : 'border-white/30 text-white hover:bg-white/20'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Area Riservata</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-8 h-8 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
          ) : (
            <Menu className={`w-8 h-8 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-4 lg:hidden animate-fade-in border-t border-gray-100">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-xl font-serif text-[#003366] py-2 border-b border-gray-100"
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={() => {
              onOpenLogin();
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center justify-center gap-2 mt-4 px-6 py-3 bg-[#003366] text-white rounded-xl font-bold"
          >
            <Lock className="w-4 h-4" />
            ACCEDI AREA RISERVATA
          </button>
        </div>
      )}
    </header>
  );
};

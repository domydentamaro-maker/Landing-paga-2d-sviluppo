
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Values } from './components/Values';
import { Founder } from './components/Founder';
import { ProjectGrid } from './components/ProjectGrid';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { Stats } from './components/Stats';
import { FloatingContact } from './components/FloatingContact';
import { ScrollToTop } from './components/ScrollToTop';
import { CookieBanner } from './components/CookieBanner';
import { ProgressBar } from './components/ProgressBar';
import { FiloMethod } from './components/FiloMethod';
import { LeadMagnet } from './components/LeadMagnet';
import { LoginModal } from './components/LoginModal';
import { Dashboard } from './components/Dashboard';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // LOGO: Premium Version con Sfumature (Gradients)
  const svgString = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220">
  <defs>
    <!-- Gold Gradient for '2' -->
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#BF953F;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#FCF6BA;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#B38728;stop-opacity:1" />
    </linearGradient>
    <!-- Blue Gradient for 'D' -->
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#005C97;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#363795;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Buildings: Elegant thin white lines -->
  <g stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <!-- Left Building -->
    <path d="M80 130 L80 60 L100 50 L100 130" />
    <path d="M80 75 L100 65" />
    <path d="M80 90 L100 80" />
    <path d="M80 105 L100 95" />

    <!-- Center Tall Building -->
    <path d="M100 130 L100 30 L140 10 L140 130" />
    <path d="M100 50 L140 30" />
    <path d="M120 20 L120 130" />

    <!-- Right Building -->
    <path d="M140 130 L140 40 L180 55 L180 130" />
    <path d="M140 60 L180 75" />
    <path d="M140 80 L180 95" />
    
    <!-- Horizon Arc -->
    <path d="M50 140 Q 150 120 250 140" stroke-width="1" opacity="0.6" />
  </g>

  <!-- 2D Text: Uses Gradients defined above -->
  <g font-family="Arial, sans-serif" font-weight="800" font-size="80">
    <text x="110" y="205" text-anchor="end" fill="url(#goldGrad)" filter="drop-shadow(2px 2px 2px rgba(0,0,0,0.3))">2</text>
    <text x="115" y="205" text-anchor="start" fill="url(#blueGrad)" filter="drop-shadow(2px 2px 2px rgba(0,0,0,0.3))">D</text>
  </g>

  <!-- Subtitle -->
  <g font-family="Arial, sans-serif" font-weight="600" text-anchor="middle">
    <text x="150" y="235" font-size="14" fill="white" letter-spacing="4">SVILUPPO IMMOBILIARE</text>
  </g>
</svg>
  `.trim();

  const LOGO_URL = `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;

  // VIDEO: City Timelapse (Attesa link utente)
  // Fallback stabile se il video scade
  const HERO_VIDEO_URL = "https://videos.pexels.com/video-files/3253016/3253016-hd_1920_1080_25fps.mp4"; 
  const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased overflow-x-hidden">
      {loading ? (
        <Preloader logoUrl={LOGO_URL} />
      ) : (
        <div className="animate-fade-in relative">
          <ProgressBar />
          <Navbar logoUrl={LOGO_URL} onOpenLogin={() => setIsLoginOpen(true)} />
          <main>
            <Hero videoUrl={HERO_VIDEO_URL} fallbackImage={HERO_IMAGE_URL} />
            <Values />
            <FiloMethod />
            <LeadMagnet />
            <Founder />
            <Stats />
            <ProjectGrid />
            <Contact />
          </main>
          <Footer logoUrl={LOGO_URL} />
          <FloatingContact />
          <ScrollToTop />
          <CookieBanner />
          
          {/* Auth & Private Area Components */}
          <LoginModal 
            isOpen={isLoginOpen} 
            onClose={() => setIsLoginOpen(false)} 
            onLogin={() => setIsLoggedIn(true)} 
          />
          <Dashboard 
            isOpen={isLoggedIn} 
            onClose={() => setIsLoggedIn(false)} 
            user="Investitore Partner"
          />
        </div>
      )}
    </div>
  );
};

export default App;

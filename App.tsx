
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Values } from './components/Values';
import { Founder } from './components/Founder';
import { ProjectGrid } from './components/ProjectGrid';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Stats } from './components/Stats';
import { FloatingContact } from './components/FloatingContact';
import { ScrollToTop } from './components/ScrollToTop';
import { CookieBanner } from './components/CookieBanner';
import { ProgressBar } from './components/ProgressBar';
import { FiloMethod } from './components/FiloMethod';
import { LeadMagnet } from './components/LeadMagnet';
import { LoginModal } from './components/LoginModal';
import { Dashboard } from './components/Dashboard';
import { ProcessTimeline } from './components/ProcessTimeline';
import { ComparisonTable } from './components/ComparisonTable';
import { Glossary } from './components/Glossary';
import { TechnicalPartners } from './components/TechnicalPartners';
import { TrackRecord } from './components/TrackRecord';

const App: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // LOGO: Solid Metallic Style (Gold/Blue)
  const svgString = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220">
  <!-- Buildings: Elegant thin white lines -->
  <g stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M80 130 L80 60 L100 50 L100 130" />
    <path d="M80 75 L100 65" />
    <path d="M100 130 L100 30 L140 10 L140 130" />
    <path d="M100 50 L140 30" />
    <path d="M140 130 L140 40 L180 55 L180 130" />
    <path d="M140 60 L180 75" />
    <path d="M50 140 Q 150 120 250 140" stroke-width="1.5" opacity="0.8" />
  </g>

  <!-- 2D Text: Solid Metallic Colors with White Outline for visibility -->
  <g font-family="Arial, sans-serif" font-weight="800" font-size="80">
    <text x="110" y="205" text-anchor="end" fill="#D4AF37" stroke="white" stroke-width="1">2</text>
    <text x="115" y="205" text-anchor="start" fill="#005C97" stroke="white" stroke-width="1">D</text>
  </g>

  <!-- Subtitle -->
  <g font-family="Arial, sans-serif" font-weight="600" text-anchor="middle">
    <text x="150" y="235" font-size="14" fill="white" letter-spacing="4" font-weight="bold">SVILUPPO IMMOBILIARE</text>
  </g>
</svg>
  `.trim();

  const LOGO_URL = `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;

  // VIDEO: City Timelapse (Pexels Direct Link)
  const HERO_VIDEO_URL = "https://videos.pexels.com/video-files/3121459/3121459-hd_1920_1080_25fps.mp4"; 
  const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased overflow-x-hidden">
        <div className="animate-fade-in relative">
          <ProgressBar />
          <Navbar logoUrl={LOGO_URL} onOpenLogin={() => setIsLoginOpen(true)} />
          <main>
            <Hero videoUrl={HERO_VIDEO_URL} fallbackImage={HERO_IMAGE_URL} />
            <TrackRecord />
            <Values />
            <FiloMethod />
            <ProcessTimeline />
            <LeadMagnet />
            <ComparisonTable />
            <Founder />
            <Glossary />
            <Stats />
            <ProjectGrid />
            <TechnicalPartners />
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
    </div>
  );
};

export default App;

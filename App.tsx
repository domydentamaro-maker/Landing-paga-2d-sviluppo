
import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrackRecord } from './components/TrackRecord';
import { ProgressBar } from './components/ProgressBar';

// Lazy Load Below-the-fold Content to improve FCP
const Values = lazy(() => import('./components/Values').then(module => ({ default: module.Values })));
const FiloMethod = lazy(() => import('./components/FiloMethod').then(module => ({ default: module.FiloMethod })));
const ProcessTimeline = lazy(() => import('./components/ProcessTimeline').then(module => ({ default: module.ProcessTimeline })));
const LeadMagnet = lazy(() => import('./components/LeadMagnet').then(module => ({ default: module.LeadMagnet })));
const ComparisonTable = lazy(() => import('./components/ComparisonTable').then(module => ({ default: module.ComparisonTable })));
const Founder = lazy(() => import('./components/Founder').then(module => ({ default: module.Founder })));
const Glossary = lazy(() => import('./components/Glossary').then(module => ({ default: module.Glossary })));
const Stats = lazy(() => import('./components/Stats').then(module => ({ default: module.Stats })));
const ProjectGrid = lazy(() => import('./components/ProjectGrid').then(module => ({ default: module.ProjectGrid })));
const TechnicalPartners = lazy(() => import('./components/TechnicalPartners').then(module => ({ default: module.TechnicalPartners })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

// Lazy Load Interactive/Fixed elements
const FloatingContact = lazy(() => import('./components/FloatingContact').then(module => ({ default: module.FloatingContact })));
const ScrollToTop = lazy(() => import('./components/ScrollToTop').then(module => ({ default: module.ScrollToTop })));
const CookieBanner = lazy(() => import('./components/CookieBanner').then(module => ({ default: module.CookieBanner })));
const LoginModal = lazy(() => import('./components/LoginModal').then(module => ({ default: module.LoginModal })));
const Dashboard = lazy(() => import('./components/Dashboard').then(module => ({ default: module.Dashboard })));

// --- Static Definitions ---
const svgString = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220">
  <g stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M80 130 L80 60 L100 50 L100 130" />
    <path d="M80 75 L100 65" />
    <path d="M100 130 L100 30 L140 10 L140 130" />
    <path d="M100 50 L140 30" />
    <path d="M140 130 L140 40 L180 55 L180 130" />
    <path d="M140 60 L180 75" />
    <path d="M50 140 Q 150 120 250 140" stroke-width="1.5" opacity="0.8" />
  </g>
  <g font-family="Arial, sans-serif" font-weight="800" font-size="80">
    <text x="110" y="205" text-anchor="end" fill="#D4AF37" stroke="white" stroke-width="1">2</text>
    <text x="115" y="205" text-anchor="start" fill="#005C97" stroke="white" stroke-width="1">D</text>
  </g>
  <g font-family="Arial, sans-serif" font-weight="600" text-anchor="middle">
    <text x="150" y="235" font-size="14" fill="white" letter-spacing="4" font-weight="bold">SVILUPPO IMMOBILIARE</text>
  </g>
</svg>
`.trim();

const LOGO_URL = `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
const HERO_VIDEO_URL = "https://videos.pexels.com/video-files/3121459/3121459-hd_1920_1080_25fps.mp4"; 
// Optimized WebP image for Hero Fallback (Matches index.html preload)
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=75&fm=webp";

const App: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased overflow-x-hidden">
        <div className="animate-fade-in relative">
          <ProgressBar />
          {/* Critical Path Components (Loaded Immediately) */}
          <Navbar logoUrl={LOGO_URL} onOpenLogin={() => setIsLoginOpen(true)} />
          <main>
            <Hero videoUrl={HERO_VIDEO_URL} fallbackImage={HERO_IMAGE_URL} />
            <TrackRecord />
            
            {/* Below the Fold Components (Lazy Loaded) */}
            <Suspense fallback={<div className="py-24 text-center text-gray-300"></div>}>
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
            </Suspense>
          </main>
          
          <Suspense fallback={null}>
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
          </Suspense>
        </div>
    </div>
  );
};

export default App;

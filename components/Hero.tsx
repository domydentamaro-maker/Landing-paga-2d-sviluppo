
import React from 'react';
import { ArrowRight, Building2, Factory } from 'lucide-react';

interface HeroProps {
  videoUrl: string;
  fallbackImage: string;
}

export const Hero: React.FC<HeroProps> = ({ videoUrl, fallbackImage }) => {
  
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calcolo offset per navbar
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden font-sans flex flex-col justify-center items-center pt-28 md:pt-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata" // Optimized for LCP
          className="w-full h-full object-cover"
          poster={fallbackImage}
        >
          <source src={videoUrl} type="video/mp4" />
          <img src={fallbackImage} alt="Background" className="w-full h-full object-cover" />
        </video>
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001a33]/60 via-[#003366]/40 to-[#001a33]/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 text-center flex flex-col items-center">
        
        {/* Main Headline */}
        <div className="mb-8 animate-fade-in-up w-full max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold mb-6 tracking-tight drop-shadow-2xl">
                Sviluppo. Valorizzazione. Futuro.
            </h1>
            <p className="text-cyan-100 text-lg md:text-2xl font-light tracking-wide max-w-3xl mx-auto drop-shadow-md">
                Trasformiamo visioni in asset immobiliari ad alto rendimento.
            </p>
        </div>

        {/* CTA Container */}
        <div className="flex flex-col items-center gap-6 w-full max-w-4xl animate-fade-in-up animation-delay-300">
          
          {/* Row 1: Main Actions */}
          <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-4">
            
            {/* Button 1: Primary - White/Gradient */}
            <a 
              href="#filo"
              onClick={(e) => handleScrollTo(e, 'filo')}
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-[#003366] transition duration-300 ease-out rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] bg-white hover:scale-105 min-w-[280px]"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
              <span className="relative group-hover:text-white text-lg tracking-wider transition-colors duration-300 flex items-center gap-2">
                SCOPRI IL METODO F.I.L.O.
              </span>
            </a>

            {/* Button 2: Secondary - Glass/Dark */}
            <a 
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white transition duration-300 ease-out rounded-full border border-white/30 bg-[#003366]/40 backdrop-blur-md hover:bg-[#003366] hover:border-[#003366] hover:scale-105 min-w-[280px] hover:shadow-xl"
            >
               <span className="relative text-lg tracking-wider flex items-center gap-2">
                 CANDIDA IL TUO TERRENO
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </span>
            </a>

            {/* Button 3: Tertiary - Cyan/Glass */}
            <a 
              href="#progetti"
              onClick={(e) => handleScrollTo(e, 'progetti')}
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white transition duration-300 ease-out rounded-full border border-cyan-400/40 bg-cyan-900/30 backdrop-blur-md hover:bg-cyan-600 hover:border-cyan-500 hover:scale-105 min-w-[280px] hover:shadow-xl shadow-[0_0_15px_rgba(6,182,212,0.1)]"
            >
               <span className="relative text-lg tracking-wider flex items-center gap-2">
                 SCOPRI LE OPPORTUNITÀ
                 <Building2 className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
               </span>
            </a>
          </div>

          {/* Row 2: Special Focus Tertiary */}
          <div className="w-full flex justify-center mt-2">
             <a 
               href="#zes" 
               onClick={(e) => handleScrollTo(e, 'zes')}
               className="group relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-medium text-amber-100 transition duration-300 ease-out rounded-xl border border-amber-500/30 bg-black/40 backdrop-blur-md hover:bg-black/60 hover:border-amber-500/60 w-full md:w-auto min-w-[320px] cursor-pointer"
             >
               <span className="relative flex items-center gap-3 tracking-wide uppercase text-sm md:text-base">
                 <Factory className="w-5 h-5 text-amber-400" />
                 <span className="border-r border-amber-500/30 pr-3 mr-1">Divisione Corporate</span>
                 <span className="group-hover:text-amber-300 transition-colors">Sviluppo Terziario & ZES</span>
               </span>
             </a>
          </div>

        </div>
      </div>
    </section>
  );
};

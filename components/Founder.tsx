
import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { Quote } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            
            {/* Founder Image */}
            <div className="w-full md:w-5/12 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                {/* Optimized WebP Image */}
                <img 
                  src="https://materiaprima.2dsviluppoimmobiliare.it/wp-content/uploads/2026/01/Domenico-Dentamaro-2D-Sviluppo-Immobiliare.jpg" 
                  alt="Domenico Dentamaro" 
                  loading="lazy"
                  width="600"
                  height="750"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-2xl font-serif font-bold">Domenico Dentamaro</p>
                  <p className="text-cyan-300 text-sm uppercase tracking-widest">Fondatore & Sviluppatore</p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-7/12">
              <Quote className="w-16 h-16 text-cyan-200 mb-8 opacity-50" />
              <h2 className="text-3xl md:text-4xl font-serif text-[#003366] mb-8 leading-tight">
                "Sviluppare non significa solo edificare. Significa intuire il potenziale di un luogo prima che diventi realtà."
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                In 2D Sviluppo Immobiliare, ci occupiamo di **gestione e valorizzazione degli investimenti**. Il nostro lavoro inizia molto prima della posa della prima pietra: parte dallo studio del territorio, dall'analisi normativa e dalla visione strategica.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Il mio obiettivo è guidare proprietari terrieri e investitori attraverso il complesso mondo dello sviluppo urbanistico, trasformando aree inattive in **asset di valore** per la città e per il portafoglio.
              </p>
              
              <div className="flex items-center gap-6">
                <div className="h-px flex-1 bg-slate-300"></div>
                <span className="font-handwriting text-3xl text-[#003366]">Domenico Dentamaro</span>
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </div>
      <style>{`
        .font-handwriting {
          font-family: 'Brush Script MT', cursive;
        }
      `}</style>
    </section>
  );
};

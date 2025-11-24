import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const ProjectGrid: React.FC = () => {
  const items = [
    {
      id: '1',
      title: 'Materia Prima',
      subtitle: 'Analisi & Suoli',
      description: 'La selezione del suolo è il primo passo dell\'investimento. Analizziamo le potenzialità edificatorie e il contesto urbanistico per garantire il massimo valore.',
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop',
      linkText: 'Valuta Terreni',
      color: 'from-stone-800/80 to-stone-900/90'
    },
    {
      id: '2',
      title: 'Visioni',
      subtitle: 'Sviluppo & Concept',
      description: 'Trasformiamo numeri e planimetrie in progetti vivi. Dallo studio di fattibilità al concept architettonico, diamo forma al futuro dell\'area.',
      imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800',
      linkText: 'Scopri i Concept',
      color: 'from-[#003366]/80 to-[#001a33]/90'
    },
    {
      id: '3',
      title: 'Blog & News',
      subtitle: 'Mercato & Trend',
      description: 'Analisi del mercato immobiliare barese, normative urbanistiche e opportunità di investimento. Il punto di vista esperto sul settore.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015', // changed to finance/chart image
      linkText: 'Leggi gli Approfondimenti',
      color: 'from-cyan-900/80 to-slate-900/90'
    }
  ];

  return (
    <section id="progetti" className="py-24 bg-white relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#003366] mb-4">Aree di Competenza</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-[#003366] mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Un approccio integrato allo sviluppo immobiliare: dalla terra nuda alla creazione di valore.
            </p>
          </div>
        </RevealOnScroll>

        {/* Standard Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <RevealOnScroll key={item.id} delay={index * 150}>
              <div className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image Background */}
                <div className="absolute inset-0">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-70 group-hover:opacity-85 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-2 block">
                      {item.subtitle}
                    </span>
                    <h3 className="text-3xl font-serif font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-base leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                      {item.description}
                    </p>
                    
                    <span className="inline-flex items-center gap-2 text-white font-bold border-b border-cyan-400 pb-1 group-hover:text-cyan-300 transition-colors">
                      {item.linkText}
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
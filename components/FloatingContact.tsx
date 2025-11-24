import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Chat Bubble Notification */}
      <div className="bg-white p-3 rounded-lg shadow-lg mb-2 animate-fade-in-up max-w-[200px] border border-gray-100 hidden md:block">
        <p className="text-sm text-slate-700">Ciao! 👋 <br/>Posso aiutarti a trovare casa?</p>
      </div>

      <a 
        href="#contact" 
        className="relative bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Chatta su WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        
        {/* Notification Dot */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
      </a>
    </div>
  );
};
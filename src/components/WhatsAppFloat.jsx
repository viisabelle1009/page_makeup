import React from 'react';
import { siteContent } from '../data/siteContent.js';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const { info } = siteContent;
  const whatsappUrl = `https://wa.me/${info.whatsappNumero}?text=${encodeURIComponent(
    'Olá Vitória! Gostaria de agendar um horário para maquiagem / cuidados com a pele.'
  )}`;

  return (
    <aside aria-label="Atendimento pelo WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        aria-label="Conversar no WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          Agende seu horário
        </span>
      </a>
    </aside>
  );
}

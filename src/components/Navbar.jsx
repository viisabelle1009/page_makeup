import React, { useState, useEffect } from 'react';
import { siteContent } from '../data/siteContent.js';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${siteContent.info.whatsappNumero}?text=${encodeURIComponent(
    'Olá Vitória! Gostaria de informações sobre disponibilidade para agendamento de maquiagem.'
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F3EF]/95 backdrop-blur-md shadow-sm border-b border-[#302521]/10 py-3'
          : 'bg-[#F8F3EF] py-4 border-b border-[#302521]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Logotipo Tipográfico Conforme Identidade Visual */}
          <a href="#" className="flex flex-col group text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-[0.2em] text-[#302521] uppercase transition-colors group-hover:text-[#936449]">
                VITÓRIA SILVA
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-4 bg-[#936449]/40"></span>
              <span className="text-[10px] tracking-[0.3em] font-medium text-[#936449] uppercase">
                MAKEUP & SKIN CARE
              </span>
              <span className="h-[1px] w-4 bg-[#936449]/40"></span>
            </div>
          </a>

          {/* Navegação Desktop (4 Seções Solicitadas) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#302521]/80">
            <a
              href="#apresentacao"
              className="hover:text-[#936449] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#936449] after:transition-all"
            >
              Apresentação
            </a>
            <a
              href="#portfolio"
              className="hover:text-[#936449] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#936449] after:transition-all"
            >
              Portfólio
            </a>
            <a
              href="#servicos"
              className="hover:text-[#936449] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#936449] after:transition-all"
            >
              Serviços
            </a>
            <a
              href="#contato"
              className="hover:text-[#936449] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#936449] after:transition-all"
            >
              Contato
            </a>
          </nav>

          {/* Botão de Ação Rápida WhatsApp */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#936449] hover:bg-[#302521] text-white text-xs font-semibold tracking-wider uppercase rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Horário</span>
            </a>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#302521] hover:bg-[#FAF6F2] transition-colors"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Retrátil */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-3 border-t border-[#302521]/10 bg-[#F8F3EF] flex flex-col gap-3">
            <a
              href="#apresentacao"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-[#302521] hover:bg-[#FAF6F2] rounded-md"
            >
              Apresentação
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-[#302521] hover:bg-[#FAF6F2] rounded-md"
            >
              Portfólio
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-[#302521] hover:bg-[#FAF6F2] rounded-md"
            >
              Serviços
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-[#302521] hover:bg-[#FAF6F2] rounded-md"
            >
              Contato
            </a>
            <div className="pt-2 px-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#936449] text-white text-xs font-semibold tracking-wider uppercase rounded-full shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

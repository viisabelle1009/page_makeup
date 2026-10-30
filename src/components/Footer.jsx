import React from 'react';
import { siteContent } from '../data/siteContent.js';
import { MessageCircle, Instagram, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { info } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#302521] text-[#EFE8E1] pt-16 pb-12 border-t border-[#936449]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10 text-left">
          
          {/* Coluna 1: Marca & Slogan */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-[0.2em] text-[#F8F3EF] uppercase">
                VITÓRIA SILVA
              </span>
              <span className="text-[10px] tracking-[0.3em] font-medium text-[#C5A059] uppercase mt-1">
                MAKEUP & SKIN CARE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#EFE8E1]/80 leading-relaxed font-light">
              "{info.slogan}"
            </p>
            <p className="text-xs text-[#EFE8E1]/60 leading-relaxed">
              Maquiagem social, noivas, madrinhas, debutantes, limpeza de pele profunda e design de sobrancelhas.
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#EFE8E1]/80">
              <li>
                <a href="#apresentacao" className="hover:text-white transition-colors">
                  Apresentação
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfólio de Trabalhos
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Tabela de Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Agendar Horário
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Especialidades */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs text-[#EFE8E1]/70">
              <li>• Maquiagem Blindada à Prova d'Água</li>
              <li>• Produção VIP de Noivas e Casamento Civil</li>
              <li>• Produção de Madrinhas e Debutantes</li>
              <li>• Design de Sobrancelhas Personalizado</li>
              <li>• Limpeza de Pele com Dermocosméticos</li>
              <li>• Atendimento Confortável a Domicílio</li>
            </ul>
          </div>

          {/* Coluna 4: Contatos & Redes */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] mb-4">
              Canais Oficiais
            </h4>
            <a
              href={`https://wa.me/${info.whatsappNumero}?text=${encodeURIComponent('Olá Vitória Silva!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs sm:text-sm text-[#EFE8E1] hover:text-[#C5A059] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{info.whatsappDisplay}</span>
            </a>
            <a
              href={info.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs sm:text-sm text-[#EFE8E1] hover:text-[#C5A059] transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
              <span>{info.instagramUsuario}</span>
            </a>
            <a
              href={`mailto:${info.email}`}
              className="flex items-center gap-2.5 text-xs text-[#EFE8E1]/80 hover:text-white transition-colors break-all"
            >
              <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>{info.email}</span>
            </a>
            <p className="text-[11px] text-[#EFE8E1]/60 pt-2">
              📍 {info.atendimento} — {info.regiao}
            </p>
          </div>

        </div>

        {/* Linha Inferior com Copyright & Voltar ao Topo */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFE8E1]/60">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Vitória Silva Makeup. Todos os direitos reservados.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs text-[#EFE8E1] transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

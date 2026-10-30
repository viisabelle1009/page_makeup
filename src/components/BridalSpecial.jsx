import React from 'react';
import { siteContent } from '../data/siteContent.js';
import { Sparkles, MessageCircle, Heart, CheckCircle2 } from 'lucide-react';

export default function BridalSpecial() {
  const { info } = siteContent;
  const whatsappUrl = `https://wa.me/${info.whatsappNumero}?text=${encodeURIComponent(
    'Olá Vitória! Gostaria de receber a proposta exclusiva para noivas (Dia da Noiva / Maquiagem Blindada) e checar disponibilidade para a data do meu casamento.'
  )}`;

  const diferenciaisNoiva = [
    {
      titulo: 'Maquiagem Blindada à Prova de Emoções',
      desc: 'Técnica exclusiva de alta fixação que não transfere e resiste a lágrimas, calor, abraços e suor durante toda a festa.',
    },
    {
      titulo: 'Prévia de Maquiagem & Cronograma',
      desc: 'Testamos antecipadamente o visual perfeito para o seu vestido e estilo, garantindo total tranquilidade no grande dia.',
    },
    {
      titulo: 'Skin Care & Preparação Calmante',
      desc: 'Higienização e hidratação profunda da pele com produtos premium antes da maquiagem para um acabamento aveludado impecável.',
    },
    {
      titulo: 'Assessoria até o Altar',
      desc: 'Auxílio na colocação do véu, grinalda e retoques finais até a saída para a cerimônia religiosa ou civil.',
    },
  ];

  return (
    <section className="py-20 bg-[#302521] text-white relative overflow-hidden">
      {/* Luzes quentes decorativas no fundo */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#936449]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#A16F55]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner de Destaque Superior */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6F2]/10 border border-[#FAF6F2]/20 text-[#FAF6F2] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Espaço Especial Noivas</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F8F3EF] leading-tight mb-6">
            O Dia Mais Especial da Sua Vida Merece uma Produção Inesquecível
          </h2>

          <p className="text-base sm:text-lg text-[#EFE8E1]/85 leading-relaxed font-light">
            O atendimento de noiva de Vitória Silva foi concebido para que você se sinta calma, radiante e confiante do primeiro minuto até o último abraço na pista de dança.
          </p>
        </div>

        {/* Grid com Destaque: Fotos Reais das Noivas e Lista de Diferenciais */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Fotos Noivas Grid Colagem (6 Colunas) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg group">
                <img
                  src={import.meta.env.BASE_URL + "images/portfolio/noiva-veo-luxo.jpg"}
                  alt="Noiva com véu e buquê em maquiagem profissional"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg group">
                <img
                  src={import.meta.env.BASE_URL + "images/portfolio/noiva-casamento-civil.jpg"}
                  alt="Noiva assinando casamento civil com maquiagem delicada"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg group">
                <img
                  src={import.meta.env.BASE_URL + "images/portfolio/noiva-sorriso.jpg"}
                  alt="Sorriso de noiva produzida por Vitória Silva"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg group">
                <img
                  src={import.meta.env.BASE_URL + "images/portfolio/noiva-carro.jpg"}
                  alt="Chegada da noiva no carro de casamento"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Coluna de Conteúdo e Vantagens (6 Colunas) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="space-y-6 mb-8">
              {diferenciaisNoiva.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full bg-[#936449] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-semibold text-[#F8F3EF] mb-1">
                      {item.titulo}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#EFE8E1]/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chamada para Ação Noivas */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#936449]/40 to-[#A16F55]/20 border border-[#936449]/50 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#EFE8E1] font-semibold mb-1">
                  Atendimento Exclusivo
                </p>
                <p className="text-sm font-light text-[#EFE8E1]/90">
                  Vagas limitadas por final de semana para garantir dedicação total.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#936449] hover:bg-white hover:text-[#302521] text-white text-xs font-semibold tracking-wider uppercase rounded-full shadow-lg transition-all duration-300 shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar Data de Noiva</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

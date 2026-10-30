import React from 'react';
import { siteContent } from '../data/siteContent.js';
import { Sparkles, Clock, Check, MessageCircle } from 'lucide-react';

export default function Services() {
  const { servicos, info } = siteContent;

  const handleBooking = (servico) => {
    const texto = `Olá Vitória! Tenho interesse no serviço de "${servico.nome}" (${servico.preco}). Gostaria de verificar horários disponíveis para agendar.`;
    return `https://wa.me/${info.whatsappNumero}?text=${encodeURIComponent(texto)}`;
  };

  return (
    <section id="servicos" className="py-20 bg-[#F8F3EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#936449] mb-2">
            <span>Menu de Serviços</span>
            <span>♡</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#302521] tracking-tight mb-4">
            Cuidados & Beleza Especializada
          </h2>
          <p className="text-sm sm:text-base text-[#302521]/75 leading-relaxed">
            Procedimentos realizados com técnica aprimorada, biossegurança rigorosa e produtos de alto padrão para realçar o que há de melhor em você.
          </p>
        </div>

        {/* Grid de Cards de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className={`relative bg-white rounded-3xl p-7 flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1 ${
                servico.destaque
                  ? 'border-[#936449] shadow-xl ring-2 ring-[#936449]/20'
                  : 'border-[#302521]/10 shadow-sm hover:shadow-lg'
              }`}
            >
              {/* Badge de Destaque para Noivas */}
              {servico.destaque && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#936449] text-white text-[11px] font-semibold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
                  Mais Procurado
                </div>
              )}

              <div>
                {/* Categoria & Duração */}
                <div className="flex items-center justify-between text-xs text-[#936449] font-medium mb-3">
                  <span className="uppercase tracking-wider font-semibold">
                    {servico.categoria}
                  </span>
                  <div className="flex items-center gap-1 text-[#302521]/60">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{servico.duracao}</span>
                  </div>
                </div>

                {/* Nome do Serviço */}
                <h3 className="text-xl font-serif font-bold text-[#302521] mb-2">
                  {servico.nome}
                </h3>

                {/* Preço Editável */}
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#936449]">
                    {servico.preco}
                  </span>
                  <span className="text-xs text-[#302521]/50">*valor base editável</span>
                </div>

                {/* Descrição */}
                <p className="text-xs sm:text-sm text-[#302521]/70 leading-relaxed mb-6">
                  {servico.descricao}
                </p>

                {/* Itens Inclusos */}
                <div className="space-y-2.5 pt-4 border-t border-[#302521]/10 mb-8">
                  <p className="text-xs font-semibold text-[#302521] uppercase tracking-wider">
                    O que está incluso:
                  </p>
                  {servico.itens.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#302521]/80">
                      <div className="w-4 h-4 rounded-full bg-[#936449]/10 text-[#936449] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão de Agendamento Específico */}
              <div>
                <a
                  href={handleBooking(servico)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors duration-200 ${
                    servico.destaque
                      ? 'bg-[#936449] hover:bg-[#302521] text-white shadow-md'
                      : 'bg-[#FAF6F2] hover:bg-[#302521] text-[#302521] hover:text-white border border-[#302521]/10'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar Este Serviço</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Aviso de Personalização de Pacotes */}
        <div className="mt-12 text-center text-xs text-[#302521]/60">
          <p>
            * Necessita de atendimento para grupo de madrinhas ou formandas? Montamos pacotes personalizados com valores exclusivos via WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
}

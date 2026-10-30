import React from 'react';
import { siteContent } from '../data/siteContent.js';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const { depoimentos } = siteContent;

  return (
    <section className="py-20 bg-[#FAF6F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Depoimentos de Clientes */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#936449] mb-2">
            <span>Depoimentos Reais</span>
            <span>♡</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#302521] tracking-tight mb-4">
            Histórias de Confiança & Autoestima
          </h2>
          <p className="text-sm sm:text-base text-[#302521]/75">
            O carinho e a satisfação de quem confiou seu momento especial aos cuidados de Vitória Silva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((dep) => (
            <div
              key={dep.id}
              className="bg-white rounded-3xl p-8 border border-[#302521]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left relative"
            >
              <div className="text-[#936449]/20 absolute top-6 right-6">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Estrelas */}
                <div className="flex items-center gap-1 text-[#C5A059] mb-4">
                  {[...Array(dep.avaliacao)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Texto do Depoimento */}
                <p className="text-sm text-[#302521]/80 leading-relaxed italic mb-6">
                  "{dep.texto}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#302521]/10">
                <h4 className="font-serif font-bold text-[#302521] text-base">
                  {dep.nome}
                </h4>
                <span className="text-xs text-[#936449] font-medium">
                  {dep.evento}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

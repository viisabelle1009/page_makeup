import React from 'react';
import { siteContent } from '../data/siteContent.js';
import { MessageCircle, ArrowRight, Home, ShieldCheck, Sparkles, Heart } from 'lucide-react';

export default function Hero() {
  const { info, pilares } = siteContent;
  const whatsappUrl = `https://wa.me/${info.whatsappNumero}?text=${encodeURIComponent(
    'Olá Vitória Silva! Vi sua landing page e gostaria de agendar uma maquiagem / tirar dúvidas.'
  )}`;

  return (
    <section id="apresentacao" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Elementos sutis de fundo decorativo floral/luxo */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#936449]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#A16F55]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna Texto (7 colunas no desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Tagline e coroa sutil */}
            <div className="flex items-center gap-2 mb-4 text-[#936449]">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                Vitória Silva Makeup & Skin Care
              </span>
              <span className="text-sm font-serif">♡</span>
            </div>

            {/* Título Principal Fiel à Referência */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-[#302521] leading-[1.15] tracking-tight mb-6">
              Realce o que te faz <span className="italic font-normal text-[#936449]">única</span>, com beleza e cuidado.
            </h1>

            {/* Descrição da Maquiadora */}
            <p className="text-base sm:text-lg text-[#302521]/80 leading-relaxed max-w-2xl mb-8">
              Especialista em maquiagem social de alta durabilidade, produções para noivas,
              debutantes e cuidados faciais com a pele. Com atendimento personalizado a domicílio
              e no estúdio, utilizo técnicas exclusivas e produtos de alta fixação para transformar o
              seu momento em uma experiência inesquecível de confiança e autoestima.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#936449] hover:bg-[#302521] text-white text-sm font-semibold tracking-wider uppercase rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Agendar no WhatsApp</span>
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-[#FAF6F2] text-[#302521] border border-[#302521]/15 text-sm font-semibold tracking-wider uppercase rounded-full shadow-sm hover:shadow transition-all duration-300"
              >
                <span>Ver Portfólio</span>
                <ArrowRight className="w-4 h-4 text-[#936449]" />
              </a>
            </div>

            {/* Selo de Contato Rápido Direto */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#302521]/10 text-xs sm:text-sm text-[#302521]/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#936449]"></span>
                <span>WhatsApp: <strong>{info.whatsappDisplay}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#936449]"></span>
                <span>Instagram: <strong>{info.instagramUsuario}</strong></span>
              </div>
            </div>

          </div>

          {/* Coluna Imagem Destaque (5 colunas no desktop) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Moldura de Fundo Decorativa */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#936449]/20 via-[#FAF6F2] to-[#A16F55]/20 rounded-3xl -rotate-2 transform transition-transform group-hover:rotate-0" />
              
              {/* Card da Imagem com cantos arredondados e borda dourada sutil */}
              <div className="relative overflow-hidden rounded-3xl bg-white border border-[#936449]/20 shadow-xl">
                <img
                  src={import.meta.env.BASE_URL + "images/vitoria/vitoria-portrait.jpg"}
                  alt="Vitória Silva Maquiadora Profissional com pincéis de maquiagem"
                  className="w-full h-[460px] sm:h-[500px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />

                {/* Tarja discreta sobreposta na imagem com informações da profissional */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#302521]/90 via-[#302521]/60 to-transparent p-6 text-white text-left">
                  <div className="flex items-center gap-1.5 text-[#EFE8E1] text-xs font-medium tracking-widest uppercase mb-1">
                    <span>Profissional Certificada</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-white">Vitória Silva</h3>
                  <p className="text-xs text-[#EFE8E1]/80 mt-1">
                    Maquiagem Social, Noivas & Cuidados com a Pele
                  </p>
                </div>
              </div>

              {/* Badge flutuante de Atendimento a Domicílio */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white py-2.5 px-4 rounded-2xl shadow-lg border border-[#936449]/20 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#936449]/10 flex items-center justify-center text-[#936449]">
                  <Home className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold text-[#302521] uppercase tracking-wider">Atendimento</p>
                  <p className="text-xs text-[#936449] font-medium">A Domicílio & Estúdio</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Pilares da Identidade Visual em Linha Abaixo da Apresentação */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[#302521]/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pilares.map((pilar, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#302521]/5 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF6F2] border border-[#936449]/20 flex items-center justify-center text-[#936449] shrink-0">
                {idx === 0 && <Home className="w-6 h-6" />}
                {idx === 1 && <ShieldCheck className="w-6 h-6" />}
                {idx === 2 && <Sparkles className="w-6 h-6" />}
              </div>
              <div>
                <h4 className="text-base font-serif font-semibold text-[#302521] mb-1">
                  {pilar.titulo}
                </h4>
                <p className="text-xs sm:text-sm text-[#302521]/70 leading-relaxed">
                  {pilar.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

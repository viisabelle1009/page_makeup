import React, { useState } from 'react';
import { siteContent } from '../data/siteContent.js';
import { MessageCircle, ZoomIn, X, ChevronRight, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('todas');
  const [selectedItem, setSelectedItem] = useState(null);

  const categorias = [
    { id: 'todas', rotulo: 'Todas' },
    { id: 'noivas', rotulo: 'Noivas' },
    { id: 'social', rotulo: 'Social' },
    { id: 'madrinhas', rotulo: 'Madrinhas & Gala' },
    { id: 'debutantes', rotulo: 'Debutantes' },
    { id: 'miss', rotulo: 'Miss' },
  ];

  const itensFiltrados =
    activeTab === 'todas'
      ? siteContent.portfolio
      : siteContent.portfolio.filter((item) => item.categoria === activeTab);

  const getWhatsAppBookingUrl = (item) => {
    const texto = `Olá Vitória! Me interessei pelo estilo "${item.titulo}" (${item.categoriaNome}) do seu portfólio. Gostaria de verificar valores e disponibilidade para agendar.`;
    return `https://wa.me/${siteContent.info.whatsappNumero}?text=${encodeURIComponent(texto)}`;
  };

  return (
    <section id="portfolio" className="py-20 bg-[#FAF6F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#936449] mb-2">
            <span>Galeria de Trabalhos</span>
            <span>♡</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#302521] tracking-tight mb-4">
            Portfólio & Transformações
          </h2>
          <p className="text-sm sm:text-base text-[#302521]/75 leading-relaxed">
            Cada mulher carrega uma beleza singular. Explore produções reais de noivas,
            madrinhas, debutantes, maquiagem social e misses assinadas por Vitória Silva.
          </p>
        </div>

        {/* Abas de Filtros por Categoria */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#302521] text-white shadow-md'
                  : 'bg-white text-[#302521]/80 hover:bg-[#F8F3EF] border border-[#302521]/10'
              }`}
            >
              {cat.rotulo}
            </button>
          ))}
        </div>

        {/* Grid de Fotos do Portfólio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {itensFiltrados.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#302521]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Contêiner da Imagem */}
              <div className="relative aspect-square overflow-hidden bg-[#EFE8E1]">
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Tag de Categoria */}
                <div className="absolute top-3 left-3 bg-[#302521]/85 backdrop-blur-sm text-white text-[11px] font-medium tracking-wider uppercase px-3 py-1 rounded-full">
                  {item.categoriaNome}
                </div>

                {/* Preço Sugerido (Editável) */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-[#936449] font-bold text-xs px-2.5 py-1 rounded-full shadow-sm">
                  {item.precoSugerido}
                </div>

                {/* Overlay com Botão de Zoom ao passar o mouse */}
                <button
                  onClick={() => setSelectedItem(item)}
                  className="absolute inset-0 bg-[#302521]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs tracking-wider uppercase backdrop-blur-[2px] cursor-pointer"
                  aria-label={`Ver detalhes de ${item.titulo}`}
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                  <span>Ver Detalhes</span>
                </button>
              </div>

              {/* Informações da Foto */}
              <div className="p-5 flex flex-col flex-grow text-left">
                <h3 className="text-base sm:text-lg font-serif font-semibold text-[#302521] group-hover:text-[#936449] transition-colors mb-2">
                  {item.titulo}
                </h3>
                <p className="text-xs sm:text-sm text-[#302521]/70 line-clamp-2 mb-4 flex-grow">
                  {item.descricao}
                </p>

                {/* Rodapé do Card com Ação */}
                <div className="pt-3 border-t border-[#302521]/10 flex items-center justify-between">
                  <span className="text-[11px] text-[#302521]/60">
                    Valor estimado
                  </span>
                  <a
                    href={getWhatsAppBookingUrl(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#936449] hover:text-[#302521] transition-colors"
                  >
                    <span>Quero este estilo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Lightbox de Visualização em Detalhes */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative bg-white max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-in fade-in duration-200">
            {/* Botão Fechar */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square bg-neutral-100">
                <img
                  src={selectedItem.imagem}
                  alt={selectedItem.titulo}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between text-left">
                <div>
                  <div className="inline-block text-[11px] font-semibold text-[#936449] uppercase tracking-widest mb-1">
                    {selectedItem.categoriaNome}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#302521] mb-3">
                    {selectedItem.titulo}
                  </h3>
                  <p className="text-sm text-[#302521]/75 leading-relaxed mb-6">
                    {selectedItem.descricao}
                  </p>
                  
                  <div className="p-3 bg-[#F8F3EF] rounded-xl border border-[#936449]/15 mb-6">
                    <p className="text-xs text-[#302521]/70">Investimento Estimado:</p>
                    <p className="text-lg font-serif font-bold text-[#936449]">
                      {selectedItem.precoSugerido}
                    </p>
                    <p className="text-[10px] text-[#302521]/50 mt-0.5">
                      *Preço sujeito a confirmação de local e pacote.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={getWhatsAppBookingUrl(selectedItem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#936449] hover:bg-[#302521] text-white text-xs font-semibold tracking-wider uppercase rounded-full shadow transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Agendar Este Estilo no WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full py-2 text-xs text-[#302521]/60 hover:text-[#302521]"
                  >
                    Voltar ao portfólio
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

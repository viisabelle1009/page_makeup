import React, { useState } from 'react';
import { siteContent } from '../data/siteContent.js';
import { MessageCircle, Instagram, Mail, MapPin, Send, CheckCircle, AlertCircle, Calendar, User, Phone } from 'lucide-react';

export default function Contact() {
  const { info, servicos } = siteContent;

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servico: servicos[0]?.nome || 'Maquiagem Social & Eventos',
    data: '',
    local: 'A Domicílio',
    mensagem: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função auxiliar para sanitizar strings (remove caracteres de controle e limita tamanho)
  const sanitizeInput = (str, maxLength = 255) => {
    if (typeof str !== 'string') return '';
    return str
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Remove caracteres de controle ASCII
      .trim()
      .slice(0, maxLength);
  };

  const validate = () => {
    const errs = {};
    const nomeLimpo = sanitizeInput(formData.nome, 80);
    const telDigits = formData.telefone.replace(/\D/g, '');

    if (!nomeLimpo || nomeLimpo.length < 3) {
      errs.nome = 'Por favor, informe seu nome completo (mínimo de 3 caracteres).';
    } else if (nomeLimpo.length > 80) {
      errs.nome = 'O nome não deve exceder 80 caracteres.';
    }

    if (!telDigits || telDigits.length < 10 || telDigits.length > 15) {
      errs.telefone = 'Informe um número de WhatsApp válido com DDD (ex: 11 99999-9999).';
    }

    if (!formData.data) {
      errs.data = 'Selecione a data pretendida.';
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      setIsSubmitted(true);

      const nomeSanitizado = sanitizeInput(formData.nome, 80);
      const telSanitizado = sanitizeInput(formData.telefone, 20);
      const servicoSanitizado = sanitizeInput(formData.servico, 60);
      const localSanitizado = sanitizeInput(formData.local, 30);
      const mensagemSanitizada = sanitizeInput(formData.mensagem, 500);

      // Formatar mensagem detalhada para o WhatsApp
      const dataFormatada = formData.data.split('-').reverse().join('/');
      const textoMensagem = 
`✨ *Solicitação de Agendamento - Vitória Silva Makeup* ✨
*Nome:* ${nomeSanitizado}
*WhatsApp:* ${telSanitizado}
*Serviço:* ${servicoSanitizado}
*Data:* ${dataFormatada}
*Modalidade:* ${localSanitizado}
${mensagemSanitizada ? `*Observações:* ${mensagemSanitizada}` : ''}

Gostaria de verificar a disponibilidade de horário!`;

      const linkWhatsApp = `https://wa.me/${info.whatsappNumero}?text=${encodeURIComponent(textoMensagem)}`;

      // Redireciona para o WhatsApp de forma segura com noopener e noreferrer
      setTimeout(() => {
        window.open(linkWhatsApp, '_blank', 'noopener,noreferrer');
        setIsSubmitting(false);
      }, 400);
    }
  };

  return (
    <section id="contato" className="py-20 bg-[#F8F3EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#936449] mb-2">
            <span>Agendamentos & Contato</span>
            <span>♡</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#302521] tracking-tight mb-4">
            Reserve o Seu Momento Especial
          </h2>
          <p className="text-sm sm:text-base text-[#302521]/75 leading-relaxed">
            Preencha os dados abaixo para enviar sua solicitação diretamente para o nosso WhatsApp, ou entre em contato pelos nossos canais oficiais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Formulário de Agendamento (7 Colunas) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#302521]/10 shadow-lg text-left">
            <h3 className="text-xl font-serif font-bold text-[#302521] mb-2">
              Formulário de Solicitação
            </h3>
            <p className="text-xs text-[#302521]/60 mb-6">
              Ao clicar em enviar, você será direcionada para o WhatsApp com os dados preenchidos.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Campo Nome */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#302521] mb-1.5">
                  Seu Nome Completo *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#936449]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Ex: Maria Eduarda Silva"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#302521] bg-[#FAF6F2]/50 focus:bg-white focus:outline-none transition-all ${
                      errors.nome ? 'border-red-500 ring-1 ring-red-500' : 'border-[#302521]/15 focus:border-[#936449]'
                    }`}
                  />
                </div>
                {errors.nome && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.nome}</span>
                  </p>
                )}
              </div>

              {/* Campo WhatsApp */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#302521] mb-1.5">
                  WhatsApp com DDD *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#936449]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#302521] bg-[#FAF6F2]/50 focus:bg-white focus:outline-none transition-all ${
                      errors.telefone ? 'border-red-500 ring-1 ring-red-500' : 'border-[#302521]/15 focus:border-[#936449]'
                    }`}
                  />
                </div>
                {errors.telefone && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.telefone}</span>
                  </p>
                )}
              </div>

              {/* Grid 2 colunas: Serviço & Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#302521] mb-1.5">
                    Serviço Desejado
                  </label>
                  <select
                    value={formData.servico}
                    onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-[#302521]/15 text-sm text-[#302521] bg-[#FAF6F2]/50 focus:bg-white focus:outline-none focus:border-[#936449]"
                  >
                    {servicos.map((s) => (
                      <option key={s.id} value={s.nome}>
                        {s.nome} ({s.preco})
                      </option>
                    ))}
                    <option value="Outro Serviço Sob Consulta">Outro Serviço Sob Consulta</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#302521] mb-1.5">
                    Data do Evento *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#936449]">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      value={formData.data}
                      onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#302521] bg-[#FAF6F2]/50 focus:bg-white focus:outline-none transition-all ${
                        errors.data ? 'border-red-500 ring-1 ring-red-500' : 'border-[#302521]/15 focus:border-[#936449]'
                      }`}
                    />
                  </div>
                  {errors.data && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.data}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Modalidade de Atendimento */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#302521] mb-2">
                  Onde você prefere ser atendida?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, local: 'A Domicílio' })}
                    className={`py-2.5 px-4 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                      formData.local === 'A Domicílio'
                        ? 'bg-[#936449] text-white border-[#936449] shadow-sm'
                        : 'bg-[#FAF6F2]/50 text-[#302521] border-[#302521]/15 hover:bg-[#FAF6F2]'
                    }`}
                  >
                    🏠 A Domicílio / No Local
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, local: 'No Estúdio' })}
                    className={`py-2.5 px-4 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                      formData.local === 'No Estúdio'
                        ? 'bg-[#936449] text-white border-[#936449] shadow-sm'
                        : 'bg-[#FAF6F2]/50 text-[#302521] border-[#302521]/15 hover:bg-[#FAF6F2]'
                    }`}
                  >
                    ✨ No Estúdio
                  </button>
                </div>
              </div>

              {/* Mensagem / Detalhes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#302521] mb-1.5">
                  Mensagem ou Endereço (Opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Conte-nos detalhes do evento, bairro para deslocamento ou se há outras pessoas para maquiar..."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#302521]/15 text-sm text-[#302521] bg-[#FAF6F2]/50 focus:bg-white focus:outline-none focus:border-[#936449]"
                />
              </div>

              {/* Botão Enviar */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-[#936449] hover:bg-[#302521] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Solicitação para o WhatsApp</span>
              </button>

              {isSubmitted && (
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs flex items-center gap-2 border border-emerald-200">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pronto! Redirecionando para o WhatsApp com a sua mensagem pronta...</span>
                </div>
              )}

            </form>
          </div>

          {/* Cards de Contato Direto & Redes Sociais (5 Colunas) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Card WhatsApp Oficial */}
            <a
              href={`https://wa.me/${info.whatsappNumero}?text=${encodeURIComponent('Olá Vitória Silva! Gostaria de agendar um horário.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-3xl bg-white border border-[#936449]/20 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#936449] uppercase tracking-wider">
                    Agende Seu Horário
                  </span>
                  <h4 className="text-lg font-serif font-bold text-[#302521] group-hover:text-[#936449] transition-colors">
                    {info.whatsappDisplay}
                  </h4>
                  <p className="text-xs text-[#302521]/60 mt-0.5">
                    Resposta rápida pelo WhatsApp
                  </p>
                </div>
              </div>
            </a>

            {/* Card Instagram Oficial */}
            <a
              href={info.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-3xl bg-white border border-[#936449]/20 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#936449] uppercase tracking-wider">
                    Siga no Instagram
                  </span>
                  <h4 className="text-lg font-serif font-bold text-[#302521] group-hover:text-[#936449] transition-colors">
                    {info.instagramUsuario}
                  </h4>
                  <p className="text-xs text-[#302521]/60 mt-0.5">
                    Vídeos, bastidores e novidades diárias
                  </p>
                </div>
              </div>
            </a>

            {/* Card E-mail */}
            <a
              href={`mailto:${info.email}`}
              className="block p-6 rounded-3xl bg-white border border-[#936449]/20 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF6F2] text-[#936449] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#936449] uppercase tracking-wider">
                    Me Chama no E-mail
                  </span>
                  <h4 className="text-sm sm:text-base font-serif font-bold text-[#302521] group-hover:text-[#936449] transition-colors break-all">
                    {info.email}
                  </h4>
                  <p className="text-xs text-[#302521]/60 mt-0.5">
                    Propostas comerciais e parcerias
                  </p>
                </div>
              </div>
            </a>

            {/* Card Região e Atendimento */}
            <div className="p-6 rounded-3xl bg-[#FAF6F2] border border-[#302521]/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white text-[#936449] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#302521]">
                    {info.regiao}
                  </h4>
                  <p className="text-xs text-[#302521]/70 mt-1 leading-relaxed">
                    {info.atendimento}. {info.horarioAtendimento}.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

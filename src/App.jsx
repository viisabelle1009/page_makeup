import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Portfolio from './components/Portfolio.jsx';
import BridalSpecial from './components/BridalSpecial.jsx';
import Services from './components/Services.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

/**
 * Aplicação Principal da Landing Page de Vitória Silva - Makeup & Skin Care
 * Estruturada com componentes modulares e fáceis de editar.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F3EF] text-[#302521] flex flex-col font-sans selection:bg-[#936449]/20 selection:text-[#302521]">
      {/* 1. Cabeçalho com Logotipo e Navegação */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Apresentação & Proposta de Valor */}
        <Hero />

        {/* 3. Portfólio de Trabalhos (Social, Noivas, Debutantes, Madrinhas, Miss) */}
        <Portfolio />

        {/* 4. Destaque Especial Noivas */}
        <BridalSpecial />

        {/* 5. Menu de Serviços, Cuidados & Valores */}
        <Services />

        {/* 6. Depoimentos de Clientes */}
        <Testimonials />

        {/* 7. Formulário de Agendamento & Canais de Contato */}
        <Contact />
      </main>

      {/* 8. Rodapé Completo */}
      <Footer />

      {/* Botão Flutuante de Atendimento WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
}

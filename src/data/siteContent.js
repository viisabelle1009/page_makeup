/**
 * =======================================================================
 * VITÓRIA SILVA - MAKEUP & SKIN CARE
 * ARQUIVO PRINCIPAL DE CONTEÚDO, PREÇOS E CONTATOS
 * =======================================================================
 * Dica para edição fácil:
 * - Você pode alterar textos, valores (R$), contatos e fotos diretamente aqui.
 * - Todos os valores marcados com "preco" são fictícios/editáveis.
 * =======================================================================
 */

export const siteContent = {
  // Informações de Contato e Redes Sociais
  info: {
    nome: "Vitória Silva",
    subtitulo: "Makeup & Skin Care",
    slogan: "Realce o que te faz única, com beleza e cuidado.",
    whatsappDisplay: "(11) 95130-9221",
    whatsappNumero: "5511951309221", // Somente números (código país 55 + DDD 11 + telefone)
    instagramUsuario: "@_vitoriamakeupp_",
    instagramLink: "https://www.instagram.com/_vitoriamakeupp_/",
    email: "vitoriamakeup335@gmail.com",
    atendimento: "Atendimento a Domicílio e Studio (com horário agendado)",
    regiao: "São Paulo e Região Metropolitana",
    horarioAtendimento: "Terça a Sábado das 08h às 19h | Domingo sob consulta",
  },

  // Pilares de destaque presentes na identidade visual
  pilares: [
    {
      titulo: "Atendimento a Domicílio",
      descricao: "Comodidade e tranquilidade no conforto da sua casa, hotel ou espaço do evento com kit profissional completo.",
      icone: "home",
    },
    {
      titulo: "Produtos de Qualidade",
      descricao: "Utilização das melhores marcas nacionais e importadas, garantindo alta fixação, maquiagem blindada e acabamento impecável.",
      icone: "shield",
    },
    {
      titulo: "Beleza com Confiança",
      descricao: "Técnicas sob medida que respeitam seu estilo e biotipo facial, proporcionando segurança em cada momento especial.",
      icone: "sparkles",
    },
  ],

  // Seção de Serviços Principais
  servicos: [
    {
      id: "make-social",
      categoria: "Maquiagem",
      nome: "Maquiagem Social & Eventos",
      preco: "R$ 180,00",
      duracao: "Aproximadamente 1h15",
      descricao: "Realce sua beleza com uma maquiagem sofisticada que valoriza o seu olhar e a sua essência. Ideal para formaturas, festas corporativas, jantares e aniversários.",
      itens: [
        "Preparação e hidratação da pele",
        "Aplicação de cílios postiços inclusa",
        "Técnica de alta durabilidade e acabamento aveludado",
        "Fixador blindado resistente ao calor e lágrimas"
      ],
      destaque: false,
    },
    {
      id: "noivas-especial",
      categoria: "Especial Noivas",
      nome: "Produção Completa de Noiva",
      preco: "R$ 650,00",
      duracao: "Atendimento VIP com dia exclusivo",
      descricao: "O seu grande dia merece cuidado inesquecível. Maquiagem blindada à prova d'água, preparação com dermocosméticos e assessoria até o momento da cerimônia.",
      itens: [
        "Prévia de maquiagem personalizada",
        "Pele blindada ultra resistente (lágrimas e abraços)",
        "Colocação de véu, grinalda e retoque final",
        "Kit retoque de batom para a festa"
      ],
      destaque: true,
    },
    {
      id: "madrinhas",
      categoria: "Madrinhas & Convidadas",
      nome: "Madrinhas, Debutantes & Miss",
      preco: "R$ 210,00",
      duracao: "Aproximadamente 1h20",
      descricao: "Visual marcante e harmonioso pensado para destacar sua beleza nas fotos e na pista de dança, combinando perfeitamente com a paleta do vestido.",
      itens: [
        "Pele resistente ao flash fotográfico",
        "Cílios postiços premium",
        "Contorno e iluminação personalizados",
        "Desconto especial para grupos de 3 ou mais pessoas"
      ],
      destaque: false,
    },
    {
      id: "sobrancelhas",
      categoria: "Sobrancelhas",
      nome: "Design de Sobrancelhas",
      preco: "R$ 55,00",
      duracao: "Aproximadamente 40min",
      descricao: "Design personalizado com mapeamento facial para realçar o seu olhar e harmonizar os traços naturais do seu rosto.",
      itens: [
        "Mapeamento com paquímetro digital",
        "Remoção com pinça e linha",
        "Opção de aplicação de Henna / Tintura (+ R$ 25)",
        "Finalização com gel nutritivo"
      ],
      destaque: false,
    },
    {
      id: "limpeza-pele",
      categoria: "Skin Care",
      nome: "Limpeza de Pele Profunda",
      preco: "R$ 130,00",
      duracao: "Aproximadamente 1h30",
      descricao: "Pele mais saudável, limpa e radiante. Cuidar de você também é beleza! Desobstrui os poros, remove cravos e restaura o viço natural.",
      itens: [
        "Higienização com produtos dermocosméticos",
        "Emoliência com vapor de ozônio",
        "Extração cuidadosa de impurezas e cravos",
        "Máscara calmante e fotoproteção final"
      ],
      destaque: false,
    },
    {
      id: "combo-beleza",
      categoria: "Combo Especial",
      nome: "Combo Skin Care + Sobrancelhas",
      preco: "R$ 165,00",
      duracao: "Aproximadamente 2h",
      descricao: "Cuidado completo para a sua autoestima. Limpeza de pele relaxante combinada ao design de sobrancelhas perfeito para o seu rosto.",
      itens: [
        "Limpeza de pele profunda completa",
        "Design de sobrancelhas personalizado",
        "Hidratação labial regeneradora",
        "Massagem facial descongestionante"
      ],
      destaque: false,
    },
  ],

  // Portfólio de Trabalhos Reais com Categorias
  portfolio: [
    {
      id: 1,
      categoria: "noivas",
      categoriaNome: "Noivas",
      titulo: "Noiva com Sorriso Radiante",
      descricao: "Maquiagem leve, atemporal e luminosa com acabamento aveludado e cílios que destacam o olhar com naturalidade.",
      imagem: "/images/portfolio/noiva-sorriso.jpg",
      precoSugerido: "A partir de R$ 650,00",
    },
    {
      id: 2,
      categoria: "noivas",
      categoriaNome: "Noivas",
      titulo: "Chegada Triunfal da Noiva",
      descricao: "Produção impecável com véu catedral e buquê, maquiagem blindada à prova d'água para suportar todas as emoções.",
      imagem: "/images/portfolio/noiva-carro.jpg",
      precoSugerido: "A partir de R$ 650,00",
    },
    {
      id: 3,
      categoria: "noivas",
      categoriaNome: "Noivas",
      titulo: "Noiva Clássica em Cenário Rústico",
      descricao: "Visual sofisticado com pele resistente a altas temperaturas e batom nude rosado de longa duração.",
      imagem: "/images/portfolio/noiva-veo-luxo.jpg",
      precoSugerido: "A partir de R$ 650,00",
    },
    {
      id: 4,
      categoria: "noivas",
      categoriaNome: "Noivas",
      titulo: "Casamento Civil & Assinatura",
      descricao: "Delicadeza e sofisticação em maquiagem clean com viço saudável e elegante para cerimônias civis.",
      imagem: "/images/portfolio/noiva-casamento-civil.jpg",
      precoSugerido: "A partir de R$ 380,00",
    },
    {
      id: 5,
      categoria: "miss",
      categoriaNome: "Miss & Concurso",
      titulo: "Miss Beleza Negra",
      descricao: "Produção de passarela de alto impacto com pele negra ricamente iluminada, tons quentes e presença marcante de palco.",
      imagem: "/images/portfolio/miss-beleza-negra.jpg",
      precoSugerido: "A partir de R$ 250,00",
    },
    {
      id: 6,
      categoria: "madrinhas",
      categoriaNome: "Madrinhas & Gala",
      titulo: "Gala Noturna no Palácio",
      descricao: "Glamour supremo com vestido vermelho, olhar esfumado sofisticado e acabamento fotográfico sem reflexos.",
      imagem: "/images/portfolio/gala-vermelho.jpg",
      precoSugerido: "A partir de R$ 210,00",
    },
    {
      id: 7,
      categoria: "madrinhas",
      categoriaNome: "Madrinhas & Gala",
      titulo: "Morena Iluminada & Elegante",
      descricao: "Harmonização de tons terrosos, contorno suave e gloss espelhado valorizando a tonalidade da pele.",
      imagem: "/images/portfolio/morena-iluminada.jpg",
      precoSugerido: "A partir de R$ 210,00",
    },
    {
      id: 8,
      categoria: "debutantes",
      categoriaNome: "Debutantes (15 Anos)",
      titulo: "Debutante Black Glam",
      descricao: "Estilo moderno e delicado para festa de 15 anos, com vestido de gala e penteado em ondas hollywoodianas.",
      imagem: "/images/portfolio/debutante-1.jpg",
      precoSugerido: "A partir de R$ 220,00",
    },
    {
      id: 9,
      categoria: "debutantes",
      categoriaNome: "Debutantes (15 Anos)",
      titulo: "Debutante com Batom Vermelho Marcante",
      descricao: "Olhar suave com delineado gatinho fino combinado a um clássico lábio vermelho cereja para brilhar.",
      imagem: "/images/portfolio/debutante-ondas.jpg",
      precoSugerido: "A partir de R$ 220,00",
    },
    {
      id: 10,
      categoria: "social",
      categoriaNome: "Maquiagem Social",
      titulo: "Smokey Eyes & Esfumado Preto",
      descricao: "Técnica apurada de degradê nos olhos para eventos noturnos, formaturas e celebrações elegantes.",
      imagem: "/images/portfolio/glam-olhos.jpg",
      precoSugerido: "A partir de R$ 180,00",
    },
    {
      id: 11,
      categoria: "social",
      categoriaNome: "Maquiagem Social",
      titulo: "Pele Glow & Beleza Natural",
      descricao: "Textura leve que valoriza a saúde da pele sem efeito pesado, realçando a beleza única com frescor.",
      imagem: "/images/portfolio/social-glow.jpg",
      precoSugerido: "A partir de R$ 180,00",
    },
    {
      id: 12,
      categoria: "social",
      categoriaNome: "Maquiagem Social",
      titulo: "Cut Crease & Olhar Definido",
      descricao: "Linhas precisas e contraste harmônico de sombras para quem deseja um olhar aberto e expressivo.",
      imagem: "/images/portfolio/cut-crease-olhar.jpg",
      precoSugerido: "A partir de R$ 190,00",
    },
  ],

  // Depoimentos reais/ilustrativos de clientes satisfeitas
  depoimentos: [
    {
      id: 1,
      nome: "Camila Guimarães",
      evento: "Noiva",
      texto: "A Vitória foi simplesmente um anjo no meu grande dia! Eu chorei a cerimônia inteira e a maquiagem permaneceu 100% intacta até o fim da festa às 5h da manhã. O carinho e a calma dela me deram uma segurança enorme.",
      avaliacao: 5,
    },
    {
      id: 2,
      nome: "Beatriz Nogueira",
      evento: "Madrinha de Casamento",
      texto: "Fiz minha make a domicílio com a Vitória junto com minha mãe. As duas maquiagens ficaram impecáveis, sem parecer pesadas e duraram o dia todinho sob o sol. Super recomendo!",
      avaliacao: 5,
    },
    {
      id: 3,
      nome: "Larissa Menezes",
      evento: "Debutante (15 Anos)",
      texto: "Minha festa de 15 anos foi inesquecível e todo mundo elogiou a minha maquiagem. A Vitória entendeu exatamente o que eu queria e me fez sentir uma verdadeira princesa.",
      avaliacao: 5,
    },
  ],

  // Dúvidas Frequentes (FAQ)
  faq: [
    {
      pergunta: "Como funciona o atendimento a domicílio?",
      resposta: "Levo toda a estrutura profissional necessária até o seu endereço (maleta higienizada, iluminação, cadeira e produtos). Cobramos apenas a taxa de deslocamento calculada de acordo com o bairro em São Paulo e região.",
    },
    {
      pergunta: "Os cílios postiços e a preparação de pele estão inclusos?",
      resposta: "Sim! Todos os nossos atendimentos de maquiagem incluem higienização, hidratação prévia com dermocosméticos e aplicação de cílios postiços adequados ao formato dos seus olhos.",
    },
    {
      pergunta: "Com quanto tempo de antecedência devo agendar para noivas?",
      resposta: "Recomendamos entrar em contato com pelo menos 2 a 6 meses de antecedência para garantir a data na agenda e realizarmos a prévia com tranquilidade.",
    },
    {
      pergunta: "Quais são as formas de pagamento aceitas?",
      resposta: "Aceitamos Pix, cartões de crédito e débito (com opção de parcelamento). O agendamento da data é confirmado mediante sinal de reserva.",
    },
  ],
};

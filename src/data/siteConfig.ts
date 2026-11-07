export const siteConfig = {
  name: 'Cinema em Casa',
  domain: 'cinemaemcasa.shop',
  url: 'https://cinemaemcasa.shop',
  tagline: 'O Melhor da TV e dos Streamings em um só lugar.',
  subTagline: 'Tudo em um único aplicativo! Mais de 2.500 canais ao vivo em 4K, filmes, séries, Premiere, Libertadores e UFC. Planos para 2 e 3 Telas simultâneas.',
  whatsapp: {
    number: '5551997862095',
    display: '(51) 99786-2095',
    defaultMsg: 'Olá! Vim pelo site Cinema em Casa (cinemaemcasa.shop) e quero solicitar meu Teste Grátis de 6 horas.',
    planMsg: (plan: string) => `Olá! Vim pelo site Cinema em Casa (cinemaemcasa.shop) e quero assinar o ${plan}. Como faço para ativar?`
  },
  stats: {
    channels: '+2.500 Canais Ao Vivo',
    movies: '+85.000 Filmes 4K & Full HD',
    series: '+18.000 Séries Atualizadas',
    rating: '4.9/5 estrelas (+16.400 clientes ativos)',
    uptime: '99.9% de Estabilidade Anti-Travas'
  },
  plans: [
    {
      id: 'mensal',
      name: 'PLANO MENSAL',
      badge: 'FLEXÍVEL',
      badgeColor: 'bg-[#00f0ff] text-black font-black',
      screens: '2 Telas Simultâneas',
      oldPrice: null,
      price: '30',
      period: 'por mês',
      equivalent: null,
      subtitle: 'Perfeito para testar toda a grade em Smart TV e Celular.',
      popular: false,
      ctaText: 'ASSINAR PLANO MENSAL',
      features: [
        'Mais de 120.000 Filmes & Séries On Demand',
        'Canais ao Vivo em 4K nativo 60FPS',
        'Futebol Pay-Per-View, Libertadores & UFC',
        '2 Telas Simultâneas Liberadas',
        'Sem Contrato e Sem Fidelidade',
        'Servidor Anti-Travamento CDN Dedicada',
        'Suporte VIP via WhatsApp'
      ]
    },
    {
      id: 'trimestral',
      name: 'PLANO TRIMESTRAL',
      badge: 'ECONOMIZE R$ 20',
      badgeColor: 'bg-[#00e5ff] text-black font-black',
      screens: '2 Telas Simultâneas',
      oldPrice: 'De R$ 90',
      price: '70',
      period: 'a cada 3 meses',
      equivalent: null,
      subtitle: 'Economize R$ 20 contratando o ciclo de 3 meses.',
      popular: false,
      ctaText: 'ASSINAR TRIMESTRAL (R$ 70)',
      features: [
        'Tudo do Plano Mensal com desconto',
        '2 Telas Simultâneas Liberadas',
        'Economia imediata de R$ 20 reais',
        'Prioridade na atualização de grade e lançamentos',
        'Guia de Programação (EPG) interativo',
        'Futebol ao vivo sem delay e sem travar',
        'Suporte VIP via WhatsApp'
      ]
    },
    {
      id: 'semestral',
      name: 'PLANO SEMESTRAL',
      badge: 'MAIS ESCOLHIDO 🔥',
      badgeColor: 'bg-gradient-to-r from-[#ff007a] to-[#7928ca] text-white font-black',
      screens: '3 Telas Simultâneas',
      oldPrice: 'De R$ 180',
      price: '130',
      period: 'a cada 6 meses',
      equivalent: null,
      subtitle: 'Liberado para 3 aparelhos simultâneos para toda a família.',
      popular: true,
      ctaText: 'ASSINAR SEMESTRAL (MAIS ESCOLHIDO)',
      features: [
        '3 Telas Simultâneas Liberadas',
        'Mais de 120.000 Filmes & Séries em 4K',
        'Canais ao Vivo e Pay-Per-View inclusos',
        'Economia de R$ 50 reais no semestre',
        'Servidor Exclusivo Anti-Oscilação',
        'Universo Kids e Esportes liberados',
        'Ativação Imediata via WhatsApp'
      ]
    },
    {
      id: 'anual',
      name: 'PLANO ANUAL',
      badge: '50% OFF (R$ 20/MÊS)',
      badgeColor: 'bg-[#ffcc00] text-black font-black',
      screens: '3 Telas Simultâneas',
      oldPrice: 'De R$ 360',
      price: '240',
      period: 'por 1 ano completo',
      equivalent: 'O valor mais baixo do mercado: apenas R$ 20 por mês.',
      subtitle: 'O valor mais baixo do mercado: apenas R$ 20 por mês.',
      popular: false,
      ctaText: 'GARANTIR ANUAL (R$ 20/MÊS)',
      features: [
        '3 Telas Simultâneas Liberadas',
        'Apenas R$ 20 por mês equivalente',
        'Economia gigante de R$ 120 no ano',
        'Acesso VIP a todos os lançamentos 365 dias',
        'Estabilidade garantida o ano todo sem reajuste',
        'Libertadores, Sul-Americana, Champions e UFC',
        'Suporte Prioritário VIP 24/7'
      ]
    }
  ],
  heroSlides: [
    {
      tag: 'TUDO EM UM ÚNICO APLICATIVO',
      title: 'O MELHOR DA TV E DOS STREAMINGS EM UM SÓ LUGAR.',
      description: 'Chega de abrir vários apps ou pagar faturas separadas! No Cinema em Casa você assiste a canais ao vivo, filmes, séries, esportes e desenhos infantis em um aplicativo leve e ultra veloz. Liberado para 2 e 3 telas.',
      cta: 'EXPERIMENTAR 6H GRÁTIS',
      image: '/images/hero_institucional.png'
    },
    {
      tag: 'FUTEBOL E UFC AO VIVO EM 4K',
      title: 'VIVA CADA LANCE COM A MÁXIMA EMOÇÃO EM 60 FPS.',
      description: 'Brasileirão Séries A e B, Conmebol Libertadores, Copa do Brasil, Champions League e todos os cards do UFC sem pagar pay-per-view adicional e sem delay nos jogos.',
      cta: 'ASSISTIR AOS JOGOS',
      image: '/images/hero_futebol.png'
    },
    {
      tag: 'CINEMA EM CASA SOB DEMANDA',
      title: 'MARATONE OS MAIORES CLÁSSICOS E LANÇAMENTOS.',
      description: 'Mais de 120.000 títulos disponíveis na palma da sua mão. Todos os streamings (Disney+, Max, Prime Video, Telecine, Paramount) reunidos no mesmo catálogo sem custo extra.',
      cta: 'VER CATÁLOGO COMPLETO',
      image: '/images/hero_classicos.webp'
    }
  ],
  devices: [
    { name: 'Smart TVs', sub: 'Samsung, LG & TCL', img: '/images/device_samsung.png' },
    { name: 'Android TV & Box', sub: 'Todas as Marcas', img: '/images/device_android_tv.png' },
    { name: 'Fire TV Stick', sub: 'Amazon Fire TV', img: '/images/device_fire_tv.png' },
    { name: 'Roku Express', sub: 'Aparelhos Roku', img: '/images/device_roku.png' },
    { name: 'Apple TV', sub: 'tvOS, iPhone & iPad', img: '/images/device_apple_tv.png' },
    { name: 'Navegador Web & PC', sub: 'Chrome, Edge e Firefox', img: '/images/device_web.png' }
  ],
  faqs: [
    {
      q: 'É verdade que todo o conteúdo fica em um único aplicativo?',
      a: 'SIM! Essa é a maior vantagem do Cinema em Casa. Você não precisa ficar alternando entre aplicativos diferentes (como Disney, Max, Premiere, etc.) nem pagando assinaturas separadas. Dentro do nosso aplicativo você acessa mais de 2.500 canais ao vivo, todos os jogos de futebol e mais de 120.000 filmes e séries on demand com uma única conta e uma única lista.'
    },
    {
      q: 'Como funcionam as 2 e 3 telas simultâneas dos planos?',
      a: 'No Plano Mensal (R$ 30) e no Plano Trimestral (R$ 70), você tem 2 Telas Simultâneas para assistir na sala e no quarto ao mesmo tempo. No Plano Semestral (R$ 130) e no Plano Anual (R$ 240), você ganha 3 Telas Simultâneas liberadas para toda a família assistir em aparelhos diferentes sem interferência e sem travar.'
    },
    {
      q: 'O sistema trava durante jogos de futebol ou finais de campeonato?',
      a: 'Não! Nós usamos servidores dedicados de Alta Capacidade com rede CDN no Brasil e tecnologia Anti-Trava 9.0 (Anti-Freeze). Isso garante sinal fluído em 60 FPS, som Dolby e baixíssima latência (baixo delay) mesmo em dias de clássicos e finais.'
    },
    {
      q: 'Como solicito o Teste Grátis de 6 Horas?',
      a: 'Basta clicar no botão de WhatsApp. Em menos de 2 minutos nosso suporte gera seu teste gratuito sem exigir cartão de crédito e sem nenhum compromisso.'
    },
    {
      q: 'Quais são as formas de pagamento disponíveis?',
      a: 'Aceitamos Pix (com ativação imediata instantânea) e cartão de crédito. Não temos contrato de fidelidade: você renova apenas se gostar do serviço.'
    },
    {
      q: 'Funciona na minha Smart TV Samsung ou LG?',
      a: 'Sim! Nosso aplicativo é 100% compatível com Smart TVs Samsung (Tizen), LG (webOS), Roku TV, TCL, Philco, TV Box, Chromecast, Fire TV Stick, computadores e celulares (Android e iPhone). Ajudamos você passo a passo na instalação!'
    }
  ]
};

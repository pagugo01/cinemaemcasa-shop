export const siteConfig = {
  name: 'Cinema em Casa',
  domain: 'cinemaemcasa.shop',
  url: 'https://cinemaemcasa.shop',
  tagline: 'O Melhor da TV e dos Streamings em um só lugar.',
  subTagline: 'Canais Ao Vivo em 4K, Filmes, Séries, Premiere, Libertadores e UFC. Planos para 1, 2 e 3 Telas sem travamentos.',
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
      id: 'plano-1-tela',
      name: 'PLANO BÁSICO',
      badge: null,
      screens: '1 Tela Conectada',
      price: '29,90',
      period: '/mês',
      equivalent: null,
      subtitle: 'Ideal para uso individual no celular, TV ou computador',
      popular: false,
      ctaText: 'ASSINAR PLANO 1 TELA',
      features: [
        'Acesso completo a mais de 120.000 conteúdos',
        'Qualidade 4K Ultra HD, Full HD e HD',
        'Canais Ao Vivo: Abertos, Fechados, Esportes e Notícias',
        'Filmes, Séries e Conteúdos Infantis sob demanda',
        'Libertadores, Sul-Americana, Champions e UFC ao vivo',
        'Guia de Programação (EPG) interativo',
        'Servidor Anti-Travamento CDN Dedicada',
        'Instalação em Smart TV, TV Box, Fire Stick, Celular ou PC'
      ]
    },
    {
      id: 'plano-2-telas',
      name: 'PLANO PADRÃO (2 TELAS)',
      badge: 'MAIS POPULAR',
      badgeColor: 'bg-[#00f0ff] text-black font-black',
      screens: '2 Telas Simultâneas',
      price: '39,90',
      period: '/mês',
      equivalent: null,
      subtitle: 'O mais escolhido para casais e quem assiste na sala e quarto',
      popular: true,
      ctaText: 'ASSINAR 2 TELAS (MAIS POPULAR)',
      features: [
        'Assista em 2 dispositivos ao mesmo tempo sem travar',
        'Mais de 120.000 conteúdos com catálogo atualizado diariamente',
        'Qualidade 4K Ultra HD e HDR com som Dolby',
        'Futebol Ao Vivo: Brasileirão A/B, Libertadores, Copa do Brasil',
        'UFC Fight Nights e todos os cards numerados',
        'Grade completa de canais 24h sem lentidão',
        'Suporte Prioritário VIP via WhatsApp',
        'Compatível com qualquer TV, celular, computador ou TV Box'
      ]
    },
    {
      id: 'plano-3-telas',
      name: 'PLANO FAMÍLIA VIP (3 TELAS)',
      badge: 'MELHOR PARA FAMÍLIA',
      badgeColor: 'bg-[#ff007a] text-white font-black',
      screens: '3 Telas Simultâneas',
      price: '49,90',
      period: '/mês',
      equivalent: null,
      subtitle: 'Perfeito para a família inteira: esportes, novelas e desenhos',
      popular: false,
      ctaText: 'ASSINAR PLANO FAMÍLIA 3 TELAS',
      features: [
        'Assista em 3 aparelhos ao mesmo tempo em qualquer lugar',
        'Todos os canais de esportes, filmes e variedades liberados',
        'UFC, Conmebol Libertadores, NBA e Champions League',
        'Universo Kids Nickelodeon completo para as crianças',
        'Streaming sem atraso (Baixo Delay nos jogos)',
        'Qualidade 4K real com conexão estável',
        'Ativação imediata em até 2 minutos',
        'Sem fidelidade ou multas de cancelamento'
      ]
    },
    {
      id: 'plano-anual',
      name: 'PLANO ANUAL ULTRA VIP',
      badge: 'MAIOR ECONOMIA',
      badgeColor: 'bg-[#ffcc00] text-black font-black',
      screens: '3 Telas Simultâneas',
      price: '197,00',
      period: '/ano',
      equivalent: 'equivalente a R$ 16,41/mês',
      subtitle: 'Máxima economia: pague uma única vez e assista o ano inteiro',
      popular: false,
      ctaText: 'GARANTIR PLANO ANUAL COM 65% OFF',
      features: [
        '12 Meses de Acesso Completo sem mensalidades recorrentes',
        '3 Telas Simultâneas liberadas para a casa toda',
        'Economia de mais de R$ 390 ao ano',
        'Todos os eventos esportivos PPV liberados 365 dias',
        'UFC numerados, Brasileirão, Libertadores e Champions',
        'Lançamentos de cinema atualizados semanalmente',
        'Servidor Ultra CDN prioritário sem sobrecargas',
        'Garantia de 7 dias com devolução integral'
      ]
    }
  ],
  heroSlides: [
    {
      tag: 'ENTRETENIMENTO COMPLETO',
      title: 'O MELHOR DA TV E DOS STREAMINGS EM UM SÓ LUGAR.',
      description: 'Filmes, séries, esportes ao vivo, canais infantis e documentários reunidos no aplicativo mais rápido e estável do Brasil. Escolha 1, 2 ou 3 telas sem cabos ou antenas.',
      cta: 'EXPERIMENTAR GRÁTIS',
      image: '/images/hero_institucional.png'
    },
    {
      tag: 'FUTEBOL E UFC AO VIVO',
      title: 'VIVA CADA LANCE COM A MÁXIMA EMOÇÃO EM 4K.',
      description: 'Brasileirão Séries A e B, Conmebol Libertadores, Sul-Americana, Champions League e todos os cards do UFC sem pagar pay-per-view adicional e com narração em português.',
      cta: 'ASSISTIR AOS JOGOS',
      image: '/images/hero_futebol.png'
    },
    {
      tag: 'CINEMA EM CASA SOB DEMANDA',
      title: 'MARATONE OS MAIORES CLÁSSICOS E LANÇAMENTOS.',
      description: 'Mais de 120.000 títulos disponíveis na palma da sua mão. Os maiores lançamentos do cinema mundial atualizados toda semana com dublagem e legendas oficiais.',
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
      q: 'O que é o Cinema em Casa e como funciona?',
      a: 'O Cinema em Casa é a plataforma definitiva de streaming e TV ao vivo. Com um único aplicativo e sem precisar de técnicos, antenas ou aparelhos caros de satélite, você assiste a mais de 2.500 canais ao vivo e mais de 120.000 filmes e séries on demand diretamente na sua Smart TV, TV Box, celular ou computador através da sua conexão de internet.'
    },
    {
      q: 'Como funcionam os planos de 2 e 3 telas simultâneas?',
      a: 'Nossos planos foram pensados para a realidade de qualquer casa. No Plano Padrão (2 Telas), você pode assistir na sala e no quarto simultaneamente sem interferência. No Plano Família VIP e no Plano Anual (3 Telas), até três pessoas da sua família assistem a programações diferentes ao mesmo tempo, seja na TV, no tablet ou no smartphone.'
    },
    {
      q: 'O sinal trava durante clássicos de futebol ou eventos do UFC?',
      a: 'Não! Ao contrário de listas amadoras da internet, o Cinema em Casa opera com uma infraestrutura própria de CDN redundante e tecnologia Anti-Trava 9.0 com servidores localizados em São Paulo e no Rio de Janeiro. Isso garante baixa latência (baixo delay) e sinal 100% fluido em 60 FPS mesmo em finais de campeonato com milhares de pessoas conectadas.'
    },
    {
      q: 'Como solicito o Teste Grátis de 6 Horas?',
      a: 'É muito simples e rápido: clique em qualquer botão de "Experimentar Grátis" ou "Solicitar Teste". Você será direcionado para o nosso WhatsApp oficial. Nosso sistema de atendimento imediato gera seus dados de acesso em menos de 2 minutos, sem pedir dados de cartão de crédito e sem nenhum compromisso.'
    },
    {
      q: 'Quais são as formas de pagamento disponíveis?',
      a: 'Aceitamos Pix (com liberação instantânea no mesmo minuto) e cartão de crédito. Você não fica preso a contratos com fidelidade abusiva: assina e renova quando quiser de forma 100% transparente e flexível.'
    },
    {
      q: 'O aplicativo funciona na minha Smart TV Samsung ou LG?',
      a: 'Sim! Nosso aplicativo é totalmente compatível com as Smart TVs Samsung (Tizen), LG (webOS), Roku TV, TCL, Philco, aparelhos Android TV, TV Box, Google Chromecast, Amazon Fire TV Stick, computadores e smartphones (Android e iOS). Enviamos o passo a passo ilustrado e ajudamos você na instalação.'
    }
  ]
};

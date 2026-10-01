// Conteúdo dos cases. Para editar um texto, altere aqui — as páginas são geradas a partir deste arquivo.
// Marcação suportada nos textos: **negrito**.

export type IllustrationKey =
  | "crm-desafio"
  | "crm-estrategia"
  | "crm-arquitetura"
  | "crm-jornada"
  | "crm-governanca"
  | "brand-desafio"
  | "brand-estrategia"
  | "brand-arquitetura"
  | "brand-diferencial"
  | "brand-leads";

export type Block =
  | { type: "p"; text: string }
  | { type: "lead"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: string[] };

export type CaseSectionData = {
  n: string;
  label: string;
  headline?: string;
  illustration: IllustrationKey;
  blocks: Block[];
};

export type CaseStudy = {
  slug: string;
  category: string;
  context: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  facts: { value: string; label: string }[];
  cardIllustration: IllustrationKey;
  sections: CaseSectionData[];
};

export const cases: CaseStudy[] = [
  {
    slug: "crm-data",
    category: "CRM & Data",
    context: "App proprietário de empresa promotora de corridas",
    title: "Evolução da comunicação com o atleta via push notification",
    summary:
      "Estratégia para transformar o push de um canal de disparo massivo em infraestrutura de relacionamento orientada por dados.",
    description:
      "Proposta estratégica para evoluir o push notification de um app de corridas, de disparo massivo para relacionamento contextual, com CRM, segmentação, dados e LGPD.",
    tags: ["CRM", "Data", "Martech", "Customer Experience"],
    facts: [
      { value: "8", label: "etapas da arquitetura" },
      { value: "4", label: "momentos da jornada" },
      { value: "2", label: "bases de ticketerias integradas" },
    ],
    cardIllustration: "crm-desafio",
    sections: [
      {
        n: "01",
        label: "O desafio",
        headline: "Comunicação massiva para relacionamento contextual",
        illustration: "crm-desafio",
        blocks: [
          {
            type: "p",
            text: "O App já utilizava o Firebase para disparos de push notification, principalmente em campanhas promocionais e de performance. No entanto, a comunicação alcançava amplamente os usuários com opt-in ativo, sem diferenciação por perfil, comportamento ou vínculo com provas específicas.",
          },
          {
            type: "lead",
            text: "Identifiquei a oportunidade de transformar esse canal operacional em uma ferramenta estratégica de CRM, capaz de acompanhar a jornada do corredor, gerar conversões e fortalecer o relacionamento com a marca.",
          },
        ],
      },
      {
        n: "02",
        label: "A estratégia",
        headline: "Construir uma visão unificada do usuário",
        illustration: "crm-estrategia",
        blocks: [
          {
            type: "p",
            text: "Estruturei uma proposta para transformar o Firebase em um **hub de relacionamento e performance**, integrando diferentes bases de vendas, inscrições, atendimento, relacionamento comercial e certificados.",
          },
          {
            type: "p",
            text: "A estratégia previa a criação de uma identidade única para cada usuário, conectando informações de diferentes sistemas e permitindo construir perfis mais completos, com:",
          },
          {
            type: "list",
            items: [
              "Dados demográficos",
              "Geográficos",
              "Histórico de compras",
              "Provas",
              "Origem",
              "Status de relacionamento",
            ],
          },
          {
            type: "p",
            text: "O objetivo era substituir disparos genéricos por audiências dinâmicas, com comunicações personalizadas e orientadas por dados.",
          },
        ],
      },
      {
        n: "03",
        label: "A arquitetura da solução",
        headline: "Conectar dados à comunicação e aos pontos de conversão",
        illustration: "crm-arquitetura",
        blocks: [
          { type: "p", text: "Desenvolvi uma estrutura que conecta oito etapas:" },
          {
            type: "steps",
            items: [
              "Fontes de dados",
              "Identidade do usuário",
              "Perfil",
              "Segmentação",
              "Audiência",
              "Comunicação",
              "Analytics",
              "Conversão",
            ],
          },
          {
            type: "p",
            text: "A proposta considerou a integração de **duas bases de usuários oriundas de duas ticketerias distintas**, além das informações de atendimento, relacionamento comercial e certificados.",
          },
          {
            type: "p",
            text: "Com essa estrutura, seria possível criar segmentações combinadas por:",
          },
          {
            type: "list",
            items: ["Perfil", "Localização", "Produto", "Origem", "Comportamento"],
          },
          {
            type: "p",
            text: "Todas elas utilizando regras de inclusão e exclusão de leads. Entre os cenários previstos estavam campanhas direcionadas a inscritos de provas específicas, corredores de determinadas localidades estratégicas, clientes com histórico de compras e usuários sem interação recente.",
          },
        ],
      },
      {
        n: "04",
        label: "Diferencial",
        headline: "Comunicação relevante em cada momento da experiência do corredor",
        illustration: "crm-jornada",
        blocks: [
          { type: "p", text: "A estratégia organizou o relacionamento em quatro momentos:" },
          {
            type: "steps",
            items: ["Pré-evento", "Race Day", "Pós-evento", "Relacionamento contínuo"],
          },
          {
            type: "p",
            text: "No pré-prova, os pushes poderiam apoiar a experiência com informações logísticas e orientações sobre retirada de kits. Durante o evento, acompanhar a experiência do participante. No pós-prova, facilitar o acesso a certificados, fotos e resultados.",
          },
          {
            type: "lead",
            text: "Paralelamente, a frente comercial contemplava estratégias de vendas, upsell e cross-sell.",
          },
          {
            type: "p",
            text: "Para mensurar os resultados, defini indicadores de recebimento, abertura, não interação, desengajamento e conversão em compras, inscrições e acessos a conteúdos, permitindo **análises por campanha e segmento.**",
          },
        ],
      },
      {
        n: "05",
        label: "Governança e impacto estratégico",
        illustration: "crm-governanca",
        blocks: [
          {
            type: "p",
            text: "Além da estratégia de comunicação, o projeto contemplou requisitos de governança, compliance e LGPD, incluindo:",
          },
          {
            type: "list",
            items: [
              "Controle de opt-in e opt-out",
              "Exclusão automática de usuários negativados",
              "Registros de disparos",
              "Rastreabilidade e validações antes de cada campanha",
            ],
          },
          {
            type: "p",
            text: "A proposta também estabeleceu uma **visão de ciclo de vida do usuário** que antes era inexistente no aplicativo, classificando corredores entre engajados, em risco, desengajados e recuperados.",
          },
          {
            type: "lead",
            text: "Com isso, o push notification deixa de ser apenas um canal de disparo para se tornar uma **infraestrutura de relacionamento**, **conectando experiência, performance e inteligência de negócio para aumentar a relevância das comunicações, apoiar a conversão e orientar decisões a partir de dados.**",
          },
        ],
      },
    ],
  },
  {
    slug: "brand-experience",
    category: "Brand Experience",
    context: "Projeto para banco patrocinador de corridas de rua",
    title: "Brand experience e ativação de patrocínio esportivo",
    summary:
      "Estratégia para transformar a presença de um banco em corridas de rua em interação, relacionamento e geração de leads.",
    description:
      "Proposta de Brand Experience e ativação de patrocínio esportivo para um banco em circuitos de corrida de rua: estande, experiências, conteúdo e geração de leads.",
    tags: ["Brand Experience", "Sports Marketing", "Activation", "Lead Generation"],
    facts: [
      { value: "41", label: "etapas com estande" },
      { value: "500+", label: "pessoas por etapa (expectativa mínima)" },
      { value: "4", label: "etapas de ativação" },
    ],
    cardIllustration: "brand-estrategia",
    sections: [
      {
        n: "01",
        label: "O desafio",
        headline: "Transformar presença de marca em experiência",
        illustration: "brand-desafio",
        blocks: [
          {
            type: "p",
            text: "Desenvolvi uma proposta estratégica de Brand Experience para um banco, presente em diferentes circuitos de corrida de rua de curta e média distância.",
          },
          {
            type: "lead",
            text: "O desafio era **transformar o espaço de patrocínio em um ponto de contato relevante para o atleta, indo além da exposição da marca e criando oportunidades de interação, relacionamento e geração de leads.**",
          },
          {
            type: "p",
            text: "A proposta considerou um **estande aberto, de alta rotatividade, com expectativa de receber pelo menos 500 pessoas por etapa.**",
          },
        ],
      },
      {
        n: "02",
        label: "A estratégia",
        headline: "Conectar a marca à conquista do atleta",
        illustration: "brand-estrategia",
        blocks: [
          {
            type: "p",
            text: "Estruturei o conceito do estande a partir da assinatura **“A Conquista é sua. O apoio é [nome do banco]”**, posicionando o espaço como um hub de convivência, recuperação e celebração da conquista pessoal.",
          },
          {
            type: "p",
            text: "A estratégia considerou as características e os diferentes públicos de cada circuito, conectando os atributos da marca à experiência esportiva:",
          },
          {
            type: "list",
            items: [
              "Performance, resistência e superação",
              "Acessibilidade, hábito e constância",
              "Energia, movimento e celebração",
            ],
          },
          {
            type: "p",
            text: "O objetivo era posicionar o cliente como **parceiro da jornada do corredor, acompanhando diferentes momentos da sua experiência com o esporte.**",
          },
        ],
      },
      {
        n: "03",
        label: "A arquitetura da solução",
        headline: "Conectar experiência, interação e geração de leads",
        illustration: "brand-arquitetura",
        blocks: [
          {
            type: "p",
            text: "Desenvolvi uma estrutura de ativações organizada a partir de quatro etapas:",
          },
          {
            type: "steps",
            items: [
              "Pré-prova: preparação",
              "Pós-prova: recuperação",
              "Conquista: celebração",
              "Relacionamento: captação",
            ],
          },
          {
            type: "p",
            text: "A proposta contemplou diferentes experiências, adaptadas aos circuitos e às características de cada evento, incluindo **Shake Out Run, aquecimento guiado, Recovery, Photo Opportunity, ativações participativas e mecânicas de incentivo.**",
          },
          {
            type: "p",
            text: "O planejamento também considerou a utilização do estande em 41 etapas: 33 provas noturnas, 6 provas diurnas e 2 meias-maratonas em duas capitais do Brasil.",
          },
        ],
      },
      {
        n: "04",
        label: "Diferencial",
        headline: "Transformar cada ponto de contato em oportunidade de relacionamento",
        illustration: "brand-diferencial",
        blocks: [
          {
            type: "p",
            text: "A estratégia integrou experiências físicas, conteúdo e interação à jornada do atleta.",
          },
          {
            type: "p",
            text: "No pré-prova, a proposta previa treinões e ativações de aquecimento, aproximando a marca do momento de preparação.",
          },
          {
            type: "p",
            text: "No pós-prova, o espaço de Recovery ofereceria hidratação, alimentação esportiva e quick massage, enquanto o Photo Opportunity permitiria registrar a conquista com informações personalizadas, como nome, tempo e pace.",
          },
          {
            type: "p",
            text: "Entre os destaques, desenvolvi propostas de ativações coletivas com bicicletas geradoras de energia para corridas noturnas, quizzes educativos relacionados a ESG e distribuição de brindes personalizados.",
          },
          {
            type: "lead",
            text: "Cada experiência foi pensada para oferecer valor ao participante e estimular sua interação com a marca, integrando a captação de leads às próprias mecânicas de participação.",
          },
        ],
      },
      {
        n: "05",
        label: "Geração de leads e impacto estratégico",
        illustration: "brand-leads",
        blocks: [
          {
            type: "p",
            text: "Além da experiência de marca, o projeto contemplou a geração de leads como parte central da estratégia, conectando participação, cadastro e relacionamento.",
          },
          {
            type: "p",
            text: "A proposta previa diferentes pontos de captação, desde a entrada do estande e entrega de brindes até a participação nas ativações e o acesso às fotografias digitais.",
          },
          {
            type: "p",
            text: "Com isso, o espaço de patrocínio deixaria de atuar apenas como ponto de exposição para se tornar uma plataforma recorrente de Brand Experience, conectando marca, experiência esportiva e inteligência de relacionamento.",
          },
          {
            type: "lead",
            text: "A estratégia buscava transformar a presença do banco nos eventos em **oportunidades concretas de interação, fortalecer sua associação à conquista pessoal e gerar dados para iniciativas futuras de relacionamento.**",
          },
        ],
      },
    ],
  },
];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);

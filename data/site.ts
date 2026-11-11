export const siteConfig = {
  name: "Forja 12 Academia",
  shortName: "F12",
  tagline: "Treino que cabe na vida real",
  description: "Uma academia fictícia criada para demonstrar este projeto.",
  location: "Unidade demonstrativa, Rio de Janeiro - RJ",
  hours: {
    weekdays: "Segunda a sexta: 6h às 22h",
    saturday: "Sábado: 8h às 14h",
    sunday: "Domingo: fechado",
  },
  navigation: [
    { label: "A academia", href: "#academia" },
    { label: "Modalidades", href: "#modalidades" },
    { label: "Planos", href: "#planos" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Contato", href: "#contato" },
  ],
  modalities: [
    ["Musculação", "Força e técnica"],
    ["Cardio", "Resistência e energia"],
    ["Mobilidade", "Controle e amplitude"],
    ["Bike indoor", "Ritmo e intensidade"],
    ["Dança", "Movimento em grupo"],
    ["Funcional", "Coordenação e potência"],
    ["Boxe", "Técnica e condicionamento"],
    ["Alongamento", "Recuperação ativa"],
    ["Circuito", "Treino dinâmico"],
  ],
  classSchedule: [
    { key: "seg", short: "Seg", label: "Segunda", classes: [
      { time: "07h00", name: "Bike", period: "Manhã" },
      { time: "08h00", name: "Funcional", period: "Manhã" },
      { time: "18h30", name: "Dança", period: "Noite" },
      { time: "19h30", name: "Bike", period: "Noite" },
    ] },
    { key: "ter", short: "Ter", label: "Terça", classes: [
      { time: "07h30", name: "Mobilidade", period: "Manhã" },
      { time: "18h30", name: "Funcional", period: "Noite" },
      { time: "19h30", name: "Boxe", period: "Noite" },
    ] },
    { key: "qua", short: "Qua", label: "Quarta", classes: [
      { time: "07h00", name: "Bike", period: "Manhã" },
      { time: "08h00", name: "Funcional", period: "Manhã" },
      { time: "18h30", name: "Dança", period: "Noite" },
      { time: "19h30", name: "Bike", period: "Noite" },
    ] },
    { key: "qui", short: "Qui", label: "Quinta", classes: [
      { time: "07h30", name: "Mobilidade", period: "Manhã" },
      { time: "18h30", name: "Funcional", period: "Noite" },
      { time: "19h30", name: "Boxe", period: "Noite" },
    ] },
    { key: "sex", short: "Sex", label: "Sexta", classes: [
      { time: "07h00", name: "Circuito", period: "Manhã" },
      { time: "18h30", name: "Dança", period: "Noite" },
      { time: "19h30", name: "Circuito", period: "Noite" },
    ] },
  ],
  plans: [
    { name: "Essencial", price: "89,90", detail: "cobrança mensal", featured: true },
    { name: "Livre", price: "119,90", detail: "cobrança mensal", featured: false },
    { name: "Completo", price: "149,90", detail: "cobrança mensal", featured: false },
  ],
  faq: [
    ["Posso fazer uma aula experimental?", "Sim. Neste protótipo, o agendamento é apenas demonstrativo e não envia dados."],
    ["Quais modalidades estão disponíveis?", "A Forja 12 apresenta musculação, cardio, mobilidade, bike indoor, dança, funcional, boxe, alongamento e circuito."],
    ["Os valores são reais?", "Não. Planos, preços, horários e demais informações desta página são fictícios."],
    ["Qual é o horário de funcionamento?", "O protótipo apresenta funcionamento de segunda a sexta, das 6h às 22h, e sábado, das 8h às 14h."],
    ["Onde fica a academia?", "A Forja 12 é uma marca fictícia e não possui endereço ou unidade física."],
  ],
} as const;

export const contactUrl = "#contato";

import {
  ChevronDown,
  MessageCircle,
  Sparkles,
  Zap,
  Shield,
  Clock,
} from "lucide-react";
import { useState } from "react";

import Header from "../components/Header";

export default function ModernFaq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "O que é o Plano Teste Netuno?",
      answer:
        "O Plano Teste é uma oferta especial onde você pode experimentar um site, sistema simples ou landing page personalizada para seu negócio, pagando apenas R$ 59 pelo uso durante 30 dias. É uma forma de você testar nossa solução antes de investir em um projeto definitivo.",
      category: "geral",
    },
    {
      question: "O que vou receber pelo valor pago?",
      answer:
        "Você receberá um projeto digital personalizado, desenvolvido para atender as necessidades do seu negócio. Pode ser uma Landing Page, um Site Institucional simples ou um Sistema básico (como controle de estoque, agendamento, catálogo online). O projeto será entregue em até 10 dias úteis.",
      category: "entrega",
    },
    {
      question: "Quais tipos de projetos não estão inclusos no Plano Teste?",
      answer:
        "Projetos complexos com muitas regras de negócio, múltiplos usuários e integrações avançadas — como ERP completo, sistemas hospitalares, marketplaces e plataformas complexas — não fazem parte do Plano Teste, pois demandam planejamento e investimento maiores.",
      category: "limitacoes",
    },
    {
      question: "O que significa 'sistema simples'?",
      answer:
        "Sistemas simples são aqueles com funcionalidades básicas e essenciais para o funcionamento do seu negócio, como cadastro e gerenciamento de clientes, controle de estoque básico, vendas simples, agendamento e gestão básica de informações.",
      category: "geral",
    },
    {
      question: "Quanto tempo leva para entregar meu projeto?",
      answer:
        "Garantimos a entrega em até 10 dias úteis a partir da aprovação do briefing e recebimento de todas as informações necessárias.",
      category: "entrega",
    },
    {
      question: "O que está incluso no período de 30 dias de uso?",
      answer:
        "Durante os 30 dias de uso você terá hospedagem, suporte para dúvidas e pequenas correções, garantindo que o sistema ou site funcione perfeitamente para o seu negócio.",
      category: "suporte",
    },
    {
      question: "E se eu não gostar do projeto após o período de teste?",
      answer:
        "Sem problemas! Você pode simplesmente encerrar o uso ao final dos 30 dias sem pagar nada mais. Não há fidelidade nem cobranças ocultas.",
      category: "garantia",
    },
    {
      question: "Posso fazer alterações durante o período de teste?",
      answer:
        "Sim, pequenas alterações e ajustes podem ser feitos durante o período de teste, desde que estejam dentro do escopo inicial aprovado.",
      category: "suporte",
    },
    {
      question: "O que acontece após o período de teste?",
      answer:
        "Se você gostar do projeto, podemos negociar a continuidade com desconto exclusivo para transformar seu site ou sistema em definitivo, com possíveis funcionalidades extras e suporte contínuo.",
      category: "pos-teste",
    },
    {
      question: "Como funciona o suporte durante o Plano Teste?",
      answer:
        "Oferecemos suporte via WhatsApp ou e-mail para solucionar dúvidas e corrigir eventuais problemas relacionados ao projeto entregue durante os 30 dias.",
      category: "suporte",
    },
    {
      question: "A hospedagem está inclusa?",
      answer:
        "Sim, a hospedagem fica por nossa conta durante todo o período de teste, sem custos adicionais para você.",
      category: "incluso",
    },
    {
      question: "Posso contratar mais de um projeto teste?",
      answer:
        "No momento, o Plano Teste é limitado a um projeto por cliente para garantir qualidade e dedicação total.",
      category: "limitacoes",
    },
    {
      question: "Preciso fornecer algum material para começar?",
      answer:
        "Sim, para desenvolver seu projeto precisamos de informações como: descrição do negócio, objetivos, conteúdos (textos, imagens), e se possível exemplos ou referências do que deseja.",
      category: "inicio",
    },
    {
      question: "E se eu tiver dúvidas durante o processo?",
      answer:
        "Estamos disponíveis para tirar todas as suas dúvidas e orientá-lo durante todo o desenvolvimento e uso do projeto.",
      category: "suporte",
    },
    {
      question: "Qual a forma de pagamento?",
      answer:
        "O pagamento do Plano Teste é feito antecipadamente via métodos digitais como Pix, cartão de crédito ou transferência bancária.",
      category: "pagamento",
    },
    {
      question: "Como posso acompanhar o andamento do meu projeto?",
      answer:
        "Durante o desenvolvimento, mantemos contato constante por WhatsApp ou e-mail para você acompanhar cada etapa e aprovar o que for necessário.",
      category: "acompanhamento",
    },
  ];

  const filteredFaqItems = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const highlights = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Entrega Rápida",
      description: "Até 10 dias úteis",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sem Compromisso",
      description: "30 dias de teste",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Suporte Incluído",
      description: "WhatsApp e email",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <Header />
      {/* Hero Section com gradiente moderno */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">
                FAQ - Plano Teste
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Tire todas suas
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {" "}
                dúvidas
              </span>
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Tudo que você precisa saber sobre nosso plano de teste de 30 dias
              por apenas{" "}
              <span className="font-bold text-yellow-300">R$ 59</span>
            </p>

            {/* Barra de pesquisa moderna */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar nas perguntas..."
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards de destaque */}
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="text-yellow-300 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-1">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-blue-200">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Seção FAQ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
        {searchTerm && (
          <div className="mb-8 text-center">
            <p className="text-slate-600">
              Encontradas{" "}
              <span className="font-semibold text-blue-600">
                {filteredFaqItems.length}
              </span>{" "}
              perguntas para "{searchTerm}"
            </p>
          </div>
        )}

        <div className="space-y-4">
          {filteredFaqItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-200"
            >
              <button
                className={`flex justify-between items-center w-full p-6 text-left transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-blue-50 to-indigo-50"
                    : "bg-white group-hover:bg-slate-50"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h3
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    activeIndex === index
                      ? "text-blue-700"
                      : "text-slate-800 group-hover:text-blue-600"
                  }`}
                >
                  {item.question}
                </h3>
                <div
                  className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-blue-100 text-blue-600 rotate-180"
                      : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-500"
                  }`}
                >
                  <ChevronDown size={16} />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mb-4 rounded-full"></div>
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFaqItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              Nenhuma pergunta encontrada
            </h3>
            <p className="text-slate-500">
              Tente pesquisar com outras palavras-chave
            </p>
          </div>
        )}

        {/* CTA Section modernizada */}
        <div className="mt-20">
          <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-yellow-300/20 to-transparent rounded-full blur-2xl"></div>

            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
                <MessageCircle className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium text-white">
                  Suporte 24h
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ainda com dúvidas?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Nossa equipe está pronta para esclarecer qualquer dúvida
                adicional sobre o Plano Teste
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/SEUNUMERO"
                  className="group inline-flex items-center justify-center bg-white text-blue-700 rounded-2xl font-semibold px-8 py-4 transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Falar no WhatsApp
                </a>

                <a
                  href="mailto:contato@netuno.com"
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white rounded-2xl font-medium px-8 py-4 border border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105"
                >
                  Enviar email
                </a>
              </div>

              <p className="text-blue-200 text-sm mt-6">
                Resposta em até 30 minutos • Atendimento humanizado
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "O que é o Plano Teste Netuno?",
      answer:
        "O Plano Teste é uma oferta especial onde você pode experimentar um site, sistema simples ou landing page personalizada para seu negócio, pagando apenas R$ 59 pelo uso durante 30 dias. É uma forma de você testar nossa solução antes de investir em um projeto definitivo.",
    },
    {
      question: "O que vou receber pelo valor pago?",
      answer:
        "Você receberá um projeto digital personalizado, desenvolvido para atender as necessidades do seu negócio. Pode ser uma Landing Page, um Site Institucional simples ou um Sistema básico (como controle de estoque, agendamento, catálogo online). O projeto será entregue em até 10 dias úteis.",
    },
    {
      question: "Quais tipos de projetos não estão inclusos no Plano Teste?",
      answer:
        "Projetos complexos com muitas regras de negócio, múltiplos usuários e integrações avançadas — como ERP completo, sistemas hospitalares, marketplaces e plataformas complexas — não fazem parte do Plano Teste, pois demandam planejamento e investimento maiores.",
    },
    {
      question: "O que significa 'sistema simples'?",
      answer:
        "Sistemas simples são aqueles com funcionalidades básicas e essenciais para o funcionamento do seu negócio, como cadastro e gerenciamento de clientes, controle de estoque básico, vendas simples, agendamento e gestão básica de informações.",
    },
    {
      question: "Quanto tempo leva para entregar meu projeto?",
      answer:
        "Garantimos a entrega em até 10 dias úteis a partir da aprovação do briefing e recebimento de todas as informações necessárias.",
    },
    {
      question: "O que está incluso no período de 30 dias de uso?",
      answer:
        "Durante os 30 dias de uso você terá hospedagem, suporte para dúvidas e pequenas correções, garantindo que o sistema ou site funcione perfeitamente para o seu negócio.",
    },
    {
      question: "E se eu não gostar do projeto após o período de teste?",
      answer:
        "Sem problemas! Você pode simplesmente encerrar o uso ao final dos 30 dias sem pagar nada mais. Não há fidelidade nem cobranças ocultas.",
    },
    {
      question: "Posso fazer alterações durante o período de teste?",
      answer:
        "Sim, pequenas alterações e ajustes podem ser feitos durante o período de teste, desde que estejam dentro do escopo inicial aprovado.",
    },
    {
      question: "O que acontece após o período de teste?",
      answer:
        "Se você gostar do projeto, podemos negociar a continuidade com desconto exclusivo para transformar seu site ou sistema em definitivo, com possíveis funcionalidades extras e suporte contínuo.",
    },
    {
      question: "Como funciona o suporte durante o Plano Teste?",
      answer:
        "Oferecemos suporte via WhatsApp ou e-mail para solucionar dúvidas e corrigir eventuais problemas relacionados ao projeto entregue durante os 30 dias.",
    },
    {
      question: "A hospedagem está inclusa?",
      answer:
        "Sim, a hospedagem fica por nossa conta durante todo o período de teste, sem custos adicionais para você.",
    },
    {
      question: "Posso contratar mais de um projeto teste?",
      answer:
        "No momento, o Plano Teste é limitado a um projeto por cliente para garantir qualidade e dedicação total.",
    },
    {
      question: "Preciso fornecer algum material para começar?",
      answer:
        "Sim, para desenvolver seu projeto precisamos de informações como: descrição do negócio, objetivos, conteúdos (textos, imagens), e se possível exemplos ou referências do que deseja.",
    },
    {
      question: "E se eu tiver dúvidas durante o processo?",
      answer:
        "Estamos disponíveis para tirar todas as suas dúvidas e orientá-lo durante todo o desenvolvimento e uso do projeto.",
    },
    {
      question: "Qual a forma de pagamento?",
      answer:
        "O pagamento do Plano Teste é feito antecipadamente via métodos digitais como Pix, cartão de crédito ou transferência bancária.",
    },
    {
      question: "Como posso acompanhar o andamento do meu projeto?",
      answer:
        "Durante o desenvolvimento, mantemos contato constante por WhatsApp ou e-mail para você acompanhar cada etapa e aprovar o que for necessário.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-figtree">
      <Header />

      {/* Ajuste principal: mt-32 para empurrar o conteúdo para baixo da navbar */}
      <main className="max-w-6xl mx-auto mt-32 pb-20 px-4 sm:px-8">
        {/* Adicionei pt-8 para mais espaço interno */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl font-bold text-netuno-text-primary mb-6">
            FAQ - Plano Teste Netuno
          </h1>
          <p className="text-xl text-netuno-text-tertiary max-w-3xl mx-auto">
            Tire todas suas dúvidas sobre nosso plano de teste de 30 dias por
            apenas R$ 59
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-netuno-light rounded-xl overflow-hidden transition-all duration-200 hover:shadow-sm"
            >
              <button
                className={`flex justify-between items-center w-full p-6 text-left ${activeIndex === index ? "bg-netuno-light" : "bg-white"}`}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-netuno-text-primary">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
                  size={20}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-96 pb-6" : "max-h-0"}`}
              >
                <p className="text-netuno-text-tertiary">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-netuno-blue/5 p-8 rounded-2xl border border-netuno-blue/10">
          <h3 className="text-2xl font-bold text-netuno-text-primary mb-4">
            Ainda com dúvidas?
          </h3>
          <p className="text-netuno-text-tertiary mb-6 max-w-2xl mx-auto">
            Entre em contato conosco via WhatsApp ou e-mail para esclarecer
            qualquer dúvida adicional sobre o Plano Teste.
          </p>
          <a
            href="https://wa.me/SEUNUMERO"
            className="inline-flex items-center justify-center bg-netuno-blue text-white rounded-2xl text-center cursor-pointer font-semibold text-sm px-6 py-3 h-[42px] border border-netuno-blue hover:bg-netuno-blue/90 transition-all duration-200"
          >
            Falar com atendente
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

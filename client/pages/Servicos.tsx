import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowRight,
  Zap,
  Globe,
  Cpu,
  Check,
  Star,
  Shield,
  Clock,
} from "lucide-react";
import { useState } from "react";

export default function ModernServicos() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: "landing",
      icon: Zap,
      title: "Landing Pages",
      subtitle: "que Convertem",
      description:
        "Transforme visitantes em clientes com páginas exclusivas, criadas para máxima conversão. Unimos design estratégico, copywriting persuasivo e otimização mobile para resultados reais.",
      features: [
        "Design personalizado, alinhado à sua identidade",
        "Integração com CRMs e ferramentas essenciais",
        "Testes A/B para otimização contínua",
        "Performance e responsividade garantidas",
        "Copywriting focado em conversão",
        "Design mobile-first para todos os dispositivos",
      ],
      cta: "Quero minha Landing Page",
      color: "blue",
    },
    {
      id: "sites",
      icon: Globe,
      title: "Sites",
      subtitle: "que Impressionam",
      description:
        "Sua presença digital reforçada com design elegante, usabilidade otimizada e tecnologia segura. Criamos sites que destacam sua marca, aumentam a credibilidade e conquistam a confiança dos seus clientes.",
      badges: [
        "🚀 100% Responsivo",
        "🔍 SEO Otimizado",
        "🛡️ Segurança Avançada",
        "📱 Administração Mobile Fácil",
        "⚡ Performance Rápida",
        "🔄 Atualizações Simplificadas",
        "🎨 Design Personalizado",
        "📊 Análises e Métricas Integradas",
      ],
      cta: "Quero meu Site Institucional",
      color: "indigo",
    },
    {
      id: "sistemas",
      icon: Cpu,
      title: "Sistemas",
      subtitle: "Sob Medida",
      description:
        "Automatize processos e aumente sua eficiência com sistemas personalizados, desenvolvidos para atender exatamente às necessidades do seu negócio.",
      solutions: [
        {
          title: "Sistemas de Gestão",
          description: "Controle completo e integrado do seu negócio.",
        },
        {
          title: "E-commerces",
          description: "Lojas online escaláveis e seguras.",
        },
        {
          title: "Sistemas para Gestão Escolar",
          description:
            "Controle de matrículas, notas, frequência e comunicação com pais.",
        },
        {
          title: "Sistemas de Agendamento",
          description:
            "Ferramentas para gerenciamento de reservas e compromissos.",
        },
        {
          title: "Sistemas de Controle Financeiro",
          description:
            "Gestão de contas, fluxo de caixa e relatórios detalhados.",
        },
        {
          title: "Portais Corporativos",
          description: "Plataformas internas para comunicação e colaboração.",
        },
      ],
      cta: "Quero um Sistema Personalizado",
      color: "purple",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-figtree">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Star className="w-4 h-4" />
            Nossos Serviços
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Soluções digitais que
            <span className="text-blue-600 block">impulsionam seu negócio</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Desenvolvemos experiências digitais excepcionais que combinam design
            inovador, tecnologia avançada e estratégia focada em resultados.
          </p>
        </div>
      </section>

      <main className="px-4 sm:px-8 lg:px-16 pb-20">
        {/* Services Grid */}
        <div className="max-w-7xl mx-auto space-y-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden bg-white rounded-3xl p-8 md:p-12 border border-slate-200 transition-all duration-500 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
                <div className="w-full h-full bg-blue-600 rounded-full blur-3xl"></div>
              </div>

              <div
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-start gap-8 lg:gap-12`}
              >
                {/* Icon Section */}
                <div className="flex-shrink-0">
                  <div
                    className={`relative p-6 bg-blue-50 rounded-2xl border-2 border-blue-100 transition-all duration-300 ${
                      hoveredCard === service.id ? "scale-110 rotate-3" : ""
                    }`}
                  >
                    <service.icon
                      className="w-12 h-12 text-blue-600"
                      strokeWidth={1.5}
                    />
                    {hoveredCard === service.id && (
                      <div className="absolute inset-0 bg-blue-100 rounded-2xl blur-xl opacity-50"></div>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                      {service.title}{" "}
                      <span className="text-blue-600">{service.subtitle}</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  {service.features && (
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 group/item"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 transition-all duration-300 group-hover/item:scale-150"></div>
                          <span className="text-slate-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Badges for Sites */}
                  {service.badges && (
                    <div className="flex flex-wrap gap-3">
                      {service.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors duration-300"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Solutions for Sistemas */}
                  {service.solutions && (
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                      <h3 className="font-bold text-blue-700 mb-4 text-lg">
                        Soluções que entregamos:
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.solutions.map((solution, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 group/solution"
                          >
                            <div className="bg-blue-600 text-white p-1.5 rounded-full mt-0.5 flex-shrink-0 transition-all duration-300 group-hover/solution:scale-110">
                              <Check className="w-3 h-3" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-1">
                                {solution.title}
                              </h4>
                              <p className="text-sm text-slate-600">
                                {solution.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="pt-4">
                    <button className="group/btn relative inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                      <span className="relative z-10">{service.cta}</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="max-w-4xl mx-auto mt-24">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Garantia de Qualidade
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Nossa Garantia de Qualidade
              </h3>

              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Todos os projetos incluem suporte pós-entrega, treinamento da
                equipe, certificado SSL gratuito e garantia de 30 dias contra
                eventuais defeitos.
              </p>

              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-xl border border-blue-100">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">
                  Entrega ágil: projetos padrão em até 10 dias úteis
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

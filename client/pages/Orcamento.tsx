import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight, Zap, Globe, Cpu } from "lucide-react";

export default function Servicos() {
  return (
    <div className="min-h-screen bg-white font-figtree">
      <Header />
      <main className="py-20 px-4 sm:px-8 lg:px-16">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20"></div>

        {/* Landing Pages */}
        <section className="max-w-6xl mx-auto mb-20 group">
          <div className="bg-gradient-to-br from-white to-netuno-light/50 p-8 rounded-3xl shadow-lg border border-netuno-light hover:border-netuno-blue/20 transition-all duration-300 hover:shadow-netuno-blue/10 hover:-translate-y-1">
            <div className="flex items-start gap-6">
              <div className="bg-netuno-blue/10 p-4 rounded-xl">
                <Zap className="text-netuno-blue" size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-netuno-text-primary mb-4">
                  Landing Pages{" "}
                  <span className="text-netuno-blue">que Convertem</span>
                </h2>
                <p className="text-lg text-netuno-text-tertiary mb-6">
                  Transforme visitantes em clientes com páginas exclusivas,
                  criadas para máxima conversão. Unimos design estratégico,
                  copywriting persuasivo e otimização mobile para resultados
                  reais.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-netuno-blue rounded-full"></span>
                    <span>Design personalizado, alinhado à sua identidade</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-netuno-blue rounded-full"></span>
                    <span>Integração com CRMs e ferramentas essenciais</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-netuno-blue rounded-full"></span>
                    <span>Testes A/B para otimização contínua</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-netuno-blue rounded-full"></span>
                    <span>Performance e responsividade garantidas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-netuno-blue rounded-full"></span>
                    <span>Copywriting focado em conversão</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-netuno-blue rounded-full"></span>
                    <span>Design mobile-first para todos os dispositivos</span>
                  </li>
                </ul>
                <button className="group relative overflow-hidden flex items-center gap-3 bg-white text-netuno-blue px-8 py-4 rounded-xl hover:bg-netuno-blue hover:text-white transition-all duration-300 border-2 border-netuno-blue hover:border-white shadow-lg hover:shadow-netuno-blue/30">
                  <span className="relative z-10">
                    Quero minha Landing Page
                  </span>
                  <ArrowRight className="relative z-10" size={20} />
                  <span className="absolute inset-0 bg-gradient-to-r from-white to-netuno-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sites */}
        <section className="max-w-6xl mx-auto mb-20 group">
          <div className="bg-gradient-to-br from-white to-netuno-light/50 p-8 rounded-3xl shadow-lg border border-netuno-light hover:border-netuno-blue/20 transition-all duration-300 hover:shadow-netuno-blue/10 hover:-translate-y-1">
            <div className="flex items-start gap-6">
              <div className="bg-netuno-blue/10 p-4 rounded-xl">
                <Globe
                  className="text-netuno-blue"
                  size={32}
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-netuno-text-primary mb-4">
                  Sites{" "}
                  <span className="text-netuno-blue">que Impressionam</span>
                </h2>
                <p className="text-lg text-netuno-text-tertiary mb-6">
                  Sua presença digital reforçada com design elegante,
                  usabilidade otimizada e tecnologia segura. Criamos sites que
                  destacam sua marca, aumentam a credibilidade e conquistam a
                  confiança dos seus clientes.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-netuno-blue/10 text-netuno-blue px-4 py-2 rounded-full text-sm font-medium border border-netuno-blue/20">
                    🚀 100% Responsivo
                  </span>
                  <span className="bg-netuno-blue/10 text-netuno-blue px-4 py-2 rounded-full text-sm font-medium border border-netuno-blue/20">
                    🔍 SEO Otimizado
                  </span>
                  <span className="bg-netuno-blue/10 text-netuno-blue px-4 py-2 rounded-full text-sm font-medium border border-netuno-blue/20">
                    🛡️ Segurança Avançada
                  </span>
                  <span className="bg-netuno-blue/10 text-netuno-blue px-4 py-2 rounded-full text-sm font-medium border border-netuno-blue/20">
                    📱 Administração Mobile Fácil
                  </span>
                  <span className="bg-netuno-blue/10 text-netuno-blue px-4 py-2 rounded-full text-sm font-medium border border-netuno-blue/20">
                    ⚡ Performance Rápida
                  </span>
                  <span className="bg-netuno-blue/10 text-netuno-blue px-4 py-2 rounded-full text-sm font-medium border border-netuno-blue/20">
                    🔄 Atualizações Simplificadas
                  </span>
                  <span className="bg-netuno-blue/10 text-netuno-blue px-4 py-2 rounded-full text-sm font-medium border border-netuno-blue/20">
                    🎨 Design Personalizado
                  </span>
                  <span className="bg-netuno-blue/10 text-netuno-blue px-4 py-2 rounded-full text-sm font-medium border border-netuno-blue/20">
                    📊 Análises e Métricas Integradas
                  </span>
                </div>
                <button className="group relative overflow-hidden flex items-center gap-3 bg-white text-netuno-blue px-8 py-4 rounded-xl hover:bg-netuno-blue hover:text-white transition-all duration-300 border-2 border-netuno-blue hover:border-white shadow-lg hover:shadow-netuno-blue/30">
                  <span className="relative z-10">
                    Quero meu Site Institucional
                  </span>
                  <ArrowRight className="relative z-10" size={20} />
                  <span className="absolute inset-0 bg-gradient-to-r from-white to-netuno-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sistemas */}
        <section className="max-w-6xl mx-auto group">
          <div className="bg-gradient-to-br from-white to-netuno-light/50 p-8 rounded-3xl shadow-lg border border-netuno-light hover:border-netuno-blue/20 transition-all duration-300 hover:shadow-netuno-blue/10 hover:-translate-y-1">
            <div className="flex items-start gap-6">
              <div className="bg-netuno-blue/10 p-4 rounded-xl">
                <Cpu className="text-netuno-blue" size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-netuno-text-primary mb-4">
                  Sistemas <span className="text-netuno-blue">Sob Medida</span>
                </h2>
                <p className="text-lg text-netuno-text-tertiary mb-6">
                  Automatize processos e aumente sua eficiência com sistemas
                  personalizados, desenvolvidos para atender exatamente às
                  necessidades do seu negócio.
                </p>
                <div className="mb-8 p-6 bg-netuno-blue/5 rounded-xl border border-netuno-blue/10">
                  <h3 className="font-semibold text-netuno-blue mb-3">
                    Soluções que entregamos:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-netuno-blue text-white p-1 rounded-full mt-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Sistemas de Gestão</h4>
                        <p className="text-sm text-netuno-text-tertiary">
                          Controle completo e integrado do seu negócio.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-netuno-blue text-white p-1 rounded-full mt-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">E-commerces</h4>
                        <p className="text-sm text-netuno-text-tertiary">
                          Lojas online escaláveis e seguras.
                        </p>
                      </div>
                    </div>

                    {/* Novos exemplos adicionados */}
                    <div className="flex items-start gap-3">
                      <div className="bg-netuno-blue text-white p-1 rounded-full mt-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Sistemas para Gestão Escolar
                        </h4>
                        <p className="text-sm text-netuno-text-tertiary">
                          Controle de matrículas, notas, frequência e
                          comunicação com pais.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-netuno-blue text-white p-1 rounded-full mt-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Sistemas de Agendamento</h4>
                        <p className="text-sm text-netuno-text-tertiary">
                          Ferramentas para gerenciamento de reservas e
                          compromissos.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-netuno-blue text-white p-1 rounded-full mt-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Sistemas de Controle Financeiro
                        </h4>
                        <p className="text-sm text-netuno-text-tertiary">
                          Gestão de contas, fluxo de caixa e relatórios
                          detalhados.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-netuno-blue text-white p-1 rounded-full mt-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Portais Corporativos</h4>
                        <p className="text-sm text-netuno-text-tertiary">
                          Plataformas internas para comunicação e colaboração.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="group relative overflow-hidden flex items-center gap-3 bg-white text-netuno-blue px-8 py-4 rounded-xl hover:bg-netuno-blue hover:text-white transition-all duration-300 border-2 border-netuno-blue hover:border-white shadow-lg hover:shadow-netuno-blue/30">
                  <span className="relative z-10">
                    Quero um Sistema Personalizado
                  </span>
                  <ArrowRight className="relative z-10" size={20} />
                  <span className="absolute inset-0 bg-gradient-to-r from-white to-netuno-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Garantia */}
        <div className="max-w-6xl mx-auto mt-24 text-center bg-netuno-blue/5 p-8 rounded-2xl border border-netuno-blue/10">
          <h3 className="text-2xl font-bold text-netuno-text-primary mb-4">
            Nossa Garantia de Qualidade
          </h3>
          <p className="text-netuno-text-tertiary max-w-3xl mx-auto">
            Todos os projetos incluem suporte pós-entrega, treinamento da
            equipe, certificado SSL gratuito e garantia de 30 dias contra
            eventuais defeitos.
            <span className="block font-semibold text-netuno-blue mt-2">
              Entrega ágil: projetos padrão em até 10 dias úteis.
            </span>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

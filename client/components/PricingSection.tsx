import React from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import {
  SparklesIcon,
  GiftIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

interface IconProps {
  className?: string;
}

const CheckIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path
      d="M5 12L10 17L19 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WarningIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block w-6 h-6 flex-shrink-0 ${className}`}
  >
    <path
      d="M12 1L23 20H1L12 1Z"
      fill="#FEF3C7"
      stroke="#F59E0B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 9V13M12 17V17.01"
      stroke="#D97706"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PricingSection() {
  return (
    <section className="flex flex-col items-center bg-slate-50 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-20 w-full max-w-7xl">
        {/* Cabeçalho modernizado */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight px-2">
            Nossos Serviços
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed px-4">
            Oferecemos duas categorias de serviços para atender diferentes
            necessidades e orçamentos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full">
          {/* Fast Projects - Modernizado */}
          <div className="group bg-white border-2 border-blue-200 hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] p-6 sm:p-8 lg:p-10 rounded-2xl relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-50 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 relative z-10 gap-4 sm:gap-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-2xl flex items-center justify-center sm:mr-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0">
                <RocketLaunchIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                  Projetos rápidos, visuais e acessíveis
                </h3>
              </div>
            </div>

            <p className="text-slate-600 mb-6 text-base sm:text-lg leading-relaxed">
              Perfeito para empresas que querem ter presença digital
              profissional sem esperar semanas e sem custos altos.
            </p>

            <h4 className="font-bold text-slate-900 mb-4 text-base sm:text-lg">
              Exemplos de projetos:
            </h4>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></div>
                <div className="text-sm sm:text-base">
                  <strong className="text-slate-900">Landing Pages:</strong>
                  <span className="text-slate-600 ml-1">
                    Páginas únicas para captar clientes
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></div>
                <div className="text-sm sm:text-base">
                  <strong className="text-slate-900">
                    Sites institucionais:
                  </strong>
                  <span className="text-slate-600 ml-1">
                    Apresente sua empresa com páginas modernas
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></div>
                <div className="text-sm sm:text-base">
                  <strong className="text-slate-900">Sistemas simples:</strong>
                  <span className="text-slate-600 ml-1">
                    Agendamento, controle de estoque e mais
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center p-4 sm:p-6 bg-blue-50 rounded-xl border border-blue-100">
              <span className="font-bold text-blue-800 text-base sm:text-lg text-center w-full">
                Entrega em até 10 dias úteis
              </span>
            </div>
          </div>

          {/* Complex Projects - Modernizado */}
          <div className="group bg-white border-2 border-slate-300 hover:border-slate-500 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] p-6 sm:p-8 lg:p-10 rounded-2xl relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-slate-100 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 relative z-10 gap-4 sm:gap-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-600 rounded-2xl flex items-center justify-center sm:mr-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0">
                <RocketLaunchIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                  Projetos robustos e complexos
                </h3>
              </div>
            </div>

            <h4 className="font-bold text-slate-900 mb-4 text-base sm:text-lg">
              Ideal para sistemas como:
            </h4>

            <div className="space-y-3 mb-6">
              {[
                "ERP",
                "Gestão hospitalar",
                "Plataformas educacionais",
                "Marketplaces complexos",
                "Sistemas jurídicos",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-500 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-700 font-medium text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-6 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-slate-600 italic text-base sm:text-lg leading-relaxed">
                Esses projetos demandam planejamento, tempo e investimento
                maiores, garantindo confiabilidade e longevidade.
              </p>
            </div>
          </div>
        </div>

        {/* Plano Teste - Completamente modernizado */}
        <div className="w-full py-12 sm:py-16 lg:py-24 bg-blue-50 rounded-2xl sm:rounded-3xl px-4 sm:px-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">🚀</span>
                  <span className="font-bold text-blue-600 text-lg sm:text-xl">
                    Plano Teste Netuno
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight px-2">
                  Quer tirar sua ideia do papel rápido, gastando pouco e sem
                  risco?
                </h2>

                <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
                  Nosso Plano Teste é a oportunidade perfeita para criar um
                  site, sistema ou landing page funcional em poucos dias e ver
                  na prática os resultados para o seu negócio.
                </p>
              </div>

              <div className="mb-8 sm:mb-12 border-2 border-blue-300 shadow-2xl p-6 sm:p-8 lg:p-10 rounded-2xl bg-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-slate-900 text-center sm:text-left">
                  Como funciona:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {/* Passo 1 e 2 */}
                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold text-base sm:text-lg">
                          1
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                          Você conta sua ideia
                        </h4>
                        <p className="text-slate-600 text-sm sm:text-lg">
                          LP, site ou sistema simples
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold text-base sm:text-lg">
                          2
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                          Desenvolvemos uma versão inicial
                        </h4>
                        <p className="text-slate-600 text-sm sm:text-lg">
                          Personalizada e funcional em 3-10 dias úteis
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Passo 3 e 4 */}
                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold text-base sm:text-lg">
                          3
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                          Você testa por 30 dias
                        </h4>
                        <p className="text-slate-600 text-sm sm:text-lg">
                          Coleta feedback e avalia resultados
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold text-base sm:text-lg">
                          4
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                          Decisão final
                        </h4>
                        <p className="text-slate-600 text-sm sm:text-lg">
                          Se gostar transformamos em definitivo com desconto
                          especial
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-12 sm:mb-16">
                {/* Card Principal Modernizado */}
                <div className="bg-white border-2 border-slate-200 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
                    {/* Coluna Esquerda - O que pode criar */}
                    <div className="space-y-4 sm:space-y-6 order-1">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                          <SparklesIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-slate-800">
                          O que você pode criar:
                        </h4>
                      </div>

                      <div className="space-y-3 sm:space-y-4">
                        {[
                          "Landing Pages profissionais",
                          "Sites institucionais responsivos",
                          "Sistemas básicos de gestão",
                        ].map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700 text-sm sm:text-lg">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="p-3 sm:p-4 bg-amber-50 border-l-4 border-amber-400 rounded-lg">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <ExclamationTriangleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-amber-800 font-medium text-sm sm:text-base">
                            Projetos complexos, com alta regra de negócio, não
                            estão disponíveis no Plano Teste.
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Coluna Central - Benefícios */}
                    <div className="space-y-4 sm:space-y-6 order-2">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                          <GiftIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-slate-800">
                          Benefícios:
                        </h4>
                      </div>

                      <div className="space-y-3 sm:space-y-4">
                        {[
                          "Preço acessível",
                          "Entrega rápida",
                          "20% OFF na conversão para Landing Page definitiva",
                          "30% OFF na conversão para Site ou Sistema definitivo",
                          "Sem fidelidade",
                        ].map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700 text-sm sm:text-lg">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Coluna Direita - Valor */}
                    <div className="space-y-4 sm:space-y-6 order-3">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                          <CurrencyDollarIcon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-slate-800">
                          Investimento:
                        </h4>
                      </div>

                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex justify-between items-center bg-slate-100 p-3 sm:p-4 rounded-xl">
                          <span className="text-slate-700 font-medium text-sm sm:text-base">
                            Normal:
                          </span>
                          <span className="line-through text-slate-500 text-base sm:text-lg">
                            R$ 79,00
                          </span>
                        </div>

                        <div className="flex justify-between items-center bg-emerald-50 p-3 sm:p-4 rounded-xl border-2 border-emerald-200">
                          <span className="text-slate-900 font-bold text-sm sm:text-base">
                            Promoção:
                          </span>
                          <span className="text-emerald-600 font-bold text-xl sm:text-2xl">
                            R$ 59,00
                          </span>
                        </div>

                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-start gap-2 sm:gap-3">
                            <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700 text-sm sm:text-lg">
                              Duração: 30 dias de uso
                            </span>
                          </div>

                          <div className="flex items-start gap-2 sm:gap-3">
                            <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700 text-sm sm:text-lg">
                              Hospedagem e Suporte: incluídos
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center px-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const numeroZap = "554196880856";
                    const mensagem =
                      "Olá! Tenho interesse no Plano Teste da Netuno. Quero entender como funciona e começar o quanto antes.";
                    const url = `https://wa.me/${numeroZap}?text=${encodeURIComponent(mensagem)}`;
                    window.open(url, "_blank");
                  }}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <RocketLaunchIcon className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="text-center">
                    Começar Plano Teste (R$ 59,00 promoção)
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

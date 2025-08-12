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
    <section className="flex flex-col items-center bg-white py-24 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col items-center gap-16 w-full max-w-5xl">
        {/* Cabeçalho movido para dentro da estrutura principal */}
        <div className="flex flex-col items-center gap-4 w-full text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Serviços
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
            Oferecemos duas categorias de serviços para atender diferentes
            necessidades e orçamentos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          {/* Fast Projects */}
          <div className="border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <RocketLaunchIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl text-gray-900">
                  Projetos rápidos, visuais e acessíveis
                </h3>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Perfeito para empresas que querem ter presença digital
              profissional sem esperar semanas e sem custos altos.
            </p>
            <h4 className="font-semibold text-gray-900 mb-2">
              Exemplos de projetos:
            </h4>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <strong>Landing Pages:</strong> Páginas únicas para captar
                clientes
              </li>
              <li>
                <strong>Sites institucionais:</strong> Apresente sua empresa com
                páginas modernas
              </li>
              <li>
                <strong>Sistemas simples:</strong> Agendamento, controle de
                estoque e mais
              </li>
            </ul>
            <div className="flex items-center mt-6 p-4 bg-blue-50 rounded-lg">
              <span className="font-semibold text-blue-800">
                Entrega em até 10 dias úteis
              </span>
            </div>
          </div>

          {/* Complex Projects */}
          <div className="border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <RocketLaunchIcon className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h3 className="text-2xl text-gray-900">
                  Projetos robustos e complexos
                </h3>
              </div>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Ideal para sistemas como:
            </h4>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>ERP</li>
              <li>Gestão hospitalar</li>
              <li>Plataformas educacionais</li>
              <li>Marketplaces complexos</li>
              <li>Sistemas jurídicos</li>
            </ul>
            <p className="text-gray-600 italic mt-4">
              Esses projetos demandam planejamento, tempo e investimento
              maiores, garantindo confiabilidade e longevidade.
            </p>
          </div>
        </div>

        {/* Plano Teste */}
        <div className="w-full py-20 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  🚀 Plano Teste Netuno
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Quer tirar sua ideia do papel rápido, gastando pouco e sem
                  risco?
                </p>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Nosso Plano Teste é a oportunidade perfeita para criar um
                  site, sistema ou landing page funcional em poucos dias e ver
                  na prática os resultados para o seu negócio.
                </p>
              </div>

              <div className="mb-8 border-2 border-blue-300 shadow-xl p-6 rounded-lg bg-white">
                <h3 className="text-2xl font-semibold mb-6">Como funciona:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Passo 1 e 2 */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Você conta sua ideia
                        </h4>
                        <p className="text-gray-600">
                          LP, site ou sistema simples
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Desenvolvemos uma versão inicial
                        </h4>
                        <p className="text-gray-600">
                          Personalizada e funcional em 3-10 dias úteis
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Passo 3 e 4 */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Você testa por 30 dias
                        </h4>
                        <p className="text-gray-600">
                          Coleta feedback e avalia resultados
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-blue-600 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Decisão final
                        </h4>
                        <p className="text-gray-600">
                          Se gostar transformamos em definitivo com desconto
                          especial (20-30% OFF)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 mb-12">
                {/* Card Retangular Horizontal */}
                <div className="border border-gray-200 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-8">
                  {/* Coluna Esquerda - O que pode criar */}
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <SparklesIcon className="h-6 w-6 text-blue-500 mr-3" />
                      <h4 className="text-xl font-semibold text-gray-800">
                        O que você pode criar:
                      </h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Landing Pages profissionais
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Sites institucionais responsivos
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Sistemas básicos de gestão
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-lg text-sm">
                      <ExclamationTriangleIcon className="inline h-5 w-5 text-amber-500 mr-2" />
                      <span className="text-amber-800">
                        Projetos complexos, com alta regra de negócio, não estão
                        disponíveis no Plano Teste.
                      </span>
                    </div>
                  </div>

                  {/* Coluna Central - Benefícios */}
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <GiftIcon className="h-6 w-6 text-purple-500 mr-3" />
                      <h4 className="text-xl font-semibold text-gray-800">
                        Benefícios:
                      </h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Preço acessível</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Entrega rápida (3-10 dias)
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Descontos de 20-30% OFF
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Sem fidelidade</span>
                      </div>
                    </div>
                  </div>

                  {/* Coluna Direita - Valor */}
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <CurrencyDollarIcon className="h-6 w-6 text-emerald-500 mr-3" />
                      <h4 className="text-xl font-semibold text-gray-800">
                        Investimento:
                      </h4>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-700">Normal:</span>
                        <span className="line-through text-gray-400">
                          R$ 79,00
                        </span>
                      </div>
                      <div className="flex justify-between items-center bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                        <span className="text-gray-700 font-medium">
                          Promoção:
                        </span>
                        <span className="text-emerald-600 font-bold text-lg">
                          R$ 59,00
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Duração: 30 dias de uso
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Sem fidelidade: continue só se gostar
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                >
                  <RocketLaunchIcon className="mr-2 h-5 w-5" />
                  Começar Plano Teste (R$ 59,00 promoção)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

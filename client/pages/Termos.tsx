import React from "react";
import Header from "../components/Header";

const TermosDeUso: React.FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Termos de uso
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-8">
                Ao acessar o site da Netuno, você concorda em cumprir estes
                Termos de Serviço, todas as leis e regulamentações aplicáveis, e
                assume a responsabilidade pelo cumprimento de todas as leis
                locais aplicáveis. Caso não concorde com algum desses termos,
                você está proibido de usar ou acessar este site. Os materiais
                contidos neste site são protegidos por leis de direitos autorais
                e marcas comerciais.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12">
                1. Uso de Licença
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                É concedida permissão para baixar temporariamente uma cópia dos
                materiais (informações ou software) no site da Netuno,
                exclusivamente para visualização pessoal e não comercial. Esta é
                a concessão de uma licença, não uma transferência de
                propriedade, e, conforme esta licença, você não pode:
              </p>

              <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700">
                <li className="leading-relaxed">
                  Modificar ou copiar os materiais;
                </li>
                <li className="leading-relaxed">
                  Usar os materiais para qualquer finalidade comercial ou
                  exibição pública (comercial ou não comercial);
                </li>
                <li className="leading-relaxed">
                  Tentar descompilar ou realizar engenharia reversa de qualquer
                  software contido no site da Netuno;
                </li>
                <li className="leading-relaxed">
                  Remover quaisquer direitos autorais ou outras notificações de
                  propriedade dos materiais; ou
                </li>
                <li className="leading-relaxed">
                  Transferir os materiais para outra pessoa ou "espelhar" os
                  materiais em qualquer outro servidor.
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-8">
                Esta licença será automaticamente encerrada caso você viole
                alguma dessas restrições e pode ser encerrada pela Netuno a
                qualquer momento. Ao encerrar a visualização dos materiais ou
                após o término desta licença, você deverá apagar todos os
                materiais baixados em sua posse, seja em formato eletrônico ou
                impresso.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12">
                2. Isenção de Responsabilidade
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Os materiais no site da Netuno são fornecidos "no estado em que
                se encontram". A Netuno não oferece garantias, expressas ou
                implícitas, e, por este meio, nega e isenta-se de todas as
                outras garantias, incluindo, sem limitação, garantias implícitas
                de comercialização, adequação para um propósito específico ou
                não violação de propriedade intelectual ou de outros direitos.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Além disso, a Netuno não garante ou faz qualquer declaração
                sobre a precisão, os resultados esperados ou a confiabilidade do
                uso dos materiais em seu site ou de outra forma relacionados a
                esses materiais ou a sites vinculados a este site.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12">
                3. Limitações
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                Em nenhum caso a Netuno ou seus fornecedores serão responsáveis
                por quaisquer danos (incluindo, sem limitação, danos por perda
                de dados, lucro ou interrupção dos negócios) decorrentes do uso
                ou da incapacidade de uso dos materiais na Netuno, mesmo que a
                Netuno ou um representante autorizado da Netuno tenha sido
                notificado, verbalmente ou por escrito, sobre a possibilidade de
                tais danos. Como algumas jurisdições não permitem limitações em
                garantias implícitas ou limitações de responsabilidade por danos
                consequentes ou incidentais, essas limitações podem não se
                aplicar a você.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12">
                4. Precisão dos Materiais
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                Os materiais exibidos no site da Netuno podem incluir erros
                técnicos, tipográficos ou fotográficos. A Netuno não garante que
                qualquer material em seu site seja preciso, completo ou atual. A
                Netuno pode fazer alterações nos materiais contidos em seu site
                a qualquer momento, sem aviso prévio. No entanto, a Netuno não
                se compromete a atualizar os materiais.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12">
                5. Links
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                A Netuno não revisou todos os sites vinculados ao seu site e não
                é responsável pelo conteúdo de nenhum site vinculado. A inclusão
                de qualquer link não implica endosso pela Netuno do site em
                questão. O uso de qualquer site vinculado é por conta e risco do
                usuário.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12">
                6. Modificações
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                A Netuno pode revisar estes Termos de Serviço a qualquer
                momento, sem aviso prévio. Ao usar este site, você concorda em
                ficar vinculado à versão atual desses Termos de Serviço.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12">
                7. Lei Aplicável
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Estes termos e condições são regidos e interpretados de acordo
                com as leis aplicáveis ao local de operação da Netuno, e você se
                submete irrevogavelmente à jurisdição exclusiva dos tribunais
                daquela localidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermosDeUso;

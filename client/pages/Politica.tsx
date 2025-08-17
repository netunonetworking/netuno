import React from "react";
import Header from "../components/Header";

const PoliticaPrivacidade: React.FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Política de Privacidade
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                A sua privacidade é importante para nós. É política da Netuno
                respeitar sua privacidade em relação a qualquer informação que
                possamos coletar no site da Netuno e outros sites que possuímos
                e operamos.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Solicitamos informações pessoais apenas quando realmente
                precisamos delas para fornecer um serviço. Fazemos isso por
                meios justos e legais, com o seu conhecimento e consentimento.
                Além disso, informamos o motivo da coleta e como esses dados
                serão utilizados.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Mantemos as informações coletadas apenas pelo tempo necessário
                para fornecer o serviço solicitado. Quando armazenamos dados,
                utilizamos medidas comercialmente aceitáveis para proteger
                contra perda, roubo, acesso não autorizado, divulgação, cópia,
                uso ou modificação.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Não compartilhamos informações de identificação pessoal
                publicamente ou com terceiros, exceto quando exigido por lei.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Nosso site pode conter links para sites externos que não são
                operados pela Netuno. Esteja ciente de que não temos controle
                sobre o conteúdo e práticas desses sites e não assumimos
                responsabilidade por suas respectivas políticas de privacidade.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Você é livre para recusar nossa solicitação de informações
                pessoais, entendendo que talvez não possamos fornecer alguns dos
                serviços desejados.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                O uso continuado do nosso site será considerado como aceitação
                de nossas práticas em torno de privacidade e informações
                pessoais. Se tiver dúvidas sobre como lidamos com dados do
                usuário e informações pessoais, entre em contato conosco.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12">
                Publicidade e Cookies
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                O serviço Google AdSense que usamos para veicular publicidade
                utiliza um cookie DoubleClick para exibir anúncios mais
                relevantes e limitar o número de vezes que um anúncio é mostrado
                a você. Para mais informações, consulte as FAQs oficiais de
                privacidade do Google AdSense.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Usamos anúncios para compensar os custos de operação deste site
                e financiar futuros desenvolvimentos. Os cookies de publicidade
                comportamental usados aqui garantem que você receba anúncios
                relevantes, rastreando anonimamente seus interesses e sugerindo
                conteúdo similar que possa interessá-lo.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Vários parceiros anunciam em nosso nome, e os cookies de
                rastreamento de afiliados permitem verificar se você acessou
                nosso site por meio de um parceiro, para que possamos creditar
                corretamente a referência e, quando aplicável, permitir que
                nossos parceiros afiliados ofereçam promoções válidas em suas
                compras.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12">
                Compromisso do Usuário
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                O usuário compromete-se a fazer uso adequado dos conteúdos e
                informações que a Netuno oferece no site, abstendo-se de:
              </p>

              <ul className="list-disc list-inside space-y-3 mb-8 text-gray-700">
                <li className="leading-relaxed">
                  Engajar-se em atividades ilegais ou contrárias à boa-fé e à
                  ordem pública;
                </li>
                <li className="leading-relaxed">
                  Difundir propaganda ou conteúdo de natureza racista,
                  xenofóbica, relacionados a jogos de azar, pornografia ilegal,
                  apologia ao terrorismo ou contra os direitos humanos;
                </li>
                <li className="leading-relaxed">
                  Causar danos aos sistemas físicos (hardware) e lógicos
                  (software) da Netuno, de seus fornecedores ou de terceiros,
                  introduzindo ou disseminando vírus ou outros sistemas
                  prejudiciais.
                </li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12">
                Mais Informações
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Esperamos que esta política esteja clara. Se tiver alguma dúvida
                ou precisar de mais informações, entre em contato conosco.
                Geralmente, é recomendável manter os cookies ativados para uma
                experiência otimizada, especialmente ao interagir com os
                recursos do site.
              </p>

              <p className="text-gray-700 leading-relaxed font-medium">
                Esta política é válida a partir de 13 de novembro de 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliticaPrivacidade;

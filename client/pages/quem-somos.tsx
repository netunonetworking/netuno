import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const QuemSomos: React.FC = () => {
  return (
    <div className="bg-[#1E1DF5]">
      <Header />

      {/* Hero Section - REMOVIDO todo o padding e margin superior */}
      <section className="relative bg-[#1E1DF5] pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 pt-16">
          {" "}
          {/* Adicionado pt-16 aqui */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Conectados com a nova geração do{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              desenvolvimento de sites
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            Desbloqueie todo o potencial que sua empresa pode ter com um site
            que une clientes para o seu site!
          </p>
        </div>
      </section>

      {/* Modernidade e Agilidade */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Modernidade e{" "}
                <span className="bg-gradient-to-r from-[#1E1DF5] to-cyan-500 bg-clip-text text-transparent">
                  agilidade
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Somos uma empresa moderna com um propósito bem definido:
                entregar a você a melhor experiência na criação de sites.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nossa jornada começou após enfrentarmos um desafio ao contratar
                um serviço de web design no passado.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Foi nesse momento que identificamos a lacuna no mercado para uma
                empresa que combinasse design de alto nível, execução rápida,
                atendimento personalizado e soluções completas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hoje, transformamos essa ideia em realidade. Criamos sites que
                encantam visualmente e desempenham com excelência para atingir
                seus objetivos.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E1DF5] to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Resultados Rápidos
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Entregamos soluções eficientes em tempo record, sem
                  comprometer a qualidade e atenção aos detalhes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionários em Grandes Empresas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Funcionários em{" "}
              <span className="bg-gradient-to-r from-[#1E1DF5] to-cyan-500 bg-clip-text text-transparent">
                grandes empresas
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1E1DF5] to-cyan-500 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1E1DF5] to-cyan-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">3+</div>
                    <div className="text-cyan-100 text-sm">
                      Anos de Experiência
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-cyan-100 text-sm">
                      Projetos Entregues
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-cyan-100 text-sm">
                      Clientes Satisfeitos
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24h</div>
                    <div className="text-cyan-100 text-sm">
                      Suporte Disponível
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nosso time é formado por profissionais que já atuaram em algumas
                das maiores empresas do Brasil, trazendo na bagagem expertise,
                visão estratégica e alto padrão de qualidade.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Essa vivência em ambientes corporativos exigentes nos permite
                entregar soluções eficientes, com agilidade, responsabilidade e
                foco em resultados reais.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ao escolher nossos serviços, você conta com uma equipe
                preparada, que entende os desafios do mercado porque já esteve
                lá e agora está aqui para impulsionar o seu crescimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trabalhamos com Amor */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Trabalhamos com{" "}
            <span className="bg-gradient-to-r from-[#1E1DF5] to-cyan-500 bg-clip-text text-transparent">
              amor
            </span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-16 max-w-3xl mx-auto">
            Fazemos aquilo que amamos e ajudamos ainda mais nas vendas do seu
            site ou empresa.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* É pessoal */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E1DF5] to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                É pessoal
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ser uma equipe pequena nos permite estar pessoalmente envolvidos
                em seus projetos o tempo todo - sem iscas e trocas aqui.
              </p>
            </div>

            {/* É colaborativo */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E1DF5] to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                É colaborativo
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Acreditamos que o melhor trabalho acontece quando unimos forças
                como uma entidade - cocriando ativamente juntos como uma equipe.
              </p>
            </div>

            {/* É flexível */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E1DF5] to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                É flexível
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Acreditamos que não existe uma abordagem única para todos quando
                se trata de design - o que importa é o que melhor se adapta aos
                seus objetivos.
              </p>
            </div>

            {/* É eficiente */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E1DF5] to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                É eficiente
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Focamos em entregar resultados práticos e mensuráveis,
                garantindo que cada projeto agregue valor real ao seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1E1DF5] text-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar sua presença digital?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Entre em contato e vamos criar algo incrível juntos.
          </p>
          <a
            href={`https://wa.me/554196880856?text=${encodeURIComponent(
              "Olá! Tenho algumas dúvidas sobre os serviços da Netuno. Poderia me ajudar?",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#1E1DF5] px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-white/20"
          >
            Fale Conosco
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;

import { useEffect } from "react";

export default function FeaturesSection() {
  useEffect(() => {
    // Verifica se há um hash na URL
    if (window.location.hash === "#por-que-escolher") {
      // Rola suavemente para a seção
      const element = document.getElementById("por-que-escolher");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section
      id="por-que-escolher"
      className="flex flex-col items-center bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16"
    >
      <div
        className="flex flex-col items-center gap-12 sm:gap-16 max-w-5xl w-full"
        style={{ maxWidth: "1280px" }}
      >
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight text-center">
            Por que escolher a Netuno?
          </h2>

          <div className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed text-center space-y-4 sm:space-y-6">
            <p>
              Trabalhamos com tecnologias modernas que garantem velocidade no
              desenvolvimento e performance excepcional para seu negócio.
              Entregamos soluções completamente adaptadas às suas necessidades,
              sem complicação e focadas em resolver seus desafios reais de forma
              eficiente.
            </p>

            <p>
              Nossa experiência nos permite construir desde páginas simples e
              elegantes até sistemas robustos e escaláveis, prontos para crescer
              junto com seu projeto. Combinamos inovação, qualidade e um preço
              justo para transformar suas ideias em soluções digitais de alto
              impacto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

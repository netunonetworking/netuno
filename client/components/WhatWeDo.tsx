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
      className="flex flex-col items-center bg-white py-24 px-16"
    >
      <div
        className="flex flex-col items-center gap-16 max-w-5xl w-full"
        style={{ maxWidth: "1280px" }}
      >
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Por que escolher a Netuno?
          </h2>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed text-center">
            Trabalhamos com tecnologias modernas que garantem velocidade no
            desenvolvimento e performance excepcional para seu negócio.
            Entregamos soluções completamente adaptadas às suas necessidades,
            sem complicação e focadas em resolver seus desafios reais de forma
            eficiente.
            <br />
            <br />
            Nossa experiência nos permite construir desde páginas simples e
            elegantes até sistemas robustos e escaláveis, prontos para crescer
            junto com seu projeto. Combinamos inovação, qualidade e um preço
            justo para transformar suas ideias em soluções digitais de alto
            impacto.
          </p>
        </div>
      </div>
    </section>
  );
}

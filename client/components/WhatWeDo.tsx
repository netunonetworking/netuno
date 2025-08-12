import { useEffect } from "react";

export default function WhatWeDo() {
  useEffect(() => {
    // Verifica se há um hash na URL
    if (window.location.hash === "#quem-somos") {
      // Rola suavemente para a seção
      const element = document.getElementById("quem-somos");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section
      id="quem-somos"
      className="flex flex-col items-center bg-white py-24 px-16"
    >
      <div
        className="flex flex-col items-center gap-16 max-w-5xl w-full"
        style={{ maxWidth: "1280px" }}
      >
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-center text-netuno-text-primary font-figtree text-4xl font-semibold leading-tight">
            Quem somos e o que fazemos?
          </h2>

          <p className="text-center text-netuno-text-tertiary font-figtree text-xl leading-relaxed">
            Na Netuno, acreditamos que tecnologia de verdade é aquela que
            resolve problemas reais. Não fazemos apenas sites, sistemas e
            softwares: criamos experiências digitais completas, pensadas para
            transformar ideias em soluções eficientes, rápidas e modernas.
            <br />
            <br />
            Somos especialistas em desenvolver projetos sob medida, alinhados às
            suas necessidades, ao seu orçamento e ao seu público-alvo. Desde
            sites institucionais e e-commerces de alta performance até sistemas
            de gestão complexos e integrações personalizadas, entregamos
            tecnologia de ponta com agilidade, segurança e um preço justo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function WhatWeDo() {
  return (
    <section className="flex flex-col items-center bg-white py-24 px-16">
      <div className="flex flex-col items-center gap-16 max-w-5xl w-full" style={{ maxWidth: "1280px" }}>
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-center text-netuno-text-primary font-figtree text-4xl font-semibold leading-tight">
            O que fazemos
          </h2>
          
          <p className="text-center text-netuno-text-tertiary font-figtree text-xl leading-relaxed">
            Na Netuno, acreditamos que tecnologia de verdade é aquela que resolve problemas reais. Não fazemos apenas sites, sistemas e softwares: criamos experiências digitais completas, pensadas para transformar ideias em soluções eficientes, rápidas e modernas.
            <br /><br />
            Somos especialistas em desenvolver projetos sob medida, alinhados às suas necessidades, ao seu orçamento e ao seu público-alvo. Desde sites institucionais e e-commerces de alta performance até sistemas de gestão complexos e integrações personalizadas, entregamos tecnologia de ponta com agilidade, segurança e um preço justo.
          </p>
        </div>
        
        <div className="w-full max-w-5xl">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/5795e5bc398ff9141c5850194888efecb7619780?width=2560" 
            alt="Netuno digital solutions showcase" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

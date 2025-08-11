interface FeatureProps {
  title: string;
  description: string;
}

function Feature({ title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center gap-6 flex-1">
      <div className="flex items-center justify-center w-12 h-12 p-3 rounded-full border-8 border-netuno-blue-lightest bg-netuno-blue-lighter">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
          alt=""
          className="w-full min-w-5 min-h-5 overflow-hidden object-cover object-center"
          style={{ aspectRatio: "1.42" }}
        />
      </div>
      
      <div className="flex flex-col items-center gap-2 w-full">
        <h3 className="text-center text-netuno-text-primary font-figtree text-xl font-semibold leading-relaxed">
          {title}
        </h3>
        
        <p className="text-center text-netuno-text-tertiary font-figtree text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="flex flex-col items-center bg-white py-24 px-16">
      <div className="flex flex-col items-center gap-16 max-w-5xl w-full" style={{ maxWidth: "1280px" }}>
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-center text-netuno-text-primary font-figtree text-4xl font-semibold leading-tight">
            Por que escolher a Netuno?
          </h2>
          
          <p className="text-center text-netuno-text-tertiary font-figtree text-xl leading-relaxed">
            Uma pergunta que você não precisa ter em sua mente
          </p>
        </div>
        
        <div className="flex items-start gap-8 w-full max-w-5xl">
          <Feature
            title="Tecnologias Modernas"
            description="Usamos tecnologias modernas que garantem velocidade no desenvolvimento e performance para seu negócio."
          />

          <Feature
            title="Soluções Adaptadas"
            description="Entregamos soluções adaptadas à sua necessidade, sem complicação e focadas em resolver seus desafios reais."
          />

          <Feature
            title="Escalabilidade"
            description="Temos experiência para construir desde páginas simples até sistemas robustos quando o projeto crescer."
          />
        </div>

        <button
          className="bg-netuno-blue text-white rounded-2xl text-center cursor-pointer font-semibold text-sm px-[18px] py-2 h-[42px] border border-[rgb(95,125,255)]"
        >
          Começar agora
        </button>
      </div>
    </section>
  );
}

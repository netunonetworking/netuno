import { Zap, Target, TrendingUp } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

function Feature({ title, description, icon: Icon }: FeatureProps) {
  return (
    <div className="flex flex-col items-center gap-6 flex-1">
      <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full border-8 border-blue-100 bg-blue-50">
        <Icon className="w-10 h-10 text-blue-600" />
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <h3 className="text-center text-slate-900 text-xl font-semibold leading-relaxed">
          {title}
        </h3>

        <p className="text-center text-slate-600 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="flex flex-col items-center bg-white py-24 px-16">
      <div
        className="flex flex-col items-center gap-16 max-w-5xl w-full"
        style={{ maxWidth: "1280px" }}
      >
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight text-center">
            Por que escolher a Netuno?
          </h2>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed text-center">
            Uma pergunta que você não precisa ter em sua mente
          </p>
        </div>

        <div className="flex items-start gap-8 w-full max-w-5xl">
          <Feature
            title="Tecnologias Modernas"
            description="Usamos tecnologias modernas que garantem velocidade no desenvolvimento e performance para seu negócio."
            icon={Zap}
          />

          <Feature
            title="Soluções Adaptadas"
            description="Entregamos soluções adaptadas à sua necessidade, sem complicação e focadas em resolver seus desafios reais."
            icon={Target}
          />

          <Feature
            title="Escalabilidade"
            description="Temos experiência para construir desde páginas simples até sistemas robustos quando o projeto crescer."
            icon={TrendingUp}
          />
        </div>
      </div>
    </section>
  );
}

import { Zap, Target, TrendingUp } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

function Feature({ title, description, icon: Icon }: FeatureProps) {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 flex-1 min-w-0 px-2 sm:px-0">
      <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 p-3 sm:p-4 rounded-full border-4 sm:border-8 border-blue-100 bg-blue-50 flex-shrink-0">
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
      </div>

      <div className="flex flex-col items-center gap-2 sm:gap-3 w-full">
        <h3 className="text-center text-slate-900 text-lg sm:text-xl font-semibold leading-relaxed">
          {title}
        </h3>

        <p className="text-center text-slate-600 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="flex flex-col items-center bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16">
      <div
        className="flex flex-col items-center gap-12 sm:gap-16 max-w-5xl w-full"
        style={{ maxWidth: "1280px" }}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-6 leading-tight text-center">
            Por que escolher a Netuno?
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed text-center">
            Uma pergunta que você não precisa ter em sua mente
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-6 lg:gap-8 w-full max-w-5xl">
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

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center bg-white pt-56 pb-24 px-16">
      <div
        className="flex flex-col items-center gap-6 max-w-5xl w-full"
        style={{ maxWidth: "1280px" }}
      >
        <h1 className="text-center text-netuno-dark-light font-figtree text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight">
          Soluções digitais para seu negócio crescer de verdade
        </h1>

        <p className="text-center text-netuno-text-tertiary font-figtree text-base leading-relaxed max-w-4xl">
          Construímos sites, sistemas e softwares rápidos, modernos e feitos
          para resolver seus desafios reais. Quer dar o próximo passo no
          digital? Com a Netuno, você tem tecnologia de ponta com agilidade e
          preço justo.
        </p>

        <Link
          to="/orcamento"
          className="inline-flex items-center justify-center bg-netuno-blue text-white rounded-2xl text-center cursor-pointer font-semibold text-sm px-[18px] py-2 h-[42px] border border-[rgb(95,125,255)] hover:bg-[rgb(95,125,255)] hover:border-white active:scale-95 active:bg-[rgb(80,110,240)] transition-all duration-200"
        >
          Fazer Orçamento
        </Link>
      </div>
    </section>
  );
}

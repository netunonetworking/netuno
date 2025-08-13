import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="flex justify-center items-center bg-gradient-to-b from-black to-netuno-dark-light py-24 px-16">
      <div
        className="flex flex-col items-center justify-center gap-8 max-w-5xl w-full px-8"
        style={{ maxWidth: "1280px" }}
      >
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-center text-white font-figtree text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Vamos juntos começar
            <br />o seu sucesso?
          </h2>

          <p className="text-center text-white font-figtree text-lg leading-tight tracking-tight">
            Comece agora com o plano teste e dê o primeiro passo
            <br />
            para o sucesso digital do seu negócio!
          </p>
        </div>
        <Link
          to="/servicos"
          onClick={() => window.scrollTo(0, 0)}
          className="bg-white text-[rgba(8,8,51,1)] rounded-2xl text-center cursor-pointer font-semibold text-sm px-[18px] py-2 h-[42px] border border-[rgb(209,213,220)] leading-5 hover:opacity-90 transition-opacity"
        >
          Fazer Orçamento
        </Link>
      </div>
    </section>
  );
}

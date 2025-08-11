import Header from "../components/Header";
import Footer from "../components/Footer";

export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-white font-figtree">
      <Header />
      <div className="flex flex-col items-center justify-center py-32 px-16">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-netuno-text-primary mb-8">
            Quem Somos
          </h1>
          <p className="text-xl text-netuno-text-tertiary mb-8">
            Esta página está em construção. Continue conversando para que possamos desenvolver o conteúdo desta seção.
          </p>
          <p className="text-netuno-text-secondary">
            A Netuno está pronta para contar sua história e apresentar nossa equipe.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

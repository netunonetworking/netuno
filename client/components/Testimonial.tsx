export default function Testimonial() {
  return (
    <section className="flex flex-col items-center bg-netuno-gray-50 py-24">
      <div className="flex flex-col items-center gap-16 max-w-5xl w-full px-16">
        <div className="flex flex-col items-center gap-10 w-full">
          <div
            className="flex flex-col items-center gap-8 w-full"
            style={{ maxWidth: "1280px" }}
          >
            <blockquote className="text-4xl font-bold text-slate-900 mb-6 leading-tight text-center">
              "Contratamos a Netuno para criar um sistema de gestão de alunos e
              foi um divisor de águas. Hoje temos controle total do Sistema."
            </blockquote>

            <div className="flex flex-col items-center gap-4">
              <div
                className="w-16 h-16 bg-gray-400 rounded-full"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets%2F28c81031602447bc9032b8e4fa3d20ba%2F97875bba37ac4e10be0b6907b0d67479)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>

              <div className="flex flex-col items-center gap-1">
                <h4 className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed text-center">
                  Maria Eduarda
                </h4>

                <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed text-center">
                  Gerente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

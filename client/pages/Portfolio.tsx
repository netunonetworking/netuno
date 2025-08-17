import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Tipos para os projetos
type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
};

export default function Portfolio() {
  // Estado para filtro ativo
  const [activeFilter, setActiveFilter] = useState("todos");

  // Dados dos projetos (substitua pelas suas imagens e projetos reais)
  const projects: Project[] = [
    {
      id: 1,
      title: "Sistema de Livraria",
      description:
        "Criação de um Sistema e-commerce e interatividade de Livros",
      tags: ["Sistema", "Web Design"],
      image: "/projeto1.png",
      link: "https://exemplo.com/projeto1",
    },
    {
      id: 2,
      title: "Sistema de Gestão Empresarial",
      description:
        "Desenvolvimento completo de sistema ERP personalizado para indústria de médio porte.",
      tags: ["Desenvolvimento", "Sistemas"],
      image: "/portfolio/projeto2.jpg",
    },
    {
      id: 3,
      title: "Campanha de Marketing Digital",
      description:
        "Estratégia completa de marketing digital que aumentou conversões em 150%.",
      tags: ["Marketing", "Branding"],
      image: "/portfolio/projeto3.jpg",
    },
    {
      id: 4,
      title: "Aplicativo Mobile",
      description:
        "Aplicativo de saúde e bem-estar com integração a wearables.",
      tags: ["Mobile", "UI/UX"],
      image: "/portfolio/projeto4.jpg",
    },
    {
      id: 5,
      title: "Redesign de Website",
      description:
        "Atualização completa do website corporativo com foco em performance e SEO.",
      tags: ["Web Design", "SEO"],
      image: "/portfolio/projeto5.jpg",
    },
    {
      id: 6,
      title: "Sistema de Automação",
      description:
        "Automação de processos internos reduzindo tempo de operação em 70%.",
      tags: ["Desenvolvimento", "Automação"],
      image: "/portfolio/projeto6.jpg",
    },
  ];

  // Filtros disponíveis
  const filters = ["todos", "UI/UX", "Desenvolvimento", "Marketing", "Mobile"];

  // Filtrar projetos
  const filteredProjects =
    activeFilter === "todos"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 font-figtree">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#1E1DF5] py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nosso{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfólio
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Explore nossos projetos mais recentes e veja como transformamos
            ideias em soluções incríveis.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white via-blue-50/30 to-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm ${
                  activeFilter === filter
                    ? "bg-[#1E1DF5] text-white shadow-lg shadow-[#1E1DF5]/25 scale-105"
                    : "bg-white/80 text-slate-700 hover:bg-white hover:shadow-md hover:scale-105 border border-slate-200/50"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Grid de Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1E1DF5] text-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Entre em contato e vamos criar algo incrível juntos.
          </p>
          <a
            href="/contato"
            className="inline-block bg-white text-[#1E1DF5] px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-white/20"
          >
            Fale Conosco
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Componente de Card de Projeto
function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-blue-200/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-72 bg-gradient-to-br from-blue-50 to-purple-50">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "scale-110 brightness-110" : "scale-100"
          }`}
        />

        {/* Overlay gradient - mais sutil para imagens com fundo branco */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Floating content on hover */}
        <div
          className={`absolute bottom-0 left-0 p-8 w-full transition-all duration-500 ease-out ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-2xl">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-white/95 backdrop-blur-sm text-slate-800 text-sm font-medium px-4 py-1.5 rounded-full shadow-lg"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="bg-slate-800/90 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg"></div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Title visible when not hovered */}
        <div
          className={`transition-all duration-500 ${isHovered ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"}`}
        >
          <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-300 border border-slate-200/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 relative"
          >
            <span>Ver projeto</span>
            <div className="relative overflow-hidden">
              <svg
                className="w-5 h-5 text-blue-600 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover/link:w-full transition-all duration-300"></div>
          </a>
        )}
      </div>

      {/* Subtle border animation */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
    </div>
  );
}

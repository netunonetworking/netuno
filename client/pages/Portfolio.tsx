import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Tipos para os projetos
type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
};

export default function Portfolio() {
  // Estado para filtro ativo
  const [activeFilter, setActiveFilter] = useState("todos");

  // Dados dos projetos (substitua pelas suas imagens e projetos reais)
  const projects: Project[] = [
    {
      id: 1,
      title: "Design de Interface Moderna",
      description:
        "Criação de interface de usuário para aplicativo financeiro com foco em experiência do usuário.",
      tags: ["UI/UX", "Web Design"],
      imageUrl: "/portfolio/projeto1.jpg",
      link: "https://exemplo.com/projeto1",
    },
    {
      id: 2,
      title: "Sistema de Gestão Empresarial",
      description:
        "Desenvolvimento completo de sistema ERP personalizado para indústria de médio porte.",
      tags: ["Desenvolvimento", "Sistemas"],
      imageUrl: "/portfolio/projeto2.jpg",
    },
    {
      id: 3,
      title: "Campanha de Marketing Digital",
      description:
        "Estratégia completa de marketing digital que aumentou conversões em 150%.",
      tags: ["Marketing", "Branding"],
      imageUrl: "/portfolio/projeto3.jpg",
    },
    {
      id: 4,
      title: "Aplicativo Mobile",
      description:
        "Aplicativo de saúde e bem-estar com integração a wearables.",
      tags: ["Mobile", "UI/UX"],
      imageUrl: "/portfolio/projeto4.jpg",
    },
    {
      id: 5,
      title: "Redesign de Website",
      description:
        "Atualização completa do website corporativo com foco em performance e SEO.",
      tags: ["Web Design", "SEO"],
      imageUrl: "/portfolio/projeto5.jpg",
    },
    {
      id: 6,
      title: "Sistema de Automação",
      description:
        "Automação de processos internos reduzindo tempo de operação em 70%.",
      tags: ["Desenvolvimento", "Automação"],
      imageUrl: "/portfolio/projeto6.jpg",
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
    <div className="min-h-screen bg-white font-figtree">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-netuno-dark py-32 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nosso <span className="text-netuno-blue-light">Portfólio</span>
          </h1>
          <p className="text-xl text-netuno-text-tertiary max-w-3xl mx-auto">
            Explore nossos projetos mais recentes e veja como transformamos
            ideias em soluções incríveis.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-netuno-blue text-white"
                    : "bg-white text-netuno-text-primary hover:bg-gray-100"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-netuno-blue text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl text-netuno-text-tertiary mb-8">
            Entre em contato e vamos criar algo incrível juntos.
          </p>
          <a
            href="/contato"
            className="inline-block bg-white text-netuno-blue px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
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
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={project.imageUrl}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 p-6 w-full transition-all duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-10"
          }`}
        >
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-netuno-blue-light/80 text-white text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-netuno-text-secondary mb-4">{project.description}</p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-netuno-blue font-medium hover:underline inline-flex items-center"
          >
            Ver projeto
            <svg
              className="w-4 h-4 ml-2"
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
          </a>
        )}
      </div>
    </div>
  );
}

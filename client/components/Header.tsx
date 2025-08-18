import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const NetunoLogo = () => (
  <img
    src="/Logo.svg"
    alt="Netuno Logo"
    className="h-8 sm:h-10 w-auto object-contain flex-shrink-0"
  />
);

export default function ModernHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para lidar com links âncora (scroll na mesma página)
  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Função para fechar menu mobile em navegação normal
  const handleNavigation = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    {
      label: "Quem Somos",
      href: "/quem-somos",
      type: "route", // Tipo: rota do React Router
      onClick: handleNavigation,
    },
    {
      label: "Portfólio",
      href: "/portfolio",
      type: "route", // Tipo: rota do React Router
      onClick: handleNavigation,
    },
    {
      label: "Saiba Mais",
      href: "#contato",
      type: "anchor", // Tipo: âncora (scroll)
      onClick: (e) => handleAnchorClick(e, "contato"),
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50"
            : "bg-white/90 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center group transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <NetunoLogo />
                {/* Glow effect no hover */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 bg-slate-50/80 backdrop-blur-sm rounded-2xl p-1 border border-slate-200/50">
                {navItems.map((item, index) => {
                  // Se for uma rota, usa Link do React Router
                  if (item.type === "route") {
                    return (
                      <Link
                        key={index}
                        to={item.href}
                        onClick={item.onClick}
                        className="relative px-4 lg:px-6 py-2 lg:py-3 text-slate-700 font-medium text-sm rounded-xl transition-all duration-300 hover:text-blue-600 hover:bg-white hover:shadow-sm group"
                      >
                        {item.label}
                        {/* Underline animation */}
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-6 lg:group-hover:w-8"></div>
                      </Link>
                    );
                  }

                  // Se for âncora, usa tag a normal com onClick
                  return (
                    <a
                      key={index}
                      href={item.href}
                      onClick={item.onClick}
                      className="relative px-4 lg:px-6 py-2 lg:py-3 text-slate-700 font-medium text-sm rounded-xl transition-all duration-300 hover:text-blue-600 hover:bg-white hover:shadow-sm group"
                    >
                      {item.label}
                      {/* Underline animation */}
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-6 lg:group-hover:w-8"></div>
                    </a>
                  );
                })}
              </div>
            </nav>

            {/* Tablet Navigation (md breakpoint) */}
            <nav className="hidden md:flex lg:hidden items-center">
              <div className="flex items-center gap-1 bg-slate-50/80 backdrop-blur-sm rounded-2xl p-1 border border-slate-200/50">
                {navItems.map((item, index) => {
                  // Se for uma rota, usa Link do React Router
                  if (item.type === "route") {
                    return (
                      <Link
                        key={index}
                        to={item.href}
                        onClick={item.onClick}
                        className="relative px-3 py-2 text-slate-700 font-medium text-xs rounded-xl transition-all duration-300 hover:text-blue-600 hover:bg-white hover:shadow-sm group"
                      >
                        {item.label}
                        {/* Underline animation */}
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-4"></div>
                      </Link>
                    );
                  }

                  // Se for âncora, usa tag a normal com onClick
                  return (
                    <a
                      key={index}
                      href={item.href}
                      onClick={item.onClick}
                      className="relative px-3 py-2 text-slate-700 font-medium text-xs rounded-xl transition-all duration-300 hover:text-blue-600 hover:bg-white hover:shadow-sm group"
                    >
                      {item.label}
                      {/* Underline animation */}
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-4"></div>
                    </a>
                  );
                })}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-2 rounded-xl bg-slate-50 border border-slate-200 transition-all duration-300 hover:bg-slate-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <Menu
                  className={`absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 text-slate-700 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-0 rotate-180"
                      : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 text-slate-700 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-slate-200/50">
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
              <nav className="space-y-1 sm:space-y-2">
                {navItems.map((item, index) => {
                  // Se for uma rota, usa Link do React Router
                  if (item.type === "route") {
                    return (
                      <Link
                        key={index}
                        to={item.href}
                        onClick={item.onClick}
                        className="block px-3 sm:px-4 py-2 sm:py-3 text-slate-700 font-medium text-sm sm:text-base rounded-xl transition-all duration-300 hover:bg-slate-50 hover:text-blue-600 hover:pl-4 sm:hover:pl-6 active:bg-slate-100"
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  // Se for âncora, usa tag a normal com onClick
                  return (
                    <a
                      key={index}
                      href={item.href}
                      onClick={item.onClick}
                      className="block px-3 sm:px-4 py-2 sm:py-3 text-slate-700 font-medium text-sm sm:text-base rounded-xl transition-all duration-300 hover:bg-slate-50 hover:text-blue-600 hover:pl-4 sm:hover:pl-6 active:bg-slate-100"
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer para compensar o header fixo */}
      <div className="h-14 sm:h-16 lg:h-18"></div>
    </>
  );
}

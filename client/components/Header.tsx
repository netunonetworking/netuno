import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const NetunoLogo = () => (
  <svg width="47" height="26" viewBox="0 0 47 26" className="h-7 w-auto">
    <path
      fill="#1D1DF4"
      d="M19.2 25.4c-3.5-.8-8-6.3-6.9-5.9 1.1.4 22.2.9 22.2 0 0-.9-27.1-3-27.1-3-8.2-2-6.8-3.5-6.8-3.5-.3-1.7 4-2.1 4-2.1 13.5-.4 12.7 0 12.7 0-8.6.1-6.1 1.8-4.6 3.6 1.5 1.8 30.3 3.8 31.8 6.5 1.5 2.7-11 4-11 4-2.6 2.2-5.2 2.3-7.9 2.4-2.6.1-3.3.4-6.8-.4z"
    />
    <path
      fill="#1D1DF4"
      d="M27.9.6c3.5.8 8 6.3 6.9 5.9-1.1-.4-22.2-.9-22.2 0 0 .9 27.1 3 27.1 3 8.2 2 6.8 3.5 6.8 3.5.3 1.7-4 2.1-4 2.1-13.5-.4-12.7 0-12.7 0 8.6.1 6.1-1.8 4.6-3.6-1.5-1.8-30.3-3.8-31.8-6.5C3.4 3.7 15.9 2.5 15.9 2.5c2.6-2.2 5.2-2.3 7.9-2.4 2.6-.1 3.3-.3 6.8.5z"
    />
  </svg>
);

// Simulação do Link do React Router para o artifact
const Link = ({ to, children, onClick, className }) => (
  <a href={to} onClick={onClick} className={className}>
    {children}
  </a>
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

  const handleNavClick = (e, targetId) => {
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

  const navItems = [
    {
      label: "Quem Somos",
      href: "#quem-somos",
      onClick: (e) => handleNavClick(e, "quem-somos"),
    },
    {
      label: "Portfólio",
      href: "/portfolio",
      onClick: () => setIsMobileMenuOpen(false),
    },
    {
      label: "Saiba Mais",
      href: "#contato",
      onClick: (e) => handleNavClick(e, "contato"),
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
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => {}}
              className="flex items-center group transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <NetunoLogo />
                {/* Glow effect no hover */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center gap-1 bg-slate-50/80 backdrop-blur-sm rounded-2xl p-1 border border-slate-200/50">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    onClick={item.onClick}
                    className="relative px-6 py-3 text-slate-700 font-medium text-sm rounded-xl transition-all duration-300 hover:text-blue-600 hover:bg-white hover:shadow-sm group"
                  >
                    {item.label}
                    {/* Underline animation */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-8"></div>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-2 rounded-xl bg-slate-50 border border-slate-200 transition-all duration-300 hover:bg-slate-100 hover:scale-105"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 w-6 h-6 text-slate-700 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-0 rotate-180"
                      : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-6 h-6 text-slate-700 transition-all duration-300 ${
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
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    onClick={item.onClick}
                    className="block px-4 py-3 text-slate-700 font-medium rounded-xl transition-all duration-300 hover:bg-slate-50 hover:text-blue-600 hover:pl-6"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer para compensar o header fixo */}
      <div className="h-16 lg:h-18"></div>
    </>
  );
}

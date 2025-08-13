import { Link } from "react-router-dom";

const NetunoLogo = () => (
  <svg width="47" height="26" viewBox="0 0 47 26" className="h-6 w-auto">
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

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <NetunoLogo />
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              to="#quem-somos"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("quem-somos");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="text-netuno-text-secondary font-figtree text-base hover:text-netuno-blue transition-colors"
            >
              Quem Somos
            </Link>
            <Link
              to="/portfolio"
              className="text-netuno-text-secondary font-figtree text-base hover:text-netuno-blue transition-colors"
            >
              Portfólio
            </Link>
            <Link
              to="#contato"
              onClick={(e) => {
                e.preventDefault();
                const footer = document.getElementById("contato");
                if (footer) {
                  footer.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  window.history.pushState(null, "", "#contato");
                }
              }}
              className="text-netuno-text-secondary font-figtree text-base hover:text-netuno-blue transition-colors"
            >
              Saiba Mais
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

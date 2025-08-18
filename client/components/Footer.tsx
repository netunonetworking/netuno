import { Link, LinkProps } from "react-router-dom";

const NetunoLogoWhite = () => (
  <img
    src="Footer.svg"
    alt="Netuno Logo White"
    className="h-16 sm:h-20 lg:h-32 max-w-xs sm:max-w-sm lg:max-w-md flex-1 aspect-[209/49]"
  />
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

interface FooterLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children, ...props }: FooterLinkProps) {
  // Verifica se é um link externo (começa com http ou https)
  const isExternal = href.startsWith("http");

  return isExternal ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white font-figtree text-sm sm:text-base font-medium leading-tight hover:text-netuno-blue-light transition-colors"
      {...props}
    >
      {children}
    </a>
  ) : (
    <Link
      to={href}
      className="text-white font-figtree text-sm sm:text-base font-medium leading-tight hover:text-netuno-blue-light transition-colors"
      {...props}
    >
      {children}
    </Link>
  );
}

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="flex flex-col items-start gap-4 sm:gap-6 w-full sm:w-auto">
      <h3 className="text-white font-poppins text-lg sm:text-xl font-semibold leading-relaxed">
        {title}
      </h3>

      <div className="flex flex-col items-start gap-3 sm:gap-4 w-full">
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      id="contato"
      className="flex flex-col justify-center items-center bg-netuno-dark py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16"
    >
      <div className="flex flex-col items-start gap-12 sm:gap-16 max-w-5xl w-full pt-8 sm:pt-12 lg:pt-16">
        {/* Seção principal com logo e links */}
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-8 w-full pb-12 sm:pb-16 border-b border-netuno-text-secondary">
          {/* Logo */}
          <div className="w-full lg:flex-1 flex justify-center lg:justify-start">
            <NetunoLogoWhite />
          </div>

          {/* Seções de links */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-end items-start gap-8 sm:gap-12 lg:gap-8 w-full lg:flex-1">
            <FooterSection title="Sobre">
              <FooterLink href="/servicos">Serviços</FooterLink>
              <FooterLink href="https://linktr.ee/netunotech">
                Contato
              </FooterLink>
              <FooterLink href="/portfolio">Portifólio</FooterLink>
            </FooterSection>

            <FooterSection title="Política">
              <FooterLink href="/politica">Política de privacidade</FooterLink>
              <FooterLink href="/termos">Termos de uso</FooterLink>
              <FooterLink href="/faq">Perguntas Frequentes</FooterLink>
            </FooterSection>
          </div>
        </div>

        {/* Seção de copyright e redes sociais */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full">
          <div className="flex-1 text-white font-figtree text-sm sm:text-base font-medium leading-relaxed text-center sm:text-left order-2 sm:order-1">
            Copyright © 2025 Netuno. Todos os direitos reservados
          </div>

          {/* Redes Sociais */}
          <div className="flex items-center gap-3 sm:gap-4 order-1 sm:order-2">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/554196880856?text=${encodeURIComponent(
                "Olá! Tenho interesse em saber mais sobre os serviços da Netuno.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-white hover:bg-gray-100 transition-colors"
              aria-label="WhatsApp"
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b747d13294de27f0e89525a5ab5ec0c0394bc17f?width=32"
                alt="WhatsApp"
                className="w-5 h-5 sm:w-4 sm:h-4"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/netunotech/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-white hover:bg-gray-100 transition-colors"
              aria-label="Instagram"
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9ee82df6692353d6065a48d22e8624101b220547?width=32"
                alt="Instagram"
                className="w-5 h-5 sm:w-4 sm:h-4"
              />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@netunotech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-white hover:bg-gray-100 transition-colors"
              aria-label="TikTok"
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/bfff622729108b34cc0b5773816481f2b3ad504f?width=32"
                alt="TikTok"
                className="w-5 h-5 sm:w-4 sm:h-4"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

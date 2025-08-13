import { Link, LinkProps } from "react-router-dom";

const NetunoLogoWhite = () => (
  <svg viewBox="0 0 555 130" className="h-32 max-w-md flex-1 aspect-[209/49]">
    <path
      fill="#fff"
      d="M94.6 127c-17.5-4.2-40.1-31.4-34.6-29.5 5.5 1.8 112.3 4.6 112.4 0 0-5-137-9.2-137-9.2-41.6-10.2-35.4-17.8-35.4-17.8-1.3-8.5 21.4-10.6 21.4-10.6 68.1-2 64.3-.8 64.3-.8-42.5.4-35 2.2-27.5 11.3 7.5 9.2 152.8 19 160.4 32.6 7.6 13.6-55.6 20-55.6 20-13.1 11.1-26.5 11.7-39.9 12.3-13.5.6-16.8 1.9-34.3-2.3z"
    />
    <path
      fill="#fff"
      d="M138.7 3c17.5 4.2 40.1 31.4 34.6 29.5-5.5-1.8-112.3-4.6-112.4 0 0 5 137 9.2 137 9.2 41.6 10.2 35.4 17.8 35.4 17.8 1.3 8.5-21.4 10.6-21.4 10.6-68.1-2-64.3.8-64.3.8 42.5-.4 35-2.2 27.5-11.3-7.5-9.2-152.8-19-160.4-32.6C14.7 18.8 77.9 12.4 77.9 12.4c13.1-11.1 26.5-11.7 39.9-12.3 13.5-.6 16.8-1.9 34.3 2.3z"
    />
    <path
      fill="#fff"
      d="M260.1 87.5V39.7h20l15.9 38.1h2.3l-1.3 1.2V39.7h11.4v47.8h-20.3L272.3 49.4h-2.3l1.3-1.2v40.3h-11.3z"
    />
    <path
      fill="#fff"
      d="M312.6 87.5V39.7h11.8v47.8h-11.8zm10.5-10v-9.9l34.1.3v9.9h-34.1zm0-19.3v-9.9h34.1v9.9h-34.1zm0-18.5v-9.9h34.1v9.9h-34.1z"
    />
    <path
      fill="#fff"
      d="M374.5 87.5V49h12.2v38.5h-12.2zm-13.1-37.2V39.7h38.3v10.6h-38.3z"
    />
    <path
      fill="#fff"
      d="M425.4 88.8c-4.6 0-8.5-.9-11.6-2.6-3.1-1.7-5.5-4.1-7.2-7.2-1.7-3.1-2.5-6.8-2.5-11.2V39.7h12.2v28.5c0 1.9.3 3.5 1 5 .7 1.4 1.7 2.5 3.1 3.2 1.3.7 3 .1 4.9 1 1.9.9 2.6 2.8 2.6 5.8V39.7h12.2v28.2c0 4.3-.8 8.1-2.5 11.2-1.7 3.1-4.1 5.5-7.2 7.2-3.1 1.7-7 2.6-11.6 2.6z"
    />
    <path
      fill="#fff"
      d="M450.9 87.5V39.7h20l15.9 38.1h2.3l-1.3 1.2V39.7h11.4v47.8h-20.3l-15.9-38.1h-2.3l1.3-1.2v40.3h-11.3z"
    />
    <path
      fill="#fff"
      d="M529.2 90.3c-4.4 0-8.2-.7-11.4-2.2-3.2-1.5-5.9-3.5-8.1-6-2.2-2.5-3.8-5.2-4.8-8.1-1-2.9-1.5-5.7-1.5-8.4v-1.4c0-3 .5-5.9 1.6-8.8 1.1-2.9 2.7-5.5 4.9-7.9 2.2-2.4 4.9-4.3 8.1-5.7 3.2-1.4 6.9-2.1 11.2-2.1 4.2 0 7.9.7 11 2.1 3.2 1.4 5.9 3.3 8.1 5.7 2.2 2.4 3.8 5 4.9 7.9 1.1 2.9 1.7 5.9 1.7 8.8v1.4c0 2.7-.5 5.5-1.5 8.4-1 2.9-2.6 5.6-4.8 8.1-2.2 2.5-4.9 4.5-8.1 6-3.2 1.5-7 2.2-11.4 2.2zm0-11.4c2.1 0 4-.3 5.6-1 1.6-.7 3.1-1.7 4.3-3 1.2-1.3 2.1-2.8 2.7-4.5.6-1.7.9-3.6.9-5.5 0-2.1-.3-4-.9-5.6-.6-1.6-1.5-3.1-2.7-4.3-1.2-1.2-2.7-2.2-4.3-2.9-1.6-.7-3.5-1-5.6-1-2.1 0-4 .3-5.6 1-1.6.7-3.1 1.7-4.3 2.9-1.2 1.2-2.1 2.7-2.7 4.3-.6 1.6-.9 3.5-.9 5.6 0 1.9.3 3.8.9 5.5.6 1.7 1.5 3.2 2.7 4.5 1.2 1.3 2.7 2.3 4.3 3 1.6.7 3.5 1 5.6 1z"
    />
  </svg>
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
      className="text-white font-figtree text-sm font-medium leading-tight hover:text-netuno-blue-light transition-colors"
      {...props}
    >
      {children}
    </a>
  ) : (
    <Link
      to={href}
      className="text-white font-figtree text-sm font-medium leading-tight hover:text-netuno-blue-light transition-colors"
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
    <div className="flex flex-col items-start gap-6 w-41">
      <h3 className="text-white font-poppins text-xl font-semibold leading-relaxed">
        {title}
      </h3>

      <div className="flex flex-col items-start gap-4 w-full">{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      id="contato"
      className="flex flex-col justify-center items-center bg-netuno-dark py-20 px-16"
    >
      <div className="flex flex-col items-start gap-16 max-w-5xl w-full pt-16">
        <div className="flex items-start gap-8 w-full pb-16 border-b border-netuno-text-secondary">
          <NetunoLogoWhite />

          <div className="flex justify-end items-start gap-8 flex-1">
            <FooterSection title="Sobre">
              <FooterLink href="/servicos">Serviços</FooterLink>
              <FooterLink href="https://linktr.ee/othaviolr">
                Contato
              </FooterLink>
              <FooterLink href="/portfolio">Portifólio</FooterLink>
            </FooterSection>

            <FooterSection title="Política">
              <FooterLink href="/privacidade">
                Politica de privacidade
              </FooterLink>
              <FooterLink href="/termos">Termos de uso</FooterLink>
              <FooterLink href="/faq">Perguntas Frequentes</FooterLink>
            </FooterSection>
          </div>
        </div>

        <div className="flex items-center gap-8 w-full">
          <div className="flex-1 text-white font-figtree text-sm font-medium leading-relaxed">
            Copyright © 2025 Netuno. Todos os direitos reservados
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b747d13294de27f0e89525a5ab5ec0c0394bc17f?width=32"
                alt="Social media"
                className="w-4 h-4"
              />
            </div>

            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9ee82df6692353d6065a48d22e8624101b220547?width=32"
                alt="Social media"
                className="w-4 h-4"
              />
            </div>

            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/bfff622729108b34cc0b5773816481f2b3ad504f?width=32"
                alt="Social media"
                className="w-4 h-4"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

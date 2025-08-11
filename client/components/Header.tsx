import { Link } from "react-router-dom";

const NetunoLogo = () => (
  <svg 
    width="47" 
    height="26" 
    viewBox="0 0 47 26" 
    fill="none" 
    className="h-6 w-auto"
  >
    <path 
      d="M19.1955 25.4089C15.7187 24.5728 11.2484 19.1384 12.3462 19.5074C13.444 19.8764 34.5929 20.4204 34.6015 19.5074C34.6101 18.5944 7.47551 16.5557 7.47551 16.5557C-0.77018 14.5052 0.656556 12.9986 0.656556 12.9986C0.656556 12.9986 0.398202 11.304 4.62807 10.8794C4.62807 10.8794 18.1161 10.501 17.3668 10.8794C16.6175 11.2579 8.97986 11.1789 10.4729 12.9986C11.9659 14.8182 40.7354 16.7831 42.2447 19.5074C43.754 22.2317 31.2295 23.5187 31.2295 23.5187C31.2295 23.5187 28.6326 25.7434 25.9841 25.8649C23.3357 25.9864 22.6723 26.245 19.1955 25.4089Z" 
      fill="#1D1DF4"
    />
    <path 
      d="M27.929 0.591071C31.4059 1.42718 35.8761 6.86162 34.7783 6.49259C33.6805 6.12356 12.5317 5.57959 12.523 6.49259C12.5144 7.40559 39.649 9.44427 39.649 9.44427C47.8947 11.4948 46.468 13.0014 46.468 13.0014C46.468 13.0014 46.7263 14.696 42.4964 15.1206C42.4964 15.1206 29.0084 15.499 29.7577 15.1206C30.507 14.7421 38.1446 14.8211 36.6516 13.0014C35.1586 11.1818 6.38909 9.2169 4.87979 6.49259C3.37049 3.76828 15.895 2.48133 15.895 2.48133C15.895 2.48133 18.4919 0.25663 21.1404 0.135129C23.7888 0.0136294 24.4522 -0.245036 27.929 0.591071Z" 
      fill="#1D1DF4"
    />
  </svg>
);

export default function Header() {
  return (
    <header className="relative">
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center justify-center bg-white rounded-full px-6 py-4 shadow-sm border border-gray-200 max-w-[640px] gap-8">
          <div className="flex items-center gap-16">
            <Link to="/" className="flex items-center">
              <NetunoLogo />
            </Link>

            <nav className="flex items-center gap-4">
              <Link
                to="/quem-somos"
                className="text-netuno-text-secondary font-figtree text-base hover:text-netuno-blue transition-colors"
              >
                Quem Somos
              </Link>
              <Link
                to="/contato"
                className="text-netuno-text-secondary font-figtree text-base hover:text-netuno-blue transition-colors"
              >
                Contato
              </Link>
              <Link
                to="/portfolio"
                className="text-netuno-text-secondary font-figtree text-base hover:text-netuno-blue transition-colors"
              >
                Portifólio
              </Link>
            </nav>
          </div>

          <button
            className="bg-white text-[rgba(8,8,51,1)] rounded-2xl text-center cursor-pointer font-semibold text-sm px-[18px] py-2 h-[42px] border border-[rgb(209,213,220)] leading-5 
            hover:bg-[rgb(249,250,251)] hover:border-[rgb(209,213,220)] 
            active:scale-95 active:bg-[rgb(243,244,246)] active:borderS-[rgb(209,213,220)] 
            transition-all duration-200"

          >
            Cadastrar como
          </button>
        </div>
      </div>
    </header>
  );
}

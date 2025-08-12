import "./global.css";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Orcamento from "./pages/Orcamento";
import Faq from "./pages/Faq";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

// Configuração do QueryClient com opções padrão
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutos
    },
  },
});

// Componente Layout para estrutura comum
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white font-figtree flex flex-col">
      <main className="flex-1 pt-20">
        {" "}
        {/* Ajuste do padding-top para a navbar */}
        {children}
      </main>
    </div>
  );
};

// Componente principal da aplicação
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={300}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Rotas com Layout comum */}
          <Route
            path="/orcamento"
            element={
              <Layout>
                <Orcamento />
              </Layout>
            }
          />

          <Route
            path="/faq"
            element={
              <Layout>
                <Faq />
              </Layout>
            }
          />

          <Route
            path="/portfolio"
            element={
              <Layout>
                <Portfolio />
              </Layout>
            }
          />

          {/* Rota 404 */}
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>

      {/* Toasters globais */}
      <Toaster />
      <Sonner position="top-right" richColors />
    </TooltipProvider>
  </QueryClientProvider>
);

// Renderização da aplicação
createRoot(document.getElementById("root")!).render(<App />);

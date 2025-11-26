import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 geometric-pattern opacity-50"></div>
      
      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 pt-20 pb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm border border-primary/30 rounded-full text-sm animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-foreground/90 font-medium">Transformação Digital de Excelência</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in-up">
            Soluções Digitais para
            <span className="text-gradient-primary block mt-2">Impulsionar Seu Negócio</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Desenvolvimento web profissional, automação inteligente e consultoria especializada para transformar sua presença digital em resultados reais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              variant="whatsapp"
              size="xl"
              onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento.", "_blank")}
              className="w-full sm:w-auto"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline-primary"
              size="xl"
              onClick={() => scrollToSection("servicos")}
              className="w-full sm:w-auto"
            >
              Conhecer Serviços
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-12 lg:pt-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {[
              { number: "50+", label: "Projetos Entregues" },
              { number: "98%", label: "Satisfação" },
              { number: "24/7", label: "Suporte" },
              { number: "100%", label: "Profissionalismo" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-foreground/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;

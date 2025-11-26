import { CheckCircle2, Zap, Users, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: "Profissionalismo",
      description: "Padrões de excelência em cada projeto desenvolvido",
    },
    {
      icon: Zap,
      title: "Agilidade",
      description: "Entrega rápida sem comprometer a qualidade",
    },
    {
      icon: Users,
      title: "Consultoria Especializada",
      description: "Orientação estratégica para o crescimento digital",
    },
    {
      icon: Award,
      title: "Soluções Completas",
      description: "Do planejamento ao suporte contínuo",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Transformação Digital com
              <span className="text-gradient-primary"> Excelência</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              A <span className="text-primary font-semibold">TW Soluções Digitais</span> foi criada por Thalisson e William com o objetivo de revolucionar a forma como empresas se conectam com o mundo digital. Combinamos expertise técnica, inovação e compromisso para entregar soluções que realmente transformam negócios.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors glow-primary-sm">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-card border border-border rounded-2xl max-w-2xl">
              <p className="text-lg text-foreground/80 mb-4">
                <span className="font-semibold text-primary">Nossa missão:</span> Tornar a tecnologia acessível e transformadora para negócios de todos os tamanhos, entregando soluções digitais que geram resultados mensuráveis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { FileText, Code, TestTube, Rocket, Headphones } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Briefing",
      description: "Entendemos suas necessidades, objetivos e visão para o projeto",
    },
    {
      number: "02",
      icon: Code,
      title: "Desenvolvimento",
      description: "Criamos a solução com tecnologias modernas e melhores práticas",
    },
    {
      number: "03",
      icon: TestTube,
      title: "Testes",
      description: "Validamos cada funcionalidade para garantir qualidade total",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Entrega",
      description: "Publicamos seu projeto e garantimos que tudo funcione perfeitamente",
    },
    {
      number: "05",
      icon: Headphones,
      title: "Suporte",
      description: "Acompanhamento contínuo e manutenção quando você precisar",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Nosso Processo
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Do Planejamento à
              <span className="text-gradient-primary"> Entrega Perfeita</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Metodologia testada e aprovada para garantir resultados excepcionais em cada etapa
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-border/50">
              <div className="h-full w-full bg-gradient-to-r from-primary via-primary/50 to-primary"></div>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative group animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Connection Line - Mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 top-20 w-1 h-full bg-gradient-to-b from-primary to-transparent -ml-0.5 z-0"></div>
                  )}

                  <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 z-10">
                    {/* Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-background shadow-lg glow-primary-sm">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors glow-primary-sm mx-auto">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3 text-center">{step.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed text-center">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

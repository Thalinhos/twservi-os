import { CheckCircle2, Zap, Users, Award } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

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
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Sobre Nós
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Transformação Digital com
                <span className="text-gradient-primary"> Excelência</span>
              </h2>
              <p className="text-base text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                A <span className="text-primary font-semibold">TW Soluções Digitais</span> foi criada por Thalisson e William com o objetivo de revolucionar a forma como empresas se conectam com o mundo digital.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} delay={index * 0.05} animation="fade-in">
                <div
                  className="group relative p-5 bg-gradient-to-br from-card/80 to-secondary/20 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/15 to-primary/5 rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1.5">{feature.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.4}>
            <div className="mt-12 text-center">
              <div className="inline-block p-6 bg-gradient-to-br from-card/80 to-secondary/20 backdrop-blur-sm border border-border/50 rounded-xl max-w-2xl">
                <p className="text-base text-foreground/80">
                  <span className="font-semibold text-primary">Nossa missão:</span> Tornar a tecnologia acessível e transformadora para negócios de todos os tamanhos.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

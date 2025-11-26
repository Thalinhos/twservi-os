import { Zap, Shield, Eye, Cpu } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Velocidade de Entrega",
      description: "Prazos realistas e cumpridos. Seu projeto no ar mais rápido do que imagina.",
      features: ["Metodologia ágil", "Entregas incrementais", "Comunicação constante"],
    },
    {
      icon: Shield,
      title: "Suporte Dedicado",
      description: "Estamos sempre disponíveis para ajudar, tirar dúvidas e resolver problemas.",
      features: ["Atendimento rápido", "Suporte técnico especializado", "Manutenção inclusa"],
    },
    {
      icon: Eye,
      title: "Transparência Total",
      description: "Você acompanha cada etapa do desenvolvimento e sabe exatamente onde está seu investimento.",
      features: ["Relatórios periódicos", "Acesso ao progresso", "Sem custos ocultos"],
    },
    {
      icon: Cpu,
      title: "Tecnologia Moderna",
      description: "Utilizamos as ferramentas mais atuais do mercado para garantir performance e segurança.",
      features: ["Stack atualizado", "Código limpo", "Escalabilidade garantida"],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Por Que Escolher a TW
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Benefícios que Fazem a
                <span className="text-gradient-primary"> Diferença</span>
              </h2>
              <p className="text-base text-foreground/70 max-w-2xl mx-auto">
                Não somos apenas desenvolvedores. Somos parceiros estratégicos no seu crescimento digital.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div
                  className="group bg-gradient-to-br from-card/80 via-card/60 to-secondary/10 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed mb-4">{benefit.description}</p>

                    <ul className="space-y-2">
                      {benefit.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-foreground/70">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

import { Zap, Shield, Eye, Cpu } from "lucide-react";

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
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Por Que Escolher a TW
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Benefícios que Fazem a
              <span className="text-gradient-primary"> Diferença</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Não somos apenas desenvolvedores. Somos parceiros estratégicos no seu crescimento digital.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors glow-primary-sm">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">{benefit.description}</p>

                {/* Features List */}
                <ul className="space-y-3">
                  {benefit.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/70">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full glow-primary-sm"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

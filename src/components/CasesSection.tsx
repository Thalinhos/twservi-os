import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, ShoppingCart, MessageSquare, Star } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      client: "Elegância Moda Feminina",
      icon: ShoppingCart,
      result: "+250% em vendas online",
      before: "Loja física sem presença digital",
      after: "E-commerce completo com integração WhatsApp e catálogo digital",
      technologies: ["React", "Node.js", "Stripe", "WhatsApp API"],
      testimonial: "A TW transformou nosso negócio. Hoje 70% das vendas vêm do online!",
      rating: 5,
    },
    {
      client: "Clínica Saúde Total",
      icon: Users,
      result: "+180% em agendamentos",
      before: "Site desatualizado e sem conversão",
      after: "Landing page moderna com sistema de agendamento online integrado",
      technologies: ["Next.js", "Tailwind", "Google Calendar API"],
      testimonial: "Profissionalismo e resultado rápido. Recomendamos de olhos fechados!",
      rating: 5,
    },
    {
      client: "Mecânica Premium Auto",
      icon: TrendingUp,
      result: "+320% em leads qualificados",
      before: "Apenas redes sociais sem site próprio",
      after: "Website institucional com blog otimizado para SEO e formulários inteligentes",
      technologies: ["WordPress", "SEO", "Google Analytics"],
      testimonial: "Em 3 meses já recuperamos o investimento. Vale cada centavo!",
      rating: 5,
    },
    {
      client: "Tech Solutions B2B",
      icon: MessageSquare,
      result: "Automação de 80% do atendimento",
      before: "Atendimento manual via WhatsApp sem escala",
      after: "Chatbot inteligente + CRM integrado + Dashboard administrativo",
      technologies: ["Python", "OpenAI", "PostgreSQL", "React"],
      testimonial: "Solução sob medida que revolucionou nossa operação. Time excepcional!",
      rating: 5,
    },
  ];

  return (
    <section id="cases" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Cases de Sucesso
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Resultados que
              <span className="text-gradient-primary"> Falam por Si</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Conheça empresas que transformaram seus negócios com nossas soluções digitais
            </p>
          </div>

          {/* Cases Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {cases.map((caseStudy, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors glow-primary-sm">
                        <caseStudy.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{caseStudy.client}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          {Array.from({ length: caseStudy.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Result Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-primary font-bold text-sm">{caseStudy.result}</span>
                  </div>

                  {/* Before/After */}
                  <div className="space-y-4 mb-6">
                    <div className="flex gap-3">
                      <div className="w-1 bg-destructive/50 rounded-full"></div>
                      <div>
                        <p className="text-xs text-foreground/50 uppercase font-semibold mb-1">Antes</p>
                        <p className="text-foreground/80">{caseStudy.before}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-1 bg-primary rounded-full glow-primary-sm"></div>
                      <div>
                        <p className="text-xs text-primary uppercase font-semibold mb-1">Depois</p>
                        <p className="text-foreground/80">{caseStudy.after}</p>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseStudy.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="p-4 bg-secondary/30 border-l-4 border-primary rounded-r-lg">
                    <p className="text-foreground/90 italic">"{caseStudy.testimonial}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;

import { Globe, Code, ShoppingCart, Search, Database, MessageSquare, Palette, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const serviceCategories = [
    {
      category: "Desenvolvimento Web",
      services: [
        {
          icon: Globe,
          title: "Landing Pages Profissionais",
          description: "Páginas de conversão otimizadas com design moderno e alta performance",
        },
        {
          icon: Code,
          title: "Websites Completos",
          description: "Sites institucionais robustos e escaláveis para sua empresa",
        },
        {
          icon: ShoppingCart,
          title: "E-Commerce",
          description: "Lojas virtuais completas com integração de pagamentos e gestão",
        },
        {
          icon: Search,
          title: "Otimização SEO",
          description: "Estratégias avançadas para posicionar seu site no Google",
        },
      ],
    },
    {
      category: "Sistemas & Plataformas",
      services: [
        {
          icon: Database,
          title: "Sistemas Web Personalizados",
          description: "Plataformas sob medida para as necessidades do seu negócio",
        },
        {
          icon: Code,
          title: "Dashboards & Painéis",
          description: "Interfaces administrativas intuitivas e poderosas",
        },
        {
          icon: Globe,
          title: "Integração com APIs",
          description: "Conecte seus sistemas com ferramentas externas",
        },
        {
          icon: Database,
          title: "Hospedagem & Manutenção",
          description: "Infraestrutura segura e suporte técnico contínuo",
        },
      ],
    },
    {
      category: "Soluções para Negócios",
      services: [
        {
          icon: MessageSquare,
          title: "Integração WhatsApp",
          description: "Automação e chatbots para atendimento eficiente",
        },
        {
          icon: ShoppingCart,
          title: "Catálogos Digitais",
          description: "Vitrines online modernas para seus produtos",
        },
        {
          icon: Palette,
          title: "Identidade Visual",
          description: "Criação de marcas memoráveis e profissionais",
        },
        {
          icon: TrendingUp,
          title: "Automação de Processos",
          description: "Otimize operações e aumente a produtividade",
        },
      ],
    },
    {
      category: "Consultoria Digital",
      services: [
        {
          icon: TrendingUp,
          title: "Gestão de Performance",
          description: "Análise e otimização de conversões e vendas",
        },
        {
          icon: Search,
          title: "Auditoria de Sites",
          description: "Diagnóstico completo e plano de melhorias UX/UI",
        },
        {
          icon: Code,
          title: "Estratégia Digital",
          description: "Consultoria para transformação e crescimento online",
        },
        {
          icon: Database,
          title: "Migração de Sistemas",
          description: "Transição segura para plataformas modernas",
        },
      ],
    },
  ];

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Nossos Serviços
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Soluções Completas para
              <span className="text-gradient-primary"> Seu Sucesso Digital</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Do desenvolvimento web à consultoria estratégica, oferecemos tudo que você precisa para transformar sua presença digital
            </p>
          </div>

          {/* Services Grid by Category */}
          <div className="space-y-16">
            {serviceCategories.map((category, catIndex) => (
              <div key={catIndex} className="animate-fade-in" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  {category.category}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, index) => (
                    <Card
                      key={index}
                      className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
                    >
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors glow-primary-sm">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-lg font-bold text-foreground mb-2">{service.title}</h4>
                        <p className="text-sm text-foreground/70 leading-relaxed">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollAnimation from "./ScrollAnimation";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um projeto?",
      answer: "O prazo varia conforme a complexidade. Uma landing page simples pode ficar pronta em 1-2 semanas, enquanto um e-commerce completo pode levar de 4-8 semanas. Trabalhamos com cronogramas realistas e sempre mantemos você informado sobre o progresso.",
    },
    {
      question: "Qual é o investimento necessário?",
      answer: "Cada projeto é único e possui seu próprio orçamento. Oferecemos soluções para diferentes tamanhos de negócio. Entre em contato conosco para receber um orçamento personalizado baseado nas suas necessidades específicas.",
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer: "Sim! Todos os nossos projetos incluem período de garantia e suporte técnico. Também oferecemos planos de manutenção contínua para garantir que seu site ou sistema esteja sempre atualizado e funcionando perfeitamente.",
    },
    {
      question: "Preciso ter conhecimento técnico para usar o sistema?",
      answer: "Não! Desenvolvemos interfaces intuitivas e fáceis de usar. Além disso, fornecemos treinamento completo e documentação para que você e sua equipe possam gerenciar o sistema com facilidade.",
    },
    {
      question: "Meu site será responsivo para mobile?",
      answer: "Com certeza! Todos os nossos projetos são desenvolvidos com design responsivo, garantindo perfeita visualização e funcionamento em smartphones, tablets e computadores. Mobile-first é nossa prioridade.",
    },
    {
      question: "Vocês trabalham com SEO?",
      answer: "Sim! Implementamos as melhores práticas de SEO em todos os projetos, incluindo otimização de performance, meta tags, estrutura semântica e conteúdo otimizado para melhorar seu posicionamento nos motores de busca.",
    },
    {
      question: "Posso fazer alterações no site depois de pronto?",
      answer: "Claro! Desenvolvemos sistemas com painéis administrativos quando necessário, permitindo que você faça atualizações de conteúdo. Para mudanças mais complexas, nossa equipe está sempre disponível para ajudar.",
    },
    {
      question: "Como funciona o processo de pagamento?",
      answer: "Trabalhamos com pagamento parcelado: 50% no início do projeto e 50% na entrega. Para projetos maiores, podemos negociar condições especiais. Aceitamos diversas formas de pagamento para sua comodidade.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                FAQ
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Perguntas
                <span className="text-gradient-primary"> Frequentes</span>
              </h2>
              <p className="text-lg text-foreground/70">
                Tire suas dúvidas sobre nossos serviços e processo de trabalho
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 hover:border-primary/50 transition-all duration-300 data-[state=open]:border-primary/50 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/10"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary text-base lg:text-lg font-semibold py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-foreground/70 mb-4">Não encontrou sua dúvida?</p>
              <button
                onClick={() => window.open("https://wa.me/5551981302801?text=Olá! Tenho uma dúvida sobre os serviços.", "_blank")}
                className="text-primary hover:text-primary/80 font-semibold underline underline-offset-4 transition-colors"
              >
                Fale conosco no WhatsApp →
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

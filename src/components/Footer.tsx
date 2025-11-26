import { MessageSquare, Mail, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicos: [
      { label: "Landing Pages", href: "#servicos" },
      { label: "E-Commerce", href: "#servicos" },
      { label: "Sistemas Web", href: "#servicos" },
      { label: "Consultoria Digital", href: "#servicos" },
    ],
    empresa: [
      { label: "Sobre Nós", href: "#sobre" },
      { label: "Cases de Sucesso", href: "#cases" },
      { label: "Processo", href: "#processo" },
      { label: "FAQ", href: "#faq" },
    ],
  };

  const socialLinks = [
    { icon: MessageSquare, href: "https://wa.me/5511999999999", label: "WhatsApp" },
    { icon: Instagram, href: "https://instagram.com/twsolucoes", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/twsolucoes", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/twsolucoes", label: "GitHub" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gradient-dark border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center glow-primary-sm">
                  <span className="text-background font-bold text-xl">TW</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-foreground font-bold text-base leading-tight">TW Soluções</span>
                  <span className="text-primary text-sm font-medium leading-tight">Digitais</span>
                </div>
              </div>
              <p className="text-foreground/70 leading-relaxed mb-6 max-w-md">
                Transformando negócios através de soluções digitais inovadoras. Desenvolvimento web, automação e consultoria especializada para impulsionar seu sucesso online.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:contato@twsolucoes.com.br" className="text-foreground/80 hover:text-primary transition-colors">
                  contato@twsolucoes.com.br
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-primary" />
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                  (11) 99999-9999
                </a>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-foreground font-bold text-lg mb-6">Serviços</h3>
              <ul className="space-y-3">
                {footerLinks.servicos.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-foreground/70 hover:text-primary transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-foreground font-bold text-lg mb-6">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-foreground/70 hover:text-primary transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-foreground/60 text-sm text-center md:text-left">
              © {currentYear} TW Soluções Digitais. Todos os direitos reservados.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-secondary hover:bg-primary/20 rounded-lg flex items-center justify-center text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110 glow-primary-sm"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

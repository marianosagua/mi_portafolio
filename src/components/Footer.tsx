import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, MapPin, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      href: "https://github.com/marianosagua", 
      label: "GitHub",
      color: "from-gray-500 to-gray-700"
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: "https://www.linkedin.com/in/mariano-sagua-49785923b/", 
      label: "LinkedIn",
      color: "from-blue-500 to-blue-700"
    },
    { 
      icon: <Instagram className="h-5 w-5" />, 
      href: "https://www.instagram.com/marianosagua/", 
      label: "Instagram",
      color: "from-pink-500 to-purple-500"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      text: "marianosagua4343@gmail.com",
      href: "mailto:marianosagua4343@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "Buenos Aires, Argentina",
      href: "#"
    }
  ];

  return (
    <footer className="relative py-12 overflow-hidden bg-gradient-to-b from-background via-background/98 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
                Mariano Sagua
              </h3>
              <p className="text-foreground/60 max-w-xs">
                Desarrollador de software apasionado por crear soluciones innovadoras y de alta calidad.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-foreground/60 hover:text-primary transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#sobre-mi" className="text-foreground/60 hover:text-primary transition-colors">
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a href="#proyectos" className="text-foreground/60 hover:text-primary transition-colors">
                    Proyectos
                  </a>
                </li>
                <li>
                  <a href="#habilidades" className="text-foreground/60 hover:text-primary transition-colors">
                    Habilidades
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Contacto</h4>
              <ul className="space-y-2">
                {contactInfo.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border/20">
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full bg-gradient-to-r ${social.color} bg-opacity-10 hover:bg-opacity-20 transition-all duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} Mariano Sagua. Todos los derechos reservados.
            </p>

            {/* Scroll to Top Button */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-primary hover:bg-primary/10"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

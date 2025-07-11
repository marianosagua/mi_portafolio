import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  MessageSquare,
  ArrowUpRight,
  Globe,
} from "lucide-react";

export const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "marianosagua4343@gmail.com",
      link: "mailto:marianosagua4343@gmail.com",
      color: "from-blue-500 to-cyan-500",
      description: "Envíame un correo electrónico",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Ubicación",
      value: "Buenos Aires, Argentina",
      link: "#",
      color: "from-purple-500 to-pink-500",
      description: "Disponible para proyectos remotos o presenciales",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Disponibilidad",
      value: "Tiempo Completo",
      link: "#",
      color: "from-emerald-500 to-green-500",
      description: "Listo para nuevos proyectos",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      to: "https://github.com/marianosagua",
      label: "GitHub",
      color: "from-gray-500 to-gray-700",
      description: "Revisa mi código",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      to: "https://www.linkedin.com/in/mariano-sagua-49785923b/",
      label: "LinkedIn",
      color: "from-blue-500 to-blue-700",
      description: "Conecta profesionalmente",
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      to: "https://www.instagram.com/marianosagua/",
      label: "Instagram",
      color: "from-pink-500 to-purple-500",
      description: "Sígueme en redes",
    },
  ];

  const quickActions = [
    {
      title: "Ver Proyectos",
      description: "Explora mi portafolio",
      icon: <ArrowUpRight className="h-5 w-5" />,
      link: "#proyectos",
      color: "from-primary to-purple-500",
    },
    {
      title: "Ver Habilidades",
      description: "Conoce mis tecnologías",
      icon: <ArrowUpRight className="h-5 w-5" />,
      link: "#habilidades",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Descargar CV",
      description: "Mi experiencia profesional",
      icon: <ArrowUpRight className="h-5 w-5" />,
      link: "https://drive.google.com/file/d/1Fcne9h0J_Ik8B0xGD706dGF-_QLOvZK1/view?usp=sharing",
      color: "from-emerald-500 to-green-500",
    },
  ];

  return (
    <section
      id="contacto"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-background/98 to-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm mb-6">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Contacto</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
                Conectemos
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Estoy siempre abierto a nuevas oportunidades y colaboraciones.
              ¡Hablemos sobre tu próximo proyecto!
            </p>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="relative group overflow-hidden bg-card/30 backdrop-blur-sm rounded-2xl border border-border/20 hover:border-primary/30 transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <CardContent className="p-6">
                  <a
                    href={item.link}
                    className="flex flex-col items-center text-center group/link cursor-pointer"
                    target={item.title === "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${item.color} shadow-lg group-hover/link:scale-110 transition-transform duration-500 mb-4`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover/link:text-primary transition-colors duration-300 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/80 group-hover/link:text-white transition-colors duration-300 mb-2">
                      {item.value}
                    </p>
                    <p className="text-sm text-foreground/60">
                      {item.description}
                    </p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Social Links & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <Card className="relative group overflow-hidden bg-card/30 backdrop-blur-sm rounded-2xl border border-border/20 hover:border-primary/30 transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                    Redes Sociales
                  </h3>
                  <div className="space-y-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group/link"
                        aria-label={link.label}
                      >
                        <Card className={`relative overflow-hidden bg-gradient-to-r ${link.color} text-white rounded-2xl border border-border/20 hover:border-primary/30 transition-all duration-500 h-full shadow-lg hover:scale-105`}>
                          <CardContent className="p-8 flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-white/20 group-hover/link:bg-white/30 transition-colors duration-300">
                              {link.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg">{link.label}</h4>
                              <p className="text-white/80 text-sm">{link.description}</p>
                            </div>
                            <ArrowUpRight className="h-5 w-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                          </CardContent>
                        </Card>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div variants={itemVariants}>
              <Card className="relative group overflow-hidden bg-card/30 backdrop-blur-sm rounded-2xl border border-border/20 hover:border-primary/30 transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                    Acciones Rápidas
                  </h3>
                  <div className="space-y-4">
                    {quickActions.map((action, index) => (
                      <a
                        key={index}
                        href={action.link}
                        target={action.title === "Descargar CV" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="block group/action"
                        aria-label={action.title}
                      >
                        <Card className={`relative overflow-hidden bg-gradient-to-r ${action.color} text-white rounded-2xl border border-border/20 hover:border-primary/30 transition-all duration-500 h-full shadow-lg hover:scale-105`}>
                          <CardContent className="p-8 flex items-center gap-4">
                            <div className={`p-2 rounded-lg bg-white/20 group-hover/action:bg-white/30 transition-colors duration-300`}>
                              {action.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg">
                                {action.title}
                              </h4>
                              <p className="text-white/80 text-sm">
                                {action.description}
                              </p>
                            </div>
                            <ArrowUpRight className="h-5 w-5 group-hover/action:translate-x-1 group-hover/action:-translate-y-1 transition-transform duration-300" />
                          </CardContent>
                        </Card>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <a
              href="mailto:marianosagua4343@gmail.com"
              className="block group/cta"
              aria-label="Enviar Email"
            >
              <Card className="relative group overflow-hidden bg-card/30 backdrop-blur-sm rounded-2xl border border-border/20 hover:border-primary/30 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                    ¿Listo para trabajar juntos?
                  </h3>
                  <p className="text-foreground/80 text-lg mb-6 max-w-2xl mx-auto">
                    Si tienes un proyecto en mente o quieres colaborar, no dudes
                    en contactarme. Estoy aquí para ayudarte a hacer realidad tus
                    ideas.
                  </p>
                  <div className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-purple-500 text-white font-semibold group-hover/cta:from-primary/90 group-hover/cta:to-purple-500/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Mail className="h-5 w-5" />
                    Enviar Email
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

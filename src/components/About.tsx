import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  ChevronRight,
  ChevronDown,
  FileCode,
  Server,
  Database,
  User, // Agrega User aquí
} from "lucide-react";
import { Button } from "./ui/button";
import foto_perfil from "../images/FotoPerfil.jpg";

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeTab, setActiveTab] = useState<
    "experiencia" | "educacion" | "personal"
  >("experiencia");
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const personalInfo = {
    name: "Mariano Sagua",
    title: "Desarrollador Full Stack",
    location: "Buenos Aires, Argentina",
    email: "marianosagua4343@gmail.com",
    summary:
      "Desarrollador de Software. Llevo años en la informática, especialmente en el desarrollo web. Me centro en la innovación y la resolución de problemas, desde que comencé en este sector, mi objetivo siempre ha sido la creación de soluciones creativas que intenten resolver las necesidades y desafíos presentados. Busco constantemente nuevas tecnologías, metodologías y enfoques para mejorar mis procesos de desarrollo y ofrecer soluciones más eficientes y efectivas. Mi objetivo es desarrollar software de la más alta calidad y tener muy buena comunicacion y colaboracion con equipos de trabajo.",
    profileImage: foto_perfil,
    skills: [
      {
        category: "Desarrollo Frontend",
        icon: <FileCode className="h-5 w-5 text-yellow-500" />,
        items: ["HTML", "CSS", "Sass", "React.js"],
      },
      {
        category: "Desarrollo Backend",
        icon: <Server className="h-5 w-5 text-green-500" />,
        items: ["Node.js", "Express"],
      },
      {
        category: "Gestión de Bases de Datos",
        icon: <Database className="h-5 w-5 text-purple-500" />,
        items: ["MongoDB", "PostgreSQL", "SQL"],
      },
    ],
    tabs: {
      experience: [
        {
          title: "Content Product Manager",
          company: "GAOTek",
          period: "2024",
          description: "Gestion y optimizacion del contenido de productos.",
          achievements: [
            "Optimizacion de la informacion de los productos",
            "Gestion de la informacion de los productos",
            "Experiencia con el manejo de aplicaciones office",
          ],
        },
        {
          title: "Desarrollador Web Frontend",
          company: "gbflux",
          period: "2024 - Presente",
          description:
            "Creacion de una interfaz intuitiva para una plataforma que, mediante IA, genera rutas de estudio personalizadas.",
          achievements: [
            "Experiencia en un equipo de trabajo y en desplieges continuos",
            "Desarrollo de una interfaz amigable y facil de usar",
            "Implementacion de un sistema de rutas de estudio personalizadas",
          ],
        },
      ],
      education: [
        {
          degree: "Ingenieria en Sistemas Informaticos",
          institution: "Universidad Abierta Interamericana",
          period: "2024 - Presente",
          description:
            "Enfocado en el desarrollo de software y la inteligencia artificial.",
          achievements: [],
        },
        {
          degree: "Bachiller en Economia y Administracion",
          institution: "Carlos Pellegrini",
          period: "2014 - 2019",
          description:
            "Colegio Secundario con orientacion en Economia y Administracion.",
          achievements: [],
        },
      ],
      personal: {
        interests: [
          "Inteligencia Artificial",
          "Desarrollo de Software",
          "Robotica",
          "Computación en la Nube",
          "Diseño de Interfaces",
        ],
        languages: ["Español (Nativo)", "Ingles (Intermedio)"],
      },
    },
  };

  const tabIcons = {
    experiencia: <Briefcase className="h-5 w-5" />,
    educacion: <GraduationCap className="h-5 w-5" />,
    personal: <User className="h-5 w-5" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  const toggleSkill = (category: string) => {
    if (expandedSkill === category) {
      setExpandedSkill(null);
    } else {
      setExpandedSkill(category);
    }
  };

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden bg-transparent"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mi</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Conoce más sobre mi trayectoria, experiencia y lo que me motiva como
            desarrollador.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left column - Profile */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-1"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#3a2560]/90 via-[#1a0033]/80 to-[#000000]/90 shadow-2xl hover:scale-[1.03] rounded-2xl overflow-hidden p-6 sticky top-24 border border-primary/30 backdrop-blur-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary shadow-lg p-1 bg-background/60">
                  <img
                    src={personalInfo.profileImage || "/placeholder.svg"}
                    alt={personalInfo.name}
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">{personalInfo.name}</h3>
                <p className="text-primary font-semibold drop-shadow-md">{personalInfo.title}</p>
                <p className="text-foreground/70 text-sm mt-1">{personalInfo.location}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-primary/90">Habilidades Principales</h4>
                  <div className="space-y-2">
                    {personalInfo.skills.map((skillGroup) => (
                      <div
                        key={skillGroup.category}
                        className="rounded-lg border border-primary/20 overflow-hidden bg-background/40 shadow-inner"
                      >
                        <button
                          onClick={() => toggleSkill(skillGroup.category)}
                          className="w-full flex items-center justify-between p-3 hover:bg-primary/10 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded bg-primary/20 text-primary shadow-sm">
                              {skillGroup.icon}
                            </div>
                            <span className="font-medium text-foreground/90">{skillGroup.category}</span>
                          </div>
                          {expandedSkill === skillGroup.category ? (
                            <ChevronDown className="h-4 w-4 text-primary" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-primary" />
                          )}
                        </button>
                        <AnimatePresence>
                          {expandedSkill === skillGroup.category && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-3 pt-0 bg-background/60">
                                <div className="flex flex-wrap gap-2 pt-3">
                                  {skillGroup.items.map((skill, index) => (
                                    <span
                                      key={index}
                                      className="px-2 py-1 bg-primary/20 text-primary font-semibold text-sm rounded-full shadow"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="default"
                    className="w-full mt-4 bg-gradient-to-r from-primary to-purple-500 text-primary-foreground font-bold shadow-lg hover:brightness-110 hover:scale-105 transition-all"
                    onClick={() =>
                      document
                        .getElementById("habilidades")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Ver Todas Mis Habilidades
                  </Button>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-primary/90">Contacto</h4>
                  <Button
                    variant="outline"
                    className="w-full border-primary/30 text-primary font-semibold hover:bg-primary/10 hover:text-primary shadow"
                    asChild
                  >
                    <a href={`mailto:${personalInfo.email}`}>
                      Ponte en contacto
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#3a2560]/90 via-[#1a0033]/80 to-[#000000]/90 shadow-2xl border border-primary/30 backdrop-blur-xl rounded-2xl overflow-hidden mb-8 transition-all duration-300"
            >
              <div className="p-6">
                <p className="text-foreground/90 leading-relaxed mb-6 font-medium drop-shadow">
                  {personalInfo.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-primary/20 text-primary font-semibold rounded-full text-sm shadow">
                    Solucionador de Problemas
                  </span>
                  <span className="px-3 py-1.5 bg-primary/20 text-primary font-semibold rounded-full text-sm shadow">
                    Detallista
                  </span>
                  <span className="px-3 py-1.5 bg-primary/20 text-primary font-semibold rounded-full text-sm shadow">
                    Aprendiz Continuo
                  </span>
                  <span className="px-3 py-1.5 bg-primary/20 text-primary font-semibold rounded-full text-sm shadow">
                    Trabajo en Equipo
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-[#3a2560]/90 via-[#1a0033]/80 to-[#000000]/90 shadow-2xl border border-primary/30 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300">
                <div className="border-b border-primary/20">
                  <div className="flex overflow-x-auto scrollbar-hide">
                    {(["experiencia", "educacion", "personal"] as const).map(
                      (tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-6 py-4 flex items-center gap-2 whitespace-nowrap transition-colors font-semibold text-base ${
                            activeTab === tab
                              ? "text-primary border-b-2 border-primary bg-primary/10 shadow"
                              : "text-foreground/70 hover:text-primary/90 hover:bg-primary/5"
                          }`}
                        >
                          {tabIcons[tab]}
                          <span className="capitalize">{tab}</span>
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {activeTab === "experiencia" && (
                      <motion.div
                        key="experience"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        {personalInfo.tabs.experience.map((exp, index) => (
                          <div
                            key={index}
                            className="relative pl-8 border-l-2 border-primary/30"
                          >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                            <div className="mb-1">
                              <h4 className="text-xl font-bold">{exp.title}</h4>
                              <div className="flex flex-wrap items-center gap-x-3 text-sm">
                                <span className="text-primary font-medium">
                                  {exp.company}
                                </span>
                                <span className="text-foreground/60">
                                  {exp.period}
                                </span>
                              </div>
                            </div>
                            <p className="text-foreground/80 my-3">
                              {exp.description}
                            </p>
                            <div className="space-y-1 mt-2">
                              {exp.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                  <p className="text-sm text-foreground/70">
                                    {achievement}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {activeTab === "educacion" && (
                      <motion.div
                        key="education"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        {personalInfo.tabs.education.map((edu, index) => (
                          <div
                            key={index}
                            className="relative pl-8 border-l-2 border-primary/30"
                          >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                            <div className="mb-1">
                              <h4 className="text-xl font-bold">
                                {edu.degree}
                              </h4>
                              <div className="flex flex-wrap items-center gap-x-3 text-sm">
                                <span className="text-primary font-medium">
                                  {edu.institution}
                                </span>
                                <span className="text-foreground/60">
                                  {edu.period}
                                </span>
                              </div>
                            </div>
                            <p className="text-foreground/80 my-3">
                              {edu.description}
                            </p>
                            <div className="space-y-1 mt-2">
                              {edu.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                  <p className="text-sm text-foreground/70">
                                    {achievement}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {activeTab === "personal" && (
                      <motion.div
                        key="personal"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <h4 className="text-lg font-bold mb-3">
                            Intereses & Hobbies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {personalInfo.tabs.personal.interests.map(
                              (interest, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm"
                                >
                                  {interest}
                                </span>
                              )
                            )}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold mb-3">Lenguajes</h4>
                          <div className="space-y-2">
                            {personalInfo.tabs.personal.languages.map(
                              (language, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <div className="w-2 h-2 rounded-full bg-primary" />
                                  <span className="text-foreground/80">
                                    {language}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

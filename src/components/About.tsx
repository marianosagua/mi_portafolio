import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Briefcase,
  User,
  Calendar,
  Building2,
  Target,
  Sparkles,
  Mail,
  MapPin,
  Languages,
  Heart,
} from "lucide-react";

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const personalData = {
    name: "Mariano Sagua",
    title: "Desarrollador de Software",
    email: "marianosagua4343@gmail.com",
    location: "Buenos Aires, Argentina",
    summary: "Desarrollador apasionado por la innovación y la resolución de problemas. Mi enfoque está en crear soluciones elegantes y eficientes que marquen la diferencia. Constantemente exploro nuevas tecnologías para ofrecer software de la más alta calidad.",
    
    experience: [
      {
        id: "exp1",
        role: "Desarrollador Web Frontend",
        company: "gbflux",
        period: "2024 - Presente",
        description: "Desarrollo de interfaces intuitivas para plataforma educativa con IA",
        highlights: ["Interfaces de usuario", "Trabajo en equipo", "Despliegue continuo"],
        icon: <Code2 className="h-5 w-5" />,
        color: "from-blue-500 to-cyan-500",
      },
      {
        id: "exp2",
        role: "Content Product Manager",
        company: "GAOTek",
        period: "2024",
        description: "Gestión y optimización estratégica de contenido de productos",
        highlights: ["Gestión de contenido", "Optimización", "Herramientas office"],
        icon: <Target className="h-5 w-5" />,
        color: "from-purple-500 to-pink-500",
      },
    ],
    
    education: [
      {
        id: "edu1",
        degree: "Ingeniería en Sistemas Informáticos",
        institution: "Universidad Abierta Interamericana",
        period: "2024 - Presente",
        focus: "Desarrollo de software e inteligencia artificial",
        icon: <GraduationCap className="h-5 w-5" />,
        color: "from-emerald-500 to-green-500",
      },
      {
        id: "edu2",
        degree: "Bachiller en Economía y Administración",
        institution: "Carlos Pellegrini",
        period: "2014 - 2019",
        focus: "Formación integral con orientación empresarial",
        icon: <Building2 className="h-5 w-5" />,
        color: "from-orange-500 to-red-500",
      },
    ],
    
    personal: {
      interests: [
        { name: "Inteligencia Artificial", icon: <Sparkles className="h-4 w-4" /> },
        { name: "Desarrollo de Software", icon: <Code2 className="h-4 w-4" /> },
        { name: "Robótica", icon: <Target className="h-4 w-4" /> },
        { name: "Cloud Computing", icon: <Building2 className="h-4 w-4" /> },
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Intermedio" },
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section id="sobre-mi" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-background/98 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm mb-6">
              <User className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Sobre Mí</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <motion.span 
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{
                  backgroundSize: "300% 300%",
                }}
              >
                {personalData.name}
              </motion.span>
            </h2>
            <p className="text-2xl text-foreground/80 font-light mb-2">{personalData.title}</p>
            <div className="flex items-center justify-center gap-6 text-foreground/60">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{personalData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{personalData.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Summary Card */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-8 border border-border/20 hover:border-primary/30 transition-all duration-500">
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 text-center max-w-4xl mx-auto">
                  {personalData.summary}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience & Education Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Experience Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Experiencia</h3>
              </div>
              
              <div className="space-y-4">
                {personalData.experience.map((exp) => (
                  <motion.div
                    key={exp.id}
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover:border-primary/30 transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} shadow-lg`}>
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-foreground mb-1">{exp.role}</h4>
                          <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                            <span className="text-primary font-medium">{exp.company}</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                          <p className="text-foreground/80 mb-3">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.highlights.map((highlight, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Educación</h3>
              </div>
              
              <div className="space-y-4">
                {personalData.education.map((edu) => (
                  <motion.div
                    key={edu.id}
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover:border-primary/30 transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${edu.color} shadow-lg`}>
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                          <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                            <span className="text-primary font-medium">{edu.institution}</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                          <p className="text-foreground/80">{edu.focus}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Personal Info */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Interests */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover:border-primary/30 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Intereses</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {personalData.personal.interests.map((interest, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-3 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="text-primary">{interest.icon}</div>
                      <span className="text-sm font-medium text-foreground/80">{interest.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover:border-primary/30 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20">
                    <Languages className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Idiomas</h3>
                </div>
                <div className="space-y-4">
                  {personalData.personal.languages.map((lang, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{lang.name}</span>
                        <span className="text-sm text-primary font-medium">{lang.level}</span>
                      </div>
                      <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: lang.level === "Nativo" ? "100%" : "60%" } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-purple-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

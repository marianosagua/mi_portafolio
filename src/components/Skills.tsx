import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Palette,
  GitBranch,
  FileCode,
  Layers,
  Webhook,
  Globe,
  Kanban,
  Brain,
  Package,
} from "lucide-react";

export const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      icon: <Code className="h-6 w-6 text-primary" />,
      technologies: "TypeScript, JavaScript, C, C#",
      description:
        "Escribo código con tipado seguro para mejorar la mantenibilidad y mi experiencia como desarrollador.",
    },
    {
      title: "Desarrollo Frontend",
      icon: <FileCode className="h-6 w-6 text-yellow-500" />,
      technologies: "HTML, CSS, Sass, React.js",
      description:
        "Construyo interfaces de usuario responsivas e interactivas usando las características modernas de React y Next.js para lograr un rendimiento óptimo.",
    },
    {
      title: "Desarrollo Backend",
      icon: <Server className="h-6 w-6 text-green-500" />,
      technologies: "Node.js, Express",
      description:
        "Creo aplicaciones robustas en el lado del servidor con énfasis en la escalabilidad y una arquitectura limpia.",
    },
    {
      title: "Gestión de Bases de Datos",
      icon: <Database className="h-6 w-6 text-purple-500" />,
      technologies: "MongoDB, PostgreSQL, SQL",
      description:
        "Diseño e implemento esquemas y consultas de bases de datos eficientes para gestionar los datos de forma óptima.",
    },
    {
      title: "Inteligencia Artificial",
      icon: <Brain className="h-6 w-6 text-teal-500" />,
      technologies: "OpenAI",
      description:
        "Integro LLMs en aplicaciones web para generar contenido y analizar texto.",
    },
    {
      title: "Despliegue e Infraestructura",
      icon: <Package className="h-6 w-6 text-violet-500" />,
      technologies: "Docker, Vercel, Netlify, Firebase",
      description:
        "Competencia en la configuración y despliegue de aplicaciones escalables utilizando contenedores y herramientas modernas de infraestructura.",
    },
    {
      title: "Diseño UI/UX",
      icon: <Palette className="h-6 w-6 text-pink-500" />,
      technologies: "Tailwind CSS, Material UI, Boostrap",
      description:
        "Creo interfaces de usuario bellas e intuitivas utilizando principios y frameworks de diseño modernos.",
    },
    {
      title: "Control de Versiones",
      icon: <GitBranch className="h-6 w-6 text-orange-500" />,
      technologies: "Git, GitHub",
      description:
        "Gestiono eficientemente las versiones de mi código con Git y colaboro efectivamente a través de GitHub.",
    },
    {
      title: "Gestión de Estado",
      icon: <Layers className="h-6 w-6 text-blue-500" />,
      technologies: "Redux, Context API",
      description:
        "Gestiono estados complejos de la aplicación con soluciones modernas de manejo de estado.",
    },
    {
      title: "Desarrollo de API",
      icon: <Webhook className="h-6 w-6 text-red-500" />,
      technologies: "REST",
      description:
        "Diseño e implemento APIs eficientes para una comunicación de datos sin fisuras.",
    },
    {
      title: "Rendimiento Web",
      icon: <Globe className="h-6 w-6 text-cyan-500" />,
      technologies: "Optimización, SEO",
      description:
        "Optimizo aplicaciones web para lograr velocidad, accesibilidad y visibilidad en motores de búsqueda.",
    },
    {
      title: "Metodologías Ágiles",
      icon: <Kanban className="h-6 w-6 text-teal-500" />,
      technologies: "Scrum",
      description:
        "Trabajo eficientemente en entornos ágiles con énfasis en la entrega continua.",
    },
  ];

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

  return (
    <section
      id="habilidades"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-primary"
            style={{
              width: "40px",
              height: "40px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Habilidades y Experiencia Tecnica
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Una visión general de mis habilidades técnicas y áreas de
            experiencia.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="p-2 rounded-md bg-background/50">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                    <p className="text-sm text-foreground/60">
                      {skill.technologies}
                    </p>
                  </div>
                </div>
                <p className="text-foreground/80">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

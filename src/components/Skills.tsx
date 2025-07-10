import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Code2,
  Database,
  Server,
  Terminal,
  GitBranch,
  Layers,
  Cpu,
  Zap,
} from "lucide-react";

const skillCategories = [
  {
    title: "Lenguajes de Programación",
    icon: <Code2 className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      {
        name: "JavaScript",
        level: "Avanzado",
        icon: <Code2 className="h-4 w-4" />,
      },
      {
        name: "TypeScript",
        level: "Avanzado",
        icon: <Code2 className="h-4 w-4" />,
      },
      { name: "C", level: "Intermedio", icon: <Code2 className="h-4 w-4" /> },
      { name: "C#", level: "Intermedio", icon: <Code2 className="h-4 w-4" /> },
    ],
  },
  {
    title: "Frontend",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "HTML", level: "Avanzado", icon: <Code2 className="h-4 w-4" /> },
      { name: "CSS", level: "Avanzado", icon: <Code2 className="h-4 w-4" /> },
      {
        name: "SASS",
        level: "Intermedio",
        icon: <Code2 className="h-4 w-4" />,
      },
      {
        name: "React.js",
        level: "Avanzado",
        icon: <Cpu className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6" />,
    color: "from-emerald-500 to-green-500",
    skills: [
      {
        name: "Node.js",
        level: "Avanzado",
        icon: <Server className="h-4 w-4" />,
      },
      {
        name: "Express.js",
        level: "Avanzado",
        icon: <Terminal className="h-4 w-4" />,
      },
      { name: "REST", level: "Avanzado", icon: <Server className="h-4 w-4" /> },
      {
        name: "OpenAI API",
        level: "Avanzado",
        icon: <Zap className="h-4 w-4" />,
      },
      {
        name: "Creación y Diseño de APIs",
        level: "Avanzado",
        icon: <Layers className="h-4 w-4" />,
      },
      {
        name: "Supabase",
        level: "Avanzado",
        icon: <Server className="h-4 w-4" />,
      },
      {
        name: "Firebase",
        level: "Intermedio",
        icon: <Server className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Bases de Datos",
    icon: <Database className="h-6 w-6" />,
    color: "from-indigo-500 to-purple-500",
    skills: [
      {
        name: "SQL",
        level: "Avanzado",
        icon: <Database className="h-4 w-4" />,
      },
      {
        name: "MongoDB",
        level: "Avanzado",
        icon: <Database className="h-4 w-4" />,
      },
      {
        name: "Prisma",
        level: "Intermedio",
        icon: <Database className="h-4 w-4" />,
      },
      {
        name: "PostgreSQL",
        level: "Intermedio",
        icon: <Database className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Paradigmas de Programación",
    icon: <Layers className="h-6 w-6" />,
    color: "from-yellow-500 to-orange-500",
    skills: [
      {
        name: "Programación Estructurada",
        level: "Avanzado",
        icon: <Layers className="h-4 w-4" />,
      },
      {
        name: "Programación Orientada a Objetos",
        level: "Avanzado",
        icon: <Layers className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Control de Versiones",
    icon: <GitBranch className="h-6 w-6" />,
    color: "from-pink-500 to-purple-500",
    skills: [
      {
        name: "Git",
        level: "Avanzado",
        icon: <GitBranch className="h-4 w-4" />,
      },
      {
        name: "GitHub",
        level: "Avanzado",
        icon: <GitBranch className="h-4 w-4" />,
      },
    ],
  },
];

const techStack = [
  {
    name: "Lenguajes de Programación",
    icon: <Code2 className="h-5 w-5" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Frontend",
    icon: <Cpu className="h-5 w-5" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    color: "from-emerald-500 to-green-500",
  },
  {
    name: "Bases de Datos",
    icon: <Database className="h-5 w-5" />,
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Paradigmas de Programación",
    icon: <Layers className="h-5 w-5" />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Control de Versiones",
    icon: <GitBranch className="h-5 w-5" />,
    color: "from-pink-500 to-purple-500",
  },
];

export const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Habilidades Técnicas
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
                Stack Tecnológico
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Especializado en el desarrollo de software moderno y escalable,
              utilizando las tecnologías más avanzadas del mercado.
            </p>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                className={`group relative px-4 py-2 rounded-full bg-gradient-to-r ${tech.color} bg-opacity-10 backdrop-blur-sm border border-border/20 hover:border-primary/30 transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`p-1 rounded-full bg-gradient-to-r ${tech.color} text-white`}
                  >
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
            {skillCategories.map((category) => (
              <motion.div key={category.title} variants={itemVariants}>
                <Card className="relative group overflow-hidden bg-card/30 backdrop-blur-sm rounded-2xl border border-border/20 hover:border-primary/30 transition-all duration-500 h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
                      >
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          className="group/skill relative p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 h-full flex flex-col"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-2 mb-2 flex-shrink-0">
                            <div
                              className={`p-1.5 rounded-lg bg-gradient-to-r ${category.color} text-white flex-shrink-0`}
                            >
                              {skill.icon}
                            </div>
                            <span className="text-sm font-medium text-foreground leading-tight">
                              {skill.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 mt-auto">
                            <span className="text-xs font-medium text-foreground/60">
                              {skill.level}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

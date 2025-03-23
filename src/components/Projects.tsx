import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import movie_reservation_system from "../images/MovieReservationSystem.png";
import estudialo from "../images/Estudialo.png";
import traductor_ia from "../images/TraductorIA.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects: Project[] = [
    {
      id: 1,
      title: "Sistema de Reservacion de Funciones de Cine",
      description:
        "Sistema intuitivo que permite reservar funciones de cine de manera rápida y sencilla, gestionando horarios, películas y asientos en tiempo real.",
      image: movie_reservation_system,
      tags: ["React", "Node.js", "Express", "PostgreSQL"],
      liveUrl: "https://movie-reservation-system-frontend.vercel.app/",
      githubUrl:
        "https://github.com/marianosagua/movie-reservation-system-backend.git",
    },
    {
      id: 2,
      title: "Estudialo - Generador de Rutas de Aprendizaje con IA",
      description:
        "Realizacion del frontend de una aplicación que utiliza IA para diseñar rutas de aprendizaje personalizadas y optimizadas para alcanzar tus objetivos educativos.",
      image: estudialo,
      tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      liveUrl: "https://estudialoweb.com/",
      githubUrl: "https://github.com/marianosagua/estudialo-frontend.git",
    },
    {
      id: 3,
      title: "Traductor con IA",
      description:
        "Traductor con IA que ofrece traducciones rápidas y precisas en múltiples idiomas, utilizando modelos de lenguaje avanzados de la API de OpenAI para mejorar la comprensión y fluidez.",
      image: traductor_ia,
      tags: ["React", "Node.js", "Cloudflare", "OpenAI"],
      liveUrl: "https://ai-translator-nu.vercel.app/",
      githubUrl: "https://github.com/marianosagua/AI-translator",
    },
  ];

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

  return (
    <section id="proyectos" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proyectos destacados
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y destacados en diversos
            ámbitos y tecnologías.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <Card className="overflow-hidden h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8"
            asChild
          >
            <a href="/projects" target="_blank" rel="noopener noreferrer">
              Ver Todos los Proyectos
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

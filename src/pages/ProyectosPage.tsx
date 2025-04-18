import { motion } from "framer-motion";
import { useRef } from "react";
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

export const ProyectosPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const projects: Project[] = [
    {
      id: 1,
      title: "CinemaSpot - Sistema de Reservacion de Funciones de Cine",
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
    // Puedes agregar más proyectos aquí siguiendo la misma estructura
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
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
    <motion.div
      className="min-h-screen pt-28 pb-16 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-fuchsia-500 animate-gradient drop-shadow-lg">
            Todos mis proyectos
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Explora una galería completa de proyectos web desarrollados con
            pasión, creatividad y tecnología de vanguardia.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full bg-gradient-to-br from-[#23113a]/90 via-[#1a0033]/80 to-[#000000]/90 border border-primary/30 group shadow-2xl hover:scale-[1.025] hover:shadow-2xl hover:border-primary/60 transition-all duration-300 backdrop-blur-xl flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-90" />
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                    #{project.id.toString().padStart(2, "0")}
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-extrabold mb-2 text-white drop-shadow-lg group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 flex-1 text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-primary/20 via-purple-500/10 to-fuchsia-500/10 text-primary rounded-full text-xs font-semibold shadow border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Button
                      variant="default"
                      size="sm"
                      className="gap-2 bg-gradient-to-r from-primary to-purple-500 text-white font-bold shadow hover:brightness-110 hover:scale-105 transition-all"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo en vivo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-primary/40 text-primary hover:bg-primary/10 hover:text-primary font-bold"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Código Fuente
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

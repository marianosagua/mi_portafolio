import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  ExternalLink,
  Github,
  X,
  Sparkles,
  Code2,
  Layers,
  ArrowUpRight,
  Folder,
} from "lucide-react";
import { projectsData } from "@/data/projectsData";

export const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[0] | null
  >(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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

  const projectColors = [
    "from-emerald-500 to-green-500", // Invertilo - Verde
    "from-red-500 to-pink-500",      // CinemaSpot - Rojo
    "from-red-500 to-orange-500",    // Estudialo - Rojo
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-yellow-500 to-orange-500",
  ];

  return (
    <section
      id="proyectos"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-background/98 to-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
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
              <Folder className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Portafolio
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
                Proyectos Destacados
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Explora mi trabajo y las soluciones innovadoras que he
              desarrollado
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative h-full">
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      projectColors[index % projectColors.length]
                    } rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
                  />

                  {/* Card */}
                  <div className="relative h-full bg-card/30 backdrop-blur-sm rounded-2xl border border-border/20 group-hover:border-primary/30 transition-all duration-500 overflow-hidden">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          projectColors[index % projectColors.length]
                        } opacity-10`}
                      />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                      {/* Floating Icons */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <motion.div
                          animate={{
                            y: hoveredProject === index ? 0 : -10,
                            opacity: hoveredProject === index ? 1 : 0,
                          }}
                          className="p-2 bg-background/80 backdrop-blur-sm rounded-lg"
                        >
                          <ArrowUpRight className="h-4 w-4 text-primary" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-br ${
                            projectColors[index % projectColors.length]
                          } opacity-20`}
                        >
                          <Code2 className="h-4 w-4 text-primary" />
                        </div>
                      </div>

                      <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack Preview */}
                      <div className="flex items-center gap-2 mb-4">
                        <Layers className="h-3 w-3 text-primary/60" />
                        <div className="flex gap-1 flex-wrap">
                          {project.tags.slice(0, 3).map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs text-primary/80 font-medium"
                            >
                              {tag}
                              {i < 2 && i < project.tags.length - 1 && ","}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="text-xs text-primary/60">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* View More */}
                      <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                        <span>Ver detalles</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog
            open={!!selectedProject}
            onOpenChange={() => setSelectedProject(null)}
          >
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-card/95 backdrop-blur-xl border-border/20">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative"
              >
                {/* Dialog Header with Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      projectColors[
                        projectsData.indexOf(selectedProject) %
                          projectColors.length
                      ]
                    } opacity-20`}
                  />
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background/90 transition-colors duration-300 group"
                  >
                    <X className="h-5 w-5 text-foreground/70 group-hover:text-foreground transition-colors" />
                  </button>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${
                            projectColors[
                              projectsData.indexOf(selectedProject) %
                                projectColors.length
                            ]
                          } shadow-lg`}
                        >
                          <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                          {selectedProject.title}
                        </h2>
                      </div>
                      <p className="text-lg text-white/80 max-w-2xl">
                        {selectedProject.description}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Dialog Content */}
                <div className="p-8 space-y-8 max-h-[calc(90vh-20rem)] overflow-y-auto">
                  {/* Technologies */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Layers className="h-5 w-5 text-primary" />
                      Tecnologías Utilizadas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-xl text-sm hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Features - Removed since it doesn't exist in Project type */}

                  {/* Date - Removed since it doesn't exist in Project type */}

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4 pt-4"
                  >
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Ver Demo</span>
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border/20 hover:border-primary/30 text-foreground font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        <Github className="h-5 w-5" />
                        <span>Ver Código</span>
                      </a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

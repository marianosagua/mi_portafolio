import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const scrollToSkills = () => {
    document
      .getElementById("habilidades")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-0"
    >
      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 animate-gradient">
              Desarrollador Web
            </span>{" "}
            <br className="hidden xs:block" />
            <span className="text-white">Full Stack</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-6 sm:mb-8 px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Diseño y creo aplicaciones web escalables y de alta calidad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="rounded-full px-6 sm:px-8 text-base sm:text-lg bg-primary hover:bg-primary/90 w-full sm:w-auto"
              onClick={scrollToSkills}
            >
              Ver Mis Habilidades
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 sm:px-8 text-base sm:text-lg border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
              asChild
            >
              <Link to="/projects">Mis Proyectos</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-primary hover:bg-primary/10"
          onClick={scrollToSkills}
        >
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </motion.div>
    </section>
  );
};

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown, Code2, Sparkles, Terminal } from "lucide-react";

export const Hero = () => {
  const scrollToSkills = () => {
    document
      .getElementById("habilidades")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-0 bg-gradient-to-b from-background via-background/98 to-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Animated Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10 font-mono text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {`<${["div", "span", "code"][i]}>`}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Desarrollador de Software</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary animate-gradient">
                Transformando Ideas
              </span>
              <br />
              <span className="text-white">en Experiencias Digitales</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Diseño y desarrollo aplicaciones web modernas, escalables y de alta calidad, 
              combinando las últimas tecnologías con un enfoque centrado en el usuario.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="rounded-full px-8 text-lg bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white shadow-lg hover:shadow-primary/25 transition-all duration-300"
                onClick={scrollToSkills}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Ver Mis Habilidades
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-lg border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                onClick={() => document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Terminal className="mr-2 h-5 w-5" />
                Ver Proyectos
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
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

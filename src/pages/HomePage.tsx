import { motion } from "framer-motion";
import { Hero, Skills, Footer, Projects, Contact, About } from "@/components";

export const HomePage = () => {
  return (
    <motion.main
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </motion.main>
  );
};

import { motion } from "framer-motion";
import { Hero, Skills, Projects, Contact, About } from "@/components";

export const HomePage = () => {
  return (
    <motion.div
      className="min-h-screen"
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
    </motion.div>
  );
};

import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";

export const HomePage = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </motion.div>
  );
};

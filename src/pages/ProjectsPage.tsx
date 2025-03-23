import { Footer, Projects } from "@/components";
import { motion } from "framer-motion";

export const ProjectsPage = () => {
  return (
    <motion.main
      className="min-h-screen bg-background pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Projects />
      <Footer />
    </motion.main>
  );
};

import { motion } from "motion/react";

export const Footer = () => {
  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto px-4 text-center text-white">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()} Mariano Sagua. Portafolio Personal.
        </motion.p>
      </div>
    </footer>
  );
};

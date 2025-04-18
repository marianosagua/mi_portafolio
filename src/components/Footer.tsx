import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const socialLinks = [
    { icon: <Github className="h-4 w-4" />, to: "https://github.com/marianosagua", label: "GitHub" },
    { icon: <Linkedin className="h-4 w-4" />, to: "https://www.linkedin.com/in/mariano-sagua-49785923b/", label: "LinkedIn" },
    { icon: <Instagram className="h-4 w-4" />, to: "https://www.instagram.com/marianosagua/", label: "Instagram" },
  ];

  return (
    <footer className="py-3 bg-transparent border-t border-border/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <Link
            to="#home"
            className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 animate-gradient"
          >
            Mariano Sagua
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-3"
        >
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-background/60 hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors duration-200 shadow-sm"
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, to: "https://github.com/marianosagua", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, to: "https://www.linkedin.com/in/mariano-sagua-49785923b/", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, to: "https://www.instagram.com/marianosagua/", label: "Instagram" },
  ];

  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-0"
          >
            <Link
              to="#home"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
            >
              Mariano Sagua
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex space-x-6 mb-6 md:mb-0"
          >
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/50 hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

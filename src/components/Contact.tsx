import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

const contactItems = [
  {
    icon: <Mail size={24} />,
    text: "marianosagua4343@gmail.com",
    href: "mailto:marianosagua4343@gmail.com",
  },
  {
    icon: <FileText size={24} />,
    text: "CV",
    href: "https://drive.google.com/file/d/1nq3oQOqg8Q60gBr_TcMFGXfs9OepxPg_/view?usp=sharing",
  },
  {
    icon: <Github size={24} />,
    text: "GitHub",
    href: "https://github.com/marianosagua",
  },
  {
    icon: <Linkedin size={24} />,
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/mariano-sagua-49785923b/",
  },
];

export const Contact = () => {
  return (
    <section id="Contacto" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ponte en contacto
        </motion.h2>
        <motion.div
          className="max-w-xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span className="ml-2">{item.text}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

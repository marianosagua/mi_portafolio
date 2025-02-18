import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Habilidades", "Proyectos", "Contacto"];

  return (
    <motion.header
      className="sticky top-0 z-10 bg-zinc-950 shadow-md border-b border-zinc-700"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold text-white"
          whileHover={{ scale: 1.1 }}
        >
          Portafolio Personal
        </motion.h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4 text-white">
            {menuItems.map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <a href={`#${item}`} className="hover:text-gray-400">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white cursor-pointer">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center py-4">
              {menuItems.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  className="my-2 text-white"
                >
                  <a
                    href={`#${item}`}
                    className="hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

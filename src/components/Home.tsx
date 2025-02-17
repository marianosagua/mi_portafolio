import { motion } from "motion/react";
import profile_picture from "../images/FotoPerfil.jpg";

export const Home = () => {
  return (
    <section id="Home" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Mariano Sagua</h2>
          <p className="text-xl mb-6 text-gray-400">
            Soy un desarrollador full stack comprometido en transformar ideas en
            soluciones digitales integrales, combinando interfaces intuitivas y
            arquitecturas robustas para experiencias web de alto impacto.
          </p>
          <motion.a
            href="#Contacto"
            className="bg-zinc-950 hover:bg-zinc-900 text-white font-semibold py-2 px-4 rounded border-zinc-700 border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactame
          </motion.a>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={profile_picture}
            alt="Your Name"
            width={300}
            height={300}
            className="rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

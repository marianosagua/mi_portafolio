import { motion } from "motion/react";
import movie_reservation_system from "../images/MovieReservationSystem.png";
import estudialo from "../images/Estudialo.png";
import traductorIA from "../images/TraductorIA.png";

const projects = [
  {
    title: "Sistema de Reservacion de Funciones de Cine",
    description:
      "Sistema intuitivo que permite reservar funciones de cine de manera rápida y sencilla, gestionando horarios, películas y asientos en tiempo real.",
    image: movie_reservation_system,
    link: "https://movie-reservation-system-frontend.vercel.app/",
    linkGitHub:
      "https://github.com/marianosagua/movie-reservation-system-backend.git",
  },
  {
    title: "Estudialo - Generador de Rutas de Aprendizaje con IA",
    description:
      "Realizacion del frontend de una aplicación que utiliza IA para diseñar rutas de aprendizaje personalizadas y optimizadas para alcanzar tus objetivos educativos.",
    image: estudialo,
    link: "https://estudialoweb.com/",
    linkGitHub: "https://github.com/marianosagua/estudialo-frontend.git",
  },
  // {
  //   title: "Traductor con IA",
  //   description:
  //     "Traductor con IA que ofrece traducciones rápidas y precisas en múltiples idiomas, utilizando modelos de lenguaje avanzados de la API de OpenAI para mejorar la comprensión y fluidez.",
  //   image: traductorIA,
  //   link: "https://ai-translator-nu.vercel.app/",
  //   linkGitHub: "https://github.com/marianosagua/AI-translator",
  // },
];

export const Projects = () => {
  return (
    <section id="Proyectos" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mis Proyectos
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg border border-zinc-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-start">
                  <a
                    href={project.link}
                    className=" hover:text-blue-300 text-white underline"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-link"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a
                    href={project.linkGitHub}
                    className=" hover:text-blue-300 text-white underline"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

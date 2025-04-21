import movie_reservation_system from "../images/MovieReservationSystem.png";
import estudialo from "../images/Estudialo.png";
import traductor_ia from "../images/TraductorIA.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  // {
  //   id: 1,
  //   title: "CinemaSpot - Sistema de Reservacion de Funciones de Cine",
  //   description:
  //     "Sistema intuitivo que permite reservar funciones de cine de manera rápida y sencilla, gestionando horarios, películas y asientos en tiempo real.",
  //   image: movie_reservation_system,
  //   tags: ["React", "Node.js", "Express", "PostgreSQL"],
  //   liveUrl: "https://movie-reservation-system-frontend.vercel.app/",
  //   githubUrl:
  //     "https://github.com/marianosagua/movie-reservation-system-backend.git",
  // },
  {
    id: 2,
    title: "Estudialo - Generador de Rutas de Aprendizaje con IA",
    description:
      "Realizacion del frontend de una aplicación que utiliza IA para diseñar rutas de aprendizaje personalizadas y optimizadas para alcanzar tus objetivos educativos.",
    image: estudialo,
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    liveUrl: "https://estudialoweb.com/",
    githubUrl: "https://github.com/marianosagua/estudialo-frontend.git",
  },
  // {
  //   id: 3,
  //   title: "Traductor con IA",
  //   description:
  //     "Traductor con IA que ofrece traducciones rápidas y precisas en múltiples idiomas, utilizando modelos de lenguaje avanzados de la API de OpenAI para mejorar la comprensión y fluidez.",
  //   image: traductor_ia,
  //   tags: ["React", "Node.js", "Cloudflare", "OpenAI"],
  //   liveUrl: "https://ai-translator-nu.vercel.app/",
  //   githubUrl: "https://github.com/marianosagua/AI-translator",
  // },
];

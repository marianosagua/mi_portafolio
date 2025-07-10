import EstudialoIMG from "../images/Estudialo.png";
import InvertiloIMG from "../images/InvertiloCaptura.png";
import CinemaSpotIMG from "../images/CinemaSpotCaptura.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Invertilo",
    description:
      "Aplicación de recomendación personalizadas de inversiones que utiliza inteligencia artificial para proporcionar recomendaciones precisas y contextuales.",
    image: InvertiloIMG,
    tags: ["React.js", "OpenAI API", "TypeScript", "Supabase"],
    liveUrl: "https://invertilo-frontend.vercel.app/",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "CinemaSpot",
    description:
      "Plataforma completa para la gestión y reserva de entradas de cine con sistema de usuarios y administración.",
    image: CinemaSpotIMG,
    tags: ["React.js", "Node.js", "PostgreSQL", "Express.js", "JWT"],
    liveUrl: "https://cinema-spot-frontend.vercel.app/",
    githubUrl: "https://github.com/marianosagua/cinema_spot_backend",
    featured: false,
  },
  {
    id: 3,
    title: "Estudialo",
    description:
      "Plataforma generadora de mapas de estudio realizada con ayuda de LLMs.",
    image: EstudialoIMG,
    tags: ["OpenAI", "React.js", "Node.js", "LangChain"],
    liveUrl: "https://estudialoweb.com/",
    githubUrl: "#",
    featured: true,
  },
];

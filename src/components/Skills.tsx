import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "RESTful APIs",
  "SQL",
  "Docker",
  "Firebase",
  "Vercel",
  "Railway",
  "Git",
  "GitHub",
];

export const Skills = () => {
  return (
    <section id="Habilidades" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mis Habilidades
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800 rounded-lg p-4 text-center text-white font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

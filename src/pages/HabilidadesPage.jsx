import { useInView } from "react-intersection-observer";

export const HabilidadesPage = () => {
  const [refOne, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refTwo, inViewTwo] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="habilidades" id="habilidades" ref={refOne}>
      <section className="habilidades__items">
        <h2>Habilidades</h2>

        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>HTML</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>CSS</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>SASS</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>Bootstrap</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>Tailwind CSS</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>Javascript</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>React.js</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>Redux</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>Firebase</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>Git</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>Git Hub</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>Node.js</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>Express.js</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>Mongo DB</p>
        </div>
      </section>

      <section className="habilidades__otrasHabilidades">
        <h2 className="habilidades__otrasHabilidades--title">
          Otras Habilidades
        </h2>

        <div className="habilidades__otros" ref={refTwo}>
          <div
            className={
              inViewTwo
                ? "habilidades__otros--item  animate__animated animate__slideInLeft"
                : "habilidades__otros--item"
            }
          >
            <p>Trabajo en equipo</p>
          </div>

          <div
            className={
              inViewTwo
                ? "habilidades__otros--item  animate__animated animate__slideInLeft"
                : "habilidades__otros--item"
            }
          >
            <p>Liderazgo</p>
          </div>

          <div
            className={
              inViewTwo
                ? "habilidades__otros--item  animate__animated animate__slideInLeft"
                : "habilidades__otros--item"
            }
          >
            <p>Proactividad</p>
          </div>

          <div
            className={
              inViewTwo
                ? "habilidades__otros--item  animate__animated animate__slideInLeft"
                : "habilidades__otros--item"
            }
          >
            <p>Actitud Positiva</p>
          </div>

          <div
            className={
              inViewTwo
                ? "habilidades__otros--item  animate__animated animate__slideInLeft"
                : "habilidades__otros--item"
            }
          >
            <p>Aprendizaje Constante</p>
          </div>

          <div
            className={
              inViewTwo
                ? "habilidades__otros--item  animate__animated animate__slideInLeft"
                : "habilidades__otros--item"
            }
          >
            <p>Escucha Activa</p>
          </div>

          <div
            className={
              inViewTwo
                ? "habilidades__otros--item  animate__animated animate__slideInLeft"
                : "habilidades__otros--item"
            }
          >
            <p>Empatia</p>
          </div>

          <div
            className={
              inViewTwo
                ? "habilidades__otros--item  animate__animated animate__slideInLeft"
                : "habilidades__otros--item"
            }
          >
            <p>Autodidacta</p>
          </div>

          <div
            className={
              inViewTwo
                ? "habilidades__otros--item  animate__animated animate__slideInLeft"
                : "habilidades__otros--item"
            }
          >
            <p>Creatividad</p>
          </div>

          <div
            className={
              inViewTwo
                ? "habilidades__otros--item  animate__animated animate__slideInLeft"
                : "habilidades__otros--item"
            }
          >
            <p>Analisis de problemas</p>
          </div>
        </div>
      </section>
    </div>
  );
};

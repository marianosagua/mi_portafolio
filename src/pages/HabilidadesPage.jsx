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
          <p>Sass</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>JavaScript</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>TypeScript</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>React</p>
        </div>
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>React Query</p>
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
        {/* <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>Pruebas Unitarias</p>
        </div> */}
        <div
          className={
            inView
              ? "habilidades__items--item animate__animated animate__fadeInUp"
              : "habilidades__items--item"
          }
        >
          <p>Node</p>
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
    </div>
  );
};

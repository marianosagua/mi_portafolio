// import FotoPerfil from "../images/FotoPerfil.jpg";
import { useInView } from "react-intersection-observer";

export const AboutMePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="aboutMe" id="aboutMe" ref={ref}>
      <section
        className={
          inView
            ? "aboutMe__info  animate__animated animate__fadeInLeft"
            : "aboutMe__info"
        }
      >
        <p>
          Soy desarrollador de software con especializacion en tecnologias como
          html, css, sass, javascript, react, react native, firebase, git, git
          hub, me gusta mucho y me siento muy comodo trabajando en este sector,
          llevo ya algunos años trabajando con las distintas tecnologias del
          desarollo web y por eso siento que estoy muy capacitado para ejercer
          cualquier trabajo referido a esta area, siempre estoy abierto a
          aprender nuevas cosas, a trabajar en equipo y soy una persona que
          siempre voy a intentar hacer mi trabajo de la mejor manera posible.
        </p>
      </section>

      <section className="aboutMe__profile">
        {/* <img src={FotoPerfil} alt="Foto Perfil" /> */}

        <a href="#" className="aboutMe__profile--cv" target="__blank">
          CV
        </a>
      </section>
    </div>
  );
};

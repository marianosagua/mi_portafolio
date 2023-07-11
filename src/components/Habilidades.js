import React from "react";
import { useInView } from "react-intersection-observer";
import GitHubIcon from "@mui/icons-material/GitHub";
import HtmlIcon from "../images/Html_Icon.png";
import CssIcon from "../images/CSS_Icon.png";
import SassIcon from "../images/Sass_Icon.png";
import JavaScriptIcon from "../images/JavaScript_Icon.png";
import ReactIcon from "../images/React_Icon.png";
import ReactNativeIcon from "../images/React_Icon.png";
import BootstrapIcon from "../images/Bootstrap_Icon.png";
import ReduxIcon from "../images/Redux_Icon.png";
import GitIcon from "../images/Git_Icon.png";
import FirebaseIcon from "../images/Firebase_Icon.jpg";
import AndroidStudio from "../images/AndroidStudio_Icon.png";
import ResponsiveDesign from "../images/ResponsiveDesign_Icon.png";
import VercelIcon from "../images/Vercel_Icon.png";

const Habilidades = () => {
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
      <h2 className="habilidades__title">Tecnologias</h2>

      <section className="habilidades__items">
        <div
          className={
            inView ? "card  animate__animated animate__fadeInDown" : "card"
          }
        >
          <span className="card__spanHoverDos"></span>
          <img src={HtmlIcon} alt="Html Icon" />
          <p>HTML</p>
        </div>

        <div
          className={
            inView ? "card  animate__animated animate__fadeInDown" : "card"
          }
        >
          <span className="card__spanHoverDos"></span>
          <img src={CssIcon} alt="CSS Icon" />
          <p>CSS</p>
        </div>

        <div
          className={
            inView ? "card  animate__animated animate__fadeInDown" : "card"
          }
        >
          <span className="card__spanHoverDos"></span>
          <img src={SassIcon} alt="SASS Icon" />
          <p>SASS</p>
        </div>

        <div
          className={
            inView ? "card  animate__animated animate__fadeInDown" : "card"
          }
        >
          <span className="card__spanHoverDos"></span>
          <img src={ResponsiveDesign} alt="Responsive Design Icon" />
          <p>RESPONSIVE DESIGN</p>
        </div>

        <div
          className={
            inView ? "card  animate__animated animate__fadeInDown" : "card"
          }
        >
          <span className="card__spanHoverDos"></span>
          <img src={JavaScriptIcon} alt="JAVASCRIPT Icon" />
          <p>JAVASCRIPT</p>
        </div>

        <div
          className={
            inView ? "card  animate__animated animate__fadeInDown" : "card"
          }
        >
          <span className="card__spanHoverDos"></span>
          <img src={ReactIcon} alt="REACT Icon" />
          <p>REACT JS</p>
        </div>

        <div
          className={
            inView ? "card  animate__animated animate__fadeInDown" : "card"
          }
        >
          <span className="card__spanHoverDos"></span>
          <img src={ReactNativeIcon} alt="REACT NATIVE Icon" />
          <p>REACT NATIVE</p>
        </div>

        <div
          className={
            inView ? "card  animate__animated animate__fadeInDown" : "card"
          }
        >
          <span className="card__spanHoverDos"></span>
          <img src={FirebaseIcon} alt="FIREBASE Icon" />
          <p>FIREBASE</p>
        </div>

        <div
          className={
            inView ? "card  animate__animated animate__fadeInDown" : "card"
          }
        >
          <span className="card__spanHoverDos"></span>
          <img src={BootstrapIcon} alt="Bootstrap Icon" />
          <p>BOOTSTRAP</p>
        </div>

        <div
          className={
            inView ? "card  animate__animated animate__fadeInDown" : "card"
          }
        >
          <span className="card__spanHoverDos"></span>
          <img src={GitIcon} alt="GIT Icon" />
          <p>GIT</p>
        </div>

        <div
          className={
            inView ? "card  animate__animated animate__fadeInDown" : "card"
          }
        >
          <span className="card__spanHoverDos"></span>
          <GitHubIcon
            sx={{ width: "100px", height: "100px", color: "#f5efdf" }}
            className="gitHubIcon"
          />
          <p>GIT HUB</p>
        </div>
      </section>

      <h2 className="habilidades__title">Otras Habilidades</h2>

      <section className="habilidades__otros" ref={refTwo}>
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
      </section>
    </div>
  );
};

export default Habilidades;

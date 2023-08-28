import { useState } from "react";
import { arrowLeft, closeIcon } from "../assets/Icons";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [flag, setFlag] = useState(0);

  const irAlLink = (nombreLink) => {
    closeMenu();
    const section = document.getElementById(nombreLink);

    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth" });
    }, 2300);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.classList.add("menu-open");
    setFlag(1);
  };

  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 800);

    document.body.classList.remove("menu-open");
  };

  return (
    <div>
      <section className="menuBtn">
        <button onClick={openMenu}>Menu</button>
      </section>

      {isMenuOpen ? (
        <div>
          <span className="spanMenuEntrance animate__animated animate__slideInDown animate__faster"></span>

          <section className="modalMenu animate__animated animate__faster animate__delay-1s animate__slideInDown">
            <button className="modalMenu__btnClose" onClick={closeMenu}>
              {closeIcon}
            </button>

            <div className="modalMenu__items">
              <h2 onClick={() => irAlLink("home")}>
                Home <span>{arrowLeft}</span>{" "}
              </h2>

              {/* <h2 onClick={() => irAlLink("aboutMe")}>
                Sobre Mi <span>{arrowLeft}</span>
              </h2> */}

              <h2 onClick={() => irAlLink("habilidades")}>
                Habilidades <span>{arrowLeft}</span>
              </h2>

              {/* <h2 onClick={() => irAlLink("projects")}>
                Proyectos <span>{arrowLeft}</span>
              </h2> */}

              <h2 onClick={() => irAlLink("contact")}>
                Contacto <span>{arrowLeft}</span>
              </h2>
            </div>

            <div className="modalMenu__links">
              <a href="https://www.linkedin.com/in/mariano-sagua-49785923b/">
                LINKEDIN
              </a>

              <a href="https://github.com/MarianoSagua">GIT HUB</a>
            </div>
          </section>
        </div>
      ) : flag !== 0 ? (
        <div>
          <span className="spanMenuEntrance animate__delay-1s animate__animated animate__slideOutUp animate__faster"></span>

          <section className="modalMenu animate__animated animate__faster  animate__slideOutUp">
            <button className="modalMenu__btnClose" onClick={closeMenu}>
              {closeIcon}
            </button>

            <div className="modalMenu__items">
              <h2 onClick={() => irAlLink("home")}>
                Home <span>{arrowLeft}</span>{" "}
              </h2>

              {/* <h2 onClick={() => irAlLink("aboutMe")}>
                Sobre Mi <span>{arrowLeft}</span>
              </h2> */}

              <h2 onClick={() => irAlLink("habilidades")}>
                Habilidades <span>{arrowLeft}</span>
              </h2>

              {/* <h2 onClick={() => irAlLink("projects")}>
                Proyectos <span>{arrowLeft}</span>
              </h2> */}

              <h2 onClick={() => irAlLink("contact")}>
                Contacto <span>{arrowLeft}</span>
              </h2>
            </div>

            <div className="modalMenu__links">
              <a href="https://www.linkedin.com/in/mariano-sagua-49785923b/">
                LINKEDIN
              </a>

              <a href="https://github.com/MarianoSagua">GIT HUB</a>
            </div>
          </section>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

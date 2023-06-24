import React, { useState } from "react";
import { arrowLeft, closeIcon } from "../assets/Icons";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSpan, setShowSpan] = useState(false);

  const irAlLink = (nombreLink) => {
    closeMenu();
    const section = document.getElementById(nombreLink);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const openMenu = () => {
    setIsMenuOpen(true);
    window.scrollTo(0, 0);
    document.body.classList.add("menu-open");
  };

  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 800);

    setShowSpan(true);
    document.body.classList.remove("menu-open");

    setTimeout(() => {
      setShowSpan(false);
    }, 1500);
  };

  return (
    <div>
      <section className="menu">
        <button className="menu__btn" onClick={openMenu}>
          Menu
        </button>
      </section>

      {isMenuOpen ? (
        <>
          <span className="spanMenuEntrance animate__animated animate__slideInDown animate__fast"></span>

          <section className="modalMenu animate__animated animate__fast animate__delay-1s animate__slideInDown">
            <button className="modalMenu__btnClose" onClick={closeMenu}>
              {closeIcon}
            </button>

            <div className="modalMenu__items">
              <h2 onClick={() => irAlLink("home")}>
                Home <span>{arrowLeft}</span>{" "}
              </h2>

              <h2 onClick={() => irAlLink("aboutMe")}>
                Sobre Mi <span>{arrowLeft}</span>
              </h2>

              <h2 onClick={() => irAlLink("habilidades")}>
                Habilidades <span>{arrowLeft}</span>
              </h2>

              <h2 onClick={() => irAlLink("projects")}>
                Proyectos <span>{arrowLeft}</span>
              </h2>

              <h2 onClick={() => irAlLink("contact")}>
                Contacto <span>{arrowLeft}</span>
              </h2>
            </div>

            <div className="modalMenu__links">
              <a href="https://www.linkedin.com/in/mariano-sagua-49785923b/">
                LINKEDIN
              </a>

              <a href="https://github.com/MarianoSagua">GIT HUB</a>

              <p>@2023</p>
            </div>
          </section>
        </>
      ) : (
        <>
          {showSpan && (
            <span className="spanMenuEntrance animate__animated animate__slideOutUp animate__fast"></span>
          )}
        </>
      )}
    </div>
  );
};

export default Menu;

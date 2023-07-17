import React from "react";
import { arrowUpIcon } from "../assets/Icons";

const scrollToTop = () => {
  const scrollToTopAnimation = () => {
    const currentPosition = window.scrollY;

    if (currentPosition > 0) {
      window.scrollTo(0, currentPosition - 80);
      window.requestAnimationFrame(scrollToTopAnimation);
    }
  };

  window.requestAnimationFrame(scrollToTopAnimation);
};

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/mariano-sagua-49785923b/"
        target="_blanck"
      >
        LINKEDIN
      </a>

      <a href="https://github.com/MarianoSagua" target="_blanck">
        GIT HUB
      </a>

      <p>@2023</p>

      <button onClick={scrollToTop} className="footer__btn">
        {arrowUpIcon}
      </button>
    </div>
  );
};

export default Footer;

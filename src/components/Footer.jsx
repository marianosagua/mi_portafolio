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

export const Footer = () => {
  return (
    <div className="footer">
      <button onClick={scrollToTop} className="footer__btn">
        {arrowUpIcon}
      </button>

      <div className="footer__titles">
        <p>Mariano Sagua</p>
        <p>Software Developer</p>
        <p>2023</p>
      </div>

      <button onClick={scrollToTop} className="footer__btn">
        {arrowUpIcon}
      </button>
    </div>
  );
};

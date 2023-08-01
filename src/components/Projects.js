import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";
import { boxArrow, githubIcon } from "../assets/Icons";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <section>
        <ParallaxText baseVelocity={20}>-Software</ParallaxText>
        <ParallaxText baseVelocity={20}>-Developer</ParallaxText>
      </section>

      <section className="projects__table">
        <div className="projects__table--rowTitles">
          <h5>Proyecto</h5>
          <h5>Caracteristicas</h5>
          <h5>Link</h5>
        </div>

        <div className="projects__table--rowProject">
          <span className="spanHover"></span>

          <h6>
            Stargames
            <span>
              <a href="https://star-games-store.vercel.app/" target="_blanck">
                {boxArrow}
              </a>
            </span>
          </h6>

          <div className="projects__table--rowProject--tecnologies">
            <p>E-commerce</p>
            <p>Sass</p>
            <p>React</p>
            <p>Firebase</p>
          </div>

          <div className="projects__table--rowProject--links">
            <a href="https://star-games-store.vercel.app/" target="_blanck">
              {boxArrow}
            </a>
          </div>
        </div>

        <div className="projects__table--rowProject">
          <span className="spanHover"></span>
          <h6>
            Pokedex{" "}
            <span>
              <a
                href="https://github.com/MarianoSagua/app_mobile_pokedex"
                target="_blanck"
              >
                {githubIcon}
              </a>
            </span>{" "}
          </h6>

          <div className="projects__table--rowProject--tecnologies">
            <p>Mobile</p>
            <p>React Native</p>
            <p>Android Studio</p>
            <p>Firebase</p>
          </div>

          <div className="projects__table--rowProject--links">
            <a
              href="https://github.com/MarianoSagua/app_mobile_pokedex"
              target="_blanck"
            >
              {githubIcon}
            </a>
          </div>
        </div>

        <div className="projects__table--rowProject">
          <span className="spanHover"></span>

          <h6>
            Memo Test{" "}
            <span>
              <a href="https://memory-test-app.vercel.app/" target="_blanck">
                {boxArrow}
              </a>
            </span>{" "}
          </h6>

          <div className="projects__table--rowProject--tecnologies">
            <p>Game</p>
            <p>Sass</p>
            <p>React</p>
            <p>Firebase</p>
          </div>

          <div className="projects__table--rowProject--links">
            <a href="https://memory-test-app.vercel.app/" target="_blanck">
              {boxArrow}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

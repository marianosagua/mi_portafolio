import React, { useRef } from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import { closeIconSmall, email, linkedin } from "../assets/Icons";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material";

const StyledGitHubIcon = styled(GitHubIcon)(({ theme }) => ({
  width: "140px",
  height: "140px",
  [theme.breakpoints.down("md")]: {
    width: "90px",
    height: "90px",
  },
}));

const Contact = () => {
  const modalEmailRef = useRef(null);
  const theme = useTheme();

  return (
    <div className="contact" id="contact">
      <section className="contact__redes">
        <div>
          <motion.div
            className="contact__redes--circle"
            animate={{ scale: [1.1, 1.3, 1.1] }}
            transition={{ duration: 5, ease: "easeOut", repeat: Infinity }}
            onClick={() => (modalEmailRef.current.style.display = "flex")}
          >
            {email}
          </motion.div>

          <a
            href="https://www.linkedin.com/in/mariano-sagua-49785923b/"
            target="_blanck"
          >
            <motion.div
              className="contact__redes--circle"
              animate={{ scale: [0.7, 1.3, 0.7] }}
              transition={{ duration: 5, ease: "easeOut", repeat: Infinity }}
            >
              {linkedin}
            </motion.div>
          </a>
        </div>

        <a href="https://github.com/MarianoSagua" target="_blanck">
          <motion.div
            className="contact__redes--circle"
            animate={{ scale: [0.7, 1.3, 0.7] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
          >
            <StyledGitHubIcon theme={theme} />
          </motion.div>
        </a>
      </section>

      <section className="contact__title">
        <h1>Contacto? Hace click en alguna.</h1>
      </section>

      <div ref={modalEmailRef} className="contact__emailModal">
        <button
          onClick={() => (modalEmailRef.current.style.display = "none")}
          className="contact__emailModal--btn"
        >
          {closeIconSmall}
        </button>
        <p>Enviame un email a:</p>
        <p>marianosagua4343@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;

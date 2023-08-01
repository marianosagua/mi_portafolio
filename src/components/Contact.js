import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__datos">
        <h1>Contacto</h1>
        <div className="contact__datos--email">
          {" "}
          <h6>marianosagua4343@gmail.com</h6>{" "}
        </div>
      </div>

      <div className="contact__links">
        <a
          href="https://drive.google.com/file/d/1ivicZwqHXpcat-Hb5ShzrKoNZeDtTXw1/view?usp=sharing"
          target="_blanck"
        >
          Curriculum
        </a>
        <a
          href="https://www.linkedin.com/in/mariano-sagua-49785923b/"
          target="_blanck"
        >
          Linkedin
        </a>
        <a href="https://github.com/MarianoSagua" target="_blanck">
          Git Hub
        </a>
      </div>
    </div>
  );
};

export default Contact;

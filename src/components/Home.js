import React from "react";
import SouthIcon from "@mui/icons-material/South";
import { TbPointFilled } from "react-icons/tb";

const Home = () => {
  return (
    <div className="homeApp" id="home">
      <section className="homeApp__titles">
        <div className="homeApp__titles--title">
          <div className="containerText">
            <div className="containerText__word">Mariano</div>
          </div>
          <div className="containerText">
            <div className="containerText__word">Sagua</div>
          </div>
          <div className="containerText">
            <div className="containerText__word">Software</div>
          </div>
          <div className="containerText">
            <div className="containerText__word">Developer</div>
          </div>
        </div>

        <div className="homeApp__titles--title">
          <div className="containerText">
            <div className="containerText__word">Mariano</div>
          </div>
          <div className="containerText">
            <div className="containerText__word">Sagua</div>
          </div>
          <div className="containerText">
            <div className="containerText__word">Software</div>
          </div>
          <div className="containerText">
            <div className="containerText__word">Developer</div>
          </div>
        </div>

        <div className="homeApp__titles--title">
          <div className="containerText">
            <div className="containerText__word">Mariano</div>
          </div>
          <div className="containerText">
            <div className="containerText__word">Sagua</div>
          </div>
          <div className="containerText">
            <div className="containerText__word">Software</div>
          </div>
          <div className="containerText">
            <div className="containerText__word">Developer</div>
          </div>
        </div>
      </section>

      <section className="homeApp__textInfo">
        <h3>Buenos Aires, Argentina</h3>
        <h3 className="homeApp__textInfo--textTwo">
          Software <TbPointFilled /> Developer
        </h3>
        <h3 className="homeApp__textInfo--scroll">
          <div className="homeApp__textInfo--scroll--text">
            Scroll para abajo
            <span>para ver toda mi informacion</span>
          </div>

          <div>
            <SouthIcon fontSize="lg" />
          </div>
        </h3>
      </section>

      <section className="homeApp__responsive">
        <div className="homeApp__responsive--item">
          <div className="homeApp__responsive--item--itemUno">
            <div className="containerText">
              <div className="containerText__word">Mariano</div>
            </div>
            <div className="containerText">
              <div className="containerText__word">Sagua</div>
            </div>
            <div className="containerText">
              <div className="containerText__word">Software</div>
            </div>
            <div className="containerText">
              <div className="containerText__word">Developer</div>
            </div>
          </div>

          <div className="homeApp__responsive--item--itemDos">
            <h3>
              {" "}
              <span>Buenos Aires</span> Argentina
            </h3>

            <h3 className="homeApp__textInfo--textTwo">
              Software{" "}
              <span>
                {" "}
                <TbPointFilled />
              </span>{" "}
              Developer
            </h3>
          </div>
        </div>
        <div className="homeApp__responsive--item">
          <div className="homeApp__responsive--item--itemUno">
            <div className="containerText">
              <div className="containerText__word">Mariano</div>
            </div>
            <div className="containerText">
              <div className="containerText__word">Sagua</div>
            </div>
            <div className="containerText">
              <div className="containerText__word">Software</div>
            </div>
            <div className="containerText">
              <div className="containerText__word">Developer</div>
            </div>
          </div>

          <div className="homeApp__responsive--item--itemDos">
            <h3>
              {" "}
              <span>Buenos Aires</span> Argentina
            </h3>

            <h3 className="homeApp__textInfo--textTwo">
              Software{" "}
              <span>
                {" "}
                <TbPointFilled />
              </span>{" "}
              Developer
            </h3>
          </div>
        </div>
        <div className="homeApp__responsive--item">
          <div className="homeApp__responsive--item--itemUno">
            <div className="containerText">
              <div className="containerText__word">Mariano</div>
            </div>
            <div className="containerText">
              <div className="containerText__word">Sagua</div>
            </div>
            <div className="containerText">
              <div className="containerText__word">Software</div>
            </div>
            <div className="containerText">
              <div className="containerText__word">Developer</div>
            </div>
          </div>

          <div className="homeApp__responsive--item--itemDos">
            <h3>
              {" "}
              <span>Buenos Aires</span> Argentina
            </h3>

            <h3 className="homeApp__textInfo--textTwo">
              Software{" "}
              <span>
                {" "}
                <TbPointFilled />
              </span>{" "}
              Developer
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

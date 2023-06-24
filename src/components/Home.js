import React from "react";
import SouthIcon from "@mui/icons-material/South";

const Home = () => {
  return (
    <div className="home" id="home">
      <section className="home__titles">
        <div className="home__titles--title">
          <p>Mariano</p>
          <p>Sagua</p>
          <p>Programador</p>
          <p>Web</p>
          <p>@2023</p>
        </div>

        <div className="home__titles--title">
          <p>Mariano</p>
          <p>Sagua</p>
          <p>Programador</p>
          <p>Web</p>
          <p>@2023</p>
        </div>

        <div className="home__titles--title">
          <p>Mariano</p>
          <p>Sagua</p>
          <p>Programador</p>
          <p>Web</p>
          <p>@2023</p>
        </div>
      </section>

      <section className="home__textInfo">
        <h3>Buenos Aires, Argentina</h3>
        <h3>Programador Web</h3>
        <h3 className="home__textInfo--scroll">
          <div>
            <SouthIcon fontSize="lg" />
          </div>

          <div className="home__textInfo--scroll--text">
            Scroll para abajo
            <span>para ver toda mi informacion</span>
          </div>
        </h3>
      </section>
    </div>
  );
};

export default Home;

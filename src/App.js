import "./App.scss";
import "animate.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Habilidades from "./components/Habilidades";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Menu />
      <Home />
      {/* <AboutMe /> */}
      <Habilidades />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

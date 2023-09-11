import React from "react";
import { Container } from "react-bootstrap";
import { Contacto } from "./components/Contacto.jsx";
import { Footer } from "./components/Footer.jsx";
import { Formulario } from "./components/Formulario.jsx";
import { Home } from "./components/Home.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { Plataforma } from "./components/Plataforma.jsx";
import { Tecnologia } from "./components/Tecnologia.jsx";
import { Video } from "./components/Video.jsx";
import { WhyGrow } from "./components/WhyGrow.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const handleScroll = () => {
    const components = document.querySelectorAll(".hidden");
    components.forEach((component) => {
      const componentTop = component.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (componentTop < windowHeight * 0.9) {
        component.classList.add("visible");
        component.classList.remove("hidden");
      }
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid className="wrap-container">
      <NavBar />

      <Home id={"home"} />

      <div className="hidden">
        <WhyGrow />
      </div>

      <div className="hidden" id={"plataforma"}>
        <Plataforma />
      </div>

      <div className="hidden" id={"tecnologia"}>
        <Tecnologia />
      </div>

      <div className="hidden" style={{ width: "100%" }}>
        <Video />
      </div>

      <div className="hidden" id={"contacto"}>
        <Contacto />
      </div>

      <div className="hidden" id={"nosotros"}>
        <Formulario />
      </div>

      <Footer />
    </Container>
  );
}

export default App;

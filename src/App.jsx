import "./App.css";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./components/Home.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { Grow } from "./components/Grow.jsx";
import { Contacto } from "./components/Contacto.jsx";
import { Plataforma } from "./components/Plataforma.jsx";
import { Tecnologia } from "./components/Tecnologia.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    console.log("scroll");
  };
  return (
    <>
      <NavBar />
      <Home />
      <Grow />
      <Plataforma />
      <Tecnologia />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;

import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    const hola = document.getElementById("Hola");
    hola.addEventListener("click", () => {
      console.log("hola");
    });
  }, []);

  return (
    <div className="container-home">
      <div className="">
        <p>La Evolucion Tecnologica de la naturaleza</p>
        <button id="Hola">ACCION</button>
      </div>
    </div>
  );
};

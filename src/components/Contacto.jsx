import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import imagenBack4 from "../assets/cultivation.png";
import "../styles/contacto.css";

export const Contacto = () => {
  return (
    <Container fluid className="p-0 image-contacto">
      <div>
        <Image fluid src={imagenBack4} className="img-plant" />
      </div>
      <div className="container-fluid box-container1">
        <h3 className="optimiza">Optimizá tus cultivos</h3>
        <div className="p-contacto">
          <p>
            Growcast permite controlar los cultivos a traves de sensores que{" "}
          </p>
          <p>
            procesan y reportan datos a multiples dispositivos en tiempo real.
          </p>
        </div>
        <Button className="button-contacto">CONECTATE CON NOSOTROS</Button>
      </div>
    </Container>
  );
};

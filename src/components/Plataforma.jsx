import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import imagenBack2 from "../assets/Rectangle-188.png";
import "../styles/plataforma.css";

export const Plataforma = () => {
  return (
    <Container fluid className="d-flex p-0 plataforma-container">
      <Row className="m-0 w-100">
        <Col xs={12} md={6} className="d-flex">
          <div className="d-flex text-plataforma p-plataforma p-4">
            <div className="">
              <p>
                <strong>Resultados consistentes en cada produccion:</strong>
              </p>
              <p>
                Growcast te permite poder reproducir siempre y cada vez las
                condiciones del cultivo con las caracteristicas adecuadas para
                cada etapa, cumpliendo con los estandares de calidad requeridos.
              </p>
            </div>
            <div>
              <p>
                <strong>Aumento de rendimiendo y productividad:</strong>
              </p>
              <p>
                Al mantener estables las condiciones climaticas de un indoor, se
                evitan perdidas en la produccion por contratiempos y su
                consecuente impacto economico.
              </p>
            </div>
            <div>
              <p>
                <strong>Tiempo libre de calidad:</strong>{" "}
              </p>
              <p>
                Growcast muestra las condiciones del cultivo en tiempo real,
                reduciendo las permanentes y repetitivas tareas de control.
                Cuenta, además, con una bitacora, donde el usuario puede
                registrar cada tarea manual que realice.
              </p>
            </div>
            <div>
              <p>
                <strong>Trazabilidad:</strong>
              </p>
              <p>
                Registro automatico de datos en formato digital, almacenados en
                la nube de la plataforma como una fuente de informacion ordenada
                y confiable que conduce a operaciones mas predecibles.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="image-plataforma p-0">
          <div className="">
            <Image
              fluid
              src={imagenBack2}
              className="imagen-plat"
              alt="Imagen de fondo"
            />
          </div>
          <h5 className="text-overlay">
            Plataforma para el monitoreo en tiempo real de tu indoor
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

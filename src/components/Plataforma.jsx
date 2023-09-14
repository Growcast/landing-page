import { Col, Container, Image, Row } from 'react-bootstrap'
import imagenPlataforma from '../assets/Rectangle 291.png'
import '../styles/plataforma.css'

export const Plataforma = () => {
  return (
    <Container
      fluid
      className='d-flex plataforma-container p-0'
      id={'plataforma'}
    >
      <Row className='m-0 w-100 h-100 p-0'>
        <Col xs={12} md={7} className='image-plataforma p-0'>
          <Image
            src={imagenPlataforma}
            alt='Logo'
            className='background-image'
          />

          <h5 className='text-overlay'>
            Plataforma para el monitoreo en tiempo real de tu indoor
          </h5>
        </Col>
        <Col xs={12} md={5} className='d-flex p-4 px-md-4 py-md-0 px-lg-5'>
          <div className='d-flex text-plataforma p-plataforma'>
            <div className='hidden px-lg-4 py-3 py-md-0'>
              <p>
                <strong>Resultados consistentes en cada produccion:</strong>
              </p>
              <p>
                Growcast te permite poder reproducir siempre y cada vez las
                condiciones del cultivo con las caracteristicas adecuadas para
                cada etapa, cumpliendo con los estandares de calidad requeridos.
              </p>
            </div>
            <div className='hidden px-lg-4 py-3 py-md-0'>
              <p>
                <strong>Aumento de rendimiendo y productividad:</strong>
              </p>
              <p>
                Al mantener estables las condiciones climaticas de un indoor, se
                evitan perdidas en la produccion por contratiempos y su
                consecuente impacto economico.
              </p>
            </div>
            <div className='hidden px-lg-4 py-3 py-md-0'>
              <p>
                <strong>Tiempo libre de calidad:</strong>{' '}
              </p>
              <p>
                Growcast muestra las condiciones del cultivo en tiempo real,
                reduciendo las permanentes y repetitivas tareas de control.
                Cuenta, además, con una bitacora, donde el usuario puede
                registrar cada tarea manual que realice.
              </p>
            </div>
            <div className='hidden px-lg-4 py-3 py-md-0'>
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
      </Row>
    </Container>
  )
}

import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'react-bootstrap/Image'
import imagenBack3 from '../assets/image-1.png'
import imagenTri from '../assets/image-7.png'
import imagenLogo from '../assets/Growcast-SVG.svg'
import { Col, Container, Row } from 'react-bootstrap'
import '../styles/tecnologia.css'

export const Tecnologia = () => {
  return (
    <Container fluid className='tecnologia-container p-0'>
      <Row className='m-0 p-0 container-fluid'>
        <Image fluid src={imagenBack3} alt='Imagen de fondo' className='p-0' />
        <div className='container-fluid d-flex p-0 box-container'>
          <Col xs={12} md={6} className='p-0 d-flex justify-content-center'>
            <Image src={imagenLogo} alt='Logo' className='image-tech' />
          </Col>
          <Col xs={12} md={6} className=' tecnologia-div container-fluid'>
            <div className='container-fluid p-tech'>
              <p>
                <strong>Somos la plataforma de tecnologia</strong> que te
                premite trazar las etapas de tu cultivo de canbis en tiempo real
                para lograr altos estandares de calidad, aportando a una mejor
                calidad de vida de las personas.
              </p>
              <p>
                Medimos datos mediante nuesto
                <strong>
                  {' '}
                  Growcas 1.0, un controlador inteligente con sensores
                  integrados que reportan datos a la nube a traves de WIFI.
                </strong>
              </p>
              <p>
                Nuestra plataforma emite alertas en case de que alguna variable
                se encuentre fuera de los parametros establecidos.{' '}
                <strong>
                  Las notificaciones y el reporte de los datos puede
                  visualizarse
                </strong>{' '}
                facilmente, desde cualquier celular o computadora.
              </p>
              <p>
                Asi, logramos controlar y mejorar la performance de cada
                cultivo, aumntar la productividad y estandarizar la calidad.
              </p>
            </div>
            <div className='container-fluid d-flex justify-content-center'>
              <Image src={imagenTri} fluid />
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  )
}

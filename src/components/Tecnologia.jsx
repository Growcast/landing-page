import Image from 'react-bootstrap/Image'
import imagenLogo from '../assets/Growcast-SVG.svg'
import { Col, Container, Row } from 'react-bootstrap'
import '../styles/tecnologia.css'

export const Tecnologia = () => {
  return (
    <Container fluid className='tecnologia-container p-0' id={'tecnologia'}>
      <Row className='m-0 w-100 h-100 p-0'>
        <Col
          xs={12}
          md={6}
          className='p-0 d-flex justify-content-center d-none d-sm-flex'
        >
          <Image src={imagenLogo} alt='Logo' className='image-tech' />
        </Col>
        <Col xs={12} md={6}>
          <div className='p-tech'>
            <p className='hidden'>
              <strong>Somos la plataforma de tecnologia</strong> que te premite
              trazar las etapas de tu cultivo en tiempo real para lograr altos
              estandares de calidad, aportando a una mejor calidad de vida de
              las personas.
            </p>
            <p className='hidden'>
              Medimos datos mediante nuesto
              <strong>
                {' '}
                Growcas 1.0, un controlador inteligente con sensores integrados
                que reportan datos a la nube a traves de WIFI.
              </strong>
            </p>
            <p className='hidden'>
              Nuestra plataforma emite alertas en case de que alguna variable se
              encuentre fuera de los parametros establecidos.{' '}
              <strong>
                Las notificaciones y el reporte de los datos puede visualizarse
              </strong>{' '}
              facilmente, desde cualquier celular o computadora.
            </p>
            <p className='hidden'>
              Asi, logramos controlar y mejorar la performance de cada cultivo,
              aumntar la productividad y estandarizar la calidad.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

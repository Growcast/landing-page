import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import imagenBack4 from '../assets/cultivation.png'
import '../styles/contacto.css'

export const Contacto = () => {
  return (
    <Container fluid className='d-flex contacto-container p-0' id={'contacto'}>
      <div>
        <Image
          fluid
          src={imagenBack4}
          className='background-image imagen-contacto'
        />
      </div>
      <div className='container-fluid box-container1 align-items-center text-center'>
        <h3 className='optimiza'>Optimizá tus cultivos</h3>
        <div className='p-contacto'>
          <p>
            Growcast permite controlar los cultivos a traves de sensores que
            procesan y reportan datos a multiples dispositivos en tiempo real.
          </p>
        </div>
        <Button
          className='button-contacto'
          href='mailto:info@growcast.io'
          target='_blank'
        >
          CONECTATE CON NOSOTROS
        </Button>
      </div>
    </Container>
  )
}

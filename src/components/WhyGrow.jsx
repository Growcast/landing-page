import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import imagenBack1 from '../assets/rectangle-20.png'
import '../styles/whygrow.css'
import { BiCross } from 'react-icons/bi'

export const WhyGrow = () => {
  return (
    <Container fluid className='whygrow-container'>
      <Image
        src={imagenBack1}
        fluid
        alt='Imagen de fondo'
        className='background-image1'
      />
      <div className='overlay-1'>
        <p>
          ¿Porqué utilizar <strong>Growcast 1.0?</strong>
        </p>
        <ul className='icon-list'>
          <li>
            <BiCross className='me-2 icon-color' />
            Temporizadores
          </li>
          <li>
            <BiCross className='me-2 icon-color' />
            Activadores por variables
          </li>
          <li>
            <BiCross className='me-2 icon-color' />
            Proteccion de dispositivos
          </li>
          <li>
            <BiCross className='me-2 icon-color' />
            Reporte de datos en tiempo real
          </li>
          <li>
            <BiCross className='me-2 icon-color' />
            Activaciones y desactivaciones en tiempo real
          </li>
        </ul>
      </div>
    </Container>
  )
}

import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import imagenBack1 from '../assets/rectangle-20.png'
import { BiCross } from 'react-icons/bi'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/whygrow.css'

export const WhyGrow = () => {
  return (
    <Container fluid className='whygrow-container' id='why-grow'>
      <Image
        src={imagenBack1}
        fluid
        alt='Imagen de fondo'
        className='background-image background-image-why'
      />
      <div className='overlay-1'>
        <p className='hidden'>
          ¿Porqué utilizar <strong>Growcast?</strong>
        </p>
        <ul className='icon-list'>
          <li className='d-flex align-items-center hidden'>
            <BiCross className='icon-color' />
            <span className='mx-3'>Temporizadores</span>
          </li>
          <li className='d-flex align-items-center hidden'>
            <BiCross className='icon-color' />
            <span className='mx-3'>Activadores por variables</span>
          </li>
          <li className='d-flex align-items-center hidden'>
            <BiCross className='icon-color' />
            <span className='mx-3'>Proteccion de dispositivos</span>
          </li>
          <li className='d-flex align-items-center hidden'>
            <BiCross className='icon-color' />
            <span className='mx-3'>Reporte de datos en tiempo real</span>
          </li>
          <li className='d-flex align-items-center hidden'>
            <BiCross className='icon-color' />
            <span className='mx-3'>
              Activaciones y desactivaciones en tiempo real
            </span>
          </li>
        </ul>
      </div>
    </Container>
  )
}

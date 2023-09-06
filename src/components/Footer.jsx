import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Container } from 'react-bootstrap'
import '../styles/footer.css'
import Facebook from '../assets/Image8.png'
import Instagram from '../assets/Image9.png'
import Twitter from '../assets/Image11.png'
import In from '../assets/Image10.png'
import imagenLogo from '../assets/Growcast-SVG.svg'
import { Image } from 'react-bootstrap'

export const Footer = () => {
  return (
    <Container fluid className='p-0 footer-component'>
      <Nav
        className='justify-content-center w-100 nav-footer'
        activeKey='/home'
      >
        <Nav.Item>
          <Nav.Link href='/home' className='text-center'>
            <Image src={imagenLogo} alt='Logo' className='img-footer' />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1'>NOSOTROS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2'>PLATAFORMA</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey=''>TECNOLOGIA</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey=''>CONTACTO</Nav.Link>
        </Nav.Item>
        <div className='footer-social'>
          <a href='*'>
            <img src={Facebook} alt='' />
          </a>
          <a href='*'>
            <img src={Instagram} alt='' />
          </a>
          <a href='*'>
            <img src={Twitter} alt='' />
          </a>
          <a href='*'>
            <img src={In} alt='' />
          </a>
        </div>
      </Nav>
    </Container>
  )
}

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/navbar.css'
import imagenLogo from '../assets/Growcast-SVG.svg'

export function NavBar () {
  return (
    <Navbar
      expand='lg'
      className='bg-body-tertiary navbar-component w-100 p-lg-0'
    >
      <Container fluid className='pe-lg-0 ms-lg-5'>
        <Navbar.Brand className='collapse-logo' href='#home'>
          <Image src={imagenLogo} alt='Logo' className='img-navbar' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav ' />
        <Navbar.Collapse id='basic-navbar-nav' className='nav-full'>
          <Nav className='nav-container'>
            <Nav.Link
              className='d-flex align-items-center a-nav'
              href='#nosotros'
            >
              NOSOTROS
            </Nav.Link>
            <Nav.Link
              className='d-flex align-items-center a-nav'
              href='#plataforma'
            >
              PLATAFORMA
            </Nav.Link>
            <Nav.Link
              className='d-flex align-items-center a-nav'
              href='#tecnologia'
            >
              TECNOLOGIA
            </Nav.Link>
            <Nav.Link
              className='d-flex align-items-center a-nav boton-contacto'
              href='#contacto'
            >
              CONTACTO
            </Nav.Link>
            <Button className='button-nav1' variant='outline-secondary'>
              Iniciar Sesion
            </Button>{' '}
            <Button className='button-nav2' variant='outline-secondary'>
              Registrarse
            </Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

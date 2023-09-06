import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import imagenBack from '../assets/rectangle-7.png'
import '../styles/home.css'
import Facebook from '../assets/Image8.png'
import Instagram from '../assets/Image9.png'
import Twitter from '../assets/Image11.png'
import In from '../assets/Image10.png'

export const Home = () => {
  return (
    <Container fluid className='home-container'>
      <div className=''>
        <Image
          src={imagenBack}
          fluid
          alt='Imagen de fondo'
          className='background-image'
        />

        <div className='overlay '>
          <h3>La evolución tecnológica </h3>
          <h3 className='borde'> de la naturaleza.</h3>
        </div>

        <div className='home-social'>
          <a href='*'>
            <img className='home-social1' src={Facebook} alt='' />
          </a>
          <a href='*'>
            <img className='home-social1' src={Instagram} alt='' />
          </a>
          <a href='*'>
            <img className='home-social1' src={Twitter} alt='' />
          </a>
          <a href='*'>
            <img className='home-social1' src={In} alt='' />
          </a>
        </div>
      </div>
    </Container>
  )
}

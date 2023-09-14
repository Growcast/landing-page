import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import imagenBack from '../assets/rectangle-7.png'
import {
  BsFacebook as Facebook,
  BsTwitter as Twitter,
  BsInstagram as Instagram,
  BsLinkedin as In
} from 'react-icons/bs'
import '../styles/home.css'

export const Home = () => {
  React.useEffect(() => {
    const components = document.querySelectorAll('#home-text')

    components.forEach(component => {
      component.classList.add('visible')
      component.classList.remove('hidden')
    })
  }, [])
  return (
    <Container fluid className='home-container'>
      <div className='home-container'>
        <Image
          src={imagenBack}
          fluid
          alt='Imagen de fondo'
          className='background-image background-image-home'
        />

        <div className='overlay hidden' id='home-text'>
          <h3>La evolución tecnológica </h3>
          <h3 className='borde'> de la naturaleza.</h3>
        </div>

        <div className='home-social'>
          <a
            href='https://www.facebook.com/profile.php?id=100091000981206&mibextid=ZbWKwL'
            rel='noopener noreferrer'
          >
            <Facebook />
          </a>

          <a
            href='https://www.instagram.com/growcast.io/?igshid=MzRlODBiNWFlZA%3D%3D'
            rel='noopener noreferrer'
          >
            <Instagram />
          </a>
          <a
            href='https://twitter.com/Growcast_io?t=nHRK_GAXheZjdGPK7muHMg&s=08'
            rel='noopener noreferrer'
          >
            <Twitter />
          </a>
          <a
            href='https://www.linkedin.com/company/growcast-io/'
            rel='noopener noreferrer'
          >
            <In />
          </a>
        </div>
      </div>
    </Container>
  )
}

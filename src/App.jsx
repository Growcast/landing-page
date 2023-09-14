import React from 'react'
import { Container } from 'react-bootstrap'
import { Contacto } from './components/Contacto.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './components/Home.jsx'
import { NavBar } from './components/NavBar.jsx'
import { Plataforma } from './components/Plataforma.jsx'
import { Tecnologia } from './components/Tecnologia.jsx'
import { Video } from './components/Video.jsx'
import { WhyGrow } from './components/WhyGrow.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App () {
  React.useEffect(() => {
    const handleScroll = () => {
      const components = document.querySelectorAll('.hidden')

      const windowHeight = window.innerHeight
      const windowBottom = windowHeight + window.scrollY * 0.7
      components.forEach(component => {
        const componentTop = component.getBoundingClientRect().top

        if (windowBottom > componentTop + windowHeight) {
          component.classList.add('visible')
          component.classList.remove('hidden')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Container fluid className='wrap-container'>
      <NavBar />

      <Home />

      <Plataforma />

      <WhyGrow />

      <Tecnologia />

      <Video />

      <Contacto />

      {/* <div id={'nosotros'}>
        <Formulario />
      </div> */}

      <Footer />
    </Container>
  )
}

export default App

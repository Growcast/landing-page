import React from 'react'
import { Container } from 'react-bootstrap'
import hub from '../assets/video/Sensor.mp4'
import main from '../assets/video/Main.mp4'
import splitter from '../assets/video/Splitter.mp4'
import '../styles/video.css'

export const Video = () => {
  React.useEffect(() => {
    const components = document.querySelectorAll('.videos')

    let handleTimeUpdate

    components.forEach(component => {
      handleTimeUpdate = () => {
        if (component.currentTime > component.duration - 1) {
          component.style.opacity = 0
        }

        if (component.currentTime < 1) {
          if (component.style.opacity === '0') {
            component.style.opacity = 1
          }
        }
      }

      component.addEventListener('timeupdate', handleTimeUpdate)
    })

    return () => {
      components.forEach(component => {
        component.removeEventListener('timeupdate', handleTimeUpdate)
      })
    }
  }, [])

  return (
    <Container fluid className='d-flex video-container'>
      <div className='text-video w-100'>
        <h1>Nuestros dispositivos...</h1>
      </div>

      <div className='d-flex m-auto justify-content-center h-100'>
        <div className='video-box flex-column justify-content-center align-items-center'>
          <p className='d-block d-sm-none mt-3'>
            <strong>Main domestico</strong>
          </p>
          <video id='myVideo3' className='videos' muted loop autoPlay>
            <source src={main} type='video/mp4' />
          </video>
        </div>
        <div className='d-none d-sm-flex flex-column justify-content-center p-4 description'>
          <p>
            <strong>Main domestico</strong>
          </p>
          <p>
            Unidad principal de Growcast, la misma interactúa bajo una interfaz
            rs485, conector RJ45 y protocolo propio con los distintos sensores y
            módulos disponibles.
          </p>
          <p>
            Esta placa cuenta con 3 salidas de control a 110/220v con un máximo
            de consumo de 10A totales.
          </p>
          <p>
            Dicha placa se conecta a internet a internet vía WIFI o Ethernet
            para reportar los datos en tiempo real y recibir desde nuestra
            plataforma las distintas configuraciones para cada módulo de control
            disponible
          </p>
        </div>
      </div>
      <div className='d-flex m-auto justify-content-center h-100'>
        <div className='video-box flex-column justify-content-center align-items-center'>
          <p className='d-block d-sm-none mt-3'>
            <strong>Sensor THC (Temperatura, Humedad, C02)</strong>
          </p>
          <video id='myVideo1' className='videos' muted loop autoPlay>
            <source src={hub} type='video/mp4' />
          </video>
        </div>
        <div className='d-none d-sm-flex flex-column justify-content-center p-4 description'>
          <p>
            <strong>Sensor THC (Temperatura, Humedad, C02)</strong>
          </p>
          <p>
            El sensor THC es un sensor que nos permite medir temperatura,
            humedad y co2.
          </p>
          <p>Este sensor esta basado en el Sensirion SCD41.</p>
        </div>
      </div>
      <div className='d-flex m-auto justify-content-center h-100'>
        <div className='video-box flex-column justify-content-center align-items-center'>
          <p className='d-block d-sm-none mt-3'>
            <strong>Splitter</strong>
          </p>
          <video id='myVideo5' className='videos' muted loop autoPlay>
            <source src={splitter} type='video/mp4' />
          </video>
        </div>
        <div className='d-none d-sm-flex flex-column justify-content-center p-4 description'>
          <p>
            <strong>Splitter</strong>
          </p>
          <p>
            Es un módulo de expansión de puertosG pasivo el cual permite agregar
            hasta 3 sensores o módulos de expansión de salidas al controlador.
          </p>
          <p>Se pueden conectar en cascada hasta 3 splitter.</p>
        </div>
      </div>
    </Container>
  )
}

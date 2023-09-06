import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/video.css'
import hub from '../assets/video/Hub.mp4'
import humedad from '../assets/video/Humedad-de-suelo.mp4'
import main from '../assets/video/Main.mp4'
import salidas from '../assets/video/Modulo-de-salidas.mp4'
import splitter from '../assets/video/Splitter.mp4'
import thc from '../assets/video/THC.mp4'

export const Video = () => {
  return (
    <Container fluid className='d-flex video-container'>
      <div className='text-video w-100'>
        <h1>Nuestros controladores...</h1>
      </div>

      <Row className='d-flex h-100'>
        <Col xs={12} md={6} className='video-box'>
          <video className='videos' width='300px' muted autoPlay loop>
            <source src={hub} type='video/mp4' />
          </video>
          <video className='videos' width='300px' muted autoPlay loop>
            <source src={humedad} type='video/mp4' />
          </video>
          <video className='videos' width='300px' muted autoPlay loop>
            <source src={main} type='video/mp4' />
          </video>
        </Col>
        <Col xs={12} md={6} className='video-box'>
          <video className='videos' width='300px' muted autoPlay loop>
            <source src={salidas} type='video/mp4' />
          </video>
          <video className='videos' width='300px' muted autoPlay loop>
            <source src={splitter} type='video/mp4' />
          </video>
          <video className='videos' width='300px' muted autoPlay loop>
            <source src={thc} type='video/mp4' />
          </video>
        </Col>
      </Row>
    </Container>
  )
}

import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Image,
  Row
} from 'react-bootstrap'
import { MdEmail, MdPhone, MdPlace } from 'react-icons/md'
import imagenBack5 from '../assets/162661714_l_normal_none.png'
import '../styles/formulario.css'

export const Formulario = () => {
  const [mostrarForm, setMostrarForm] = React.useState(true)

  const nameRef = React.useRef()
  const emailRef = React.useRef()
  const telRef = React.useRef()
  const empresaRef = React.useRef()
  const msgRef = React.useRef()

  const handleSubmit = e => {
    e.preventDefault()
    const nameValue = nameRef.current.value
    const emailValue = emailRef.current.value
    const telValue = telRef.current.value
    const empresaValue = empresaRef.current.value
    const msgValue = msgRef.current.value
    console.log({ nameValue, emailValue, telValue, empresaValue, msgValue })
    setMostrarForm(false)
  }

  return (
    <Container fluid className='p-0 container-form'>
      <Image
        src={imagenBack5}
        fluid
        className='img-form'
        alt='Imagen de fondo'
      />
      <Row className='d-flex m-0 box-container2'>
        {mostrarForm ? (
          <Col xs={6} className='p-0 '>
            <Form onSubmit={handleSubmit} className='form-container p-3'>
              <h4>Envianos tu consulta!</h4>
              <Row className=''>
                <Col>
                  <FloatingLabel label='Nombre'>
                    <Form.Control
                      className='background-form'
                      type='text'
                      placeholder='Nombre'
                      id='floatingName'
                      ref={nameRef}
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel label='Email'>
                    <Form.Control
                      className='background-form'
                      type='email'
                      placeholder='Email'
                      id='floatingEmail'
                      ref={emailRef}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className=''>
                <Col>
                  <FloatingLabel label='Telefono'>
                    <Form.Control
                      className='background-form'
                      type='number'
                      placeholder='Telefono'
                      id='floatingTel'
                      ref={telRef}
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel label='Empresa'>
                    <Form.Control
                      className='background-form'
                      type='text'
                      placeholder='Empresa'
                      id='floatingEmpresa'
                      ref={empresaRef}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className=''>
                <Col>
                  <FloatingLabel label='Mensaje'>
                    <Form.Control
                      className='background-form'
                      type='text'
                      placeholder='Mensaje'
                      id='floatingInput'
                      ref={msgRef}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Button className='button-form' variant='' type='submit'>
                ENVIAR
              </Button>
            </Form>
          </Col>
        ) : (
          <Col xs={6} className='respuesta-form '>
            <h3>Gracias por conectarte con nosotros!!</h3>
          </Col>
        )}
        <Col xs={6} className='d-flex p-0'>
          <Col className='contacto'>
            <h5>Estemos en contacto</h5>
            <div className='d-flex align-items-center mt-4'>
              <MdPlace />
              <p className='mb-0 ms-3'>Piso 1, Oficina 2. Rosario</p>
            </div>
            <div className='d-flex align-items-center mt-4'>
              <MdEmail />
              <p className='mb-0 ms-3'>info@growcas.com</p>
            </div>
            <div className='d-flex align-items-center mt-4'>
              <MdPhone />
              <p className='mb-0 ms-3'>+59 341 15555555</p>
            </div>
          </Col>
          <Col className='preguntas'>
            <p>Preguntas frecuentes</p>
            <p>Contacto</p>
            <p>info@growcast.com</p>
            <p>Rosario, Argentina</p>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

import { Nav, Container } from 'react-bootstrap'
import {
  BsFacebook as Facebook,
  BsTwitter as Twitter,
  BsInstagram as Instagram,
  BsLinkedin as In
} from 'react-icons/bs'
import '../styles/footer.css'
import { FaCopyright as CopyrightIcon } from 'react-icons/fa6'
export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Container fluid className='footer-component'>
      <Nav
        className='justify-content-center w-100 nav-footer my-3'
        activeKey='/home'
      >
        <Nav.Item className='copyright d-none d-sm-flex'>
          Growcast
          <CopyrightIcon />
          {currentYear}
        </Nav.Item>
        <span className='mx-4  d-none d-sm-flex text-white'>|</span>
        <div className='footer-social'>
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
      </Nav>
    </Container>
  )
}

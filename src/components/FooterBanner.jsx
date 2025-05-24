import React from 'react'
import { Container, Image,Row, Col } from 'react-bootstrap'
import SPLASH from '../assets/images/splash.png'
import '../assets/styles/footerstyles.css'

const FooterBanner = () => {
  return (
   <Container fluid className='footerBannerContainer'>
    <Row className='p-2'>
        <Col xs={12} md={6} className='footerImageCol'>
        <div className='footerImageContainer'>
        <Image fluid
            src={SPLASH}
            className="d-inline-block align-top me-1 footerLogo"
            alt="Logo"
          />
        </div>
        </Col>
        <Col xs={12} md={6} className="footerTextContainer">
        <p className='m-0 p-0'>Mail: connect@splashchemicals.in</p>
        <p className='m-0 p-0'>Phone: +91 9789130541</p>
        </Col>
    </Row>
   </Container>
  )
}

export default FooterBanner
import React, { useEffect } from 'react'
import { Element } from 'react-scroll';
import { Container, Row, Col, Image } from 'react-bootstrap'
import NavbarComponent from '../components/Navbar'
import SplashBanner from '../components/SplashBanner'
import AboutUsBanner from '../components/AboutUsBanner'
import ProductsBanner from '../components/ProductsBanner'
import BenifitsBanner from '../components/BenifitsBanner'
import ContactUsBanner from '../components/ContactUsBanner'
import FooterBanner from '../components/FooterBanner'
import CR from '../assets/images/cr.png'

const LandingPage = () => {

  useEffect(() => {
    // Scrolls to 50px from the top of the page on component mount
    window.scrollTo({
      top: 5, // Scroll 50 pixels from the top of the document
      behavior: 'smooth' // Optional: define the scrolling behavior (smooth scroll)
    });
  }, []); 
  return (
    <>
    <Element name="/"><SplashBanner /></Element>
    <Element name="aboutus"><AboutUsBanner /></Element>
    <Element name="products"><ProductsBanner /></Element>
    <Element name="benefits"><BenifitsBanner /></Element>
    <Element name="contactus"><ContactUsBanner /></Element>
    <FooterBanner/>
    <Container fluid className='pb-4'>
    <Row>
        <Col xs={12} className='hrline'>
        </Col>
    </Row>
    <Row>
    <Col xs={12} md={6}>
        <div className='cpContainer d-flex align-items-center'>
          <Image src={CR}/>
          <p className='m-0 ps-1'>2024, Splash Chemicals, Inc All rights reserved</p>
        </div>
        </Col>
        <Col xs={12} md={6}>
        <div className='ptContainer'>
          <p>Privacy Policy</p>
          <p>Terms And Conditions</p>
        </div>
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default LandingPage
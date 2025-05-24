import React, { useState } from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../assets/styles/navstyles.css'
import SPLASH from '../assets/images/splash.png'

const NavbarComponent = () => {

  const [expanded, setExpanded] = useState(false);



  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="md" variant="dark" fixed="top" expanded={expanded} style={{ backgroundColor: '#003366' }}>
      <Container fluid>
        <Navbar.Brand href="#" className='d-flex justify-content-center align-items-center'>
          <img
            src={SPLASH}
            className="d-inline-block align-top me-1 navbarLogo"
            alt="Logo"
          />
          <p className='m-0 p-0 chemicalText'>Chemicals</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
          <Link className="nav-link" to="/" spy={true} smooth={false} offset={-70} duration={900} onClick={() => handleClose()}>Home</Link>
          <Link className="nav-link" to="aboutus" spy={true} smooth={false} offset={-70} duration={900} onClick={() => handleClose()}>About Us</Link>
          <Link className="nav-link" to="products" spy={true} smooth={false} offset={-70} duration={900} onClick={() => handleClose()}>Products</Link>
          <Link className="nav-link" to="benefits" spy={true} smooth={false} offset={-70} duration={900} onClick={() => handleClose()}>Benefits</Link>
          <Link className="nav-link" to="contactus" spy={true} smooth={false} offset={-70} duration={900} onClick={() => handleClose()}>Contact us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
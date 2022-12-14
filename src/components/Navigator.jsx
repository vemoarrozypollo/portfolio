import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../picturs/logo_transparent.png';
const Navigator = () => {
  return (
    <div>
      <Navbar className='cards' collapseOnSelect expand="xl" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/" as={Link}><Image className='logo' src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto , navi">
              <Nav.Link to="/abilities" as={Link}><a>Abilities</a></Nav.Link>
              <Nav.Link to="/portfolio" as={Link}><a> Portfolio</a></Nav.Link>
              <Nav.Link to="/contactme" as={Link}><a>Contact Me</a></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigator;
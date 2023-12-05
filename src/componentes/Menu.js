import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


export default function Menu() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to='/'>Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/Nosotros'>Home</Nav.Link>
            <Nav.Link as={Link} to='/Contacto'>Contacto</Nav.Link>
            <Nav.Link as={Link} to='/Formulario'>Formulario</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

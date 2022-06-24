import React from 'react';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant='dark' fixed='top'>
      <Container>
        <NavbarBrand>Drag And Drop Boys</NavbarBrand>
      </Container>
    </Navbar>
    </>
  )
}

export default Header;
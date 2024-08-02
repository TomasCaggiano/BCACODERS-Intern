import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './NavBar.css'
function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='navbar'>
        <Container>
          <Link className='nav1' to="/">Home</Link>
          <Nav className="me-auto">
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

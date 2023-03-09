import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Cart } from './Cart';
import { Link } from 'react-router-dom';


export function NavbarEx() {
  return (
    <Navbar  bg="dark" variant="dark">
      <Container>
        
        <Link to="/"><Navbar.Brand >Navbar with text</Navbar.Brand></Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Cart />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"


export const Header = () => {
  return (
    <>
    <Navbar style={{margin:'8px'}} bg="white" variant="light">
      <Container>
        <Navbar.Brand href="#home">Consumer Details</Navbar.Brand>
        <Nav className="verified">
          <Nav.Link href="#home" className="nav-link one">Verified</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
  );
};

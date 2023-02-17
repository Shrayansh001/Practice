import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export const Header = () => {
  return (
    <>
      <Navbar style={{ margin: "2px" }} bg="white" variant="light">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:'16px'}}><PermIdentityIcon className="ConsumerDetails"/>    Consumer Details   </Navbar.Brand>
          <Nav className="verified">
            <Nav.Link href="#home" className="nav-link one" style={{fontSize:'15px'}}>
             <VerifiedOutlinedIcon/> Verified <KeyboardArrowDownOutlinedIcon/>
            </Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

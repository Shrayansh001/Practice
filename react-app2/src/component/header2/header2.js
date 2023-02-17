import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { DataTable } from "../PhoneDataTable/PhoneDataTable";
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import DataTable2 from "../AddressDataTable/AddressDataTable";
import "./header2.css"

export const Header2 = () => {
  const [show, setshow] = useState(1);

  return (
    <>
      <Navbar style={{ margin: "2px" }} bg="white" variant="light">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:'16px'}}> <ContactPhoneOutlinedIcon className="ContactIcon"/>   Contact Information  </Navbar.Brand>
          <Nav className="me-auto" style={{fontSize:'12px'}}>
            <Nav.Link
              href="#Phone"
              onClick={(event) => {
                setshow(1);
              }}
            >
              Phone
            </Nav.Link>

            <Nav.Link
              href="#features"
              onClick={(event) => {
                setshow(2);
              }}
            >
              Address
            </Nav.Link>

            <Nav.Link href="#pricing">Email</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {show === 1 && <DataTable />}
      {show === 2 && <DataTable2 />}
    </>
  );
};

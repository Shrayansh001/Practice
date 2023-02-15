import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import CurrentAcDataTable from "../CurrentAcDataTable/currentAcDataTable";

export const Header3 = () => {
  const [show, setshow] = useState(1);
  return (
    <>
      <Navbar style={{ margin: "8px" }} bg="white" variant="light">
        <Container>
          <Navbar.Brand href="#account">Accounts</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#current_account_set"
              onClick={(event) => {
                setshow(1);
              }}
            >
              Current Account Set
            </Nav.Link>

            <Nav.Link
              href="#all_accounts"
              onClick={(event) => {
                setshow(2);
              }}
            >
              All Accounts
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {show === 1 && <CurrentAcDataTable/>}
    </>
  );
};

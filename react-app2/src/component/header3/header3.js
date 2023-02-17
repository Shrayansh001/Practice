import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import CurrentAcDataTable from "../CurrentAcDataTable/currentAcDataTable";
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import "./header3.css"

export const Header3 = () => {
  const [show, setshow] = useState(1);
  return (
    <>
      <Navbar style={{ margin: "2px" }} bg="white" variant="light">
        <Container>
          <Navbar.Brand href="#account" style={{fontSize:'16px'}}><AccountBalanceOutlinedIcon className="Account_Icon"/>   Accounts  </Navbar.Brand>
          <Nav className="me-auto" style={{fontSize:'12px'}}>
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

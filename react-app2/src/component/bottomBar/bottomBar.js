import React from "react";
import Card from "react-bootstrap/Card";
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import "./bottomBar.css"

export const BottomBar = () => {
  return (
    <Card className="card">
      {/* <Navbar
        style={{ margin: "1px", boxShadow: "8px" }}
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home">Custom</Navbar.Brand>
          <Nav className="me-auto"></Nav>

        </Container>
      </Navbar> */}
      <div>
        <div className="custom-header">
          <div className="custom-title-box">
          <MemoryOutlinedIcon className="Custom-Icon"/>
            <p className="Custom-Text">   Custom</p>
          </div>
          <MoreHorizOutlinedIcon className="Three_Dot-Icon"/>
        </div>
        <hr className="line"/>
        <div className="custom-container">
          <div className="custom-column">
            <p>Custom field1 <br/> 123456</p>
            
          </div>
          <div className="custom-column">
            <p>Custom field2 <br/> **** ** 1234</p>
          </div>
          <div className="custom-column">
            <p>Custom field <br/> 123456</p>
            
          </div>
        </div>
      </div>
    </Card>
  );
};

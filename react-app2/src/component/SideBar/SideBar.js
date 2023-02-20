import React from "react";
import {
  Card,
  Container,
  Dropdown,
  SplitButton,
  Button,
} from "react-bootstrap";
import "./SideBar.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const SideBar = () => {
  return (
    <>
      <Card
        style={{
          width: "20rem",
          backgroundColor: " ",
          marginTop: "-10px",
          
        }}
      >
        <Card.Img
          variant="top"
          src="https://wallpaperaccess.com/full/537586.jpg"
          style={{ height: "8rem" }}
        />

        <div className="Card-Image">
          <Card.Body>
            <Card.Title>Quick Action</Card.Title>
          </Card.Body>

          {["Input"].map((variant) => (
            <SplitButton
              key={variant}
              id={`dropdown-split-variants-${variant}`}
              variant={variant.toLowerCase()}
              title={variant}
              className="Dropdown"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            </SplitButton>
          ))}
        </div>

        <Container className="btn-container">
          <Button className="Button">Make a Payment</Button>
        </Container>
          
        <Card className="topSection">
          
          <div className="searchbar-icon">
            <p>
              <DehazeIcon />
              Notes
              <span className="icon-class">
                <FilterListIcon /> <AddIcon /> <KeyboardArrowUpIcon />
              </span>
            </p>
          </div>

          <input
            placeholder="Search using date or text"
            type="search"
            className="search-button"
          />

          <div className="midSection">
            <Card className="midSectionCard">
              <h1>Search Data</h1>
              <h2>02/10/2022 at 3:10 PM</h2>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card>

            <Card className="midSectionCard">
              <h1>Search Data</h1>
              <h2>02/10/2022 at 3:10 PM</h2>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card>

            <Card className="midSectionCard">
              <h1>Search Data</h1>
              <h2>02/10/2022 at 3:10 PM</h2>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card>

            <Card className="Alert">
              <Card.Title>
               <NotificationsNoneOutlinedIcon/> Alerts &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<AddIcon/> <KeyboardArrowUpIcon/> 
              </Card.Title>
            </Card>
            <Card>
              <Card.Body className="option">
                Payment Declined
              </Card.Body>
            </Card>
          </div>
        </Card>
     
      </Card>
    </>
  );
};

export default SideBar;

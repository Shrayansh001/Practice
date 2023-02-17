import * as React from "react";
import Card from "react-bootstrap/Card";

import "./paymentModal.css";

import { Header } from "../header/header";
import { Header2 } from "../header2/header2";
import { Header3 } from "../header3/header3";

import { BottomBar } from "../bottomBar/bottomBar";
import SideBar from "../SideBar/SideBar";

export const PaymentModal = () => {
  return (
    
    <Card style={{ width: "48rem" }} className="paymentContainer">
      <div className="main">
        <div className="column1">
          <Header />
          <Header2 />
          <Header3 />
          <BottomBar />
        </div>
        <div className="column2">
          <SideBar />
        </div>
      </div>
    </Card>
  );
};

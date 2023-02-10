import React from "react";
import ExpenseList from "../../components/expense-list";
import Topfold from "../../components/topfold";
import "./home.css"

const home = () => {
  return (
    <div className="home">
      <Topfold/>
      <ExpenseList/>
    </div>
  );
};

export default home;

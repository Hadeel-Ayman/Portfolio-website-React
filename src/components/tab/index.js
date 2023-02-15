import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Tab = () => {
  return (
    <div className="tab">
      <div className="tabs tab1">
        <Link to={"project1"}>Tab1</Link>
      </div>
      <div className="tabs">
        <Link to={"project2"}>Tab2</Link>
      </div>
      <div className="tab3">
        <Link to={"project3"}>Tab3</Link>
      </div>
    </div>
  );
};

export default Tab;

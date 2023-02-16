import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Tab = () => {
  return (
    <div className="tab">
      <Link to={"project1"} className="tabs tab1">
        <div>Tab1</div>
      </Link>
      <Link to={"project2"} className="tabs">
        <div>Tab2</div>
      </Link>
      <Link to={"project3"} className="tab3">
        <div>Tab3</div>
      </Link>
    </div>
  );
};

export default Tab;

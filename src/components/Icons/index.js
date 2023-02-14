import React from "react";
import "./style.css";
const Icon = ({ icon, href }) => {
  return (
    <div className="icon">
      <a href={href}>
        <img src={icon} alt="" />
      </a>
    </div>
  );
};

export default Icon;

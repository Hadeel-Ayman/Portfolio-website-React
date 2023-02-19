import React from "react";
import "./style.css";

const Buttons = ({ title, onClick }) => {
  return <button className="connect" type="submit" onClick={onClick}>{title}</button>
};

export default Buttons;

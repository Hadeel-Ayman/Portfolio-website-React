import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";

const Buttons = ({ title }) => {
  return (
    <Button variant="outline-light" className="connect">
      {title}
    </Button>
  );
};

export default Buttons;

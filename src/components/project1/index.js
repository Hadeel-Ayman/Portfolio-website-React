import React from "react";
import Cards from "../card";
import "./style.css";
import img1 from "../../assets/images/project-img1.png";
import { Col, Container, Row } from "react-bootstrap";

const Project1 = () => {
  return (
    <div className="Project1">
      <Container>
        <Col>
          <Row>
            <Cards img={img1} />
            <Cards img={img1} />
            <Cards img={img1} />
          </Row>
          <Row>
            <Cards img={img1} />
            <Cards img={img1} />
            <Cards img={img1} />
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Project1;

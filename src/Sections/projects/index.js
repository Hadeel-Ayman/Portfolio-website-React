import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Tab from "../../components/tab";
import Title from "../../components/Title";
import "./style.css";

const Projects = () => {
  return (
    <section className="ProjectsSection">
      <Container>
        <Row>
          <Col>
            <Title title={"Projects"} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dui lacus, suscipit et viverra lobortis, venenatis nec magna.
              Morbi adui lacus, suscipit et viverra lobortis, venenatis nec
              magna. Morbi a
            </p>
            <Tab />
          </Col>
        </Row>
      </Container>
      <Outlet/>
    </section>
  );
};

export default Projects;

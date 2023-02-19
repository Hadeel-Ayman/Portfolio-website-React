import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Tab, Title } from '../../components' 
import "./style.css";

const Projects = () => {
  return (
    <section className="ProjectsSection" id="Projects">
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
      <Outlet />
    </section>
  );
};

export default Projects;

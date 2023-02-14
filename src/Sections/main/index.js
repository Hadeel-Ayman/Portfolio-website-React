import React from "react";
import "./style.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import man from "../../assets/images/header-img.svg";
import { Col, Container, Row } from "react-bootstrap";

const Main = () => {
  return (
    <section className="main" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <span className="tagline">welcome to my profile</span>
            <h1>
              {"Hi I’m Hadeel "}
              <span className="wrap">Frontend developer</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae urna elementum, commodo est nec, fringilla lacus. Cras
              euismod cursus
            </p>
            <button>
              Let’s connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={6} className="Contanierimg">
            <img src={man} alt="" className="man" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Main;

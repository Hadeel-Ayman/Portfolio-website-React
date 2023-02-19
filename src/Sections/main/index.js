import React, { useEffect, useState } from "react";
import "./style.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import girl from "../../assets/images/girls.png";
import { Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";

const Main = () => {
  const [visiable, setVisiable] = useState(false);
  useEffect(() => {}, []);

  const [state] = useState({
    title: "Hi! ",
    titleTwo: "I’m ",
    titleThree: "Hadeel Alshaikh Ali",
  });
  return (
    <section className="main" id="main">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <h1>
              <span className="title1">{state.title}</span>
              <span className="titleTwo">{state.titleTwo}</span>
              <span className="titleThree">{state.titleThree}</span>
            </h1>
            <div className="text">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "I’m a Frontend developer",
                    "I’m a React Native developer",
                    "I’m a Backend developer",
                  ],
                }}
              />
            </div>
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
            <img src={girl} alt="" className="girl" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Main;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Input from "../../components/input";
import "./style.css";

const Touch = () => {
  return (
    <div className="TouchSection" id="">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src="" alt="" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form>
              <Row>
                <Col sm={6} className="input1">
                  <Input placeholder={"First Name"} />
                </Col>
                <Col sm={6} className="input1">
                  <Input placeholder={"Last Name"} />
                </Col>
                <Col sm={6} className="input1">
                  <Input placeholder={"Email Address"} />
                </Col>
                <Col sm={6} className="input1">
                  <Input placeholder={"Phone No."} />
                </Col>
                <Col>
                  <textarea row={6} placeholder='Message'></textarea>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      {/* <Input placeholder={'First Name'}/> */}
    </div>
  );
};

export default Touch;

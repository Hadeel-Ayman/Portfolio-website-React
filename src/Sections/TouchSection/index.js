import React, { useState } from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import { Input, Buttons } from "../../components";
import contact from "../../assets/images/contacts.png";

const Touch = () => {
  const [name, setName] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="TouchSection" id="Connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contact} alt="" className="contactImg" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form>
              <Row>
                <Col sm={6} className="input1">
                  <Input
                    placeholder={"First Name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
                <Col sm={6} className="input1">
                  <Input
                    placeholder={"Last Name"}
                    value={Lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </Col>
                <Col sm={6} className="input1">
                  <Input
                    placeholder={"Email Address"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
                <Col sm={6} className="input1">
                  <Input
                    placeholder={"Phone No."}
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Col>
                <Col sm={12}>
                  <textarea
                    placeholder="Message"
                    className="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </Col>
              </Row>
              <Col>
                <Buttons title="Send" onClick={handleSubmit} />
              </Col>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Touch;

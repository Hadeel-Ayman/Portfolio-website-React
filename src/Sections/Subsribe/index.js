import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "../../components";

const Subscribe = () => {
  return (
    <section className="SubscribeSection" id="Subscribe">
      <Container>
        <Col lg={12}>
          <div className="newsletter">
            <Row>
              <Col lg={12} md={6} xl={5}>
                <h2>
                  Subscribe to our <br /> Newsletter{" "}
                </h2>
              </Col>
              <Col md={6} xl={7}>
                <form>
                  <input
                    type={"email"}
                    className="email"
                    placeholder="Email Adress"
                  />
                  <button type="submit">Submit</button>
                </form>
              </Col>
            </Row>
          </div>
        </Col>
      </Container>
      <Footer />
    </section>
  );
};

export default Subscribe;

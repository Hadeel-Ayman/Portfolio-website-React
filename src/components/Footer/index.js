import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import Icon from "../Icons";
import icon1 from "../../assets/images/nav-icon1.svg";
import icon2 from "../../assets/images/nav-icon2.svg";
import icon3 from "../../assets/images/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <Container>
        <Row className="align-item-center foot">
          <Col sm={6}>
            <h2>Portfolio</h2>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="Flexx">
              <Icon
                href={"www.linkedin.com/in/hadeel-ayman-45514724b"}
                icon={icon1}
              />
              <Icon
                href={"https://www.facebook.com/profile.php?id=100011182801462"}
                icon={icon2}
              />
              <Icon
                href={"https://www.instagram.com/hadeelayman2001/"}
                icon={icon3}
              />
            </div>
          </Col>

          {/* <div className="Flexx"> */}
          {/* <div className="Flexx">
                <Icon
                  href={"www.linkedin.com/in/hadeel-ayman-45514724b"}
                  icon={icon1}
                />
                <Icon
                  href={
                    "https://www.facebook.com/profile.php?id=100011182801462"
                  }
                  icon={icon2}
                />
                <Icon
                  href={"https://www.instagram.com/hadeelayman2001/"}
                  icon={icon3}
                />
              </div> */}
          {/* </div>  */}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

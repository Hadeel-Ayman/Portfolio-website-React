import React from "react";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import back from "../../assets/images/color-sharp2.png";
import Progress from "../../components/Progress";
import { Col, Container, Row } from "react-bootstrap";

const Skills = () => {
  const carousel = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skillsSection">
      {/* <Carousel responsive={carousel} infinite={true} className='slider'>
        <Progress title={'fff'} number='50'/>
      </Carousel> */}

      <Container>
        <Row>
          <Col>
            <div className="skillsDiv">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                dui lacus, suscipit et viverra lobortis, venenatis nec magna.
                Morbi a
              </p>
              <Carousel
                responsive={carousel}
                infinite={true}
                className="slider"
              >
                <div className="flexSection">
                  <Progress number="50" title="web development" />
                  <Progress number="60" title="web development" />
                  <Progress number="80" title="web development" />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background" src={back} alt="" /> */}
    </section>
  );
};

export default Skills;

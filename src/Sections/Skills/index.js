import React from "react";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Title, Progress } from "../../components";

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
    <section className="skillsSection" id="skills">
      <div className="skillsDiv">
        <div>
          <Title title={"Skills"} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui
            lacus, suscipit et viverra lobortis, venenatis nec magna. Morbi a
          </p>
        </div>
        <Carousel responsive={carousel} infinite={true}>
          <Progress number="50" title="Backend development" />
          <Progress number="50" title="Backend development" />
          <Progress number="50" title="Backend development" />
          <Progress number="50" title="Backend development" />
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;

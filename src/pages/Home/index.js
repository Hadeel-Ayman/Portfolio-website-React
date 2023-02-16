import React from "react";
import Courses from "../../Sections/courses";
import Main from "../../Sections/main";
import Projects from "../../Sections/projects";
import Skills from "../../Sections/Skills";
import Touch from "../../Sections/TouchSection";
const Home = () => {
  return (
    <div>
      <Main />
      <Skills />
      <Projects />
      <Touch/>
      {/* <Courses/> */}
    </div>
  );
};

export default Home;

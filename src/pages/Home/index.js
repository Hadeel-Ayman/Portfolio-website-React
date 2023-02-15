import React from "react";
import { Outlet } from "react-router-dom";
import Main from '../../Sections/main'
import Skills from "../../Sections/Skills";
const Home = () => {
  return (
    <div>
      <Outlet/>
      {/* <Main/> */}
      {/* <Skills/> */}
    </div>
  );
};

export default Home;

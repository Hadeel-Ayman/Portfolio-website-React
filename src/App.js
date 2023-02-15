import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import { router } from "./router/index";
import Courses from "./Sections/courses";
import Main from "./Sections/main";
import Projects from "./Sections/projects";
import Skills from "./Sections/Skills";

function App() {
  return (
    <>
      <Header />
      {/* <Main />
      <Skills/>
      <Projects /> */}
      {/* <Courses /> */}
      {router}
      <Outlet/>
    </>
  );
}

export default App;

/**
 *       <Route path="/" element={<Main />} />
      <Route path="skills" element={<Skills />} />
      <Route path="projects" element={<Projects />} />
      <Route path="courses" element={<Courses />} />
 */
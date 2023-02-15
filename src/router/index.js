import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Skills from "../Sections/Skills";
import Projects from "../Sections/projects";
import Courses from "../Sections/courses";
import Main from "../Sections/main";
import Project1 from "../components/project1";
import Project3 from "../components/project3";
import Project2 from "../components/project2";

export const router = (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route path="main" element={<Main />} />
      <Route path="skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />}>
        <Route path="project1" element={<Project1 />} />
        <Route path="project2" element={<Project2 />} />
        <Route path="project3" element={<Project3 />} />
      </Route>
      <Route path="courses" element={<Courses />} />
    </Route>
    <Route path="*" element={<h1>Page Not Found</h1>} />
  </Routes>
);

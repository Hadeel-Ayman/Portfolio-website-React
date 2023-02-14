import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Skills from "../Sections/Skills";
import Projects from "../Sections/projects";
import Courses from "../Sections/courses";
import Main from "../Sections/main";

export const router = (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route path="/" element={<Main />} />
      <Route path="skills" element={<Skills />} />
      <Route path="projects" element={<Projects />} />
      <Route path="courses" element={<Courses />} />
    </Route>
    <Route path="*" element={<h1>Page Not Found</h1>} />
  </Routes>
);

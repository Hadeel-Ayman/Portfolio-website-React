import Home from "../pages/Home";
import Project1 from "../components/project1";
import Project3 from "../components/project3";
import Project2 from "../components/project2";
import { Navigate } from "react-router-dom";

export const router = [
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <Navigate to="project1" /> },
      { path: "project1", element: <Project1 /> },
      { path: "project2", element: <Project2 /> },
      { path: "project3", element: <Project3 /> },
    ],
  },
  {
    path:'*',
    element:<h2>Page Not Found</h2>
  }
];

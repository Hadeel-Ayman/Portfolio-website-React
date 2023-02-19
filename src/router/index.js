import { Navigate } from "react-router-dom";
import { lazy } from "react";

// components
import { Project1, Project2, Project3 } from "../components";

// pages
const Home = lazy(() => import("../pages/Home"));

export const router = [
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "project1", element: <Project1 /> },
      { path: "project2", element: <Project2 /> },
      { path: "project3", element: <Project3 /> },
    ],
  },
  {
    path: "*",
    element: <h2>Page Not Found</h2>,
  },
];

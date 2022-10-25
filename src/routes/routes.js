import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blogs from "../component/Blogs/Blogs";
import Courses from "../component/Courses/Courses";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Home from "../component/Home/Home";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        children: [
          {
            path: "",
            element: <div></div>,
          },
        ],
      },
      {
        path: "/courses",
        loader: () => fetch("http://localhost:5000/allcoursecategory"),
        element: <Courses />,
        children: [
          {
            path: "",
            element: <div></div>,
          },
        ],
      },
    ],
  },
]);

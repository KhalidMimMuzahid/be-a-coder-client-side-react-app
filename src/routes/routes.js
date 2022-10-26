import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blogs from "../component/Blogs/Blogs";
import Courses from "../component/Courses/Courses";
import CoursesBody from "../component/Courses/CoursesBody";
import DefaultAllCOurses from "../component/Courses/DefaultAllCOurses";
import SelectedCourse from "../component/Courses/SelectedCourse";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Home from "../component/Home/Home";
import SignIn from "../component/SignIn/SignIn";
import SignUp from "../component/SignUp/SignUp";
import Main from "../layout/Main";
import PrivetRoutes from "./PrivetRoutes";

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
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/courses",
        loader: () => fetch("http://localhost:5000/allcoursecategory"),
        element: <Courses />,
        children: [
          {
            path: "/courses",
            loader: () => fetch("http://localhost:5000/allcourses"),
            element: <DefaultAllCOurses />,
          },
          {
            path: "/courses/eachcategorycoures/:id",
            loader: async ({ params }) => {
              return fetch(
                `http://localhost:5000/eachcategorycoures/${params.id}`
              );
            },
            element: <CoursesBody />,
          },
          {
            path: "/courses/selectedcourse/:id",
            loader: async ({ params }) => {
              return fetch(`http://localhost:5000/eachcoures/${params.id}`);
            },
            element: (
              <PrivetRoutes>
                <SelectedCourse />
              </PrivetRoutes>
            ),
          },
        ],
      },
    ],
  },
]);

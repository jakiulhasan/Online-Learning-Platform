import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import ForgetPassword from "../components/ForgetPassword";
import AuthChecker from "../context/AuthChecker";
import CoursesLayout from "../layout/CoursesLayout";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "/courses",
        element: <CoursesLayout></CoursesLayout>,
      },
      {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/login",
            element: (
              <AuthChecker>
                <Login></Login>,
              </AuthChecker>
            ),
          },
          {
            path: "/auth/register",
            element: (
              <AuthChecker>
                <Register></Register>,
              </AuthChecker>
            ),
          },
          {
            path: "/auth/forgot-password",
            element: <ForgetPassword></ForgetPassword>,
          },
        ],
      },
    ],
  },
]);

export default Routes;

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
import CourseDetails from "../components/CourseDetails";
import PrivateRoute from "../context/PrivateRoute";
import AddCourse from "../components/AddCourses";
import MyCourses from "../components/MyCourses";
import Dashboard from "../components/DashBoard";
import MyEnrollment from "../components/MyEnrollment";
import Error404 from "../components/Error404";

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
        path: "/*",
        element: <Error404></Error404>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/courses",
        element: <CoursesLayout></CoursesLayout>,
      },
      {
        path: "/courses/my-courses",
        element: (
          <PrivateRoute>
            <MyCourses></MyCourses>,
          </PrivateRoute>
        ),
      },
      {
        path: "/courses/add-course",
        element: <AddCourse></AddCourse>,
      },
      {
        path: "/courses/my-enrolled-courses",
        element: <MyEnrollment></MyEnrollment>,
      },
      {
        path: "/courses/:id",
        element: (
          <PrivateRoute>
            <CourseDetails></CourseDetails>
          </PrivateRoute>
        ),
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

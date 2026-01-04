import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import ForgetPassword from "../components/ForgetPassword";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import ContactSupport from "../components/ContactSupport";
import AuthChecker from "../context/AuthChecker";
import CoursesLayout from "../layout/CoursesLayout";
import CourseDetails from "../components/CourseDetails";
import PrivateRoute from "../context/PrivateRoute";
import AddCourse from "../components/AddCourses";
import MyCourses from "../components/MyCourses";
import Dashboard from "../components/DashBoard";
import MyEnrollment from "../components/MyEnrollment";
import Error404 from "../components/Error404";
import UpdateCourse from "../components/UpdateCourse";
import UserProfile from "../components/UserProfile";
import UserSettings from "../components/UserSettings";
import MyCertificates from "../components/MyCertificates";
import Pricing from "../components/Pricing";

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
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/user-profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/user-profile/settings",
        element: (
          <PrivateRoute>
            <UserSettings></UserSettings>
          </PrivateRoute>
        ),
      },
      {
        path: "/certificates",
        element: (
          <PrivateRoute>
            <MyCertificates></MyCertificates>
          </PrivateRoute>
        ),
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/support",
        element: <ContactSupport></ContactSupport>,
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
        path: "/courses/my-courses/:id",
        element: (
          <PrivateRoute>
            <UpdateCourse></UpdateCourse>
          </PrivateRoute>
        ),
      },
      {
        path: "/courses/add-course",
        element: (
          <PrivateRoute>
            <AddCourse></AddCourse>
          </PrivateRoute>
        ),
      },
      {
        path: "/courses/my-enrolled-courses",
        element: (
          <PrivateRoute>
            <MyEnrollment></MyEnrollment>
          </PrivateRoute>
        ),
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
  {
    path: "/*",
    element: <Error404></Error404>,
  },
]);

export default Routes;

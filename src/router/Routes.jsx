import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomeLayout from "../layout/HomeLayout";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomeLayout></HomeLayout>,
      },
    ],
  },
]);

export default Routes;

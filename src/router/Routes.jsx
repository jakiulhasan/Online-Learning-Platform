import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Demo from "../components/Demo";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/*",
        element: <Demo></Demo>,
      },
    ],
  },
]);

export default Routes;

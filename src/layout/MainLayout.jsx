import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

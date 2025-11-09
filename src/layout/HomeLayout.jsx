import React from "react";
import Banner from "../components/Banner";
import PopularCourses from "../components/PopularCourses";

const HomeLayout = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularCourses></PopularCourses>
    </div>
  );
};

export default HomeLayout;

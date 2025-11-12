import React from "react";
import Banner from "../components/Banner";
import PopularCourses from "../components/PopularCourses";
import TopInstructor from "../components/TopInstructor";
import AboutSection from "../components/AboutSection";

const HomeLayout = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularCourses></PopularCourses>
      <TopInstructor></TopInstructor>
      <AboutSection></AboutSection>
    </div>
  );
};

export default HomeLayout;

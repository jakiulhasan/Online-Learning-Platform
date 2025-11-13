import React from "react";
import Banner from "../components/Banner";
import PopularCourses from "../components/PopularCourses";
import TopInstructor from "../components/TopInstructor";
import AboutSection from "../components/AboutSection";
import { Title } from "react-head";

const HomeLayout = () => {
  return (
    <div className="p-5">
      <Title>Home | TURITOR</Title>;<Banner></Banner>
      <PopularCourses></PopularCourses>
      <TopInstructor></TopInstructor>
      <AboutSection></AboutSection>
    </div>
  );
};

export default HomeLayout;

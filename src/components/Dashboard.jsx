import React, { use } from "react";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import Loading from "./Loading";
import MyCourses from "./MyCourses";
import MyEnrollment from "./MyEnrollment";
import { Title } from "react-head";

const Dashboard = () => {
  const { loading } = use(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Title>Dashboard | TURITOR</Title>
      <div className="relative p-8 mb-8 overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col items-center text-center space-y-3">
          <h1 className="text-3xl font-bold tracking-wide">
            Welcome to Your Dashboard
          </h1>
          <p className="text-base max-w-xl">
            Track your progress, manage your enrolled courses, and celebrate
            your learning milestones — all in one place!
          </p>
          <div className="flex space-x-3 mt-3">
            <Link
              to="/courses/my-courses"
              className="bg-white text-indigo-600 px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform duration-300"
            >
              View My Courses
            </Link>
            <button className="bg-transparent border border-white px-5 py-2 rounded-full font-medium hover:bg-white/20 transition-colors duration-300">
              Generate Certificate
            </button>
          </div>
        </div>
      </div>
      <MyEnrollment></MyEnrollment>
      <MyCourses></MyCourses>
    </div>
  );
};

export default Dashboard;

import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl p-8 mb-8 overflow-hidden shadow-lg">
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
            <button className="bg-white text-indigo-600 px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform duration-300">
              View My Courses
            </button>
            <button className="bg-transparent border border-white px-5 py-2 rounded-full font-medium hover:bg-white/20 transition-colors duration-300">
              Generate Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

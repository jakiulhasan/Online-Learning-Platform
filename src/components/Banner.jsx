import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import bannerRight from "../assets/bannerRight.png";
import avatar from "../assets/avatar.png";
import { IoIosAddCircleOutline } from "react-icons/io";

const Banner = () => {
  return (
    <div className="bg-base-200 py-5 h-[calc(100vh-64px)] flex items-center">
      <div className="max-w-6xl mx-auto md:flex items-center">
        <div className="flex-1">
          <p className="text-secondary" data-aos="fade-right">
            Welcome to Educate
          </p>
          <h1 className="text-7xl font-bold mb-3" data-aos="zoom-in">
            Learn Anything <br /> Anywhere Easily
          </h1>
          <p className="w-2/3 mb-3" data-aos="zoom-in-up">
            Access high-quality lessons and interactive resources from top
            educators, empowering you to achieve your learning goals at your own
            pace.
          </p>
          <button className="btn btn-primary" data-aos="zoom-in-left">
            Get Started <FaArrowRightLong />
          </button>
        </div>
        <div className="sm:relative">
          <div className="hidden sm:block sm:absolute w-[calc(100%-70px)] h-[calc(100%-45px)] top-[30px] mx-auto border rounded-lg z-10"></div>
          <img src={bannerRight} alt="" className="z-20 relative" />
          <div
            className="bg-secondary bg-opacity-30 rounded-lg p-5 sm:absolute sm:top-0 sm:left-0 sm:w-[40%] sm:-translate-x-1/2 z-30 text-white"
            data-aos="fade-up"
          >
            <div className="flex justify-between items-center ">
              {" "}
              <h1 className="font-bold">TRUSTED BY</h1>
              <IoIosAddCircleOutline className="rounded-full text-2xl" />
            </div>
            <h1 className="text-2xl font-bold">+50K</h1>
            <div className="flex -space-x-4 my-2">
              <img
                src={avatar}
                alt=""
                className="rounded-full w-15 bg-white z-3"
              />
              <img
                src={avatar}
                alt=""
                className="rounded-full w-15 bg-amber-300 z-2"
              />
              <img
                src={avatar}
                alt=""
                className="rounded-full w-15 bg-green-400"
              />
            </div>
            <h2 className="text-xl font-bold">Students Worldwide</h2>
            <p>Grow Smarter Every</p>
            <p>Single Day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import bannerRight from "../assets/bannerRight.png";

const Banner = () => {
  return (
    <div className="bg-base-200 py-20 flex items-center">
      <div className="max-w-6xl mx-auto md:flex items-center px-4 md:px-0">
        {/* Left side */}
        <div className="flex-1">
          <p className="text-secondary" data-aos="fade-right">
            Welcome to Educate
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold mb-3"
            data-aos="zoom-in"
          >
            Learn Anything <br /> Anywhere Easily
          </h1>
          <p className="w-full md:w-2/3 mb-5 " data-aos="zoom-in-up">
            Access high-quality lessons and interactive resources from top
            educators, empowering you to achieve your learning goals at your own
            pace.
          </p>
          <button
            className="btn btn-primary flex items-center gap-2"
            data-aos="zoom-in-left"
          >
            Get Started <FaArrowRightLong />
          </button>
        </div>

        {/* Animated Right side */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center items-center relative">
          <motion.div
            className="w-full"
            animate={{
              y: ["0%", "-10%", "0%", "10%", "0%"],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={bannerRight}
              alt="Banner Right"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </motion.div>

          {/* Optional overlay card */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-xl p-5 shadow-lg w-3/4 md:w-2/3 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h2 className="text-xl md:text-2xl font-bold">
              Trusted by 50K+ Students
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Grow Smarter Every Single Day
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

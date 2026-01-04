import { Star } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "./Loading";
import { IoIosPeople, IoMdTime } from "react-icons/io";
import { Link } from "react-router";

const PopularCourses = () => {
  const { courses, loading } = use(AuthContext);
  const [popularCourse, setPopularCourse] = useState([]);

  useEffect(() => {
    if (courses && courses.length > 0) {
      const sorted = [...courses]
        .sort((a, b) => b.students_enrolled - a.students_enrolled)
        .slice(0, 6);
      setPopularCourse(sorted);
    }
  }, [courses, setPopularCourse]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex items-center">
      <div className="py-16 bg-base mx-auto max-w-6xl">
        <div data-aos="fade-down" className="text-center">
          <h4 className="text-secondary font-semibold uppercase tracking-wide mb-2">
            Our Popular Courses
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Courses That Shape Your Future
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Explore carefully curated programs designed to build essential
            skills, empower your career, and inspire personal growth in every
            learner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch w-full">
          {Array.isArray(popularCourse) && popularCourse.length > 0 ? (
            popularCourse.map((course, i) => (
              <div
                data-aos="fade-up"
                data-aos-delay={i * 150}
                key={course._id}
                className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transform transition-transform duration-500 ease-in-out hover:scale-105"
              >
                <img
                  src={course.thumbnail_url}
                  alt=""
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 flex flex-col bg-base-200">
                  <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <IoMdTime className="text-secondary text-xl" />
                      {course.duration_hours} Hours
                    </span>
                    <span className="flex items-center gap-2">
                      <IoIosPeople className="text-secondary text-xl" />
                      {course.students_enrolled} Students Enrolled
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2 min-h-14">
                    {course.title}
                  </h3>
                  <div className="flex items-center mb-3 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" />
                    ))}
                    <span className="text-gray-600 ml-1 text-sm">
                      ({course.rating.average} Rating)
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={course.instructor.avatar_url}
                      className="w-12 h-12 object-cover rounded-full"
                      alt=""
                    />
                    <div>
                      <h1 className="text-xl font-bold">
                        {course.instructor.title}
                      </h1>
                      <p className="text-xl">{course.instructor.name}</p>
                    </div>
                  </div>
                  <Link
                    to={`courses/${course._id}`}
                    className="w-full btn btn-primary py-2"
                  >
                    View More Detail →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <Loading></Loading>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;

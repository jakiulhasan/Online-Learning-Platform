import { Star } from "lucide-react";
import React from "react";

const PopularCourses = () => {
  const courses = [
    {
      category: "Marketing",
      duration: "8 WEEKS",
      students: "12,450+",
      title: "Master Digital Marketing Success",
      rating: 4.8,
      instructor: "James Whitmore, MBA",
      image: "/images/digital-marketing.png",
    },
    {
      category: "Web Development",
      duration: "10 WEEKS",
      students: "9,870",
      title: "Build Websites Like A Pro",
      rating: 4.9,
      instructor: "Lisa Chen, M.Sc.",
      image: "/images/web-development.png",
    },
    {
      category: "Language",
      duration: "6 WEEKS",
      students: "15,320+",
      title: "Speak English With Confidence",
      rating: 4.95,
      instructor: "Oliver Bennett, M.A.",
      image: "/images/english-confidence.png",
    },
  ];
  return (
    <div className="h-screen flex items-center">
      <div className="py-16 bg-base text-center mx-auto w-11/12">
        <h4 className="text-orange-500 font-semibold uppercase tracking-wide mb-2">
          Our Best Courses
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Courses That Shape Your Future
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Explore carefully curated programs designed to build essential skills,
          empower your career, and inspire personal growth in every learner.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                  <span>{course.duration}</span>
                  <span>{course.students} Students Enrolled</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <div className="flex items-center justify-center mb-3 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                  <span className="text-gray-600 ml-1 text-sm">
                    ({course.rating} Rating)
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-200" />
                  <span className="text-gray-700 text-sm">
                    By {course.instructor}
                  </span>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-2">
                  Enroll And Begin →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;

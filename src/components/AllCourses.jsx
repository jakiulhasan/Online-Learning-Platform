import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "./Loading";
import { IoIosPeople, IoMdTime } from "react-icons/io";
import { BookOpen, Star } from "lucide-react";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { VscDiffIgnored } from "react-icons/vsc";

const AllCourses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const { courses, loading } = use(AuthContext);

  useEffect(() => {
    if (courses && courses.length > 0) {
      const allCourses = [...courses];
      setFilteredCourses(allCourses);
    }
  }, [courses]);

  // Filter logic
  useEffect(() => {
    let updated = courses;
    // Search filter
    if (search.trim() !== "") {
      updated = updated.filter(
        (c) =>
          c.title.toLowerCase().includes(search.toLowerCase()) ||
          c.instructor.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (category !== "All") {
      updated = updated.filter((c) => c.category === category);
    }

    // Difficulty filter
    if (difficulty !== "All") {
      updated = updated.filter((c) => c.level === difficulty);
    }

    setFilteredCourses(updated);
  }, [search, category, difficulty, courses]);

  if (loading) {
    return <Loading></Loading>;
  }

  const categories = [
    "All",
    "Development",
    "Design",
    "Marketing",
    "Data Science",
    "Business",
  ];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
  return (
    <div className="p-5">
      <div data-aos="fade-down" className="text-center  mb-8 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-3">
          Explore <span className="text-secondary">All Courses</span>
        </h2>
        <p className="text-gray-600">
          Discover a wide range of courses designed to help you grow your skills
          and advance your career. Filter by category, difficulty, or simply
          search for the topic you’re passionate about.
        </p>
      </div>
      {/* Filter Bar */}
      <div
        data-aos="fade-down"
        className="md:grid md:grid-cols-3 space-y-2 items-center justify-between gap-4 bg-base-100 p-4 rounded-xl shadow-sm mb-8"
      >
        {/* Search */}
        <div>
          <label className="mb-2 text-secondary text-[14px] flex gap-2 items-center">
            {" "}
            <CiSearch />
            Search
          </label>
          <input
            type="text"
            placeholder="Search by title or instructor..."
            className="input input-bordered w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 text-secondary text-[14px] flex gap-2 items-center">
            {" "}
            <BiCategory />
            Select Category
          </label>
          <select
            className="select select-bordered w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat, i) => (
              <option key={i}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <label className="mb-2 text-secondary text-[14px] flex gap-2 items-center">
            {" "}
            <VscDiffIgnored />
            Select Difficulty
          </label>
          <select
            className="select select-bordered w-full"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            {difficulties.map((lvl, i) => (
              <option key={i}>{lvl}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Card Display */}
      <div className="items-stretch">
        {Array.isArray(filteredCourses) && filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8 mx-auto">
            {filteredCourses.map((course, i) => (
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
                    to={`/courses/${course._id}`}
                    className="w-full btn btn-primary py-2"
                  >
                    View More Detail →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-16 text-gray-600">
            <BookOpen size={80} className="text-secondary mb-4" />
            <h3 className="text-2xl font-semibold mb-2">No Courses Found</h3>
            <p className="max-w-md">
              We couldn’t find any courses that match your filters or search
              criteria. Try adjusting your filters or searching with a different
              keyword.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCourses;

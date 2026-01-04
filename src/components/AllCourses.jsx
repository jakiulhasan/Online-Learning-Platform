import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import CourseCard from "./CourseCard";
import CourseCardSkeleton from "./CourseCardSkeleton";
import { BookOpen } from "lucide-react";
import { CiSearch } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { VscDiffIgnored } from "react-icons/vsc";
import { Title } from "react-head";

const AllCourses = () => {
  // 1. Context and State
  const { courses, loading } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [filteredCourses, setFilteredCourses] = useState([]);

  // 2. Filter Logic
  useEffect(() => {
    if (!courses) return;

    let updated = [...courses];

    // Search filter (Title or Instructor Name)
    if (search.trim() !== "") {
      const query = search.toLowerCase();
      updated = updated.filter(
        (c) =>
          c.title?.toLowerCase().includes(query) ||
          c.instructor?.name?.toLowerCase().includes(query)
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

  // 3. Constant Data
  const categories = [
    "All",
    "Development",
    "Design",
    "Marketing",
    "Data Science",
    "Business",
  ];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  // 4. Loading State
  if (loading) {
    return (
      <div className="p-5">
        <Title>Loading Courses | TURITOR</Title>
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-3">
            Explore <span className="text-secondary">All Courses</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-7xl">
          {Array.from({ length: 8 }).map((_, i) => (
            <CourseCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-5">
      <Title>Courses | TURITOR</Title>

      {/* Header */}
      <div data-aos="fade-down" className="text-center mb-8 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-3">
          Explore <span className="text-secondary">All Courses</span>
        </h2>
        <p className="text-gray-600">
          Discover a wide range of courses designed to help you grow your skills
          and advance your career.
        </p>
      </div>

      {/* Filter Bar */}
      <div
        data-aos="fade-down"
        className="grid grid-cols-1 md:grid-cols-3 items-end gap-4 bg-base-100 p-6 rounded-xl shadow-sm mb-8 border border-gray-100"
      >
        {/* Search */}
        <div>
          <label className="mb-2 text-secondary text-sm font-medium flex gap-2 items-center">
            <CiSearch className="text-lg" /> Search
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
          <label className="mb-2 text-secondary text-sm font-medium flex gap-2 items-center">
            <BiCategory className="text-lg" /> Select Category
          </label>
          <select
            className="select select-bordered w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <label className="mb-2 text-secondary text-sm font-medium flex gap-2 items-center">
            <VscDiffIgnored className="text-lg" /> Select Difficulty
          </label>
          <select
            className="select select-bordered w-full"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            {difficulties.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Card Display */}
      <div className="min-h-[400px]">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-7xl">
            {filteredCourses.map((course, i) => (
              <div
                data-aos="fade-up"
                data-aos-delay={i * 50}
                key={course._id || i}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-20 text-gray-600">
            <BookOpen size={80} className="text-secondary/30 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">No Courses Found</h3>
            <p className="max-w-md">
              We couldn't find any courses matching your criteria. Try adjusting
              your filters.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
                setDifficulty("All");
              }}
              className="mt-4 text-primary underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCourses;

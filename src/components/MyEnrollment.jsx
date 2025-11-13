import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../context/Axios";
import Loading from "./Loading";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const MyEnrollment = () => {
  const { courses, user, loading } = use(AuthContext);
  const [enrolledCoursesServer, setEnrolledCoursesServer] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loadingEnrollment, setLoadingEnrollment] = useState(true);

  const email = user?.email;
  useEffect(() => {
    axiosInstance
      .get("/my-enrollment", { params: { email } })
      .then((res) => {
        setEnrolledCoursesServer(res.data);
        setLoadingEnrollment(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [email]);

  useEffect(() => {
    if (!loading && user && courses.length && enrolledCoursesServer.length) {
      const matched = courses.filter((c) =>
        enrolledCoursesServer.some(
          (e) => e.id === c.id && e.email === user.email
        )
      );
      setEnrolledCourses(matched);
    }
  }, [user, loading, courses, enrolledCoursesServer]);

  if (loading || loadingEnrollment) {
    return <Loading></Loading>;
  }
  return (
    <div>
      {/* enrollment section */}
      <section className="my-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          My <span className="text-indigo-600">Enrollments</span>
        </h2>

        {enrolledCourses.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-gray-500 mt-10"
          >
            You haven’t enrolled in any courses yet. Start learning now!
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course, index) => (
              <motion.div
                key={course._id || index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className=" bg-base-100 shadow-md rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={course.thumbnail_url}
                    alt=""
                    className="rounded-lg mb-2 shadow-sm"
                  />
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {course.short_description}
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium">
                      {Math.round((course.progress || 0) * 100)}%
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    {course.completed ? (
                      <span className="text-green-600 text-sm font-semibold">
                        Completed
                      </span>
                    ) : (
                      <span className="text-yellow-600 text-sm font-semibold">
                        In Progress
                      </span>
                    )}
                    <button className="text-indigo-600 text-sm font-medium hover:underline">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MyEnrollment;

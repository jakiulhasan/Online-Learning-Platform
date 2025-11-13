import React, { useState, use } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import axiosInstance from "../context/Axios";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import Loading from "./Loading";
import { useNavigate } from "react-router";

const AddCourse = () => {
  const navigate = useNavigate();
  const { user, loading } = use(AuthContext);

  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    price: "",
    duration: "",
    category: "",
    description: "",
    isFeatured: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) return; // safety check

    const dataToSend = {
      ...formData,
      email: user.email,
      name: user.displayName,
      photoUrl: user.photoURL,
    };

    try {
      const res = await axiosInstance.post("/add-course", dataToSend);
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Course Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/courses/my-courses");
        // Reset form
        setFormData({
          title: "",
          imageUrl: "",
          price: "",
          duration: "",
          category: "",
          description: "",
          isFeatured: false,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  if (loading || !user?.email) return <Loading />;

  const inputVariants = (x) => ({
    initial: { opacity: 0, x },
    animate: { opacity: 1, x: 0 },
  });

  return (
    <motion.div
      className="max-w-2xl mx-auto my-10 bg-base-100 shadow-xl rounded-2xl p-8 border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Add New Course
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <motion.div
          variants={inputVariants(-40)}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
        >
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter course title"
            className="input input-bordered w-full"
            required
          />
        </motion.div>

        {/* Image URL */}
        <motion.div
          variants={inputVariants(40)}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Enter image link"
            className="input input-bordered w-full"
            required
          />
        </motion.div>

        {/* Price */}
        <motion.div
          variants={inputVariants(-40)}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
        >
          <label className="block font-medium mb-1">Price (USD)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="input input-bordered w-full"
            required
          />
        </motion.div>

        {/* Duration */}
        <motion.div
          variants={inputVariants(40)}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        >
          <label className="block font-medium mb-1">Duration (hours)</label>
          <input
            type="number"
            step="0.1"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Enter duration"
            className="input input-bordered w-full"
            required
          />
        </motion.div>

        {/* Category */}
        <motion.div
          variants={inputVariants(-40)}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Category</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Business">Business</option>
            <option value="Marketing">Marketing</option>
          </select>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={inputVariants(40)}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6 }}
        >
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write a short description"
            className="textarea textarea-bordered w-full h-28"
            required
          />
        </motion.div>

        {/* isFeatured */}
        <motion.div
          className="flex items-center gap-3 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <input
            type="checkbox"
            name="isFeatured"
            checked={formData.isFeatured}
            onChange={handleChange}
            className="checkbox checkbox-primary"
          />
          <label className="font-medium">Mark as Featured Course</label>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            type="submit"
            className="btn btn-primary w-full mt-4 text-lg font-semibold"
          >
            Add Course
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default AddCourse;

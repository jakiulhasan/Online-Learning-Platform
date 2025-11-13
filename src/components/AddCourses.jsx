import React, { use, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import axiosInstance from "../context/Axios";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import Loading from "./Loading";

const AddCourse = () => {
  const { user, loading } = use(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    price: "",
    duration: "",
    category: "",
    description: "",
    isFeatured: false,
    email: "",
  });

  useEffect(() => {
    if (user?.email) {
      setFormData((prev) => ({ ...prev, email: user.email }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance.post("/add-course", formData).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Course Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      setFormData({
        title: "",
        imageUrl: "",
        price: "",
        duration: "",
        category: "",
        description: "",
        isFeatured: false,
        email: user.email,
      });
    });
  };

  if (loading || !user?.email) {
    return <Loading />;
  }

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
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
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
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
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
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
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
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
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
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
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
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
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

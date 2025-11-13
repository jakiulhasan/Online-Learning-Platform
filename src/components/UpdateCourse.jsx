import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axiosInstance from "../context/Axios";
import Loading from "./Loading";
import Swal from "sweetalert2";
import { Title } from "react-head";

const UpdateCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axiosInstance.get(`/my-courses/${id}`);
        // If your server returns array (like find().toArray()), handle that
        setCourse(Array.isArray(res.data) ? res.data[0] : res.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchCourse();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedData = {
      title: form.title.value,
      description: form.description.value,
      duration: form.duration.value,
      price: form.price.value,
      category: form.category.value,
      email: form.email.value,
      imageUrl: form.imageUrl.value,
      name: form.name.value,
      photoUrl: form.photoURL.value,
      isFeatured: form.isFeatured.checked,
    };

    try {
      const res = await axiosInstance.patch(`/courses/${id}`, updatedData);

      if (res.status === 200) {
        Swal.fire("Updated!", "Course updated successfully.", "success");
        navigate("/courses/my-courses"); // redirect to your course list or dashboard
      }
    } catch (err) {
      console.error("Error updating course:", err);
      Swal.fire("Error", "Failed to update course.", "error");
    }
  };

  if (!course) return <Loading></Loading>;
  console.log(course);

  return (
    <div className="max-w-3xl mx-auto bg-base-200 p-6 rounded-2xl shadow-lg mt-8">
      <Title>Update Courses | TURITOR</Title>;
      <h2 className="text-2xl font-bold text-center mb-4">
        Update <span className="text-secondary">Course</span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="text-secondary"> Title</label>
        <input
          type="text"
          name="title"
          defaultValue={course.title}
          placeholder="Title"
          className="input input-bordered w-full"
          required
        />
        <label className="text-secondary"> Description</label>
        <textarea
          name="description"
          defaultValue={course.description}
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          rows="4"
          required
        ></textarea>
        <label className="text-secondary"> Duration</label>
        <input
          type="text"
          name="duration"
          defaultValue={course.duration}
          placeholder="Duration (hours)"
          className="input input-bordered w-full"
        />
        <label className="text-secondary"> Price</label>
        <input
          type="text"
          name="price"
          defaultValue={course.price}
          placeholder="Price"
          className="input input-bordered w-full"
        />
        <label className="text-secondary"> Category</label>
        <input
          type="text"
          name="category"
          defaultValue={course.category}
          placeholder="Category"
          className="input input-bordered w-full"
        />
        <label className="text-secondary"> Email</label>
        <input
          type="email"
          name="email"
          defaultValue={course.email}
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <label className="text-secondary"> Thumbnail Url </label>

        <input
          type="text"
          name="imageUrl"
          defaultValue={course.imageUrl}
          placeholder="Image URL"
          className="input input-bordered w-full"
        />
        <label className="text-secondary"> Instructor Name </label>
        <input
          type="text"
          name="name"
          defaultValue={course.name}
          placeholder="Instructor Name"
          className="input input-bordered w-full"
        />
        <label className="text-secondary"> Instructor Photo Url </label>
        <input
          type="text"
          name="photoURL"
          defaultValue={course.photoURL}
          placeholder="Instructor Photo"
          className="input input-bordered w-full"
        />

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="isFeatured"
            defaultChecked={course.isFeatured}
            className="checkbox checkbox-secondary"
          />
          <label className="label-text">Mark as Featured</label>
        </div>

        <button type="submit" className="btn btn-secondary w-full">
          Update Course
        </button>
      </form>
    </div>
  );
};

export default UpdateCourse;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadImage from "../Components/UploadImage";
import { addTask } from "../APIs/taskApis";

function AddTask() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    attachment: null,
    date: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await addTask(formData);
      alert("Task Added");
      // navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const removeImage = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      attachment: null,
    }));
    alert("Image removed");
  };

  const imageurl = (url) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      attachment: url,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Add Task</h2>
        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        {/* Attachment */}
        <span className="text-gray-700">
          <label className=" text-gray-700 font-medium mb-2 inline-block mr-5">
            Attachment
          </label>
          <UploadImage
            ongettingurl={imageurl}
            cancel={removeImage}
            attachment={formData.attachment}
          />
        </span>
        {/* Date */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Date & Time
          </label>
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        {/* Mobile */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTask;

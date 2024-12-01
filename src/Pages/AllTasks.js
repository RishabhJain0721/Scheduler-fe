import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTasks, deleteTask } from "../APIs/taskApis";

const AllTasks = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await getAllTasks();
      console.log(res);
      setTasks(res);
    };

    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error(`Error deleting task ${taskId}:`, error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/addTask")}
        >
          Add Task
        </button>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Attachment</th>
            <th className="border border-gray-300 px-4 py-2">Datetime</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Mobile</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {task.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {task.description || "-"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {task.attachment ? (
                    <a
                      href={task.attachment}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(task.date).toLocaleString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {task.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {task.mobile}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {task.done ? "Done" : "Pending"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="8"
                className="text-center border border-gray-300 px-4 py-2"
              >
                No tasks available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllTasks;

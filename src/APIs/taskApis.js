import axios from "axios";

export const addTask = async (payload) => {
  try {
    const res = await axios.post("/api/toDo/add", payload);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getAllTasks = async () => {
  try {
    const res = await axios.get("/api/toDo/getAll");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const res = await axios.delete(`/api/toDo/delete/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

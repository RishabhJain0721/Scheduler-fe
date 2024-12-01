import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllTasks from "./Pages/AllTasks";
import AddTask from "./Pages/AddTask";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/addTask" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

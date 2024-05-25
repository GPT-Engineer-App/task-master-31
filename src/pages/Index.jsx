import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <div className="flex mb-4">
          <input type="text" className="border p-2 flex-grow rounded-l" placeholder="Add a new task" value={task} onChange={(e) => setTask(e.target.value)} />
          <button className="bg-blue-500 text-white p-2 rounded-r" onClick={addTask}>
            <FaPlus />
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-200 p-2 mb-2 rounded">
              {task}
              <button className="text-red-500" onClick={() => deleteTask(index)}>
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;

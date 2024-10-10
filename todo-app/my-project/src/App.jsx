import { useState } from 'react';
import Heading from './components/Heading';
function App() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);

  // Add new task
  const addTask = () => {
    if (task.trim() && date) {
      const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
        date: date
      };
      setTodos([...todos, newTask]);
      setTask("");
      setDate("");
    } else {
      alert("Please enter both task and a date.");
    }
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete task
  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <Heading />

        {/* Input Section */}
        <div className="flex mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new task"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 rounded-md"
          />
          <button
            onClick={addTask}
            className="p-3 border border-blue-500 text-blue-500 rounded-r-md ml-2 transition-colors duration-200 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="list-none space-y-4">
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between bg-gray-200 p-4 rounded-md">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  className="mr-3"
                />
                <span className={todo.completed ? "line-through text-gray-500" : ""}>
                  {todo.text}
                </span>
                <span className="ml-4 text-sm text-gray-500">{todo.date}</span>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => deleteTask(todo.id)}
                className="ml-4 text-white bg-red-500 border border-red-500 rounded-md px-2 py-1 transition-colors duration-200 hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete To-Do
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

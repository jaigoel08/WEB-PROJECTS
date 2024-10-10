import React from 'react'
import List from './List'
import { useState } from 'react';
const TodoInp = () => {
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
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
  return (
    <>
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
    </>
  )
}

export default TodoInp
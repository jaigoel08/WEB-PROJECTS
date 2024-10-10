import React from 'react'

import { useState } from 'react';
const List = () => {
    const toggleComplete = (id) => {
        const [todos, setTodos] = useState([]);
        
        setTodos(todos.map(todo => 
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
      };
    
      // Delete task
      const deleteTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
      };
  return (
   <>
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

          
              <button
                onClick={() => deleteTask(todo.id)}
                className="ml-4 text-white bg-red-500 border border-red-500 rounded-md px-2 py-1 transition-colors duration-200 hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete To-Do
              </button>
            </li>
          ))}
        </ul>
   </>
  )
}

export default List
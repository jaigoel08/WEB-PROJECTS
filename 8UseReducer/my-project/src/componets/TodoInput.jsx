import React, { useState } from 'react';

export default function TodoInput({ dispatch }) {
  const [todoText, setTodoText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const addTodo = () => {
    if (todoText.trim() && dueDate) {
      dispatch({ type: 'ADD_TODO', payload: { text: todoText, dueDate } });
      setTodoText('');
      setDueDate('');
    }
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        id="todo-input"
        className="flex-1 p-2 border border-gray-300 rounded-md"
        placeholder="Enter a new task"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <input
        type="date"
        className="p-2 border border-gray-300 rounded-md"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={addTodo}
      >
        Add 
      </button>
    </div>
  );
}

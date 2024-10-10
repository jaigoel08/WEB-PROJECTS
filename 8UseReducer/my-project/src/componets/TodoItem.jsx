import React from 'react';

export default function TodoItem({ todo, dispatch }) {
  const toggleTodo = () => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id: todo.id } });
  };

  const removeTodo = () => {
    dispatch({ type: 'REMOVE_TODO', payload: { id: todo.id } });
  };

  return (
    <li className="flex items-center justify-between p-3 bg-gray-100 rounded-md shadow-sm">
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>
        {todo.text}
      </span>
      {todo.dueDate && (
        <span className="ml-4 text-sm text-gray-500">
          Due: {new Date(todo.dueDate).toLocaleDateString()}
        </span>
      )}
      <div className="space-x-2">
        <button
          className="px-3 py-1 bg-green-500 text-white rounded-md"
          onClick={toggleTodo}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          className="px-3 py-1 bg-red-500 text-white rounded-md"
          onClick={removeTodo}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

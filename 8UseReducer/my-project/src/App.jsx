import React, { useReducer, useState } from 'react';
import TodoInput from './componets/TodoInput';
import TodoList from './componets/TodoList';
import { todoReducer, initialState } from './componets/TodoReducer';

export default function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-4">MY TODO LISt</h1>

      <TodoInput dispatch={dispatch} />
      <TodoList todos={state.todos} dispatch={dispatch} />
    </div>
  );
}

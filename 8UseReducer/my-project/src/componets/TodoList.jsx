import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, dispatch }) {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}

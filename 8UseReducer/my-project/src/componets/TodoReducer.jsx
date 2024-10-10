export const initialState = {
    todos: []
  };
  
  export function todoReducer(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [
            ...state.todos,
            { id: Date.now(), text: action.payload.text, completed: false, dueDate: action.payload.dueDate }
          ]
        };
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload.id)
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
          )
        };
      default:
        throw new Error('Unknown action type');
    }
  }
  
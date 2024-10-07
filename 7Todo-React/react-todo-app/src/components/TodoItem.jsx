import React from 'react'
import TodoItems from './TodoItems'
const TodoItem = (item) => {
  
  return (
    <>
    <div className='flex justify-between  m-3'>
       <div className='text-xl font-bold ml-0'>{item.todoText}</div> 
       <div className='ml-11'>{item.todoDate}</div>
       <button className='border-2 pl-2 pr-2 border-black hover:bg-red-500 active:bg-red-800' handler ={() => deleteTodoItem(id)}>Delete</button>

    </div>
    </>
  )
}

export default TodoItem
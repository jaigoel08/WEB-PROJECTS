import React from 'react'

const AddTodo = () => {
  return (
    <div className="flex mt-8">
        <input type="text" placeholder='Enter Todo Here' className='border-2 w-70 pl-2 border-slate-700' />
        <input type="date" className='ml-8 border-2 border-slate-700' />
        <button className='ml-8 border-2 border-slate-700 hover:bg-green-400 active:bg-green-700'>Add Todo</button>

    </div>
  )
}

export default AddTodo
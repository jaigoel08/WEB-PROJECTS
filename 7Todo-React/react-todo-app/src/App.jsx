import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItem from "./components/TodoItem"
import TodoItems from "./components/TodoItems"


function App() {


  return (
     
    <center>
    <div className="border m-5 p-5 rounded-md justify-center bg-blue-200 w-max">
    <AppName/>
    <AddTodo />
    <TodoItems />
    <TodoItem/>

    </div>
    </center>
   
  )
}

export default App

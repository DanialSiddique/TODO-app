import Create from "./form/Create"
import Read from "./form/Read"
import {todocontext } from "./form/Wrapper"
import { useContext } from "react"

const App = () => {
const [todo,setTodo]=useContext(todocontext)
  return (
    <div className=" flex text-white w-screen h-screen bg-gray-800 p-20">
      <Create todo={todo} setTodo={setTodo}/>
      <Read todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default App

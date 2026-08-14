import { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "./Wrapper"
function Read() {
  const[todo,setTodo]=useContext(todocontext)
  const todos = todo;
  const setTodos =setTodo;

  const handleDelete = (id) => {
    const updated = todos.filter(to => to.id !== id);
    setTodos(updated);
    toast.warning("Todo Deleated")
  };

  const renderTodo = todos.map((data) => {
    return (
      <li key={data.id} className="flex bg-gray-950 p-4 justify-between rounded-3xl items-center mb-1.5">
        {data.title}
        <button className=" p-1 px-2 hover:text-red-600 hover-underline rounded-3xl text-red-300" onClick={() => handleDelete(data.id)}>Delete</button>
      </li>
    );
  });

  return (
    <div className="p-10 w-30%">
      <h1 className="mb-10 text-5xl font-thin"><span className="text-yellow-300 hover:text-yellow-500 transition duration-300">Pending </span>Todos</h1>
      <ol>{renderTodo}</ol>
    </div>
  );
}

export default Read;
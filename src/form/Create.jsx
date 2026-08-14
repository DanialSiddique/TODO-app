import {nanoid} from 'nanoid'
import "./create.css"
import { toast } from "react-toastify";
import { todocontext } from "./Wrapper";
import { useState,useContext } from 'react';
const Create = () => {
    const [title,setTitle] =useState("");
    const [todo,setTodo]= useContext(todocontext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        //new obj
        if (title.trim() === ""){
        toast.error("Please Enter Todo")
          return
        }else{
          const newtodo ={
            id:nanoid(),
            title,
            iscompleted:false
          }
          //console.log(newtodo);
          //the show the all data
          const copy =[...todo];
          copy.push(newtodo);
          setTodo(copy);
          //console.log(copy)
          //empty the input title after submission
          setTitle("")
          toast.success("Todo is Created");
        }
    }

  return (
    <div className="w-[70%] p-10 ">
      <h1 className="text-5xl p-4 font-thin mb-5 ">Set <span className="text-red-600 hover:text-red-800 transition duration-300">Remenders</span> for <br/><p className="mt-3">Tasks</p></h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input className="border-b-2 outline-0 py-2 px-1 w-100 mx-5" type="text" onChange={(e)=> setTitle(e.target.value)} value={title}/>
        <button className=" font-medium text-lg border w-40 my-3 ms-5 py-2 px-6 rounded-2xl hover:bg-gray-950 hover:text-gray-400 transition duration-900 hover:scale-102">Create Todo</button>
    </form>
    </div>
  )
}

export default Create

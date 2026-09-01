import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData, setUserData]= useContext(AuthContext);
  

  const [taskTitle, setTaskTitle]= useState("")
  const [taskDescription, setTaskDescription]= useState("")
  const [taskDate, setTaskDate]= useState("")
  const [asignTo, setAsignTo]= useState("")
  const [category, setCetagory]= useState("")

  const [newTask, setNewTask]= useState({})


  const submitHandler = (e)=>{
    e.preventDefault();

    setNewTask({taskTitle, taskDate, category, taskDescription, active: false, newTask: true, completed: false, failed: false})
    // console.log(newTask);

    const data = userData

    data.forEach((elem) => {
      // console.log(elem);

      if(asignTo == elem.firstname){
        elem.tasks.push(newTask);
        // console.log(elem);
        elem.taskNumbers.newTask = elem.taskNumbers.newTask +1;

      }else{
        // alert("employee is not exist.")
      }
    });
    setUserData(data);
    console.log(data);

      setTaskTitle("")
      setTaskDate("")
      setTaskDescription("")
      setAsignTo("")
      setCetagory("")

  }
  return (
    <div>
    <form onSubmit={(e)=>{submitHandler(e)}} className="flex flex-wrap items-start justify-between w-full bg-[#262626] mt-10">
      <div className="w-1/2" >
        <div className="w-full mx-10 my-4">
          <h3 className="font-semibold">Task Title</h3>
          <input value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)} type="text" placeholder="enter task name" className="w-2/3 bg-transparent border-2 rounded px-3 py-1 font-semibold mt-1 placeholder-gray-300"/>
        </div>
        <div className="w-full mx-10 my-4">
          <h3 className="font-semibold">Date</h3>
          <input value={taskDate} onChange={(e)=>setTaskDate(e.target.value)} type="date" className="w-2/3 bg-transparent border-2 rounded px-3 py-1 font-semibold mt-0.5 placeholder-gray-100"/>
        </div>
        <div className="w-full mx-10 my-4">
          <h3 className="font-semibold">Assign To</h3>
          <input value={asignTo} onChange={(e)=>setAsignTo(e.target.value)} type="text" placeholder="employee name" className="w-2/3 bg-transparent border-2 rounded px-3 py-1 font-semibold mt-0.5 placeholder-gray-300"/>
        </div >
        <div className="w-full mx-10 my-4">
          <h3 className="font-semibold">Catagory</h3>
          <input  value={category} onChange={(e)=>setCetagory(e.target.value)} type="text" placeholder="design/dev/etc .." className="w-2/3 bg-transparent border-2 rounded px-3 py-1 font-semibold mt-0.5 placeholder-gray-300"/>
        </div>
        
      </div>

      <div className="w-1/2">
        <div className="my-5 mx-10 ">
        <h3 className="font-semibold">Description</h3>
        <textarea value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)} name="" id="" cols={40} rows={10} className="w-[90%] h-full border bg-transparent rounded mt-1"></textarea>
        <button className="border rounded-xl mt-2 w-[90%] p-3 font-semibold bg-emerald-400 hover:bg-emerald-500">Create Task</button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default CreateTask

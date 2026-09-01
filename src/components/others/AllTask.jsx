import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, setUserData]= useContext(AuthContext);
  // console.log(authData)
  return (
  
    <div className='bg-[#262626] p-5 mt-5 rounded h-45 overflow-auto'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 font-medium text-lg'>Employee Name</h2>
        <h3 className='w-1/5 font-medium text-lg'>New Task</h3>
        <h3 className='w-1/5 font-medium text-lg'>Active Task</h3>
        <h3 className='w-1/5 font-medium text-lg'>Completed</h3>
        <h3 className='w-1/5 font-medium text-lg'>Failed</h3>
        
      </div>
      {userData.map(function(elem, idx){
        return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 font-medium text-lg'>{elem.firstname}</h2>
        <h3 className='w-1/5 font-medium text-lg text-blue-400'>{elem.taskNumbers.newTask}</h3>
        <h3 className='w-1/5 font-medium text-lg text-yellow-500'>{elem.taskNumbers.active}</h3>
        <h3 className='w-1/5 font-medium text-lg text-green-500'>{elem.taskNumbers.completed}</h3>
        <h3 className='w-1/5 font-medium text-lg text-red-600'>{elem.taskNumbers.failed}</h3>
        
      </div>
      })}
    </div>
  )
}

export default AllTask

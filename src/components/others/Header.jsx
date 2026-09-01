import React, { useState } from 'react'

const Header = (props) => {
  const [userName, setUserName]= useState("username");

  // if(!data){
  //   setUserName("Admin")
  // }else{
  //   setUserName(data.firstname)
  // }

  const logOutUser=()=>{
    localStorage.setItem("loggedInUser","")
    props.changeUser("");
    // window.location.reload();
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hellow <br/> <span className='text-3xl font-semibold'>userName</span></h1>
        <button onClick={logOutUser} className='bg-red-600 px-5 py-2 rounded-md text-white text-lg font-medium cursor-pointer'>Log Out</button>
    </div>
  )
}

export default Header
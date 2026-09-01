import React, { useState } from 'react'

const Login = ({handleLogIn}) => {
    
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const submitHandeler=(e)=>{
        e.preventDefault();
        handleLogIn(email, password)
        // console.log("email is ",email);
        // console.log("password is ",password);

        setEmail("");
        setPassword("");
    }
  return (
    <div>
        <div className='flex h-screen w-screen items-center justify-evenly'>
            <div className='border-2 rounded-md border-red-800 p-5'>
                <h2>ADMIN LOGIN:-</h2>
                <h4>Email:- admin@me.com</h4>
                <h4>password: 123</h4>
            </div>
            <div className='border-2 rounded-md border-emerald-600'>
            <form className='flex flex-col p-10'onSubmit={(e)=>{submitHandeler(e)}}>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                    // console.log(e.target.value)
                }}
                required className='border-2 border-emerald-600 py-3 px-3 rounded-full mt-2 bg-transparent text-white outline-none placeholder:text-white text-l' type="email" placeholder='Enter Your Email' />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                    // console.log(e.target.value)
                }}
                required className='border-2 border-emerald-600 py-3 px-3 rounded-full mt-3 mb-3 bg-transparent text-white  outline-none placeholder:text-white text-l' type="password" placeholder='Enter password' />
                <button className='border-none bg-emerald-600 py-2 px-3 rounded-full text-white outline-none w-1/2 m-auto mb-2 placeholder:text-white text-l'>Log In</button>
            </form>
            </div>
            <div className='border-2 rounded-md border-red-800 p-5'>
                <h2>EMPLOYEE LOGIN:-</h2>
                <h4>employee1:- employee1@me.com</h4>
                <h4>employee2:- employee2@me.com</h4>
                <h4>employee3:- employee3@me.com</h4>
                <h4>employee4:- employee4@me.com</h4>
                <h4>employee5:- employee5@me.com</h4>
                <br />
                <h4>password: 123</h4>
            </div>
        </div>
    </div>
  )
}

export default Login
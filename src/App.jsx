import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
import { data } from 'autoprefixer'

const App = () => {

  const [user, setUser]=useState(null)
  const [loggedInUserData, setLoggedInUserData]=useState(null);
  // console.log(user);

  const [userData, setUserData]= useContext(AuthContext);
  // console.log(authData);

  
// localStorage.clear();
  
  useEffect(()=>{
    setLocalStorage();

    const loggedInUser = localStorage.getItem("loggedInUser");
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data)
    }

  },[])

  // console.log(user)
  const handleLogIn = (email, password)=>{
    if(email == "admin@me.com" && password == "123"){
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({role:"admin"}))
    }else if(userData){
      const employee = userData.find((e)=>email == e.email && password == e.password);
      if(employee){
        setUser("employee")
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({role:"employee", data: employee}));

        // console.log(employee);
    }
    }else{
      alert("Invalid credential");
    }
  }
// console.log(user)
  

  return (
    <>
    {!user ?<Login handleLogIn={handleLogIn}/> : ""}
    {user == "admin"? <AdminDashboard changeUser={setUser}/> : (user == "employee"? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>: null)}
    </>
  )
}

export default App
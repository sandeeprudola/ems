import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const handleLogin =(email,password)=>{
    if(email=='admin@me.com'&& password=='123'){
      setUser('admin')
      console.log(user)
    }
    else if(email=='user@me.com'&& password=='123'){
      setUser('employee')
      console.log(user)
    }
    else{
      alert ('invalid credentials')
    }
  }
  const data= useContext(AuthContext)
  console.log(data)

 const [user, setUser] = useState(null)
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>:''}
      {user=='admin'?<AdminDashboard/>:<EmployeDashboard/> }
    </>
  )
}

export default App
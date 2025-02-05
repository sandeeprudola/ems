import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const authData= useContext(AuthContext)

  const handleLogin =(email,password)=>{
    if(email=='admin@me.com'&& password=='123'){
      setUser('admin')
    }
    else if(authData && authData.employees.find((e)=>email==e.email && e.password==password)){
      setUser('employees')
    }
    else{
      alert ('invalid credentials')
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>:''}
      {user=='admin'?<AdminDashboard/>:<EmployeDashboard/> }
    </>
  )
}

export default App
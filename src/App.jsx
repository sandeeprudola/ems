import React, { useEffect } from 'react'
import Login from './components/Auth/login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/LocalStorage'

const App = () => {

 useEffect(()=>{
  setLocalStorage()
 })
  
  return (
    <>
      <Login/>
    {/* {<EmployeDashboard/>} */}
    {/* {<AdminDashboard/>} */}
    </>
  )
}

export default App
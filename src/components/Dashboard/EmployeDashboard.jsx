import React from 'react'
import Header from '../others/Header'
import Tasklist from '../others/Tasklist'
import TaskSwipe from '../TaskList/TaskSwipe'

const EmployeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        {<Header/>}
        {<Tasklist/>}
        {<TaskSwipe/>}
    </div>
  )
}

export default EmployeDashboard
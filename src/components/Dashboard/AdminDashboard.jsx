import React from 'react'
import Header from '../others/Header'

const AdminDashboard = () => {
  return (
    <>
    <div className='h-screen w-ful p-7'>
    <Header/>
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form className='flex flex-wrap w-full items-start justify-between'>

            <div className='w-1/2 '>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Make A UI Design' />
                
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="date" />
                
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='employee name' />
                
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='dev/design/etc'/>
    
            </div>

           <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea className=' text-sm py-2 px-4 rounded bg-transparent border-[1px] border-gray-400' name="" cols="30" rows="10 " id=""></textarea>
                <button className='mt-5 bg-red-600 hover:bg-red-950 rounded px-3 py-2'>Create</button>
           </div>
            
            
        </form>
        </div>
    </div>
    </>
  )
}

export default AdminDashboard
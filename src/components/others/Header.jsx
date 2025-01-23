import React from 'react'

const Header = () => {
  return (
    <div className=' flex items-end justify-between'>
        <h1 className='text-4xl font-medium'>
            Hello <span className='text-5xl font-semibold'>Sandeep😇</span> 
        </h1>
        <button className='bg-red-600 font-medium text-lg text-white px-5 py-2 rounded-sm'>
            Log Out
        </button>
    </div>
  )
}

export default Header
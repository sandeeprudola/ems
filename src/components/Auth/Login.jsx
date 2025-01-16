import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className=' rounded-xl border-2 border-emerald-600 p-20'>

            <form className='flex flex-col items-center justify-center'>
                <input required className='border-2 border-emerald-600 px-5 py-3 text-xl rounded-full outline-none bg-transparent placeholder:text-gray-300' type="email" placeholder='Enter Your Email' />
                <input className='border-2 border-emerald-600 px-5 py-3 text-xl rounded-full outline-none bg-transparent placeholder:text-gray-300 mt-4' type="password" placeholder='Password' />
                <button className='mt-7 border-none outline-none bg-emerald-600 px-5 py-3 text-xl rounded-full text-white'>Log in</button>
            </form>

        </div>
    </div>
  )
}

export default Login
import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-600'>

            <form className='flex flex-col items-center justify-center'>
                <input type="email" placeholder='Enter Your Email' />
                <input type="password" placeholder='Password' />
                <button>Log in</button>
            </form>

        </div>
    </div>
  )
}

export default Login
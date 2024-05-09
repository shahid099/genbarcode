import React from 'react'

const Login = () => {
  return (
    <div className='w-[40vw] h-[80vh] bg-slate-500 m-auto mt-10 rounded-xl px-20 py-10 flex justify-center items-center flex-col gap-5'>
      <form className='flex flex-col gap-5 justify-center items-center w-[100%]' action="" method="post">
        <h3 className='text-center text-4xl'>Login Here...</h3>
        <input className='px-4 py-2 rounded-lg outline-none w-[100%]' type="text" name="name" id="name" placeholder='Enter Your Name: ' required />
        <input className='px-4 py-2 rounded-lg outline-none w-[100%]' type="email" name="email" id="email" placeholder='Enter Your Email: ' required />
        <input className='px-4 py-2 rounded-lg outline-none w-[100%]' type="password" name="password" id="password" placeholder='Enter Your Password: ' required />
        <button className='px-6 w-40 h-12 py-3 bg-red-200 rounded-xl flex justify-center items-center text-xl hover:bg-red-300'>Submit</button>
      </form>
        <h4>I don't have Account <a className='text-teal-900 hover:text-red-600 text-lg' href="createAccount">Create</a></h4>
    </div>
  )
}

export default Login

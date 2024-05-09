import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const Navbar = () => {

  const text = "BarcodeGen";

  if(!localStorage.getItem("userName")) {
    const name = window.onload = prompt("Enter Your Name Please: ");
    localStorage.setItem('userName', name);
  }


  return (
    <>
      <div className='w-full h-10 bg-orange-500 flex justify-between items-center px-10'>
        <h1 className='flex w-8 text-2xl'>
            <Typewriter
              words={[text]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={130}
              deleteSpeed={150}
              delaySpeed={1500}
            />
        </h1>
        <h1 className='flex text-xl'><span className='flex text-[#ffffff]'>Welcome:</span> "{localStorage.getItem("userName")}"</h1>
        <h2 className='p-2'>Login</h2>
      </div>
    </>
  )
}

export default Navbar
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const Navbar = () => {

  const text = "BarcodeGen";

  if(!localStorage.getItem("userName")) {
    const name = window.onload = prompt("Enter Your Name Please: ");
    localStorage.setItem('userName', name);
  } else if(localStorage.getItem("userName") === 'null' ) {
    const name = window.onload = prompt("Enter Your Name Please: ");
    localStorage.setItem("userName", name);
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
        <h1 className='flex text-2xl'><span className='flex text-[#ffffff] px-2'>Welcome</span> {localStorage.getItem("userName")}</h1>
        <a href='#'>
          <h2 className='p-2 text-2xl'>Login</h2>
        </a>
      </div>
    </>
  )
}

export default Navbar
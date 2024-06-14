import React, {useContext} from 'react'
import myContext from '../context/Mycontext';

import { Typewriter } from 'react-simple-typewriter'
const Navbar = () => {

  const data = useContext(myContext);
  const { dataUpload } = data;

  const text = "Generate Barcodes";

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
        <h1 className='flex w-52 text-2xl'>
            <Typewriter
              words={[text]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={250}
              deleteSpeed={150}
              delaySpeed={1500}
            />
        </h1>
        <h1 className='flex text-2xl'><span className='flex text-[#ffffff] px-2'>Welcome</span> {localStorage.getItem("userName")}</h1>
        <div>
          <button className='px-2 text-xl rounded-md bg-gray-400' onClick={dataUpload}>Login</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
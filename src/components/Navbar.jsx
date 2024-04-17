import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const Navbar = () => {

  const text = "BarcodeGen";

  return (
    <div className='w-full h-10 bg-orange-200 flex items-center px-10'>
      <h1 className='flex text-2xl'>
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
    </div>
  )
}

export default Navbar
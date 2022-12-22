/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FcAndroidOs } from 'react-icons/fc'

const Navbar = () => {
  return (
    <div className='bg-white flex h-[9vw] text-[1.1vw] items-center px-[2vw] text-[#333333] w-full'>

      <div className='flex absolute gap-[1vw] text-[1vw] top-[0.5vw] items-center right-[1vw]'>
        <span className='text-white bg-orange-400 p-[0.5vw] rounded-md font-medium'>Why Should You Download Urja Care App</span>
        Download the App <FcAndroidOs className='text-[3vw]' />
      </div>

      {/* logo */}

      <div className='w-[7vw] '>
        <img src='/logo.png' alt='logo' />
      </div>

      {/* navbar */}

      <div className='flex w-5/6 pt-8 justify-between px-[2vw]'>
        <div className='hover:text-orange-400 transition-all duration-300 cursor-pointer'>About</div>
        <div className='hover:text-orange-400 transition-all duration-300 cursor-pointer'>Products & Solutions</div>
        <div className='hover:text-orange-400 transition-all duration-300 cursor-pointer'>Urja Care</div>
        <div className='hover:text-orange-400 transition-all duration-300 cursor-pointer'>Expertise</div>
        <div className='hover:text-orange-400 transition-all duration-300 cursor-pointer'>Export</div>
        <div className='hover:text-orange-400 transition-all duration-300 cursor-pointer'>Media</div>
        <div className='hover:text-orange-400 transition-all duration-300 cursor-pointer'>Contact</div>
      </div>
    </div>
  )
}

export default Navbar
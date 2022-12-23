/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {BsChevronDown} from "react-icons/bs"

const Navbar = () => {
  return (
    <div style={{ fontFamily: "'Raleway', sans-serif" }} className='bg-white flex h-[7vw] text-[1.1vw] items-center px-[2vw] drop-shadow-xl fixed top-0 z-50 text-[#333333] w-full'>

      {/* logo */}

      <div className='w-[15vh] md:w-[15vw] '>
        <img src='/logo.png' alt='logo' />
      </div>

      {/* navbar */}

      <div className='flex w-5/6  justify-end gap-[5vw] '>
        <div className='hover:text-orange-400 transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center'>About <BsChevronDown/></div>
        <div className='hover:text-orange-400 transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center'>Products & Solutions <BsChevronDown/></div>
        <div className='hover:text-orange-400 transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center'>Expertise <BsChevronDown/></div>
        <div className='hover:text-orange-400 transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center'>Export <BsChevronDown/></div>
        <div className='hover:text-orange-400 transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center'>Media <BsChevronDown/></div>
        <div className='hover:text-orange-400 transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center'>Contact <BsChevronDown/></div>
      </div>
    </div>
  )
}

export default Navbar
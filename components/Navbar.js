/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { BsChevronDown, BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs"
import { FaShareAlt } from "react-icons/fa"
import "animate.css";
import { TfiYoutube } from 'react-icons/tfi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const Navbar = () => {
  const [n1, setn1] = useState(false);
  const [n2, setn2] = useState(false);
  const [n3, setn3] = useState(false);
  const [n4, setn4] = useState(false);
  const [n5, setn5] = useState(false);
  const [n6, setn6] = useState(false);

  const nav = (e) => {
    setn1(false)
    setn2(false)
    setn3(false)
    setn4(false)
    setn5(false)
    setn6(false)
    e.currentTarget.id == "n1" ? setn1(true) : e.currentTarget.id == "n2" ? setn2(true) : e.currentTarget.id == "n3" ? setn3(true) : e.currentTarget.id == "n4" ? setn4(true) : e.currentTarget.id == "n5" ? setn5(true) : e.currentTarget.id == "n6" ? setn6(true) : ""
  }

  return (
    <div id='main' onMouseLeave={(e) => nav(e)} style={{ fontFamily: "'Raleway', sans-serif" }} className='bg-white flex h-[7vw] text-[1.1vw] items-center px-[2vw] drop-shadow-xl fixed top-0 z-50 text-[#333333] w-full'>

      {/* logo */}

      <div className='w-[15vh] md:w-[22vw] '>
        <img src='/logo.png' alt='logo' />
      </div>

      {/* navbar */}

      <div className='flex w-5/6  justify-end gap-[5vw] '>
        <div id='n1' onMouseEnter={(e) => nav(e)} className=''><span className='hover:text-orange-400 transition-all duration-300 cursor-pointer  flex gap-[0.5vw] items-center hover:font-bold'>About <BsChevronDown /></span>
          {n1 && <ul onMouseLeave={() => setn1(false)} className='absolute drop-shadow-xl border-t-[0.2vw] border-orange-400 w-1/6 top-[7vw] bg-white'>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]'>Company Overview</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]'>Our Leadership</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]'>Cooperate Governance</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]'>Code of Ethecis</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]'>Awards and Accolades</li>
          </ul>}
        </div>
        <div id='n2' onMouseEnter={(e) => nav(e)}><span className='hover:text-orange-400 transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center hover:font-bold '>Products & Solutions <BsChevronDown /></span>
          {n2 && <ul onMouseLeave={() => setn2(false)} className='absolute drop-shadow-xl border-t-[0.2vw] border-orange-400 top-[7vw] bg-white w-1/6'>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>E-Rickshaw</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Batteries</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Solar Batteries</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>E-Rickshaw Batteries</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Automative Batteries</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Inverter Batteries</li>
          </ul>}
        </div>
        <div id='n3' onMouseEnter={(e) => nav(e)}><span className='hover:text-orange-400 transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center hover:font-bold '>Investors <BsChevronDown /></span>
          {n3 && <ul onMouseLeave={() => setn3(false)} className='absolute drop-shadow-xl border-t-[0.2vw] border-orange-400 top-[7vw] bg-white w-1/6'>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Announcement</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Company Policy</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Right Issue</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Notice of Record date & BM</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Financials</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Share Holding Pattern</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Annual Report</li>
          </ul>}
        </div>
        <div id='n4' onMouseEnter={(e) => nav(e)}><span className='hover:text-orange-400 transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center hover:font-bold '>Electric Vehicles</span>

        </div>
        <div id='n5' onMouseEnter={(e) => nav(e)}><span className='hover:text-orange-400 transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center hover:font-bold '>Projects </span>

        </div>
        <div id='n6' onMouseEnter={(e) => nav(e)}><span className='hover:text-orange-400 transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center hover:font-bold '>Contact </span>

        </div>

      </div>

      {/* sidebar */}

      <div  className='fixed bg-[#444444] text-orange-400 h-[10vw] w-[3vw] top-[40vh] right-0 hover:w-[15vw] transition-all duration-300 overflow-hidden drop-shadow-md'>
        <div className='border-b h-1/3 border-gray-500 flex items-center justify-between px-[1vw] hover:cursor-pointer w-[15vw] '><span>Post a Query</span><BsFillPersonFill className='text-[1.5vw]'/></div>
        <div className='border-b h-1/3 border-gray-500 flex items-center justify-between px-[1vw] hover:cursor-pointer w-[15vw] '><span>8000500789</span><BsFillTelephoneFill className='text-[1.5vw]'/></div>
        <div className='border-b h-1/3 border-gray-500 flex items-center justify-between px-[1vw] hover:cursor-pointer w-[15vw] '>
          <span className='flex gap-[0.8vw]'>
            <AiOutlineTwitter />
            <FaLinkedinIn />
            <FaFacebookF />
            <TfiYoutube />
          </span>
          <FaShareAlt className='text-[1.5vw]'/>
        </div>
      </div>

    </div>
  )
}

export default Navbar
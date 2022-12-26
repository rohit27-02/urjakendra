/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react'
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
  const [s1, sets1] = useState(false);
  const [s2, sets2] = useState(false);

  const nav = (e) => {
    setn1(false)
    setn2(false)
    setn3(false)
    setn4(false)
    setn5(false)
    e.currentTarget.id == "n1" ? setn1(true) : e.currentTarget.id == "n2" ? setn2(true) : e.currentTarget.id == "n3" ? setn3(true) : e.currentTarget.id == "n4" ? setn4(true) : e.currentTarget.id == "n5" ? setn5(true) : ""
  }
  const sub = (e) => {
    sets1(false)
    sets2(false)
    e.currentTarget.id == "s1" ? sets1(true) : e.currentTarget.id == "s2" ? sets2(true) : "";
  }

  const ref = useRef();
  return (
    <div id='main' onMouseLeave={(e) => nav(e)} style={{ fontFamily: "'Raleway', sans-serif" }} className='bg-white flex h-[7vw] text-[1.1vw] items-center px-[2vw] drop-shadow-xl fixed top-0 z-50 text-[#333333] w-full'>

      {/* logo */}

      <div className='w-[15vh] md:w-[22vw] '>
        <img src='/logo.png' alt='logo' />
      </div>

      {/* navbar */}

      <div className='flex w-5/6  justify-end gap-[5vw] '>
        <div id='n1' onMouseEnter={(e) => nav(e)} className=''><span className='hover:text-orange-400 transition-all duration-300 cursor-pointer  flex gap-[0.5vw] items-center '>About <BsChevronDown /></span>
          {n1 && <ul onMouseLeave={() => setn1(false)} className='absolute drop-shadow-xl border-t-[0.2vw] border-orange-400 w-[15vw] top-[7vw] bg-white'>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]'>Company Overview</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]'>Our Leadership</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]'>Coporate Governance</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]'>Code of Ethics</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]'>Awards and Accolades</li>
          </ul>}
        </div>
        <div id='n2' onMouseEnter={(e) => nav(e)}><span className='hover:text-orange-400 transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center  '>Products & Solutions <BsChevronDown /></span>
          {n2 && <ul onMouseLeave={() => setn2(false)} className='absolute drop-shadow-xl border-t-[0.2vw] border-orange-400 top-[7vw] bg-white w-[15vw]'>
            <li id='s1' onMouseLeave={() => sets1(false)} onMouseEnter={(e) => sub(e)} className='p-[1vw] hover:text-orange-400 hover: cursor-pointer relative transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Batteries
              {s1 && <span onMouseLeave={() => sets1(false)} className='flex flex-col absolute top-0 drop-shadow-xl w-[12vw] left-[15.03vw] text-[#333333] bg-white  '>
                <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]'>E-Rickshaw</span>
                <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]'>Inverter Batteries</span>
                <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]'>Solar Battery</span>
              </span>}
            </li>
            <li id='s2' onMouseLeave={() => sets2(false)} onMouseEnter={(e) => sub(e)} className='p-[1vw] relative hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Electric Vehicles
              {s2 && <span onMouseLeave={() => sets2(false)} className='flex flex-col absolute top-0 drop-shadow-xl w-[12vw] left-[15.03vw] text-[#333333] bg-white  '>
                <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]'>Scooty</span>
                <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]'>E-Rickshaw</span>
                <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]'>Loader</span>
              </span>}
            </li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Charging Station</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Solar Projects</li>
          </ul>}
        </div>
        <div id='n3' onMouseEnter={(e) => nav(e)}><span className='hover:text-orange-400 transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center  '>Urja Care <BsChevronDown /></span>
          {n3 && <ul onMouseLeave={() => setn3(false)} className='absolute drop-shadow-xl border-t-[0.2vw] border-orange-400 top-[7vw] bg-white w-[15vw]'>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Book a complaint</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Register your Product</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Warranty</li>
          </ul>}
        </div>
        <div id='n4' onMouseEnter={(e) => nav(e)}><span className='hover:text-orange-400 transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center  '>Presence <BsChevronDown /></span>
          {n4 && <ul onMouseLeave={() => setn3(false)} className='absolute drop-shadow-xl border-t-[0.2vw] border-orange-400 top-[7vw] bg-white w-[15vw]'>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Our Network</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Dealer Zone</li>
          </ul>}
        </div>
        <div id='n5' onMouseEnter={(e) => nav(e)}><span className='hover:text-orange-400 transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center  '>Carrers <BsChevronDown /></span>
          {n5 && <ul onMouseLeave={() => setn3(false)} className='absolute drop-shadow-xl border-t-[0.2vw] border-orange-400 top-[7vw] bg-white w-[15vw]'>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Freshers</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Experienced Professional</li>
          </ul>}
        </div>

        <div><span className='hover:text-orange-400 transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center  '>Contact Us</span></div>

      </div>

      {/* sidebar */}

      <div onMouseEnter={() => { ref.current.classList.remove("translate-x-[100%]") }} className='fixed bg-[#444444] text-[1.5vw] text-orange-400 h-[10vw] w-[3vw] top-[40vh] right-0 transition-all z-20 duration-300 overflow-hidden '>
        <div className='border-b h-1/3 border-gray-500 flex items-center justify-center cursor-pointer'><BsFillPersonFill /></div>
        <div className='border-b h-1/3 border-gray-500 flex items-center justify-center cursor-pointer'><BsFillTelephoneFill /></div>
        <div className=' h-1/3 border-gray-500 flex items-center justify-center cursor-pointer'><FaShareAlt /></div>
      </div>

      <div ref={ref} onMouseLeave={() => ref.current.classList.add("translate-x-[100%]")} className='fixed translate-x-[100%] bg-[#444444] text-orange-400 h-[10vw] w-[15vw]  top-[40vh] right-0 transition-all duration-500 ease-out overflow-hidden drop-shadow-md'>
        <div className='hover:text-white border-b h-1/3 border-gray-500 flex items-center justify-between px-[1vw] cursor-pointer'><span>Post a Query</span></div>
        <div className='hover:text-white border-b h-1/3 border-gray-500 flex items-center justify-between px-[1vw] cursor-pointer'><span>8000500789</span></div>
        <div className=' h-1/3 border-gray-500 flex items-center justify-between px-[1vw] text-[1.5vw] cursor-pointer'>
          <span className='flex gap-[0.8vw]'>
            <AiOutlineTwitter className='hover:text-white' />
            <FaLinkedinIn className='hover:text-white' />
            <FaFacebookF className='hover:text-white' />
            <TfiYoutube className='hover:text-white' />
          </span>
        </div>
      </div>

    </div>
  )
}

export default Navbar
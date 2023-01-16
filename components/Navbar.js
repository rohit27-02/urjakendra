/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react'
import { BsChevronDown } from "react-icons/bs"
import "animate.css";
import { TfiYoutube } from 'react-icons/tfi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import Router from 'next/router';
import Hamburger from 'hamburger-react'

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [sw, setsw] = useState(false);
  useEffect(() => {
    if (screen.width < 768) {
      setsw(true)
    }
  }, []);
  const [n1, setn1] = useState(false);
  const [n2, setn2] = useState(false);
  const [n3, setn3] = useState(false);
  const [n4, setn4] = useState(false);
  const [n5, setn5] = useState(false);
  const [n6, setn6] = useState(false);
  const [s1, sets1] = useState(false);
  const [s2, sets2] = useState(false);

  const nav = (e) => {
    setn1(false)
    setn2(false)
    setn3(false)
    setn4(false)
    setn5(false)
    setn6(false)
    e.currentTarget.id == "n1" ? setn1(true) : e.currentTarget.id == "n2" ? setn2(true) : e.currentTarget.id == "n3" ? setn3(true) : e.currentTarget.id == "n4" ? setn4(true) : e.currentTarget.id == "n5" ? setn5(true) : e.currentTarget.id == "n6" ? setn6(true) : ""
  }
  const sub = (e) => {
    sets1(false)
    sets2(false)
    e.currentTarget.id == "s1" ? sets1(true) : e.currentTarget.id == "s2" ? sets2(true) : "";
  }

  const ref = useRef();
  return (
    <div>
    <div id='main' onMouseLeave={(e) => nav(e)} style={{ fontFamily: "'Raleway', sans-serif" }} className='bg-orange-500 text-white flex md:h-[7vw] h-[8vh] text-base items-center px-[2vw] drop-shadow-xl fixed top-0 z-50  w-full'>

      {/* logo */}

      {!sw && <div className=' w-[22vw]'>
        <img onClick={() => Router.push("/")} src='/logo.png' className='cursor-pointer' alt='logo' />
      </div>}

      {/* navbar */}

      {sw ? <div className='flex justify-between w-full '>

        <div><img onClick={()=>Router.push("/")} alt='logo' className='h-[6vh] ' src='/logo.png' /> </div>
        <Hamburger toggled={isOpen} toggle={setisOpen} />

      </div> : <div className='flex w-5/6  justify-end gap-[3vw] '>
        <div id='n1' onMouseEnter={(e) => nav(e)} className=''><span className=' transition-all duration-300 cursor-pointer  flex gap-[0.5vw] items-center '>About <BsChevronDown /></span>
          {n1 && <ul onMouseLeave={() => setn1(false)} className='absolute drop-shadow-xl border-t-[0.2vw] border-orange-400 text-[#333333] w-[15vw] top-[7vw] bg-white'>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/company-overview")}>Company Overview</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/our-leadership")}>Our Leadership</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/corporate-governance")}>Corporate Governance</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/company-overview")}>Code of Ethics</li>
          </ul>}
        </div>
        <div id='n2' onMouseEnter={(e) => nav(e)}><span className=' transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center  '>Products & Solutions <BsChevronDown /></span>
          {n2 && <ul onMouseLeave={() => setn2(false)} className='absolute drop-shadow-xl border-t-[0.2vw] text-[#333333] border-orange-400 top-[7vw] bg-white w-[15vw]'>
            <li id='s1' onMouseLeave={() => sets1(false)} onMouseEnter={(e) => sub(e)} className=' hover:text-orange-400 hover: cursor-pointer relative transition-all duration-300 border-b hover:bg-[#f9f9f9] p-[1vw] hover:pl-[1.5vw]' ><span onClick={() => Router.push("/batteries")} className=" ">Batteries</span>
              {s1 && <span onMouseLeave={() => sets1(false)} className='flex flex-col absolute top-0 drop-shadow-xl w-[12vw] left-[15.03vw] text-[#333333] bg-white  '>
                <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]' onClick={() => Router.push("/E-rickshaw-battery")}>E-Rickshaw</span>
                <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]' onClick={() => Router.push("/Inverter-battery")}>Inverter Batteries</span>
                <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]' onClick={() => Router.push("/Solar-battery")}>Solar Battery</span>
              </span>}
            </li>
            <li id='s2' onMouseLeave={() => sets2(false)} onMouseEnter={(e) => sub(e)} className='p-[1vw] relative hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]'>Electric Vehicles
              {s2 && <span onMouseLeave={() => sets2(false)} className='flex flex-col absolute top-0 drop-shadow-xl  w-[12vw] left-[15.03vw] text-[#333333] bg-white  '>
                <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]' onClick={() => Router.push("/scooty")}>Scooty</span>
                <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]' onClick={() => Router.push("/e-rickshaw")}>E-Rickshaw</span>
                <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]' onClick={() => Router.push("/loader")}>Loader</span>
              </span>}
            </li>
          </ul>}
        </div>
        <div id='n6' onMouseEnter={(e) => nav(e)} className=''><span className=' transition-all duration-300 cursor-pointer  flex gap-[0.5vw] items-center '>Investors <BsChevronDown /></span>
          {n6 && <ul onMouseLeave={() => setn1(false)} className='absolute drop-shadow-xl border-t-[0.2vw] border-orange-400 text-[#333333] w-[15vw] top-[7vw] bg-white'>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/announcement/1")}>Announcements</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/company-policy")}>Company Policy</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/right-issue")}>Right Issue</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/notice-of-record-date-&-BM")}>Notices of Records Date & BM</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/financials")}>Financials</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/share-holding-pattern")}>Share Holding Pattern</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/corporate-governance-report/1")}>Corporate Governance</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/Annual-report/1")}>Annual Report</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/contact-information")}>Contact Information</li>
          </ul>}
        </div>
        <div id='n3' onMouseEnter={(e) => nav(e)}><span className=' transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center  '>Urja Care <BsChevronDown /></span>
          {n3 && <ul onMouseLeave={() => setn3(false)} className='absolute drop-shadow-xl border-t-[0.2vw] text-[#333333] border-orange-400 top-[7vw] bg-white w-[15vw]'>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]' onClick={() => Router.push("/book-a-complaint")}>Book a complaint</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]' onClick={() => Router.push("/product-registration")}>Register your Product</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]' onClick={() => Router.push("/book a complaint")}>Warranty</li>
          </ul>}
        </div>
        <div id='n4' onMouseEnter={(e) => nav(e)}><span className=' transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center  '>Presence <BsChevronDown /></span>
          {n4 && <ul onMouseLeave={() => setn3(false)} className='absolute drop-shadow-xl border-t-[0.2vw] text-[#333333] border-orange-400 top-[7vw] bg-white w-[15vw]'>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]' onClick={() => Router.push("/our-network")}>Our Network</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]' onClick={() => Router.push("/dealer-zone")}>Dealer Zone</li>
          </ul>}
        </div>
        <div id='n5' onMouseEnter={(e) => nav(e)}><span className=' transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center  '>Carrers <BsChevronDown /></span>
          {n5 && <ul onMouseLeave={() => setn3(false)} className='absolute drop-shadow-xl border-t-[0.2vw] text-[#333333] border-orange-400 top-[7vw] bg-white w-[15vw]'>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]' onClick={() => Router.push("/freshers")}>Freshers</li>
            <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]' onClick={() => Router.push("/experienced-professional")}>Experienced Professional</li>
          </ul>}
        </div>

        <div><span className=' transition-all duration-300 cursor-pointer flex gap-[0.5vw] items-center  ' onClick={() => Router.push("/contact-us")}>Contact Us</span></div>

      </div>}

     


      {/* sidebar */}

      <div  onPointerEnter={() => { ref.current.classList.remove("translate-x-[100%]") }} className='fixed bg-gray-200 text-lg md:text-[1.5vw] text-orange-400 h-[18vh] md:h-[14vw] w-[5vh] md:w-[3vw] top-[60vw] md:top-[40vh] right-0 transition-all z-20 duration-300 overflow-hidden '>
        <div className='border-b h-1/4 border-gray-500 flex items-center justify-center cursor-pointer '><img className='w-[2.4vh] md:w-[2.4vw]' src="https://img.icons8.com/office/60/null/gender-neutral-user.png" /></div>
        <div className='border-b h-1/4 border-gray-500 flex items-center justify-center cursor-pointer '><img className='w-[2.4vh] md:w-[2.4vw]' src="https://img.icons8.com/plasticine/100/null/ringer-volume.png" /></div>
        <div className='border-b h-1/4 border-gray-500 flex items-center justify-center cursor-pointer '><img className='w-[2.4vh] md:w-[2.4vw]' src="https://img.icons8.com/fluency/96/null/database-mail.png" /></div>
        <div className=' h-1/4 border-gray-500 flex items-center justify-center cursor-pointer'><img className='w-[2.4vh] md:w-[2.4vw]' src="https://img.icons8.com/nolan/64/share-2.png" /></div>
      </div>

      <div ref={ref} onPointerLeave={() => ref.current.classList.add("translate-x-[100%]")} className='fixed translate-x-[100%] bg-gray-200 text-gray-800 font-semibold h-[18vh] md:h-[14vw] w-[20vh] md:w-[17vw] top-[60vw] md:top-[40vh] right-0 transition-all duration-500 ease-out overflow-hidden drop-shadow-md'>
        <div className='hover:text-black hover:font-bold border-b h-1/4 border-gray-500 flex items-center justify-between px-[1vh] md:px-[1vw] cursor-pointer'><span>Post a Query</span></div>
        <div className='hover:text-black hover:font-bold border-b h-1/4 border-gray-500 flex items-center justify-between px-[1vh] md:px-[1vw] font-sans tracking-widest cursor-pointer'><span>8000500789</span></div>
        <div className='hover:text-black hover:font-bold border-b h-1/4 border-gray-500 flex items-center justify-between px-[1vh] md:px-[1vw] cursor-pointer'><span>Urjacare@urjaglobal.in</span></div>
        <div className=' h-1/4 border-gray-500 flex items-center justify-between px-[1vh] md:px-[1vw] text-lg md:text-[1.5vw] cursor-pointer'>
          <span className='flex gap-[0.8vh] md:gap-[0.8vw]'>
            <AiOutlineTwitter className='hover:text-black hover:font-bold' />
            <FaLinkedinIn className='hover:text-black hover:font-bold' />
            <FaFacebookF className='hover:text-black hover:font-bold' />
            <TfiYoutube className='hover:text-black hover:font-bold' />
          </span>
        </div>
      </div>

    </div>
     {
      isOpen && <div className='flex w-2/3 flex-col top-[8vh] h-full pt-[3vh] drop-shadow z-50 fixed bg-white px-6 [&>*]:pb-2 [&>*]:border-b-2 gap-[3vh] md:gap-[3vw] '>
      <div id='n1' onMouseEnter={(e) => nav(e)} className=''><span className=' transition-all duration-300 cursor-pointer  flex gap-4 font-semibold  md:gap-[0.5vw] items-center '>About <BsChevronDown /></span>
        {n1 && <ul onMouseLeave={() => setn1(false)} className='  border-t-[0.2vw] border-orange-400 text-[#333333]  top-[7vh] bg [&>*]:pl-2-white'>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/company-overview")}>Company Overview</li>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/our-leadership")}>Our Leadership</li>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/corporate-governance")}>Corporate Governance</li>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300  hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/company-overview")}>Code of Ethics</li>
        </ul>}
      </div>
      <div id='n2' onMouseEnter={(e) => nav(e)}><span className=' transition-all duration-300 cursor-pointer flex gap-4 font-semibold  md:gap-[0.5vw] items-center  '>Products & Solutions <BsChevronDown /></span>
        {n2 && <ul onMouseLeave={() => setn2(false)} className='  border-t-[0.2vw] text-[#333333] border-orange-400 top-[7vw] [&>*]:pl-2 bg-white '>
          <li id='s1' onMouseLeave={() => sets1(false)} onMouseEnter={(e) => sub(e)} className=' hover:text-orange-400 hover: cursor-pointer relative transition-all duration-300 border-b  p-[1vw] hover:pl-[1.5vw]' ><span onClick={() => Router.push("/batteries")} className=" "><span className='flex items-center gap-4'>Batteries <BsChevronDown /></span></span>
            {s1 && <span onMouseLeave={() => sets1(false)} className='flex flex-col  top-0 [&>*]:ml-2  text-[#333333]   '>
              <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]' onClick={() => Router.push("/E-rickshaw-battery")}>E-Rickshaw</span>
              <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]' onClick={() => Router.push("/Inverter-battery")}>Inverter Batteries</span>
              <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300  hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]' onClick={() => Router.push("/Solar-battery")}>Solar Battery</span>
            </span>}
          </li>
          <li id='s2' onMouseLeave={() => sets2(false)} onMouseEnter={(e) => sub(e)} className='p-[1vw] relative hover:text-orange-400 hover: cursor-pointer  transition-all duration-300  hover:pl-[1.5vw]'><span className='flex items-center gap-4'>Electric Vehicles<BsChevronDown /></span>
            {s2 && <span onMouseLeave={() => sets2(false)} className='flex flex-col  top-0  [&>*]:ml-2  text-[#333333]   '>
              <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]' onClick={() => Router.push("/scooty")}>Scooty</span>
              <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]' onClick={() => Router.push("/e-rickshaw")}>E-Rickshaw</span>
              <span className='hover:text-orange-400 hover:cursor-pointer transition-all duration-300 hover:bg-[#f9f9f9] hover:pl-[1.5vw] p-[1vw]' onClick={() => Router.push("/loader")}>Loader</span>
            </span>}
          </li>
        </ul>}
      </div>
      <div id='n6' onMouseEnter={(e) => nav(e)} className=''><span className=' transition-all duration-300 cursor-pointer  flex gap-4 font-semibold  md:gap-[0.5vw] items-center '>Investors <BsChevronDown /></span>
        {n6 && <ul onMouseLeave={() => setn1(false)} className='  border-t-[0.2vw] border-orange-400 text-[#333333]  top-[7vw] bg [&>*]:pl-2-white'>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/announcement/1")}>Announcements</li>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/company-policy")}>Company Policy</li>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/right-issue")}>Right Issue</li>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/notice-of-record-date-&-BM")}>Notices of Records Date & BM</li>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/financials")}>Financials</li>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/share-holding-pattern")}>Share Holding Pattern</li>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/corporate-governance-report/1")}>Corporate Governance</li>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/Annual-report/1")}>Annual Report</li>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300  hover:bg-[#f9f9f9] hover:pl-[1.5vw]' onClick={() => Router.push("/contact-information")}>Contact Information</li>
        </ul>}
      </div>
      <div id='n3' onMouseEnter={(e) => nav(e)}><span className=' transition-all duration-300 cursor-pointer flex gap-4 font-semibold  md:gap-[0.5vw] items-center  '>Urja Care <BsChevronDown /></span>
        {n3 && <ul onMouseLeave={() => setn3(false)} className='  border-t-[0.2vw] text-[#333333] border-orange-400 top-[7vw] [&>*]:pl-2 bg-white '>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]' onClick={() => Router.push("/book-a-complaint")}>Book a complaint</li>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]' onClick={() => Router.push("/product-registration")}>Register your Product</li>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300  hover:bg-[#f9f9f9]  hover:pl-[1.5vw]' onClick={() => Router.push("/book a complaint")}>Warranty</li>
        </ul>}
      </div>
      <div id='n4' onMouseEnter={(e) => nav(e)}><span className=' transition-all duration-300 cursor-pointer flex gap-4 font-semibold  md:gap-[0.5vw] items-center  '>Presence <BsChevronDown /></span>
        {n4 && <ul onMouseLeave={() => setn3(false)} className='  border-t-[0.2vw] text-[#333333] border-orange-400 top-[7vw] [&>*]:pl-2 bg-white '>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]' onClick={() => Router.push("/our-network")}>Our Network</li>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300  hover:bg-[#f9f9f9]  hover:pl-[1.5vw]' onClick={() => Router.push("/dealer-zone")}>Dealer Zone</li>
        </ul>}
      </div>
      <div id='n5' onMouseEnter={(e) => nav(e)}><span className=' transition-all duration-300 cursor-pointer flex gap-4 font-semibold  md:gap-[0.5vw] items-center  '>Carrers <BsChevronDown /></span>
        {n5 && <ul onMouseLeave={() => setn3(false)} className='  border-t-[0.2vw] text-[#333333] border-orange-400 top-[7vw] [&>*]:pl-2 bg-white '>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300 border-b hover:bg-[#f9f9f9]  hover:pl-[1.5vw]' onClick={() => Router.push("/freshers")}>Freshers</li>
          <li className='p-[1vw] hover:text-orange-400 hover: cursor-pointer  transition-all duration-300  hover:bg-[#f9f9f9]  hover:pl-[1.5vw]' onClick={() => Router.push("/experienced-professional")}>Experienced Professional</li>
        </ul>}
      </div>

      <div><span className=' transition-all duration-300 cursor-pointer flex gap-4 font-semibold  md:gap-[0.5vw] items-center  ' onClick={() => Router.push("/contact-us")}>Contact Us</span ></div>

    </div>
    }
    </div>
  )
}

export default Navbar
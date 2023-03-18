/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import Router from 'next/router'
const Dealerzone = () => {
  return (
    <div className='mt-[8vh] md:mt-[6.9vw] text-xl md:text-3xl w-5/6 md:w-4/6 mx-auto'>
      <div className=' flex items-center text-orange-500 text-xl md:text-4xl justify-between py-[4vh] md:py-[4vw]  font-bold w-full'>
        <div className='border-b-2 w-14 md:w-80 border-orange-500'></div>
        <span>BE OUR DEALER</span>
        <div className='border-b-2 w-14 md:w-80 border-orange-500'></div>
      </div>
      <div className='drop-shadow-xl'>
        <img src='https://www.netscribes.com/wp-content/uploads/2019/06/Technology-Watch.jpg' alt='banner-image' />
        <div className='border-b-4 w-[5vh] md:w-[5vw] -mt-[2.5vh] md:-mt-[2.5vw] border-white mx-auto rotate-90'></div>
        <div className='border-b-4 w-[5vh] md:w-[5vw] rotate-90 mt-[4.5vh] md:mt-[4.5vw] mx-auto border-orange-500'></div>
      </div>
      <div className='my-[4vh] md:my-[4vw] uppercase font-medium text-center'>
        {/* <h1>Want to Become a Dealer ?</h1> */}
        <div className='w-[25vh] md:w-[20vw] mt-[3vh] md:mt-[3vw] flex items-center rounded-md border overflow-hidden cursor-pointer group mx-auto' onClick={()=>Router.push("/contact-us")}>
          <div className='md:text-base text-sm w-4/6 bg-orange-500 h-full p-[4vh] md:p-[3vw] relative  rounded-l-md text-white font-bold'>
            <span className='z-10 absolute top-[32%] md:top-[38%] left-[8%] md:left-[20%]'>GET IN TOUCH</span>
            <span className='absolute w-0 h-full rounded-l-md bg-black group-hover:w-full left-0 top-0  transition-all duration-300 ease-linear'></span></div>
          <BsFillArrowRightCircleFill className='w-2/6 group-hover:text-black transition-all duration-300 ease-in-out text-orange-500' />
        </div>
      </div>
    </div>
  )
}

export default Dealerzone
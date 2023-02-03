/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Banner from "../components/Banner"
const Events = () => {
  return (
    <div className='bg-gray-50'>
      <Banner pic="/1.png"/>
      <div>
      <h1 className='text-5xl md:text-6xl font-bold text-center w-fit mx-auto mt-14 md:mt-24 mb-14'><span >LATEST NEWS</span><br></br> <span className='text-orange-500' style={{ fontFamily: "'Montez',cursive" }}>Our Events</span></h1>
      <div className='flex justify-center pb-40 gap-10 '>
        <div className='w-[500px]  h-auto overflow-hidden'>
          <img src='https://www.vyomaexim.com/img/blog/1.jpg' className='hover:scale-110  transition-all  duration-200 ease-linear'/>
          <div className='bg-white text-center drop-shadow-sm  cursor-pointer w-[90%] h-[200px] -my-10 mx-auto'>
            <h1 className='text-2xl pt-10 font-bold'>SMART HOME EXPO 2022</h1>
            <h1 className='text-lg mt-5 hover:no-underline  underline text-orange-500 underline-offset-4 '>GALLERY</h1>
          </div>
        </div>
        <div className='w-[500px]  h-auto overflow-hidden'>
          <img src='https://www.vyomaexim.com/img/blog/1.jpg' className='hover:scale-110  transition-all  duration-200 ease-linear'/>
          <div className='bg-white text-center drop-shadow-sm w-[90%] cursor-pointer h-[200px] -my-10 mx-auto'>
            <h1 className='text-sm pt-10 font-light text-orange-500'>UPCOMING &emsp; EVENTS</h1>
            <h1 className='text-2xl pt-5 font-bold'>SMART HOME EXPO 2022</h1>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Events
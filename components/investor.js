/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react'
import { FaFileDownload, FaEye } from "react-icons/fa"

const Investor = ({ pdfs, folder}) => {
  return (
    <div style={{ fontFamily: "'Raleway', sans-serif" }} className=''>

      <div className='py-[2vh] md:py-[2vw] '>
        <div className='h-[5vh] md:h-[4vw] w-[88vw] text-lg md:text-[2vw] font-semibold pl-6 md:pl-[4vw] py-1 md:py-[0.5vw] mx-auto bg-orange-500 text-white'>{folder}</div>
        
        <div className='flex flex-col md:flex-row md:flex-wrap  w-[88vw] gap-[1vh] md:gap-[1vw] py-[2vh] md:py-[2vw] shadow-lg mx-auto px-4 md:pl-[5vw] pt-[2vh] md:pt-[2vw] relative'>
          
          {pdfs.map((pdf) => {
            return <div key={pdf} className='flex relative items-center justify-between p-[2vh] md:p-[1vw] w-full  md:w-[30%]  bg-gray-100'>
              <img className='h-4 md:h-7' src='/pdf_icon.png' alt='icon' />
              <h1 className='ml-[1vh] text-xs md:ml-[1vw] font-semibold capitalize mr-[3vh] md:mr-[3vw] w-[80%] overflow-hidden'>{pdf}</h1>
              <div className=''>
                <a href={"/" + folder + "/" + pdf}><FaEye className='bg-orange-500 text-white h-4 md:h-7 w-auto p-[0.5vw] mb-2 md:mb-[1vw]' /></a>
                <a href={"/" + folder + "/" + pdf} download><FaFileDownload className='bg-green-500 text-white h-4 md:h-7 w-auto p-[0.5vw] mt-2 md:mt-[1vw]' /></a>
              </div>
            </div>
          })}
        </div>

      </div>
    </div>
  )
}

export default Investor


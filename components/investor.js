/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react'
import {FaFileDownload,FaEye} from "react-icons/fa"

const Investor = ({ pdfs ,folder}) => {
  
  return (
    <div style={{ fontFamily: "'Raleway', sans-serif" }} className=''>
      
      <div className='py-[3vw] '>
          <div className='h-[4vw] w-[88vw] text-[2vw] font-semibold pl-[4vw] py-[0.5vw] mx-auto bg-orange-500 text-white'>{folder}</div>
        <div className='flex flex-wrap  w-[88vw] gap-[1vw] py-[2vw] shadow-lg mx-auto pl-[5vw]'>
          {pdfs.map((pdf)=>{
            return <div key='pdf' className='flex relative items-center justify-between p-[1vw] w-[30%]  bg-gray-100'>
              <img className='h-[4vw]' src='/pdf_icon.png' alt='icon'/>
              <h1 className='ml-[1vw] capitalize mr-[3vw] w-1/2 overflow-hidden'>{pdf}</h1>
              <div className=''>
                <a  href={"/"+folder+"/"+pdf}><FaEye className='bg-orange-500 text-white h-[2.5vw] w-auto p-[0.5vw] mb-[1vw]'/></a>
                <a  href={"/"+folder+"/"+pdf} download><FaFileDownload className='bg-green-500 text-white h-[2.5vw] w-auto p-[0.5vw] mt-[1vw]'/></a>
              </div>
            </div>
          })}
        </div>

      </div>
    </div>
  )
}

export default Investor


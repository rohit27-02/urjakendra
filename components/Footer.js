import React from 'react'
import {TfiYoutube} from 'react-icons/tfi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div style={{ fontFamily: "'Raleway', sans-serif" }} className=' h-[36vw] bg-[#efefef] text-[1.25vw] pt-[3.2vw] w-full flex flex-col justify-between'>
    <div className='flex px-[5vw]'>
      <div className='flex flex-col w-1/4 px-[1.2vw]'>
        <div className='flex flex-col my-[1vw] gap-[0.2vw]'>
          <h1 className='text-orange-500 text-[1.1vw] font-bold'>About</h1>
          <span className='cursor-pointer '>Company Profile</span>
          <span className='cursor-pointer '>Our Leadership</span>
          <span className='cursor-pointer '>Coporate Governance</span>
          <span className='cursor-pointer '>Code of Ethics</span>
          <span className='cursor-pointer '>Awards and Accolades</span>
        </div>
        <div className='flex flex-col my-[1vw] gap-[0.2vw]'>
          <h1 className='text-orange-500 text-[1.1vw] font-bold'>Products & Solutions</h1>
          <span className='cursor-pointer '>Batteries</span>
          <span className='cursor-pointer '>Electric vehicles</span>
        </div>
      </div>
      <div className='flex flex-col w-1/4 px-[1.2vw]'>
        <div className='flex flex-col my-[1vw] gap-[0.2vw]'>
          <h1 className='text-orange-500 text-[1.1vw] font-bold'>Urja Care</h1>
          <span className='cursor-pointer '>Book a complaint</span>
          <span className='cursor-pointer '>Raise a Query</span>
          <span className='cursor-pointer '>Warranty</span>
        </div>
        <div className='flex flex-col my-[1vw] gap-[0.2vw]'>
          <h1 className='text-orange-500 text-[1.1vw] font-bold'>Investors</h1>
          <span className='cursor-pointer '>Announcements</span>
          <span className='cursor-pointer '>Company Policy</span>
          <span className='cursor-pointer '>Right Issue</span>
          <span className='cursor-pointer '>Notice of Records Date & BM</span>
          <span className='cursor-pointer '>Financials</span>
          <span className='cursor-pointer '>Share Holding Pattern</span>
          <span className='cursor-pointer '>Corporate Governance</span>
          <span className='cursor-pointer '>Annual Report</span>
          <span className='cursor-pointer '>Contact Information</span>
        </div>
      </div>
      <div className='flex flex-col w-1/4 px-[1.2vw]'>
        <div className='flex flex-col my-[1vw] gap-[0.2vw]'>
          <h1 className='text-orange-500 text-[1.1vw] font-bold'>Presence</h1>
          <span className='cursor-pointer '>Our Network</span>
          <span className='cursor-pointer '>Dealer Zone</span>
        </div>
        <div className='flex flex-col my-[1vw] gap-[0.2vw]'>
          <h1 className='text-orange-500 text-[1.1vw] font-bold'>Carrers</h1>
          <span className='cursor-pointer '>Freshers</span>
          <span className='cursor-pointer '>Experienced Professional</span>
        </div>
      </div>
      <div className='flex flex-col w-1/4 gap-[1vw] text-[1.1vw] px-[1.2vw]'>
        <div className='text-orange-500 font-bold'>
          <span className='cursor-pointer '>Follow Us</span>
          <div className='flex mt-[1vw] gap-[2vw]'>
          <AiOutlineTwitter/>
          <FaLinkedinIn/>
          <FaFacebookF/>
          <TfiYoutube/>
          </div>
        </div>
        <div>
          <span  className='cursor-pointer text-orange-500 font-bold '>Subscribe to our Newsletter</span>
          <div className='mt-[1vw]'>
            <input placeholder='enter your email' className='bg-white p-[0.4vw]'/>
            <button className='bg-orange-500 text-white ml-[0.8vw] drop-shadow-md px-[1vw] py-[0.5vw]'>Submit</button>
          </div>
        </div>
        <div>
          <div className='text-orange-500 font-bold'>Looking to buy a battery ?</div>
          <button>Quick Buy</button>
        </div>
      </div>
    </div>

    <div className='flex justify-center bg-orange-500 text-white font-medium py-[0.4vw] items-center'>
      All right reserved @ Urja Kendra pvt. ltd. 2022
    </div>
    </div>
  )
}

export default Footer
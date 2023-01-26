import React from 'react'
import {TfiYoutube} from 'react-icons/tfi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import Router from 'next/router'

const Footer = () => {
  return (
    <div style={{ fontFamily: "'Raleway', sans-serif" }} className=' md:h-[36vw] bg-[#efefef] text-sm pt-[3.2vh] md:pt-[3.2vw] w-full flex flex-col md:justify-between'>
    <div className='flex flex-col md:flex-row px-[2vh] md:px-[5vw]'>
      <div className='flex md:flex-col md:w-1/4 md:px-[1.2vw]'>
        <div className='flex flex-col my-[1vh] w-1/2 md:my-[1vw] gap-[0.2vh] md:gap-[0.2vw]'>
          <h1 className='text-orange-500 text-base font-bold'>About</h1>
          <span className='cursor-pointer ' onClick={()=>Router.push("/company-overview")}>Company Overview</span>
          <span className='cursor-pointer ' onClick={()=>Router.push("/our-leadership")}>Our Leadership</span>
          <span className='cursor-pointer ' onClick={()=>Router.push("/corporate-governance")}>Corporate Governance</span>
     
        </div>
        <div className='flex flex-col my-[1vh] w-1/2 md:my-[1vw] gap-[0.2vh] md:gap-[0.2vw]'>
          <h1 className='text-orange-500 text-base font-bold'>Products & Solutions</h1>
          <span className='cursor-pointer ' onClick={()=>Router.push("/batteries")}>Batteries</span>
          <span className='cursor-pointer ' onClick={()=>Router.push("/scooty")}>Electric vehicles</span>
        </div>
      </div>
      <div className='flex md:flex-col  md:w-1/4 px-[1.2vw]'>
        <div className='flex flex-col my-[1vh] w-1/2 md:my-[1vw]  gap-[0.2vh] md:gap-[0.2vw]'>
          <h1 className='text-orange-500 text-base font-bold'>Urja Care</h1>
          <span className='cursor-pointer ' onClick={()=>Router.push("/book-a-complaint")}>Book a complaint</span>
          <span className='cursor-pointer ' onClick={()=>Router.push("/product-registration")}>Product Registration</span>

        </div>
        <div className='flex flex-col my-[1vh] w-1/2 md:my-[1vw]  gap-[0.2vh] md:gap-[0.2vw]'>
          <h1 className='text-orange-500 text-base font-bold'>Investors</h1>
          <span className='cursor-pointer ' onClick={()=>Router.push("/announcement/1")}>Announcements</span>
          <span className='cursor-pointer ' onClick={()=>Router.push("/company-policy")}>Company Policy</span>
          <span className='cursor-pointer ' onClick={()=>Router.push("/right-issue")}>Right Issue</span>
          <span className='cursor-pointer ' onClick={()=>Router.push("/notice-of-record-date-&-BM")}>Notice of Records Date & BM</span>
          <span className='cursor-pointer ' onClick={()=>Router.push("/financials")}>Financials</span>
          <span className='cursor-pointer ' onClick={()=>Router.push("/share-holding-pattern")}>Share Holding Pattern</span>
          <span className='cursor-pointer ' onClick={()=>Router.push("/corporate-governance-report/1")}>Corporate Governance</span>
          <span className='cursor-pointer ' onClick={()=>Router.push("/Annual-report/1")}>Annual Report</span>
          <span className='cursor-pointer ' onClick={()=>Router.push("/contact-information")}>Contact Information</span>
        </div>
      </div>
      <div className='flex md:flex-col md:w-1/4 px-[1.2vw]'>
        <div className='flex flex-col w-1/2 my-[1vh] md:my-[1vw]  gap-[0.2vh] md:gap-[0.2vw]'>
          <h1 className='text-orange-500 text-base font-bold'>Presence</h1>
          <span className='cursor-pointer ' onClick={()=>Router.push("/our-network")}>Our Network</span>
          <span className='cursor-pointer ' onClick={()=>Router.push("/dealer-zone")}>Dealer Zone</span>
        </div>
        <div className='flex flex-col my-[1vh] w-1/2 md:my-[1vw]  gap-[0.2vh] md:gap-[0.2vw]'>
          <h1 className='text-orange-500 text-base font-bold'>Carrers</h1>
          <span className='cursor-pointer ' onClick={()=>Router.push("/freshers")}>Freshers</span>
          <span className='cursor-pointer ' onClick={()=>Router.push("/experienced-professional")}>Experienced Professional</span>
        </div>
      </div>
      <div className='flex flex-col md:w-1/4 gap-4 md:gap-[1vw] text-base md:px-[1.2vw]'>
        <div className='text-orange-500 font-bold'>
          <div className='cursor-pointer mt-3'>Follow Us</div>
          <div className='flex mt-4 md:mt-[1vw] gap-6 md:gap-[2vw]'>
          <AiOutlineTwitter/>
          <FaLinkedinIn/>
          <FaFacebookF/>
          <TfiYoutube/>
          </div>
        </div>
        <div>
          <span  className='cursor-pointer text-orange-500 font-bold '>Subscribe to our Newsletter</span>
          <div className='mt-[1vh] md:mt-[1vw] flex'>
            <input placeholder='enter your email' className='bg-white p-2 md:p-[0.4vw]'/>
            <button className='bg-orange-500 text-white ml-6 md:ml-[0.8vw] drop-shadow-md px-4 md:px-[1vw] py-2 md:py-[0.5vw]'>Submit</button>
          </div>
        </div>
        <div>
          <div className='text-orange-500 font-bold'>Looking to buy a battery ?</div>
          <button>Quick Buy</button>
        </div>
      </div>
    </div>

    <div className='flex justify-center bg-orange-500 mt-7 md:mt-0 text-white font-medium py-4 w-full md:py-[0.4vw] items-center'>
      All right reserved @ Urja Kendra pvt. ltd. 2022
    </div>
    </div>
  )
}

export default Footer
import React from 'react'
import {TfiYoutube} from 'react-icons/tfi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='h-[36vw] bg-[#efefef] text-[1.25vw] pt-[3.2vw] w-full flex flex-col justify-between'>
    <div className='flex px-[5vw]'>
      <div className='flex flex-col w-1/4 px-[1.2vw]'>
        <div className='flex flex-col my-[1vw] gap-[0.2vw]'>
          <h1 className='text-orange-400 text-[1.1vw] font-bold'>About</h1>
          <span>Company Profile</span>
          <span>Manufacturing Facilities</span>
          <span>Group Companies</span>
        </div>
        <div className='flex flex-col my-[1vw] gap-[0.2vw]'>
          <h1 className='text-orange-400 text-[1.1vw] font-bold'>Products</h1>
          <span>Inverter Batteries</span>
          <span>Solar Batteries</span>
          <span>EV Lithium Ion Batteries</span>
          <span>E-Rickshaw Batteries</span>
          <span>Nasaka</span>
          <span>Lithium</span>
        </div>
      </div>
      <div className='flex flex-col w-1/4 px-[1.2vw]'>
        <div className='flex flex-col my-[1vw] gap-[0.2vw]'>
          <h1 className='text-orange-400 text-[1.1vw] font-bold'>Urja Care</h1>
          <span>Book a complaint</span>
          <span>Escalate Your Request</span>
          <span>Product Registration</span>
          <span>Service Request Status</span>
          <span>Battery AMC</span>
          <span>Warranty Status</span>
        </div>
        <div className='flex flex-col my-[1vw] gap-[0.2vw]'>
          <h1 className='text-orange-400 text-[1.1vw] font-bold'>Expertise</h1>
          <span>Technology</span>
          <span>Testing</span>
          <span>R & D</span>
          <span>Quality Control</span>
          <span>Applications</span>
        </div>
      </div>
      <div className='flex flex-col w-1/4 px-[1.2vw]'>
        <div className='flex flex-col my-[1vw] gap-[0.2vw]'>
          <h1 className='text-orange-400 text-[1.1vw] font-bold'>Media</h1>
          <span>Press Releases</span>
          <span>Events & Exhibitions</span>
          <span>Awards & recognition</span>
          <span>Media Coverage</span>
          <span>TV Commercials</span>
        </div>
        <div className='flex flex-col my-[1vw] gap-[0.2vw]'>
          <h1 className='text-orange-400 text-[1.1vw] font-bold'>Blog</h1>
          <span>Contact Us</span>
          <span>Store Locator</span>
          <span>Post a Query</span>
          <span>Okaya Intra Site</span>
        </div>
      </div>
      <div className='flex flex-col w-1/4 gap-[1vw] text-[1.1vw] px-[1.2vw]'>
        <div className='text-orange-400 font-bold'>
          <span className=''>Follow Us</span>
          <div className='flex mt-[1vw] gap-[2vw]'>
          <AiOutlineTwitter/>
          <FaLinkedinIn/>
          <FaFacebookF/>
          <TfiYoutube/>
          </div>
        </div>
        <div>
          <span className='text-orange-400 font-bold '>Subscribe to our Newsletter</span>
          <div className='mt-[1vw]'>
            <input placeholder='enter your email' className='bg-white p-[0.4vw]'/>
            <button className='bg-orange-400 text-white ml-[0.8vw] drop-shadow-md px-[1vw] py-[0.5vw]'>Submit</button>
          </div>
        </div>
        <div>
          <div className='text-orange-400 font-bold'>Looking to buy a battery ?</div>
          <button>Quick Buy</button>
        </div>
      </div>
    </div>

    <div className='flex justify-center bg-gray-300 text-[#404041] py-[0.4vw] items-center'>
      All right reserved @ Urja Kendra pvt. ltd. 2022
    </div>
    </div>
  )
}

export default Footer
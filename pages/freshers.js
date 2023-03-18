/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Router from 'next/router'
import Banner from "../components/Banner"
const freshers = () => {
    return (
        <div className='text-gray-700 mt-[8vh] md:mt-[6.9vw] bg-gray-100'>
          
            <Banner pic={"https://www.tatapower.com/images/fresher-header1366.jpg"}/>
            <div className='mt-[7vh] md:mt-[7vw] pb-[5vh] md:pb-[5vw] space-y-[2vh] md:space-y-[2vw] leading-relaxed text-center mx-[3vw]'>
                
                <p className='font-semibold text-lg'>To apply with us, follow the links below to register and apply for an open position.</p>
                <button onClick={()=>Router.push("/registration")} class="flex mx-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded md:text-lg">Register</button>
            </div>
        </div>
    )
}

export default freshers
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Slide } from 'react-reveal'
const Letushelpyou = () => {
  return (
    <div className='bg-gray-100 text-sm md:text-base pb-12'>
        <h1 className='pt-12 mb-[3vh] md:mb-[3vw] text-center text-orange-500 border-b-2 md:border-b-4 w-fit mx-auto border-orange-500 pb-2 text-3xl md:text-4xl font-bold'>LET US HELP YOU</h1>
        <Slide bottom cascade>
        <div className='flex flex-col md:flex-row'>
            <div className='flex md:w-1/3 mx-[3vh] md:mx-[3vw] flex-col justify-start items-center px-[2vh] md:px-[2vw] text-center gap-[1vh] md:gap-[1vw]'>
                <img src='/warrenty-n.png' alt='logo'/>
                <h1 className='text-lg md:text-xl uppercase font-semibold'>Warranty Registration</h1>
                <p className='font-semibold text-gray-600 tracking-wider'>Register your Urja Global Product online for complete peace of mind anytime, anywhere!</p>
            </div>
            <div className='flex md:w-1/3 mx-[3vh] md:mx-[3vw] flex-col justify-start items-center px-[2vh] md:px-[2vw] text-center gap-[1vh] md:gap-[1vw]'>
                <img src='/support-n.png' alt='logo'/>
                <h1 className='text-lg md:text-xl uppercase font-semibold'>Service Support</h1>
                <p className='font-semibold text-gray-600 tracking-wider'>Contact us for inquiries about product purchase and order, or feedback and complaints.</p>
            </div>
            <div className='flex md:w-1/3 mx-[3vh] md:mx-[3vw] flex-col justify-start items-center px-[2vh] md:px-[2vw] text-center gap-[1vh] md:gap-[1vw]'>
                <img src='/dealer-location-n.png' alt='logo'/>
                <h1 className='text-lg md:text-xl uppercase font-semibold'>Dealer Locator</h1>
                <p className='font-semibold text-gray-600 tracking-wider'>Find your nearest Urja Global dealer.</p>
            </div>
        </div>
        </Slide>
    </div>
  )
}

export default Letushelpyou
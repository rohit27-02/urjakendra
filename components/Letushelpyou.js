/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Slide } from 'react-reveal'
const Letushelpyou = () => {
  return (
    <div className='bg-gray-100 text-base pb-12'>
        <h1 className='pt-12 mb-[3vw] text-center text-orange-500 border-b-4 w-fit mx-auto border-orange-500 pb-2 text-4xl font-bold'>LET US HELP YOU</h1>
        <Slide bottom cascade>
        <div className='flex'>
            <div className='flex w-1/3 flex-col justify-center items-center px-[2vw] text-center gap-[1vw]'>
                <img src='/warrenty-n.png' alt='logo'/>
                <h1 className='text-xl uppercase font-semibold'>Warranty Registration</h1>
                <p className='font-semibold text-gray-600 tracking-wider'>Register your Urja Global Product online for complete peace of mind anytime, anywhere!</p>
            </div>
            <div className='flex w-1/3 flex-col justify-center items-center px-[2vw] text-center gap-[1vw]'>
                <img src='/support-n.png' alt='logo'/>
                <h1 className='text-xl uppercase font-semibold'>Service Support</h1>
                <p className='font-semibold text-gray-600 tracking-wider'>Contact us for inquiries about product purchase and order, or feedback and complaints.</p>
            </div>
            <div className='flex w-1/3 flex-col justify-center items-center px-[2vw] text-center gap-[1vw]'>
                <img src='/dealer-location-n.png' alt='logo'/>
                <h1 className='text-xl uppercase font-semibold'>Dealer Locator</h1>
                <p className='font-semibold text-gray-600 tracking-wider'>Find your nearest Urja Global dealer.</p>
            </div>
        </div>
        </Slide>
    </div>
  )
}

export default Letushelpyou
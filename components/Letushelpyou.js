/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Letushelpyou = () => {
  return (
    <div className='bg-gray-100 pb-[4vw]'>
        <h1 className='pt-[6vw] pb-[3vw] text-center text-[2.5vw] font-bold'>Let Us Help You</h1>
        <div className='flex'>
            <div className='flex w-1/3 flex-col justify-center items-center px-[2vw] text-center gap-[1vw]'>
                <img src='https://www.livguard.com/img/warrenty-n.png' alt='logo'/>
                <h1 className='text-[1.5vw] font-semibold'>Warranty Registration</h1>
                <p className='font-semibold text-gray-600 tracking-wider'>Register your Urja Global Product online for complete peace of mind anytime, anywhere!</p>
            </div>
            <div className='flex w-1/3 flex-col justify-center items-center px-[2vw] text-center gap-[1vw]'>
                <img src='https://www.livguard.com/img/support-n.png' alt='logo'/>
                <h1 className='text-[1.5vw] font-semibold'>Service Support</h1>
                <p className='font-semibold text-gray-600 tracking-wider'>Contact us for inquiries about product purchase and order, or feedback and complaints.</p>
            </div>
            <div className='flex w-1/3 flex-col justify-center items-center px-[2vw] text-center gap-[1vw]'>
                <img src='https://www.livguard.com/img/dealer-location-n.png' alt='logo'/>
                <h1 className='text-[1.5vw] font-semibold'>Dealer Locator</h1>
                <p className='font-semibold text-gray-600 tracking-wider'>Find your nearest Urja Global dealer.</p>
            </div>
        </div>
    </div>
  )
}

export default Letushelpyou
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Letushelpyou from '../components/Letushelpyou'
import { Slide } from 'react-reveal'
const Product = ({title}) => {
  return (
    <div className='mt-[6.9vw] text-base'>
      <div className='h-[50vh] overflow-hidden'>
        <img src='/battery banner.png' alt='banner-image' />
      </div>
      <div className='bg-gray-100 overflow-hidden relative'>
        <img src='/background.jpg' className='absolute grayscale opacity-10' alt='background'/>
        <h1 className='text-4xl font-bold text-center uppercase border-b-4 pb-3 border-orange-500 w-fit mx-auto text-orange-500 py-[3vw]'>{title}</h1>
        <div className='relative'>
          <Slide bottom><img className='absolute left-[12vw] w-1/3' src='/battery image.png' alt='left-pic'/></Slide>
          
          <Slide bottom cascade><div className='flex flex-col mt-[2vw] pb-[6vw] items-end'>
          <h1 className='text-2xl w-1/3 font-bold uppercase'>Battery<br></br> Specification</h1>
          <div className='w-[9vw] mt-[1vw] h-[0.5vw]  bg-orange-500 rounded-full mx-[24vw]'></div>
            <div className='flex w-1/3 my-4 items-center'>
              <div>
                <h1 className='uppercase text-xl font-bold'>Warranty</h1>
                <p className='font-medium '>Warranty - 6 Months</p>
              </div>
            </div>
            <div className='flex w-1/3 my-4 items-center'>
              <div>
                <h1 className='uppercase text-xl font-bold'>Capacity</h1>
                <p className='font-medium '>Capacity – 100 Ah @ C</p>
              </div>
            </div>
            <div className='flex w-1/3 my-4 items-center'>
              <div>
                <h1 className='uppercase text-xl font-bold'>Dimensions</h1>
                <p className='font-medium '>410 x 175 x 229</p>
              </div>
            </div>
            <div className='flex w-1/3 my-4 items-center'>
              <div>
                <h1 className='uppercase text-xl font-bold'>Polarity</h1>
                <p className='font-medium '>L</p>
              </div>
            </div>
          </div></Slide>
        </div>
      </div>
      <div>
        <h1 className='py-[3vw] text-4xl text-center font-bold text-orange-500 border-b-4 border-orange-500 mb-8 pb-3 w-fit uppercase mx-auto'>Product Description</h1>
        <div className='flex justify-between px-[8vw] gap-[0.5vw] pb-[2vw]'>
          <p className='tracking-wide text-justify mx-10 mt-12 leading-[2vw] font-semibold text-gray-600 '>Urja battery is specially engineered to suit the requirements of the e-rickshaws. The superior tubular battery has been designed to guarantee enormous power, durability and safety on all types of terrains. A unique balance of advanced grid design and innovative technology ensure high mileage resulting in more life and even more profit. E-Shakti and is environmentally friendly and promises you a longer battery life.</p>
          <img className='w-1/3' src='https://www.livguard.com/product-detail/img/E-Shakti-1500-1550.jpg' alt='description-image'/>
        </div>
      </div>
      <Letushelpyou/>
    </div>
  )
}

export default Product
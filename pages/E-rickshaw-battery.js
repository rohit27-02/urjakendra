/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Letushelpyou from '../components/Letushelpyou'

const Erickshawbattery = () => {
  return (
    <div className='mt-[6.9vw]'>
      <div className='h-[50vh] overflow-hidden'>
        <img src='/battery.png' alt='banner-image' />
      </div>
      <div className='bg-gray-100'>
        <h1 className='text-[2.5vw] font-bold text-center text-orange-500 py-[3vw]'>E-Rickshaw Battery</h1>
        <div>
          <h1 className='text-[2.5vw] font-bold mx-[2vw]'>Battery Specification</h1>
          <div className='w-[9vw] mt-[1vw] h-[0.5vw] bg-orange-500 rounded-full mx-[2vw]'></div>
          <div className='flex flex-wrap w-4/6 mt-[2vw] pb-[10vw] mx-[3vw]'>
            <div className='flex w-1/2 my-[1vw] items-center'>
              <img src='https://www.livguard.com/img/new-warrenty-icon.png' alt='logo' />
              <div>
                <h1 className='text-[2vw] font-bold'>Warranty</h1>
                <p className='text-[1.5vw] '>Warranty - 6 Months</p>
              </div>
            </div>
            <div className='flex w-1/2 my-[1vw] items-center'>
              <img src='https://www.livguard.com/img/new-capicty-icon.png' alt='logo' />
              <div>
                <h1 className='text-[2vw] font-bold'>Capacity</h1>
                <p className='text-[1.5vw] '>Capacity – 100 Ah @ C</p>
              </div>
            </div>
            <div className='flex w-1/2 my-[1vw] items-center'>
              <img src='https://www.livguard.com/img/new-technology-icon.png' alt='logo' />
              <div>
                <h1 className='text-[2vw] font-bold'>Dimensions</h1>
                <p className='text-[1.5vw] '>410 x 175 x 229</p>
              </div>
            </div>
            <div className='flex w-1/2 my-[1vw] items-center'>
              <img src='https://www.livguard.com/img/new-dimension-icon.png' alt='logo' />
              <div>
                <h1 className='text-[2vw] font-bold'>Polarity</h1>
                <p className='text-[1.5vw] '>L</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='py-[3vw] text-[2.5vw] text-center font-bold'>Product Description</h1>
        <div className='flex px-[2vw] gap-[0.5vw] pb-[2vw]'>
          <p className='tracking-widest leading-[2vw] font-semibold text-gray-600 text-justify mt-[1vw]'>Urja battery is specially engineered to suit the requirements of the e-rickshaws. The superior tubular battery has been designed to guarantee enormous power, durability and safety on all types of terrains. A unique balance of advanced grid design and innovative technology ensure high mileage resulting in more life and even more profit. E-Shakti and is environmentally friendly and promises you a longer battery life.</p>
          <img src='https://www.livguard.com/product-detail/img/E-Shakti-1500-1550.jpg' alt='description-image'/>
        </div>
      </div>
      <Letushelpyou/>
    </div>
  )
}

export default Erickshawbattery
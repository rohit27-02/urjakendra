/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Banner = ({ pic, title }) => {
  return (
    <div className='md:mt-[6.9vw] h-[32.5vw] w-full overflow-hidden'>
      <img className='w-full object-cover h-full' src={pic} alt="banner-image" />
      <h1 className='absolute top-[20vw] text-5xl font-semibold drop-shadow-lg text-white w-full text-center'>{title}</h1>
    </div>
  )
}

export default Banner
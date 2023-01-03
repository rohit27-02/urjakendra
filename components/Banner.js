/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Banner = ({pic,title}) => {
  return (
    <div className='md:mt-[7vw] h-[35vw] overflow-hidden'>
        <img src={pic} alt="banner-image"/>
        {/* <h1 className='absolute top-[25vw] text-[3.5vw] font-bold text-orange-400 w-full text-center'>{title}</h1> */}
    </div>
  )
}

export default Banner
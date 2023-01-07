/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Letushelpyou from '../components/Letushelpyou'
import Router from 'next/router'
import { Slide } from 'react-reveal'
const Batteries = () => {
    return (
        <div className='mt-[6.9vw] pb-[4vw] bg-gray-100'>
            <div className='h-[50vh] overflow-hidden'>
                <img src='/battery.png' alt='banner-image' />
            </div>

            <div className='text-center px-[8vw] font-semibold my-[4vw] space-y-[1.5vw]'>
                <h1 className='text-3xl font-bold'>URJA BATTERIES</h1>
                <p className='text-gray-600 tracking-wider leading-relaxed'>Do you all remember the time when Tuk-Tuks or Tempos were the cheapest mode of commutation in some tier 1 and major tier 2 cities? People always prefer riding them for short distances in low price. Then came the population and pollution jump. Their place was taken by E-rickshaws which are environment friendly and serves the same purpose. These new age battery operated E-Rickshaws are the vehicle leaders for a better future. </p>
            </div>
            <Slide bottom cascade><div className='flex justify-center font-semibold'>
                <div onClick={() => Router.push("/E-rickshaw-battery")} className='scale-90 bg-white hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer p-[1.5vw] text-center mx-[2vw]'>
                    <h1 className='text-[1.5vw] font-semibold'>E-Rickshaw Battery</h1>
                    <img src='https://www.livguard.com/img/product/automotive-batteries/ERiksha/E-shakti-ER-1500.png' alt='battery-image' />
                    <p>
                        <div>Capacity - 100Ah @ C</div>
                        <div>Warranty - 6 Months</div>
                    </p>
                </div>
                <div onClick={() => Router.push("/Inverter-battery")} className='scale-90 bg-white hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer p-[1.5vw] text-center mx-[2vw]'>
                    <h1 className='text-[1.5vw] font-semibold'>Inverter Battery</h1>
                    <img src='https://www.livguard.com/img/product/automotive-batteries/ERiksha/E-shakti-ER-1500.png' alt='battery-image' />
                    <p>
                        <div>Capacity - 100Ah @ C</div>
                        <div>Warranty - 6 Months</div>
                    </p>
                </div>
                <div onClick={() => Router.push("/Solar-battery")} className='scale-90 bg-white hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer p-[1.5vw] text-center mx-[2vw]'>
                    <h1 className='text-[1.5vw] font-semibold'>Solar Battery</h1>
                    <img src='https://www.livguard.com/img/product/automotive-batteries/ERiksha/E-shakti-ER-1500.png' alt='battery-image' />
                    <p>
                        <div>Capacity - 100Ah @ C</div>
                        <div>Warranty - 6 Months</div>
                    </p>
                </div>
            </div>
            </Slide>
            <div className='flex relative overy flex-col justify-center items-center mt-[5vw] text-[2.5vw] bg-white py-[2vw] overflow-hidden font-bold space-y-[2vw]'>

                <h1>BATTERY VIDEO GALLERY</h1>
                <iframe width="711" height="400" src="https://www.youtube.com/embed/_Q3xF6I8eM8" title="ऊर्जा ग्लोबल की ई-स्कूटर असेंबलिंग यूनिट. Urja Global's E-Scooters Assembling Unit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='bg-white pb-[2vw] relative overflow-hidden'>
                <img className='absolute opacity-10' src='/background.jpg' alt='' />
                <Slide bottom cascade><div className='mt-[2vw] '>
                    <h1 className='text-[2.5vw] text-center font-bold'>Features</h1>
                    <div className='flex items-center my-[2vw] ml-[5vw] gap-[2vw]'>
                        <img src='https://www.livguard.com/img/fb-icon1.png' alt='feature-logo' />
                        <div>
                            <h1 className='font-semibold text-[1.5vw]'>Cranking Efficiency</h1>
                            <p>A perfect blend of the grid structure and plate chemistry ensures higher cranking power.</p>
                        </div>
                    </div>
                    <div className='flex items-center my-[2vw] ml-[5vw] gap-[2vw]'>
                        <img src='https://www.livguard.com/img/fb-icon3.png' alt='feature-logo' />
                        <div>
                            <h1 className='font-semibold text-[1.5vw]'>Higher Saftey Standard</h1>
                            <p>Specially engineered with flame arresters at venting locations to ensure high-level safety</p>
                        </div>
                    </div>
                    <div className='flex items-center my-[2vw] ml-[5vw] gap-[2vw]'>
                        <img src='https://www.livguard.com/img/fb-icon2.png' alt='feature-logo' />
                        <div>
                            <h1 className='font-semibold text-[1.5vw]'>Low Maintenance</h1>
                            <p>Designed to reduce water loss and increase efficiency.</p>
                        </div>
                    </div>
                    <div className='flex items-center my-[2vw] ml-[5vw] gap-[2vw]'>
                        <img src='https://www.livguard.com/img/fb-icon4.png' alt='feature-logo' />
                        <div>
                            <h1 className='font-semibold text-[1.5vw]'>Designed For Long Life</h1>
                            <p>Robust Grid Structure and Double Clad Separation offers long life to our batteries.

                            </p>
                        </div>
                    </div>

                </div>
                </Slide>
            </div>
            <Letushelpyou />
        </div>
    )
}

export default Batteries
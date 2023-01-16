/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Banner from '../components/Banner'
import {BsArrowRight} from "react-icons/bs"
import Router from 'next/router'
const ourleadership = () => {
    return (
        <div className=' md:text-center text-gray-600 leading-relaxed font-medium tracking-wide bg-gray-100'>
            <Banner pic={"https://www.tatapower.com/images/leadership-overview_banner_laptop.jpg"} title={"OUR LEADERSHIP"} />
            <div className='md:px-32 mt-16 px-6'>
                <h1 className='text-3xl md:text-4xl font-bold md:mx-20'>Tata Power, the largest integrated power company in India,
                    is built on trust and transparency.</h1>
                <p className='my-8'>Be it in low-cost energy production or reduction of carbon emission, the company holds unparalleled leadership. We create value through nurturing and selfless contribution to the community. Our strong leadership is driven by people, for people, with people. From stakeholders to customers, from employees to suppliers, we care for each other.</p>
                <p style={{fontFamily:"'Montez',cursive"}} className="font-bold text-7xl">&quot;Leadership with care&quot;</p>
                <p className='mt-8 mb-10 text-5xl font-bold text-orange-500'>is in our DNA</p>
                <p>Our leaders are talented and experienced visionaries who believe in unlocking people&apos;s potential to help them succeed and emerge as performers in their field. Get to know more about the Chairman, Board of Directors, Key Management Personnel and composition of Board Committees.</p>
                <div className='flex flex-col md:flex-row py-16 items-center  justify-center gap-4'>
                    <div onClick={()=>Router.push("/board-of-directors")} className='rounded-2xl relative overflow-hidden cursor-pointer'>
                        <img className='hover:scale-110 transition-all duration-300 ' src='https://www.tatapower.com/images/leadership-overview-pic1.jpg' alt='feature' />
                        <h1 className='absolute bottom-14 text-white text-lg font-bold px-12'>Board of Directors</h1>
                        <BsArrowRight className='absolute bottom-4 mx-28 text-white text-4xl '/>
                    </div>
                    <div onClick={()=>Router.push("/key-management-personal")} className='rounded-2xl relative overflow-hidden cursor-pointer'>
                        <img className='hover:scale-110 transition-all duration-300 ' src='https://www.tatapower.com/images/leadership-overview-pic2.jpg' alt='feature' />
                        <h1 className='absolute bottom-14 text-white text-lg font-bold px-12'>Key Management Personnel</h1>
                        <BsArrowRight className='absolute bottom-4 mx-28 text-white text-4xl '/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ourleadership
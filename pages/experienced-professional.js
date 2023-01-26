/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Router from 'next/router'
import Banner from "../components/Banner"
const freshers = () => {
    return (
        <div className='text-gray-700 mt-[8vh] md:mt-[6.9vw] bg-gray-100'>
          
            <Banner pic={"https://www.tatapower.com/images/fresher-header1366.jpg"}/>
            <div className='mt-[7vh] md:mt-[7vw] pb-[5vh] md:pb-[5vw] space-y-[2vh] md:space-y-[2vw] leading-relaxed text-center mx-[3vw]'>
                {/* <h1 className='text-lg md:text-xl font-medium mb-[5vh] md:mb-[5vw] '>The liberalization of the power sector in India has paved way for new business opportunities and has redefined the nature of the power business. Envisioning the future and making the power sector creditworthy and capable of funding future investment needs, these reforms have opened arenas for new technologies.</h1>
                <p>In this new environment of opportunities, Tata Power with its competitive edge of resources is playing a key role in the transformation process and aims to emerge as a most admired integrated Power and Energy company offering uninterrupted, affordable quality products and services to all customers at competitive costs, with international standards of customer care - thereby delivering sustainable value to all stakeholders.</p>
                <p>To achieve this vision we at Tata Power believe that investment in people and their potential is one of the greatest investments we can make. For this, we are constantly in search of talent that can perform excellently with determination and win.</p>
                <p>Our HR systems and policies are thereby designed to unleash the latent capability of our people by fostering continuous learning and a performance-based culture where our people have the opportunity to grow and succeed and realize their true potential while delivering high-quality services.</p>
                <p>Merit and other qualifying criteria being equal, preference shall be given to SC/ST candidates.</p> */}
                <p className='font-semibold text-lg'>To apply with us, follow the links below to register and apply for an open position.</p>
                <button onClick={()=>Router.push("/registration")} class="flex mx-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded md:text-lg">Register</button>
            </div>
        </div>
    )
}

export default freshers
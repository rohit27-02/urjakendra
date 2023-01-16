/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Banner from '../components/Banner'

const company = () => {
  return (
    <div className='overflow-hidden text-sm md:text-base'>
        <Banner pic={"/Group 108.png"} title={"COMPANY OVERVIEW"} />
        <img src='/background.jpg' className='absolute grayscale opacity-0 md:opacity-10 h-[71vw] -z-30' alt='background'/>
        <div className='py-[4vh] md:py-[4vw] md:text-center '>
            <h1 className='text-orange-500 font-bold mx-auto text-3xl md:text-4xl border-b-2 md:border-b-4 border-gray-700 pb-2 md:pb-[1vw] mb-4 md:mb-[1vw] w-fit'>URJA GLOBAL LIMITED</h1>
            <p className='text-xl px-5 md:px-0 md:text-2xl font-semibold'>URJA GLOBAL LIMITED IS IN ONE OF INDIA&apos;S LEADING RENEWABLE ENERGY DEVELOPERS</p>
        </div>
        <div className='relative overflow-hidden md:gap-[6vw] pb-[4vw] flex flex-col md:flex-row font-medium'>
        
            <div className='md:w-3/5 space-y-5 leading-loose tracking-wide md:text-justify mx-6 md:mx-0 md:ml-[4vw]'>
                <p>Urja Global Limited is in one of India’s leading Renewable Energy developers and operators. Urja is engaged in design, consultancy, integration, supply, installation, commissioning & maintenance of off-grid and grid connected Solar Power Plants. We are approved Channel Partners of Ministry of New and Renewable Energy (MNRE), Govt. of India.</p>
                <p>We at Urja are committed to providing world-class services to rapidly develop rural India focusing on rural electrification especially in hilly areas, forest regions, deserts, islands, far flung villages, unmanned locations and other areas which require reliable and uninterrupted power supply.</p>
                <p>We own one of the largest sales/installation networks PAN India backed by our team.Urja Global Limited is promoted by the promoters group hailing from Rajasthan, India.</p>
                <p>With more than two decades of experience, they have established as one of the country’s leading industrial companies and a strong well-diversified conglomerate which is active in: Renewable Energy, IT&ITES, Tours & Travels, and Education & Training having presence across the globe.</p>
                <p>We assure customer’s satisfaction in terms of product quality and service. Urja offers outstanding quality varied Solar Products which makes use of green and clean energy simple viz. Solar Home Lighting Systems,Solar Lanterns, Solar Street Lighting Systems, Roof Top Systems, Solar PV Pannels with quality and standards conforming to ISO 9001 . All our Solar products range comply with MNRE standards.</p>
            </div>
            <div className='md:w-2/5 space-y-5 leading-loose md:text-justify tracking-wide mx-6 md:mx-0 md:mr-[4vw]'>
                <img className='drop-shadow-lg' src='/Mask Group 13.png' alt='e-power image'/>
                <p>Our team comprises of seasoned professionals with a proven track record in design and integration of off grid and grid connected solar projects.</p>
                
                <p>With a strong design and manufacturing back ground UGL has developed themselves as a leading manufacturer of Solar Energy Systems to cater to almost the complete range of customer requirements</p>
            </div>
        </div>
    </div>
  )
}

export default company
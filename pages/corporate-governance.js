/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Banner from '../components/Banner'
import Router from 'next/router'
const corporategovernance = () => {
    return (
        <div>
            <Banner pic={"https://www.tatapower.com/images/exchange_desk.jpg"} title="CORPORATE GOVERNANCE" />
            <div className='md:mx-28 mx-6 font-medium'>
                {/* <h1 className='text-5xl md:text-6xl font-bold w-fit mx-auto mt-14 md:mt-24 mb-14'><span style={{ fontFamily: "'Montez',cursive" }}>Corporate</span> <span className='text-orange-500'>Governance</span></h1>
                <p className='md:text-center text-gray-600'>The Companies philosophy on Corporate Governance aims to focus its energies and resources in creating and positively leveraging shareholders&apos; wealth, and at the same time, safeguarding the interests of all stakeholders. View our report on Corporate Governance, get acquainted with our familiarisation program for Independent Directors (ID) and our Terms and conditions for the appointment of Independent Directors (ID).</p> */}
                <div className='flex flex-col md:flex-row my-20 mx-4 md:mx-0 gap-8'>
                    <div className='drop-shadow-xl rounded-3xl text-gray-600 space-y-8 pb-28 overflow-hidden relative bg-white md:w-1/4 '>
                        <img className='w-full' src='https://www.tatapower.com/images/inv-download_img16.jpg' alt='sub-category'/>
                        <h1 className='text-lg font-semibold px-10 text-center'>Overview</h1>
                        <p className='text-center px-10 text-sm tracking-wide'>An overall insight of the Company’s philosophy on Corporate Governance with a focus on enhancement of long-term value creation for all stakeholders without compromising on integrity, societal obligations, environment and regulatory compliances.</p>
                        <button onClick={()=>Router.push("/corporate-governance-report/1")} className='cursor-pointer bg-orange-500 px-6 rounded-full absolute left-[75px] bottom-8 py-3 text-white'>Know more</button>
                    </div>
                    <div className='drop-shadow-xl rounded-3xl text-gray-600 space-y-8 pb-28 overflow-hidden relative bg-white md:w-1/4 '>
                        <img className='w-full' src='https://www.tatapower.com/images/inv-download_img16.jpg' alt='sub-category'/>
                        <h1 className='text-lg font-semibold px-10 text-center'>Report on Corporate Governance</h1>
                        <p className='text-center px-10 text-sm tracking-wide'>The Company has adopted Governance Guidelines to cover aspects related to composition and role of the Board, Chairman and Directors, Board diversity, Director’s term, retirement age and committees of the Board.</p>
                        <a onClick={()=>Router.push("/corporate-governance-report/1#corporate",undefined,{scroll:true})} className='cursor-pointer bg-orange-500 px-6 rounded-full absolute left-[75px] bottom-8 py-3 text-white'>Know more</a>
                    </div>
                    <div className='drop-shadow-xl rounded-3xl text-gray-600 space-y-8 pb-28 overflow-hidden relative bg-white md:w-1/4 '>
                        <img className='w-full' src='https://www.tatapower.com/images/inv-download_img18.jpg' alt='sub-category'/>
                        <h1 className='text-lg font-semibold px-10 text-center'>Familiarisation program for ID</h1>
                        <p className='text-center px-10 text-sm tracking-wide'>Tata Power has a structured programme for orientation and training of Directors at the time of their joining so as to enable them to understand the nature of the industry in which the Company operates, business model of the Company and roles, rights and responsibilities of independent directors.</p>
                        <button onClick={()=>Router.push("/corporate-governance-report")} className='cursor-pointer bg-orange-500 px-6 rounded-full absolute left-[75px] bottom-8 py-3 text-white'>Know more</button>
                    </div>
                    <div className='drop-shadow-xl rounded-3xl text-gray-600 space-y-8 pb-28 overflow-hidden relative bg-white md:w-1/4 '>
                        <img className='w-full' src='https://www.tatapower.com/images/inv-download_img19.jpg' alt='sub-category'/>
                        <h1 className='text-lg font-semibold px-10 text-center'>T&C for appointment of ID</h1>
                        <p className='text-center px-10 text-sm tracking-wide'>In accordance with the requirements of the Securities and Exchange Board of India (Listing Obligations and Disclosure Requirements) Regulations, 2015 (&#34;SEBI LODR&#34;), here are the terms and conditions of appointment for the Company&apos;s Independent Directors.</p>
                        <button onClick={()=>Router.push("/corporate-governance-report/1/#5")} className='cursor-pointer bg-orange-500 px-6 rounded-full absolute left-[75px] bottom-8 py-3 text-white'>Know more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default corporategovernance
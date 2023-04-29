/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Router from 'next/router'
const Financials = () => {

    return (
        <div className='mt-[7vw]'>
            <div className=' flex flex-col justify-center items-center py-20 gap-5'>
                <h1 className='text-3xl text-orange-500 font-semibold'>Urja Global Ltd financials</h1>
                <p className='drop-shadow-sm'>One of India’s leading Non Renewable and Renewable Energy developers and operators.</p>
                <div className='flex gap-5'>
                    <button onClick={()=>Router.push("/urja-financials")} className='bg-orange-500 px-6 py-3 rounded-full text-white font-semibold'>URJA GLOBAL LTD</button>
                    <button onClick={()=>Router.push("/financial-of-subsidiary-companies")} className='bg-orange-500 px-6 py-3 rounded-full text-white font-semibold'>FINANCIALS OF SUBSIDIARY COMAPNIES</button>
                </div>
            </div>

        </div>
    )
}

export default Financials
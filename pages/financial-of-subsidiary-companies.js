import React from 'react'
import Router from 'next/router'
const financialofsubsidiarycompanies = () => {
  return (
    <div className='mt-[7vw]'>
    <div className=' flex flex-col justify-center items-center py-20 gap-5'>
        <h1 className='text-3xl text-orange-500 font-semibold'>Financials of Subsidiary Companies</h1>
        <p className='drop-shadow-sm'>One of India’s leading Non Renewable and Renewable Energy developers and operators.</p>
        <div className='flex gap-5'>
            <button onClick={()=>Router.push("/urja-batteries")} className='bg-orange-500 px-6 py-3 rounded-full text-white font-semibold'>URJA BATTERIES</button>
            <button onClick={()=>Router.push("/sahu")} className='bg-orange-500 px-6 py-3 rounded-full text-white font-semibold'>SAHU</button>
            <button onClick={()=>Router.push("/urja-digital")} className='bg-orange-500 px-6 py-3 rounded-full text-white font-semibold'>URJA DIGITAL WORLD LIMITED.</button>
        </div>
    </div>

</div>
  )
}

export default financialofsubsidiarycompanies
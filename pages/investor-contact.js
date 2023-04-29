import React from 'react'

const investor = () => {
  return (
    <div>
      <div className='bg-gray-100 w-[1200px] font-sans text-gray-800 mx-auto drop-shadow-sm mt-[7vw] py-6 px-5  mb-28'>
        <h1 className='border-b-2 py-1 border-gray-800 text-2xl text-orange-500 font-semibold border-dotted'>Investor Contacacts</h1>
        <div className='py-10 grid grid-flow-row grid-cols-2'>
          <div className='space-y-1 mb-10'>
            <h1 className='text-xl my-4 font-bold'>Registrar & Share Transfer Agent details</h1>
            <p>Urja Global Limited</p>
            <p>M/s Alankit Assignments Limited</p>
            <p>4E/2 Jhandewalan Extension,</p>
            <p>New Delhi – 110055</p>
            <p>Phone: +91-11-33591000 / 42541234 / 23541234</p>
            <p>E-mail: <a className='text-blue-700 hover:underline underline-offset-4 hover:text-blue-900' href='mailto:einward.ris@kfinetch.com'>info@alankit.com</a></p>
            <p>Website: <a className='text-blue-700 hover:underline underline-offset-4 hover:text-blue-900' href='https://urjakendra.com'>www.alankit.com</a></p>
          </div>
          <div className='space-y-1 mb-10 '>
            <h1 className='text-xl my-4 font-bold'>Contact for Compliance Matters</h1>
            <p>Priyanka Shekhawat</p>
            <p>Company Secretary & Compliance Officer</p>
            <p>Urja Global Limited</p>
            <p>487/63, 1st Floor, National Market</p>
            <p>Peeragarhi, New Delhi-110087</p>
            <p>Phone: 011-45588275</p>
            <p>Compliance officer:<a className='text-blue-700 hover:underline underline-offset-4 hover:text-blue-900' href='mailto:compliance@cleducate.com'>cs@urjaglobal.in</a></p>
          </div>
          <div className='space-y-1 mb-10 '>
            <h1 className='text-xl my-4 font-bold'>Contact for investor grievance redressal:</h1>
            <a className='text-blue-700 hover:underline underline-offset-4 hover:text-blue-900' href='mailto:compliance@cleducate.com'>cs@urjaglobal.in</a>
            <p>Phone: 011-45588275</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default investor
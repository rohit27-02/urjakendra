import React from 'react'

const investor = () => {
  return (
    <div>
    <div className='bg-gray-100 w-[1200px] font-sans text-gray-800 mx-auto drop-shadow-sm mt-[7vw] py-6 px-5  mb-28'>
        <h1 className='border-b-2 py-1 border-gray-800 text-2xl text-orange-500 font-semibold border-dotted'>Investor Contacacts</h1>
        <div className='py-10 grid grid-flow-row grid-cols-2'>
            <div className='space-y-1 mb-10'> 
                <h1 className='text-xl my-4 font-bold'>Registrar & Share Transfer Agent details</h1>
                <p>KFin Technologies Limited</p>
                <p>Selenium Tower B</p>
                <p>Plot 31-32, Gachibowli, Financial District</p>
                <p>Nanakramguda, Hyderabad 500 032, Telangana, India</p>
                <p>Toll Free Number: 1 800 309 4001 / WhatsApp: 9100 094 099</p>
                <p>E-mail: <a className='text-blue-700 hover:underline underline-offset-4 hover:text-blue-900' href='mailto:einward.ris@kfinetch.com'>einward.ris@kfinetch.com</a></p>
                <p>Website: <a className='text-blue-700 hover:underline underline-offset-4 hover:text-blue-900' href='https://urjakendra.com'> https://urjakendra.com</a></p>
                <p>SEBI Registration Number: INR000000221</p>
            </div>
            <div className='space-y-1 mb-10 '>
            <h1 className='text-xl my-4 font-bold'>Contact for Compliance Matters</h1>
            <p>Ms. Rachna Sharma</p>
            <p>Company Secretary and Compliance Officer</p>
            <p>Tel: 011-41281100</p>
            <p>Compliance officer:<a className='text-blue-700 hover:underline underline-offset-4 hover:text-blue-900' href='mailto:compliance@cleducate.com'>compliance@cleducate.com</a></p>
            </div>
            <div className='space-y-1 mb-10 '>
            <h1 className='text-xl my-4 font-bold'>Contact for Investor Services contact:</h1>
            <a className='text-blue-700 hover:underline underline-offset-4 hover:text-blue-900' href='mailto:investors@careerlauncher.com'>investors@careerlauncher.com</a>
            <p>Tel: 011-41281100</p>
            </div>
            <div className='space-y-1 mb-10 '>
            <h1 className='text-xl my-4 font-bold'>Contact for investor grievance redressal:</h1>
            <a className='text-blue-700 hover:underline underline-offset-4 hover:text-blue-900' href='mailto:compliance@cleducate.com'>compliance@cleducate.com</a>
            <p>Tel: 011-41281100</p>
            </div>
        </div>
        
    </div>
</div>
  )
}

export default investor
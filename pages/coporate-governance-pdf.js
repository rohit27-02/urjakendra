import React from 'react'

const coporategovernancepdf = () => {
    return (
        <div>
            <div className='bg-gray-100 w-[1000px] mx-auto drop-shadow-sm mt-[7vw] py-6 px-5  mb-10'>
                <h1 className='border-b-2 py-1 border-gray-800 text-xl text-orange-500 font-semibold border-dotted'>Corporate Governance</h1>
                <div>
                    <h2 className='py-2 font-semibold text-gray-700'>Archival Policy</h2>
                    <a title='Download pdf' className='text-gray-400 px-20 hover:underline underline-offset-4 hover:text-gray-800 cursor-pointer text-xs'>Archival Policy</a>
                </div>
                <div className='my-8'>
                    <h2 className='py-2 font-semibold text-gray-700'>Dividend Policy</h2>
                    <a title='Download pdf' className='text-gray-400 px-20 hover:underline underline-offset-4 hover:text-gray-800 cursor-pointer text-xs'>Dividend Policy</a>
                </div>
            </div>
        </div>
    )
}

export default coporategovernancepdf
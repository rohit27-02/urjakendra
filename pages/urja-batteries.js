/* eslint-disable @next/next/no-img-element */
import React from 'react'
import fs from 'fs'
import path from 'path';

const urjabatteries = ({pdfs}) => {
   
    return (
        <div>
            <div className='bg-gray-100 font-sans w-[1200px] mt-[7vw] mx-auto drop-shadow-sm  py-6 px-5  mb-28'>
                <h1 className='border-b-2 py-1 border-gray-800 text-2xl text-orange-500 font-semibold border-dotted'>Urja Batteries</h1>
                <div className='mx-4'>
                   {
                    pdfs.map((pdf)=>{
                        return  <div key={pdf} className='flex items-center font-semibold gap-4 py-4 my-4 border-b-2'>
                        <img height={"30px"} width={"30px"} className='' src='/pdf_icon.png' alt='pdf logo' />
                        <div>
                            <a href={"/"+"Website Update"+"/"+"2-FINANCIALS"+"/"+"2-Financial Results"+"/"+"Financials of subsdaries company"+"/"+"Urja battery"+"/"+pdf} className='cursor-pointer hover:underline underline-offset-4 hover:text-orange-500'>{pdf}</a>     
                        </div>
                    </div>
                    })
                   }
                   
                </div>
            </div>
        </div>
    )
}

export default urjabatteries
export async function getServerSideProps() {
    // Fetch data from external API
    let res = [];
    for (const file of fs.readdirSync(path.resolve("\public/Website Update/2-FINANCIALS/2-Financial Results/Financials of subsdaries company/Urja battery"))) {
        res = [...res, file]
    }
    return { props: { pdfs: res } }
}
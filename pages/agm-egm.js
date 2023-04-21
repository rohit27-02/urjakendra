/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

const Agmegm = () => {
    const YEARS = ["POSTAL BALLOT 2022", "AGM 2022", "AGM 2021", "AGM 2020", "AGM 2019", "AGM 2018", "AGM 2017"];
    const [notice, setnotice] = useState(true);
    const [active, setactive] = useState(YEARS[1]);
    return (
        <div>
            <div className='bg-gray-100 font-sans w-[1200px] mx-auto drop-shadow-sm mt-[7vw] py-6 px-5  mb-28'>
                <h1 className='border-b-2 py-1 border-gray-800 text-2xl text-orange-500 font-semibold border-dotted'>AGM/EGM/Postal Ballot</h1>
                <div className='mx-4'>
                    <div className='flex text-lg my-4 border-b-2 pb-2 border-orange-500'>
                        {YEARS.map((year) => { return <button onClick={(e) => setactive(e.currentTarget.id)} id={year} key={year} className={active == year ? " text-white bg-orange-500 px-4 py-2 rounded" : 'px-4 py-2 '}>{year}</button> })}
                    </div>
                    <div className='flex text-lg my-4 mx-4'>
                        <button onClick={()=>setnotice(true)} className={notice?"text-orange-500 pr-4 mr-4 border-r border-gray-800":'pr-4 mr-4 border-r border-gray-800'}>Notices</button>
                        <button onClick={()=>setnotice(false)} className={notice?'':"text-orange-500"}>Results</button>
                    </div>
                    <div className='flex items-center font-semibold gap-4 py-4 my-4 border-b-2'>
                        <img height={"30px"} width={"30px"} className='' src='/pdf_icon.png' alt='pdf logo' />
                        <div>
                            <p className='cursor-pointer hover:underline underline-offset-4 hover:text-orange-500'>Career Launcher signs up leading professor and M.Com graduate as MBA, CLAT and IPM test partner for Vasai Road-Mumbai</p>
                            <p>Date: <span className='font-normal text-sm'>November, 2022</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agmegm
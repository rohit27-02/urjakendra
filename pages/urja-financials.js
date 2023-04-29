/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

const Urjafinancials = () => {
    const YEARS = ["FY 2022-23","FY 2021-22", "FY 2020-21", "FY 2019-20", "FY 2018-19", "FY 2017-18", "FY 2016-17", "FY 2015-16", "FY 2014-15","FY 2013-14","FY 2012-13","FY 2011-12","FY 2010-11"];
    const [active, setactive] = useState(YEARS[0]);
    return (
        <div>
            <div className='bg-gray-100 font-sans w-[1200px] mt-[7vw] mx-auto drop-shadow-sm  py-6 px-5  mb-28'>
                <h1 className='border-b-2 py-1 border-gray-800 text-2xl text-orange-500 font-semibold border-dotted'>Financial Statements</h1>
                <div className='mx-4'>
                    <div className='flex flex-wrap  my-4'>
                        {YEARS.map((year) => { return <button onClick={(e) => setactive(e.currentTarget.id)} id={year} key={year} className={active == year ? "pr-4 mr-4 border-r border-gray-800 text-orange-500" : 'pr-4 mr-4 border-r border-gray-800'}>{year}</button> })}

                    </div>
                    <div className='flex items-center font-semibold gap-4 py-4 my-4 border-b-2'>
                        <img height={"30px"} width={"30px"} className='' src='/pdf_icon.png' alt='pdf logo' />
                        <div>
                            <a href={"/" + "Website Update" + "/" + "2-FINANCIALS" + "/" + "2-Financial Results"+"/"+"urja global limited" + "/" + active.replace(" 20"," ") + "/" + `Q1-${active.replace(" ","")}-FINANCIAL-RESULTS.pdf`} className='cursor-pointer hover:underline underline-offset-4 hover:text-orange-500'>Q1 {active} Financial Results</a>
                        </div>
                    </div>
                    <div className='flex items-center font-semibold gap-4 py-4 my-4 border-b-2'>
                        <img height={"30px"} width={"30px"} className='' src='/pdf_icon.png' alt='pdf logo' />
                        <div>
                            <a href={"/" + "Website Update" + "/" + "2-FINANCIALS" + "/" + "2-Financial Results"+"/"+"urja global limited" + "/" + active.replace(" 20"," ") + "/" + `Q2-${active.replace(" ","")}-FINANCIAL-RESULTS.pdf`} className='cursor-pointer hover:underline underline-offset-4 hover:text-orange-500'>Q2 {active} Financial Results</a>
                        </div>
                    </div>
                    <div className='flex items-center font-semibold gap-4 py-4 my-4 border-b-2'>
                        <img height={"30px"} width={"30px"} className='' src='/pdf_icon.png' alt='pdf logo' />
                        <div>
                            <a href={"/" + "Website Update" + "/" + "2-FINANCIALS" + "/" + "2-Financial Results"+"/"+"urja global limited" + "/" + active.replace(" 20"," ") + "/" + `Q3-${active.replace(" ","")}-FINANCIAL-RESULTS.pdf`} className='cursor-pointer hover:underline underline-offset-4 hover:text-orange-500'>Q3 {active} Financial Results</a>
                        </div>
                    </div>
                    <div className='flex items-center font-semibold gap-4 py-4 my-4 border-b-2'>
                        <img height={"30px"} width={"30px"} className='' src='/pdf_icon.png' alt='pdf logo' />
                        <div>
                            <a href={"/" + "Website Update" + "/" + "2-FINANCIALS" + "/" + "2-Financial Results"+"/"+"urja global limited" + "/" + active.replace(" 20"," ") + "/" + `Q4-${active.replace(" ","")}-FINANCIAL-RESULTS.pdf`} className='cursor-pointer hover:underline underline-offset-4 hover:text-orange-500'>Q4 {active} Financial Results</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Urjafinancials
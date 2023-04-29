/* eslint-disable @next/next/no-img-element */
import React,{useEffect,useState} from 'react'

const Annualreport = () => {
    const YEARS = ["2022-2023","2021-2022","2020-2021","2019-2020","2018-2019","2017-2018","2016-2017","2015-2016","2014-2015","2013-2014","2012-2013","2011-2012","2010-2011"];
    const [active, setactive] = useState(YEARS[0]);
    return (
        <div>
            <div className='bg-gray-100 font-sans w-[1200px] mx-auto drop-shadow-sm mt-[7vw] py-6 px-5  mb-28'>
                <h1 className='border-b-2 py-1 border-gray-800 text-2xl text-orange-500 font-semibold border-dotted'>Annual Reports</h1>
                <div className='mx-4'>
                    <div className='flex flex-wrap  my-4'>
                        {YEARS.map((year)=>{return <button onClick={(e)=>setactive(e.currentTarget.id)} id={year} key={year} className={active == year?"pr-4 mr-4 border-r border-gray-800 text-orange-500":'pr-4 mr-4 border-r border-gray-800'}>{year}</button>})}
                        
                    </div>
                    <div className='flex items-center font-semibold gap-4 py-4 my-4 border-b-2'>
                        <img height={"30px"} width={"30px"} className='' src='/pdf_icon.png' alt='pdf logo' />
                        <div>
                            <a  href={"/"+"Website Update"+"/"+"2-FINANCIALS"+"/"+"1-Annual Report"+"/"+active+"/"+`Annual-Report-${active}.pdf`} className='cursor-pointer hover:underline underline-offset-4 hover:text-orange-500'>Annual-Report-{active}</a>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Annualreport
/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'

const Financials = () => {
  const YEARS = ["FY 21-22","FY 20-21","FY 19-20","FY 18-19","FY 17-18","FY 16-17","FY 15-16","FY 14-15"];
  const [active, setactive] = useState(YEARS[0]);
  return (
      <div>
          <div className='bg-gray-100 font-sans w-[1200px] mx-auto drop-shadow-sm mt-[7vw] py-6 px-5  mb-28'>
              <h1 className='border-b-2 py-1 border-gray-800 text-2xl text-orange-500 font-semibold border-dotted'>Financial Statements</h1>
              <div className='mx-4'>
                  <div className='flex text-lg my-4'>
                      {YEARS.map((year)=>{return <button onClick={(e)=>setactive(e.currentTarget.id)} id={year} key={year} className={active == year?"pr-4 mr-4 border-r border-gray-800 text-orange-500":'pr-4 mr-4 border-r border-gray-800'}>{year}</button>})}
                      
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

export default Financials
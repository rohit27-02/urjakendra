import React,{useState} from 'react'
import Banner from '../components/Banner'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"
const Awardsaccolades = () => {
  const [i, seti] = useState(0);
  const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011]
  const awards = [{ id: "0", year: "2022", award: ["Greentech Safety Award 2006 under Platinum Category has been awarded to The Tata Power Co. Ltd., Jojobera, Jamshedpur.", "Trombay has achieved OHSAS 18001: 1999 (Occupational Health and Safety Assessment Series) certification, November 2005.", "Jojobera Thermal Power Station was awarded the Greentech Safety Award for Safety in Coal Based Power Sector-2006"] }]
  return (
    <div>
      <Banner pic={"https://www.tatapower.com/images/award-1920.jpg"} title="AWARDS & ACCOLADES" />
      <div>
        <div className='h-24 bg-lime-50 text-4xl flex py-2 gap-9 font-medium text-gray-400 border-b-2 items-end  px-20'>
          <MdArrowBackIosNew className='cursor-pointer text-8xl h-fit ' />
          <div className='gap-44 flex   overflow-hidden'>
            {Object.keys(years).map((year) => {
              return <div key={year} id={year} onClick={(e)=>{seti(year)}} style={{ fontFamily: "sans-serif" }} className=" cursor-pointer">{years[year]}
              </div>
            })}
          </div>
          <MdArrowForwardIos className='cursor-pointer text-8xl h-fit ' />
        </div>
        <div className='bg-gray-100 space-y-4 p-16'>
         <h1 className='text-3xl font-semibold text-orange-500'>{awards[i].year}</h1>
         {awards[i].award.map((award)=>{
          return <li key={award} className="text-gray-500 ml-4 tracking-wide font-medium">
            {award}
          </li>
         })}
        </div>
      </div>
    </div>
  )
}

export default Awardsaccolades
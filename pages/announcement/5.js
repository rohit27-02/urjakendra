/* eslint-disable @next/next/no-img-element */
import React, { Suspense,useEffect} from 'react'
const Investor = React.lazy(() => import('../../components/investor'));
import fs from 'fs'
import path from 'path';
import Router from 'next/router';

const Announcement = ({ pdfs }) => {
useEffect(() => {
   console.log(parseInt(Router.asPath.split("/")[2]))
   console.log(process.cwd())
}, []);
  return (
    <div className='mt-[8vh] md:mt-[7vw]'>
      <div className='h-[8vh] md:h-[8vw] overflow-hidden'><img src='/1.png' alt='top-banner' /></div>
      <div className='flex gap-[2vh] md:gap-[2vw] mt-[2vh] md:mt-[2vw] ml-[4vh] md:ml-[6vw] font-semibold'>
        <div id='previous' className='cursor-pointer underline underline-offset-[0.7vw] transition-all duration-200 ease-in-out hover:text-orange-500 text-sm md:text-[1.4vw]' onClick={(e)=>{parseInt(Router.asPath.split("/")[2])>1?Router.push(`/announcement/${parseInt(Router.asPath.split("/")[2]) - 1}`):""}}>Previous</div>
        <div id='next' className='cursor-pointer underline underline-offset-[0.7vw] transition-all duration-200 ease-in-out hover:text-orange-500 text-sm md:text-[1.4vw]' onClick={(e)=>{parseInt(Router.asPath.split("/")[2])<5?Router.push(`/announcement/${parseInt(Router.asPath.split("/")[2]) + 1}`):""}}>Next</div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Investor pdfs={pdfs} folder={"Announcement/5"} />
      </Suspense>
    </div>
  )
}

export default Announcement

export async function getServerSideProps() {

  let res = [];
  for (const file of fs.readdirSync(path.resolve(`\public/Announcement/5`))) {
    res = [...res, file];

  }

  return { props: { pdfs: res } }
}